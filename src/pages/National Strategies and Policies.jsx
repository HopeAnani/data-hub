import React from 'react'
import Accordion from '../components/Accordion'
import sample1 from '../images/Samplepdf.pdf';
import sample2 from '../images/Samplepdf.pdf';
import sample3 from '../images/Samplepdf.pdf';
import sample4 from '../images/Samplepdf.pdf';
import sample5 from '../images/Samplepdf.pdf';
import { Link } from 'react-router-dom';

const Policies = () => {
  const accordionData = [
    {
      title: 'Economy',
      pdfs: [
        { title: 'Sample PDF document 1', downloadLink: sample1 },
        { title: 'Sample PDF document 2', downloadLink: sample2 },
      ],
    },
    {
      title: 'Trade',
      pdfs: [
        { title: '201310 Ethiopias National Agoa Response Strategy Draft', downloadLink: sample3 },
        { title: 'Sample PDF document 4', downloadLink: sample4 },
        { title: 'Sample PDF document 5', downloadLink: sample5 },
      ],
    },
    {
      title: 'Social',
      pdfs: [
        { title: 'Sample PDF document 3', downloadLink: sample3 },
        { title: 'Sample PDF document 4', downloadLink: sample4 },
        { title: 'Sample PDF document 5', downloadLink: sample5 },
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
        National Strategies and Policies
      </h1>
    </div>

    <div className='flex gap-24'>
    
      <div className=' w-full mb-4 '>
      {accordionData.map((accordion, index) => (
        <Accordion key={index} title={accordion.title} pdfs={accordion.pdfs} />
      ))}
      </div>
      <div class="hidden w-4/12 -mx-8 lg:block">
                          <h1 class="mb-4 text-xl font-bold text-[#173e26]">Types</h1>
                          <div class="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                              <ul class="-mx-4">
                                  <li class="flex items-center">
                                    <img src="https://www.flagcolorcodes.com/filter?f=ethiopia&e=waves  "
                                         alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full"/>
                                      <p><Link to="/" class="mx-1 font-bold text-[#173e26] hover:underline">Proclamation</Link>
                                      <span class=" text-sm font-light text-gray-700"> 23 Files</span></p>
                                  </li>
                                  <li class="flex items-center mt-6">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Flag_of_the_Afar_Region.svg/2560px-Flag_of_the_Afar_Region.svg.png"
                                         alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full"/>
                                      <p><Link to="/" class="mx-1 font-bold text-[#173e26] hover:underline">Regulation</Link><span
                                              class="text-sm font-light text-gray-700">82 Files</span></p>
                                  </li>
                                  <li class="flex items-center mt-6">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Flag_of_the_Tigray_Region.svg/1280px-Flag_of_the_Tigray_Region.svg.png"
                                         alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full"/>
                                      <p><Link to="/" class="mx-1 font-bold text-[#173e26] hover:underline">Directives</Link><span
                                              class="text-sm font-light text-gray-700">52 Files</span></p>
                                  </li>
                                  <li class="flex items-center mt-6">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_the_Oromia_Region.svg/2560px-Flag_of_the_Oromia_Region.svg.png"
                                         alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full"/>
                                      <p><Link to="/" class="mx-1 font-bold text-[#173e26] hover:underline">Manual</Link><span
                                              class="text-sm font-light text-gray-700">12 Files</span></p>
                                  </li>
                                  
                              </ul>
                          </div>
                      </div>
    </div>
    </>
  );
}

export default Policies