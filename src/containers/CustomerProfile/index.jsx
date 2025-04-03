import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../HomePage/subComponents/Header";
import SubscriptionSection from "../HomePage/subComponents/SubscriptionSection";
import Footer from "../HomePage/subComponents/Footer";
import "./customerProfile.css";
import StarRating from "./StarRating";
const orders = [
  {
    id: 1,
    name: "Arroyo Sofa In Teak",
    fabric: "Hazel",
    itemNumber: "214163F-TEAK",
    price: 3595,
    originalPrice: 4495,
    image:
      "https://cdn.accentuate.io/8846279475453/1742598540209/arroyo-teak-sofa-hazel-1.jpg", // Replace with actual image
    quantity: 1,
  },
  {
    id: 2,
    name: "Seaside Sofa In Dune",
    fabric: "Tidal Foam",
    itemNumber: "JKA-623386F-DUNLIN",
    price: 3460,
    originalPrice: 4325,
    image:
      "https://cdn.accentuate.io/8825401639165/1740006238258/seaside-dune-sofa-1.jpg", // Replace with actual image
    quantity: 1,
  },
];
const CustomerProfile = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Header />
      <section className="profile-section">
        <div className="profile-container">
          <h1
            className="profile-welcome-message"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Welcome back
          </h1>
          <h6
            className="profile-username"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            John J Doe
          </h6>
        </div>
      </section>
      <section className="myorder-section">
        <h1 className="myorder-title" data-aos="fade-left" data-aos-delay="100">
          My orders
        </h1>
        <div
          className="myorder-cart-items"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          {orders.map((item) => (
            <div className="myorder-cart-item" key={item.id}>
              <div className="myorder-cart-item-div">
                <img
                  src={item.image}
                  alt={item.name}
                  className="myorder-cart-item-image"
                />
              </div>
              <div className="myorder-cart-item-details">
                <div className="myorder-cart-item-details-div1">
                  <h3>Delivered on May 30, 2025</h3>
                  <p>
                    {item.name} <p>Quantity: {item.quantity}</p>
                  </p>
                  <p>
                    Fabric: {item.fabric} <p>Item Number: {item.itemNumber}</p>
                  </p>
                </div>
                <div className="myorder-cart-item-details-div2">
                  <div className="myorder-cart-price-div">
                    <StarRating />
                    <span className="write-a-review">Write a Review</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="myaddress-section">
        <h1
          className="myaddress-title"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          My addresses
        </h1>
      </section>
      <SubscriptionSection />
      <Footer />
    </>
  );
};

export default CustomerProfile;
