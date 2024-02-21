import React from 'react'
import { Link } from 'react-router-dom'

const Elements = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {/* Card 1 */}
      <div className="w-full md:w-[350px] mx-2 my-4 bg-white rounded-md overflow-hidden shadow-md">
        <img
          className="w-full h-48 object-cover object-center"
          src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt='Proclamation'
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-center">Proclamation</h2>
          <p className="text-gray-600 mb-4 text-justify">This section contains a collection of proclamations issued by the government of Ethiopia related to the investment ecosystem. Proclamations establish new policies, programs, or legal codes that have broad and long-lasting effects throughout the country.</p>
          <Link to='/explore/Regulatory-and-Strategy'>
          <button
            className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]"
          >
            Read More
          </button>
          </Link>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full md:w-[350px] mx-2 my-4 bg-white rounded-md overflow-hidden shadow-md">
        <img
          className="w-full h-48 object-cover object-center"
          src="https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt='Regulation'
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-center">Regulation</h2>
          <p className="text-gray-600 mb-4 text-justify">This section contains a collection of regulations issued by the government of Ethiopia related to the investment ecosystem. Regulations provide specific guidelines, procedures, or standards for how proclamations should be implemented.</p>
          <Link to='/explore/Regulatory-and-Strategy'>
          <button
            className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]"
          >
            Read More
          </button>
          </Link>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full md:w-[350px] mx-2 my-4 bg-white rounded-md overflow-hidden shadow-md ">
        <img
          className="w-full h-48 object-cover object-center"
          src="https://images.unsplash.com/photo-1572276037952-478cead56982?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt='Directives'
        />
        <div className="p-6 justify-center items-center">
          <h2 className="text-xl font-semibold mb-2 text-center">Directives</h2>
          <p className="text-gray-600 mb-4 text-justify">This section contains a collection of directives issued by the government of Ethiopia related to the investment ecosystem. Directives communicate requirements and expectations to help ensure proclamations and regulations are properly carried out.</p>
          <Link to='/explore/Regulatory-and-Strategy'>
          <button
            className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]"
          >
            Read More
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Elements