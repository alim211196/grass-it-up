import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css"; // Ensure you have CSS for styling

import { FreeMode, Autoplay } from "swiper/modules";
import SectionHeading from "./SectionHeading";

const CylindricalCarousel = () => {
  const images = [
    "https://grassitupshop.com/cdn/shop/files/ScreenShot2024-03-15at1.16.12PM_352x352.png?v=1710495261",
    "https://grassitupshop.com/cdn/shop/files/IMG_1655_352x352.jpg?v=1737641071",
    "https://grassitupshop.com/cdn/shop/products/WhatsAppImage2022-06-10at3.28.38PM_1_448x288.jpg?v=1654865813",
    "https://grassitupshop.com/cdn/shop/files/ScreenShot2024-03-15at1.16.12PM_352x352.png?v=1710495261",
    "https://grassitupshop.com/cdn/shop/files/IMG_1655_352x352.jpg?v=1737641071",
  ];

  return (
    <div className="carousel-container-instagram">
      <SectionHeading title="Instagram" subtitle="Feed" />
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
