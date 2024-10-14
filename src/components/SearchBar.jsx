import React from 'react';

const SearchBar = ({ query, setQuery, courseFilter, setCourseFilter, minDate, setMinDate, maxDate, setMaxDate }) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Filter by Last Name, First Name, Age, or Course" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <div>
        <label>
          Min Birthdate:
          <input 
            type="date" 
            value={minDate} 
            onChange={(e) => setMinDate(e.target.value)} 
          />
        </label>
        <label>
          Max Birthdate:
          <input 
            type="date" 
            value={maxDate} 
            onChange={(e) => setMaxDate(e.target.value)} 
          />
        </label>
      </div>
    </div>
  );
};

export default SearchBar;