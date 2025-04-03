import React, { useState } from "react";
import "../productDetails.css";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
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
              "https://terraoutdoor.com/cdn/shop/files/seaside-stinson-coffee-table-1_600x.jpg"
            }
            alt="Sunbrella Restore Fabric Protector"
            loading="lazy"
          />
        </div>
        <div
          className="product-details"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h4 className="product-category">Lightweight yet sturdy</h4>
          <h1 className="product-title">Stinson Coffee Table in Dune</h1>
          <p className="product-price">$925</p>
          <div className="fabric-section1">
            <span className="product-stock">
              <span className="stock-check">
                <i className="fa fa-check"></i>
              </span>
              In stock
            </span>
          </div>
          <div className="cart-details-section">
            <div className="quantity">
              <button onClick={handleDecrement} disabled={quantity < 1}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
            <button
              className="add-to-cart-details"
              onClick={() => navigate("/cart")}
            >
              Add to Cart
            </button>
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
