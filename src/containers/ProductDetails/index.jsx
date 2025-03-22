import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../HomePage/subComponents/Header";
import SubscriptionSection from "../HomePage/subComponents/SubscriptionSection";
import Footer from "../HomePage/subComponents/Footer";
import "./productDetails.css";
import ProductInfo from "./subComponents/ProductInfo";
import ProductMetaData from "./subComponents/ProductMetaData";
import ExploreProduct from "./subComponents/ExploreProduct";
import ProductPage from "./subComponents/ProductPage";
import AOS from "aos";
import "aos/dist/aos.css";
const ProductDetails = () => {
  const location = useLocation();
  const product = location.state; // Access the passed product object

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const urlPath = window.location.pathname; // Get the path after domain
  const segments = urlPath.split("/"); // Split URL by "/"
  const category = segments[2];
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);
  return (
    <>
      <Header />
      <ProductInfo product={product} />
      <ProductMetaData />
      <section
        className="banner-image"
        data-aos="fade-up"
        data-aos-delay="100"
      />
      <ExploreProduct category={category} />
      <ProductPage />
      <SubscriptionSection />
      <Footer />
    </>
  );
};

export default ProductDetails;
