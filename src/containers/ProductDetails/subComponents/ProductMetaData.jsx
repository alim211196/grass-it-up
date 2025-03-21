import { useState } from "react";
import "../productDetails.css"; // Import custom CSS

const ProductMetaData = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="product-meta-container">
      {/* Top Button */}
      <div className="top-button">
        <button>Explore The Seaside Collection</button>
      </div>

      {/* Section Container */}
      <div className="content-wrapper">
        {/* Left Section - Tabs & Content */}
        <div className="left-section">
          {/* Tabs */}
          <div className="tabs">
            {["overview", "frame", "cushion"].map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "overview"
                  ? "Overview"
                  : tab === "frame"
                  ? "Frame Details"
                  : "Cushion Details"}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="tab-content">
            {activeTab === "overview" && (
              <div>
                <p>
                  Marrying strong lines with subtle organic curves, Seaside
                  brings coastal flavor to your patio, porch, or pool area.
                </p>
                <ul>
                  <li>Mixed materials</li>
                  <li>Aluminum frame</li>
                  <li>Weather-friendly</li>
                  <li>Low-profile design for relaxation</li>
                </ul>
              </div>
            )}
            {activeTab === "frame" && <p>Frame details content goes here...</p>}
            {activeTab === "cushion" && (
              <p>Cushion details content goes here...</p>
            )}
          </div>
        </div>

        {/* Right Section - Dimensions Table */}
        <div className="right-section">
          <h2>Dimensions</h2>
          <table>
            <tbody>
              <tr>
                <td>Width</td>
                <td className="bold">92"</td>
                <td>Depth</td>
                <td className="bold">31"</td>
              </tr>
              <tr>
                <td>Height</td>
                <td className="bold">22"</td>
                <td>Weight</td>
                <td className="bold">92 lbs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductMetaData;
