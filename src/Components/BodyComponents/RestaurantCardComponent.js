import React from 'react'
import SwiggyLogo from "../../Assets/swiggy_logo.png"
import RestaurantCardComponentCSS from "../../CSSFolder/BodyCSS/RestaurantCardComponentCSS.css"
const RestaurantCardComponent = (props) => {
  const {name,loc,rating,food} = props
  return (
    <div className='RestaurantCard-container'>
        <div className='RestaurantCardImage'>
        </div>
        <div className='RestaurantCard-Details'>
        <h1> {name}</h1>
        <br></br>
        {loc}
        <br></br>
        {rating}**
        <br></br>
        {food}
        </div>
    </div>
  )
}

export default RestaurantCardComponent