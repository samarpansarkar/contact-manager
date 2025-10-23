import React from 'react'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='container-fluid bg-dark text-light p-3'>
        Contact Manager
        <span className='mx-1'><i className='fa fa-mobile text-warning'></i></span>
      
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar
