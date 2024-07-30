import React from 'react';
import './Header.css';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
const Header = () => (
  <header className="header">
    <div className="header-top">
      <p>Sign up and GET 20% OFF for your first order. <a href="#">Sign up now</a></p>
    </div>
    <div className="header-main">
      <h1>NOSTRA</h1>
      <nav>
        <a href="#">Shop</a>
        <a href="#">Most wanted</a>
        <a href="#">New arrival</a>
        <a href="#">Brands</a>
      </nav>
      
      <div className="header-actions">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Search" className="search-input" />
                <div className="icons">
                    <FaShoppingCart className="icon" />
                    <FaUser className="icon" />
                </div>
            </div>
            </div>
  </header>
);

export default Header;
