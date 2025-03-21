import "./productListing.css";
import React, { useEffect, useState } from "react";
import Footer from "../HomePage/subComponents/Footer";
import SubscriptionSection from "../HomePage/subComponents/SubscriptionSection";
import Header from "../HomePage/subComponents/Header";
import ProductGrid from "./SubComponents/ProductGrid";
import FilterSortView from "./SubComponents/FilterSortView";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCategorySlider from "./SubComponents/ProductCategorySlider";
const products = [
  {
    id: 1,
    name: "Seaside Sofa in Dune",
    price: "$3,460",
    fprice: "$4,325",
    image:
      "https://terraoutdoor.com/cdn/shop/files/seaside-dune-sofa-1_600x.jpg",
  },
  {
    id: 2,
    name: "Stinson Sofa in Charcoal Aluminum",
    price: "$3,460",
    fprice: "$4,325",
    image:
      "https://terraoutdoor.com/cdn/shop/files/stinson-charcoal-sofa-cast-silver-1_600x.jpg",
  },
  {
    id: 3,
    name: "Stinson Sofa in Teak",
    price: "$3,460",
    fprice: "$4,325",
    image:
      "https://terraoutdoor.com/cdn/shop/files/stinson-teak-sofa-quad-silver-1_600x.jpg",
  },
  {
    id: 4,
    name: "Belvedere Sofa in Teak",
    price: "$3,460",
    fprice: "$4,325",
    image:
      "https://terraoutdoor.com/cdn/shop/files/bel-tk-cstsil-3k_1_d2f6e2e6-a53a-41c3-9ccf-5ad98aa5c55f_600x.jpg",
  },
  {
    id: 5,
    name: "Belvedere Sofa in Charcoal Aluminum",
    price: "$3,460",
    fprice: "$4,325",
    image:
      "https://terraoutdoor.com/cdn/shop/products/JKA-10562-CHR_JKA-10562C40433_BELVEDERE-SOFA---96_-METAL-CHARCOAL_v1_600x.jpg",
  },
  {
    id: 6,
    name: "Belvedere Sofa in White Aluminum",
    price: "$3,460",
    fprice: "$4,325",
    image:
      "https://terraoutdoor.com/cdn/shop/files/bel-wht-castsil-3k_1_beab8e13-6b58-4543-81f6-497aa5726d5b_600x.jpg",
  },
  {
    id: 7,
    name: "Sonora Sofa in Charcoal Aluminum",
    price: "$3,460",
    fprice: "$4,325",
    image:
      "https://terraoutdoor.com/cdn/shop/files/SonoraCharcSofaNatural1_600x.jpg",
  },
  {
    id: 8,
    name: "Sonora Sofa in Natural Teak",
    price: "$3,460",
    fprice: "$4,325",
    image:
      "https://terraoutdoor.com/cdn/shop/files/SonoraTeakSofaCharc1_600x.jpg",
  },
  {
    id: 9,
    name: "Tiburon Sofa in Charcoal Aluminum",
    price: "$3,460",
    fprice: "$4,325",
    image:
      "https://terraoutdoor.com/cdn/shop/products/JKA-T003-CHR_MDR-300-5402_TIBURON-SOFA91_-METAL-CHARCOAL_V1_600x.jpg",
  },
  {
    id: 10,
    name: "Seaside Sofa in Dune",
    price: "$3,460",
    fprice: "$4,325",
    image:
      "https://terraoutdoor.com/cdn/shop/products/JKA-T003-QGRY_JKA-5402_TIBURON-SOFA9_81_-METAL-QUARTZ_V1_600x.jpg",
  },
  {
    id: 11,
    name: "Seaside Sofa in Dune",
    price: "$3,460",
    fprice: "$4,325",
    image:
      "https://terraoutdoor.com/cdn/shop/files/tiburon-teak-sofa-arashi-grey-1_600x.jpg",
  },
  {
    id: 12,
    name: "Seaside Sofa in Dune",
    price: "$3,460",
    fprice: "$4,325",
    image:
      "https://terraoutdoor.com/cdn/shop/files/avila-sofa-3kopt_0_600x.jpg",
  },
];
const ProductListing = () => {
  const [colSpan, setColSpan] = useState(4);
  const location = useLocation();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  // Check if the pathname starts with "/shop-all"
  const isShopAllPage = location.pathname.includes("/shop-all");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const url = location.pathname;
  const lastPart = url.split("/").pop();
  const decodedText = decodeURIComponent(lastPart);
  const cleanText = decodedText.replace(/[^\w\s-]/g, "").trim(); // Allow hyphens for now
  const categoryTitle = cleanText.replace(/-/g, " "); // Replace hyphens with spaces

  return (
    <>
      <Header />
      <section className="product-listing">
        <div className="container-product-listing">
          <h1
            className="title-product-listing"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {categoryTitle}
          </h1>
          {isShopAllPage ? (
            <p
              className="description-product-listing"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Create a space for relaxing and recharging under the sun or stars.
              Our deep seating assortment includes plush outdoor furniture from
              lounge chairs to sectionals in teak, aluminum, all-weather wicker
              and rope.
            </p>
          ) : (
            <p
              className="description-product-listing"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Weather-friendly and welcoming, an outdoor sofa turns your patio
              or balcony into a second living room. Choose your favorite from
              our array of styles in teak, aluminum, all-weather wicker and
              rope, topped with plush cushions
            </p>
          )}
        </div>
      </section>
      {isShopAllPage && <ProductCategorySlider />}

      <FilterSortView setColSpan={setColSpan} toggleFilter={toggleFilter} />
      <section className="product-filter-container">
        <ProductGrid
          products={products}
          colSpan={colSpan}
          isFilterOpen={isFilterOpen}
          toggleFilter={toggleFilter}
          categoryTitle={categoryTitle}
        />
      </section>
      <SubscriptionSection />
      <Footer />
    </>
  );
};

export default ProductListing;
