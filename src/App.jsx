// Import CSS Module
import "bootstrap/dist/css/bootstrap.min.css";
import HeroBanner from "./sections/HeroBanner";
import Marquee from "./sections/Marquee";
import ProductGrid from "./sections/ProductGrid";
import BreakerSection from "./sections/BreakerSection";
import InformativeCategorySection from "./sections/InformativeCategorySection";
function App() {
  return (
    <>
      <HeroBanner />
      <Marquee />
      <InformativeCategorySection />
      <ProductGrid />
      <BreakerSection />
    </>
  );
}

export default App;
