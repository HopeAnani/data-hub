import React, { useState, useEffect } from 'react';
import '../styles/landingpage.css';
import SearchBar from './Searchbar';

const LandingPage = () => {
  const slides = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1462899006636-339e08d1844e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGludmVzdG1lbnR8ZW58MHx8MHx8fDA%3D',
      title: 'Investment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corporis amet dolor hic quis ipsa molestiae ipsum blanditiis deserunt nihil voluptas, architecto dolore rerum vel consequuntur nobis, vitae, repudiandae veniam.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Finance',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corporis amet dolor hic quis ipsa molestiae ipsum blanditiis deserunt nihil voluptas, architecto dolore rerum vel consequuntur nobis, vitae, repudiandae veniam.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1682687220795-796d3f6f7000?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D',
      title: 'Technology',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corporis amet dolor hic quis ipsa molestiae ipsum blanditiis deserunt nihil voluptas, architecto dolore rerum vel consequuntur nobis, vitae, repudiandae veniam.',
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
    <div className="img-slide w-full relative h-[500px] overflow-hidden bg-scroll">
      {slides.map((slide, index) => (
        <div
        key={index}
        className={`slide absolute w-full h-48 object-cover object-center ${index === currentSlide ? 'active' : ''}`}
        >
          <img className="z-10 w-full bg-cover" src={slide.imageUrl} alt="" />
          <div className="info absolute top-0 pt-4 pr-8 pb-4 pl-8 object-center justify-center text-justify">
            <SearchBar/>
            <h2 className="text-[45px] uppercase font-extrabold tracking-wider  text-white">{slide.title}</h2>
            <p className=' text-white'>{slide.description}</p>
            <button className="bg-[#173e26] text-white p-2 rounded w-36 hover:bg-[#112e1c] btnn">Know more</button>
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
