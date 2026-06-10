import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../Hooks/useAuth'

const Register = () => {

  const {register,handleSubmit, formState: {errors}} = useForm()
  const {registerUser} = useAuth()

  const handleRegister = (data) => {
    console.log("After register", data)
    registerUser(data.email,data.password)
    .then(result=>{
      console.log(result.user)
    }).catch(error=>{
      console.log(error)
    })
  }

  return (
    <div className='mt-17 ml-40'>
    <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
    
    <h1 className='text-2xl font-bold text-center'>Register</h1>

  <label class="label">Email</label>
  <input type="email" {...register('email', {required: true})} class="input" placeholder="Email" />
  {errors.email?.type === 'required' && <p className='text-red-600'>Email is required</p>}

  <label class="label">Password</label>
  <input type="password" {...register('password', {required: true, minLength: 6})} class="input" placeholder="Password"/>

  {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}

  {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters or longer</p>}

  <button class="btn btn-neutral mt-4">Register</button>
</fieldset>
    </form>
    </div>
  )
}

export default Register