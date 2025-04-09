import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState, useEffect, Fragment } from "react";
import "../../../App.css";
import SectionHeading from "../../../common/SectionHeading";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const component = useRef();
  const slider = useRef();
  const navigate = useNavigate();
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
        const scrollOffset = Math.max(-100, Math.min(100, sectionTop / 3)); // Faster vertical movement
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
      images: ["/category10.png", "/category11.png"],
    },
    {
      title: "TABLES",
      buttonLabel: "SHOP TABLES",
      images: ["/category20.png", "/category21.png"],
    },
    {
      title: "LAMPS",
      buttonLabel: "SHOP LAMPS",
      images: ["/category30.png", "/category31.png"],
    },
    {
      title: "SHELVES",
      buttonLabel: "SHOP SHELVES",
      images: ["/category40.webp", "/category41.webp"],
    },
  ];

  return (
    <div className="App" ref={component}>
      <div ref={slider} className="container1">
        <div className="featured-categories">
          <SectionHeading title="Featured" subtitle="Categories" />
        </div>
        {sections.map((section, index) => (
          <Fragment key={index}>
            <div className="panel card">
              <div
                className="hero-images"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <img
                  src={section.images[0]}
                  alt={`${section.title} Image 1`}
                  className="image1"
                  loading="lazy"
                />
                <img
                  src={section.images[1]}
                  alt={`${section.title} Image 2`}
                  className="image2"
                  loading="lazy"
                  // style={{ transform: `translateX(${offset}px)` }}
                />
              </div>
              <div
                className="hero-content"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h1 className="horizontal-scroll-title">{section.title}</h1>
                <button
                  className="shopButton"
                  onClick={() =>
                    navigate(`/collections/${section.title.toLowerCase()}`)
                  }
                >
                  {section.buttonLabel}
                </button>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
