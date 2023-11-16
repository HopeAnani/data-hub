import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/Searchbar'
import Header from './components/Header'
import AdvancedFilter from './components/Filter'

const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <SearchBar/>
      <AdvancedFilter/>
      <Footer/>
    </div>
  )
}

export default App