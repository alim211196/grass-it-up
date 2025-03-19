import React, { useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCube, Mousewheel, Pagination } from "swiper/modules";

const VisitOurShowroom = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const images = [
    "https://lh3.googleusercontent.com/p/AF1QipNWULMU8hvCIee_b_agok5x8C5Dpytqdpo8iu3u=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipMW1MqMMXK60ampgeezBrmHRX5sXknRgCFWL1eV=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipOWIgmNSGTr8sZarU-ymzVve3QewuYNGqmdFB_c=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipPtYCzU7tMtj73Vluv6k_0cpal_qqKDKLJfwNff=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipMLGtnQNZroDGfiwQZg5epq4eXQip7lwYvuDFpE=s680-w680-h510",

    "https://lh3.googleusercontent.com/p/AF1QipPb1s1NYK174BkPgfJHeIKIh-cXIxf0TCziKqXA=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipMpuPH0hNSf_S7xMyfSJyDmIU_EXVNI1NDWQG4q=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipMkJgnoLeB7jwIYND1FR_qV_auZQjEEpgxaPVgS=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipPPnA2nuI5MY21DGyqh4FMILHUieH0-q--aIGhv=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipN9XY8LroXvojRubg-Y5Xsl3uXVt3YKAZPoJVo4=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipMB2mv37tqoE8RsBXwnradSeaBMeZvcOX8y4iQV=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipOkA7WWphvH1uHHmEBWyk-cJnyJG_5_VeLheAwc=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipNNurZaoteL0AsfHDkAQJ49LsOpsqsrwVCo4roo=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipNEO9pxSPPJAmL70kocpfM0d990e9rO1QHzexY8=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipMUnlgq_GD04rHc3AS3U8GK8Ff4AU5g5tE2a6f3=s680-w680-h510",
  ];
  return (
    <div className="visit-showroom-container">
      {/* Left Section */}
      <div className="showroom-left" data-aos="fade-left" data-aos-delay="100">
        <h2 className="small-text">Visit our</h2>
        <h1 className="big-text">
          S
          <span className="rotating-image">
            <img src="chair.webp" alt="chair" />
          </span>
          owroom
        </h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Suspendisse potenti. Vivamus interdum, sapien nec tincidunt
          tincidunt, velit orci tempus odio, a feugiat ligula eros nec libero.
          Fusce euismod, lorem vel scelerisque interdum, ligula urna interdum
          turpis, at pellentesque purus lorem nec leo. Curabitur vel ex et erat
          pellentesque luctus. Integer malesuada, ex ac malesuada vulputate,
          urna purus vestibulum mauris, eget imperdiet dui turpis ac purus.
        </p>
        <a className="shopButton">Click Here</a>
      </div>

      {/* Right Section */}
      <div
        className="showroom-right"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          loop={true}
          initialSlide={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
          pagination={{
            clickable: true,
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="swiper-slide1">
              <img src={image} alt={`image ${index}`} className="slide-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VisitOurShowroom;
