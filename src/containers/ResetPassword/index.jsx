import React, { useEffect } from "react";
import "./ResetPassword.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const ResetPassword = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="reset-pass-container">
        <div className="reset-pass-content">
          {/* Left Image Section */}
          <div className="reset-pass-image">
            <img
              src="https://furnixar.vercel.app/assets/portfolio-02-SqWI2KHP.jpg"
              alt="Reset Password Image"
            />
          </div>

          {/* Right Form Section */}
          <div className="reset-pass-form">
            <h2 data-aos="fade-up" data-aos-delay="100">
              Reset password !
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Change your password and start purchasing on GrassItUp.
            </p>
            <form>
              <div
                className="form-group"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <label>New Password *</label>
                <input type="password" placeholder="New Password" required />
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
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
