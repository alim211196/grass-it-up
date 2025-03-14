import HeroBanner from "./sections/HeroBanner";
import Marquee from "./sections/Marquee";
import styles from "./css/style.module.css";
import ProductGrid from "./sections/ProductGrid";
function App() {
  return (
    <>
      <HeroBanner />
      <Marquee />
      <section className={styles.placeholderSection}>
        <h2>Coming Soon</h2>
      </section>
      <section className={styles.placeholderSection}>
        <h2>Coming Soon</h2>
      </section>
      <ProductGrid />
    </>
  );
}

export default App;
