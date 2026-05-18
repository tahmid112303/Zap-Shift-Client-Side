import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar'

const Root = () => {
  return (
    <div className='mx-auto max-w-7xl'>
        <NavBar></NavBar>
        <Outlet></Outlet>
    </div>
  )
}

export default Root