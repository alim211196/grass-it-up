import React, { useEffect, useRef, useState, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeading from "../../../common/SectionHeading";

const images = [
  { src: "/grassitup2.jpg", name: "Modern Design" },
  { src: "/grassitup5.jpg", name: "Luxury Sofa" },
  { src: "/grassitup7.jpg", name: "Modern Design" },
  { src: "/grassitup11.jpg", name: "Luxury Sofa" },
  { src: "/grassitup12.jpg", name: "Modern Design" },
  { src: "/grassitup13.jpg", name: "Luxury Sofa" },
  { src: "/grassitup14.jpg", name: "Modern Design" },
  { src: "/grassitup16.jpg", name: "Modern Design" },
  { src: "/grassitup20.jpg", name: "Modern Design" },
  { src: "/grassitup24.jpg", name: "Luxury Sofa" },
  { src: "/grassitup27.jpg", name: "Modern Design" },
  { src: "/grassitup33.jpg", name: "Luxury Sofa" },
  { src: "/grassitup37.jpg", name: "Modern Design" },
];

const GallerySection3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="blog-section py-5 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <SectionHeading title="Our" subtitle="Gallery" />

      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="coverflow"
        centeredSlides={true}
        loop={true}
        loopAdditionalSlides={2}
        slidesPerView="auto"
        spaceBetween={-150}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 2,
          slideShadows: false,
        }}
        className="custom-swiper"
      >
        {images.map((slide, index) => (
          <SwiperSlide key={index} className="custom-swiper-slide">
            <div className="custom-swiper-slide-wrapper">
              <img
                src={slide.src}
                alt={slide.name}
                loading="lazy"
                className="custom-swiper-slide-image"
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <div className="custom-swiper-slide-caption">{slide.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(GallerySection3);
