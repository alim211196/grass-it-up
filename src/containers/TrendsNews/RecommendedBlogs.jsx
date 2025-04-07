import React, { memo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const blogData = [
  {
    id: 1,
    slug: "home-office-storage-ideas-2025",
    image: "https://dev-risians.com/html/grassitup/images/blog-bg-1.jpg",
    date: "13th March 2025",
    tag: "Vase",
    title: "Home Office Storage Ideas to Boost Productivity in 2025",
    description:
      "Discover 10+ storage hacks that will declutter your workspace and boost your daily productivity.",
    content:
      "In the fast-paced world of remote work, your home office can quickly turn into a chaotic mess. From cable organizers to modular shelving units, we explore creative yet practical storage ideas that make your workspace functional and inspiring. These techniques not only improve your physical space but also have a direct impact on mental clarity and efficiency.",
    author: "Emily Carter",
    category: "Workspace",
    readingTime: "4 min read",
    commentsCount: 6,
  },
  {
    id: 2,
    slug: "interior-tips-for-modern-homes",
    image: "https://dev-risians.com/html/grassitup/images/blog-bg-2.jpg",
    date: "5th May 2025",
    tag: "Interior",
    title: "Consectetur purus habitasse ut diam habitant varius",
    description:
      "Step into the world of modern home interiors with balance, minimalism, and character-driven aesthetics.",
    content:
      "Designing a modern interior doesn’t just mean choosing white walls and glass tables. It’s about creating harmony between form and function. This blog explores the power of open floor plans, natural lighting, and versatile furniture choices that elevate your home’s vibe. You'll also find inspiration from Scandinavian and Japandi trends taking over 2025.",
    author: "Michael Lee",
    category: "Interior Design",
    readingTime: "5 min read",
    commentsCount: 12,
  },
  {
    id: 3,
    slug: "quality-sofa-components-guide",
    image: "https://dev-risians.com/html/grassitup/images/blog-bg-3.jpg",
    date: "19th June 2025",
    tag: "Furniture",
    title: "The Key Components of a Quality Sofa in 2025",
    description:
      "Thinking about investing in a new sofa? Here's what really matters — beyond the fabric and cushions.",
    content:
      "Choosing the perfect sofa can be overwhelming with so many styles and materials available. This guide dives into frame construction, suspension systems, foam density, and upholstery types to help you make an informed decision. Whether you're after timeless elegance or modern comfort, a high-quality sofa starts from the inside out.",
    author: "Sarah Johnson",
    category: "Furniture",
    readingTime: "6 min read",
    commentsCount: 9,
  },
  {
    id: 4,
    slug: "creative-vase-decor-ideas",
    image: "https://dev-risians.com/html/grassitup/images/blog-bg-4.jpg",
    date: "24th July 2025",
    tag: "Vase",
    title: "Creative Ways to Style Vases in Every Room",
    description:
      "Vases aren’t just for flowers anymore. Learn how to style them as art, organizers, or sculptural centerpieces.",
    content:
      "From minimalist ceramic pieces to bold glass designs, vases are versatile decor items. This blog showcases unique styling ideas for different rooms: think bathroom counter vases with eucalyptus, entryway floor vases for height, or even empty tabletop vases as statement pieces. You'll be surprised how they elevate a space effortlessly.",
    author: "Natalie Brooks",
    category: "Home Decor",
    readingTime: "3 min read",
    commentsCount: 4,
  },
  {
    id: 5,
    slug: "eco-friendly-decor-trends-2025",
    image: "https://dev-risians.com/html/grassitup/images/blog-bg-5.jpg",
    date: "2nd August 2025",
    tag: "Sustainability",
    title: "Eco-Friendly Home Decor Trends That Are Changing Interiors",
    description:
      "From recycled furniture to low-VOC paints, explore the sustainable design choices leading 2025 trends.",
    content:
      "As consumers grow more conscious of environmental impact, home decor trends are shifting toward sustainable living. Discover brands using reclaimed wood, bamboo fabrics, and biodegradable finishes. This article also covers how to create an eco-forward aesthetic without compromising luxury or style — because green can be gorgeous too.",
    author: "Liam Patel",
    category: "Sustainability",
    readingTime: "7 min read",
    commentsCount: 14,
  },
];
const RecommendedBlogs = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const scrollToTop = (item) => {
    navigate(`/trends-and-news`, { state: item });
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <section className="rec_blog-details-section">
      <div className="rec_blog-container">
        <h1 className="rec_blog-title" data-aos="fade-up" data-aos-delay="100">
          Recommended Blogs
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="rec_blog_container"
        >
          <Swiper
            modules={[FreeMode, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              600: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            freeMode={true}
            className="rec_blog-slider"
          >
            {blogData.map((item, index) => (
              <SwiperSlide
                key={index}
                className="rec_blog-card"
                onClick={() => scrollToTop(item)}
              >
                <div className="rec_blog-img-wrapper">
                  <img
                    src={item.image}
                    alt="rec_blog-card"
                    className="rec_blog-img"
                    loading="lazy"
                  />
                </div>
                <div className="rec_blog-overlay">
                  <ul className="rec_blog-meta">
                    <li className="rec_blog_text-muted">{item.date}</li>
                    <li className="badge">{item.tag}</li>
                  </ul>
                  <h5 className="rec_blog-card_title">{item.title}</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default RecommendedBlogs;
