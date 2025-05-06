import React, { lazy, Suspense, useEffect } from "react";

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

import CylindricalCarousel from "./subComponents/CylindricalCarousel";
import Testimonial from "./subComponents/Testimonial";
import SubscriptionSection from "../../common/SubscriptionSection";
import Chatbot from "../ChatBot";
import GallerySection2 from "./subComponents/GallerySection2";
import InteriorJoinNow from "./subComponents/InteriorJoinNow";
import GallerySection3 from "./subComponents/GallerySection3";

const FurnitureScrollEffect = lazy(() =>
  import("./subComponents/FurnitureScrollEffect")
);
// Lazy load only VideoSlider
const VideoSlider = lazy(() => import("./subComponents/VideoSlider"));

// Loader

const HomePage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://agent.d-id.com/v1/index.js";
    script.setAttribute("data-name", "did-agent");
    script.setAttribute("data-mode", "fabio");
    script.setAttribute(
      "data-client-key",
      "Z29vZ2xlLW9hdXRoMnwxMDI2NDc0MDM2MjQ1NTE2NTE3Mzg6Z1dUUVBVdW10QTFyYWEyT21nRE9q"
    );
    script.setAttribute("data-agent-id", "agt_TazyjEHU");
    script.setAttribute("data-monitor", "true");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
      <GallerySection3 />
      <TopTrending />
      <VisitOurShowroom />
      <HotspotImage />
      <PartnerMarquee />
      <Suspense fallback={null}>
        <FurnitureScrollEffect />
      </Suspense>
      <CylindricalCarousel />
      <Suspense fallback={null}>
        <VideoSlider />
      </Suspense>
      <Testimonial />
      <InteriorJoinNow />
      <SubscriptionSection />
    </>
  );
};

export default HomePage;
