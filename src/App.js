import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home'
import About from "./pages/about";
import Explore from "./pages/explore";
import { Routes, Route } from "react-router-dom";
// import SearchBar from './components/Searchbar';

const App = () => {
  return (
      <div className='block'>
        <Navbar/>
        {/* <SearchBar/> */}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/about" element={<About />} />
          </Routes>
        <Footer/>
      </div>
  )
}

export default App