import React, { useEffect, useState } from "react";
import "./OrderReturn.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Breadcrumb from "../Breadcrumb";
const OrderReturn = () => {
  const [selectedReason, setSelectedReason] = useState("");
  const [additionalReason, setAdditionalReason] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
    }
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);
  return (
    <>
      <Breadcrumb
        path={[{ label: "Home", link: "/" }, { label: "Return Order" }]}
      />
      <div className="return-order-container">
        <h2
          className="return-order-page-title"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          Return Order
        </h2>
        <div className="return-order-card">
          <div
            className="return-order-product-info"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="https://terraoutdoor.com/cdn/shop/files/seaside-dune-sofa-1_600x.jpg"
              alt="Seaside Sofa"
              className="return-order-product-image"
            />
            <div className="return-order-product-details">
              <h3>Seaside Sofa In Dune</h3>
              <p>Fabric: Hazel</p>
              <p>Item Number: 2141637-TEAK</p>
              <p className="return-order-product-price">
                $3,460 <span className="strikethrough">$4,325</span>
              </p>
              <p className="return-order-product-qty">Qty: 2</p>
            </div>
          </div>

          <div
            className="return-order-cancel-reason-section"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <p className="return-order-section-label">
              Select Reason For Cancellation
            </p>
            <div className="return-order-radio-list">
              {[
                "Wrong Product Selected By Me",
                "Product Not Found In Inventory",
                "Order Cancellation Request Denied",
                "Payment Processing Error Occurred",
                "Insufficient Stock Available",
              ].map((reason, index) => (
                <label key={index} className="return-order-radio-option">
                  <input
                    type="radio"
                    name="cancelReason"
                    value={reason}
                    checked={selectedReason === reason}
                    onChange={(e) => setSelectedReason(e.target.value)}
                  />
                  {reason}
                </label>
              ))}
            </div>
          </div>

          <div
            className="return-order-textarea-group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <label htmlFor="additionalReason">Reason For Canceling?</label>
            <textarea
              id="additionalReason"
              placeholder="Write your reason here..."
              value={additionalReason}
              onChange={(e) => setAdditionalReason(e.target.value)}
            />
          </div>

          <div
            className="return-order-file-upload-group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <label className="return-order-file-upload-label">
              Upload Image
            </label>
            <div className="return-order-upload-box">
              <input
                type="file"
                accept="image/*"
                id="uploadInput"
                onChange={handleFileUpload}
                hidden
              />
              <label
                htmlFor="uploadInput"
                className="return-order-upload-trigger"
              >
                📁 Browse Files to upload
              </label>
              {uploadedFileName && (
                <p className="return-order-file-name">{uploadedFileName}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderReturn;
