import React, { useState, useEffect } from "react";
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
    "partner-light-1.svg",
    "partner-light-2.svg",
    "partner-light-4.svg",

    "partner-light-6.svg",
    "partner-light-7.svg",
  ];

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const startAnimation = () => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 4000); // Animation runs for 4 seconds, then stops
    };

    const interval = setInterval(startAnimation, 8000); // Restarts every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="partner-section">
      <div className={`marquee-wrapper ${isAnimating ? "animate" : ""}`}>
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
  );
};

export default PartnerMarquee;
