import React, { useEffect, useState } from "react";
import "../ShopByProduct/shopByProduct.css";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { q } from "framer-motion/client";

const sections = [
  {
    name: "Tidelli",
    query: "tidelli",
    logo: "/tidelli.svg",
    description: `Tidelli is a Brazilian luxury brand specializing in handcrafted, customizable outdoor furniture, known for its contemporary designs and use of materials like wood, aluminum, synthetic fiber, and nautical rope, creating comfortable and stylish outdoor spaces.`,
    images: [
      {
        title: "Fushion Love Seat Swing",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-04at5.28.33PM_288x288.png",
        colSpan: 3,
      },

      {
        title: "Maui Tray Small - Emerald",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-10-20at10.44.19AM_2751cf14-9e18-44f5-81d0-c1f5bed818f9_288x288.png",
        colSpan: 3,
      },
      {
        title: "Maui Basket - Deep Teal",
        src: "https://grassitupshop.com/cdn/shop/files/ScreenShot2024-09-16at1.00.11PM_352x352.png",
        colSpan: 3,
      },
      {
        title: "Biarritz Side Table",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-03at7.52.42PM_288x288.png",
        colSpan: 3,
      },
      {
        title: "Fushion Side Table Standard",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-04at5.26.32PM_288x288.png",
        colSpan: 3,
      },
      {
        title: "Marina Ottoman Blueberry",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2022-01-17at11.26.28AM_288x288.png",
        colSpan: 3,
      },

      {
        title: "Biarritz Coffee Table",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-03at7.55.07PM_288x288.png",
        colSpan: 3,
      },
      {
        title: "Maui Placemat - Rose Gold",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-08-24at5.49.33PM_352x288.png",
        colSpan: 3,
      },
    ],
  },
  {
    name: "Hofats",
    query: "hofats",
    logo: "/Hofats.png",
    description:
      "Höfats is a German brand known for combining modern design with practical functionality in fire-related products like fire bowls, grills, and lanterns to elevate outdoor living experiences.",
    images: [
      {
        title: "Elisir Dining Armchair",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1508_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "Ribot Stackable Dining armchair",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-01at10.31.56AM_352x352.png",
        colSpan: 3,
      },
      {
        title: "Pluvia Dining Armchair",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1540_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "Swing by Patrick Norguet Dining Set",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2022-08-07at2.07.34PM_78b2c59e-a10c-4e49-8916-e5f3c51f370c_384x352.png",
        colSpan: 3,
      },
      {
        title: "Kilt Stackable Dining Armchair",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1530_1_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "Rafael Dining Arm Chair w/ Frame in Teak and Weaved Rope",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-08-31at5.08.22PM_288x288.png",
        colSpan: 3,
      },
      {
        title: "Nicolette Dining Armchair",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1567_352x352.jpg",
        colSpan: 3,
      },

      {
        title: "Knit Stackable Dining Chair Lava Grey/ Natural Teak",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1534_352x352.jpg",
        colSpan: 3,
      },
    ],
  },
  {
    name: "Roolf Living",
    query: "roolf-living",
    logo: "/roolf-living.svg",
    description:
      "Roolf Living creates contemporary outdoor furniture and accessories with bold colors, unique textures, and weather-resistant materials designed for comfortable and stylish outdoor relaxation.",
    images: [
      {
        title: "Elisir Dining Armchair",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1508_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "Ribot Stackable Dining armchair",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-01at10.31.56AM_352x352.png",
        colSpan: 3,
      },
      {
        title: "Pluvia Dining Armchair",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1540_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "Swing by Patrick Norguet Dining Set",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2022-08-07at2.07.34PM_78b2c59e-a10c-4e49-8916-e5f3c51f370c_384x352.png",
        colSpan: 3,
      },
      {
        title: "Kilt Stackable Dining Armchair",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1530_1_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "Rafael Dining Arm Chair w/ Frame in Teak and Weaved Rope",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-08-31at5.08.22PM_288x288.png",
        colSpan: 3,
      },
      {
        title: "Nicolette Dining Armchair",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1567_352x352.jpg",
        colSpan: 3,
      },

      {
        title: "Knit Stackable Dining Chair Lava Grey/ Natural Teak",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1534_352x352.jpg",
        colSpan: 3,
      },
    ],
  },
  {
    name: "Living Twist",
    query: "living-twist",
    logo: "/livintwist.svg",
    description:
      "Living Twist offers innovative and modular outdoor furniture solutions that merge comfort, design, and functionality for modern outdoor living.",
    images: [
      {
        title: "Fushion Love Seat Swing",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-04at5.28.33PM_288x288.png",
        colSpan: 3,
      },

      {
        title: "Maui Tray Small - Emerald",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-10-20at10.44.19AM_2751cf14-9e18-44f5-81d0-c1f5bed818f9_288x288.png",
        colSpan: 3,
      },
      {
        title: "Maui Basket - Deep Teal",
        src: "https://grassitupshop.com/cdn/shop/files/ScreenShot2024-09-16at1.00.11PM_352x352.png",
        colSpan: 3,
      },
      {
        title: "Biarritz Side Table",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-03at7.52.42PM_288x288.png",
        colSpan: 3,
      },
      {
        title: "Fushion Side Table Standard",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-04at5.26.32PM_288x288.png",
        colSpan: 3,
      },
      {
        title: "Marina Ottoman Blueberry",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2022-01-17at11.26.28AM_288x288.png",
        colSpan: 3,
      },

      {
        title: "Biarritz Coffee Table",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-03at7.55.07PM_288x288.png",
        colSpan: 3,
      },
      {
        title: "Maui Placemat - Rose Gold",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-08-24at5.49.33PM_352x288.png",
        colSpan: 3,
      },
    ],
  },
  {
    name: "Diphano",
    query: "diphano",
    logo: "/diphano.png",
    description:
      "Diphano is a Belgian manufacturer of high-quality, durable, and functional outdoor furniture, known for its versatile collections and focus on creating comfortable and elegant outdoor spaces.",
    images: [
      {
        title: "Switch Sun Lounger",
        src: "https://grassitupshop.com/cdn/shop/files/ScreenShot2023-12-13at1.10.10PM_352x352.png",
        colSpan: 3,
      },
      {
        title: "Newport Dining Chair",
        src: "https://grassitupshop.com/cdn/shop/files/FUR5000255-0001_Diphano_Newport_Dining_20armchair_AF10_203R03_20HFTK_20C603_02_58c9da10-c5a0-429d-a48f-8599dbeea37d_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "Alexa Dining Extendable Table",
        src: "https://grassitupshop.com/cdn/shop/files/ScreenShot2023-12-08at1.10.29PM_352x352.png",
        colSpan: 3,
      },
      {
        title: "Easy Fit Side Table - Lava",
        src: "https://grassitupshop.com/cdn/shop/files/ScreenShot2023-11-18at1.01.51PM_352x352.png",
        colSpan: 3,
      },
      {
        title: "Coast Medium Footrest",
        src: "https://grassitupshop.com/cdn/shop/files/ScreenShot2023-11-17at6.49.56PM_352x352.png",
        colSpan: 3,
      },
      {
        title: "Omer Tray Table Lava",
        src: "https://grassitupshop.com/cdn/shop/products/photo_2882b7f0-c005-42d9-9ac1-f264629f018a_288x288.jpg",
        colSpan: 3,
      },
      {
        title: "Switch Double Lounger",
        src: "https://grassitupshop.com/cdn/shop/files/ScreenShot2023-12-13at1.08.26PM_352x352.png",
        colSpan: 3,
      },

      {
        title: "Coast Coffee Table",
        src: "https://grassitupshop.com/cdn/shop/files/ScreenShot2023-11-17at7.09.30PM_352x352.png",
        colSpan: 3,
      },
    ],
  },
  {
    name: "Jardinico",
    query: "jardinico",
    logo: "/jardinico.svg",
    description:
      "Jardinico is a Belgian outdoor brand specializing in premium umbrellas, furniture, and accessories that combine aesthetics with functionality for elegant outdoor living.",
    images: [
      {
        title: "Fushion Love Seat Swing",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-04at5.28.33PM_288x288.png",
        colSpan: 3,
      },

      {
        title: "Maui Tray Small - Emerald",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-10-20at10.44.19AM_2751cf14-9e18-44f5-81d0-c1f5bed818f9_288x288.png",
        colSpan: 3,
      },
      {
        title: "Maui Basket - Deep Teal",
        src: "https://grassitupshop.com/cdn/shop/files/ScreenShot2024-09-16at1.00.11PM_352x352.png",
        colSpan: 3,
      },
      {
        title: "Biarritz Side Table",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-03at7.52.42PM_288x288.png",
        colSpan: 3,
      },
      {
        title: "Fushion Side Table Standard",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-04at5.26.32PM_288x288.png",
        colSpan: 3,
      },
      {
        title: "Marina Ottoman Blueberry",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2022-01-17at11.26.28AM_288x288.png",
        colSpan: 3,
      },

      {
        title: "Biarritz Coffee Table",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-03at7.55.07PM_288x288.png",
        colSpan: 3,
      },
      {
        title: "Maui Placemat - Rose Gold",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-08-24at5.49.33PM_352x288.png",
        colSpan: 3,
      },
    ],
  },
  {
    name: "Meroni",
    query: "meroni",
    logo: "/MeroniColzani.png",
    description:
      "Meroni is an Italian luxury furniture brand offering handcrafted outdoor and indoor furniture, reflecting timeless elegance and artisan tradition.",
    images: [
      {
        title: "Elisir Dining Armchair",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1508_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "Ribot Stackable Dining armchair",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-01at10.31.56AM_352x352.png",
        colSpan: 3,
      },
      {
        title: "Pluvia Dining Armchair",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1540_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "Swing by Patrick Norguet Dining Set",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2022-08-07at2.07.34PM_78b2c59e-a10c-4e49-8916-e5f3c51f370c_384x352.png",
        colSpan: 3,
      },
      {
        title: "Kilt Stackable Dining Armchair",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1530_1_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "Rafael Dining Arm Chair w/ Frame in Teak and Weaved Rope",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-08-31at5.08.22PM_288x288.png",
        colSpan: 3,
      },
      {
        title: "Nicolette Dining Armchair",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1567_352x352.jpg",
        colSpan: 3,
      },

      {
        title: "Knit Stackable Dining Chair Lava Grey/ Natural Teak",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1534_352x352.jpg",
        colSpan: 3,
      },
    ],
  },
  {
    name: "Myyour",
    query: "myyour",
    logo: "/Myyour.png",
    description:
      "Myyour is an Italian brand known for its avant-garde design in lighting, furniture, and decor using innovative materials to create bold and colorful outdoor and indoor environments.",
    images: [
      {
        title: "Fushion Love Seat Swing",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-04at5.28.33PM_288x288.png",
        colSpan: 3,
      },

      {
        title: "Maui Tray Small - Emerald",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-10-20at10.44.19AM_2751cf14-9e18-44f5-81d0-c1f5bed818f9_288x288.png",
        colSpan: 3,
      },
      {
        title: "Maui Basket - Deep Teal",
        src: "https://grassitupshop.com/cdn/shop/files/ScreenShot2024-09-16at1.00.11PM_352x352.png",
        colSpan: 3,
      },
      {
        title: "Biarritz Side Table",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-03at7.52.42PM_288x288.png",
        colSpan: 3,
      },
      {
        title: "Fushion Side Table Standard",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-04at5.26.32PM_288x288.png",
        colSpan: 3,
      },
      {
        title: "Marina Ottoman Blueberry",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2022-01-17at11.26.28AM_288x288.png",
        colSpan: 3,
      },

      {
        title: "Biarritz Coffee Table",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-03at7.55.07PM_288x288.png",
        colSpan: 3,
      },
      {
        title: "Maui Placemat - Rose Gold",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-08-24at5.49.33PM_352x288.png",
        colSpan: 3,
      },
    ],
  },
  {
    name: "Gv2",
    query: "gv2",
    logo: "/Gv2.png",
    description:
      "GV2 specializes in premium outdoor furniture that blends craftsmanship with modern aesthetics, offering collections for sophisticated outdoor spaces.",
    images: [
      {
        title: "Elisir Dining Armchair",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1508_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "Ribot Stackable Dining armchair",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-09-01at10.31.56AM_352x352.png",
        colSpan: 3,
      },
      {
        title: "Pluvia Dining Armchair",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1540_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "Swing by Patrick Norguet Dining Set",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2022-08-07at2.07.34PM_78b2c59e-a10c-4e49-8916-e5f3c51f370c_384x352.png",
        colSpan: 3,
      },
      {
        title: "Kilt Stackable Dining Armchair",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1530_1_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "Rafael Dining Arm Chair w/ Frame in Teak and Weaved Rope",
        src: "https://grassitupshop.com/cdn/shop/products/ScreenShot2021-08-31at5.08.22PM_288x288.png",
        colSpan: 3,
      },
      {
        title: "Nicolette Dining Armchair",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1567_352x352.jpg",
        colSpan: 3,
      },

      {
        title: "Knit Stackable Dining Chair Lava Grey/ Natural Teak",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1534_352x352.jpg",
        colSpan: 3,
      },
    ],
  },
  {
    name: "Grassitup",
    query: "grassitup",
    logo: "/Master_Logo_RGB.jpg",
    description:
      "Grassitup is a Dubai-based retailer and wholesaler of high-quality, durable, and luxury outdoor furniture, offering a wide selection of outdoor dining, living, and garden furniture, with a focus on contemporary design and a balance of beauty, nature, culture, and tradition.",
    images: [
      {
        title: "Aspen Armchair - White",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1733_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "Dotty Teak Table Small 75CM",
        src: "https://grassitupshop.com/cdn/shop/files/TablesmallonDottysmall_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "New Freedom Teak Coffee Table - Ivory White",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1696_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "Dotty Round Ø 70 cm Plum",
        src: "https://grassitupshop.com/cdn/shop/files/Untitled_12b0a89f-f976-465c-99de-ba3646b28dc4_352x352.png",
        colSpan: 3,
      },
      {
        title: "Nest Dining Chair Green",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1143_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "Passion Side Table Charcoal",
        src: "https://grassitupshop.com/cdn/shop/files/Relaxation_just_got_a_style_upgrade_7_352x352.png",
        colSpan: 3,
      },
      {
        title: "Tammy Side Chair - Natural Peapod",
        src: "https://grassitupshop.com/cdn/shop/files/IMG_1124_352x352.jpg",
        colSpan: 3,
      },
      {
        title: "Daisy Swivel Lounge Chair - Natural Rope",
        src: "https://grassitupshop.com/cdn/shop/files/58_352x352.png",
        colSpan: 3,
      },
    ],
  },
];

const ShopByBrand = () => {
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
    const brand = params.get("brand");

    if (brand) {
      const matchedSection = sections.find(
        (section) => section.query === brand
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
    params.set("brand", section.query);

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
          <section className="brand-section">
            <img
              src={activeSection.logo}
              alt={activeSection.logo}
              loading="lazy"
            />
            <p className="brand-description">{activeSection.description}</p>
          </section>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopByBrand;
