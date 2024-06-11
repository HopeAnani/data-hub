// Importing necessary modules from React and other libraries
import React, { useState } from 'react';
import { sampleData } from './da'; // Importing sample data from a file
import { Pagination, Button } from "@nextui-org/react"; // Importing pagination and button components
import { Link } from 'react-router-dom'; // Importing Link component for routing
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react"; // Importing modal components
import Notfound from '../components/Notfound'; // Importing Notfound component

// Creating a functional component called FilterComponent
const FilterComponent = () => {
  // Using React Hooks to manage state and logic

  // Using useDisclosure hook to manage modal visibility
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Function to handle downloading a file
  const handleDownload = (downloadLink) => {
    const link = document.createElement('a');
    link.href = downloadLink;
    link.target = '_blank'; // Open in a new tab
    link.click();
  };

  // Function to open default email client to send an email
  const sendEmail = () => {
    window.open("mailto:info@aceadvisors.org?subject=SendMail&body=Description");
  };

  // State management using React Hooks
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sector, setSector] = useState('');
  const [region, setRegion] = useState('');
  const [yearRange, setYearRange] = useState({ start: 1950, end: 2024 });
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(sampleData);
  const [showFilters, setShowFilters] = useState(false); // State to toggle filters visibility

  // Extracting unique sectors, regions, and years from sample data
  const sectors = [...new Set(sampleData.map(item => item.sector))];
  const regions = [...new Set(sampleData.map(item => item.region))];
  const years = [...new Set(sampleData.map(item => item.year))];

  // Function to filter data based on user inputs
  const handleFilter = () => {
    const data = sampleData.filter(item => {
      return (
        (sector ? item.sector === sector : true) &&
        (region ? item.region === region : true) &&
        item.year >= yearRange.start &&
        item.year <= yearRange.end &&
        (searchQuery ?
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.sector.toLowerCase().includes(searchQuery.toLowerCase()) : true)
      );
    });
    setFilteredData(data);
    setSearchQuery('');
    setShowFilters(false); // Hide filters after applying
    console.log('Filtered Data:', data); // Debugging log
  };

  // Function to handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle search button click
  const handleSearchButton = () => {
    handleFilter();
  };

  // Function to handle key press events (like pressing Enter)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleFilter();
    }
  };

  // Function to handle data type filter selection
  const handleDataTypeFilter = (selectedDataType) => {
    console.log('Selected data type:', selectedDataType);
    setSector(selectedDataType);
    handleFilter();
  };

  // useEffect hook to log sector whenever it changes
  React.useEffect(() => {
    console.log('Sector:', sector);
  }, [sector]);

  // Rendering JSX elements
  return (
    <div className='overflow-x-hidden bg-gray-100'>
      {/* Search input and buttons */}
      <div className="flex flex-wrap items-center space-x-2 p-4 search justify-center">
        <input type="text" placeholder="Search by title or sector" value={searchQuery} onChange={handleSearch} onKeyPress={handleKeyPress} className="border p-2 rounded w-full inputSearch lg:w-[60%]" />
        <div className='space-x-2 p-2'>
          {/* Search and Filter buttons */}
          <button className={`bg-[#173e26] text-white p-2 rounded hover:bg-[#153722] w-24 btn md:hidden`} onClick={handleSearchButton}>Search</button>
          <button className="bg-white text-[#173e26] border-2 border-[#173e26] hover:border-bg-[#153722] p-2 rounded w-24 btn" onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? 'Cancel' : 'Filter'}
          </button> {/* Toggle button for filters */}
        </div>
      </div>
      {/* Filters section */}
      {showFilters && ( /* Conditionally render filters */
        <div className="w-[70%] mx-auto mt-8">
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            {/* Sector filter */}
            <div className="flex-1">
              <select className="w-full p-2 border rounded" onChange={e => setSector(e.target.value)}>
                <option value="">Sector</option>
                {sectors.map((sec, index) => (
                  <option key={index} value={sec}>{sec}</option>
                ))}
              </select>
            </div>
            {/* Region filter */}
            <div className='flex-1'>
              <select className="w-full p-2 border rounded" onChange={e => setRegion(e.target.value)}>
                <option value="">Region</option>
                {regions.map((reg, index) => (
                  <option key={index} value={reg}>{reg}</option>
                ))}
              </select>
            </div>
            {/* Start Year filter */}
            <div className='flex-1'>
              <select className="w-full p-2 border rounded" onChange={e => setYearRange({ ...yearRange, start: parseInt(e.target.value) })}>
                <option value="">Start Year</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>{year}</option>
                ))}
              </select>
            </div>
            {/* End Year filter */}
            <div className='flex-1'>
              <select className="w-full p-2 border rounded" onChange={e => setYearRange({ ...yearRange, end: parseInt(e.target.value) })}>
                <option value="">End Year</option>
                {years.map((year, index) => (
                  <option key={index} value={year}>{year}</option>
                ))}
              </select>
            </div>
            {/* Apply button */}
            <button className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]" onClick={handleFilter}>Apply</button>
          </div>
        </div>
      )}
      {/* Displaying search results */}
      <div className="px-6 py-8">
        <div className="container flex justify-between mx-auto">
          {/* Main content area */}
          <div className='w-full lg:w-8/12'>
            {/* Title and sorting options */}
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-[#173e26] md:text-2xl">Search Result:</h1>
              <div>
                {/* Sorting dropdown */}
                <select className="w-[200px] border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-[#173e26] focus:ring-opacity-50">
                  <option>Latest</option>
                  <option>Last Week</option>
                </select>
              </div>
            </div>
            {/* Displaying filtered data */}
            {filteredData.length > 0 ? (
              filteredData.map(data => (
                <div key={data.id} className="mt-6">
                  <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                    <div className="flex items-center justify-between">
                      <span className="font-light text-gray-600">{data.year}</span>
                      {/* Link to sector */}
                      <Link to="" className="px-2 py-1 font-bold text-gray-100 bg-[#173e26] rounded hover:bg-[#24542f]">{data.sector}</Link>
                    </div>
                    <div className="mt-2">
                      {/* Title */}
                      <Link to="" className="text-2xl font-bold text-[#173e26] hover:underline">{data.title}</Link>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      {/* Read more link */}
                      <Link className="text-[#24542f] hover:underline" onClick={() => data.isFree ? handleDownload(data.downloadLink) : onOpen()} >Read more</Link>
                      <div>
                        {/* Country */}
                        <a href="#" className="flex items-center">
                          <img src="https://www.flagcolorcodes.com/filter?f=ethiopia&e=waves"
                            alt="avatar" className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                          <h1 className="font-bold text-[#173e26] hover:underline">Ethiopia</h1>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Notfound /> // Display Notfound component when there is no data
            )}
            {/* Modal for sending email */}
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalContent>
                <ModalHeader>Send Email</ModalHeader>
                <ModalBody>
                  Interested? Please send us a request through our email info@aceadvisors.org.
                </ModalBody>
                <ModalFooter>
                  {/* Buttons for closing and sending email */}
                  <Button color="danger" variant="light" onPress={onClose}>Close</Button>
                  <Button color='success' variant='light' onClick={sendEmail}>Send Email</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            {/* Pagination */}
            <div className="flex flex-col gap-5">
              <p className="text-small text-default-500">Selected Page: {currentPage}</p>
              <div className='flex gap-2'>
                {/* Previous button */}
                <Button
                  size="sm"
                  variant="flat"
                  color="secondary"
                  onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
                  className="px-3 py-2 mx-1 font-medium text-[#173e26] bg-white rounded-md hover:bg-[#24542f] hover:text-white"
                >
                  Previous
                </Button>
                {/* Pagination component */}
                <Pagination
                  total={10}
                  page={currentPage}
                  color='success'
                  onChange={setCurrentPage}
                  className=' bg-transparent'
                />
                {/* Next button */}
                <Button
                  size="sm"
                  variant="flat"
                  color="secondary"
                  onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}
                  className="px-3 py-2 mx-1 font-medium text-[#173e26] bg-white rounded-md hover:bg-[#24542f] hover:text-white"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="hidden w-4/12 -mx-8 lg:block">
            {/* Region section */}
            <div className="px-8">
              <h1 className="mb-4 text-xl font-bold text-[#173e26]">Region</h1>
              <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                <ul className="-mx-4">
                  {/* List of regions */}
                  <li className="flex items-center">
                    {/* Flag */}
                    <img src="https://www.flagcolorcodes.com/filter?f=ethiopia&e=waves"
                          alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full"/>
                      {/* Region name */}
                      <p><Link to="/" className="mx-1 font-bold text-[#173e26] hover:underline">Ethiopia</Link>
                      {/* Number of files */}
                      <span className=" text-sm font-light text-gray-700"> 23 Files</span></p>
                  </li>
                  <li className="flex items-center mt-6">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Flag_of_the_Afar_Region.svg/2560px-Flag_of_the_Afar_Region.svg.png"
                          alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full"/>
                      <p><Link to="/" className="mx-1 font-bold text-[#173e26] hover:underline">Other</Link><span
                              className="text-sm font-light text-gray-700">82 Files</span></p>
                  </li>
                </ul>
              </div>
            </div>
            {/* Data Type section */}
            <div className="px-8 mt-10">
              <h1 className="mb-4 text-xl font-bold text-[#173e26]">Data Type</h1>
              <div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                <ul>
                  {/* List of data types */}
                  {sectors.map((sec, index) => (
                    <li key={index} onClick={() => handleDataTypeFilter(sec)} className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline cursor-pointer ">{sec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting FilterComponent for use in other files
export default FilterComponent;
