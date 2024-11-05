import React, { useState, useMemo } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  const filteredHogs = showGreased ? hogs.filter(hog => hog.greased) : hogs;

  const sortedHogs = useMemo(() => {
    return [...filteredHogs].sort((hog1, hog2) => {
      if (sortBy === "weight") {
        return hog1.weight - hog2.weight;
      } else {
        return hog1.name.localeCompare(hog2.name);
      }
    });
  }, [filteredHogs, sortBy]);

  return (
    <div className="ui grid container App">
      <div className="sixteen wide column centered">
        <Nav />
      </div>
      <div className="sixteen wide column centered">
        <Filter
          showGreased={showGreased}
          onChangeShowGreased={setShowGreased}
          sortBy={sortBy}
          onChangeSortBy={setSortBy}
        />
      </div>
      <div className="sixteen wide column centered">
        <HogList hogs={sortedHogs} />
      </div>
    </div>
  );
}

export default App;
