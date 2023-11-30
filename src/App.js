import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home'

const App = () => {
  return (
      <div className='block'>
        <Navbar/>
        {/* <SearchBar/> */}
        <Home/>
        <Footer/>
      </div>
  )
}

export default App