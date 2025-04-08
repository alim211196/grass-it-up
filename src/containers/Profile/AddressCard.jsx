import React from "react";

const AddressCard = ({ isPrimary, address }) => {
  return (
    <div className="address-card" data-aos="fade-left" data-aos-delay="100">
      {isPrimary && <span className="primary-badge">Primary Address</span>}
      <div className="address-details">
        <h5>{address.fullName}</h5>
        <p>{address.phone}</p>
        <p>{address.address1}</p>
        <p>{address.address2}</p>
        <p>
          {address.city}, {address.state} - {address.zip}
        </p>
        <p>{address.country}</p>
      </div>

      <button className="edit-btn">Edit Address</button>
    </div>
  );
};

export default AddressCard;
