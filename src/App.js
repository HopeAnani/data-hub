import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/Searchbar'
import Header from './components/Header'
import Home from './pages/home'


const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <SearchBar/>
      <Footer/>
      <Home/>
    </div>
  )
}

export default App