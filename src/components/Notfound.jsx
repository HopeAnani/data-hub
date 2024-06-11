import React, { useState, useEffect } from 'react'
//import Soon from '../images/Under Construction.svg'

const Notfound = () => {
  const [under, setUnder] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch('/overview/notfound');
        let data = await response.json();
    
        setUnder(data);
      } catch (error) {
        console.error('Error fetching overviews:', error);
      }
    };
    fetchData();
    
  }, []);
  return (
    <div>
    {under.map((item, index) => (
      <div key={index} className='w-screen min-h-screen flex items-center justify-center'>
      <img src={item.svg_file} alt={`SVG ${index}`} className='w-full h-auto sm:w-3/5 sm:h-auto' />
  </div>
  
    ))}
  </div>
  )
    }
export default Notfound