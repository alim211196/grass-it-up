import React from "react";
import { useNavigate } from "react-router-dom";

const WishCardList = ({ products }) => {
  const navigate = useNavigate();
  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to the parent div
    navigate("/cart");
  };
  return (
    <div className="wishlist-page-container">
      {/* Product Grid Section */}
      <div className={"wishlist-grid-container"}>
        <div className="row" style={{ borderRight: "1px dashed #ddd" }}>
          {products.map((product) => (
            <div
              key={product.id}
              className={`col-md-4 m-0 p-0`}
              onClick={() =>
                navigate(
                  `/collections/${product?.name?.toLowerCase()}/products/${product?.name.toLowerCase()}`,
                  { state: product }
                )
              }
            >
              <div className="wishlist-collection-card">
                <div className="wishlist-image-div">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="wishlist-collection-image"
                    loading="lazy"
                  />
                </div>
                <div className="wishlist-details-div">
                  <h5 className="wishlist-collection-name">{product.name}</h5>
                  <span className="wishlist-collection-price">
                    {product.price}
                  </span>
                  <span className="wishlist-collection-fprice">
                    {product.fprice}
                  </span>
                </div>
                <button
                  className="add-to-cart-btn"
                  onClick={(e) => handleAddToCart(e)}
                >
                  Add to Cart
                </button>
                <div className="wishlist-heart-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <div className="wishlist-remove-icon">
                  <i className="fas fa-remove"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishCardList;
