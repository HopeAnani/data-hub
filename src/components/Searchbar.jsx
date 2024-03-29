import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchTerm,
  applyFilters,
  toggleFilterVisibility,
  setRegionFilter,
  setDataTypeFilter,
  setStartYearFilter,
  setEndYearFilter,
} from '../redux-file/actions';
import '../styles/search.css'

const generateYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = currentYear; year >= 1900; year-- ) {
    years.push(year.toString());
  }
  return years;
};

const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchTerm, filters, isFilterVisible, filteredItems, itemsData } = useSelector((state) => state);

  const handleSearchTermChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleApplyFilters = () => {
    dispatch(
      applyFilters(
        filters.regionFilter, 
        filters.dataTypeFilter,
        filters.startYearFilter,
        filters.endYearFilter,
      )
    );
  };

  const searchResults = itemsData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.dataType.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
      <div className="flex flex-wrap items-center space-x-2 p-4 search justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded w-full inputSearch lg:w-[60%]"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <div className='space-x-2 p-2'>
        <button
          className={`bg-[#173e26] text-white p-2 rounded hover:bg-[#153722] w-24 btn md:hidden ${
            searchTerm.trim() === '' ? 'cursor-not-allowed' : ''
          }`}
          onClick={handleApplyFilters}
          disabled={searchTerm.trim() === ''}
        >
          Search
        </button>
        <button
          className="bg-white text-[#173e26] border-2 border-[#173e26] hover:border-bg-[#153722] p-2 rounded w-24 btn"
          onClick={() => dispatch(toggleFilterVisibility())}
        >
          {isFilterVisible ? 'Cancel' : 'Filter'}
        </button>
        </div>
      </div>

      {isFilterVisible && (
        <div className="w-[70%] mx-auto mt-8">
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            {/* Region Filter */}
            <div className="flex-1">
              <select
                value={filters.regionFilter}
                onChange={(e) => dispatch(setRegionFilter(e.target.value))}
                className="w-full p-2 border rounded"
              >
                <option value="All">All Regions</option>
                <option value="Addis Ababa">Addis Ababa</option>
                <option value="Dire Dawa">Dire Dawa</option>
                <option value="Oromia">Oromia</option>
                <option value="Tigray">Tigray</option>
                <option value="Amhara">Amhara</option>
                <option value="Harar">Harar</option>
                <option value="Somali">Somali</option>
                <option value="Benishangul">Benishangul</option>
                <option value="Sidama">Sidama</option>
                <option value="SNNPR">Southern Nations and Nationalities and People's</option>
                <option value="Gambella">Gambella</option>
                <option value="South Ethiopia">South Ethiopia</option>

                {/* Add more regions as needed */}
              </select>
            </div>

            {/* Data Type Filter */}
            <div className="flex-1">
              <select
                value={filters.dataTypeFilter}
                onChange={(e) => dispatch(setDataTypeFilter(e.target.value))}
                className="w-full p-2 border rounded"
              >
                <option value="All">Data Types</option>
                <option value="Economy">Economy</option>
                <option value="Trade">Trade</option>
                <option value="Infrastructure">Social</option>
                <option value="Investment">Investment</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Infrastructure">Doing Business</option>
                {/* Add more data types as needed */}
              </select>
            </div>

            {/* Year Filter (Interval) */}
            <div className="flex-1">
              <div className="flex gap-2">
                <select
                  value={filters.startYearFilter}
                  onChange={(e) => dispatch(setStartYearFilter(e.target.value))}
                  className="w-1/2 p-2 border rounded"
                >
                  <option value="All">Start Year</option>
                  {generateYearOptions().map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>

                <select
                  value={filters.endYearFilter}
                  onChange={(e) => dispatch(setEndYearFilter(e.target.value))}
                  className="w-1/2 p-2 border rounded"
                >
                  <option value="All">End Year</option>
                  {generateYearOptions().map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Apply Filters Button */}
            <button
              onClick={handleApplyFilters}
              className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]"
            >
              Apply
            </button>
          </div>
        </div>
      )}
        {/* Display Search Results */}
      {searchTerm.trim() !== '' && (
        <div className="mt-8 justify-center items-center text-center">
          <h3 className="text-lg font-semibold mb-2">Search Results:</h3>
          <ul>
            {searchResults.map((item) => (
              <li key={item.id}>{`${item.name} - ${item.region} - ${item.dataType} - ${item.year}`}</li>
            ))}
          </ul>
        </div>
      )}
       {/* Display Filtered Items */}
       <div className="mt-8 justify-center text-center hidden">
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>{`${item.name} - ${item.region} - ${item.dataType} - ${item.year}`}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchBar;
