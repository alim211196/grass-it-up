import { useEffect, useState, useRef } from "react";
import "../App.css";

const InformativeCategorySection = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.8 && bottom > windowHeight * 0.2) {
          setIsZoomed(true);
        } else {
          setIsZoomed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="informative-category-section" ref={sectionRef}>
      <div className="informative-category-section__image-container">
        {/* First Image */}
        <img
          src="https://terraoutdoor.com/cdn/shop/files/Avila_-_home_pagejpg_720x.jpg?v=1723002939"
          alt="Outdoor Furniture"
          className={`informative-category-section__image ${
            isZoomed
              ? "informative-category-section__image--zoom-in"
              : "informative-category-section__image--zoom-out"
          }`}
        />

        {/* Second Image with Text Overlay */}
        <div className="image-with-text">
          <img
            src="https://terraoutdoor.com/cdn/shop/files/chaise-overlap_1080x.png?v=1716935605"
            alt="Outdoor Furniture"
            className={`informative-category-section__image ${
              isZoomed
                ? "informative-category-section__image--zoom-in"
                : "informative-category-section__image--zoom-out"
            }`}
          />
          <div className="overlay-text">
            <p>
              We believe nothing brings people together quite like a
              comfortable, well-designed outdoor space.
            </p>
          </div>
        </div>
      </div>

      <div className="informative-category-section__text-container">
        <h2 className="informative-category-section__title">
          From Sunrise to Stargazing
        </h2>
        <p className="informative-category-section__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Suspendisse potenti. Vivamus interdum, sapien nec tincidunt
          tincidunt, velit orci tempus odio, a feugiat ligula eros nec libero.
          Fusce euismod, lorem vel scelerisque interdum, ligula urna interdum
          turpis, at pellentesque purus lorem nec leo. Curabitur vel ex et erat
          pellentesque luctus. Integer malesuada, ex ac malesuada vulputate,
          urna purus vestibulum mauris, eget imperdiet dui turpis ac purus.
        </p>
        <div className="informative-category-section__buttons">
          <button className="btn-custom">Dining</button>
          <button className="btn-custom">Lounging</button>
          <button className="btn-custom">Living</button>
        </div>
        <div className="informative-category-section__bottom-image-container">
          <img
            src="https://terraoutdoor.com/cdn/shop/files/homepage_sub_3_dine_540x.jpg?v=1627426673"
            alt="Outdoor Furniture"
            className={`informative-category-section__bottom-image ${
              isZoomed
                ? "informative-category-section__bottom-image--zoom-in"
                : "informative-category-section__bottom-image--zoom-out"
            }`}
          />
        </div>
      </div>
    </section>
  );
};

export default InformativeCategorySection;
