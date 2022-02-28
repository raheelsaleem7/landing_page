import React from 'react'
import './_Navbar.scss'
import logo from "../../assests/images/logo.png"

function Navbar() {
  return (
    <div className='navbar'>
        <nav className='nav_container'>
       <div className='logo'>
      <img src={ logo} />
       </div>

       <div className='dashboard-btn'>
           <button>Go To Dashboard</button>
       </div>
        </nav>
    </div>
  )
}

export default Navbar