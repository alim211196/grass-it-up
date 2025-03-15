import React from "react";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../App.css";
const CylindricalCarousel = () => {
  const options = {
    loop: true,
    center: true, // Center active slide
    margin: 20,
    nav: false,
    dots: false,
    autoplay: false,

    smartSpeed: 800,
    items: 4, // Number of visible items
  };

  return (
    <div className="carousel-container1">
      <OwlCarousel className="owl-theme" {...options}>
        {Array(6)
          .fill(
            "https://cdn.prod.website-files.com/6486cb33f7cd6d9267f51a29/65884900f571497485dd5062_08%401280.webp"
          )
          .map((src, index) => (
            <div className="item" key={index}>
              <img src={src} alt={`Slide ${index}`} />
            </div>
          ))}
      </OwlCarousel>
    </div>
  );
};

export default CylindricalCarousel;
