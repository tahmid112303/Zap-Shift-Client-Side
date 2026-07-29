import React from 'react'
import webLogo from '../../assets/brands/logo.png'
import { NavLink } from 'react-router'
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter, FaYoutube } from 'react-icons/fa6'


const Footer = () => {
  const visitLinkedIn = () => {
    window.open("https://www.linkedin.com/feed/")
  }

  const visitTwitter = () => {
    window.open("https://x.com/")
  }

  const visitFacebook = () => {
    window.open("https://www.facebook.com/")
  }

  const visitYoutube = () => {
    window.open("https://www.youtube.com/")
  }

  return (
<footer className="$$footer $$footer-horizontal $$footer-center bg-neutral text-primary-content p-10 rounded-4xl h-115 flex flex-col items-center pt-20 mt-25 max-sm:h-auto">
  <aside className='flex flex-col items-center gap-5'>
       <div className='flex'>
            <img src={webLogo} alt="" />
      
            <h2 className='text-3xl font-bold -ms-2.5'>ZapShift</h2>
        </div>

    <p className="font-bold text-[#DADADA] text-center">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.
    </p>
  </aside>

    <div className='flex gap-6 mt-8 mb-8 max-sm:flex-col max-sm:gap-8'>
        <NavLink>Services</NavLink>
        <NavLink to={'/coverage'}>Coverage</NavLink>
        <NavLink to={'/about'}>About Us</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink to={'/rider'}>Be a Rider</NavLink>
    </div>


  <nav>
    <div className="grid grid-flow-col gap-8">
      <FaLinkedinIn onClick={visitLinkedIn} className='h-10 w-10 cursor-pointer bg-linear-to-r from-[#2489BE] to-[#0575B3] rounded-full fill-black p-1.5'> 
      </FaLinkedinIn>

      <FaXTwitter onClick={visitTwitter} className='h-10 w-10 cursor-pointer bg-white rounded-full fill-black p-1.5'></FaXTwitter>

      <FaFacebook onClick={visitFacebook} className='h-10 w-10 cursor-pointer rounded-full fill-blue-600 bg-black'></FaFacebook>
      
      <FaYoutube onClick={visitYoutube} className='h-10 w-10 cursor-pointer rounded-full bg-[#FF0000] p-2'></FaYoutube>
    </div>
  </nav>
</footer>
  )
}

export default Footer