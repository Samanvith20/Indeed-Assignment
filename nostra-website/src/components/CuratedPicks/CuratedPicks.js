import React from 'react';
import './CuratedPicks.css';
import image1 from "./image1.png"
import image2 from "./image2.png"
import image3 from "./image3.png"
import image4 from "./image4.png"

const CuratedPicks = () => (
  <>
    <div className='title'>
      <h1>Curated Picks</h1>
    </div>
    <section className="curated-picks">
      <div className="curated-item">
        <img src={image1} alt="Best Seller" />
       
      </div>
      <div className="curated-item">
        <img src={image2} alt="Shop Men" />
       
      </div>
      <div className="curated-item">
        <img src={image3} alt="Shop Women" />
        
      </div>
      <div className="curated-item">
        <img src={image4} alt="Shop Casual" />
      
      </div>
    </section>
  </>
);

export default CuratedPicks;
