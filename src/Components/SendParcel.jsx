import { useForm, useWatch } from 'react-hook-form'
import { useLoaderData, useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import UseAxiosSecure from './UseAxiosSecure'
import useAuth from '../Hooks/useAuth'
import { memo } from 'react'

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm()

  const axiosSecure = UseAxiosSecure()
  const { user } = useAuth()
  const serviceCenters = useLoaderData() || []
  
  const regionsDuplicate = serviceCenters.map(x => x.region)
  const regions = [...new Set(regionsDuplicate)]
  
  const senderRegion = useWatch({ control, name: 'senderRegion' })
  const receiverRegion = useWatch({ control, name: 'receiverRegion' })
  const navigate = useNavigate()

  const districtByRegion = (region) => {
    if (!region) return []
    const regionDistricts = serviceCenters.filter(x => x.region === region)
    return regionDistricts.map(d => d.district)
  }

  const handleSendParcel = (data) => {
    const isDocument = data.parcelType === "document"
    const isSameDistrict = data.senderDistrict === data.receiverDistrict
    const parcelWeight = parseFloat(data.parcelWeight)

    let cost = 0
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150
      } else {
        const minCharge = isSameDistrict ? 110 : 150
        const extraWeight = parcelWeight - 3 
        const extraCharge = isSameDistrict ? extraWeight * 40 : (extraWeight * 40) + 40
        cost = minCharge + extraCharge
      }
    }

    Swal.fire({
      title: "Are you sure?",
      text: `You will be charged ${cost} USD`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        data.cost = cost
        axiosSecure.post('/parcels', data).then(res => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Please pay",
              showClass: {
                popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `
              },
              hideClass: {
                popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `
              }
            })
            navigate('/dashboard/my-parcels')
          }
        })
      }
    })
  }

  return (
    <div className='card bg-base-100 w-full shadow-2xl p-10 mt-10 max-sm:max-w-sm'>
      <h1 className='text-5xl font-bold'>Send a Parcel</h1>

      <form onSubmit={handleSubmit(handleSendParcel)} className='mt-12 p-4 text-black'>
        {/* Parcel Type */}
        <div className='flex gap-4 mb-4'>
          <label className='label cursor-pointer gap-2'>
            <input 
              type="radio" 
              value='document' 
              {...register('parcelType', { required: true })} 
              className="radio radio-success" 
              defaultChecked 
            />
            Document
          </label>

          <label className='label cursor-pointer gap-2'>
            <input 
              type="radio" 
              value='non-document' 
              {...register('parcelType', { required: true })} 
              className="radio radio-success" 
            />
            Non-Document
          </label>
        </div>

        {/* Parcel Info */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-12 my-8'>
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input 
              type="text" 
              {...register('parcelName', { required: 'Parcel name is required' })} 
              className={`input w-full ${errors.parcelName ? 'input-error border-red-500' : ''}`} 
              placeholder="Parcel Name" 
            />
            {errors.parcelName && <span className="text-red-500 text-sm mt-1">
              {errors.parcelName.message}</span>}
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Parcel Weight (kg)</label>
            <input 
              type="number" 
              step="any"
              {...register('parcelWeight', { required: 'Parcel weight is required' })} 
              className={`input w-full ${errors.parcelWeight ? 'input-error border-red-500' : ''}`} 
              placeholder="Parcel Weight" 
            />
            {errors.parcelWeight && <span className="text-red-500 text-sm mt-1">{errors.parcelWeight.message}</span>}
          </fieldset>
        </div>

        <h1 className="text-5xl font-bold my-4">Sender & Receiver Details</h1>

        {/* 2 Column Details */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-12 my-8'>
          
          {/* Sender Info */}
          <div className='space-y-4'>
            <h2 className="text-2xl font-semibold">Sender Details</h2>

            <fieldset className="fieldset">
              <label className="label">Sender Name</label>
              <input 
                type="text" 
                {...register('senderName', { required: 'Sender name is required' })} 
                className={`input w-full ${errors.senderName ? 'input-error border-red-500' : ''}`} 
                defaultValue={user?.displayName} 
                placeholder="Sender Name" 
              />
              {errors.senderName && <span className="text-red-500 text-sm mt-1">{errors.senderName.message}</span>}
            </fieldset>

            <fieldset className="fieldset">
              <label className="label">Sender Address</label>
              <input 
                type="text" 
                {...register('senderAddress', { required: 'Sender address is required' })} 
                className={`input w-full ${errors.senderAddress ? 'input-error border-red-500' : ''}`} 
                placeholder="Sender Address" 
              />
              {errors.senderAddress && <span className="text-red-500 text-sm mt-1">{errors.senderAddress.message}</span>}
            </fieldset>

            <fieldset className="fieldset">
              <label className="label">Phone Number</label>
              <input 
                type="tel" 
                {...register('senderPhone', { required: 'Sender phone is required' })} 
                className={`input w-full ${errors.senderPhone ? 'input-error border-red-500' : ''}`} 
                placeholder="Phone Number" 
              />
              {errors.senderPhone && <span className="text-red-500 text-sm mt-1">{errors.senderPhone.message}</span>}
            </fieldset>

            <fieldset className="fieldset">
              <label className="label">Sender Email</label>
              <input 
                type="email" 
                {...register('senderEmail')} 
                className="input w-full" 
                defaultValue={user?.email} 
                placeholder="Email address" 
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Select Region</legend>
              <select 
                {...register('senderRegion', { required: 'Please select a region' })} 
                defaultValue="" 
                className={`select w-full ${errors.senderRegion ? 'select-error border-red-500' : ''}`}
              >
                <option value="" disabled>Pick a Region</option>
                {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
              </select> 
              {errors.senderRegion && <span className="text-red-500 text-sm mt-1">{errors.senderRegion.message}</span>}           
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Select District</legend>
              <select 
                {...register('senderDistrict', { required: 'Please select a district' })} 
                defaultValue="" 
                className={`select w-full ${errors.senderDistrict ? 'select-error border-red-500' : ''}`}
              >
                <option value="" disabled>Select District</option>
                {districtByRegion(senderRegion).map((d, i) => <option key={i} value={d}>{d}</option>)}
              </select> 
              {errors.senderDistrict && <span className="text-red-500 text-sm mt-1">{errors.senderDistrict.message}</span>}          
            </fieldset>
          </div>

          {/* Receiver Info */}
          <div className='space-y-4'>
            <h2 className="text-2xl font-semibold">Receiver Details</h2>

            <fieldset className="fieldset">
              <label className="label">Receiver Name</label>
              <input 
                type="text" 
                {...register('receiverName', { required: 'Receiver name is required' })} 
                className={`input w-full ${errors.receiverName ? 'input-error border-red-500' : ''}`} 
                placeholder="Receiver Name" 
              />
              {errors.receiverName && <span className="text-red-500 text-sm mt-1">{errors.receiverName.message}</span>}
            </fieldset>

            <fieldset className="fieldset">
              <label className="label">Receiver Address</label>
              <input 
                type="text" 
                {...register('receiverAddress', { required: 'Receiver address is required' })} 
                className={`input w-full ${errors.receiverAddress ? 'input-error border-red-500' : ''}`} 
                placeholder="Receiver Address" 
              />
              {errors.receiverAddress && <span className="text-red-500 text-sm mt-1">{errors.receiverAddress.message}</span>}
            </fieldset>

            <fieldset className="fieldset">
              <label className="label">Receiver Contact Number</label>
              <input 
                type="text" 
                {...register('receiverPhone', { required: 'Receiver contact number is required' })} 
                className={`input w-full ${errors.receiverPhone ? 'input-error border-red-500' : ''}`} 
                placeholder="Receiver Contact Number" 
              />
              {errors.receiverPhone && <span className="text-red-500 text-sm mt-1">{errors.receiverPhone.message}</span>}
            </fieldset>

            <fieldset className="fieldset">
              <label className="label">Receiver Email</label>
              <input 
                type="email" 
                {...register('receiverEmail')} 
                className="input w-full" 
                placeholder="Receiver Email address" 
              />
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Select Region</legend>
              <select 
                {...register('receiverRegion', { required: 'Please select a region' })} 
                defaultValue="" 
                className={`select w-full ${errors.receiverRegion ? 'select-error border-red-500' : ''}`}
              >
                <option value="" disabled>Pick a Region</option>
                {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
              </select> 
              {errors.receiverRegion && <span className="text-red-500 text-sm mt-1">{errors.receiverRegion.message}</span>}                  
            </fieldset>

            <fieldset className="fieldset">
              <legend className="fieldset-legend">Select District</legend>
              <select 
                {...register('receiverDistrict', { required: 'Please select a district' })} 
                defaultValue="" 
                className={`select w-full ${errors.receiverDistrict ? 'select-error border-red-500' : ''}`}
              >
                <option value="" disabled>Select District</option>
                {districtByRegion(receiverRegion).map((d, i) => <option key={i} value={d}>{d}</option>)}
              </select> 
              {errors.receiverDistrict && <span className="text-red-500 text-sm mt-1">{errors.receiverDistrict.message}</span>}          
            </fieldset>
          </div>

        </div>

        <button className='btn bg-primary text-white border-0 mt-4'>Send Parcel</button>
      </form>
    </div>
  )
}

export default memo(SendParcel)