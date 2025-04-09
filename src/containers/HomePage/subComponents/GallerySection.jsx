import React, { useEffect, memo } from "react";
import { Swiper as GallerySwiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import AOS from "aos";
import "aos/dist/aos.css";
// Import required modules
import { Autoplay, EffectCards } from "swiper/modules";
import SectionHeading from "../../../common/SectionHeading";

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
  backgroundColor: "rgba(127 ,156, 144, 0.5)",
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
    src: "/trend-pro-bg-2.jpg",
    name: "Modern Design",
  },
  {
    src: "/trend-pro-bg-3.jpg",
    name: "Elegant Style",
  },
  {
    src: "/trend-pro-bg-1.jpg",
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
    src: "/trend-pro-bg-2.jpg",
    name: "Modern Design",
  },
  {
    src: "https://grassitupshop.com/cdn/shop/products/WhatsAppImage2022-06-10at3.28.38PM_1_448x288.jpg?v=1654865813",
    name: "Elegant Style",
  },
  {
    src: "/trend-pro-bg-1.jpg",
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
    src: "/trend-pro-bg-1.jpg",
    name: "Luxury Sofa",
  },
  {
    src: "/trend-pro-bg-2.jpg",
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
        modules={[EffectCards, Autoplay]} // Include Autoplay module
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        style={swiperStyles}
        initialSlide={1} // Start from the center image
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} style={slideStyles}>
            <div style={imageContainerStyles} className="image-container">
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                style={imageStyles}
                className="gallery-image"
                loading="lazy"
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

export default memo(GallerySection);
