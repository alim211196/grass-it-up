import React, { useState } from "react";
import "../productListing.css"; // Custom styles
import { useNavigate } from "react-router-dom";

const ProductGrid = ({
  products,
  colSpan,
  isFilterOpen,
  toggleFilter,
  categoryTitle,
}) => {
  const filterSections = [
    {
      id: "category",
      title: "Category",
      options: [
        "Accent Tables",
        "Adirondacks & Rockers",
        "Chaises & Daybeds",
        "Coffee Tables",
        "Dining Seating",
        "Lounge Chairs",
        "Loveseats",
        "Ottomans",
        "Sectionals",
        "Side & End Tables",
        "Sofas",
      ],
    },
    {
      id: "collection",
      title: "Collection",
      options: [
        "Apollo",
        "Aptos",
        "Avila",
        "Barrel Woven Pouf",
        "Belvedere",
        "Bolinas",
        "Bordeaux",
        "Breeze",
        "Calabasas",
        "Cambria",
        "Carmel",
        "Cavallo",
        "Cazadero",
        "Click",
        "Cloud",
        "Costa Mesa",
        "Diablo",
        "Elements",
        "Harborside",
        "Houe",
        "Kai",
        "La Jolla",
        "Lisbon",
        "Luna",
        "Marin",
        "Mariposa",
        "Mason",
        "Monte Rio",
        "Montecito",
        "Nicasio",
        "Ojai",
        "Olema",
        "Pasadena",
        "Presidio",
        "Ravello",
        "Reclips",
        "Redondo",
        "Rivoli",
        "Salt Point",
        "Santa Monica",
        "Sausalito",
        "Seaside",
        "Skyline",
        "Solana",
        "Sonora",
        "Stinson",
        "Tiburon",
        "Ventura",
        "Vista",
        "Woodside",
      ],
    },
    {
      id: "frame-color",
      title: "Frame Color",
      options: [
        "Black",
        "Charcoal",
        "Dune",
        "Grey",
        "Light Grey",
        "Natural Teak",
        "Natural Wicker",
        "Quartz Grey",
        "GrassItUp Wicker",
        "Weathered Teak",
        "White",
      ],
    },
    {
      id: "genre",
      title: "Genre",
      options: ["Clearance", "Dining & Bar", "Lounging", "Sale", "Swivel"],
    },
    {
      id: "material",
      title: "Material",
      options: [
        "Aluminum",
        "Bamboo",
        "Concrete",
        "Plastic",
        "Quartz Grey Aluminum",
        "Steel",
        "Teak",
        "Textilene Mesh",
        "Wicker",
        "Woven Rope",
      ],
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="product-page-container">
      {/* Sidebar Filter Section */}
      <div className={`filter-section1 ${isFilterOpen ? "open" : "closed"}`}>
        <div className="CollectionSidebar__Header">
          <h4 className="filter-heading">Filters</h4>
          <a onClick={toggleFilter} className="filter-collapse">
            {" "}
            collapse
          </a>
        </div>

        <div className="accordion">
          {filterSections.map((section) => (
            <div className="accordion-item" key={section.id}>
              <input
                type="checkbox"
                id={section.id}
                className="accordion-checkbox"
              />
              <label htmlFor={section.id} className="accordion-title">
                {section.title}
              </label>
              <div className="accordion-content">
                <ul>
                  {section.options.map((option, index) => (
                    <li key={index} className="accordion-list">
                      <input type="checkbox" /> {option}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Grid Section */}
      <div
        className={`product-grid-container ${
          isFilterOpen ? "shrink" : "expand"
        }`}
      >
        <div className="row" style={{ borderRight: "1px dashed #ddd" }}>
          {products.map((product) => (
            <div
              key={product.id}
              className={`col-md-${colSpan} m-0 p-0`}
              onClick={() =>
                navigate(
                  `/collections/${categoryTitle?.toLowerCase()}/products/${product?.name.toLowerCase()}`,
                  { state: product }
                )
              }
            >
              <div className="product-collection-card">
                <div className="product-image-div">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-collection-image"
                    loading="lazy"
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
                <div className="wishlist-icon-div">
                  <i className="fas fa-heart"></i>
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
