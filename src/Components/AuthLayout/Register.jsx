import React, { memo, useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../Hooks/useAuth'
import { Eye, EyeOff } from 'lucide-react'
import { Link } from 'react-router'
import SocialLogin from './SocialLogin'
import axios from 'axios'


const Register = () => {

  const {register,handleSubmit, reset, formState: {errors}} = useForm()
  const {registerUser,profileUpdate,verifyEmail} = useAuth()
  const [showPassword,setShowPassword] = useState(false) 

  const handleRegister = (data) => {
    console.log("After reg: ", data.photo[0])
    const profileImg = data.photo[0]


    registerUser(data.email,data.password)
    .then(result=>{
      console.log(result.user)

      verifyEmail(result.user)
      .then(()=>{
        alert("Email verification link sent to your email")
      })
      .catch(error => {
        console.log(error)
      })

      const formData = new FormData()
      formData.append('image', profileImg)
      const imageAPI_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_img_host_key}`
      axios.post(imageAPI_URL,formData)
      .then(res=>{

        const profileInfo = {
          displayName: data.name,
          photoURL: res.data.data.url
        }

        profileUpdate(profileInfo)
        .then(()=>{
          console.log("Profile Updated")
        }).catch(error=>{
          console.log(error)
        })
      })
      reset()
    }).catch(error=>{
      console.log(error)
    })
  }


  return (
    <div className='ml-40 mt-17 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
    <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset rounded-box w-xs p-4">
    
    <h1 className='text-[42px] font-extrabold'>Create an Account</h1>

      <label className="label">Name</label>
  <input type="text" {...register('name', {required: true})} className="input" placeholder="Name" />
    {errors.name?.type === 'required' && <p className='text-red-600'>Name is required</p>}

    <label className="label">Your Photo (optional)</label>
    <input type="file" {...register('photo')} className="file-input" />

  <label className="label">Email</label>
  <input type="email" {...register('email', {required: true})} className="input" placeholder="Email" />
  {errors.email?.type === 'required' && <p className='text-red-600'>Email is required</p>}

  <label className="label">Password</label>
  <input type={showPassword ? 'text' : 'password'} {...register('password', {required: true, minLength: 6})} className="input" placeholder="Password"/>

    {showPassword ? <EyeOff onClick={()=>setShowPassword(!showPassword)} className='cursor-pointer relative left-63 bottom-9'></EyeOff> : <Eye onClick={()=>setShowPassword(!showPassword)} className='cursor-pointer relative left-63 bottom-9'></Eye>} 

  {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}

  {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters or longer</p>}

  <button className="btn bg-primary mt-4">Register</button>

  <h1>Alteady have an account? Please <Link to={'/login'} className='text-blue-700 font-bold underline'>login</Link></h1>
</fieldset>
    </form>

        <SocialLogin></SocialLogin>
    </div>
  )
}

export default memo(Register)