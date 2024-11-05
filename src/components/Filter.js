import React from "react";
import PropTypes from "prop-types";

function Filter({ showGreased, onChangeShowGreased, sortBy, onChangeSortBy }) {
  // Event handler for checkbox change
  const handleGreasedChange = (e) => {
    onChangeShowGreased(e.target.checked);
  };

  // Event handler for sort dropdown change
  const handleSortChange = (e) => {
    onChangeSortBy(e.target.value);
  };

  return (
    <div className="filter-container">
      <div className="filter-item">
        <label>
          <input
            type="checkbox"
            checked={showGreased}
            onChange={handleGreasedChange}
          />
          Show Greased Only
        </label>
      </div>

      <div className="filter-item">
        <label>
          Sort by:
          <select value={sortBy} onChange={handleSortChange}>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </label>
      </div>
    </div>
  );
}

Filter.propTypes = {
  showGreased: PropTypes.bool.isRequired,
  onChangeShowGreased: PropTypes.func.isRequired,
  sortBy: PropTypes.string.isRequired,
  onChangeSortBy: PropTypes.func.isRequired,
};

export default Filter;
