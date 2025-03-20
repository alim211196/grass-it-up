import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FreeMode, Autoplay } from "swiper/modules";
import SectionHeading from "./SectionHeading";

const CylindricalCarousel = () => {
  const images = [
    "https://dev-risians.com/html/grassitup/images/blog-bg-1.jpg",
    "https://dev-risians.com/html/grassitup/images/blog-bg-2.jpg",
    "https://dev-risians.com/html/grassitup/images/blog-bg-3.jpg",
    "https://dev-risians.com/html/grassitup/images/blog-bg-4.jpg",
    "https://dev-risians.com/html/grassitup/images/blog-bg-5.jpg",
  ];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="carousel-container-instagram"
      data-aos="fade-up"
      data-aos-delay="100"
    >
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
