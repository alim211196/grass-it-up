import React, { useEffect } from "react";
import "./ThankYou.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
const ThankYou = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="thankyou-container">
      <div className="thankyou-content">
        <img
          src="https://furnixar.vercel.app/assets/thank-you-DmxP4chu.png"
          alt="Thank You Icon"
          className="thankyou-icon"
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <h1
          className="thankyou-subtitle"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          For Shopping with GrassItUp
        </h1>
        <p
          className="thankyou-description"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Please check your email for Download Invoice. Or{" "}
          <a href="/invoice" className="thankyou-link">
            Click here
          </a>
        </p>
        <button
          className="thankyou-button"
          onClick={() => navigate("/")}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Back to home
        </button>
      </div>
    </section>
  );
};
export default ThankYou;
