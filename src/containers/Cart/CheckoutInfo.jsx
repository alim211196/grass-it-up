import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CheckoutInfo = () => {
  const navigate = useNavigate();

  return (
    <section className="checkout-details-container">
      <form className="checkout-form">
        <div
          className="checkout-div-left"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h5 className="checkout-heading">Billing Information</h5>
          <div className="checkout-section">
            <div className="checkout-form-group">
              <label className="checkout-form-label">Full Name</label>
              <input
                className="checkout-form-input"
                type="text"
                placeholder="Enter your full name"
              />
            </div>
            <div className="checkout-form-group">
              <label className="checkout-form-label">Email</label>
              <input
                className="checkout-form-input"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="checkout-form-group">
              <label className="checkout-form-label">Phone Number</label>
              <input
                className="checkout-form-input"
                type="number"
                placeholder="Enter your phone no."
              />
            </div>
            <div className="form-row">
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
            <div className="form-row">
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
            <div className="checkout-form-group">
              <label className="checkout-form-label">Address Line 1</label>
              <input
                className="checkout-form-input"
                type="text"
                placeholder="Enter your full address"
              />
            </div>
            <div className="checkout-form-group">
              <label className="checkout-form-label">Address Line 2</label>
              <input
                className="checkout-form-input"
                type="text"
                placeholder="Enter your full address"
              />
            </div>
          </div>
        </div>
        <div
          className="checkout-div-right"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="coupon-div">
            <span className="coupon-text">
              Are you missing your coupon code ?
            </span>
            <span className="coupon-btn" onClick={() => navigate("/coupons")}>
              Go to coupon zone
            </span>
          </div>

          <div className="checkout-section">
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

          <div className="checkout-section">
            <h5 className="checkout-heading">Billing Address</h5>
            <div className="form-checkbox">
              <input
                type="checkbox"
                id="agree"
                required
                className="custom-checkbox"
              />
              <label htmlFor="agree">Same as Shipping Address</label>
            </div>
          </div>

          <h5 className="checkout-heading">Payment Method</h5>
          <div className="payment-methods">
            <label>
              <input type="radio" name="payment" defaultChecked /> Credit Card
            </label>
            <br />
            <label>
              <input type="radio" name="payment" /> Debit Card
            </label>
          </div>

          <br />
          <div className="checkout-form-group" style={{ margin: "10px 0px" }}>
            <label className="checkout-form-label">Special Instructions</label>
            <textarea
              className="checkout-form-textarea"
              placeholder="Notes for delivery person"
            ></textarea>
          </div>
          <div className="checkout-section">
            <div className="form-checkbox" style={{ marginTop: "10px" }}>
              <input
                type="checkbox"
                id="agree"
                required
                className="custom-checkbox"
              />
              <label htmlFor="agree">
                I agree to the{" "}
                <Link to="/terms-conditions">Terms and Conditions</Link>
              </label>
            </div>

            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default CheckoutInfo;
