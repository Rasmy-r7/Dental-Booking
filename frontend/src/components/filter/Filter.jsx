import React, { useState } from 'react';
import './Filter.scss';
import { CiSearch } from 'react-icons/ci';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';

function Filter() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="filter_container">
      <button className="filter_btn" onClick={() => setShowFilters(prev => !prev)}>
        <HiAdjustmentsHorizontal />
        Filter
      </button>

      <div className={`filter_search_box ${showFilters ? 'show' : ''}`}>
        <input type="text" placeholder="Search Box" className="filter_input" />
        <CiSearch className="search_icon" />
      </div>

      <div className={`filter_dropdowns ${showFilters ? 'show' : ''}`}>
        <select className="filter_select">
          <option>Language</option>
        </select>
        <select className="filter_select">
          <option>Rating</option>
        </select>
        <select className="filter_select">
          <option>Treatment Type</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
