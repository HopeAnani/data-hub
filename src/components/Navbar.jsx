import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav (!nav);
    };

  return (
    <div className=' bg-[#173e26]'>
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-[30%] text-3xl font-bold'>ACE IDH</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Regulatory & Strategy Repository</li>
            <li className='p-4'>Investment Life cycle</li>
            <li className='p-4'>Data Repository</li>
            <li className='p-4'>ACE Services</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/> }
        </div>
        <div className={!nav ? 'fixed left-0 top-20 w-[100%] bg-[#173e26]  h-full ease-in-out duration-500': 'fixed top-[-100%]'}>
            {/* <h1 className='w-[30%] text-3xl font-bold m-4'>ACE IDH</h1> */}
            <ul className=' p-4'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>Regulatory & Strategy Repository</li>
                <li className='p-4 border-b border-gray-600'>Investment Life cycle</li>
                <li className='p-4 border-b border-gray-600'>Data Repository</li>
                <li className='p-4'>ACE Services</li> 
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Navbar