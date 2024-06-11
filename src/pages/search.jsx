import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Pagination,Button} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import "../styles/search.css";
import SearchBar from '../components/Searchbar';
import Notfound from '../components/Notfound';

const Search= () => {

  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedOption, setSelectedOption] = useState('Latest');
  const perPage = 5;
  
  const [fileCounts, setFileCounts] = useState([]);
  const [repository, setRepository] = useState([]);
 
  const [results, setResults] = useState({
    reg: [],
    dr_results: [],
    rf_results: [],
    ns_results: [],
    ot_results: [],
    

  });
  const {searchstring}=useParams();
  
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAllButton, setShowAllButton] = useState(false); // Initially hide the button

  const handleCategoryClick = (name) => {
    setSelectedCategory((prevCategory) => (prevCategory === name ? null : name));
    setShowAllButton(true); // Show the "Show All" button again when a category is clicked
  };
  
  const handleShowAllClick = () => {
    setSelectedCategory(null);
    setShowAllButton(false); // Hide the "Show All" button after it's clicked
  };
  


  
  
  
      const fetchresult = async () => {
        try {
          let url = '/overview/Searchresults/' + searchstring;
          if (selectedCategory) {
            url += `?name=${selectedCategory}`;
          }
          const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setResults({
          reg: data['reg '], // Corrected key
           // Corrected key
          rf_results: data['rf_results'], // Corrected key
          ns_results: data['ns_results'],
          ot_results: data['ot_results'], // Corrected key
          
         
        });
      } else {
        console.error('Failed to fetch result');
      }
    } catch (error) {
      console.error('Error fetching result:', error);
    }
  };
  

