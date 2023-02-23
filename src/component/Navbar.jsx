import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { logo } from '../assets'

const Navbar = () => {
  return (
    <>
    
    <section>
    <div>
        <div>
            <Link>
            <img src={logo} alt="" />
            </Link>
        </div>
    </div>

    </section>
    <Outlet/>
    </>
  )
}

export default Navbar