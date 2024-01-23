import React from 'react'
import '../styles/imageAccordion.css'
import { Link } from 'react-router-dom'

const ImageAccordion = () => {
  return (
    <div className="bodyy">
    <div className='containerr'>
        <div className="single">
            <div className="content justify-center">
                <h2>Economy</h2>
                <p className='text-justify'>This category provides core economic indicators such as GDP, inflation, interest rates, consumption, production, employment, and other metrics that depict the overall economic health and performance of a nation for analyzing economic trends.</p>
                <Link to='/explore/data-repository/Economy'>
                <button className="bg-[#173e26] text-white p-2 rounded w-26 hover:bg-[#112e1c]">Know More</button>
                </Link>
            </div>
        </div>
        <div className="single">
            <div className="content">
                <h2>Infrastructure</h2>
                <p className='text-justify'>This category provides data on a country's basic physical structures like roads, railways, airports, and communications that facilitate economic activity and development for transportation and connectivity.</p>
                <Link to='/explore/data-repository/Infrastructure'>
                <button className="bg-[#173e26] text-white p-2 rounded w-26 hover:bg-[#112e1c]">Know More</button>
                </Link>
            </div>
        </div>
        <div className="single">
            <div className="content">
                <h2>Social</h2>
                <p className='text-justify'>This category provides social development factors including demographics, health, education, poverty rates, and other welfare aspects that influence living standards and quality of life for understanding societal conditions.</p>
                <Link to='/explore/data-repository/Social'>
                <button className="bg-[#173e26] text-white p-2 rounded w-26 hover:bg-[#112e1c]">Know More</button>
                </Link>
            </div>
        </div>
        <div className="single">
            <div className="content">
                <h2>Investment</h2>
                <p className='text-justify'>This category provides foreign direct investment, portfolio investment flows, investment policy and business climate readings that provide insights into a location's investment attractiveness and potential for evaluating investment opportunities.</p>
                <Link to='/explore/data-repository/Investment'>
                <button className="bg-[#173e26] text-white p-2 rounded w-26 hover:bg-[#112e1c]">Know More</button>
                </Link>
            </div>
        </div>
        <div className="single">
            <div className="content">
                <h2>Trade</h2>
                <p className='text-justify'>This category provides trade statistics like export and import volumes by product, trade balances, main trading partners, and trade policy indicators that shed light on a country's integration into global trade networks for assessing trade relations.</p>
                <Link to='/explore/data-repository/Trade'>
                <button className="bg-[#173e26] text-white p-2 rounded w-26 hover:bg-[#112e1c]">Know More</button>
                </Link>
            </div>
        </div>
        <div className="single">
            <div className="content">
                <h2>Doing Business</h2>
                <p className='text-justify'>This category provides quantitative indicators reflecting the regulations that apply to both small and medium-sized companies and large companies through their lifecycle for starting and operating a local business.</p>
                <Link to='/explore/data-repository/Doing-Business'>
                <button className="bg-[#173e26] text-white p-2 rounded w-26 hover:bg-[#112e1c]">Know More</button>
                </Link>
            </div>
        </div>
    </div>
    </div>


   
  )
}

export default ImageAccordion