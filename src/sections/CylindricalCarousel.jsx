import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css"; // Ensure you have CSS for styling
import AOS from "aos";
import "aos/dist/aos.css";
import { FreeMode, Autoplay } from "swiper/modules";
import SectionHeading from "./SectionHeading";

const CylindricalCarousel = () => {
  const images = [
    "https://grassitupshop.com/cdn/shop/files/qwe-2_416x288.jpg?v=1728471286",
    "https://grassitupshop.com/cdn/shop/files/IMG_1655_352x352.jpg?v=1737641071",
    "https://grassitupshop.com/cdn/shop/products/WhatsAppImage2022-06-10at3.28.38PM_1_448x288.jpg?v=1654865813",
    "https://grassitupshop.com/cdn/shop/files/Sahara_608x416.jpg?v=1732629985",
    "https://grassitupshop.com/cdn/shop/files/Blue-20_608x416.jpg?v=1655713613",
  ];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
              <div
                className="slider__img"
                data-aos="fade-up"
                data-aos-delay="100"
              >
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
