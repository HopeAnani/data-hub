import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="sm:flex sm:items-center px-6 py-4">
        <div className="text-center sm:text-left">
          <p className="text-lg text-black">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
