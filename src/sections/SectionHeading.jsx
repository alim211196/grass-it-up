import React from "react";
import "../App.css"; // Import CSS for styling

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="section-heading" data-aos="fade-up" data-aos-delay="100">
      <span className="section-title">{title}</span>
      <h6
        className="section-subtitle"
        style={{ color: subtitle === "By our Client" && "white" }}
      >
        {subtitle}
      </h6>
    </div>
  );
};

export default SectionHeading;
