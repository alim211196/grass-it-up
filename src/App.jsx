// Import CSS Module
import "bootstrap/dist/css/bootstrap.min.css";
import HeroBanner from "./sections/HeroBanner";
import Marquee from "./sections/Marquee";
import "./App.css";
import ProductGrid from "./sections/ProductGrid";
import BreakerSection from "./sections/BreakerSection";
function App() {
  return (
    <>
      <HeroBanner />
      <Marquee />
      <section className={"placeholderSection"}>
        <h2>Coming Soon</h2>
      </section>
      <section className={"placeholderSection"}>
        <h2>Coming Soon</h2>
      </section>
      <ProductGrid />
      <BreakerSection />
    </>
  );
}

export default App;
