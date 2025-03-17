import React from "react";
import "../App.css";

const VisitOurShowroom = () => {
  return (
    <div className="visit-showroom-container">
      {/* Left Section */}
      <div className="showroom-left">
        <h2 className="small-text">Visit our</h2>
        <h1 className="big-text">
          Sh
          <span className="rotating-image">
            <img src="chair.webp" alt="chair" />
          </span>
          wroom
        </h1>
      </div>

      {/* Right Section */}
      <div className="showroom-right">
        <img
          src="https://grassitupshop.com/cdn/shop/files/Sahara_608x416.jpg?v=1732629985"
          alt="Showroom"
          className="right-image"
        />
      </div>
    </div>
  );
};

export default VisitOurShowroom;
