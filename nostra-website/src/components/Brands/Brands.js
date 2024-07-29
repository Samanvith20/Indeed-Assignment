import React from 'react';
import './Brands.css';
import brand1 from './brand1.png';
import brand2 from './brand2.png';
import brand3 from './brand3.png';
import brand4 from './brand4.png';
import brand5 from './brand5.png';
import brand6 from './brand6.png';
import brand7 from './brand7.png';
import brand8 from './brand8.png';

const Brands = () => (
  <section className="brands">
    <img src={brand1} alt="Brand 1" />
    <img src={brand2} alt="Brand 2" />
    <img src={brand3} alt="Brand 3" />
    <img src={brand4} alt="Brand 4" />
    <img src={brand5} alt="Brand 5" />
    <img src={brand6} alt="Brand 6" />
    <img src={brand7} alt="Brand 7" />
    <img src={brand8} alt="Brand 8" />
  </section>
);

export default Brands;
