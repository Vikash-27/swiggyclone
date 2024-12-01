import React from 'react'
import Swiggylogo from '../../Assets/swiggy_logo.png'
import HeaderComponentCSS from '../../CSSFolder/HeaderCSS/HeaderComponentCSS.css'


const Header = () => {
  return (
    <div className='header-container'>
      <div className="logo-container">
        <img className="swiggylogo" src={Swiggylogo} alt="Swiggy logo" />
        <span className="copyright-text">&copy; Vikash</span>
      </div>   
      <div className='nav-items'>
        <ul className='itemslist'>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header