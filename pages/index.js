import React from "react";

const Home = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Best Sellers</h2>
        <p>Corsets of many variations</p>
      </div>
      <div className="products-container">
        {["product 1", "product 2"].map((product) => product)}
      </div>
      Footer
    </>
  );
};

export default Home;
