import React, { lazy, Suspense } from "react";

// Eagerly load essential components
import HeroBanner from "./subComponents/HeroBanner";
import HorizontalScroll from "./subComponents/HorizontalScroll";
import SuspenseLoader from "../../utils/SuspenseLoader";

// Lazy load the rest of the components
const InformativeCategorySection = lazy(() =>
  import("./subComponents/InformativeCategorySection")
);
const ProductGrid = lazy(() => import("./subComponents/ProductGrid"));
const BreakerSection = lazy(() => import("./subComponents/BreakerSection"));
const HorizontalCarousel = lazy(() =>
  import("./subComponents/HorizontalCarousel")
);
const BlogSection = lazy(() => import("./subComponents/BlogSection"));
const TopTrending = lazy(() => import("./subComponents/TopTrending"));
const VisitOurShowroom = lazy(() => import("./subComponents/VisitOurShowroom"));
const HotspotImage = lazy(() => import("./subComponents/HotspotImage"));
const PartnerMarquee = lazy(() => import("./subComponents/PartnerMarquee"));
const FurnitureScrollEffect = lazy(() =>
  import("./subComponents/FurnitureScrollEffect")
);
const CylindricalCarousel = lazy(() =>
  import("./subComponents/CylindricalCarousel")
);
const VideoSlider = lazy(() => import("./subComponents/VideoSlider"));
const Testimonial = lazy(() => import("./subComponents/Testimonial"));
const SubscriptionSection = lazy(() =>
  import("../../common/SubscriptionSection")
);
const Chatbot = lazy(() => import("../ChatBot"));
const GallerySection2 = lazy(() => import("./subComponents/GallerySection2"));
const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <HorizontalScroll />
      <Chatbot />
      <Suspense fallback={<SuspenseLoader />}>
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
        <VideoSlider />
        <Testimonial />
        <SubscriptionSection />
      </Suspense>
    </>
  );
};

export default HomePage;
