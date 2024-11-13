import React from 'react'
import BodyComponentCSS from '../../CSSFolder/BodyCSS/BodyComponentCSS.css'
import RestaurantCardComponent from './RestaurantCardComponent'

const BodyComponent = () => {
  return (
    <div className = "Body-container">
    <div className =  "search-container">  
      <input className='search-box' type="text" placeholder="Search for restaurants"/>
      <button className = "search-button">Search</button>
    </div>
    <div className='Restaurant-container'>
      <div className='Res-list'>
      <RestaurantCardComponent name = "Hotel alfa" loc = "NAD" rating = {5} food = " Pizza, Coke"/>
      <RestaurantCardComponent name = "Muntaj" loc = "MVP" rating = {2} food = " Biriyani , Kebabs"/>
    </div>
    </div>
    </div>
  )
}

export default BodyComponent