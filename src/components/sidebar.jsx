// Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebar.css'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

const Sidebar = () => {
    // State to track the visibility of submenus
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  // Function to toggle the visibility of submenus
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };
  return (
    <nav className='sidebar'>
        <div className='sideText'>Side Menu</div>
        <ul className='list-none'>
            <li>
                <Link to="">Regulatory & Strategy<AiFillCaretDown className='inline caret'/></Link>
                
                    <ul>
                        <li>
                            <Link to="">Regulatory Repository</Link>
                        </li>
                        <li>
                            <Link to="">Strategy Repository</Link>
                        </li>
                    </ul>
                
            </li>
            <li>
                <Link to="">Investment Lifecycle<AiFillCaretDown className='inline caret'/></Link>
                <ul>
                    <li>
                        <Link to="">Pre-implementation</Link>
                    </li>
                    <li>
                        <Link to="">Implementation</Link>
                    </li>
                    <li>
                        <Link to="">Operating</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="">Data Repository<AiFillCaretDown className='inline caret'/></Link>
                <ul>
                    <li>
                        <Link to="">Economy</Link>
                    </li>
                    <li>
                        <Link to="">Trade</Link>
                    </li>
                    <li>
                        <Link to="">Social</Link>
                    </li>
                    <li>
                        <Link to="">Investment</Link>
                    </li>
                    <li>
                        <Link to="">Infrastructure</Link>
                    </li>
                    <li>
                        <Link to="">Doing Buisness</Link>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="">Ace Services</Link>
            </li>
        </ul>
    </nav>
  );
};

export default Sidebar;
