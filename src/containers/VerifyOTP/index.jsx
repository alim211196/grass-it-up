import React from "react";
import "./VerifyOTP.css";
import { useNavigate } from "react-router-dom";
const VerifyOTP = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/reset-password");
  };
  return (
    <div className="verify-container">
      <div className="verify-box">
        <h1 className="verify-title">Enter code</h1>
        <p className="verify-subtext">Please enter the code we emailed you.</p>
        <p className="verify-email">
          <strong>ab@gmail.com</strong>
        </p>

        <div className="otp-inputs">
          {[...Array(6)].map((_, i) => (
            <input key={i} type="text" maxLength="1" className="otp-box" />
          ))}
        </div>

        <p className="resend-text">
          Didn’t receive a code? <span className="resend-link">Resend</span>
        </p>

        <button className="verify-btn" onClick={handleSubmit}>
          VERIFY
        </button>
      </div>
    </div>
  );
};

export default VerifyOTP;
