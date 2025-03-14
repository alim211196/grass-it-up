import React, { useState } from "react";
import styles from "../css/HeroBanner.module.css"; // Import CSS Module
import "bootstrap/dist/css/bootstrap.min.css";

const HeroBanner = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={styles.heroContainer}>
      {/* Navbar */}
      <header
        className={`${styles.navbar} ${isHovered ? styles.navbarHover : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <a href="/">
              <img
                src="/grassitup.png"
                alt="Grass It Up"
                className={styles.logoImage}
              />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className={styles.navContainer}>
            <ul className={styles.navLinks}>
              <li>
                <a href="#">SHOP BY PRODUCT</a>
              </li>
              <li>
                <a href="#">SHOP BY MATERIAL</a>
              </li>
              <li>
                <a href="#">SHOP BY COLLECTION</a>
              </li>
            </ul>
          </nav>

          {/* Icons */}
          <div className={styles.navIcons}>
            <i className="fas fa-search"></i>
            <i className="fas fa-map-marker-alt"></i>
            <i className="fas fa-user"></i>
            <i className="fas fa-shopping-bag"></i>
          </div>
        </div>
      </header>

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
