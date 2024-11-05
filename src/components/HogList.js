import React from "react";
import HogCard from "./HogCard";

function HogList({ hogs }) {
  if (hogs.length === 0) {
    return <p>No hogs available to display.</p>;
  }

  return (
    <section className="hog-list">
      <h2 className="hog-list-title">Meet Our Hogs</h2>
      <div className="ui three stackable cards">
        {hogs.map((hog, index) => (
          <HogCard key={hog.id || hog.name || index} hog={hog} />
        ))}
      </div>
    </section>
  );
}

export default HogList;
