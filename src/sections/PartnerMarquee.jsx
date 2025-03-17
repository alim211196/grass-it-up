import React, { useEffect, useRef } from "react";
import "../App.css";

const PartnerMarquee = () => {
  const partners = [
    "partner-light-1.svg",
    "partner-light-2.svg",
    "partner-light-4.svg",
    "partner-light-6.svg",
    "partner-light-7.svg",
    "partner-light-1.svg",
    "partner-light-2.svg",
    "partner-light-4.svg",
    "partner-light-6.svg",
    "partner-light-7.svg",
  ];

  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const clone = marquee.innerHTML;
      marquee.innerHTML += clone; // Duplicating logos for smooth infinite scrolling
    }
  }, []);

  return (
    <div className="partner-section">
      {/* Left Section - Title & Description */}
      <div className="top-brands">
        <h2 className="top-brands-title">Top Brands</h2>
        <p className="top-brands-description">
          Discover the finest collections from top furniture brands.
        </p>
      </div>

      {/* Right Section - Marquee */}
      <div className="marquee-container">
        <div className="marquee" ref={marqueeRef}>
          {partners.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="partner-logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerMarquee;
