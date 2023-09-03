import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-white.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-info">
          <img src={logo} alt="logo" width="165px"/>
          <div className="footer-info-text">
            #1 top rated online vitamin shop 
            that meets the customers needs in every 
            single aspect. We strive to 
            provide the top quality products, service and 
            care at the lowest prices you'll ever find.
          </div>
        </div>
        <div className="footer-links">
          <p>QUICK LINK</p>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/shop'>Shop All</Link>
            </li>
            <li>
              <Link to='/shop?order=rating'>Best Offers</Link>
            </li>
          </ul>
        </div>
        <div className="footer-categories">
          <p>CATEGORIES</p>
          <ul>
            <li>
              <Link to='/shop?category_id=1'>For Men</Link>
            </li>
            <li>
              <Link to='/shop?category_id=2'>For Women</Link>
            </li>
            <li>
              <Link to='/shop?category_id=3'>For Kids</Link>
            </li>
            <li>
              <Link to='/shop?category_id=4'>Multivitamin</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>CONTACT US</p>
          <ul>
            <li>vitaminshop@gmail.com</li>
            <li>+1 XXX-XXX-XXXX</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2023 Vitamin Shop. All Rights Reserved. 
      </div>
    </footer>
  )
}

export default Footer;
