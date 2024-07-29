import React from 'react';
import './Header.css';

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
        <input type="text" placeholder="Search" />
        <a href="#">Cart</a>
        <a href="#">Account</a>
      </div>
    </div>
  </header>
);

export default Header;
