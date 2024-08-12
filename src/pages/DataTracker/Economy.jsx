import React, { useState } from 'react';
import Select from 'react-select';
import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";

import {
  Rectangle,
  BarChart,
  Bar,
  LineChart,
  Legend,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush,
} from "recharts";
import { AiOutlineSearch } from 'react-icons/ai';
import { Agri } from '../data';

// Updated CustomTooltip component
const CustomTooltip = ({ active, payload, selectedOptions }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    return (
      <div className="bg-white shadow-md p-2 rounded-md">
        <p><strong className='text-[#173e26]'>Year:</strong> {data.year}</p>
        {selectedOptions.map(option => (
          <p key={option.value}><strong className='text-[#173e26]'>{option.label}:</strong> {data[option.value]}</p>
        ))}
      </div>
    );
  }

  return null;
};

const options = [
  { value: 'Amh', label: 'Amh' },
  { value: 'Oro', label: 'Oro' },
];

const Economy = () => {
  const [chartType, setChartType] = useState('line');
  const [selectedRange, setSelectedRange] = useState([0, Agri.length - 1]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleLineClick = () => {
    setChartType('line');
  };

  const handleBarClick = () => {
    setChartType('bar');
  };

  const handleRangeChange = ({ startIndex, endIndex }) => {
    setSelectedRange([startIndex, endIndex]);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Close the menu when an item is selected
  };

  const handleChange = (selectedOption) => {
    setSelectedOptions(selectedOption);
  };

  const filter = () => {
    console.log(selectedOptions);
  };

  // Ensure Eth is always included in the filtered data keys
  const filteredDataKeys = ['Eth', ...selectedOptions.map(option => option.value)];

  return (
    <div>
      <div className='flex flex-wrap justify-center items-center'>
        <div>
          <Menu
            open={menuOpen}
            handler={setMenuOpen}
            dismiss={{
              itemPress: false, // Prevent menu from closing on item press
              overlayClick: true,
            }}
          >
            <MenuHandler>
              <Button className='bg-white flex items-center justify-center text-black m-4 md:w-96'>
                <AiOutlineSearch size={20} className='mr-4'/> Data Indicator
              </Button>
            </MenuHandler>

            <MenuList className='m-2'>
              <Input placeholder='Search' className='rounded-sm' onClick={(e) => e.stopPropagation()} />
              <MenuItem className='hover:bg-[#173e26] hover:bg-opacity-20 p-2' onClick={handleMenuItemClick}>
                Agriculture, forestry, and fishing, value added (% of GDP) | Data (worldbank.org)
              </MenuItem>
              <MenuItem className='hover:bg-[#173e26] hover:bg-opacity-20 p-2' onClick={handleMenuItemClick}>
                Central government debt, total (% of GDP)
              </MenuItem>
              <MenuItem className='hover:bg-[#173e26] hover:bg-opacity-20 p-2' onClick={handleMenuItemClick}>
                External debt stocks (% of GNI)
              </MenuItem>
              <MenuItem className='hover:bg-[#173e26] hover:bg-opacity-20 p-2' onClick={handleMenuItemClick}>
                GDP per capita growth (annual %)
              </MenuItem>
              <MenuItem className='hover:bg-[#173e26] hover:bg-opacity-20 p-2' onClick={handleMenuItemClick}>
                GDP per capita (current US$)
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div>
          <Select
            options={options}
            value={selectedOptions} 
            onChange={handleChange}
            isMulti={true}
            className='w-80'
          />
        </div>
        <button onClick={filter} className='bg-[#173e26] text-white rounded w-24 md:m-2 my-2 h-9 hover:bg-[#112e1c]'>
          Filter
        </button>
      </div>
      <div className='flex justify-center items-center'>
        <div className='md:w-4/6 h-[100%] mx-2 my-4 bg-white rounded-md overflow-hidden shadow-md'>
          <div>
            <h2 className='text-center font-bold text-[#173e26] mt-4'>
              Agriculture, forestry, and fishing, value added (% of GDP)
            </h2>
          </div>
          <div className="flex justify-center mt-4 mb-12">
            <button className={`mr-4 px-4 py-2 rounded ${chartType === 'line' ? 'bg-gray-200' : ''}`} onClick={handleLineClick}>Line</button>
            <button className={`px-4 py-2 rounded ${chartType === 'bar' ? 'bg-gray-200' : ''}`} onClick={handleBarClick}>Bar</button>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            {chartType === 'line' ? (
              <LineChart
                data={Agri}
                margin={{
                  top: 0,
                  right: 45,
                  left: 20,
                  bottom: 55,
                }}
              >
                <CartesianGrid strokeDasharray="0" horizontal='' vertical='true' />
                <XAxis dataKey="year" padding={{ left: 30, right: 30 }} angle={-45} textAnchor="end"/>
                <YAxis />
                <Tooltip content={<CustomTooltip selectedOptions={selectedOptions.length ? selectedOptions : [{ value: 'Eth', label: 'Eth' }]} />} />
                <Legend/>
                {filteredDataKeys.includes('Eth') && (
                  <Line type="monotone" dataKey="Eth" stroke="#173e26" />
                )}
                {filteredDataKeys.includes('Amh') && (
                  <Line type="monotone" dataKey="Amh" stroke="#ff0000" />
                )}
                {filteredDataKeys.includes('Oro') && (
                  <Line type="monotone" dataKey="Oro" stroke="#0000ff" />
                )}
                <Brush dataKey="year" height={30} y={280} stroke="#173e26" onChange={handleRangeChange} startIndex={selectedRange[0]} endIndex={selectedRange[1]} />
              </LineChart>
            ) : (
              <BarChart
                data={Agri}
                margin={{
                  top: 0,
                  right: 45,
                  left: 20,
                  bottom: 55,
                }}
              >
                <CartesianGrid strokeDasharray="0" horizontal='true' vertical=''/>
                <XAxis dataKey="year" padding={{ left: 30, right: 30 }} angle={-45} textAnchor='end'/>
                <YAxis />
                <Tooltip content={<CustomTooltip selectedOptions={selectedOptions.length ? selectedOptions : [{ value: 'Eth', label: 'Eth' }]} />} />
                {filteredDataKeys.includes('Eth') && (
                  <Bar dataKey="Eth" fill="#173e26" activeBar={<Rectangle fill='#173e26'/>}/>
                )}
                {filteredDataKeys.includes('Amh') && (
                  <Bar dataKey="Amh" fill="#ff0000" activeBar={<Rectangle fill='#ff0000'/>}/>
                )}
                {filteredDataKeys.includes('Oro') && (
                  <Bar dataKey="Oro" fill="#0000ff" activeBar={<Rectangle fill='#0000ff'/>}/>
                )}
                <Brush dataKey="year" y={280} height={30} stroke="#173e26" onChange={handleRangeChange} startIndex={selectedRange[0]} endIndex={selectedRange[1]} />
                <Legend/>
              </BarChart>
            )}
          </ResponsiveContainer>
          <div className="bg-white p-4 rounded-md shadow-md flex">
            <span className="font-bold text-[#173e26]">Selected Range:</span> {Agri[selectedRange[0]]?.year} - {Agri[selectedRange[1]]?.year}
            <p className='ml-auto'>Source: World Bank </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Economy;
