import React from "react";
import "../App.css";
import Header from "./Header";

const HeroBanner = () => {
  return (
    <div className={"heroContainer"} id="videoSection">
      {/* Navbar */}
      <Header />
      {/* Video Background */}
      <div className={"hero"}>
        <video autoPlay muted loop className={"heroVideo"}>
          <source
            src="https://cdn.shopify.com/videos/c/o/v/d3c58c6ee53a416c9ee6a82443e6e0ed.mp4"
            type="video/mp4"
          />
          <img
            src="/fallback.jpg"
            className={`img-fluid ${"heroImage"}`}
            alt="Grass It Up"
          />
        </video>
      </div>
    </div>
  );
};

export default HeroBanner;
