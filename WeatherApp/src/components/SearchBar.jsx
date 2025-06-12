import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div className="flex space-x-3 mb-8 w-full max-w-md">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-400 hover:bg-blue-500 transition text-white font-medium px-4 py-2 rounded-md shadow-sm"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
