import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../productListing.css";

const categories = [
  {
    id: 1,
    title: "Shop all Lounge Chairs & Ottomans",
    image:
      "https://cld.accentuate.io/278493593749/1702770147869/sub-category-chairs.jpg",
  },
  {
    id: 2,
    title: "Shop all Chaises & Daybeds",
    image:
      "https://cld.accentuate.io/278493593749/1688621369527/sub-category-chaise.jpg",
  },
  {
    id: 3,
    title: "Shop all Sectionals",
    image:
      "https://cld.accentuate.io/278493593749/1702770333999/sub-category-sectional.jpg",
  },
  {
    id: 4,
    title: "Shop all Sofas",
    image:
      "https://cld.accentuate.io/278493593749/1688620853941/sub-category-sofa.jpg",
  },
  {
    id: 5,
    title: "Shop all Loveseats",
    image:
      "https://cld.accentuate.io/278493593749/1688620899686/sub-category-loveseart.jpg",
  },
  {
    id: 6,
    title: "Shop all Adirondacks & Rockers",
    image:
      "https://cld.accentuate.io/278493593749/1688621403066/sub-category-adirondack.jpg",
  },
  {
    id: 7,
    title: "Shop all Coffee & Side Tables",
    image:
      "https://cld.accentuate.io/278493593749/1688620996614/sub-category-coffeesides.jpg",
  },
];

const ProductCategorySlider = () => {
  return (
    <div className="category-container" data-aos="fade-up" data-aos-delay="100">
      <h2 className="category-title">Shop by Category</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="category-swiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="category-card">
              <img
                src={category.image}
                alt={category.title}
                className="category-img"
                loading="lazy"
              />
              <p className="category-text">{category.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCategorySlider;
