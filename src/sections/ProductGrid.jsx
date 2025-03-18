import React, { useEffect, useState } from "react";
import "../App.css";
import SectionHeading from "./SectionHeading";
import AOS from "aos";
import "aos/dist/aos.css";
const products = [
  {
    id: 1,
    name: "Omer Tray Table Lava",
    price: "AED 122.75",
    image:
      "https://grassitupshop.com/cdn/shop/products/photo_2882b7f0-c005-42d9-9ac1-f264629f018a_288x288.jpg?v=1630241105",
  },
  {
    id: 2,
    name: "CUBIC COFFEE TABLE LAVA",
    price: "AED 122.75",
    image:
      "https://grassitupshop.com/cdn/shop/files/ScreenShot2024-10-21at3.47.56PM_352x352.png?v=1729511339",
  },
  {
    id: 3,
    name: "CUBIC SQUARE COFFEE TABLE WHITE",
    price: "AED 122.75",
    image:
      "https://grassitupshop.com/cdn/shop/files/ScreenShot2024-10-21at3.49.46PM_352x352.png?v=1729511584",
  },
  {
    id: 4,
    name: "ALEXA DINING EXTENDABLE TABLE",
    price: "AED 122.75",
    image:
      "https://grassitupshop.com/cdn/shop/files/ScreenShot2023-12-08at1.10.29PM_352x352.png?v=1702026814",
  },
  {
    id: 5,
    name: "EASY FIT SIDE TABLE - 60CM",
    price: "AED 122.75",
    image:
      "https://grassitupshop.com/cdn/shop/files/ScreenShot2023-11-18at1.39.43PM_352x352.png?v=1700300570",
  },
  {
    id: 6,
    name: "EASY FIT SIDE TABLE PLUS B",
    price: "AED 122.75",
    image:
      "https://grassitupshop.com/cdn/shop/files/ScreenShot2023-11-24at12.07.30PM_352x352.png?v=1700813364",
  },
  {
    id: 7,
    name: "NEWPORT DINING CHAIR",
    price: "AED 122.75",
    image:
      "https://grassitupshop.com/cdn/shop/files/FUR5000255-0001_Diphano_Newport_Dining_20armchair_AF10_203R03_20HFTK_20C603_02_58c9da10-c5a0-429d-a48f-8599dbeea37d_352x352.jpg?v=1736256391",
  },
  {
    id: 8,
    name: "EASY FIT SIDE TABLE - 80CM",
    price: "AED 122.75",
    image:
      "https://grassitupshop.com/cdn/shop/files/ScreenShot2023-11-21at3.50.55PM_352x352.png?v=1700632114",
  },
  {
    id: 9,
    name: "SWITCH SUN LOUNGER",
    price: "AED 122.75",
    image:
      "https://grassitupshop.com/cdn/shop/files/ScreenShot2023-12-13at1.10.10PM_352x352.png?v=1702458675",
  },
  {
    id: 10,
    name: "ALEXA ROUND DINING TABLE - 148CM",
    price: "AED 122.75",
    image:
      "https://grassitupshop.com/cdn/shop/files/ScreenShot2023-09-29at10.05.42AM_288x288.png?v=1695967912",
  },
];

const ProductGrid = () => {
  const [activePopover, setActivePopover] = useState(null);

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
      <SectionHeading title="Furniture" subtitle="PRODUCTS" />
      <div className="productGrid" data-aos="fade-up" data-aos-delay="100">
        {products.map((product) => (
          <div key={product.id} className="productCard">
            <div className="productImageWrapper">
              <img
                src={product.image}
                alt={product.name}
                className="productImage"
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
    </section>
  );
};

export default ProductGrid;
