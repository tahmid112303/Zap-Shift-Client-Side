import { useForm, useWatch } from 'react-hook-form'
import { useLoaderData, useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import UseAxiosSecure from './UseAxiosSecure'
import useAuth from '../Hooks/useAuth'

const SendParcel = () => {
  const {register,
    handleSubmit,
    control,
    // formState: { errors }
  } = useForm()

  const axiosSecure = UseAxiosSecure()
  const {user} = useAuth()
  const serviceCenters = useLoaderData()
  const regionsDuplicate = serviceCenters.map(x => x.region)
  const regions = [...new Set(regionsDuplicate)]
  const senderRegion = useWatch({control,name: 'senderRegion'})
  const receiverRegion = useWatch({control,name: 'receiverRegion'})
  const navigate = useNavigate('/my-parcels')

  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter(x => x.region === region)
    const districts = regionDistricts.map(d => d.district )
    return districts
  }


  const handleSendParcel = (data) => {
      const isDocument = data.parcelType === "document"
      const isSameDistrict = data.senderDistrict === data.receiverDistrict;
      const parcelWeight = parseFloat(data.parcelWeight)

      let cost = 0
      if(isDocument){
        cost = isSameDistrict ? 60 : 80
      }else{
          if(parcelWeight < 3){
          cost = isSameDistrict ? 110 : 150
        }else{
            const minCharge = isSameDistrict ? 110 : 150
            const extraWeight = parcelWeight - 3 
            const extraCharge = isSameDistrict ? extraWeight * 40 : (extraWeight * 40) + 40

            cost = minCharge + extraCharge
        }
      }
      console.log("Cost: ", cost)

      Swal.fire({
        title: "Are you sure?",
        text: `You will be charged ${cost} USD`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
        }).then((result) => {
        if (result.isConfirmed){
          data.cost = cost
          axiosSecure.post('/parcels',data)
          .then(res=>{
            console.log("After saving", res.data)
            if(res.data.insertedId){
              Swal.fire({
                title: "Please pay",
                showClass: { popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                ` },
                hideClass: { popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                ` }
              });
              navigate('/dashboard/my-parcels')
            }
            
          })
        }
          
        //     Swal.fire({
        //     title: "",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        // });
    });
  }


  return (
    <div className='card bg-base-100 w-full shadow-2xl p-10 mt-10 max-sm:max-w-sm'>
        <h1 className='text-5xl font-bold'>Send a Parcel</h1>

        <form onSubmit={handleSubmit(handleSendParcel)} className='mt-12 p-4 text-black'>
          {/* parcel type */}
            <div>
                <label className='label mr-4'>
                  <input type="radio" value='document' {...register('parcelType')} className="radio radio-success" defaultChecked />
                  Document</label>

                <label className='label'>
                  <input type="radio" value='non-document' {...register('parcelType')} className="radio radio-success" />
                  Non-Document</label>
            </div>

          {/* parcelInfo */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-12 my-8'>
                <fieldset className="fieldset">
                <label className="label">Parcel Name</label>
                <input type="text" {...register('parcelName')} className="input w-full" placeholder="Parcel Name" />
                </fieldset>

                <fieldset className="fieldset">
                <label className="label">Parcel Weight</label>
                <input type="number" {...register('parcelWeight')} className="input w-full" placeholder="Parcel Weight" />
                </fieldset>
            </div>

            <h1 className="text-5xl font-bold">Sender Details</h1>

            {/* 2 column */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-12 my-8'>
                {/* sender Info */}
                <div>

                    <fieldset className="fieldset">
                    <label className="label">Sender Name</label>
                    <input type="text" {...register('senderName', {required: true})} className="input w-full" defaultValue={user?.displayName} placeholder="Sender Name" />
                    </fieldset>

                    <fieldset className="fieldset">
                    <label className="label">Sender Address</label>
                    <input type="text" {...register('senderAddress', {required: true})} className="input w-full" placeholder="Sender Address" />
                    </fieldset>

                    <fieldset className="fieldset">
                    <label className="label">Phone Number</label>
                    <input type="tel" {...register('senderPhone', {required: true})} className="input w-full" placeholder="Phone Number" />
                    </fieldset>

                    <fieldset className="fieldset">
                    <label className="label">Sender Email</label>
                    <input type="email" {...register('senderEmail', {required: true})} className="input w-full" defaultValue={user?.email} placeholder="Email address" />
                    </fieldset>

                    <fieldset className="fieldset">
                       <legend className="fieldset-legend">Select Region</legend>
                       <select {...register('senderRegion')} defaultValue="Pick a Region" className="select">
                         <option>Pick Region</option>
                            {regions.map((r,i) => <option key={i} value={r}>{r}</option>)}
                       </select>           
                    </fieldset>

                    <fieldset className="fieldset">
                       <legend className="fieldset-legend">Select District</legend>
                       <select {...register('senderDistrict')} defaultValue="Pick a District" className="select">
                         <option disabled={true}>Select District</option>
                             {districtByRegion(senderRegion).map((d,i) => <option key={i} value={d}>{d}</option>)}
                       </select>           
                    </fieldset>
                </div>

                {/* receiver Info */}

                <div>
                    <fieldset className="fieldset">
                    <label className="label">Receiver Name</label>
                    <input type="text" {...register('receiverName', {required: true})} className="input w-full" placeholder="Receiver Name" />
                    </fieldset>

                    <fieldset className="fieldset">
                    <label className="label">Receiver Address</label>
                    <input type="text" {...register('receiverAddress', {required: true})} className="input w-full" placeholder="Receiver Address" />
                    </fieldset>

                    <fieldset className="fieldset">
                    <label className="label">Receiver Contact Number</label>
                    <input type="text" {...register('receiverPhone', {required: true})} className="input w-full" placeholder="Receiver Contact Number" />
                    </fieldset>

                    <fieldset className="fieldset">
                    <label className="label">Receiver Email</label>
                    <input type="email" {...register('receiverEmail', {required: true})} className="input w-full" placeholder="Receiver Email address" />
                    </fieldset>

                    <fieldset className="fieldset">
                       <legend className="fieldset-legend">Select Region</legend>
                       <select {...register('receiverRegion')} defaultValue="Pick a Region" className="select">
                         <option>Pick a Region</option>
                            {regions.map((r,i) => <option key={i} value={r}>{r}</option>)}
                       </select>                    
                    </fieldset>

                    <fieldset className="fieldset">
                       <legend className="fieldset-legend">Select District</legend>
                       <select {...register('receiverDistrict')} defaultValue="Pick a District" className="select">
                         <option disabled={true}>Select District</option>
                             {districtByRegion(receiverRegion).map((d,i) => <option key={i} value={d}>{d}</option>)}
                       </select>           
                    </fieldset>
                </div>

            </div>

            <button className='btn bg-primary border-0'>Send Parcel</button>
        </form>
    </div>
  )
}

export default SendParcel