import React from "react";
import "../App.css"; // Add your custom Bootstrap styles here

const productList = [
  {
    image:
      "https://grassitupshop.com/cdn/shop/files/ScreenShot2024-10-21at3.49.46PM_352x352.png?v=1729511584", // Replace with actual image URLs
    name: "CUBIC SQUARE COFFEE TABLE WHITE",
    price: "AED 122.75",
  },
  // Add more products as needed
];

const ProductListing = () => {
  return (
    <div className="py-5">
      <div className="container-fluid">
        <div className="mx-auto text-center mb-4">
          <img
            src="bed.png"
            alt="Category"
            className="mx-auto img-fluid"
            style={{ width: "50px" }}
          />
          <h2 className="mt-3">Latest Products</h2>
          <p className="mt-2">
            Be the first to experience innovation with our latest arrivals.
          </p>
        </div>

        <div className="row g-4">
          {productList.slice(0, 10).map((item, index) => (
            <div key={index} className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="product-card position-relative overflow-hidden text-center">
                <img
                  src={item.image}
                  alt="product"
                  className="img-fluid w-100 transition scale-hover"
                />
                <div className="product-overlay d-flex flex-column justify-content-end p-3">
                  <h4 className="text-white mb-1">{item.price}</h4>
                  <h6 className="text-white">
                    <span className="text-decoration-none text-white">
                      {item.name}
                    </span>
                  </h6>

                  <ul className="list-inline text-warning my-1">
                    {[...Array(4)].map((_, i) => (
                      <li key={i} className="list-inline-item">
                        <i className="fas fa-star"></i>
                      </li>
                    ))}
                    <li className="list-inline-item text-muted">
                      <i className="fas fa-star"></i> (123)
                    </li>
                  </ul>
                </div>

                <div className="action-buttons position-absolute top-0 end-0 p-2">
                  <button className="btn btn-light btn-sm shadow-sm rounded-circle mb-2">
                    <i className="fas fa-eye"></i>
                  </button>
                  <span className="btn btn-light btn-sm shadow-sm rounded-circle mb-2">
                    <i className="fas fa-shopping-cart"></i>
                  </span>
                  <button className="btn btn-light btn-sm shadow-sm rounded-circle">
                    <i className="fas fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <span className="btn btn-outline-primary">See all Products</span>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
