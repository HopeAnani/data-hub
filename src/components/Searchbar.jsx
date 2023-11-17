// SearchBar.js
import React, { useState } from 'react';
import '../styles/search.css';

const itemsData = [
  { id: 1, name: 'Growing City', region: 'Addis Ababa', dataType: 'Economy', year: 2021 },
  { id: 2, name: 'Capital Market', region: 'Oromia', dataType: 'Infrastructure', year: 2020 },
  { id: 3, name: 'Harar economy', region: 'Harar', dataType: 'Economy', year: 2021 },
  // Add more items as needed
];

const generateYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let year = 1900; year <= currentYear; year++) {
    years.push(year.toString());
  }
  return years;
};

const FilterSection = ({ setFilterVisible, applyFilters }) => {
  const [regionFilter, setRegionFilter] = useState('All');
  const [dataTypeFilter, setDataTypeFilter] = useState('All');
  const [startYearFilter, setStartYearFilter] = useState('All');
  const [endYearFilter, setEndYearFilter] = useState('All');

  return (
    <div className="w-[70%] mx-auto mt-8">
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="flex-1">
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="w-full p-2 border rounded "
          >
            <option value="All">All Regions</option>
            <option value="Oromia">Oromia</option>
            <option value="Harar">Harar</option>
          </select>
        </div>
        <div className="flex-1">
          <select
            value={dataTypeFilter}
            onChange={(e) => setDataTypeFilter(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="All">Data Types</option>
            <option value="Economy">Economy</option>
            <option value="Infrastructure">Infrastructure</option>
          </select>
        </div>
        <div className="flex-1">
          <div className="flex gap-2">
            <select
              value={startYearFilter}
              onChange={(e) => setStartYearFilter(e.target.value)}
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
              value={endYearFilter}
              onChange={(e) => setEndYearFilter(e.target.value)}
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
        <button
          onClick={() => {
            applyFilters(regionFilter, dataTypeFilter, startYearFilter, endYearFilter);
            setFilterVisible(false);
          }}
          className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const applyFilters = (regionFilter, dataTypeFilter, startYearFilter, endYearFilter) => {
    const filtered = itemsData.filter((item) => {
      const regionMatch = regionFilter === 'All' || item.region === regionFilter;
      const dataTypeMatch = dataTypeFilter === 'All' || item.dataType === dataTypeFilter;
      let yearMatch = true;

      if (startYearFilter !== 'All' && endYearFilter !== 'All') {
        yearMatch =
          item.year >= parseInt(startYearFilter, 10) && item.year <= parseInt(endYearFilter, 10);
      }

      return regionMatch && dataTypeMatch && yearMatch;
    });

    const searchTermFiltered = filtered.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.dataType.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredItems(searchTermFiltered);
  };

  const isSearchButtonDisabled = searchTerm.trim() === '';

  return (
    <>
      <div className="flex items-center space-x-2 p-4 search">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded w-[60%] inputSearch"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className={`bg-[#173e26] text-white p-2 rounded hover:bg-[#153722] w-24 btn ${
            isSearchButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => {
            applyFilters('All', 'All', 'All', 'All');
            setIsFilterVisible(false);
          }}
          disabled={isSearchButtonDisabled}
        >
          Search
        </button>
        <button
          className="bg-white text-[#173e26] border-2 border-[#173e26] hover:border-bg-[#153722] p-2 rounded w-24 btn"
          onClick={() => setIsFilterVisible((prev) => !prev)}
        >
          {isFilterVisible ? 'Cancel' : 'Filter'}
        </button>
      </div>

      {isFilterVisible && (
        <FilterSection setFilterVisible={setIsFilterVisible} applyFilters={applyFilters} />
      )}

      {filteredItems.length > 0 && (
        <div className="w-[70%] mx-auto mt-8">
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Filtered Items:</h3>
            <ul>
              {filteredItems.map((item) => (
                <li key={item.id}>{`${item.name} - ${item.region} - ${item.dataType} - ${item.year}`}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
