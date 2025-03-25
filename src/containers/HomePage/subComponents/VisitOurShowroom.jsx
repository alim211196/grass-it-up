import React, { useEffect } from "react";
import "../../../App.css";
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
    "https://lh3.googleusercontent.com/p/AF1QipOWIgmNSGTr8sZarU-ymzVve3QewuYNGqmdFB_c=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipMW1MqMMXK60ampgeezBrmHRX5sXknRgCFWL1eV=s680-w680-h510",
    "https://lh3.googleusercontent.com/p/AF1QipNNurZaoteL0AsfHDkAQJ49LsOpsqsrwVCo4roo=s680-w680-h510",
  ];
  return (
    <div className="visit-showroom-container">
      {/* Left Section */}
      <div className="showroom-left" data-aos="fade-left" data-aos-delay="100">
        <h2 className="small-text">Visit our</h2>
        <h1 className="big-text">
          S
          <span className="rotating-image">
            <img src="chair.webp" alt="chair" loading="lazy" />
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
        <a className="shopButton">Get Directions</a>
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
              <img
                src={image}
                alt={`image ${index}`}
                className="slide-image"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VisitOurShowroom;
