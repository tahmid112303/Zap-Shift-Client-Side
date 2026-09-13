import React from 'react'
import useAuth from '../Hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../Components/UseAxiosSecure'
import Swal from 'sweetalert2'

const AssignedDeliveries = () => {
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()
  const {data: parcels=[],refetch} = useQuery({
    queryKey: ['parcels',user.email,'driver_assigned'],
    queryFn: async()=>{
      const res = await axiosSecure.get(`/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver_assigned`)
      return res.data
    }
  })

  const handleDeliveryStatusUpdate = (parcel,status) => {
      const statusInfo= { 
        deliveryStatus: status,
        riderId: parcel.riderId
      };

      let message = `Parcel status is updated with ${status}`

      axiosSecure.patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then(res=>{
        if(res.data.modifiedCount){
          refetch()
          Swal.fire({
               position: "center",
               icon: "success",
               title: message,
               showConfirmButton: false,
               timer: 2000
          })
        }
      })
  }

  return (
    <div>
        <h2 className="text-5xl text-center">Parcels Pending Pickup: {parcels.length}</h2>

    {/* table */}
<div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Confirm</th>
        <th>Other Actions</th>
      </tr>
    </thead>
    <tbody>
      {parcels.map((parcel,index)=><tr key={index}>
        <th>{index+1}</th>
        <td>{parcel.parcelName}</td>
        <td className='flex gap-2'>
            {
                parcel.deliveryStatus === "driver_assigned" ? <>
                <button onClick={()=>handleDeliveryStatusUpdate(parcel,'rider_arriving')} className="btn btn-primary text-black">Accept</button>

                <button className="btn btn-warning text-black">Reject</button>
            </> : <span>Delivery Accepted</span>
            }
        </td>
        <td>
          <button onClick={()=>handleDeliveryStatusUpdate(parcel,"parcel_picked_up")} className='btn text-black btn-primary mr-2'>
              Mark as Picked Up
          </button>
          
          <button onClick={()=>handleDeliveryStatusUpdate(parcel,"parcel_delivered")} className='btn text-black btn-primary'>
              Mark as Delivered
          </button>
        </td>
      </tr>)}

    </tbody>
  </table>
</div>
    </div>
  )
}

export default AssignedDeliveries