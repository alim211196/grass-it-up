import React, { useEffect } from "react";
import Header from "../HomePage/subComponents/Header";
import Footer from "../HomePage/subComponents/Footer";
import "./CustomerReg.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const CustomerReg = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Header />
      <div className="register-container">
        <div className="register-content">
          {/* Left Image Section */}
          <div
            className="register-image"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img src="/bgimage.png" alt="Register Image" />
          </div>

          {/* Right Form Section */}
          <div
            className="register-form"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2>New Customer?</h2>
            <p>
              Sign up for an account to take advantage of order tracking and
              history as well as pre-filled forms during checkout on subsequent
              orders.
            </p>
            <form>
              <div className="form-group">
                <label>Full name *</label>
                <input type="text" placeholder="John J Doe" required />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input type="email" placeholder="your@email.com" required />
              </div>

              <div className="form-group">
                <label>Password *</label>
                <input type="password" placeholder="Password" required />
              </div>

              <button type="submit" className="btn-primary">
                Sign In
              </button>

              <div className="register-links">
                <p>
                  Already Have An Account?{" "}
                  <Link to="/account/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomerReg;
