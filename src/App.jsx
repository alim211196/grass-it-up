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
import BlogSection from "./sections/BlogSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FurnitureScrollEffect from "./sections/FurnitureScrollEffect";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 100, // Distance to trigger animation
      once: true, // Animate only once
    });
  }, []);

  return (
    <>
      <HeroBanner />
      <Marquee />

      <HorizontalScroll />

      <section data-aos="fade" data-aos-delay="100">
        <InformativeCategorySection />
      </section>
      <section data-aos="fade-up" data-aos-delay="100">
        <ProductGrid />
      </section>
      <section data-aos="fade-down" data-aos-delay="100">
        <BreakerSection />
      </section>
      <section data-aos="fade-left" data-aos-delay="100">
        <HorizontalCarousel />
      </section>
      <section data-aos="fade-right" data-aos-delay="100">
        <BlogSection />
      </section>
      {/* <section data-aos="fade-up" data-aos-delay="100"> */}
      <FurnitureScrollEffect />
      {/* </section> */}
      <GallerySection />
      <section data-aos="zoom-in" data-aos-delay="100">
        <TopTrending />
      </section>
      <section data-aos="zoom-out" data-aos-delay="100">
        <VisitOurShowroom />
      </section>

      <section data-aos="flip-left" data-aos-delay="100">
        <HotspotImage />
      </section>
      <section data-aos="flip-right" data-aos-delay="100">
        <PartnerMarquee />
      </section>

      <section data-aos="slide-up" data-aos-delay="100">
        <SubscriptionSection />
      </section>

      <section data-aos="fade-up" data-aos-delay="100">
        <CylindricalCarousel />
      </section>
      <section data-aos="fade-down" data-aos-delay="100">
        <Testimonial />
      </section>
      <section data-aos="fade-left" data-aos-delay="100">
        <Footer />
      </section>
    </>
  );
}

export default App;
