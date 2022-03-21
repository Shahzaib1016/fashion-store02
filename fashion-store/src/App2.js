import React from "react";
import SearchList from "./SearchList/SearchList";
import ShoeData from "./Data.json";

function App2() {
  return (
    <div className="App2">
      <SearchList placeholder="Enter a Book Name..." data={ShoeData} />
    </div>
  );
}

export default App2;