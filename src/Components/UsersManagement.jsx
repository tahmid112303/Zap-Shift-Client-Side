import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './UseAxiosSecure'
import { FaUserShield } from 'react-icons/fa6'
import Swal from 'sweetalert2'
import { FiShieldOff } from 'react-icons/fi'

const UsersManagement = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users`);
            return res.data;
        }
    })

  const handleMakeAdmin = (user) => {
    const roleInfo = {role: 'admin'}
    axiosSecure.patch(`/users/${user._id}/role`,roleInfo)
    .then(res=>{
      if(res.data.modifiedCount){
          refetch()
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${user.displayName} marked as admin`,
            showConfirmButton: false,
            timer: 2000
          })
      }
    })
  }

      const handleRemoveAdmin = user => {
        const roleInfo = { role: 'user' }
        //TODO: must ask for confirmation before proceed
        axiosSecure.patch(`/users/${user._id}`, roleInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.displayName} removed from Admin`,
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }

  return (
    <div>
        <h2 className="text-4xl">Manage Users: {users.length}</h2>

        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Profile</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {users.map((user,index) => <tr key={index}>
        <th>{index+1}</th>
        <td><img src={user.photoURL} alt="User Image" className='w-6 h-6 rounded-full'/></td>
        <td>{user.email}</td>
        <td>{user.role}</td>
        <td>

          {user.role === "admin" ? <button onClick={()=>handleRemoveAdmin(user)} className='btn'>
              <FiShieldOff></FiShieldOff>
          </button> : <button onClick={()=>handleMakeAdmin(user)} className='btn'>
              <FaUserShield></FaUserShield>
          </button>}


        </td>
      </tr>)}

    </tbody>
  </table>
</div>
    </div>
  )
}

export default UsersManagement