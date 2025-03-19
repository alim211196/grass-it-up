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
    src: "https://dev-risians.com/html/grassitup/images/trend-pro-bg-1.jpg",
    hotspots: [
      { id: 1, x: "12%", y: "55%", text: "LAMP" },
      { id: 2, x: "30%", y: "50%", text: "SOFA" },
      { id: 3, x: "45%", y: "55%", text: "TABLE" },
      { id: 4, x: "38%", y: "68%", text: "CHAIR" },
    ],
  },
  {
    src: "https://dev-risians.com/html/grassitup/images/trend-pro-bg-2.jpg",
    hotspots: [
      { id: 1, x: "55%", y: "45%", text: "SOFA" },
      { id: 2, x: "50%", y: "55%", text: "TABLE" },
      { id: 3, x: "68%", y: "60%", text: "SOFA" },
    ],
  },
  {
    src: "https://dev-risians.com/html/grassitup/images/trend-pro-bg-3.jpg",
    hotspots: [
      { id: 1, x: "25%", y: "20%", text: "UMBRELLA" },
      { id: 2, x: "20%", y: "65%", text: "ARMCHAIR" },
      { id: 3, x: "23%", y: "76%", text: "SUNBED" },
      { id: 4, x: "70%", y: "70%", text: "DINING TABLE" },
      { id: 5, x: "76%", y: "73%", text: "OUTDOOR SOFA" },
      { id: 6, x: "88%", y: "76%", text: "ARMCHAIR" },
      { id: 7, x: "92%", y: "63%", text: "CIRCULAR TABLE" },
    ],
  },

  {
    src: "https://dev-risians.com/html/grassitup/images/trend-pro-bg-1.jpg",
    hotspots: [
      { id: 1, x: "12%", y: "55%", text: "LAMP" },
      { id: 2, x: "30%", y: "50%", text: "SOFA" },
      { id: 3, x: "45%", y: "55%", text: "TABLE" },
      { id: 4, x: "38%", y: "68%", text: "CHAIR" },
    ],
  },
  {
    src: "https://dev-risians.com/html/grassitup/images/trend-pro-bg-2.jpg",
    hotspots: [
      { id: 1, x: "55%", y: "45%", text: "SOFA" },
      { id: 2, x: "50%", y: "55%", text: "TABLE" },
      { id: 3, x: "68%", y: "60%", text: "SOFA" },
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
        spaceBetween={-30}
        loop={true}
        initialSlide={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={3000}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 3, // Controls the perspective depth (Increase for more 3D effect)
          modifier: 1.5, // Controls how strong the effect is
          slideShadows: false, // Disables extra shadows
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
                  trigger={["hover", "focus"]}
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
                    <div className="trending-hotspot-dot">
                      <i className="fal fa-plus"></i>
                    </div>
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
