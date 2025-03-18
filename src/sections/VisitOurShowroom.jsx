import React, { useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
const VisitOurShowroom = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="visit-showroom-container">
      {/* Left Section */}
      <div className="showroom-left" data-aos="fade-left" data-aos-delay="100">
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
      <div
        className="showroom-right"
        data-aos="fade-right"
        data-aos-delay="100"
      >
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
