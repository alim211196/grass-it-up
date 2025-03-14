import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: "https://cdn.prod.website-files.com/6486cb33f7cd6d9267f51a29/65884900f571497485dd5062_08%401280.webp",
  },
  {
    src: "https://cdn.prod.website-files.com/6486cb33f7cd6d9267f51a29/65884900f571497485dd5062_08%401280.webp",
  },
  {
    src: "https://cdn.prod.website-files.com/6486cb33f7cd6d9267f51a29/65884900f571497485dd5062_08%401280.webp",
  },
  {
    src: "https://cdn.prod.website-files.com/6486cb33f7cd6d9267f51a29/65884900f571497485dd5062_08%401280.webp",
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".gallery-image",
      { scale: 1, opacity: 0.7 },
      {
        scale: 1.5,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );

    gsap.to(".gallery-image", {
      scale: 1,
      opacity: 0.7,
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom 40%",
        end: "bottom 10%",
        scrub: true,
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="gallery-container">
      <h2 className="gallery-title">OUR GALLERY</h2>
      <div className="gallery-grid">
        {images.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={`Gallery ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
