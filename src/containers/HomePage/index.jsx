import React from "react";
import HeroBanner from "./subComponents/HeroBanner";
import HorizontalScroll from "./subComponents/HorizontalScroll";
import InformativeCategorySection from "./subComponents/InformativeCategorySection";
import ProductGrid from "./subComponents/ProductGrid";
import BreakerSection from "./subComponents/BreakerSection";
import HorizontalCarousel from "./subComponents/HorizontalCarousel";
import BlogSection from "./subComponents/BlogSection";
import GallerySection from "./subComponents/GallerySection";
import TopTrending from "./subComponents/TopTrending";
import VisitOurShowroom from "./subComponents/VisitOurShowroom";
import HotspotImage from "./subComponents/HotspotImage";
import PartnerMarquee from "./subComponents/PartnerMarquee";
import FurnitureScrollEffect from "./subComponents/FurnitureScrollEffect";
import CylindricalCarousel from "./subComponents/CylindricalCarousel";
import VideoSlider from "./subComponents/VideoSlider";
import Testimonial from "./subComponents/Testimonial";
import SubscriptionSection from "./subComponents/SubscriptionSection";
import Footer from "./subComponents/Footer";
import Chatbot from "../ChatBot";

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <HorizontalScroll />
      <InformativeCategorySection />
      <ProductGrid />
      <BreakerSection />
      <HorizontalCarousel />
      <BlogSection />
      <GallerySection />
      <TopTrending />
      <VisitOurShowroom />
      <HotspotImage />
      <PartnerMarquee />
      <FurnitureScrollEffect />
      <CylindricalCarousel />
      {/* <VideoSlider /> */}
      <Testimonial />
      <SubscriptionSection />
      <Footer />
      <Chatbot />
    </>
  );
};

export default HomePage;
