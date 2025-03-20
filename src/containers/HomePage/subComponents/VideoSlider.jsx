import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import AOS from "aos";
import "swiper/css";
import "aos/dist/aos.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../../../App.css";
import SectionHeading from "./SectionHeading";

const ytVideoIds = [
  "4hsK2eP-TFQ",
  "L49mc-IsBfM",
  "FY2hbcE2O0Y",
  "2rrgcdO0qxI",
  "cY-TawxisHs",
  "722gJf_yFaE",
  "D7NxP7viay8",
  "dij5G-tF-zg",
  "-SvB1PgZqD0",
];

const VideoSlider = () => {
  const mainSwiperRef = useRef(null);
  const [players, setPlayers] = useState({});
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        initializePlayers();
      }

      window.onYouTubeIframeAPIReady = initializePlayers;
    };

    const initializePlayers = () => {
      const newPlayers = {};
      ytVideoIds.forEach((id, index) => {
        newPlayers[id] = new window.YT.Player(`player-${id}`, {
          videoId: id,
          playerVars: {
            autoplay: 0,
            modestbranding: 1,
            controls: 1,
            rel: 0,
          },
        });
      });
      setPlayers(newPlayers);
    };

    loadYouTubeAPI();
  }, []);

  return (
    <div
      className="video-slider-container"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <SectionHeading title="Youtube" subtitle="Feed" />
      {/* Main Video Swiper */}
      <Swiper
        ref={mainSwiperRef}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        slidesPerView={3}
        initialSlide={2}
        centeredSlides
        effect="coverflow"
        navigation
        className="main-slider"
      >
        {ytVideoIds.map((id) => (
          <SwiperSlide key={id}>
            <div className="video-container">
              <div id={`player-${id}`} className="video-iframe"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoSlider;
