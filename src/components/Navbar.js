import React from 'react';
import './Navbar.css' 

function Navbar() {
  return (
    <div className='navbar-body'>
        <div className='left-box'>
            <img src='/images/Cafe Monteverde Logo v2.png' alt='Company Logo'></img>
            <h1>Café Monteverde</h1>
        </div>

        <div className='right-box'>
            <button className='menu-button'>
                Our Story
            </button>
            <button className='menu-button'>
                Our People
            </button>
            <button className='menu-button'>
                Our Coffee
            </button>
            <button className='menu-button'>
                Our Place
            </button>
            <button className='login-button'>
                Login
            </button>
        </div>
    </div>
  )
}

export default Navbar