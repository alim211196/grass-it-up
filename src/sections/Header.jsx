import React, { useState } from "react";
import styles from "../css/style.module.css"; // Import CSS Module
import "bootstrap/dist/css/bootstrap.min.css";
const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
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
  );
};

export default Header;
