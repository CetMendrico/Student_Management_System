import React from 'react';

const SearchBar = ({ query, setQuery, courseFilter, setCourseFilter, minDate, setMinDate, maxDate, setMaxDate }) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Filter by Last Name, First Name, or Course" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <div>
        <label>
          Course:
          <select value={courseFilter} onChange={(e) => setCourseFilter(e.target.value)}>
            <option value="">All</option>
            <option value="IT">IT</option>
            <option value="IS">IS</option>
            <option value="CS">CS</option>
            <option value="DS">DS</option>
          </select>
        </label>
      </div>
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