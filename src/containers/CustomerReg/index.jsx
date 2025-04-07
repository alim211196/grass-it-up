import React, { useEffect } from "react";
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
      <div className="register-container">
        <div className="register-content">
          {/* Left Image Section */}
          <div className="register-image">
            <img src="/bgimage.png" alt="Register Image" />
          </div>

          {/* Right Form Section */}
          <div className="register-form">
            <h2 data-aos="fade-up" data-aos-delay="100">
              New Customer?
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Sign up for an account to take advantage of order tracking and
              history as well as pre-filled forms during checkout on subsequent
              orders.
            </p>
            <form>
              <div
                className="form-group"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <label>Full name *</label>
                <input type="text" placeholder="John J Doe" required />
              </div>

              <div
                className="form-group"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <label>Email *</label>
                <input type="email" placeholder="your@email.com" required />
              </div>

              <div
                className="form-group"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <label>Password *</label>
                <input type="password" placeholder="Password" required />
              </div>

              <button
                type="submit"
                className="btn-primary"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Sign In
              </button>

              <div
                className="register-links"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p>
                  Already Have An Account?{" "}
                  <Link to="/account/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReg;
