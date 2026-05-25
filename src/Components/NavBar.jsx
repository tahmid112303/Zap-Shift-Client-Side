import React from 'react'
import webLogo from '../../assets/brands/logo.png'
import { NavLink } from 'react-router'

const NavBar = () => {

    const links = <>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink>Services</NavLink>
        <NavLink to={'/coverage'}>Coverage</NavLink>
        <NavLink to={'/about'}>About Us</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Be a Rider</NavLink>
    </>

  return (
<div className="navbar bg-base-100 shadow-sm mt-8 rounded-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {links}
      </ul>
    </div>
      <div className='flex items-end'>
          <img src={webLogo} alt="" />

          <h2 className='text-3xl font-bold -ms-2.5'>ZapShift</h2>
      </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-9">
        {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-primary text-black rounded-[10px]">
      Be a rider</a>
  </div>
</div>
  )
}

export default NavBar