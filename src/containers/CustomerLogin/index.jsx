import React, { useEffect } from "react";
import "./CustomerLogin.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const CustomerLogin = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="login-container">
        <div className="login-content">
          {/* Left Image Section */}
          <div className="login-image">
            <img src="/bgimage.png" alt="Login Image" />
          </div>

          {/* Right Form Section */}
          <div className="login-form">
            <h2 data-aos="fade-up" data-aos-delay="100">
              Welcome Back
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              {" "}
              Login and start purchasing
            </p>
            <form>
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
                className="login-links"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p>
                  Already Have An Account?{" "}
                  <Link to="/account/register">Register</Link>
                </p>
                <Link to="/account/forgot-password">Forgot Your Password?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerLogin;
