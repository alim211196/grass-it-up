import React from "react";
import "../App.css"; // Import CSS for styling

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="section-heading">
      <span className="section-title">{title}</span>
      <h6
        className="section-subtitle"
        style={{ color: subtitle === "List" && "white" }}
      >
        {subtitle}
      </h6>
    </div>
  );
};

export default SectionHeading;
