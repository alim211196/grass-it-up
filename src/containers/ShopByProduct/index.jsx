import React, { useEffect, useState } from "react";
import "./shopByProduct.css";
import Header from "../HomePage/subComponents/Header";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const sections = [
  {
    name: "Lounging",
    images: [
      {
        title: "Sofas",
        src: "https://cld.accentuate.io/274849661077/1740771262682/megamenu-sofa-seaside.jpg",
        colSpan: 3,
      },
      {
        title: "Loveseats",
        src: "https://cld.accentuate.io/274849759381/1627517915897/megamenu-cavallo-loveseat.jpg",
        colSpan: 3,
      },
      {
        title: "Chair & Ottomans",
        src: "https://cld.accentuate.io/276980957333/1630015138621/megamenu-belv-lounging.jpg",
        colSpan: 3,
      },
      {
        title: "Sectionals",
        src: "https://cld.accentuate.io/274849693845/1692660232800/CalabasasSectionalMegaMenu.jpg",
        colSpan: 3,
      },
      {
        title: "Chaise Lounges & Daybeds",
        src: "https://cld.accentuate.io/276985774229/1702766684213/megamenu-chaise.jpg",
        colSpan: 3,
      },
      {
        title: "Adirondacks & Rockers",
        src: "https://cld.accentuate.io/276981186709/1630015230183/megamenu-rocker-saltpoint.jpg",
        colSpan: 3,
      },
      {
        title: "Coffee & Side Tables",
        src: "https://cld.accentuate.io/274849530005/1628876665402/megamenu-sides.jpg",
        colSpan: 3,
      },
    ],
  },
  {
    name: "Dining & Bar",
    images: [
      {
        title: "Dining Tables",
        src: "https://cld.accentuate.io/274938757269/1635540100607/optimized-mason-dining-table-menu.jpg",
        colSpan: 6,
      },
      {
        title: "Dining Chairs",
        src: "https://cld.accentuate.io/274938724501/1628196779253/megamenu-diningchairs-del-mar.jpg",
        colSpan: 6,
      },
      {
        title: "Bar & Counter",
        src: "https://cld.accentuate.io/276985217173/1630015407324/bar-chairs-menu_C.jpg",
        colSpan: 6,
      },
      {
        title: "Benches",
        src: "https://cld.accentuate.io/276981121173/1634600828911/optimized-madera-dining-benches-menu.jpg",
        colSpan: 3,
      },
    ],
  },
  {
    name: "Fire",
    images: [
      {
        title: "Fire Tables",
        src: "https://cld.accentuate.io/276982235285/1639171680953/megamenu-fire.jpg",
        colSpan: 6,
      },
      {
        title: "Lids & Flame Guards",
        src: "https://cld.accentuate.io/276499988629/1628204172625/wide-flame-guard2.jpg",
        colSpan: 6,
      },
      {
        title: "Tank Covers",
        src: "https://cld.accentuate.io/276500054165/1639171789710/megamenu-tank.jpg",
        colSpan: 6,
      },
      {
        title: "Lava Rocks & Filler",
        src: "https://cld.accentuate.io/276500021397/1628204389719/megamenu-lava.jpg",
        colSpan: 3,
      },
    ],
  },
  {
    name: "Shade",
    images: [
      {
        title: "Market Umbrellas",
        src: "https://cld.accentuate.io/276981514389/1635547613658/new-market-menu.jpg",
        colSpan: 6,
      },
      {
        title: "Cantilever Umbrellas",
        src: "https://cld.accentuate.io/276500218005/1628206135979/megamenu-cantilever.jpg",
        colSpan: 6,
      },
      {
        title: "Tuuci Shade",
        src: "https://cld.accentuate.io/277564489877/1633562693919/megamenu-tuuci-alt.jpg",
        colSpan: 6,
      },
      {
        title: "Umbrellas Bases & Lights",
        src: "https://cld.accentuate.io/277564457109/1702757673766/megamenu-bases.jpg",
        colSpan: 3,
      },
    ],
  },
  {
    name: "Accessories",
    images: [
      {
        title: "Pillows",
        src: "https://cld.accentuate.io/276499726485/1635547269038/megamenu-pillows.jpg",
        colSpan: 6,
      },
      {
        title: "Floor Mates & Rugs",
        src: "https://cld.accentuate.io/396046303485/1654634842361/megamenu-rugs.jpg",
        colSpan: 6,
      },
      {
        title: "Furniture Covers",
        src: "https://cld.accentuate.io/276499759253/1702752411253/megamenu-covers.jpg",
        colSpan: 6,
      },
      {
        title: "Lights",
        src: "https://cld.accentuate.io/428057559293/1713556688307/Lux-megamenu.jpg",
        colSpan: 3,
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
  return (
    <>
      <Header />
      <div className="shop-by-product-container">
        {/* Sidebar Tabs */}
        <div className="product-tabs">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`product-tab ${
                activeSection.name === section.name ? "active" : ""
              }`}
              onMouseEnter={() => setActiveSection(section)}
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
              <h2>Shop All {activeSection.name}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopByProduct;
