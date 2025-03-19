import { useEffect, useState, useRef } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "https://dev-risians.com/html/grassitup/images/pop-cat-bg-8.png",
  "https://dev-risians.com/html/grassitup/images/pop-cat-bg-1.png",
  "https://dev-risians.com/html/grassitup/images/pop-cat-bg-11.png",
  "https://dev-risians.com/html/grassitup/images/pop-cat-bg-12.png",
];

const BreakerSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="breakSection" data-aos="fade-up" data-aos-delay="100">
      <div className="imageContainer">
        {images.map((img, index) => (
          <div
            key={index}
            className={`backgroundImage ${
              index === currentImage ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>
      <div
        className={`textSection ${isVisible ? "visible" : ""}`}
        ref={sectionRef}
      >
        <span className="subTitle">New Arrival</span>
        <h2 className="mainTitle">Premium Lounge Sofa Chair</h2>
        <p className="description">
          We offer you an extremely comfortable lounge sofa chair. Taking the
          time to relax at home or the office will be more appealing than ever
          when you choose a modern lounge sofa chair.
        </p>
        <a className="shopButton">Let's Shop Now</a>
      </div>
    </div>
  );
};

export default BreakerSection;
