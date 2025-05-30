import { useEffect, useState, useRef, memo } from "react";
import "../../../App.css";
import SectionHeading from "../../../common/SectionHeading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const InformativeCategorySection = () => {
  const [isZoomed, setIsZoomed] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.8 && bottom > windowHeight * 0.2) {
          setIsZoomed(true);
        } else {
          setIsZoomed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="informative-category-section" ref={sectionRef}>
      <div
        className="informative-category-section__image-container"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* First Image */}
        <img
          src="/grassitup40.jpg"
          alt="Outdoor Furniture"
          className={`informative-category-section__image ${
            isZoomed
              ? "informative-category-section__image--zoom-in"
              : "informative-category-section__image--zoom-out"
          }`}
          loading="lazy"
        />

        {/* Second Image with Text Overlay */}
        <div className="image-with-text">
          <img
            src="/informative3.webp"
            alt="Outdoor Furniture"
            className={`informative-category-section__image ${
              isZoomed
                ? "informative-category-section__image--zoom-in"
                : "informative-category-section__image--zoom-out"
            }`}
            loading="lazy"
          />
          <div className="overlay-text">
            <p>
              We believe nothing brings people together quite like a
              comfortable, well-designed outdoor space.
            </p>
          </div>
        </div>
      </div>

      <div className="informative-category-section__text-container">
        <SectionHeading
          title=" From Outdoor Lifestyle"
          subtitle="by GrassItUp"
        />

        <p
          className="informative-category-section__description"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Suspendisse potenti. Vivamus interdum, sapien nec tincidunt
          tincidunt, velit orci tempus odio, a feugiat ligula eros nec libero.
          Fusce euismod, lorem vel scelerisque interdum, ligula urna interdum
          turpis, at pellentesque purus lorem nec leo. Curabitur vel ex et erat
          pellentesque luctus. Integer malesuada, ex ac malesuada vulputate,
          urna purus vestibulum mauris, eget imperdiet dui turpis ac purus.
        </p>
        <div
          className="informative-category-section__buttons"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <button
            className="btn-custom"
            onClick={() => navigate(`/shop-by-product`)}
          >
            Elegant Lifestyle
          </button>
          <button
            className="btn-custom"
            onClick={() => navigate(`/shop-by-product`)}
          >
            Sophisticated Lifestyle
          </button>
          <button
            className="btn-custom"
            onClick={() => navigate(`/shop-by-product`)}
          >
            Casual Lifestyle
          </button>
        </div>
        <div
          className="informative-category-section__bottom-image-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img
            src="/grassitup39.jpg"
            alt="Outdoor Furniture"
            className={`informative-category-section__bottom-image ${
              isZoomed
                ? "informative-category-section__bottom-image--zoom-in"
                : "informative-category-section__bottom-image--zoom-out"
            }`}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default memo(InformativeCategorySection);
