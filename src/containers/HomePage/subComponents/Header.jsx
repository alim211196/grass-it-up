import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../../App.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isDarkMode = !isHomePage || isScrolled || isHovered; // True when navbar should be dark

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const videoHeight =
        document.getElementById("videoSection")?.offsetHeight || 0;
      setIsScrolled(window.scrollY > videoHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`navbar ${isDarkMode ? "navbarHover" : "navbarTransparent"}`}
      onMouseEnter={() => isHomePage && setIsHovered(true)}
      onMouseLeave={() => isHomePage && setIsHovered(false)}
    >
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img
              src={
                isDarkMode ? "/Master_Logo_RGB.png" : "/Master_Logo_WHITE.png"
              }
              alt="Grass It Up"
              className="logoImage"
              loading="lazy"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="navContainer">
          <ul className="navLinks-header">
            <li>
              <a
                href="/shop-by-product"
                className={
                  location.pathname === "/shop-by-product" ? "active-link" : ""
                }
              >
                Shop by Product
              </a>
            </li>
            <li>
              <a
                href="/shop-by-brand"
                className={
                  location.pathname === "/shop-by-brand" ? "active-link" : ""
                }
              >
                Shop by Brand
              </a>
            </li>
            <li>
              <a
                href="/shop-by-material"
                className={
                  location.pathname === "/shop-by-material" ? "active-link" : ""
                }
              >
                Shop by Material
              </a>
            </li>
            <li>
              <a
                href="/shop-by-collection"
                className={
                  location.pathname === "/shop-by-collection"
                    ? "active-link"
                    : ""
                }
              >
                Shop by Collection
              </a>
            </li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="navIcons">
          {["search", "location", "avatar", "bag"].map((icon) => (
            <img
              key={icon}
              src={isDarkMode ? `/${icon}.png` : `/${icon}_white.png`}
              alt={icon}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
