import React from "react";

const HeaderBanner = ({ activeTab }) => {
  const subtile = activeTab.split(" ");
  const text = subtile[1];
  return (
    <div
      className="header-banner-container"
      style={{ backgroundImage: `url(/grassitup41.jpg)` }}
    >
      <div className="header-banner-content">
        <h1>{activeTab}</h1>
        <nav className="header-banner-breadcrumb">
          <a href="/">Home</a> <span>/</span> <span>{text}</span>
        </nav>
      </div>
    </div>
  );
};

export default HeaderBanner;
