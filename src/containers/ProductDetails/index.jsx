import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../HomePage/subComponents/Header";
import SubscriptionSection from "../HomePage/subComponents/SubscriptionSection";
import Footer from "../HomePage/subComponents/Footer";
import "./productDetails.css";
import ProductInfo from "./subComponents/ProductInfo";
import ProductMetaData from "./subComponents/ProductMetaData";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state; // Access the passed product object

  console.log(product);

  return (
    <>
      <Header />
      <ProductInfo product={product} />
      <ProductMetaData />
      <SubscriptionSection />
      <Footer />
    </>
  );
};

export default ProductDetails;
