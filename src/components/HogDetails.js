import React from 'react';

function HogDetails({ hog }) {
  const { greased = false, weight = "Unknown", "highest medal achieved": medal = "None" } = hog || {};

  return (
    <div className="description">
      <p>
        <strong>Status:</strong> {greased ? 'Greased 🐖' : 'Not Greased 🐷'}
      </p>
      <p>
        <strong>Top Medal:</strong> {medal || "No medals achieved"}
      </p>
      <p>
        <strong>Weight Ratio:</strong> {weight !== "Unknown" ? `${weight} (relative to a standard 24.7 cu. ft. fridge)` : "Weight data not available"}
      </p>
    </div>
  );
}

export default HogDetails;
