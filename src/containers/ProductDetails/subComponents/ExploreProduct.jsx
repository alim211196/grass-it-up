import React, { useState, useEffect, useRef } from "react";
import { Container, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeading from "../../HomePage/subComponents/SectionHeading";
import { useNavigate } from "react-router-dom";

const images = [
  {
    src: "https://terraoutdoor.com/cdn/shop/files/seaside-dune-linen-lounge-chair1_540x.jpg",
    alt: "Seaside 1",
    name: "Seaside Lounge Chair in Dune",
    price: "$1,595",
  },
  {
    src: "https://terraoutdoor.com/cdn/shop/files/seaside-sectional-set_v1_540x.jpg",
    alt: "Seaside 2",
    name: "Seaside Sectional Set in Dune",
    price: "$4,225",
  },
  {
    src: "https://terraoutdoor.com/cdn/shop/files/seaside-stinson-coffee-table-1_540x.jpg",
    alt: "Seaside 3",
    name: "Stinson Coffee Table in Dune",
    price: "$925",
  },
];

const ExploreProduct = ({ category }) => {
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
  const scrollToTop = (image) => {
    navigate(
      `/collections/${category?.toLowerCase()}/products/${image?.name.toLowerCase()}`,
      { state: image }
    );
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <Container fluid className="carousel-container position-relative p-4">
      <SectionHeading title="Explore" subtitle="the Aesthetic" />

      {/* Swiper for Auto Sliding */}
      <Swiper
        modules={[Navigation, Autoplay]}
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
            <div onClick={() => scrollToTop(image)}>
              <img
                className={`carousel-image ${
                  activeIndex === index ? "active" : ""
                }`}
                src={image.src}
                alt={image.alt}
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
              <div className="add-to-cart">
                <i className="fa fa-shopping-cart"></i> Add to Cart
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

export default ExploreProduct;
