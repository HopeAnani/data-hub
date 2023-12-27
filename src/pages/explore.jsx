import React from 'react'
import Sidebar from '../components/sidebar'
import SearchBar from '../components/Searchbar'
import '../styles/explore.css'

const Explore = () => {
  return (
    <>
    <div className='w-[100%] clear-both h-max'>
      
      <div className='w-[80%] float-left container sidediv'>
        <SearchBar/>
        {/* <FlipBook/> */}
      </div>
      <div className='w-[20%] float-right sidenav'><Sidebar/></div>
      
    </div>
    </>
  )
}

export default Explore