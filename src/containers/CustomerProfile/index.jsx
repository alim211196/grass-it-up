import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./customerProfile.css";
import StarRating from "./StarRating";
import AddressCard from "./AddressCard";
import SubscriptionSection from "../../common/SubscriptionSection";
import Breadcrumb from "../Breadcrumb";
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

const sampleAddresses = [
  {
    fullName: "John Doe",
    phone: "1234567890",
    address1: "123 Main St",
    address2: "Apt 4B",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
    isPrimary: true,
  },
  {
    fullName: "Jane Smith",
    phone: "9876543210",
    address1: "456 Elm St",
    address2: "Apt 4B",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    country: "USA",
    isPrimary: false,
  },
];
const CustomerProfile = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumb
        path={[{ label: "Home", link: "/" }, { label: "Your Profile" }]}
      />
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
          <p className="profile-email">johndoe@gmail.com</p>
          <a className="update-profile">Update Profile</a>
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
        {sampleAddresses.map((addr, i) => (
          <AddressCard key={i} isPrimary={addr.isPrimary} address={addr} />
        ))}
      </section>
      <SubscriptionSection />
    </>
  );
};

export default CustomerProfile;
