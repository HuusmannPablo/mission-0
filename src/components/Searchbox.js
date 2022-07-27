import React from 'react'


// Poner variable usestate del searchbox
// Poner useEffect cuando se tipea en la searchbox
// const toSearch() => {} 

function Searchbox() {
  return (
    <div className='searchbox-body'>
        <img src='/images/background-forest.jpg' alt='Coffe Forest'></img>
        <h1>Lorem ipsum dolor sit amet</h1>
        <div className='searchbox-searchbox'>

        {/* Searchbox */}

        <button className='searchbox-button'>SEARCH</button>
        {/* <button className='searchbox-button' onClick={toSearch}>SEARCH</button> */}
        </div>
    </div>
  )
}

export default Searchbox