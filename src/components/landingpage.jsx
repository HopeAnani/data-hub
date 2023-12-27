import React, { useState, useEffect } from 'react';
import '../styles/landingpage.css';
import SearchBar from './Searchbar';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const slides = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1462899006636-339e08d1844e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D',
      title: 'IDH',
      description: 'The IDH functions as a one-stop shop that caters to anyone in the investment ecosystem (both foreign and domestic) looking to invest in Ethiopia. ACE Advisors collects and provides an extensive range of resources such as documents, data sheets, hyperlinks, and service offerings pertaining to investment in Ethiopia.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1462899006636-339e08d1844e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D',
      title: 'IDH',
      description: 'The IDH functions as a one-stop shop that caters to anyone in the investment ecosystem (both foreign and domestic) looking to invest in Ethiopia. ACE Advisors collects and provides an extensive range of resources such as documents, data sheets, hyperlinks, and service offerings pertaining to investment in Ethiopia.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1462899006636-339e08d1844e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D',
      title: 'IDH',
      description: 'The IDH functions as a one-stop shop that caters to anyone in the investment ecosystem (both foreign and domestic) looking to invest in Ethiopia. ACE Advisors collects and provides an extensive range of resources such as documents, data sheets, hyperlinks, and service offerings pertaining to investment in Ethiopia.',
    },
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const manualNav = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // Auto slide every 3.5 seconds (adjust the interval as needed)
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3500);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="img-slide w-full relative h-[500px] overflow-hidden flex bg-scroll">
      {slides.map((slide, index) => (
        <div
        key={index}
        className={`slide absolute w-full h-48 object-cover object-center ${index === currentSlide ? 'active' : ''}`}
        >
          <img className="z-10 w-full bg-cover" src={slide.imageUrl} alt="" />
          <div className="info absolute top-0 pt-4 pr-8 pb-4 pl-8 object-center justify-center text-justify">
            <SearchBar/>
            <h2 className="text-[45px] uppercase font-extrabold tracking-wider  text-white">{slide.title}</h2>
            <p className='text-white'>{slide.description}</p>
            <Link to='/searchresult'><button className="bg-[#173e26] text-white p-2 rounded w-36 hover:bg-[#112e1c] btnn">Know more</button></Link>
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
