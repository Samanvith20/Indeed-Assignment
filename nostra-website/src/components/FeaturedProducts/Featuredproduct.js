import React from 'react';
import './Featuredproduct.css';

const FeaturedProducts = () => (
  <section className="featured-products">
    <div>
      <img src="product1.png" alt="Product 1" />
      <h4>Autumn Dress</h4>
      <p>$58 <span>$85</span></p>
      <button>Add to Cart</button>
    </div>
    <div>
      <img src="product2.png" alt="Product 2" />
      <h4>Gray Shirt</h4>
      <p>$87</p>
      <button>Add to Cart</button>
    </div>
    <div>
      <img src="product3.png" alt="Product 3" />
      <h4>Leather Coat</h4>
      <p>$32 <span>$40</span></p>
      <button>Add to Cart</button>
    </div>
  </section>
);

export default FeaturedProducts;
