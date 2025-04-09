import React from "react";

const AccountForm = () => {
  return (
    <div className="account-form-container">
      <form className="account-form">
        <div className="form-row" data-aos="fade-up" data-aos-delay="100">
          <div className="account-form-group">
            <label className="account-form-label">Full Name</label>
            <input
              className="account-form-input"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div className="account-form-group">
            <label className="account-form-label">Location</label>
            <input
              className="account-form-input"
              type="text"
              placeholder="Enter your location"
            />
          </div>
        </div>

        <div className="form-row" data-aos="fade-up" data-aos-delay="100">
          <div className="account-form-group">
            <label className="account-form-label">Designation</label>
            <input
              className="account-form-input"
              type="text"
              placeholder="Enter your designation"
            />
          </div>
          <div className="account-form-group">
            <label className="account-form-label">Mail</label>
            <input
              className="account-form-input"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div className="form-row" data-aos="fade-up" data-aos-delay="100">
          <div className="account-form-group">
            <label className="account-form-label">Phone No.</label>
            <input
              className="account-form-input"
              type="text"
              placeholder="Type your phone number"
            />
          </div>
          <div className="account-form-group">
            <label className="account-form-label">Web / Social Media</label>
            <input
              className="account-form-input"
              type="text"
              placeholder="www.facebook.com/johndoe"
            />
          </div>
        </div>

        <div className="form-row" data-aos="fade-up" data-aos-delay="100">
          <div className="account-form-group">
            <label className="account-form-label">Bio</label>
            <textarea
              className="account-form-textarea"
              placeholder="Write your bio . . ."
            ></textarea>
          </div>
        </div>

        <div className="form-actions" data-aos="fade-up" data-aos-delay="100">
          <button className="account-form-button" type="submit">
            Save Change
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountForm;
