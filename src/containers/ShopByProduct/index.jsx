import React, { useEffect, useState } from "react";
import "./shopByProduct.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { path } from "framer-motion/client";
const sections = [
  {
    name: "OUTDOOR LIVING",
    query: "outdoor-living",
    images: [
      {
        title: "Sofa",
        src: "https://cld.accentuate.io/274849661077/1740771262682/megamenu-sofa-seaside.jpg",
        colSpan: 3,
      },
      {
        title: "Modular Sofa",
        src: "https://cld.accentuate.io/274849759381/1627517915897/megamenu-cavallo-loveseat.jpg",
        colSpan: 3,
      },
      {
        title: "Lounge Chairs",
        src: "https://cld.accentuate.io/276980957333/1630015138621/megamenu-belv-lounging.jpg",
        colSpan: 3,
      },
      {
        title: "Coffee Table",
        src: "https://cld.accentuate.io/274849693845/1692660232800/CalabasasSectionalMegaMenu.jpg",
        colSpan: 3,
      },
      {
        title: "Side Table",
        src: "https://cld.accentuate.io/276985774229/1702766684213/megamenu-chaise.jpg",
        colSpan: 3,
      },
      {
        title: "Ottomans",
        src: "https://cld.accentuate.io/276981186709/1630015230183/megamenu-rocker-saltpoint.jpg",
        colSpan: 3,
      },
      {
        title: "Sofa Set",
        src: "https://cld.accentuate.io/274849530005/1628876665402/megamenu-sides.jpg",
        colSpan: 3,
      },
    ],
  },
  {
    name: "OUTDOOR DINING",
    query: "outdoor-dining",
    images: [
      {
        title: "Dining Table",
        src: "https://cld.accentuate.io/274938757269/1635540100607/optimized-mason-dining-table-menu.jpg",
        colSpan: 6,
      },
      {
        title: "Dining Chairs",
        src: "https://cld.accentuate.io/274938724501/1628196779253/megamenu-diningchairs-del-mar.jpg",
        colSpan: 6,
      },
      {
        title: "Console",
        src: "https://cld.accentuate.io/276985217173/1630015407324/bar-chairs-menu_C.jpg",
        colSpan: 6,
      },
      {
        title: "Dining Set",
        src: "https://cld.accentuate.io/276981121173/1634600828911/optimized-madera-dining-benches-menu.jpg",
        colSpan: 3,
      },
    ],
  },
  {
    name: "BAR FURNITURE",
    query: "bar-furniture",
    images: [
      {
        title: "Bar Table",
        src: "https://cld.accentuate.io/276982235285/1639171680953/megamenu-fire.jpg",
        colSpan: 6,
      },
      {
        title: "Bar Chairs",
        src: "https://cld.accentuate.io/276499988629/1628204172625/wide-flame-guard2.jpg",
        colSpan: 6,
      },
    ],
  },
  {
    name: "SUNLOUNGER & DAYBED",
    query: "sunbed-daybed",
    images: [
      {
        title: "Sunbed",
        src: "https://cld.accentuate.io/276981514389/1635547613658/new-market-menu.jpg",
        colSpan: 6,
      },
      {
        title: "Daybed",
        src: "https://cld.accentuate.io/276500218005/1628206135979/megamenu-cantilever.jpg",
        colSpan: 6,
      },
      {
        title: "Sunbed Side table",
        src: "https://cld.accentuate.io/277564489877/1633562693919/megamenu-tuuci-alt.jpg",
        colSpan: 6,
      },
      {
        title: "Pool Accessories",
        src: "https://cld.accentuate.io/277564457109/1702757673766/megamenu-bases.jpg",
        colSpan: 3,
      },
    ],
  },
  {
    name: "POUFS",
    query: "poufs",
    images: [],
  },
  {
    name: "SWINGS & HAMMOCK",
    query: "swings-hammocks",
    images: [
      {
        title: "Swing",
        src: "https://cld.accentuate.io/276499726485/1635547269038/megamenu-pillows.jpg",
        colSpan: 6,
      },
      {
        title: "Hammock",
        src: "https://cld.accentuate.io/396046303485/1654634842361/megamenu-rugs.jpg",
        colSpan: 6,
      },
    ],
  },
  {
    name: "CARPETS",
    query: "carpets",
    images: [],
  },
  {
    name: "LIGHTING",
    query: "lighting",
    images: [],
  },
  {
    name: "UMBRELLAS",
    query: "umbrellas",
    images: [],
  },
  {
    name: "POTS & PLANTS",
    query: "pots-plants",
    images: [
      {
        title: "POTS",
        src: "https://cld.accentuate.io/276499726485/1635547269038/megamenu-pillows.jpg",
        colSpan: 6,
      },
      {
        title: "PLEANTS",
        src: "https://cld.accentuate.io/396046303485/1654634842361/megamenu-rugs.jpg",
        colSpan: 6,
      },
    ],
  },
  {
    name: "ACCESSORIES",
    query: "accessories",
    images: [
      {
        title: "Table Accessories",
        src: "https://cld.accentuate.io/276499726485/1635547269038/megamenu-pillows.jpg",
        colSpan: 6,
      },
      {
        title: "Hanging Accessories",
        src: "https://cld.accentuate.io/396046303485/1654634842361/megamenu-rugs.jpg",
        colSpan: 6,
      },
      {
        title: "Floor Accessories",
        src: "https://cld.accentuate.io/276499726485/1635547269038/megamenu-pillows.jpg",
        colSpan: 6,
      },
      {
        title: "Pillows",
        src: "https://cld.accentuate.io/396046303485/1654634842361/megamenu-rugs.jpg",
        colSpan: 6,
      },
    ],
  },
  {
    name: "BBQ & FIRE BET",
    query: "bbq-fire-bet",
    images: [
      {
        title: "BBQ",
        src: "https://cld.accentuate.io/276499726485/1635547269038/megamenu-pillows.jpg",
        colSpan: 6,
      },
      {
        title: "Fire bet",
        src: "https://cld.accentuate.io/396046303485/1654634842361/megamenu-rugs.jpg",
        colSpan: 6,
      },
    ],
  },
];

const ShopByProduct = () => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");

    if (category) {
      const matchedSection = sections.find(
        (section) => section.query === category
      );
      if (matchedSection) {
        setActiveSection(matchedSection);
      }
    }

    window.scrollTo(0, 0);
  }, []);

  const handleMouseEnter = (section) => {
    setActiveSection(section);
    const params = new URLSearchParams(window.location.search);
    params.set("category", section.query);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);
  };
  return (
    <>
      <div className="shop-by-product-container">
        {/* Sidebar Tabs */}
        <div className="product-tabs">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`product-tab ${
                activeSection.name === section.name ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(section)}
            >
              {section.name}
            </div>
          ))}
        </div>

        {/* Image Grid Section */}
        <div className="product-content">
          <div className="product-images-grid">
            {activeSection.images.map((item, index) => (
              <div
                key={index}
                className="product-image-box"
                onClick={() =>
                  navigate(`/collections/${item.title.toLowerCase()}`)
                }
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={item.src} alt={item.title} loading="lazy" />
                <p>{item.title}</p>
              </div>
            ))}
            <div
              className="product-shop-all"
              onClick={() =>
                navigate(
                  `/collections/shop-all-${activeSection.name.toLowerCase()}`
                )
              }
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2>Shop all {activeSection.name}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopByProduct;
