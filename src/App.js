import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home'
import SearchBar from './components/Searchbar'
import Component from './pages/table'


const App = () => {
  return (
      <div className='block'>
        <Navbar/>
        <SearchBar/>
        <Home/>
        {/* <Component/> */}
        <Footer/>
      </div>
    // document.getElementById('root')
  )
}

export default App