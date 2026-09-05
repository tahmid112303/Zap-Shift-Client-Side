import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './UseAxiosSecure'
import { FaEye, FaTrashCan, FaUserCheck } from 'react-icons/fa6'
import { IoPersonRemoveSharp } from 'react-icons/io5'
import Swal from 'sweetalert2'

const ApproveRiders = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: riders = [] } = useQuery({
        queryKey: ['riders','pending'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/riders')
            return res.data
        }
    })

    const updateRiderStatus = (rider,status) => {
        const updatedInfo = {status: status,email: rider.email}
        axiosSecure.patch(`/riders/${rider._id}`,updatedInfo)
        .then(res=>{
            if(res.data.modifiedCount){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `Rider has been ${status}`,
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        })
    }

    const handleApproval = (rider) => {
        updateRiderStatus(rider,"approved")
    }

    const handleRejection = (rider) => {
        updateRiderStatus(rider,'rejected')
    }

    const handleDeleteRider = (id) => {
                Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
            if (result.isConfirmed){
              axiosSecure.delete(`/riders/${id}`)
              .then(res=>{
                console.log(res.data)
                if(res.data.deletedCount){
                    refetch()
                    Swal.fire({
                    title: "Deleted!",
                    text: "Rider request has been deleted.",
                    icon: "success"
                });
                }
              })
            }    
        
        });
    }

  return (
    <div>
        <h2 className="text-5xl">Rider Approval Pending: {riders.length}</h2>

        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>SL.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Districts</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {riders.map((rider,index)=> <tr key={index}>
        <th>{index+1}</th>
        <td>{rider.name}</td>
        <td>{rider.email}</td>
        <td className={`${rider.status==="approved" ? 'text-green-800' : 'text-red-700'}`}>{rider.status}</td>
        <td>{rider.district}</td>
        <td>
            <button onClick={()=>handleApproval(rider)} className="btn ml-2">
                <FaEye></FaEye>
            </button>

            <button onClick={()=>handleApproval(rider)} className="btn ml-2">
                <FaUserCheck></FaUserCheck>
            </button>

            <button onClick={()=>handleRejection(rider)} className="btn ml-2">
                <IoPersonRemoveSharp></IoPersonRemoveSharp>
            </button>

            <button onClick={()=>handleDeleteRider(rider._id)} className="btn ml-2">
                <FaTrashCan></FaTrashCan>
            </button>
        </td>
      </tr>)}

    </tbody>
  </table>
</div>
    </div>
  )
}

export default ApproveRiders