import React from 'react';
import ImageAccordion from '../components/ImageAccordion';
import LandingPage from '../components/landingpage';
import Lifecycle from '../components/lifecycle';
import Elements from '../components/elements';
import { Link } from 'react-router-dom';
import pic from '../images/pic.png'
import pic2 from '../images/Lifecycle.webp'

const Home = () => {  
  return (
    <>
    <LandingPage/>
    <div className="flex flex-wrap justify-center items-center">
      {/* Card 1 */}
      <div className="w-full md:w-[350px] mx-2 my-4 bg-white rounded-md overflow-hidden shadow-md">
        <img
          className="w-full h-48 object-cover object-center"
          src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt='Regulatory & Strategy Repository'
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-center">Regulatory & Strategy Repository</h2>
          <p className="text-gray-600 mb-4 text-justify">The Strategy and Regulatory Frameworks is a collection of documents and links that enable you to understand the Ethiopian government's strategy and regulatory frameworks. National strategies and policies and Business regulatory frameworks (such as directives and proclamations) are among some of the documents available for your viewing.</p>
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
          src={pic2}
          alt='Investment Lifecycle'
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-center">Investment Lifecycle</h2>
          <p className="text-gray-600 mb-4 text-justify">ACE Advisors has outlined and broken down investment in Ethiopia into a tri-phased investment cycle, with each phase entailing a specific set of paperwork and processes. In the course of understanding the Ethiopian Investment ecosystem, ACE Advisors can offer you a comprehensive investment guide. </p>
          <Link to='/explore/Investment-Lifecycle'>
          <button
            className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]"
          >
            Read More
          </button>
          </Link>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full md:w-[350px] mx-2 my-4 bg-white rounded-md overflow-hidden shadow-md">
        <img
          className="w-full h-48 object-cover object-center"
          // src="https://images.unsplash.com/photo-1572276037952-478cead56982?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          src={pic}
          alt='Data Repository'
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-center">Data Indicator</h2>
          <p className="text-gray-600 mb-4 text-justify">Investment Data Indicators are a collection of quantitative data indicators pertaining to investments either indirectly or directly. In order to simplify accessibility, navigation, and understanding, ACE organizes the data by year and region and presents findings in the form of comprehensible visualizations (graphs and diagrams).</p>
          <Link to='/explore/data-indicator'>
          <button
            className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]"
          >
            Read More
          </button>
          </Link>
        </div>
      </div>
      {/* Card 4 */}
      <div className="w-full md:w-[350px] mx-2 my-4 bg-white rounded-md overflow-hidden shadow-md">
        <img
          className="w-full h-48 object-cover object-center"
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt='ACE services'
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-center">ACE Services</h2>
          <p className="text-gray-600 mb-4 text-justify">In the course of doing business, you may face the need to seek professional services to assist in various processes. With ACE advisors, prospective investors have access to a wide range of services, from stakeholder analysis to strategy and program design.</p>
          <Link to='/explore/ACE-Services'>
          <button
            className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]"
          >
            Read More
          </button>
          </Link>
        </div>
      </div>
    </div>
    <Lifecycle/>  
    <h1 class="text-[#173e26] text-3xl text-center font-bold pb-[40px]  max-sm:hidden">Data Indicators</h1>
    <ImageAccordion/>
    <h1 class="text-[#173e26] text-3xl text-center font-bold pt-6 pb-[40px]">Regulatory Overview</h1>
    <Elements/>
    </>
  );
};

export default Home;
