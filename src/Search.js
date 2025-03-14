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

  const handlePreClear = () => {
    setSearchTerm('');
    handleClear();
  };

  return (
    <div className="searchAndClear">
      {window.innerWidth > 768 && (
        <div className="magnifContainer">
          <img className="magnif" src="/magnif.png" />
        </div>
      )}

      <div className="searchBarOuter">
        <div className="searchBarInner">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            value={searchTerm}
            defaultValue={searchTerm}
          />
          {window.innerWidth < 768 && !searchTerm.length && (
            <div className="magnifContainer">
              <img className="magnif" src="/magnif.png" />
            </div>
          )}
        </div>
      </div>
      <button className="clearButton" type="button" onClick={() => {}}>
        <div className="clearButtonInside" onClick={handlePreClear}>
          Clear
        </div>
      </button>
    </div>
  );
};

export default Search;
