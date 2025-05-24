import React, { useEffect, useRef, memo } from "react";
import "../../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
const PartnerMarquee = () => {
  const partners = [
    "tidelli_white.svg",
    "Hofats_white.png",
    "roolf-living_white.svg",
    "livintwist_white.svg",
    "diphano_white.png",
    "jardinico_white.svg",
    "MeroniColzani_white.png",
    "Myyour_white.png",
    "Gv2_white.png",
    "Master_Logo_WHITE.png",
  ];

  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const clone = marquee.innerHTML;
      marquee.innerHTML += clone; // Duplicating logos for smooth infinite scrolling
    }
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="partner-section">
      {/* Left Section - Title & Description */}
      <div className="top-brands" data-aos="fade-left" data-aos-delay="100">
        <h2 className="top-brands-title">Top Brands</h2>
        <p className="top-brands-description">
          Discover the finest collections from top furniture brands.
        </p>
      </div>
      <div className="d-flex align-items-center">
        <div className="me-4"></div>
        <div
          style={{
            height: "50px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        ></div>
        <div className="ms-4"></div>
      </div>

      {/* Right Section - Marquee */}
      <div
        className="marquee-container"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <div className="marquee" ref={marqueeRef}>
          {partners.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="partner-logo"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(PartnerMarquee);
