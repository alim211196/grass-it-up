import React, { useState, useEffect, useRef } from "react";
import { Container, Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeading from "./SectionHeading";

const images = [
  {
    src: "https://cld.accentuate.io/447233851645/1740741955277/stinson-slide2.jpg?v=1740743025627&options=w_540",
    alt: "Chair 1",
    name: "Stinson",
    price: "AED 122.75",
  },
  {
    src: "https://cld.accentuate.io/447231525117/1740741924557/del-mar-slide2.jpg?v=1740742978453&options=w_540",
    alt: "Chair 2",
    name: "Del Mar",
    price: "AED 122.75",
  },
  {
    src: "https://cld.accentuate.io/447231557885/1740741992444/seaside-slide2.jpg?v=1741206376098&options=w_540",
    alt: "Chair 3",
    name: "Seaside",
    price: "AED 122.75",
  },
  {
    src: "https://cld.accentuate.io/278232039573/1648774506347/diablo-dune.jpg?v=1740763762856&options=w_540",
    alt: "Chair 4",
    name: "Diablo",
    price: "AED 122.75",
  },
  {
    src: "https://cld.accentuate.io/278997434517/1740764015996/montecito-newness.jpg?v=1740764015996",
    alt: "Chair 5",
    name: "Montecito",
    price: "AED 122.75",
  },
  {
    src: "https://cld.accentuate.io/403659391229/1677543722329/salt-point-new.jpg?v=1740765139159",
    alt: "Chair 6",
    name: "Salt Point",
    price: "AED 122.75",
  },
];

const HorizontalCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

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
      <SectionHeading title="New" subtitle="Expanded Collections" />

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
            <div>
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

export default HorizontalCarousel;
