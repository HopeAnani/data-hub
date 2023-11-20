import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home'
import SearchBar from './components/Searchbar'


const App = () => {
  return (
      <div className='block'>
        <Navbar/>
        <SearchBar/>
        <Home/>
        <Footer/>
      </div>
    // document.getElementById('root')
  )
}

export default App