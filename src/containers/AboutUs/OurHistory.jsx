import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./aboutus.css";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import SectionHeading from "../../common/SectionHeading";
const slidesData = [
  {
    title: "Exceptional Quality",
    description:
      "Grassitupshop is an online retailer specializing in outdoor luxury furniture, with a showroom in Dubai and a website at grassitupshop.com. They offer special edition outdoor furniture sets, emphasizing comfort, luxury, and timeless design.We design and produce high-quality outdoor furniture for residential customers, hospitality, and other demanding outdoor projects globally. Our focus on functionality, durability, and easy maintenance, combined with versatile collections, ensures that every project is unique. ",
  },
  {
    title: "No Middleman",
    description:
      "Grassitupshop is an online retailer specializing in outdoor luxury furniture, with a showroom in Dubai and a website at grassitupshop.com. They offer special edition outdoor furniture sets, emphasizing comfort, luxury, and timeless design.We design and produce high-quality outdoor furniture for residential customers, hospitality, and other demanding outdoor projects globally. Our focus on functionality, durability, and easy maintenance, combined with versatile collections, ensures that every project is unique. ",
  },
  {
    title: "Sustainable Practices",
    description:
      "Grassitupshop is an online retailer specializing in outdoor luxury furniture, with a showroom in Dubai and a website at grassitupshop.com. They offer special edition outdoor furniture sets, emphasizing comfort, luxury, and timeless design.We design and produce high-quality outdoor furniture for residential customers, hospitality, and other demanding outdoor projects globally. Our focus on functionality, durability, and easy maintenance, combined with versatile collections, ensures that every project is unique. ",
  },
  {
    title: "Timeless Design",
    description:
      "Grassitupshop is an online retailer specializing in outdoor luxury furniture, with a showroom in Dubai and a website at grassitupshop.com. They offer special edition outdoor furniture sets, emphasizing comfort, luxury, and timeless design.We design and produce high-quality outdoor furniture for residential customers, hospitality, and other demanding outdoor projects globally. Our focus on functionality, durability, and easy maintenance, combined with versatile collections, ensures that every project is unique. ",
  },
  {
    title: "Handcrafted Excellence",
    description:
      "Grassitupshop is an online retailer specializing in outdoor luxury furniture, with a showroom in Dubai and a website at grassitupshop.com. They offer special edition outdoor furniture sets, emphasizing comfort, luxury, and timeless design.We design and produce high-quality outdoor furniture for residential customers, hospitality, and other demanding outdoor projects globally. Our focus on functionality, durability, and easy maintenance, combined with versatile collections, ensures that every project is unique. ",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Grassitupshop is an online retailer specializing in outdoor luxury furniture, with a showroom in Dubai and a website at grassitupshop.com. They offer special edition outdoor furniture sets, emphasizing comfort, luxury, and timeless design.We design and produce high-quality outdoor furniture for residential customers, hospitality, and other demanding outdoor projects globally. Our focus on functionality, durability, and easy maintenance, combined with versatile collections, ensures that every project is unique. ",
  },
];

export default function OurHistory() {
  return (
    <section data-aos="fade-up" data-aos-delay="100">
      <SectionHeading title="Our" subtitle="History" />

      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="about-swiper"
      >
        <div
          slot="container-start"
          className="about-parallax-bg"
          style={{
            "background-image": "url(grassitup14.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className="about-swiper-slide">
            <div className="glass-effect">
              <div className="title" data-swiper-parallax="-300">
                {slide.title}
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
