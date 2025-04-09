import React from "react";
import { useNavigate } from "react-router-dom";

const InteriorJoinNow = () => {
  const navigate = useNavigate();
  return (
    <section className="join-now-section">
      <div className="join-now-content-wrapper">
        <div className="join-now-text-content">
          <h1 data-aos="fade-up" data-aos-delay="100">
            Bridging the Gap Between Talent and Opportunity
          </h1>

          <p data-aos="fade-up" data-aos-delay="100">
            Join the platform that connects innovative minds with real-world
            solutions.
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
