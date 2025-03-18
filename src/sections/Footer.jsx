import React, { useEffect } from "react";
import "../App.css"; // Import the custom styles
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <footer className="footer">
      <div className="container11">
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          {/* Left Section - Brand */}
          <div className="col-md-3">
            <h4 className="footer-brand">Grassitup</h4>
            <p>Outdoor Furniture</p>
          </div>

          {/* Social Links */}
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled social-links">
              <li>
                <a href="#" className="facebook">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="instagram">
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:Grass@Grassitup.ae"> Email</a>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="col-md-3">
            <h5>Payment Methods</h5>
            <p> UAE: Credit Card, Cash on Delivery, Bank Transfer</p>
            <p> International: Bank Transfer (Details at Checkout)</p>
          </div>

          {/* Shipping Info */}
          <div className="col-md-3">
            <h5>Shipping & Pricing</h5>
            <p> VAT (5%) applied at checkout.</p>
            <p> Dubai: Free Delivery</p>
            <p> Other Emirates: 350 AED + VAT</p>
            <p> International: Calculated at checkout.</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom text-center mt-4">
          <p>© 2025 Grassitup | Powered by Shopify</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
