import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar'
import Footer from './Footer'

const Root = () => {
  return (
    <div className='mx-auto max-w-7xl max-sm:max-w-sm max-sm:mx-0'>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root