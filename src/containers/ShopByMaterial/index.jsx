import "./shopByMaterial.css";
import Header from "../HomePage/subComponents/Header";
import SubscriptionSection from "../HomePage/subComponents/SubscriptionSection";
import Footer from "../HomePage/subComponents/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const materials = [
  {
    name: "Aluminum",
    description: "Sturdy, durable and rustproof.",
    image:
      "https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F278212313237%2F1629926949824%2Faluminum-main-1.jpg",
  },
  {
    name: "Concrete",
    description: "Superior weather-resistance at a fraction of the weight. ",
    image:
      "https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F278213132437%2F1629927635642%2FCONCRETE-MAIN-1.jpg",
  },
  {
    name: "Teak",
    description:
      "Premium or weathered,Durable, water-resistant , and sustainably harvested.",
    image:
      "https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F278211526805%2F1629926748964%2FteAL%255Dk-main-1.jpg",
  },
  {
    name: "Rope",
    description: "Strong, resilient and weather-resistant.",
    image:
      "https://images.accentuate.io/?image=https%3A%2F%2Fcdn.accentuate.io%2F278213034133%2F1629927245540%2FROPE-MAIN-21.jpg",
  },
  {
    name: "All-Weather Wicker",
    description:
      "All the beauty of classic wicker with far , greater durability and none of the maintenance",
    image:
      "https://cld.accentuate.io/278212903061/1634767138128/wicker_resize_2.jpg",
  },
];

const ShopByMaterial = () => {
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
      <section className="material-integrity">
        <div className="container-material-integrity">
          <h1 className="title-material-integrity">Material Integrity</h1>
          <p className="description-material-integrity">
            From sustainably grown teak to powder-coated aluminum to the latest
            innovations in concrete, wicker, and rope, the materials we choose
            are engineered for long-lasting beauty and comfort.
          </p>
        </div>
      </section>
      <section className="shop-container">
        {/* Left Section - Materials List */}
        <div className="materials-list">
          <h2>Shop by Material</h2>
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
        <div className="product-display">
          {materials.map((item, index) => (
            <div
              className="product-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay="100"
              onClick={() =>
                navigate(`/collections/${item.name.toLowerCase()}`)
              }
            >
              {/* Text Section (Left Centered) */}
              <div className="product-info">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>

              {/* Image Section (Full Width) */}
              <div className="product-image">
                <img src={item.image} alt={item.name} />
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

export default ShopByMaterial;
