import React from 'react';
import './CustomerExperience.css';
import { FaDollarSign, FaSmile, FaTruck, FaTags } from 'react-icons/fa';

const CustomerExperience = () => {
  return (
    <div className="customer-experience-section">
      <h2>We provide best customer experiences</h2>
      <p className="subheading">We ensure our customers have the best shopping experience</p>
      <div className="features">
        <div className="feature-item">
          <FaDollarSign className="icon" />
          <h3>Original Products</h3>
          <p>We provide money back guarantee if the product are not original</p>
        </div>
        <div className="feature-item">
          <FaSmile className="icon" />
          <h3>Satisfaction Guarantee</h3>
          <p>Exchange the product you’ve purchased if it doesn’t fit on you</p>
        </div>
        <div className="feature-item">
          <FaTags className="icon" />
          <h3>New Arrival Everyday</h3>
          <p>We updates our collections almost everyday</p>
        </div>
        <div className="feature-item">
          <FaTruck className="icon" />
          <h3>Fast & Free Shipping</h3>
          <p>We offer fast and free shipping for our loyal customers</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerExperience;
