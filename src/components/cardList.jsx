import React from 'react';
import Card from './card.jsx';

const CardList = () => {
  const cardData = [
    {
      description: 'Investor Outreach and Promotion Strategies Design',
    },
    {
      description: 'Investment Promotion Platforms Coordination',
    },
    {
      description: 'Resource Mobilization/Fund Sourcing',
    },
    {
      description: 'Transaction Advisory Services: Market Intelligence (Sector Teasers & Legal Insights), Feasibility studies and business plans, Market Assessment & Positioning (Domestic & Export), Industry Tour Facilitation',
    },
    {
      description: 'Stakeholder Analysis and Linkages',
    },
    // Add more card data as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-[80%] flex-grow">
      {cardData.map((card, index) => (
        <div key={index} className="relative">
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:bg-[#173e26]  transition-all duration-300 hover:text-white">
            <div className="sm:flex sm:items-center px-6 py-4">
              <div className="text-center sm:text-left">
                {/* <p className="text-xl font-semibold text-gray-800">{card.title}</p> */}
                <p className="text-sm text-black hover:text-white">{card.description}</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 bg-white w-0 h-full transition-all duration-300 group-hover:w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default CardList;
