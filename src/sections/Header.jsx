import React, { useState, useEffect } from "react";
import "../App.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoHeight =
        document.getElementById("videoSection")?.offsetHeight || 0;
      setIsScrolled(window.scrollY > videoHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${
        isScrolled || isHovered ? "navbarHover" : "navbarTransparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={"container"}>
        {/* Logo */}
        <div className={"logo"}>
          <a href="/">
            <img
              src={
                isScrolled || isHovered
                  ? "/Master_Logo_RGB.png"
                  : "/Master_Logo_WHITE.png"
              }
              alt="Grass It Up"
              className={"logoImage"}
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className={"navContainer"}>
          <ul className={"navLinks-header"}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Brands</a>
            </li>
            <li>
              <a href="#">Item on sale</a>
            </li>
            <li>
              <a href="#">Blog</a>
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
