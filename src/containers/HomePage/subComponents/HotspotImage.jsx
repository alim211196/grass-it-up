import React, { useEffect, useState, memo } from "react";
import "../../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
const HotspotImage = () => {
  const [activeSpot, setActiveSpot] = useState(null);

  // Define Hotspot positions & details
  const hotspots = [
    { id: 1, x: "50%", y: "35%", text: "TEAK" },
    { id: 2, x: "85%", y: "38%", text: "ALUMINUM" },
    { id: 3, x: "25%", y: "60%", text: "SUNBRELLA" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="hotspot-container" data-aos="fade-up" data-aos-delay="100">
      {/* Background Image */}
      <img
        src="/material-integrity.webp"
        alt="Interactive Hotspot"
        className="hotspot-image"
        loading="lazy"
      />

      {/* Hotspot Markers */}
      {hotspots.map((spot) => (
        <div
          key={spot.id}
          className={`hotspot ${activeSpot === spot.id ? "active" : ""}`}
          style={{ top: spot.y, left: spot.x }}
          onMouseEnter={() => setActiveSpot(spot.id)}
          onMouseLeave={() => setActiveSpot(null)}
        >
          {/* Animated Dot with Text Inside */}
          <div className="hotspot-dot">
            {activeSpot === spot.id && (
              <span className="hotspot-label">{spot.text}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default memo(HotspotImage);
