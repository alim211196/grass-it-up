import React, { useEffect, useState, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import SectionHeading from "../../../common/SectionHeading";
import { OverlayTrigger, Popover } from "react-bootstrap";

const images = [
  {
    src: "/grassitup26.jpg",
    hotspots: [
      { id: 1, x: "77%", y: "35%", text: "LAMP" },
      { id: 2, x: "52%", y: "50%", text: "TABLE" },
      { id: 3, x: "38%", y: "60%", text: "CHAIR" },
    ],
  },
  {
    src: "/grassitup20.jpg",
    hotspots: [
      { id: 1, x: "10%", y: "30%", text: "SOFA" },
      { id: 2, x: "50%", y: "45%", text: "TABLE" },
      { id: 3, x: "65%", y: "55%", text: "PLUM" },
      { id: 4, x: "68%", y: "30%", text: "SOFA" },
    ],
  },
  {
    src: "/grassitup21.jpg",
    hotspots: [
      { id: 1, x: "50%", y: "15%", text: "UMBRELLA" },
      { id: 2, x: "65%", y: "60%", text: "OUTDOOR SOFA" },
      { id: 3, x: "38%", y: "62%", text: "CIRCULAR TABLE" },
    ],
  },

  {
    src: "/grassitup27.jpg",
    hotspots: [
      { id: 1, x: "80%", y: "70%", text: "LAMP" },
      { id: 2, x: "48%", y: "50%", text: "SOFA" },
      { id: 3, x: "48%", y: "62%", text: "TABLE" },
      { id: 4, x: "20%", y: "60%", text: "CHAIR" },
    ],
  },
  {
    src: "/grassitup31.jpg",
    hotspots: [
      { id: 1, x: "35%", y: "60%", text: "CHAIR" },
      { id: 2, x: "50%", y: "67%", text: "TABLE" },
      { id: 3, x: "65%", y: "60%", text: "CHAIR" },
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
      <SectionHeading title="Featured" subtitle="Collections" />
      <Swiper
        // modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={-30}
        loop={true}
        initialSlide={3}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 3, // Controls the perspective depth (Increase for more 3D effect)
          modifier: 1.5, // Controls how strong the effect is
          slideShadows: false, // Disables extra shadows
        }}
        onSwiper={setSwiperRef}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="top-trending-slider"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`slide-item ${index === activeIndex ? "active" : ""}`}
              onClick={() => swiperRef && swiperRef.slideToLoop(index)}
            >
              <img src={item.src} alt={`Slide ${index + 1}`} loading="lazy" />
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

export default memo(TopTrending);
