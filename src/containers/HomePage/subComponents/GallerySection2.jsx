import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeading from "./SectionHeading";

const GallerySection2 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const images = [
    {
      src: "https://dev-risians.com/html/grassitup/images/trend-pro-bg-2.jpg",
      name: "Modern Design",
    },
    {
      src: "https://dev-risians.com/html/grassitup/images/trend-pro-bg-1.jpg",
      name: "Luxury Sofa",
    },
    {
      src: "https://grassitupshop.com/cdn/shop/files/Sahara_608x416.jpg?v=1732629985",
      name: "Cozy Living",
    },
    {
      src: "https://grassitupshop.com/cdn/shop/files/Blue-20_608x416.jpg?v=1655713613",
      name: "Modern Interior",
    },
    {
      src: "https://dev-risians.com/html/grassitup/images/trend-pro-bg-2.jpg",
      name: "Modern Design",
    },
    {
      src: "https://dev-risians.com/html/grassitup/images/trend-pro-bg-1.jpg",
      name: "Luxury Sofa",
    },
    {
      src: "https://grassitupshop.com/cdn/shop/files/Sahara_608x416.jpg?v=1732629985",
      name: "Cozy Living",
    },
    {
      src: "https://grassitupshop.com/cdn/shop/files/Blue-20_608x416.jpg?v=1655713613",
      name: "Modern Interior",
    },
  ];

  return (
    <div
      className="blog-section py-5 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="100"
      style={{ height: "150vh" }}
    >
      <SectionHeading title="Our" subtitle="Gallery" />

      {/* Main Swiper */}
      <Swiper
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        spaceBetween={5}
        slidesPerView={1}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        style={{ width: "100vw", height: "70vh" }}
      >
        {images.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
              className="image-container"
            >
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                }}
                className="gallery-image"
                loading="lazy"
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(127, 156, 144, 0.5)",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {item.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full direct"
        style={{ height: "30vh" }}
      >
        {images.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              height: "100%",
              display: "flex",
              alignItems: "start",
              justifyContent: "start",
            }}
          >
            <img
              src={item.src}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="gallery-image"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySection2;
