import React from 'react'
import BodyComponentCSS from '../../CSSFolder/BodyCSS/BodyComponentCSS.css'

const BodyComponent = () => {
  return (
    <div className = "Body-container">
    <div className =  "search-container">  
      <input className='search-box' type="text" placeholder="Search for restaurants"/>
      <button className = "search-button">Search</button>
    </div>
    <div className='Restaurant-container'>Restaurant Cards</div>
    </div>
  )
}

export default BodyComponent