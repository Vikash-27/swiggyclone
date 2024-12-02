import React from 'react';
import Swiggylogo from '../../Assets/swiggy_logo.png';
import HeaderComponentCSS from '../../CSSFolder/HeaderCSS/HeaderComponentCSS.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-container'>
      <div className="logo-container">
        <img className="swiggylogo" src={Swiggylogo} alt="Swiggy logo" />
        {/* <span className="copyright-text">&copy; Vikash</span> */}
      </div>   
      <div className='nav-items'>
        <ul className='itemslist'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
