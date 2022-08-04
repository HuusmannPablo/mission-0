import React from 'react'
import './Body.css';

function Body() {
  return (
    <div className='body-body'>

        <div className='product-card'>
            <img src='/images/Monteverde.jpg' alt='Product 5'></img>
            <h2>Monteverde</h2>
            <p>What is our mission?</p>
        </div>

        <div className='product-card'>
            <img src='/images/Nature.jpg' alt='Product 4'></img>
            <h2>Nature</h2>
            <p>Why are these mountains here?</p>
        </div>

        <div className='product-card'>
            <img src='/images/Farm.jpg' alt='Product 1'></img>
            <h2>Farm</h2>
            <p>Why are we here?</p>
        </div>

        <div className='product-card'>
            <img src='/images/Brew.jpg' alt='Product 2'></img>
            <h2>Brew</h2>
            <p>How do we do it?</p>
        </div>
        
        <div className='product-card'>
            <img src='/images/Coffee.jpg' alt='Product 6'></img>
            <h2>Cafés</h2>
            <p>Give it a shot, or two</p>
        </div>
        
        <div className='product-card'>
            <img src='/images/Shop.jpg' alt='Product 3'></img>
            <h2>Shop</h2>
            <p>Take it home</p>
        </div>
    </div>
  )
}

export default Body