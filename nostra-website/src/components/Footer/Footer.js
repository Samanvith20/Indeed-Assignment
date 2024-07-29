import React from 'react';
import './Footer.css';
import mastercard from './mastercard.png';
import visa from './visa.png';
import paypal from './paypal.png';

const Footer = () => (
  <footer className="footer">
    <div>
      <h4>NOSTRA</h4>
      <p>Specializes in providing high-quality, stylish</p>
      <p>products for your wardrobe</p>
    </div>
    <div>
      <h4>Shop</h4>
      <a href="#">All Collections</a>
      <a href="#">Winter Edition</a>
      <a href="#">Discount</a>
    </div>
    <div>
      <h4>Company</h4>
      <a href="#">About Us</a>
      <a href="#">Contact</a>
      <a href="#">Affiliates</a>
    </div>
    <div>
      <h4>Support</h4>
      <a href="#">FAQs</a>
      <a href="#">Cookie Policy</a>
      <a href="#">Terms of Use</a>
    </div>
    <div>
      <h4>Payment Methods</h4>
      <div className="payment-methods">
        <img src={mastercard} alt="MasterCard" />
        <img src={visa} alt="Visa" />
        <img src={paypal} alt="PayPal" />
      </div>
    </div>
  </footer>
);

export default Footer;
