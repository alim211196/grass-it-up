import React, { lazy, Suspense } from "react";

// Direct imports (no lazy loading)
import HeroBanner from "./subComponents/HeroBanner";
import HorizontalScroll from "./subComponents/HorizontalScroll";
import InformativeCategorySection from "./subComponents/InformativeCategorySection";
import ProductGrid from "./subComponents/ProductGrid";
import BreakerSection from "./subComponents/BreakerSection";
import HorizontalCarousel from "./subComponents/HorizontalCarousel";
import BlogSection from "./subComponents/BlogSection";
import TopTrending from "./subComponents/TopTrending";
import VisitOurShowroom from "./subComponents/VisitOurShowroom";
import HotspotImage from "./subComponents/HotspotImage";
import PartnerMarquee from "./subComponents/PartnerMarquee";
import FurnitureScrollEffect from "./subComponents/FurnitureScrollEffect";
import CylindricalCarousel from "./subComponents/CylindricalCarousel";
import Testimonial from "./subComponents/Testimonial";
import SubscriptionSection from "../../common/SubscriptionSection";
import Chatbot from "../ChatBot";
import GallerySection2 from "./subComponents/GallerySection2";

// Lazy load only VideoSlider
const VideoSlider = lazy(() => import("./subComponents/VideoSlider"));

// Loader

const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <HorizontalScroll />
      <Chatbot />
      <InformativeCategorySection />
      <ProductGrid />
      <BreakerSection />
      <HorizontalCarousel />
      <BlogSection />
      <GallerySection2 />
      <TopTrending />
      <VisitOurShowroom />
      <HotspotImage />
      <PartnerMarquee />
      <FurnitureScrollEffect />
      <CylindricalCarousel />

      {/* Only VideoSlider is lazy-loaded */}
      <Suspense fallback={null}>
        <VideoSlider />
      </Suspense>

      <Testimonial />
      <SubscriptionSection />
    </>
  );
};

export default HomePage;
