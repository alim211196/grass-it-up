import React, { useEffect } from "react";
import "./ResetPassword.css";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const ResetPassword = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="reset-pass-container">
        <div className="reset-pass-content">
          {/* Left Image Section */}
          <div className="reset-pass-image">
            <img src="/grassitup11.jpg" alt="Reset Password Image" />
          </div>

          {/* Right Form Section */}
          <div className="reset-pass-form">
            <h2 data-aos="fade-up" data-aos-delay="100">
              Set a Password
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Set the new password for your account so you can login and access
              all the features.
            </p>
            <form onSubmit={handleSubmit}>
              <div
                className="form-group"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <label>Password *</label>
                <input type="password" placeholder="Password" required />
              </div>
              <div
                className="form-group"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <label>Confirm Password *</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
