import React, { useState, useEffect, useRef, memo } from "react";
import { Container, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeading from "../../../common/SectionHeading";
import { useNavigate } from "react-router-dom";

const images = [
  {
    src: "/lec1.webp",
    alt: "Chair 1",
    name: "Stinson",
    price: "AED 122.75",
  },
  {
    src: "/lec2.webp",
    alt: "Chair 2",
    name: "Del Mar",
    price: "AED 122.75",
  },
  {
    src: "/lec3.webp",
    alt: "Chair 3",
    name: "Seaside",
    price: "AED 122.75",
  },
  {
    src: "/lec4.webp",
    alt: "Chair 4",
    name: "Diablo",
    price: "AED 122.75",
  },
  {
    src: "/lec5.webp",
    alt: "Chair 5",
    name: "Montecito",
    price: "AED 122.75",
  },
  {
    src: "/lec6.webp",
    alt: "Chair 6",
    name: "Salt Point",
    price: "AED 122.75",
  },
];

const HorizontalCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Handle manual slide change
  const scrollToIndex = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  // Next & Prev Navigation
  const scrollNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const scrollPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <Container fluid className="carousel-container position-relative p-4">
      <SectionHeading title="Latest" subtitle="Expanded Collections" />

      {/* Swiper for Auto Sliding */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3} // Adjust based on design
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="carousel-wrapper"
        // data-aos="fade-up"
        // data-aos-delay="100"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="carousel-items">
            <div
              onClick={() =>
                navigate(
                  `/collections/${image?.name?.toLowerCase()}/products/${image?.name.toLowerCase()}`,
                  { state: image }
                )
              }
            >
              <img
                className={`carousel-image ${
                  activeIndex === index ? "active" : ""
                }`}
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
              <h4
                className="image-text"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {image.name}
              </h4>
              <h6
                className="image-price"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {image.price}
              </h6>
              <div className="carousel-iconContainer">
                <div className="carousel-iconWrapper">
                  <i className="fas fa-heart"></i>
                </div>
                <div className="carousel-iconWrapper">
                  <i className="fas fa-shopping-bag"></i>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Indicators & Navigation Buttons */}
      <div className="tab-indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`tab-section ${activeIndex === index ? "active" : ""}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
        <div className="nav-buttons">
          <Button variant="light" onClick={scrollPrev}>
            ◀
          </Button>
          <Button variant="light" onClick={scrollNext}>
            ▶
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default memo(HorizontalCarousel);
