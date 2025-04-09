import React, { useEffect } from "react";
import "./OrderTracking.css";
import Breadcrumb from "../Breadcrumb";
import AOS from "aos";
import "aos/dist/aos.css";
const OrderTracking = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);
  return (
    <>
      <Breadcrumb
        path={[{ label: "Home", link: "/" }, { label: "Track Order" }]}
      />
      <div className="track-order-container">
        <h1
          className="track-order-title"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          Track Order
        </h1>

        <div className="track-order-card">
          <div
            className="track-order-product-info"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="https://terraoutdoor.com/cdn/shop/files/seaside-dune-sofa-1_600x.jpg"
              alt="Seaside Sofa"
              className="track-order-product-image"
            />
            <div className="track-order-product-details">
              <h3>Seaside Sofa In Dune</h3>
              <p>Fabric: Hazel</p>
              <p>Item Number: 2141637-TEAK</p>
              <p className="track-order-product-price">
                $3,460 <span className="strikethrough">$4,325</span>
              </p>
              <p className="track-order-product-qty">Qty: 2</p>
            </div>
          </div>

          <div
            className="track-order-order-details"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p>
              <strong>Expected Delivery Date:</strong> 01 Jan 2025
            </p>
            <p>
              <strong>Tracking ID:</strong> TRAC5678987
            </p>
          </div>

          <div
            className="track-order-order-status"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h4>Order Status</h4>
            <ul className="track-order-status-list">
              <li className="track-order-status-complete">
                <div className="track-order-status-dot" />
                <div>
                  <p>
                    <strong>Order Placed</strong>
                  </p>
                  <p>01 Jan 2025, 4:00 PM</p>
                </div>
              </li>
              <li className="track-order-status-active">
                <div className="track-order-status-dot" />
                <div>
                  <p>
                    <strong>In Progress</strong>
                  </p>
                  <p>01 Jan 2025, 6:00 PM</p>
                </div>
              </li>
              <li>
                <div className="track-order-status-dot" />
                <div>
                  <p>
                    <strong>Shipped</strong>
                  </p>
                  <p>Expected 02 Jan 2025</p>
                </div>
              </li>
              <li>
                <div className="track-order-status-dot" />
                <div>
                  <p>
                    <strong>Delivered By</strong>
                  </p>
                  <p>04 Jan 2025</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTracking;
