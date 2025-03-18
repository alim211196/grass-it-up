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
          S
          <span className="rotating-image">
            <img src="chair.webp" alt="chair" />
          </span>
          owroom
        </h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Suspendisse potenti. Vivamus interdum, sapien nec tincidunt
          tincidunt, velit orci tempus odio, a feugiat ligula eros nec libero.
          Fusce euismod, lorem vel scelerisque interdum, ligula urna interdum
          turpis, at pellentesque purus lorem nec leo. Curabitur vel ex et erat
          pellentesque luctus. Integer malesuada, ex ac malesuada vulputate,
          urna purus vestibulum mauris, eget imperdiet dui turpis ac purus.
        </p>
        <a className="shopButton">Go to location</a>
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
