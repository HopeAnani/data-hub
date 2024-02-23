import React from 'react'
import { Link } from 'react-router-dom'

const Elements = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {/* Card 1 */}
      <div className="w-full md:w-[350px] mx-2 my-4 bg-white rounded-md overflow-hidden shadow-md">
        <img
          className="w-full h-48 object-cover object-center"
          src="https://img.freepik.com/free-photo/judges-gavel-book-wooden-table-law-justice-concept-background_1150-9095.jpg?t=st=1708679764~exp=1708683364~hmac=bdde1a2559704483086e92c6f0251435876caeb0fb964a2894201e1556bbe6cc&w=996" 
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
          src="https://img.freepik.com/free-photo/diverse-business-partners-reading-contract-together_74855-2736.jpg?t=st=1708680599~exp=1708684199~hmac=b61379820e0444b725178cfa8b101e455d48e1b0c1470cd85bedd50b16384f9f&w=996" 
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
          src="https://img.freepik.com/free-photo/young-adult-organizing-documents_23-2149396706.jpg?t=st=1708680239~exp=1708683839~hmac=5095cf0cc5902ad5366d4d85b1a2c5e14ab9919105f033905fb4f5cb8c3dc44d&w=996" 
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