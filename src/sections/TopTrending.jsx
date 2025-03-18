import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css"; // Import custom CSS
import SectionHeading from "./SectionHeading";
import { OverlayTrigger, Popover } from "react-bootstrap";

const images = [
  {
    src: "https://grassitupshop.com/cdn/shop/files/ScreenShot2024-03-15at1.16.12PM_352x352.png?v=1710495261",
    hotspots: [
      { id: 1, x: "50%", y: "48%", text: "TABLE" },
      { id: 2, x: "40%", y: "67%", text: "CHAIR" },
    ],
  },
  {
    src: "https://grassitupshop.com/cdn/shop/files/IMG_1655_352x352.jpg?v=1737641071",
    hotspots: [
      { id: 1, x: "40%", y: "35%", text: "FRAME" },
      { id: 2, x: "55%", y: "55%", text: "CUSHION" },
      { id: 3, x: "71%", y: "65%", text: "STILL" },
    ],
  },
  {
    src: "https://grassitupshop.com/cdn/shop/products/WhatsAppImage2022-06-10at3.28.38PM_1_448x288.jpg?v=1654865813",
    hotspots: [
      { id: 1, x: "40%", y: "40%", text: "SOFA" },
      { id: 2, x: "55%", y: "65%", text: "TABLE" },
      { id: 3, x: "10%", y: "70%", text: "LAMP" },
    ],
  },

  {
    src: "https://grassitupshop.com/cdn/shop/files/ScreenShot2024-03-15at1.16.12PM_352x352.png?v=1710495261",
    hotspots: [
      { id: 1, x: "50%", y: "48%", text: "TABLE" },
      { id: 2, x: "40%", y: "67%", text: "CHAIR" },
    ],
  },
  {
    src: "https://grassitupshop.com/cdn/shop/files/IMG_1655_352x352.jpg?v=1737641071",
    hotspots: [
      { id: 1, x: "40%", y: "35%", text: "FRAME" },
      { id: 2, x: "55%", y: "55%", text: "CUSHION" },
      { id: 3, x: "71%", y: "65%", text: "STILL" },
    ],
  },
];

const TopTrending = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="marker-carousel-container"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <SectionHeading title="Top" subtitle="Trending" />
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={-50}
        loop={true}
        initialSlide={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1.5,
          slideShadows: false,
        }}
        onSwiper={setSwiperRef}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`slide-item ${index === activeIndex ? "active" : ""}`}
              onClick={() => swiperRef && swiperRef.slideToLoop(index)}
            >
              <img src={item.src} alt={`Slide ${index + 1}`} />
              {item.hotspots.map((spot) => (
                <OverlayTrigger
                  key={spot.id}
                  trigger="hover"
                  placement="top"
                  overlay={
                    <Popover
                      id={`popover-${spot.id}`}
                      className="custom-popover"
                    >
                      <Popover.Header as="h6" className="popover-header-custom">
                        {spot.text}
                      </Popover.Header>
                      <Popover.Body className="popover-body-custom">
                        <div className="d-flex align-items-center popover-item">
                          <i className="fa fa-shopping-cart popover-icon"></i>{" "}
                          Add to Cart
                        </div>
                        <div className="d-flex align-items-center popover-item">
                          <i className="fa fa-heart popover-icon"></i> Add to
                          Wishlist
                        </div>
                        <div className="d-flex align-items-center popover-item">
                          <i className="fa fa-info-circle popover-icon"></i>{" "}
                          More Info
                        </div>
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <div
                    className="trending-hotspot"
                    style={{ top: spot.y, left: spot.x }}
                  >
                    <div className="trending-hotspot-dot">+</div>
                    <div className="trending-pulse-effect"></div>
                  </div>
                </OverlayTrigger>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopTrending;
