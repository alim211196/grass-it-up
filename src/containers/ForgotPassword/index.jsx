import React, { useEffect } from "react";
import "./ForgotPassword.css";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const ForgotPassword = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = () => {
    navigate("/verify");
  };
  return (
    <>
      <div className="forgot-pass-container">
        <div className="forgot-pass-content">
          {/* Left Image Section */}
          <div className="forgot-pass-image">
            <img src="/grassitup12.jpg" alt="ForgotPassword Image" />
          </div>

          {/* Right Form Section */}
          <div className="forgot-pass-form">
            <h2 data-aos="fade-up" data-aos-delay="100">
              Forget Password
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Change your password and start purchasing on Grassitup.
            </p>
            <form onSubmit={handleSubmit}>
              <div
                className="form-group"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <label>Email *</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
              <p className="Note" data-aos="fade-up" data-aos-delay="100">
                Note: We will send a otp on your email
              </p>
              <button
                type="submit"
                className="btn-primary"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Send Info
              </button>

              <div
                className="forgot-pass-links"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p>
                  Already Have An Account? <Link to="/login">Login</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
