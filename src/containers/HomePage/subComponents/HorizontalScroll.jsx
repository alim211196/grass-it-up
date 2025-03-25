import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import "../../../App.css";
import SectionHeading from "./SectionHeading";
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
      images: [
        "https://images.ctfassets.net/tuohjudwxvzs/9Ff7V1JqJwu0cfYEJ4kWt/ef7b0e440769d005afdc9466fae600a0/chairs_nemcam.png",
        "https://images.ctfassets.net/tuohjudwxvzs/6L5rxJi0JyWPr41ZbaoBbu/14ca5dda93736787b1f004c4da9ae3cd/chairs-mb_haymwf.png",
      ],
    },
    {
      title: "TABLES",
      buttonLabel: "SHOP TABLES",
      images: [
        "https://images.ctfassets.net/tuohjudwxvzs/3l4UZJUfxYdqFZnPT4qQ5f/10a77a6ca201d02798df92cc48cc250a/tables_gokhgz.png",
        "https://images.ctfassets.net/tuohjudwxvzs/fO4HVOlQv4IKCfYs6cVay/74888751796597c8ee93425cfb9fc014/tables-mb_ljzlgt.png",
      ],
    },
    {
      title: "LAMPS",
      buttonLabel: "SHOP LAMPS",
      images: [
        "https://images.ctfassets.net/tuohjudwxvzs/4mnTMMdY2Om1Fi61u6hF7O/795d642216b2551c90e946756d4a8386/lamps_v27n9t.png",
        "https://images.ctfassets.net/tuohjudwxvzs/7MJGYGfL2FnbkB3s6lRtqG/52e59a170fca6aa3b5085e64c911fc3c/lamps-mb_wtugjk.png",
      ],
    },
    {
      title: "SHELVES",
      buttonLabel: "SHOP SHELVES",
      images: [
        "https://images.ctfassets.net/tuohjudwxvzs/1sGOK3xQvFTpDjkAAUtKY1/34680bc73428b1a991e939b7d300e86a/shelve_wi8ipx_u6na85.webp",
        "https://images.ctfassets.net/tuohjudwxvzs/5KTiBZ1fkTZx9H1ofXUrXA/4c5369d037c7058909e0594f4dee8859/shelves_qy9agg.webp",
      ],
    },
  ];

  return (
    <div className="App" ref={component}>
      <div ref={slider} className="container1">
        <div className="featured-categories">
          <SectionHeading title="Featured" subtitle="Categories" />
        </div>
        {sections.map((section, index) => (
          <>
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
          </>
        ))}
      </div>
    </div>
  );
}
