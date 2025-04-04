import React, { useEffect } from "react";
import Header from "../HomePage/subComponents/Header";
import Footer from "../HomePage/subComponents/Footer";
import WishCardList from "./subComponents/WishCardList";
import RecentlyViewed from "./subComponents/RecentlyViewed";
import SubscriptionSection from "../HomePage/subComponents/SubscriptionSection";
import AOS from "aos";
import "aos/dist/aos.css";
import "./wishlist.css";
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
];
const WishList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Header />
      <section className="wishlist-listing">
        <div className="container-wishlist-listing">
          <h1
            className="title-wishlist-listing"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Wishlist(3)
          </h1>

          <p
            className="description-wishlist-listing"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Weather-friendly and welcoming, an outdoor sofa turns your patio or
            balcony into a second living room. Choose your favorite from our
            array of styles in teak, aluminum, all-weather wicker and rope,
            topped with plush cushions
          </p>
        </div>
      </section>

      <section
        className="wishlist-filter-container"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <WishCardList products={products} />
      </section>

      <RecentlyViewed />
      <SubscriptionSection />
      <Footer />
    </>
  );
};

export default WishList;
