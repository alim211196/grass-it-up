import React, { useEffect, useState } from "react";
import "./OrderCancel.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Breadcrumb from "../Breadcrumb";
const OrderCancel = () => {
  const [selectedReason, setSelectedReason] = useState("");
  const [comment, setComment] = useState("");

  const reasons = [
    "Wrong Product Selected by Me",
    "Product Not Found in Inventory",
    "Order Cancellation Request Denied",
    "Payment Processing Error Occurred",
    "Insufficient Stock Available",
  ];

  const handleCancel = () => {
    if (!selectedReason) {
      alert("Please select a reason for cancellation.");
      return;
    }
    // Handle submission logic here
    console.log({ selectedReason, comment });
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);
  return (
    <>
      <Breadcrumb
        path={[{ label: "Home", link: "/" }, { label: "Cancel Order" }]}
      />
      <h1
        className="cancel-order-title"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        Cancel Order
      </h1>
      <div className="cancel-order-container">
        <div
          className="cancel-order-header"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src="https://terraoutdoor.com/cdn/shop/files/seaside-dune-sofa-1_600x.jpg"
            alt="Sofa"
            className="cancel-order-product-image"
          />
          <div>
            <h3 className="cancel-order-product-title">Seaside Sofa in Dune</h3>
            <p className="cancel-order-product-id">Item: 234485-T3AK</p>
            <p className="cancel-order-product-price">$3,140</p>
            <p className="cancel-order-product-qty">Qty: 2</p>
          </div>
        </div>

        <div
          className="cancel-reason-section"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h4>Select Reason for Cancellation</h4>
          {reasons.map((reason, index) => (
            <label key={index} className="reason-option">
              <input
                type="radio"
                value={reason}
                checked={selectedReason === reason}
                onChange={(e) => setSelectedReason(e.target.value)}
              />
              {reason}
            </label>
          ))}
        </div>

        <div
          className="comment-section"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <label htmlFor="comment">Reason for Cancelling?</label>
          <textarea
            id="comment"
            placeholder="Add a brief note..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        <button
          className="cancel-order-button"
          onClick={handleCancel}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          CANCEL ORDER
        </button>
      </div>
    </>
  );
};

export default OrderCancel;
