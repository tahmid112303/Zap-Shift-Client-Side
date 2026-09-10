import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './UseAxiosSecure'
import { FaUserShield } from 'react-icons/fa6'
import Swal from 'sweetalert2'
import { FiShieldOff } from 'react-icons/fi'
import { memo, useState } from 'react'

const UsersManagement = () => {
    const axiosSecure = useAxiosSecure()
    const [searchText,setSearchText] = useState('')

    const { refetch, data: users = [] } = useQuery({
        queryKey: [ 'users',searchText ],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users?searchText=${searchText}`);
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
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo)
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
        <h2 className="text-5xl text-center my-4">Manage Users: {users.length}</h2>

    <div className='my-6 flex justify-center'>
        <label className="input">
         <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
             >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
           </g>
          </svg>
          <input onChange={(e)=>setSearchText(e.target.value)} type="search" className="grow" placeholder="Search" />
        </label>
    </div>

        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Profile Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {users.map((user,index) => <tr key={index}>
        <th>{index+1}</th>
        <td><img src={user.photoURL} alt="User Image" className='w-10 h-10 rounded-full'/></td>
        <td>{user.displayName}</td>
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

export default memo(UsersManagement)