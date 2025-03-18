import React, { useEffect } from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Marquee = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className={"marqueeContainer"}>
      <div
        className={"marqueeContent"}
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <span>
          <i class="fas fa-bolt"></i> Spring Clearance Event: Save Up to 70%
          &nbsp;
        </span>
        <span>
          <i class="fas fa-bolt"></i> Spring Clearance Event: Save Up to 70%
          &nbsp;
        </span>
        <span>
          <i class="fas fa-bolt"></i> Spring Clearance Event: Save Up to 70%
          &nbsp;
        </span>
      </div>
    </div>
  );
};

export default Marquee;
