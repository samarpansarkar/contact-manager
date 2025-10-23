import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='container-fluid bg-dark text-light p-3'>
        <Link to='/'>Contact Manager</Link>
        <span className='mx-1'><i className='fa fa-mobile text-warning'></i></span>
      
    </div>
    <Outlet/>
    </>
  )
}

export default Navbar
