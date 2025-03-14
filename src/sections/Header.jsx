import React, { useState } from "react";
import "../App.css";
const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <header
      className={`${"navbar"} ${isHovered ? "navbarHover" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={"container"}>
        {/* Logo */}
        <div className={"logo"}>
          <a href="/">
            <img
              src="/grassitup.png"
              alt="Grass It Up"
              className={"logoImage"}
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className={"navContainer"}>
          <ul className={"navLinks"}>
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
        <div className={"navIcons"}>
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
