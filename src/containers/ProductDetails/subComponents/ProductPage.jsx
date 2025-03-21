import React from "react";
import "../productDetails.css";

const ProductPage = () => {
  return (
    <div className="product-page-container1">
      <div className="inner-div">
        <div
          className="product-image-page"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <img
            src={
              "https://terraoutdoor.com/cdn/shop/files/Sunbrella-RESTORE-16-oz_540x.jpg"
            }
            alt="Sunbrella Restore Fabric Protector"
          />
        </div>
        <div
          className="product-details"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h4 className="product-category">FABRIC PROTECTOR</h4>
          <h1 className="product-title">
            Sunbrella Restore Fabric Protector & Repellent
          </h1>
          <p className="product-price">$28</p>
          <div className="fabric-section1">
            <span className="product-stock"> In stock</span>
          </div>
          <div className="cart-details-section">
            <div className="quantity">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className="add-to-cart-details">Add to Cart</button>
          </div>

          <span className="product-stock">
            <a className="product-link">view full product details</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
