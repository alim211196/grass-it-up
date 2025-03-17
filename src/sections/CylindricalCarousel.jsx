import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css"; // Ensure you have CSS for styling

import { FreeMode, Autoplay } from "swiper/modules";

const CylindricalCarousel = () => {
  const images = [
    "https://cdn.prod.website-files.com/6486cb33f7cd6d9267f51a29/65884900f571497485dd5062_08%401280.webp",
    "https://cdn.prod.website-files.com/6486cb33f7cd6d9267f51a29/65884900f571497485dd5062_08%401280.webp",
    "https://cdn.prod.website-files.com/6486cb33f7cd6d9267f51a29/65884900f571497485dd5062_08%401280.webp",
    "https://cdn.prod.website-files.com/6486cb33f7cd6d9267f51a29/65884900f571497485dd5062_08%401280.webp",
    "https://cdn.prod.website-files.com/6486cb33f7cd6d9267f51a29/65884900f571497485dd5062_08%401280.webp",
  ];

  return (
    <div className="carousel-container-instagram">
      <h1 className="text-center">Instagram Feed</h1>
      <div className="curved-carousel-container">
        <Swiper
          modules={[FreeMode, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            600: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          freeMode={true}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="slider__el">
              <div className="slider__img">
                <img src={src} alt={`Slide ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CylindricalCarousel;
