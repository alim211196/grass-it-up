import React, { useEffect } from "react";
import Header from "../HomePage/subComponents/Header";
import Footer from "../HomePage/subComponents/Footer";
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
      <Header />
      <div className="login-container">
        <div className="login-content">
          {/* Left Image Section */}
          <div
            className="login-image"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img src="/bgimage.png" alt="Login Image" />
          </div>

          {/* Right Form Section */}
          <div
            className="login-form"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2>Welcome Back</h2>
            <p> Login and start purchasing</p>
            <form>
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

              <div className="login-links">
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
      <Footer />
    </>
  );
};

export default CustomerLogin;
