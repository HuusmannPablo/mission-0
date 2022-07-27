import React from 'react'

function Navbar() {
  return (
    <div className='navbar-body'>
        <div className='left-box'>
            <img src='' alt='Company Logo'></img>
            <h1>My Company</h1>
        </div>

        <div className='right-box'>
            <button className='menu-button'>
                Menu1
            </button>
            <button className='menu-button'>
                Menu2
            </button>
            <button className='menu-button'>
                Menu3
            </button>
            <button className='login-button'>
                Login
            </button>
        </div>
    </div>
  )
}

export default Navbar