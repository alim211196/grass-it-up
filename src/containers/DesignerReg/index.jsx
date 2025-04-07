import React, { useEffect } from "react";
import BannerForm from "./SubComponents/BannerForm";
import "./DesignerReg.css";
import BenefitsSection from "./SubComponents/BenefitsSection";
import AOS from "aos";
import "aos/dist/aos.css";
const DesignerReg = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BannerForm />
      <BenefitsSection />
      <section className="better-section">
        <div className="content-wrapper">
          <div className="text-content">
            <h1 data-aos="fade-up" data-aos-delay="100">
              Bridging the Gap Between Talent and Opportunity
            </h1>

            <p data-aos="fade-up" data-aos-delay="100">
              Join the platform that connects innovative minds with real-world
              solutions.
            </p>
            <button
              className="join-button"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Join Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignerReg;
