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
        style={{
          backgroundImage:
            "url(https://dev-risians.com/html/grassitup/images/footer-overlay-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative", // Required for overlay
        }}
      >
        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(56, 55, 61, 0.8)", // Dark overlay (adjust opacity)
            boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.6)", // Shadow effect
            zIndex: 1, // Keep it above background image
          }}
        ></div>
        <div style={{ position: "relative", zIndex: 2 }}>
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
          <section data-aos="fade-down" data-aos-delay="100">
            <div className="text-center text-md-start pt-5">
              <div className="row justify-content-around gap-4">
                {" "}
                {/* Added spacing */}
                {/* Company Info */}
                <div className="col-md-4 col-lg-4 mb-4">
                  <img
                    src={"/Master_Logo_WHITE.png"}
                    alt="Grass It Up"
                    className={"logoImage"}
                    loading="lazy"
                  />

                  <p style={{ marginLeft: "20px" }}>
                    Welcome to Grassitup - Luxury Outdoor Furniture Store Dubai,
                    offering a wide selection of contemporary and stylish garden
                    furniture with a focus on quality, durability, and design,
                    including dining sets, sofas, and more.
                  </p>
                </div>
                {/* Useful Links */}
                <div className="col-md-3 col-lg-2 mb-4">
                  <h6 className="text-uppercase fw-bold">Help & Advice</h6>
                  <hr />
                  <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                    <li style={{ lineHeight: "2" }}>
                      <a
                        href="/about-us"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        About Us
                      </a>
                    </li>
                    <li style={{ lineHeight: "2" }}>
                      <a
                        href="/faqs"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Faqs
                      </a>
                    </li>
                    <li style={{ lineHeight: "2" }}>
                      <a
                        href="/terms-conditions"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li style={{ lineHeight: "2" }}>
                      <a
                        href="/privacy-policy"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li style={{ lineHeight: "2" }}>
                      <a
                        href="/returns-exchanges"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Returns & Exchanges
                      </a>
                    </li>
                  </ul>
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
                {/* Products */}
                <div className="col-md-2 col-lg-2 mb-4">
                  <h6 className="text-uppercase fw-bold">Payment Method</h6>
                  <hr />
                  <p
                    className="text-white"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <span>
                      <img
                        src={"/apple-pay.svg"}
                        alt="Apple-Pay"
                        style={{
                          width: "10vw", // Adjusts width based on viewport width
                          maxWidth: "40px", // Prevents it from growing too large
                          height: "auto", // Maintains aspect ratio
                        }}
                        loading="lazy"
                      />
                    </span>
                    <span>
                      <img
                        src={"/mastercard.svg"}
                        alt="Mastercard"
                        style={{
                          width: "10vw", // Adjusts width based on viewport width
                          maxWidth: "40px", // Prevents it from growing too large
                          height: "auto", // Maintains aspect ratio
                        }}
                        loading="lazy"
                      />
                    </span>
                    <span>
                      <img
                        src={"/paypal.svg"}
                        alt="paypal"
                        style={{
                          width: "10vw", // Adjusts width based on viewport width
                          maxWidth: "40px", // Prevents it from growing too large
                          height: "auto", // Maintains aspect ratio
                        }}
                        loading="lazy"
                      />
                    </span>
                    <span>
                      <img
                        src={"/visa.svg"}
                        alt="Visa"
                        style={{
                          width: "10vw", // Adjusts width based on viewport width
                          maxWidth: "40px", // Prevents it from growing too large
                          height: "auto", // Maintains aspect ratio
                        }}
                        loading="lazy"
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Copyright Section */}
          <div
            className="text-center p-3"
            style={{
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
        </div>
      </footer>
    </div>
  );
};

export default Footer;
