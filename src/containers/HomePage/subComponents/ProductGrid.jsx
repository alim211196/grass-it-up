import React, { useEffect, useState, memo } from "react";
import "../../../App.css";
import SectionHeading from "../../../common/SectionHeading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Omer Tray Table Lava",
    price: "AED 122.75",
    image: "/best_seller1.avif",
  },
  {
    id: 2,
    name: "CUBIC COFFEE TABLE LAVA",
    price: "AED 122.75",
    image: "/best_seller2.webp",
  },
  {
    id: 3,
    name: "CUBIC SQUARE COFFEE TABLE WHITE",
    price: "AED 122.75",
    image: "/best_seller3.webp",
  },
  {
    id: 4,
    name: "ALEXA DINING EXTENDABLE TABLE",
    price: "AED 122.75",
    image: "/best_seller4.webp",
  },
  {
    id: 5,
    name: "EASY FIT SIDE TABLE - 60CM",
    price: "AED 122.75",
    image: "/best_seller5.webp",
  },
  {
    id: 6,
    name: "EASY FIT SIDE TABLE PLUS B",
    price: "AED 122.75",
    image: "/best_seller6.webp",
  },
  {
    id: 7,
    name: "NEWPORT DINING CHAIR",
    price: "AED 122.75",
    image: "/best_seller7.webp",
  },
  {
    id: 8,
    name: "EASY FIT SIDE TABLE - 80CM",
    price: "AED 122.75",
    image: "/best_seller8.webp",
  },
  {
    id: 9,
    name: "SWITCH SUN LOUNGER",
    price: "AED 122.75",
    image: "/best_seller9.webp",
  },
  {
    id: 10,
    name: "ALEXA ROUND DINING TABLE - 148CM",
    price: "AED 122.75",
    image: "/best_seller10.avif",
  },
];

const ProductGrid = () => {
  const [activePopover, setActivePopover] = useState(null);
  const navigate = useNavigate();
  const handleMouseEnter = (id, type) => {
    setActivePopover(`${id}-${type}`);
  };

  const handleMouseLeave = () => {
    setActivePopover(null);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="productSection">
      <SectionHeading title="Best" subtitle="Sellers" />
      <div className="productGrid" data-aos="fade-up" data-aos-delay="100">
        {products.map((product) => (
          <div key={product.id} className="productCard">
            <div
              className="productImageWrapper"
              onClick={() => navigate(`/collections/${product.name}`)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="productImage"
                loading="lazy"
              />
              <div className="iconContainer">
                <div
                  className="iconWrapper"
                  onMouseEnter={() => handleMouseEnter(product.id, "wishlist")}
                  onMouseLeave={handleMouseLeave}
                >
                  <i className="fas fa-heart"></i>
                  {activePopover === `${product.id}-wishlist` && (
                    <div className="popover">Add to Wishlist</div>
                  )}
                </div>
                <div
                  className="iconWrapper"
                  onMouseEnter={() => handleMouseEnter(product.id, "cart")}
                  onMouseLeave={handleMouseLeave}
                >
                  <i className="fas fa-shopping-bag"></i>
                  {activePopover === `${product.id}-cart` && (
                    <div className="popover">Add to Cart</div>
                  )}
                </div>
              </div>
            </div>
            <p className="productName">{product.name}</p>
            <p className="productPrice">{product.price}</p>
          </div>
        ))}
      </div>
      <div className="productMore">
        <a
          className="shopButton"
          onClick={() => navigate(`/collections/shop-all-products`)}
        >
          See All Products
        </a>
      </div>
    </section>
  );
};

export default memo(ProductGrid);
