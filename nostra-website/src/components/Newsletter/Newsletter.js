import React from 'react';
import './Newsletter.css';
const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h2 className="newsletter-heading">Subscribe to our newsletter to get updates</h2>
      <h3 className="newsletter-subheading">to our latest collections</h3>
      <p>Get 20% off on your first order just by subscribing to our newsletter</p>
      <form className="newsletter-form">
        <input type="email" placeholder=" Enter your email" className="newsletter-input" />
        <button type="submit" className="newsletter-button">Subscribe</button>
      </form>
     
      <p className="newsletter-disclaimer">You will be able to unsubscribe at any time.</p>
      <p className="newsletter-disclaimer">Read our Privacy Policy <a className="underline-link" href="#">here</a></p>
    </div>
  );
};

export default Newsletter;
