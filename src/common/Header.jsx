import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const location = useLocation();

  const isHomePage = ["/interior-designer/register", "/"].includes(
    location.pathname
  );
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

  const navIcons = [
    { name: "search", path: "/search" },
    { name: "heart", path: "/wishlist" },
    { name: "avatar", path: "/profile" },
    { name: "bag", path: "/cart" },
  ];
  const cartCount = 2;
  const wishlistCount = 3;
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
          {navIcons.map((icon, index) => (
            <a href={icon.path} key={index} className="iconWrapper">
              <img
                key={icon.name}
                src={
                  isDarkMode ? `/${icon.name}.png` : `/${icon.name}_white.png`
                }
                alt={icon.name}
                loading="lazy"
              />
              {icon.path === "/cart" && cartCount > 0 && (
                <span className="notify-badge">{cartCount}</span>
              )}
              {icon.path === "/wishlist" && wishlistCount > 0 && (
                <span className="notify-badge">{wishlistCount}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
