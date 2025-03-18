import React, { useEffect } from "react";
import { Swiper as GallerySwiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import AOS from "aos";
import "aos/dist/aos.css";
// Import required modules
import { EffectCards } from "swiper/modules";
import SectionHeading from "./SectionHeading";

const swiperStyles = {
  width: "54vw",
  height: "70vh",
};

const slideStyles = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "18px",
  overflow: "hidden",
};

const imageContainerStyles = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
};

const imageStyles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease-in-out",
};

const titleStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "8px",
  fontSize: "20px",
  fontWeight: "bold",
  textAlign: "center",
  whiteSpace: "nowrap",
};

const images = [
  {
    src: "https://dev-risians.com/html/grassitup/images/trend-pro-bg-2.jpg",
    name: "Modern Design",
  },
  {
    src: "https://grassitupshop.com/cdn/shop/products/WhatsAppImage2022-06-10at3.28.38PM_1_448x288.jpg?v=1654865813",
    name: "Elegant Style",
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
    src: "https://grassitupshop.com/cdn/shop/products/WhatsAppImage2022-06-10at3.28.38PM_1_448x288.jpg?v=1654865813",
    name: "Elegant Style",
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
    src: "https://dev-risians.com/html/grassitup/images/trend-pro-bg-1.jpg",
    name: "Luxury Sofa",
  },
  {
    src: "https://dev-risians.com/html/grassitup/images/trend-pro-bg-2.jpg",
    name: "Modern Design",
  },
  {
    src: "https://grassitupshop.com/cdn/shop/products/WhatsAppImage2022-06-10at3.28.38PM_1_448x288.jpg?v=1654865813",
    name: "Elegant Style",
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

const GallerySection = () => {
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
      <GallerySwiper
        effect="cards"
        grabCursor={true}
        loop={true}
        modules={[EffectCards]}
        style={swiperStyles}
        initialSlide={Math.floor(images.length / 2)} // Start from the center image
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} style={slideStyles}>
            <div style={imageContainerStyles} className="image-container">
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                style={imageStyles}
                className="gallery-image"
              />
              <div style={titleStyles}>{item.name}</div>
            </div>
          </SwiperSlide>
        ))}
      </GallerySwiper>
      <style>
        {`
          .image-container:hover .gallery-image {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
};

export default GallerySection;
