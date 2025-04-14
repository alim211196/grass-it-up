import React, { useEffect, useRef, useState, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeading from "../../../common/SectionHeading";

const images = [
  { src: "/blog-bg-1.jpg", name: "Modern Design" },
  { src: "/blog-bg-2.jpg", name: "Luxury Sofa" },
  { src: "/blog-bg-3.jpg", name: "Modern Design" },
  { src: "/blog-bg-4.jpg", name: "Luxury Sofa" },
  { src: "/blog-bg-5.jpg", name: "Modern Design" },
  { src: "/trend-pro-bg-1.jpg", name: "Luxury Sofa" },
  { src: "/trend-pro-bg-2.jpg", name: "Modern Design" },
  { src: "/trend-pro-bg-3.jpg", name: "Modern Design" },
  { src: "/blog-bg-1.jpg", name: "Modern Design" },
  { src: "/blog-bg-2.jpg", name: "Luxury Sofa" },
  { src: "/blog-bg-3.jpg", name: "Modern Design" },
  { src: "/blog-bg-4.jpg", name: "Luxury Sofa" },
  { src: "/blog-bg-5.jpg", name: "Modern Design" },
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
