import React, { useState, useEffect } from 'react';
import '../styles/landingpage.css';
import SearchBar from './Searchbar';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const slides = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1462899006636-339e08d1844e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D',
      title: 'ACE Data Hub',
      description: 'The ADH functions as a one-stop shop that caters to anyone in the investment ecosystem (both foreign and domestic) looking to invest in Ethiopia. ACE Advisors collects and provides an extensive range of resources such as documents, data sheets, hyperlinks, and service offerings pertaining to investment in Ethiopia.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1575959508154-1fab18d1338b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Investment Insights',
      description: 'ACE Advisors has outlined and broken down investment in Ethiopia into a tri-phased investment cycle, with each phase entailing a specific set of paperwork and processes. In the course of understanding the Ethiopian Investment ecosystem, ACE Advisors can offer you a comprehensive investment guide.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Our Offerings',
      description: 'Our repository contains a variety of data types to assist those looking to understand investment in Ethiopia. You will find strategy and regulatory documents, quantitative indicators, a guide for the different phases of investment, and we offer services to help with certain processes along the way.',
    },
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const manualNav = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // Auto slide every 4.5 seconds (adjust the interval as needed)
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4500);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    
    <div className="img-slide w-full relative h-[500px] overflow-hidden flex bg-scroll">
      <div className="search-bar-container absolute z-20 w-full">
        <SearchBar />
      </div>
      {slides.map((slide, index) => (
        <div
        key={index}
        className={`slide absolute w-full h-full object-cover object-center ${index === currentSlide ? 'active' : ''}`}
        >
          <img className="z-10 w-full md:h-auto h-full object-cover bg-cover" src={slide.imageUrl} alt="" />
          <div className="info absolute top-0 pt-4 pr-8 pb-4 pl-8 object-center justify-center text-justify">
            {/* <SearchBar/> */}
            <h2 className="text-[45px] md:mt-40 mt-32 uppercase font-extrabold tracking-wider  text-white">{slide.title}</h2>
            <p className='text-white'>{slide.description}</p>
            <Link to='/explore'><button className="bg-[#173e26] text-white p-2 rounded w-36 hover:bg-[#112e1c] btnn">Know more</button></Link>
          </div>
        </div>
      ))}
      <div className="navigation">
        {slides.map((_, index) => (
          <div key={index} className={`btn ${index === currentSlide ? 'active' : ''}`} onClick={() => manualNav(index)}></div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
