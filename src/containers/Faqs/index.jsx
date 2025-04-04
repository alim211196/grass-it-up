import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../HomePage/subComponents/Header";
import Footer from "../HomePage/subComponents/Footer";
import "./Faqs.css"; // Import the CSS file for styling
import AOS from "aos";
import "aos/dist/aos.css";
const faqsData = [
  {
    question: "What types of outdoor furniture does Grassitup offer?",
    answer:
      "Grassitup offers a diverse range of outdoor furniture in Dubai, including luxury sofa sets, dining tables, high bar seating, decorative accessories, and more. Each piece is designed to combine style and comfort, all of which can elevate your garden, patio, or terrace.",
  },
  {
    question: "Will your furniture withstand Dubai's heat and sandstorms?",
    answer:
      "Absolutely. Grassitup's luxury outdoor furniture is specifically engineered to thrive in Dubai's demanding climate. We use premium, weather-resistant materials that can handle intense sun, humidity, and even occasional sandstorms. Your furniture will stay beautiful and functional for years to come.",
  },
  {
    question: "How do I keep my Grassitup furniture looking its best?",
    answer:
      "Gently clean each piece with a soft, damp cloth to remove dust and debris. A mild soap and water solution with spot cleaning works perfectly for cushions. During sandstorms or extended periods of non-use, we recommend using protective covers or storing your furniture to maintain its condition.",
  },
  {
    question: "What is the lifespan of Grassitup outdoor furniture?",
    answer:
      "The lifespan of Grassitup’s luxury outdoor furniture varies based on the materials used. Our collections feature high-quality materials such as teak, aluminum, and synthetic wicker, all chosen for their durability and resistance to Dubai's climate. With proper care, our furniture is designed to last up to 10 years or more, maintaining both elegance and functionality.",
  },
  {
    question: "Does Grassitup offer discounts on luxury outdoor furniture?",
    answer:
      "Yes, we offer a thoughtfully curated sale collection, featuring luxurious outdoor furniture at outstanding value. Explore our selection to find high-quality designs that seamlessly blend style and durability, all available at exclusive prices.",
  },
];

const buttons = ["Shipping Info", "Returns & Exchanges", "Payment Methods"];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [swipeIndex, setSwipeIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSwipe = (index) => {
    setSwipeIndex(index);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Header />
      <div className="faq-container" data-aos="fade-up" data-aos-delay="100">
        <h1 className="faq-heading">Frequently Asked Questions</h1>

        {/* Buttons Below Title */}
        <div className="faq-buttons">
          {buttons.map((btn, index) => (
            <motion.button
              key={index}
              className={`faq-btn ${swipeIndex === index ? "active-btn" : ""}`}
              onClick={() => handleSwipe(index)}
            >
              {btn}
            </motion.button>
          ))}
        </div>

        {/* Swipe Effect */}
        <motion.div
          key={swipeIndex}
          className="faq-swipe-section"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="faq-list">
            {faqsData.map((faq, index) => (
              <div
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="faq-icon">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div className="faq-answer-container">
                  <div className="faq-answer">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Faqs;
