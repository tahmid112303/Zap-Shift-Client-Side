import React from 'react'
import webLogo from '../../assets/brands/logo.png'
import { NavLink } from 'react-router'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter, FaYoutube } from 'react-icons/fa6'


const Footer = () => {
  return (
<footer class="$$footer $$footer-horizontal $$footer-center bg-neutral text-primary-content p-10 rounded-4xl h-115 flex flex-col items-center pt-20">
  <aside className='flex flex-col items-center gap-5'>
       <div className='flex'>
            <img src={webLogo} alt="" />
      
            <h2 className='text-3xl font-bold -ms-2.5'>ZapShift</h2>
        </div>

    <p class="font-bold text-[#DADADA] text-center">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.
    </p>
  </aside>

    <div className='flex gap-6 mt-8 mb-8'>
        <NavLink>Services</NavLink>
        <NavLink to={'/coverage'}>Coverage</NavLink>
        <NavLink>About Us</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Be a Rider</NavLink>
    </div>


  <nav>
    <div class="grid grid-flow-col gap-8">
      <FaLinkedinIn className='h-10 w-10 cursor-pointer bg-linear-to-r from-[#2489BE] to-[#0575B3] rounded-full fill-black p-1.5'> 
      </FaLinkedinIn>

      <FaXTwitter className='h-10 w-10 cursor-pointer bg-white rounded-full fill-black p-1.5'></FaXTwitter>

      <FaFacebook className='h-10 w-10 cursor-pointer rounded-full fill-blue-600 bg-black'></FaFacebook>
      
      <FaYoutube className='h-10 w-10 cursor-pointer rounded-full bg-[#FF0000] p-2'></FaYoutube>
    </div>
  </nav>
</footer>
  )
}

export default Footer