import React from 'react';
import '../styles/search.css'

const SearchBar = () =>{
  return (
    <div className="flex items-center space-x-2 p-4 search">
      <input type="text" placeholder="Search..." className="border p-2 rounded w-[60%] inputSearch"/>
      <button className="bg-[#173e26] text-white p-2 rounded hover:bg-[#153722] w-24">
        Search
      </button>
    </div>
  )
}

export default SearchBar;
