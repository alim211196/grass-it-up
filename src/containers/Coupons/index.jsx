import React, { useEffect } from "react";
import "./Coupons.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Breadcrumb from "../Breadcrumb";
const coupons = [
  {
    code: "GRASSITUP200",
    description: "Jorem Ipsum Dolor Sit Amet, Consec",
    discount: "Get 20% OFF",
  },
  {
    code: "GREENDEAL50",
    description: "Valid for new customers only",
    discount: "Get 50% OFF",
  },
  {
    code: "SPRINGSALE10",
    description: "Use before 30th April",
    discount: "Get 10% OFF",
  },
  {
    code: "FRESH20",
    description: "On orders above $50",
    discount: "Get 20% OFF",
  },
];

const Coupons = () => {
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Copied: ${code}`);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Breadcrumb path={[{ label: "Home", link: "/" }, { label: "Coupons" }]} />
      <div
        className="coupon-heading-container"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h1 className="coupon-heading">Best Offers For You</h1>
        <h6 className="coupon-subheading">
          Grab Exclusive Discounts With Just a Click
        </h6>
        <p className="coupon-description">
          Discover our hand-picked selection of discount coupons tailored to
          make your shopping experience more rewarding. Simply click on "Copy
          Code" and apply it during checkout to unlock exciting savings on your
          favorite products. Whether you're a new visitor or a loyal customer,
          our exclusive offers are designed to bring you the best value every
          time you shop.
        </p>
      </div>
      <div className="coupon-section">
        <div className="coupon-grid">
          {[...coupons, ...coupons.reverse(), ...coupons].map(
            (coupon, index) => (
              <div
                key={index}
                className="coupon-card"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="coupon-content">
                  <h3>{coupon.code}</h3>
                  <p>{coupon.description}</p>
                  <span className="discount">{coupon.discount}</span>
                </div>
                <button onClick={() => handleCopy(coupon.code)}>
                  COPY CODE
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Coupons;
