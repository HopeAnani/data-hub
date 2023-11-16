// AdvancedFilter.js
import React, { useState, useEffect } from 'react';

const itemsData = [
  { id: 1, name: 'Item 1', country: 'USA', dataType: 'Type A', year: 2021 },
  { id: 2, name: 'Item 2', country: 'Canada', dataType: 'Type B', year: 2020 },
  { id: 3, name: 'Item 3', country: 'USA', dataType: 'Type A', year: 2023 },
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

const AdvancedFilter = () => {
  const [countryFilter, setCountryFilter] = useState('All');
  const [dataTypeFilter, setDataTypeFilter] = useState('All');
  const [startYearFilter, setStartYearFilter] = useState('All');
  const [endYearFilter, setEndYearFilter] = useState('All');
  const [filteredItems, setFilteredItems] = useState(itemsData);

  useEffect(() => {
    // Apply filters when countryFilter, dataTypeFilter, or startYearFilter/endYearFilter change
    const filtered = itemsData.filter((item) => {
      const countryMatch = countryFilter === 'All' || item.country === countryFilter;
      const dataTypeMatch = dataTypeFilter === 'All' || item.dataType === dataTypeFilter;

      let yearMatch = true;
      if (startYearFilter !== 'All' && endYearFilter !== 'All') {
        yearMatch = item.year >= parseInt(startYearFilter, 10) && item.year <= parseInt(endYearFilter, 10);
      }

      return countryMatch && dataTypeMatch && yearMatch;
    });

    setFilteredItems(filtered);
  }, [countryFilter, dataTypeFilter, startYearFilter, endYearFilter]);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Advanced Filter</h2>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Country Filter */}
        <div className="flex-1">
          <label className="block mb-2 text-sm font-semibold">Country:</label>
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="All">All Countries</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            {/* Add more countries as needed */}
          </select>
        </div>

        {/* Data Type Filter */}
        <div className="flex-1">
          <label className="block mb-2 text-sm font-semibold">Data Type:</label>
          <select
            value={dataTypeFilter}
            onChange={(e) => setDataTypeFilter(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="All">All Data Types</option>
            <option value="Type A">Type A</option>
            <option value="Type B">Type B</option>
            {/* Add more data types as needed */}
          </select>
        </div>

        {/* Year Filter (Interval) */}
        <div className="flex-1">
          <label className="block mb-2 text-sm font-semibold">Year Interval:</label>
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
      </div>

      {/* Display Filtered Items */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Filtered Items:</h3>
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>{`${item.name} - ${item.country} - ${item.dataType} - ${item.year}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdvancedFilter;
