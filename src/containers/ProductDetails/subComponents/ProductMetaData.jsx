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
                  brings coastal flavor to your patio, porch or pool area.
                  Supple, long-wearing Italian rope softens surfaces and defines
                  the sofa’s silhouette while deep cushions and backrests create
                  inviting, low-profile seating that puts comfort first –
                  whether you’re entertaining or just relaxing at home.
                </p>
                <ul>
                  <li>Mixed materials</li>
                  <li>Aluminum frame</li>
                  <li>Seat back is made of Italian polyolefin rope </li>
                  <li>Weather-friendly</li>
                  <li>
                    Low-profile design encourages relaxing & makes seating
                    accessible for kids & pets
                  </li>
                  <li>Comes with weather-friendly cushions </li>
                  <li>1 long seat cushion provides clean look</li>
                  <li>
                    Cushions feature perfect combination of support & softness
                  </li>
                  <li>Comes with 1 seat cushion & 3 back cushions </li>
                  <li>
                    Combine with Seaside Lounge Chair & sectional components to
                    create customized configuration
                  </li>
                </ul>
              </div>
            )}
            {activeTab === "frame" && (
              <ul>
                <li>
                  Extruded aluminum frame conducts heat & cold well, so surfaces
                  stay comfortable to the touch
                </li>
                <li>Lightweight yet sturdy</li>
                <li>Seat features durable slatted support system</li>
                <li>Resistant to corrosion & rust</li>
                <li>
                  Matte powdercoat finish is baked-on & ultra-durable; resistant
                  to chips & scratches
                </li>
                <li>Seat back is made of Italian polyolefin rope </li>
                <li>Glides on bottom adjust to keep sofa level </li>
                <li>Imported</li>
                <li>Available in Dune</li>
              </ul>
            )}
            {activeTab === "cushion" && (
              <ul>
                <li>
                  Seat cushion core is made of Ever-Dri foam wrapped in Dacron
                  polyester batting
                </li>
                <li>Back cushion core is made of shredded polyester fiber</li>
                <li>All cushions are covered in durable fabric</li>
                <li>Weather-resistant</li>
                <li>Solution-dyed</li>
                <li>Will not fade</li>
                <li>Resistant to bleach </li>
                <li>Hidden zippers provide uninterrupted style</li>
                <li>Imported</li>
                <li>Available in Tidal Foam</li>
              </ul>
            )}
          </div>
        </div>

        {/* Right Section - Dimensions Table */}
        <div className="right-section">
          <h2>Dimensions</h2>
          <table>
            <tbody>
              <tr>
                <td>
                  <div>
                    <span>
                      <i class="fas fa-arrows-alt-h"> </i> Width
                    </span>
                    <span>92"</span>
                  </div>
                </td>

                <td>
                  <div>
                    <span>
                      {" "}
                      <i class="fas fa-arrows-alt"> </i> Depth{" "}
                    </span>
                    <span>31"</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <span>
                      <i class="fas fa-arrows-alt-v"></i> Height
                    </span>
                    <span>22"</span>
                  </div>
                </td>
                <td>
                  <div>
                    <span>
                      <i class="fas fa-weight"></i> Weight
                    </span>
                    <span>92lbs</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="our-value" style={{ paddingTop: "20px" }}>
            <a>see all dimensions</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductMetaData;
