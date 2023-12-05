import React from 'react';
import ImageAccordion from '../components/ImageAccordion';
import CardList from '../components/cardList';
import LandingPage from '../components/landingpage';
import SearchBar from '../components/Searchbar';

const Home = () => {
  return (
    <>
    <LandingPage/>
    <SearchBar/>
    <div className="flex flex-wrap justify-center items-center">
      {/* Card 1 */}
      <div className="w-full md:w-[350px] mx-2 my-4 bg-white rounded-md overflow-hidden shadow-md">
        <img
          className="w-full h-48 object-cover object-center"
          src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt='Investment'
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">Regulatory & Strategy Repository</h2>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam illum unde tempore voluptas? Neque eius accusamus, atque laboriosam quidem, numquam veniam deserunt, modi iure optio obcaecati nihil minima at quae?</p>
          <button
            className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]"
          >
            Click me
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full md:w-[350px] mx-2 my-4 bg-white rounded-md overflow-hidden shadow-md">
        <img
          className="w-full h-48 object-cover object-center"
          src="https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt='Economy'
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">Investment Lifecycle</h2>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis similique modi libero! Itaque et praesentium ut corporis rem error natus laudantium vitae hic, officia, ex dicta, inventore autem nemo iste.</p>
          <button
            className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]"
          >
            Click me
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full md:w-[350px] mx-2 my-4 bg-white rounded-md overflow-hidden shadow-md">
        <img
          className="w-full h-48 object-cover object-center"
          src="https://images.unsplash.com/photo-1572276037952-478cead56982?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt='Economy'
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">Data Repository</h2>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut consequuntur expedita adipisci blanditiis nemo quos sed deleniti illum saepe rem voluptatem earum repellendus aliquid aperiam dolorum tenetur, fugiat veniam?</p>
          <button
            className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]"
          >
            Click me
          </button>
        </div>
      </div>
      {/* Card 4 */}
      <div className="w-full md:w-[350px] mx-2 my-4 bg-white rounded-md overflow-hidden shadow-md">
        <img
          className="w-full h-48 object-cover object-center"
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt='Economy'
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">Ace Services</h2>
          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut consequuntur expedita adipisci blanditiis nemo quos sed deleniti illum saepe rem voluptatem earum repellendus aliquid aperiam dolorum tenetur, fugiat veniam?</p>
          <button
            className="bg-[#173e26] text-white p-2 rounded w-24 hover:bg-[#112e1c]"
          >
            Click me
          </button>
        </div>
      </div>
    </div>
    <ImageAccordion/>
    <CardList/>
    </>
  );
};

export default Home;
