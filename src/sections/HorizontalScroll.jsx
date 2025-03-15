import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const component = useRef();
  const slider = useRef();

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

  return (
    <div className="App" ref={component}>
      <div ref={slider} className="container1">
        {/** Render Four Hero Cards **/}
        {[1, 2, 3, 4].map((index) => (
          <div className="panel card" key={index}>
            <div className="hero-images">
              <img
                src={`https://images.ctfassets.net/tuohjudwxvzs/9Ff7V1JqJwu0cfYEJ4kWt/ef7b0e440769d005afdc9466fae600a0/chairs_nemcam.png`}
                alt={`Chair ${index}`}
                className="image1"
              />
              <img
                src={`https://images.ctfassets.net/tuohjudwxvzs/6L5rxJi0JyWPr41ZbaoBbu/14ca5dda93736787b1f004c4da9ae3cd/chairs-mb_haymwf.png`}
                alt={`Chair ${index}`}
                className="image2"
                style={{ transform: `translateX(${offset}px)` }}
              />
            </div>
            <div className="hero-content">
              <h1>CHAIRS</h1>
              <button className="shop-button">SHOP CHAIRS →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
