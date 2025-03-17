import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "../App.css"; // Import custom CSS
import SectionHeading from "./SectionHeading";

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
  const [activeIndex, setActiveIndex] = useState(1); // Start at index 1
  const [activeHotspots, setActiveHotspots] = useState({});
  const handleHotspotToggle = (imageIndex, hotspotId) => {
    setActiveHotspots((prev) => ({
      ...prev,
      [imageIndex]: prev[imageIndex] === hotspotId ? null : hotspotId,
    }));
  };
  return (
    <div className="marker-carousel-container">
      <SectionHeading title="Top" subtitle="Trending" />
      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={-50}
        loop={true} // Enable loop
        initialSlide={1} // Start from the second image
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
              <img src={item?.src} alt={`Slide ${index + 1}`} />
              {/* Hotspots for Each Image */}
              {item.hotspots.map((spot) => (
                <div
                  key={spot.id}
                  className={`hotspot ${
                    activeHotspots[index] === spot.id ? "active" : ""
                  }`}
                  style={{ top: spot.y, left: spot.x }}
                  onClick={() => handleHotspotToggle(index, spot.id)}
                >
                  <div className="hotspot-dot">
                    {activeHotspots[index] === spot.id && (
                      <span className="hotspot-label">{spot.text}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopTrending;
