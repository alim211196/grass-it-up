import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import "../App.css"; // Import custom CSS
import SectionHeading from "./SectionHeading";

// Import images
const blog1 =
  "https://grassitupshop.com/cdn/shop/files/ScreenShot2024-03-15at1.16.12PM_352x352.png?v=1710495261";
const blog2 =
  "https://grassitupshop.com/cdn/shop/files/IMG_1655_352x352.jpg?v=1737641071";
const blog3 =
  "https://grassitupshop.com/cdn/shop/products/WhatsAppImage2022-06-10at3.28.38PM_1_448x288.jpg?v=1654865813";

// Blog Data
const blogData = [
  {
    image: blog1,
    date: "13th March 2025",
    tag: "Vase",
    title: "Home Office Storage Ideas to Boost Productivity in 2023.",
  },
  {
    image: blog2,
    date: "5th May 2025",
    tag: "Interior",
    title: "Consectetur purus habitasse ut diam habitant varius.",
  },
  {
    image: blog3,
    date: "19th June 2025",
    tag: "Vase",
    title: "The Key Components of a Quality Sofa habitant vel tempor.",
  },
  {
    image: blog1,
    date: "13th March 2025",
    tag: "Vase",
    title: "Home Office Storage Ideas to Boost Productivity in 2023.",
  },
  {
    image: blog2,
    date: "5th May 2025",
    tag: "Interior",
    title: "Consectetur purus habitasse ut diam habitant varius.",
  },
  {
    image: blog3,
    date: "19th June 2025",
    tag: "Vase",
    title: "The Key Components of a Quality Sofa habitant vel tempor.",
  },
];

const BlogSection = () => {
  return (
    <div className="blog-section py-5 overflow-hidden">
      <SectionHeading title="Blog" subtitle="Stay informed and inspired" />
      <div className="container">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          slidesPerView={1}
          spaceBetween={15}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            576: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 20,
            stretch: 1,
            depth: 90,
            modifier: 0.5,
            slideShadows: true,
          }}
          className="blog-slider"
        >
          {blogData.map((item, index) => (
            <SwiperSlide key={index} className="blog-card">
              <div className="blog-img-wrapper">
                <img src={item.image} alt="blog-card" className="blog-img" />
              </div>
              <div className="blog-overlay">
                <ul className="blog-meta">
                  <li className="text-muted">{item.date}</li>
                  <li className="badge">{item.tag}</li>
                </ul>
                <h5 className="blog-title">{item.title}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BlogSection;
