import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import "../App.css";
import SectionHeading from "./SectionHeading";
import AOS from "aos";
import "aos/dist/aos.css";
gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const component = useRef();
  const slider = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let cards = gsap.utils.toArray(".card");
      gsap.to(cards, {
        xPercent: -100 * (cards.length / 2), // Adjust scrolling to match the number of cards
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 2),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const scrollOffset = Math.max(-100, Math.min(100, sectionTop / 5)); // Faster vertical movement
        setOffset(scrollOffset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Data array with multiple sections
  const sections = [
    {
      title: "CHAIRS",
      buttonLabel: "SHOP CHAIRS",
      images: [
        "https://grassitupshop.com/cdn/shop/products/image_d589c845-17f8-47d6-a3f9-a47b90dc94eb_288x288.jpg?v=1648220319",
        "https://grassitupshop.com/cdn/shop/files/FUR5000255-0001_Diphano_Newport_Dining_20armchair_AF10_203R03_20HFTK_20C603_02_58c9da10-c5a0-429d-a48f-8599dbeea37d_352x352.jpg?v=1736256391",
      ],
    },
    {
      title: "TABLES",
      buttonLabel: "SHOP TABLES",
      images: [
        "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-06at3.32.40PM_300x300.png?v=1630928030",
        "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-08-26at12.09.13PM_485x300.png?v=1630928030",
      ],
    },
    {
      title: "LAMPS",
      buttonLabel: "SHOP LAMPS",
      images: [
        "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-13at1.41.01PM_300x300.png?v=1631526121",
        "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-13at1.39.28PM_256x256.png?v=1631526014",
      ],
    },
    {
      title: "SOFA",
      buttonLabel: "SHOP SOFA",
      images: [
        "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-03at4.29.50PM_352x288.png?v=1632227990",
        "https://grassitupshop.com/cdn/shop/products/ScreenShot2022-06-10at4.48.30PM_288x288.png?v=1654865813",
      ],
    },
  ];

  return (
    <div className="App" ref={component}>
      <div ref={slider} className="container1">
        {sections.map((section, index) => (
          <div className="panel card" key={index}>
            <div
              className="hero-images"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={section.images[0]}
                alt={`${section.title} Image 1`}
                className="image1"
              />
              <img
                src={section.images[1]}
                alt={`${section.title} Image 2`}
                className="image2"
                // style={{ transform: `translateX(${offset}px)` }}
              />
            </div>
            <div
              className="hero-content"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1 className="horizontal-scroll-title">{section.title}</h1>
              <button className="shopButton">{section.buttonLabel}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
