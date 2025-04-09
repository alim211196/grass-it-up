import React, { useState } from "react";

const CheckoutInfo = () => {
  const [showCoupon, setShowCoupon] = useState(false);
  return (
    <section className="checkout-details-container">
      <form className="checkout-form">
        <div className="checkout-div-left">
          <h5
            className="checkout-heading"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Billing Information
          </h5>
          <div className="checkout-section">
            <div
              className="checkout-form-group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <label className="checkout-form-label">Full Name</label>
              <input
                className="checkout-form-input"
                type="text"
                placeholder="Enter your full name"
              />
            </div>
            <div
              className="checkout-form-group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <label className="checkout-form-label">Email</label>
              <input
                className="checkout-form-input"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div
              className="checkout-form-group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <label className="checkout-form-label">Phone Number</label>
              <input
                className="checkout-form-input"
                type="number"
                placeholder="Enter your phone no."
              />
            </div>
            <div className="form-row" data-aos="fade-up" data-aos-delay="100">
              <div className="checkout-form-group">
                <label className="checkout-form-label">City</label>
                <select required>
                  <option value="">Select City</option>
                  <option value="uae">UAE</option>
                  <option value="india">India</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="checkout-form-group">
                <label className="checkout-form-label">ZIP Code</label>
                <input
                  className="checkout-form-input"
                  type="number"
                  placeholder="Enter your zip code"
                />
              </div>
            </div>
            <div className="form-row" data-aos="fade-up" data-aos-delay="100">
              <div className="checkout-form-group">
                <label className="checkout-form-label">State/Province</label>
                <select required>
                  <option value="">Select State</option>
                  <option value="uae">UAE</option>
                  <option value="india">India</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="checkout-form-group">
                <label className="checkout-form-label">Country</label>
                <select required>
                  <option value="">Select Country</option>
                  <option value="uae">UAE</option>
                  <option value="india">India</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div
              className="checkout-form-group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <label className="checkout-form-label">Address Line 1</label>
              <input
                className="checkout-form-input"
                type="text"
                placeholder="Enter your full address"
              />
            </div>
            <div
              className="checkout-form-group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <label className="checkout-form-label">Address Line 2</label>
              <input
                className="checkout-form-input"
                type="text"
                placeholder="Enter your full address"
              />
            </div>
          </div>
        </div>
        <div className="checkout-div-right">
          <div className="coupon-div" data-aos="fade-up" data-aos-delay="100">
            <span className="coupon-text">
              Are you missing your coupon code ?
            </span>
            <span
              className="coupon-btn"
              onClick={() => setShowCoupon(!showCoupon)}
            >
              Click here to add
            </span>
          </div>

          {showCoupon && (
            <div
              className="checkout-section"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="coupon-row">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="checkout-form-input"
                />
                <button type="button" className="apply-btn">
                  Apply
                </button>
              </div>
            </div>
          )}
          <div
            className="checkout-section"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h5 className="checkout-heading">Billing Address</h5>
            <label>
              <input type="checkbox" defaultChecked /> Same as Shipping Address
            </label>
          </div>

          <h5
            className="checkout-heading"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Payment Method
          </h5>
          <div
            className="payment-methods"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <label>
              <input type="radio" name="payment" defaultChecked /> Cash on
              Delivery
            </label>
            <br />
            <label>
              <input type="radio" name="payment" /> Credit/Debit Card
            </label>
          </div>

          <br />
          <div
            className="checkout-form-group"
            style={{ margin: "10px 0px" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <label className="checkout-form-label">Special Instructions</label>
            <textarea
              className="checkout-form-textarea"
              placeholder="Notes for delivery person"
            ></textarea>
          </div>
          <div className="checkout-section">
            <label
              style={{ marginTop: "10px" }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <input type="checkbox" required /> I agree to the terms &
              conditions
            </label>
            <button
              type="submit"
              className="place-order-btn"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CheckoutInfo;
