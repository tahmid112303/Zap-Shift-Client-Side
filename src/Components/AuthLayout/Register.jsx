import React from 'react'

const Register = () => {
  return (
    <div>
    <form action="">
        <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
    
    <h1 className='text-2xl font-bold text-center'>Register</h1>

  <label class="label">Email</label>
  <input type="email" class="input" placeholder="Email" />

  <label class="label">Password</label>
  <input type="password" class="input" placeholder="Password" />

  <button class="btn btn-neutral mt-4">Register</button>
</fieldset>
    </form>
    </div>
  )
}

export default Register