import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home'
import SearchBar from './components/Searchbar'
import LandingPage from './components/landingpage'

const App = () => {
  return (
      <div className='block'>
        <Navbar/>
        <LandingPage/>
        <SearchBar/>
        <Home/>
        <Footer/>
      </div>
  )
}

export default App