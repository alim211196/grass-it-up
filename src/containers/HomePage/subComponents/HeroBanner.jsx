import React, { memo } from "react";
import "../../../App.css";

const HeroBanner = () => {
  return (
    <div className={"heroContainer"} id="videoSection">
      {/* Video Background */}
      <div className={"hero"}>
        <video autoPlay muted loop className={"heroVideo"}>
          <source src="/banner_video.mp4" type="video/mp4" />
          <img
            src="/fallback.jpg"
            className={`img-fluid ${"heroImage"}`}
            alt="Grass It Up"
            loading="lazy"
          />
        </video>
        {/* Centered Overlay Text */}
        <div className="overlay">
          <h1 className="heroTitle">Elevate Your Outdoors</h1>
        </div>
      </div>
    </div>
  );
};

export default memo(HeroBanner);
