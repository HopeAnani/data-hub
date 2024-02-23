import React, { useState } from 'react';

const servicesData = [
  {
    id: 1,
    title: 'Service 1',
    description: 'Description of service 1',
  },
  {
    id: 2,
    title: 'Service 2',
    description: 'Description of service 2',
  },
  {
    id: 3,
    title: 'Service 3',
    description: 'Description of service 3',
  },
];

const Carousel = () => {
  const [currentService, setCurrentService] = useState(0);

  const nextService = () => {
    setCurrentService((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1));
  };

  const prevService = () => {
    setCurrentService((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="relative">
        <button
          onClick={prevService}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white font-bold px-4 py-2 rounded focus:outline-none focus:ring focus:ring-gray-400"
        >
          Prev
        </button>
        <button
          onClick={nextService}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white font-bold px-4 py-2 rounded focus:outline-none focus:ring focus:ring-gray-400"
        >
          Next
        </button>
        <div className="h-64 overflow-hidden">
          <div className="w-full flex" style={{ transform: `translateX(-${currentService * 100}%)` }}>
            {servicesData.map((service) => (
              <div key={service.id} className="w-full px-4">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <h2 className="text-xl font-bold">{service.title}</h2>
                  <p className="mt-2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
