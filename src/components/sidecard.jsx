// SideCard.js
import React from 'react';

const SideCard = ({ title, content, buttonText, imageUrl }) => {
  return (
    <div className="w-[500px] h-[192px] object-right bg-white shadow-lg rounded-md overflow-hidden my-4">
      <div className="flex">
        <div className=" flex items-center ">
          <img
            className="h-48 object-cover w-48"
            src={imageUrl}
          />
        </div>
        <div className="sm:flex sm:items-center px-6 py-4">
          <div className=" sm:text-left">
            <p className="text-xl font-semibold text-gray-800">{title}</p>
            <p className="text-sm text-black">{content}</p>
            <div className="mt-3">
              <button className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SideCard;
