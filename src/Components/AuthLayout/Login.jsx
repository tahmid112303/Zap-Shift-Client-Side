import React, { memo, useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../Hooks/useAuth'
import { Eye, EyeOff } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router'
import SocialLogin from './SocialLogin'

const Login = () => {

  const {register,handleSubmit,reset,getValues,formState: {errors}} = useForm()
  const {loginUser,resetPassword} = useAuth()
  const [showPassword,setShowPassword] = useState(false)
  const navigate = useNavigate()
  const [error,setError] = useState('')
  const location = useLocation()


  const handleLogin = (data) => {
    console.log("After login", data)
    loginUser(data.email,data.password)
    .then(result=>{
      console.log(result.user)
      navigate(location?.state || '/')
      reset()
    })
    .catch(error=>{
      console.log(error)
      setError("Wrong credentials")
    })
  } 

  const handleResetPassword = () => {
      const email = getValues("email")
      resetPassword(email)
      .then(()=>{
        alert("Password reset email sent!")
      }).catch(error=>{
        console.log(error)
      })
  }

  return (
    <div className='ml-40 mt-17 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
        <form onSubmit={handleSubmit(handleLogin)}>
  <fieldset className="fieldset rounded-box w-xs p-4">
  
  <h1 className='text-[42px] font-extrabold'>Welcome Back</h1>

  <label className="label">Email</label>
  <input type="email" className="input" {...register('email', {required: true})} placeholder="Email" />
    {errors.email?.type === 'required' && <p className='text-red-600'>Email is required</p>}

  <label className="label">Password</label>
  <input type={showPassword ? 'text' : 'password'} className="input" {...register('password', {required: true})} placeholder="Password" />

  {showPassword ? <EyeOff onClick={()=>setShowPassword(!showPassword)} className='cursor-pointer relative left-63 bottom-9'></EyeOff> : <Eye onClick={()=>setShowPassword(!showPassword)} className='cursor-pointer relative left-63 bottom-9'></Eye>}

  {error && <h1 className='font-bold text-red-700'>{error}</h1>}
  
  <button className="btn bg-primary mt-4">Login</button>

    <h1>Don't have an account? Please <Link to={'/register'} className='text-purple-700 font-bold underline'>register</Link></h1>

    <a onClick={handleResetPassword} className='link link-hover text-blue-500 font-bold underline'>Forgotten password?</a>

</fieldset>
        </form>

      <SocialLogin></SocialLogin>  
    </div>
  )
}

export default memo(Login)