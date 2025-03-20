import React, { useState } from "react";
import "../productListing.css"; // Custom styles

const ProductGrid = ({ products, colSpan, isFilterOpen, toggleFilter }) => {
  return (
    <div className="product-page-container">
      {/* Sidebar Filter Section */}
      <div className={`filter-section1 ${isFilterOpen ? "open" : "closed"}`}>
        <button className="filter-toggle-btn" onClick={toggleFilter}>
          {isFilterOpen ? "Close Filters" : "Filters"}
        </button>
        {isFilterOpen && (
          <div className="filters-content">
            <h4>Filters</h4>
            <div className="filter-category">
              <h5>Category</h5>
              <ul>
                <li>
                  <input type="checkbox" /> Option 1
                </li>
                <li>
                  <input type="checkbox" /> Option 2
                </li>
                <li>
                  <input type="checkbox" /> Option 3
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Product Grid Section */}
      <div
        className={`product-grid-container ${
          isFilterOpen ? "shrink" : "expand"
        }`}
      >
        <div className="row" style={{ borderRight: "1px dashed #ddd" }}>
          {products.map((product) => (
            <div key={product.id} className={`col-md-${colSpan} m-0 p-0`}>
              <div className="product-collection-card">
                <div className="product-image-div">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-collection-image"
                  />
                </div>
                <div className="product-details-div">
                  <h5 className="product-collection-name">{product.name}</h5>
                  <span className="product-collection-price">
                    {product.price}
                  </span>
                  <span className="product-collection-fprice">
                    {product.fprice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
