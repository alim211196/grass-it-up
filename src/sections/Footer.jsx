import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div style={{ width: "100%" }}>
      {/* Added padding for better layout */}
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1c2331" }}
      >
        {/* Social Media Links Section */}
        <section
          className="d-flex justify-content-between align-items-center p-4"
          style={{ backgroundColor: "#7F9C90" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div>
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="#" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        {/* Main Footer Content */}
        <section
          style={{ backgroundColor: "#38373D" }}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <div className="text-center text-md-start pt-5">
            <div className="row justify-content-around gap-4">
              {" "}
              {/* Added spacing */}
              {/* Company Info */}
              <div className="col-md-3 col-lg-3 mb-4">
                <img
                  src={"/Master_Logo_WHITE.png"}
                  alt="Grass It Up"
                  className={"logoImage"}
                />

                <p style={{ marginLeft: "20px" }}>
                  Welcome to Grassitup - Luxury Outdoor Furniture Store Dubai
                </p>
              </div>
              {/* Products */}
              <div className="col-md-2 col-lg-2 mb-4">
                <h6 className="text-uppercase fw-bold">Payment Method</h6>
                <hr />
                <p className="text-white">
                  For 🇦🇪 UAE customer they can pay by Credit Card or Cash at
                  time of delivery also available by bank transfer before
                  delivery.
                </p>
              </div>
              {/* Useful Links */}
              <div className="col-md-2 col-lg-3 mb-4">
                <h6 className="text-uppercase fw-bold">
                  What is included in the prices
                </h6>
                <hr />
                <p className="text-white">
                  For each products we list in its description what is included
                  in the price
                </p>
                <p className="text-white">
                  For UAE Customers at the checkout we add the local VAT
                  (currently at 5%)
                </p>
              </div>
              {/* Contact Info */}
              <div className="col-md-3 col-lg-2 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr />
                <p>
                  <i className="fas fa-home mr-3"></i> Dubai, UAE
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> Grass@Grassitup.ae
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> +971 4 33 88 169
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> +971 4 33 88 169
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright Section */}
        <div
          className="text-center p-3"
          style={{
            backgroundColor: "#38373D",
            borderTop: "1px dashed #7F9C90",
          }}
        >
          Copyright © 2025 {""}
          <a
            className="text-white"
            href="https://grassitupshop.com/"
            style={{ textDecoration: "none" }}
          >
            Grass it up
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
