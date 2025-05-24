import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

const products = [
  { name: "OUTDOOR LIVING", pathname: "outdoor-living" },
  { name: "OUTDOOR DINING", pathname: "outdoor-dining" },
  { name: "BAR FURNITURE", pathname: "bar-furniture" },
  { name: "SUNLOUNGER & DAYBED", pathname: "sunbed-daybed" },
  { name: "POUFS", pathname: "poufs" },
  { name: "SWINGS & HAMMOCK", pathname: "swings-hammocks" },
  { name: "CARPETS", pathname: "carpets" },
  { name: "LIGHTING", pathname: "lighting" },
  { name: "UMBRELLAS", pathname: "umbrellas" },
  { name: "POTS & PLANTS", pathname: "pots-plants" },
  { name: "ACCESSORIES", pathname: "accessories" },
  { name: "BBQ & FIRE BET", pathname: "bbq-fire-bet" },
];

const brands = [
  { name: "Tidelli", query: "tidelli" },
  { name: "Hofats", query: "hofats" },
  { name: "Roolf Living", query: "roolf-living" },
  { name: "Living Twist", query: "living-twist" },
  { name: "Diphano", query: "diphano" },
  { name: "Jardinico", query: "jardinico" },
  { name: "Meroni", query: "meroni" },
  { name: "Myyour", query: "myyour" },
  { name: "Gv2", query: "gv2" },
  { name: "Grassitup", query: "grassitup" },
];

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
            <li className="nav-item-dropdown">
              <a
                href="/shop-by-product"
                className={
                  location.pathname === "/shop-by-product" ? "active-link" : ""
                }
              >
                Shop by Product
              </a>
              <div className="dropdown-content">
                {products.map((product, index) => (
                  <a
                    key={index}
                    href={`/shop-by-product?category=${product.pathname}`}
                    className={
                      location.pathname ===
                      `/shop-by-product?category=${product.pathname}`
                        ? "active-link"
                        : ""
                    }
                  >
                    {product.name}
                  </a>
                ))}
              </div>
            </li>
            <li className="nav-item-dropdown">
              <a
                href="/shop-by-brand"
                className={
                  location.pathname === "/shop-by-brand" ? "active-link" : ""
                }
              >
                Shop by Brand
              </a>
              <div className="dropdown-content">
                {brands.map((brand, index) => (
                  <a
                    key={index}
                    href={`/shop-by-brand?brand=${brand.query}`}
                    className={
                      location.pathname ===
                      `/shop-by-brand?brand=${brand.query}`
                        ? "active-link"
                        : ""
                    }
                  >
                    {brand.name}
                  </a>
                ))}
              </div>
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
