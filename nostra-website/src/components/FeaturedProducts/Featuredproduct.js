import React from 'react';
import './Featuredproduct.css';
import product1 from "./product1.png"
import product2 from "./product2.png"
import product3 from "./product3.png"

const FeaturedProducts = () => (
  <>
  <div className="title">
    Featured products
  </div>
  <section className="featured-products">


    <div>
      <img src={product1} alt="Product 1" />
      <h4>Autumn Dress</h4>
      <p>$58 <span>$85</span></p>
      <button>Add to Cart</button>
    </div>
    <div>
      <img src={product2} alt="Product 2" />
      <h4>Gray Shirt</h4>
      <p>$87</p>
      <button>Add to Cart</button>
    </div>
    <div>
      <img src={product3} alt="Product 3" />
      <h4>Leather Coat</h4>
      <p>$32 <span>$40</span></p>
      <button>Add to Cart</button>
    </div>
  </section>
  </>
);

export default FeaturedProducts;
