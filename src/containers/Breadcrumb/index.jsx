import React from "react";
import { useNavigate } from "react-router-dom"; // For React Router, or use `useRouter` for Next.js
import "./Breadcrumb.css";

const Breadcrumb = ({ path = [], showBack = true }) => {
  const navigate = useNavigate();

  return (
    <div className="breadcrumb-wrapper">
      {showBack && (
        <button className="breadcrumb-back" onClick={() => navigate(-1)}>
          ← Back
        </button>
      )}
      <nav className="breadcrumb-nav">
        {path.map((item, index) => (
          <span key={index} className="breadcrumb-item">
            {item.link ? (
              <a href={item.link}>{item.label}</a>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
            {index !== path.length - 1 && (
              <span className="breadcrumb-separator"></span>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumb;
