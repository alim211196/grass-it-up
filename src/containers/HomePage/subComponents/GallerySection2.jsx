import React, { useEffect, useRef, useState, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeading from "../../../common/SectionHeading";
const images = [
  {
    src: "/trend-pro-bg-2.jpg",
    name: "Modern Design",
  },
  {
    src: "/trend-pro-bg-1.jpg",
    name: "Luxury Sofa",
  },

  {
    src: "/blog-bg-1.jpg",
    name: "Modern Design",
  },
  {
    src: "/blog-bg-2.jpg",
    name: "Luxury Sofa",
  },
  {
    src: "/blog-bg-3.jpg",
    name: "Modern Design",
  },
  {
    src: "/blog-bg-4.jpg",
    name: "Luxury Sofa",
  },
  {
    src: "/blog-bg-5.jpg",
    name: "Modern Design",
  },
];
const GallerySection2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef(null);

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

      {/* Main Swiper */}
      <Swiper
        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
        spaceBetween={5}
        slidesPerView={1}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="mySwiper2"
        style={{ width: "100vw", height: "70vh" }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
              className="image-container"
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                className="gallery-image"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease-in-out",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
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

      {/* Thumbnails */}
      <div className="thumbnail-container">
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
          className="thumbnail-slider"
          style={{
            display: "flex",
            gap: "5px",
            marginTop: "5px",
            // overflowX: "auto",
          }}
        >
          {images.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`thumbnail ${activeIndex === index ? "active" : ""}`}
              onClick={() => mainSwiperRef.current?.slideTo(index)}
              style={{
                width: "20%",
                height: "20vh",
                cursor: "pointer",
                border: activeIndex === index ? "3px solid black" : "none",
                paddingTop: 0,
                borderRadius: 5,
              }}
            >
              <img
                src={item.src}
                alt={`Thumb ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 5,
                }}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default memo(GallerySection2);
