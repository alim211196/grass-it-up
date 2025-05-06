import React, { useState } from "react";
import { Link } from "react-router-dom";

const BannerForm = () => {
  const [activeTab, setActiveTab] = useState("individual");

  return (
    <div className="BannerFormContainer" id="videoSection">
      <div className="BannerForm">
        <video autoPlay muted loop playsInline className="BannerFormVideo">
          <source src="/grassitup.mp4" type="video/mp4" />
          <img
            src="/fallback.jpg"
            className="img-fluid BannerFormImage"
            alt="Grass It Up"
            loading="lazy"
          />
        </video>

        <div
          className="BannerFormOverlay"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="form-wrapper">
            {/* Tabs */}
            <div className="form-tabs">
              <button
                className={activeTab === "individual" ? "tab active" : "tab"}
                onClick={() => setActiveTab("individual")}
              >
                Individual
              </button>
              <button
                className={activeTab === "company" ? "tab active" : "tab"}
                onClick={() => setActiveTab("company")}
              >
                Company
              </button>
            </div>

            {/* Animate Tab Swap */}
            <div className={`tab-content ${activeTab}`}>
              {activeTab === "individual" ? (
                <form className="grid-form">
                  {/* Same individual form as before */}
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="John J Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" placeholder="your@email.com" required />
                  </div>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input
                      type="number"
                      placeholder="Enter Mobile No"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Nationality *</label>
                    <select required>
                      <option value="">Select Nationality</option>
                      <option value="uae">UAE</option>
                      <option value="india">India</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>National ID *</label>
                    <div className="custom-file-upload">
                      <label htmlFor="nationalId">Upload National ID</label>
                      <input type="file" id="nationalId" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>TRN (optional)</label>
                    <input type="number" placeholder="Enter TRN no" required />
                  </div>
                  <div className="form-group">
                    <label>Password *</label>
                    <input type="password" placeholder="Password" required />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password *</label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      required
                    />
                  </div>
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="agree"
                      required
                      className="custom-checkbox"
                    />
                    <label htmlFor="agree">
                      I agree to the{" "}
                      <Link to="/privacy-policy">Privacy Policy</Link> &{" "}
                      <Link to="/terms-conditions">Terms and Conditions</Link>
                    </label>
                  </div>
                  <button type="submit" className="signIn-btn full-width">
                    Sign Up
                  </button>
                  <div className="register-links full-width">
                    <p>
                      Already Have An Account? <Link to="/login">Login</Link>
                    </p>
                  </div>
                </form>
              ) : (
                <form className="grid-form">
                  {/* Company form */}
                  <div className="form-group">
                    <label>Company Name *</label>
                    <input
                      type="text"
                      placeholder="XYZ Interiors LLC"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Company Email *</label>
                    <input
                      type="email"
                      placeholder="info@company.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input
                      type="number"
                      placeholder="Enter Mobile No"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Trade License *</label>
                    <div className="custom-file-upload">
                      <label htmlFor="license">Upload License</label>
                      <input type="file" id="license" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>TRN (optional)</label>
                    <input type="number" placeholder="Enter TRN no" required />
                  </div>
                  <div className="form-group">
                    <label>Password *</label>
                    <input type="password" placeholder="Password" required />
                  </div>
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="agreeCompany"
                      required
                      className="custom-checkbox"
                    />
                    <label htmlFor="agreeCompany">
                      I agree to the{" "}
                      <Link to="/privacy-policy">Privacy Policy</Link> &{" "}
                      <Link to="/terms-conditions">Terms and Conditions</Link>
                    </label>
                  </div>
                  <button type="submit" className="signIn-btn full-width">
                    Register Company
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerForm;
