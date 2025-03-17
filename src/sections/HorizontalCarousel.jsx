import React, { useRef, useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import "../App.css";
const images = [
  {
    src: "https://cld.accentuate.io/447233851645/1740741955277/stinson-slide2.jpg?v=1740743025627&options=w_540",
    alt: "Chair 1",
    name: "Stinson",
  },
  {
    src: "https://cld.accentuate.io/447231525117/1740741924557/del-mar-slide2.jpg?v=1740742978453&options=w_540",
    alt: "Chair 2",
    name: "Del Mar",
  },
  {
    src: "https://cld.accentuate.io/447231557885/1740741992444/seaside-slide2.jpg?v=1741206376098&options=w_540",
    alt: "Chair 3",
    name: "Seaside",
  },
  {
    src: "https://cld.accentuate.io/278232039573/1648774506347/diablo-dune.jpg?v=1740763762856&options=w_540",
    alt: "Chair 4",
    name: "Diablo",
  },
  {
    src: "https://cld.accentuate.io/278997434517/1740764015996/montecito-newness.jpg?v=1740764015996",
    alt: "Chair 5",
    name: "Montecito",
  },
  {
    src: "https://cld.accentuate.io/403659391229/1677543722329/salt-point-new.jpg?v=1740765139159",
    alt: "Chair 6",
    name: "Salt Point",
  },
];

const HorizontalCarousel = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: activeIndex * 310,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const scrollToIndex = (index) => {
    setActiveIndex(index);
  };

  const scrollNext = () => {
    if (activeIndex < images.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  const scrollPrev = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 1;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <Container fluid className="carousel-container position-relative p-4">
      <div
        className="carousel-wrapper"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="carousel-items">
          {images.map((image, index) => (
            <div key={index}>
              <img
                className={`carousel-image ${
                  activeIndex === index ? "active" : ""
                }`}
                src={image.src}
                alt={image.alt}
              />
              <h4 className="image-text">{image.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Indicator Line */}
      <div className="tab-indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`tab-section ${activeIndex === index ? "active" : ""}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
        <div className="nav-buttons">
          <Button
            variant="light"
            onClick={scrollPrev}
            disabled={activeIndex === 0}
          >
            ◀
          </Button>
          <Button
            variant="light"
            onClick={scrollNext}
            disabled={activeIndex === images.length - 1}
          >
            ▶
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default HorizontalCarousel;
