import React from "react";
import { useNavigate } from "react-router-dom";

const InteriorJoinNow = () => {
  const navigate = useNavigate();
  return (
    <section className="join-now-section">
      <div className="join-now-content-wrapper">
        <div className="join-now-text-content">
          <h1 data-aos="fade-up" data-aos-delay="100">
            Partner with Grass It Up & Enjoy Exclusive Trade Benefits!
          </h1>

          <p data-aos="fade-up" data-aos-delay="100">
            Join our program to order premium outdoor furniture for clients and
            receive special trade benefits. Become a Partner!
          </p>
          <button
            className="join-now-button"
            data-aos="fade-up"
            data-aos-delay="100"
            onClick={() => navigate("/interior-designer/register")}
          >
            Join Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteriorJoinNow;