const fetchRegion= async () => {
    try {
      const response = await fetch('/overview/file_counts');

      const result = await response.json();
      setFileCounts(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
const fetchdatatype= async () => {
    try {
      const response = await fetch('/overview/get-filter-options/');

      const data = await response.json();
      setRepository(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 useEffect(() => {
    fetchresult();
    console.log('selectedCategory or searchstring changed:', selectedCategory, searchstring);
  }, [selectedCategory, searchstring]);

  useEffect(() => {
    fetchRegion();
  }, []); // Only runs once after the initial render

  useEffect(() => {
    fetchdatatype();
  }, []); // Only runs once after the initial render
 // Combine both rf_results and ns_results
 const combinedResults = [...results.rf_results, ...results.ns_results, ...results.ot_results ];

 // Filter combinedResults based on selected option
 let filteredResults = combinedResults;
if (selectedCategory) {
  filteredResults = combinedResults.filter(result => result.data_repository_name === selectedCategory);
}
 if (selectedOption === 'Last Week') {
   const lastWeek = new Date();
   lastWeek.setDate(lastWeek.getDate() - 7);
   filteredResults = combinedResults.filter(result => new Date(result.created) >= lastWeek);
 } else if (selectedOption === 'Last Month') {
   const lastMonth = new Date();
   lastMonth.setMonth(lastMonth.getMonth() - 1);
   filteredResults = combinedResults.filter(result => new Date(result.created) >= lastMonth);
 }

 // Sort filteredResults by date in descending order
 filteredResults.sort((a, b) => new Date(b.created) - new Date(a.created));

 // Calculate start and end indices for the current page
 const startIndex = (currentPage - 1) * perPage;
 const endIndex = currentPage * perPage;
 
  const handleDownload = (downloadLink) => {
    const link = document.createElement('a');
    link.href = downloadLink;
    link.target = '_blank'; // Open in a new tab
    link.click();
    };

const sendEmail = () => {
  window.open("mailto:infoaceadvisors.org?subject=SendMail&body=Description");
};


const [showAllFiles, setShowAllFiles] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleToggleFiles = () => {
        setShowAllFiles(!showAllFiles);
    };

    const toggleDropdown = (index) => {
        setSelectedCountry(selectedCountry === index ? null : index);
    };
const handleopen = (downloadLink) => {
  const link = document.createElement('a');
  link.href = downloadLink;
  link.target = '_blank'; // Open in a new tab
  link.click();
  };


  return (
      <div class="overflow-x-hidden bg-gray-100">
        <SearchBar/>
          <div class="px-6 py-8">
          <div className="w-full lg:w-8/12">
          <div class="flex items-center justify-between">
                          <h1 class="text-xl font-bold text-[#173e26] md:text-2xl">Search Result For:{searchstring}</h1>
                          <div>
                          <select
            
            className="w-[200px] border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-[#173e26] focus:ring-opacity-50"
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}
          >
            
            <option value="Latest">Latest</option>
            <option value="Last Week">Last Week</option>
            <option value="Last Month">Last Month</option>
          </select>

                          </div>
                      </div>
                      </div>
                      <div className="container flex justify-between mx-auto">
  <div className="w-full lg:w-8/12">
    <div className="filtered-results-container">
      {filteredResults.length === 0 ? (
        <div className="not-found-container">
          <Notfound />
        </div>
      ) : (
        <>
          {filteredResults.slice(startIndex, endIndex).map(result => (
            <div className="mt-6" key={result.id}>
              <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <span className="font-light text-gray-600">
                    {new Date(result.created).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <h1 to="/" className="px-2 py-1 font-bold text-gray-100 bg-[#173e26] rounded hover:bg-[#24542f]">
                    {result.data_repository_name}
                  </h1>
                </div>
                <div className="mt-2">
                  <h1 className="text-2xl font-bold text-[#173e26] hover:underline truncate">{result.PdfTitle}</h1>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button
                    className="text-[#24542f] hover:underline"
                    onClick={result.pdfs.isFree ? () => handleDownload(result.pdfs.downloadLink) : onOpen}
                  >
                    {result.pdfs.isFree ? 'Read More' : 'Read More'}
                  </button>
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalContent>
                      <ModalHeader>Send Email</ModalHeader>
                      <ModalBody>
                        Interested? Please send us a request through our email info@aceadvisors.org.
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                          Close
                        </Button>
                        <Button color="success" variant="light" onClick={sendEmail}>
                          Send Email
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                  <div>
                    <button className="flex items-center">
                      <img
                        src={result.region_image}
                        alt="avatar"
                        className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                      />
                      <h1 className="font-bold text-[#173e26] hover:underline">{result.region_name}</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {showAllButton && (
            <button className="mx-1 font-bold text-[#173e26] hover:underline" onClick={handleShowAllClick}>
              Show All
            </button>
          )}
          <div className="flex flex-col gap-5 items-center">
            <p className="text-small text-default-500">Selected Page: {currentPage}</p>
            <div className="flex gap-2">
              {currentPage > 1 && (
                <Button
                  size="sm"
                  variant="flat"
                  color="secondary"
                  onPress={() => setCurrentPage(prev => (prev > 1 ? prev - 1 : prev))}
                  className="px-3 py-2 mx-1 font-medium text-[#173e26] bg-white rounded-md hover:bg-[#24542f] hover:text-white"
                >
                  Previous
                </Button>
              )}
              <Pagination
                total={Math.ceil(filteredResults.length / perPage)}
                page={currentPage}
                color="success"
                onChange={setCurrentPage}
                className="bg-transparent"
              />
              {currentPage < Math.ceil(filteredResults.length / perPage) && (
                <Button
                  size="sm"
                  variant="flat"
                  color="secondary"
                  onPress={() => setCurrentPage(prev => (prev < Math.ceil(filteredResults.length / perPage) ? prev + 1 : prev))}
                  className="px-3 py-2 mx-1 font-medium text-[#173e26] bg-white rounded-md hover:bg-[#24542f] hover:text-white"
                >
                  Next
                </Button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  </div>
  <div className="hidden w-4/12 -mx-8 lg:block">
    <div className="px-8">
      <h1 className="mb-4 text-xl font-bold text-[#173e26]">Region</h1>
      <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
        <ul className="-mx-4">
          {fileCounts.map((item, index) => (
            <li key={index} className="flex flex-col">
              <div className="flex items-center">
                <img src={item.flag_image_url} alt="avatar" className="object-cover w-4 h-4 mx-4 rounded-full" />
                <h1 className="mx-2 font-bold text-[#173e26] hover:underline" onClick={() => toggleDropdown(index)}>
                  {item.country}
                </h1>
                <span className="text-sm font-light text-gray-700">{`${item.file_count} Files`}</span>
              </div>
              {selectedCountry === index && (
                <div className="flex flex-col max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                  {item.files.slice(0, 10).map((file, fileIndex) => (
                    <div key={fileIndex} className="relative">
                      <button
                        className="font-bold text-center py-2 transition-transform transform hover:scale-105 hover:bg-gray-200"
                        onClick={() => handleopen(file.file_url)}
                      >
                        {file.name}
                      </button>
                      <div className="absolute w-full h-0.5 bg-gray-200 left-0 bottom-0 transition-transform transform -translate-y-full group-hover:translate-y-0"></div>
                    </div>
                  ))}
                  {item.files.length > 10 && !showAllFiles && (
                    <button className="text-center py-2 mt-2 text-green-700 hover:underline" onClick={handleToggleFiles}>
                      See more
                    </button>
                  )}
                  {showAllFiles &&
                    item.files.slice(10).map((file, fileIndex) => (
                      <div key={fileIndex} className="relative">
                        <button
                          className="font-bold text-center py-2 transition-transform transform hover:scale-105 hover:bg-gray-200"
                          onClick={() => handleopen(file.file_url)}
                        >
                          {file.name}
                        </button>
                        <div className="absolute w-full h-0.5 bg-gray-200 left-0 bottom-0 transition-transform transform -translate-y-full group-hover:translate-y-0"></div>
                      </div>
                    ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="px-8 mt-10">
      <h1 className="mb-4 text-xl font-bold text-[#173e26]">Data Sectors</h1>
      <div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
        <ul>
          {Array.from(new Set(repository.map(item => item.value))).map((name, index) => {
            const count = repository.filter(item => item.value === name).length;
            return (
              <li key={index}>
                <button
                  onClick={() => handleCategoryClick(name)}
                  className="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline"
                >
                  - {name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </div>
</div>

<style jsx>
{`
  .filtered-results-container {
    width: 100%;
  }
  .not-found-container {
    width: 100%;
    text-align: left;
  }
`}
</style>

          </div>
      </div>
  )
}

export default Search