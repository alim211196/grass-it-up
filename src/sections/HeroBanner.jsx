import React, { useState } from "react";
import styles from "../css/style.module.css"; // Import CSS Module
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

const HeroBanner = () => {
  return (
    <div className={styles.heroContainer}>
      {/* Navbar */}
      <Header />
      {/* Video Background */}
      <div className={styles.hero}>
        <video autoPlay muted loop className={styles.heroVideo}>
          <source
            src="https://cdn.shopify.com/videos/c/o/v/d3c58c6ee53a416c9ee6a82443e6e0ed.mp4"
            type="video/mp4"
          />
          <img
            src="/fallback.jpg"
            className={`img-fluid ${styles.heroImage}`}
            alt="Grass It Up"
          />
        </video>

        {/* Overlay Content */}
        {/* <div className={styles.overlay}>
          <h1 className={styles.heroTitle}>
            Outdoor Furniture Inspired by Nature
          </h1>
          <p className={styles.heroSubtitle}>
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
