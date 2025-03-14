import React from "react";
import "../App.css";
import Header from "./Header";

const HeroBanner = () => {
  return (
    <div className={"heroContainer"}>
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

        {/* Overlay Content */}
        {/* <div className={"overlay"}>
          <h1 className={"heroTitle"}>
            Outdoor Furniture Inspired by Nature
          </h1>
          <p className={"heroSubtitle"}>
            Designed for durability, crafted for comfort.
          </p>
          <a href="#" className="btn btn-light btn-lg">
            Shop Now
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default HeroBanner;
