import React from 'react'
import './Searchbox.css'

// Poner variable usestate del searchbox
// Poner useEffect cuando se tipea en la searchbox
// const toSearch() => {} 

function Searchbox() {
  return (
    <div className='searchbox-body'>
        {/* <img src='/images/background-forest.jpg' alt='Coffe Forest'></img> */}
        <h1>From the jungles of Costa Rica, to the WORLD!</h1>
        <div className='searchbox-searchbox'>
          <form action="" method="post" class="contactform">
            <p class="textarea_wrapper"><textarea name="search_message" id="search_message"></textarea></p>
          {/* <button className='searchbox-button' onClick={toSearch}>SEARCH</button> */}
          </form>
            <button className='searchbox-button'>Search</button>
        </div>
    </div>
  )
}

export default Searchbox