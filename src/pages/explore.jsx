import React from 'react'
import Sidebar from '../components/sidebar'
import Sidecarddata from '../components/sidecarddata'
import SearchBar from '../components/Searchbar'

const Explore = () => {
  return (
    <>
    <div className='w-[100%] clear-both h-max'>
      
      <div className='w-[80%] float-left'>
        <SearchBar/>
        <Sidecarddata/>
      </div>
      <div className='w-[20%] float-right'><Sidebar/></div>
      
    </div>
    </>
  )
}

export default Explore