// Import CSS Module
import "bootstrap/dist/css/bootstrap.min.css";
import HeroBanner from "./sections/HeroBanner";
import Marquee from "./sections/Marquee";
import ProductGrid from "./sections/ProductGrid";
import BreakerSection from "./sections/BreakerSection";
import InformativeCategorySection from "./sections/InformativeCategorySection";
import GallerySection from "./sections/GallerySection";
import HorizontalScroll from "./sections/HorizontalScroll";
import PartnerMarquee from "./sections/PartnerMarquee";
import Testimonial from "./sections/Testimonial";
import VisitOurShowroom from "./sections/VisitOurShowroom";
import SubscriptionSection from "./sections/SubscriptionSection";
import HorizontalCarousel from "./sections/HorizontalCarousel";
import CylindricalCarousel from "./sections/CylindricalCarousel";
import HotspotImage from "./sections/HotspotImage";
import Footer from "./sections/Footer";
import TopTrending from "./sections/TopTrending";

function App() {
  return (
    <>
      <HeroBanner />
      <Marquee />
      {/* <SectionHeading title="Popular" subtitle="CATEGORY" /> */}
      <HorizontalScroll />
      <InformativeCategorySection />
      <ProductGrid />
      <BreakerSection />
      <HorizontalCarousel />
      <TopTrending />
      {/* <GallerySection /> */}
      <VisitOurShowroom />
      <HotspotImage />
      <PartnerMarquee />
      <SubscriptionSection />
      <CylindricalCarousel />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
