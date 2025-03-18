import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={onSearchChange}
        className="w-full p-2"
      />
    );
  };

export default SearchBar;