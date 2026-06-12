import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../Hooks/useAuth'
import { Eye, EyeOff } from 'lucide-react'
import { Link, useNavigate } from 'react-router'
import SocialLogin from './SocialLogin'

const Login = () => {

  const {register,handleSubmit,reset,formState: {errors}} = useForm()
  const {loginUser} = useAuth()
  const [showPassword,setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleLogin = (data) => {
    console.log("After login", data)
    loginUser(data.email,data.password)
    .then(result=>{
      console.log(result.user)
      navigate('/')
      reset()
    })
    .catch(error=>{
      console.log(error)
    })
  } 

  return (
    <div className='ml-40 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
        <form onSubmit={handleSubmit(handleLogin)}>
  <fieldset className="fieldset  rounded-box w-xs p-4">
  
  <h1 className='text-[42px] font-extrabold'>Welcome Back</h1>

  <label className="label">Email</label>
  <input type="email" className="input" {...register('email', {required: true})} placeholder="Email" />
    {errors.email?.type === 'required' && <p className='text-red-600'>Email is required</p>}

  <label className="label">Password</label>
  <input type={showPassword ? 'text' : 'password'} className="input" {...register('password', {required: true})} placeholder="Password" />

  {showPassword ? <EyeOff onClick={()=>setShowPassword(!showPassword)} className='cursor-pointer relative left-63 bottom-9'></EyeOff> : <Eye onClick={()=>setShowPassword(!showPassword)} className='cursor-pointer relative left-63 bottom-9'></Eye>}
  
  <button className="btn bg-primary mt-4">Login</button>

    <h1>Don't have an account? Please <Link to={'/register'} className='text-purple-700 font-bold underline'>register</Link></h1>

</fieldset>
        </form>

      <SocialLogin></SocialLogin>  
    </div>
  )
}

export default Login