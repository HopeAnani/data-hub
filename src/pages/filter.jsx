// src/FilterComponent.js
import React, { useState } from 'react';
import { sampleData } from './da';
import { Link } from 'react-router-dom';

const FilterComponent = () => {
  const [sector, setSector] = useState('');
  const [region, setRegion] = useState('');
  const [yearRange, setYearRange] = useState({ start: 2018, end: 2022 });
  const [filteredData, setFilteredData] = useState([]);

  const sectors = [...new Set(sampleData.map(item => item.sector))];
  const regions = [...new Set(sampleData.map(item => item.region))];
  const years = [...new Set(sampleData.map(item => item.year))];

  const handleFilter = () => {
    const data = sampleData.filter(item => {
      return (
        (sector ? item.sector === sector : true) &&
        (region ? item.region === region : true) &&
        item.year >= yearRange.start &&
        item.year <= yearRange.end
      );
    });
    setFilteredData(data);
  };

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4">
        <select className="p-2 rounded border" onChange={e => setSector(e.target.value)}>
          <option value="">Select Sector</option>
          {sectors.map((sec, index) => (
            <option key={index} value={sec}>{sec}</option>
          ))}
        </select>

        <select className="p-2 rounded border" onChange={e => setRegion(e.target.value)}>
          <option value="">Select Region</option>
          {regions.map((reg, index) => (
            <option key={index} value={reg}>{reg}</option>
          ))}
        </select>

        <select className="p-2 rounded border" onChange={e => setYearRange({ ...yearRange, start: parseInt(e.target.value) })}>
          <option value="">Start Year</option>
          {years.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>

        <select className="p-2 rounded border" onChange={e => setYearRange({ ...yearRange, end: parseInt(e.target.value) })}>
          <option value="">End Year</option>
          {years.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>

        <button className="p-2 bg-blue-500 text-white rounded" onClick={handleFilter}>Filter</button>
      </div>

      <div>
        {filteredData.map(data => (
          <div key={data.id} className="mt-6">
            <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                <div class="flex items-center justify-between">
                    <span class="font-light text-gray-600">{data.year}</span>
                    <Link to="" class="px-2 py-1 font-bold text-gray-100 bg-[#173e26] rounded hover:bg-[#24542f]">{data.sector}</Link>
                </div>
                <div class="mt-2"><Link to="" class="text-2xl font-bold text-[#173e26] hover:underline">{data.title}</Link>
                    <p class="mt-2 text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                        reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                </div>
            </div>
            {/* <p>Sector: {data.sector}</p>
            <p>Region: {data.region}</p>
            <p>Year: {data.year}</p> */}
          </div>

        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
