import React, { useEffect } from "react";
import "./NotFound.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="NotFound-container">
      <div className="NotFound-content">
        <img
          src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg"
          alt="Thank You Icon"
          className="NotFound-icon"
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <h1
          className="NotFound-subtitle"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Oops Sorry ! Page not found
        </h1>
        <p
          className="NotFound-description"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Sorry for the inconvenience. Go to our homepage or check out our for
          Fashion, Chair, Decoration...
        </p>
        <button
          className="NotFound-button"
          onClick={() => navigate("/")}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Go Back to home
        </button>
      </div>
    </section>
  );
};
export default NotFound;
