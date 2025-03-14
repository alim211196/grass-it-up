import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray(".slide");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-sliders",
        pin: ".main",
        pinSpacing: true,
        scrub: 1,
        end: "+=3000",
      },
    });

    gsap.to(".next-block", {
      backgroundColor: "tomato",
      scrollTrigger: {
        trigger: ".next-block",
        pinnedContainer: ".main",
        start: "top 50%",
        toggleActions: "play none reset none",
      },
    });
  }, []);

  return (
    <div className="main" ref={containerRef}>
      <div className="horizontal-sliders">
        <div className="slide" style={{ backgroundColor: "red" }}>
          Red
        </div>
        <div className="slide" style={{ backgroundColor: "blue" }}>
          Blue
        </div>
        <div className="slide" style={{ backgroundColor: "green" }}>
          Green
        </div>
        <div className="slide" style={{ backgroundColor: "yellow" }}>
          Yellow
        </div>
        <div className="slide" style={{ backgroundColor: "brown" }}>
          Brown
        </div>
      </div>
      <div className="next-block">This is next block</div>
    </div>
  );
};

export default HorizontalScroll;
