import React from "react";
import "../App.css";
import SectionHeading from "./SectionHeading";

const products = [
  {
    id: 1,
    name: "Benches",
    image:
      "https://maglin-1c124.kxcdn.com/app/uploads/2020/09/products-menu_benches-1-380x240.png",
  },
  {
    id: 2,
    name: "Tables & Seating",
    image:
      "https://maglin-1c124.kxcdn.com/app/uploads/2020/09/products-menu_tables-seating-1-380x240.png",
  },
  {
    id: 3,
    name: "Waste & Recycling",
    image:
      "https://maglin-1c124.kxcdn.com/app/uploads/2020/09/products-menu_waste-recycle-1-380x240.png",
  },
  {
    id: 4,
    name: "Bike Racks",
    image:
      "https://maglin-1c124.kxcdn.com/app/uploads/2020/09/products-menu_bikeracks-1-380x240.png",
  },
  {
    id: 5,
    name: "Panels",
    image:
      "https://maglin-1c124.kxcdn.com/app/uploads/2020/09/products-menu_panels-380x240.png",
  },
  {
    id: 6,
    name: "Bollards",
    image:
      "https://maglin-1c124.kxcdn.com/app/uploads/2020/09/products-menu_bollards-1-380x240.png",
  },
  {
    id: 7,
    name: "Planters",
    image:
      "https://maglin-1c124.kxcdn.com/app/uploads/2020/09/products-menu_planters-1-380x240.png",
  },
  {
    id: 8,
    name: "Sun Shades",
    image:
      "https://maglin-1c124.kxcdn.com/app/uploads/2024/04/products-menu_sun-shades-380x240.png",
  },
  {
    id: 9,
    name: "Planters",
    image:
      "https://maglin-1c124.kxcdn.com/app/uploads/2020/09/products-menu_planters-1-380x240.png",
  },
  {
    id: 10,
    name: "Bollards",
    image:
      "https://maglin-1c124.kxcdn.com/app/uploads/2020/09/products-menu_bollards-1-380x240.png",
  },
];

const ProductGrid = () => {
  return (
    <section className="productSection">
      <SectionHeading title="Furniture" subtitle="PRODUCTS" />
      <div className="productGrid">
        {products.map((product) => (
          <div key={product.id} className="productCard">
            <div className="productImageWrapper">
              <img
                src={product.image}
                alt={product.name}
                className="productImage"
              />
              <div className="iconContainer">
                <i className="fas fa-heart"></i>
                <i className="fas fa-shopping-bag"></i>
                <i className="fas fa-eye"></i>
              </div>
            </div>
            <p className="productName">{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
