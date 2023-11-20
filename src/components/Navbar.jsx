import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import '../styles/nav.css'
import Header from './Header'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav (!nav);
    };

  return (
    <div className=' bg-[#173e26] sticky top-0 z-40'>
        <Header/>
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-[30%] text-3xl font-bold'>ACE IDH</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 list'><a href="/">Home</a></li>
            <li className='p-4 list'><a href="/">Regulatory & Strategy Repository</a></li>
            <li className='p-4 list'><a href="/">Investment Life cycle</a></li>
            <li className='p-4 list'><a href="/">Data Repository</a></li>
            <li className='p-4 list'><a href="/">ACE Services</a></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ?<AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>  }
        </div>
        <div className={!nav ?'fixed top-[-100%]': 'fixed left-0 top-28 w-[100%] bg-[#173e26]  h-full ease-in-out duration-500'}>
            {/* <h1 className='w-[30%] text-3xl font-bold m-4'>ACE IDH</h1> */}
            <ul className=' p-4'>
                <li className='p-4 border-b border-gray-600'><a href="/">Home</a></li>
                <li className='p-4 border-b border-gray-600'><a href="/">Regulatory & Strategy Repository</a></li>
                <li className='p-4 border-b border-gray-600'><a href="/">Investment Life cycle</a></li>
                <li className='p-4 border-b border-gray-600'><a href="/">Data Repository</a></li>
                <li className='p-4'><a href="/">ACE Services</a></li> 
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar