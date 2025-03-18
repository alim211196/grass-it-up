import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
const SubscriptionSection = () => {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const scrollOffset = Math.max(-100, Math.min(100, sectionTop / 3)); // Faster vertical movement
        setOffset(scrollOffset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section ref={sectionRef} className="newsletter-section">
      <div className="background-text">
        <span>SUBSCRIBE TO</span>
        <span>OUR NEWSLETTER</span>
      </div>
      <div
        className="subscription-box"
        style={{ transform: `translateY(${offset}px)` }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <p>Never miss out, Stay updated</p>
        <div className="loading-box-container">
          <div className={`beam-container ${isFocused ? "focused" : ""}`}>
            <input
              type="email"
              placeholder="Enter your email"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <button>Join Waitlist</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
