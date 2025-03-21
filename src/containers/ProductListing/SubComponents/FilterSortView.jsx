import React from "react";
import "../productListing.css"; // Custom CSS file

const FilterSortView = ({ setColSpan, toggleFilter }) => {
  return (
    <div className="filter-sort-container">
      <div className="row align-items-center">
        <div className="col-6 filter-section" onClick={() => toggleFilter()}>
          <img
            src={"/filter.png"}
            alt={"Filter"}
            style={{ height: "18px", width: "18px" }}
          />
          <span className="filter-text">FILTERS</span>
        </div>

        <div className="col-6 d-flex justify-content-end gap-3">
          {/* Sort Section */}
          <div className="sort-section">
            <span className="sort-label">Sort:</span>
            <div className="dropdown">
              <select
                id="gridSelect"
                className="form-select d-inline-block  no-border-select"
                defaultValue={"featured"}
              >
                <option value={"featured"}>Featured</option>
                <option value={"best-selling"}>Best Selling</option>
                <option value={"a-z"}>Alphabetically, A-Z</option>
                <option value={"z-a"}>Alphabetically, Z-A</option>
                <option value={"low-to-high"}>Price, Low to High</option>
                <option value={"high-to-low"}>Price, High to Low</option>
                <option value={"old-to-new"}>Date, Old to New</option>
                <option value={"new-to-old"}>Date, New to Old</option>
              </select>
              <ul
                className="dropdown-menu sort-menu"
                aria-labelledby="sortDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Price: Low to High
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Price: High to Low
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Newest Arrivals
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* View Section */}
          <div className="view-section">
            <span className="view-label">View:</span>

            <img
              src={"/grid4.png"}
              alt={"Grid4"}
              style={{ height: "auto", width: "18px", margin: "5px" }}
              onClick={() => setColSpan(6)}
              role="button"
            />
            <img
              src={"/grid9.png"}
              alt={"Grid9"}
              style={{ height: "auto", width: "18px", margin: "5px" }}
              onClick={() => setColSpan(4)}
              role="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSortView;
