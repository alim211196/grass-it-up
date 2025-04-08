import React, { useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const CustomerLogin = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="login-container">
        <div className="login-content">
          {/* Left Image Section */}
          <div className="login-image">
            <img
              src="https://furnixar.vercel.app/assets/login-BM3CAJLe.jpg"
              alt="Login Image"
            />
          </div>

          {/* Right Form Section */}
          <div className="login-form">
            <h2 data-aos="fade-up" data-aos-delay="100">
              Welcome back !
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Login and start purchasing on GrassItUp.
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
              <div
                className="form-checkbox"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <input
                  type="checkbox"
                  id="agree"
                  required
                  className="custom-checkbox"
                />
                <label htmlFor="agree">Remember Me</label>
              </div>
              <button
                type="submit"
                className="btn-primary"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Login
              </button>

              <div
                className="login-links"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p>
                  Already Have An Account? <Link to="/register">Register</Link>
                </p>
                <Link to="/forgot-password">Forgot Your Password?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerLogin;
