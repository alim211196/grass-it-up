import React, { useEffect, useState } from "react";
import Header from "../HomePage/subComponents/Header";
import Footer from "../HomePage/subComponents/Footer";
import SubscriptionSection from "../HomePage/subComponents/SubscriptionSection";
import "./cart.css";
import SectionHeading from "../HomePage/subComponents/SectionHeading";
import AOS from "aos";
import "aos/dist/aos.css";
const Cart = () => {
  const [cart, setCart] = useState([
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
  ]);
  const discount = 1765;
  const merchandiseTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = merchandiseTotal - discount;

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity + amount) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Header />
      <section className="shopping-cart">
        <h1 className="cart-title" data-aos="fade-left" data-aos-delay="100">
          Your Shopping Cart
        </h1>
        <div className="cart-container">
          <div className="cart-items" data-aos="fade-left" data-aos-delay="100">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-div">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-details-div1">
                    <h3>{item.name}</h3>
                    <p>Fabric: {item.fabric}</p>
                    <p>Item Number: {item.itemNumber}</p>
                    <p className="cart-price">${item.price}/each</p>

                    <span className="product-stock1">
                      <span className="stock-check1">
                        <i className="fa fa-check"></i>
                      </span>
                      In stock
                    </span>
                  </div>
                  <div className="cart-item-details-div2">
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item.id)}
                    >
                      remove
                    </button>

                    <div className="cart-quantity">
                      <button onClick={() => updateQuantity(item.id, -1)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>
                        +
                      </button>
                    </div>
                    <div className="cart-price-div">
                      <p className="cart-price">${item.price}</p>
                      <span className="original-price">
                        ${item.originalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="order-summary"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h3>ORDER SUMMARY</h3>
            <p>
              Merchandise Total: <span>${merchandiseTotal}</span>
            </p>
            <p>
              Shipping: <span>TBD</span>
            </p>
            <p>
              Taxes: <span>TBD</span>
            </p>
            <p className="discount">
              Sub-Total of All Applied Discounts: <span>-${discount}</span>
            </p>
            <h4>
              Total: <span>${total}</span>
            </h4>

            <button className="checkout-btn">CHECKOUT</button>
            <div className="payment-cart-info">
              <p>
                4 interest-free payments or as low as{" "}
                <strong>$400.23/month.</strong> <strong>More options</strong>{" "}
              </p>

              <div className="tabby-div">
                <img
                  src="/tabby.png"
                  alt="Tabby"
                  className="tabby-cart-logo"
                  loading="lazy"
                />
                <img
                  src="/moon.png"
                  alt="moon"
                  className="tabby-cart-logo"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="SatisfactionGuarantee">
        <div className="SatisfactionGuarantee-container">
          <SectionHeading title="Satisfaction" subtitle="Guarantee" />

          <div className="SatisfactionGuarantee-content">
            <div className="SatisfactionGuarantee-card">
              <h3 data-aos="fade-up" data-aos-delay="100">
                UNPARALLELED QUALITY
              </h3>
              <p data-aos="fade-left" data-aos-delay="100">
                Our products are made with the finest materials available by
                skilled artisans, who use time-tested techniques to create the
                highest quality of craftsmanship.
              </p>
            </div>
            <div className="SatisfactionGuarantee-card">
              <h3 data-aos="fade-up" data-aos-delay="100">
                WHITE GLOVE DELIVERY
              </h3>
              <p data-aos="fade-left" data-aos-delay="100">
                Sit back, relax and let us do all the work. We don’t just
                deliver your furniture – we assemble and arrange it for you,
                then remove the packing materials when we’re done.
              </p>
            </div>
            <div className="SatisfactionGuarantee-card">
              <h3 data-aos="fade-up" data-aos-delay="100">
                30 DAY RETURNS
              </h3>
              <p data-aos="fade-left" data-aos-delay="100">
                We pride ourselves on making you happy. If you’re not completely
                satisfied with your Terra purchase, return it to us within 30
                days of delivery for a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SubscriptionSection />
      <Footer />
    </>
  );
};

export default Cart;
