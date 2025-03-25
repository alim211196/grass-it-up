import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../App.css"; // Import custom CSS
import SectionHeading from "./SectionHeading";

// Import images
const blog1 = "https://dev-risians.com/html/grassitup/images/blog-bg-1.jpg";
const blog2 = "https://dev-risians.com/html/grassitup/images/blog-bg-2.jpg";
const blog3 = "https://dev-risians.com/html/grassitup/images/blog-bg-3.jpg";
const blog4 = "https://dev-risians.com/html/grassitup/images/blog-bg-4.jpg";
const blog5 = "https://dev-risians.com/html/grassitup/images/blog-bg-5.jpg";

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
    image: blog4,
    date: "13th March 2025",
    tag: "Vase",
    title: "Home Office Storage Ideas to Boost Productivity in 2023.",
  },
  {
    image: blog5,
    date: "5th May 2025",
    tag: "Interior",
    title: "Consectetur purus habitasse ut diam habitant varius.",
  },
];

const BlogSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="blog-section py-5 overflow-hidden">
      <SectionHeading title="Trends" subtitle="and News" />
      <div data-aos="fade-up" data-aos-delay="100" className="container">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          slidesPerView={3}
          spaceBetween={0}
          loop={true}
          autoplay={{ delay: 3000 }}
          effect="coverflow"
          centeredSlides={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 1,
            depth: 100,
            modifier: 0.5,
            slideShadows: false,
          }}
          breakpoints={{
            576: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="blog-slider"
        >
          {[...blogData, ...blogData].map((item, index) => (
            <SwiperSlide key={index} className="blog-card">
              <div className="blog-img-wrapper">
                <img
                  src={item.image}
                  alt="blog-card"
                  className="blog-img"
                  loading="lazy"
                />
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
