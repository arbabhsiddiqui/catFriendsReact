import React from "react";
import "./searchBox.styles.css";
const SearchBox = ({ searchChange, searchField }) => {
  return (
    <div className="pb">
      <input
        className="pa3 ba bg-lightest-blue"
        type="search"
        placeholder="search Friend"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
