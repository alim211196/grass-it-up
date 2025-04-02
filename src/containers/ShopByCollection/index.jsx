import "./shopByCollection.css";
import Header from "../HomePage/subComponents/Header";
import SubscriptionSection from "../HomePage/subComponents/SubscriptionSection";
import Footer from "../HomePage/subComponents/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const materials = [
  {
    name: "Stinson",
    description: "NEW FOR 2025 A new classic in premium teak & aluminum.",
    image:
      "https://cld.accentuate.io/447233851645/1740623186519/main-collect-tab-stinson.jpg",
  },
  {
    name: "Seaside",
    description: "NEW FOR 2025 Stylish curves & artfully woven Italian rope.",
    image:
      "https://cld.accentuate.io/447231557885/1740608474195/main-collect-tab-seaside-2.jpg",
  },
  {
    name: "Del Mar",
    description: "NEW FOR 2025 Contemporary colors & ceramic tops.",
    image:
      "https://cld.accentuate.io/447231525117/1740623818772/main-collect-tab-del-mar-chairs.jpg",
  },
  {
    name: "Aptos",
    description: "Trend-transcending in premium teak and terrazzo.",
    image:
      "https://cld.accentuate.io/420140155133/1740612037659/main-collect-tab-aptos.jpg",
  },
  {
    name: "Avila",
    description: "Wraparound curves in premium teak and all-weather rope.",
    image:
      "https://cld.accentuate.io/420139925757/1740612426313/main-collect-tab-avila.jpg",
  },
  {
    name: "Belvedere",
    description:
      "Expanded collection of lounging, sectionals, dining and bar in premium teak or aluminum.",
    image:
      "https://cld.accentuate.io/276121878677/1740612929825/main-collect-tab-belvedere.jpg",
  },
  {
    name: "Bolinas",
    description: "Designed for versatility and artful adaptation.",
    image:
      "https://cld.accentuate.io/274461163669/1646786377271/bolinas-main-col-2.jpg",
  },
  {
    name: "Bordeaux",
    description:
      "Tables and benches of rustic acacia wood paired with concrete.",
    image:
      "https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F278231875733%2F1629917838822%2Fbordeaux-mail1.jpg",
  },
  {
    name: "Calabasas",
    description: "Modular laid-back pieces. Countless configurations.",
    image:
      "https://cld.accentuate.io/419928604925/1708983944818/collection-header-calabasas.jpg?v=1708983944818&options=w_900",
  },
  {
    name: "Cambria",
    description:
      "GrassItUp Luxe™ cushions with a style-setting mix of crisp lines & smooth curves.",
    image:
      "https://cld.accentuate.io/399907815677/1663182591551/Cambria-collection-main.jpg",
  },
  {
    name: "Cavallo",
    description:
      "Lounging and dining with sweeping curves in premium teak and aluminum.",
    image:
      "https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F274861850773%2F1629913689383%2Fcavallo-col-main1.jpg",
  },
  {
    name: "Diablo",
    description:
      "Designs for lounging, bar, and dining combining aluminum, rope or ceramic-like glass.",
    image:
      "https://cld.accentuate.io/278232039573/1740624593888/main-collect-tab-diablo-1.jpg",
  },
  {
    name: "La Jolla",
    description:
      "Rugged concrete meets sleek metal in & bar, tables and benches.",
    image:
      "https://cld.accentuate.io/395906056445/1679094968677/la-jolla-hmi.jpg",
  },
  {
    name: "Madera",
    description:
      "Tables and benches with elements in premium teak, aluminum and all-weather wicker.",
    image:
      "https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F276596981909%2F1629918025142%2Fmadera-main-1.jpg",
  },
  {
    name: "Mason",
    description: "Concrete tables & benches with monumental forms.",
    image:
      "https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F278232203413%2F1629915817933%2Fmason-col--1.jpg",
  },
  {
    name: "Montecito",
    description: "In resilient Italian-made rope with rustproof aluminum.",
    image:
      "https://cld.accentuate.io/278997434517/1740622224659/main-collect-tab_monticito.jpg",
  },
  {
    name: "Nicasio",
    description: "Modern lounging in solid premium teak frames.",
    image:
      "https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F278232432789%2F1629915984459%2Fnicasio-stuio-1.jpg",
  },
  {
    name: "Olema",
    description: "Complete lounging in durable Italian-made rope and aluminum.",
    image:
      "https://cld.accentuate.io/278232662165/1740888314954/main-collect-tab-olema.jpg",
  },
  {
    name: "Salt Point",
    description: "Enduring style & comfort crafted from premium teak.",
    image:
      "https://cld.accentuate.io/403659391229/1740611118742/main-collect-tab-salt-point.jpg",
  },
  {
    name: "Sausalito",
    description: "Modern wicker collection in seating & sectionals.",
    image:
      "https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F278232924309%2F1629916838167%2Fsausalito-main-1.jpg",
  },
  {
    name: "Sonora",
    description: "Modern, clean-lined comfort in premium teak or aluminum.",
    image:
      "https://cld.accentuate.io/417242677501/1708983991926/collection-header-sonora.jpg",
  },
  {
    name: "Tiburon",
    description: "Grand scale frames of premium teak or aluminum.",
    image:
      "https://cld.accentuate.io/274313805973/1740622969061/main-collect-tab-tib.jpg",
  },
  {
    name: "Vista",
    description:
      "Bold, architectural lines meet comfort. Modern can be relaxed.",
    image:
      "https://cld.accentuate.io/399909880061/1663182706793/vista-main-collection-1.jpg",
  },
];

const ShopByCollection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);
  return (
    <>
      <Header />
      <section className="featured-collections">
        <div className="container-featured-collections">
          <h1 className="title-featured-collections">Featured Collections</h1>
          <p className="description-featured-collections">
            Whether you’re creating a grand-scale configuration in a spacious
            yard or an intimate arrangement on a balcony, we’ve got the perfect
            fit.
          </p>
        </div>
      </section>
      <section className="collection-shop-container">
        {/* Left Section - Materials List */}
        <div className="collection-materials-list">
          <h2>Shop by Collection</h2>
          <ul>
            {materials.map((material, index) => (
              <li
                key={index}
                className="active"
                data-aos="fade-up"
                data-aos-delay="100"
                onClick={() =>
                  navigate(`/collections/${material.name.toLowerCase()}`)
                }
              >
                {material.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Product Display */}
        <div className="collection-product-display">
          {materials.map((item, index) => (
            <div
              className="collection-product-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay="100"
              onClick={() =>
                navigate(`/collections/${item.name.toLowerCase()}`)
              }
            >
              {/* Text Section (Left Centered) */}
              <div className="collection-product-info">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>

              {/* Image Section (Full Width) */}
              <div className="collection-product-image">
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <SubscriptionSection />
      <Footer />
    </>
  );
};

export default ShopByCollection;
