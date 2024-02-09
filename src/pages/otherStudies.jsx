import React from 'react'
import Accordion from '../components/Accordion'
import sample1 from '../images/Samplepdf.pdf';
import sample2 from '../images/Samplepdf.pdf';
import sample3 from '../images/Samplepdf.pdf';
import sample4 from '../images/Samplepdf.pdf';
import sample5 from '../images/Samplepdf.pdf';


const Studies = () => {
  const accordionData = [
    {
      title: 'Economy',
      pdfs: [
        { title: 'Sample PDF document 1', downloadLink: sample1, isFree:true },
        { title: 'Sample PDF document 2', downloadLink: sample2, isFree:false },
      ],
    },
    {
      title: 'Trade',
      pdfs: [
        { title: '201310 Ethiopias National Agoa Response Strategy Draft', downloadLink: sample3, isFree:true },
        { title: 'Sample PDF document 4', downloadLink: sample4, isFree:true },
        { title: 'Sample PDF document 5', downloadLink: sample5, isFree:false },
      ],
    },
    {
      title: 'Social',
      pdfs: [
        { title: 'Sample PDF document 3', downloadLink: sample3, isFree:true },
        { title: 'Sample PDF document 4', downloadLink: sample4, isFree:true },
        { title: 'Sample PDF document 5', downloadLink: sample5, isFree:true },
      ],
    },
    {
      title: 'Investment',
      pdfs: [
        { title: 'Sample PDF document 3', downloadLink: sample3 },
        { title: 'Sample PDF document 4', downloadLink: sample4 },
        { title: 'Sample PDF document 5', downloadLink: sample5 },
      ],
    },
    {
      title: 'Infrastructure',
      pdfs: [
        { title: 'Sample PDF document 3', downloadLink: sample3 },
        { title: 'Sample PDF document 4', downloadLink: sample4 },
        { title: 'Sample PDF document 5', downloadLink: sample5 },
      ],
    },
    {
      title: 'Doing Buisness',
      pdfs: [
        { title: 'Sample PDF document 3', downloadLink: sample3 },
        { title: 'Sample PDF document 4', downloadLink: sample4 },
        { title: 'Sample PDF document 5', downloadLink: sample5 },
      ],
    },
    // Add more accordion data as needed
  ];

  return (
    <>
    <div className='ml-4 md:ml-12 mb-4 md:mb-10'>
      <h1 className='text-2xl md:text-5xl font-semibold leading-tight text-[#173e26]'>
        Other Studies
      </h1>
    </div>

    <div className='flex gap-24'>
    
      <div className=' w-full mb-4 '>
      {accordionData.map((accordion, index) => (
        <Accordion key={index} title={accordion.title} pdfs={accordion.pdfs} />
      ))}
      </div>
 
    </div>
    </>
  );
}

export default Studies