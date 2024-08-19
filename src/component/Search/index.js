import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Handle search functionality here
    console.log('Search query:', query);
  };

  return (
    <div className="flex items-center space-x-2 justify-between">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      <button
        type="button"
        onClick={handleSearch}
        className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
