import React, { useState, useEffect } from 'react';

const Search = ({ handleClear, setFinalSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinalSearch(searchTerm);
    }, 500); // 1 second delay
    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  return (
    <div className="searchAndClear">
      <div className="magnifContainer">
        <img className="magnif" src="/magnif.png" />
      </div>

      <div className="searchBarOuter">
        <div className="searchBarInner">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            value={searchTerm}
            defaultValue={searchTerm}
          />
        </div>
      </div>
      <button className="clearButton" type="button" onClick={() => {}}>
        <div className="clearButtonInside" onClick={handleClear}>
          Clear
        </div>
      </button>
    </div>
  );
};

export default Search;
