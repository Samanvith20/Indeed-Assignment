import React from 'react';
import './Offer.css';
import banner from "./banner.png"
const Offer = () => {
  return (
    <div className="promo-banner">
      <div className="promo-image">
        <img src={banner} alt="Promotional Image" />
      </div>
      <div className="promo-content">
        <p className="offer">LIMITED OFFER</p>
        <h1>35% off only this friday </h1>
          <h1>and get special gift</h1>
        <button className="promo-button">Grab it now &rarr;</button>
      </div>
    </div>
  );
};

export default Offer;
