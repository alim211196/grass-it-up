import React from "react";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../App.css"; // Ensure to create this file

const CylindricalCarousel = () => {
  const images = [
    "https://cdn.prod.website-files.com/6486cb33f7cd6d9267f51a29/65884900f571497485dd5062_08%401280.webp",
    "https://cdn.prod.website-files.com/6486cb33f7cd6d9267f51a29/65884900f571497485dd5062_08%401280.webp",
    "https://cdn.prod.website-files.com/6486cb33f7cd6d9267f51a29/65884900f571497485dd5062_08%401280.webp",
    "https://cdn.prod.website-files.com/6486cb33f7cd6d9267f51a29/65884900f571497485dd5062_08%401280.webp",
    "https://cdn.prod.website-files.com/6486cb33f7cd6d9267f51a29/65884900f571497485dd5062_08%401280.webp",
  ];

  const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: false,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
      1200: { items: 4 },
    },
  };

  return (
    <div className="carousel-container">
      <h1 className="text-center">Instagram Feed</h1>
      <div className="curved-carousel-container">
        <OwlCarousel className="slider" {...options}>
          {images.map((src, index) => (
            <div key={index} className="slider__el">
              <div className="slider__img">
                <img src={src} alt={`Slide ${index + 1}`} />
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default CylindricalCarousel;
