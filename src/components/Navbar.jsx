import React, { useState } from "react";
import {
  AiFillMail,
  AiFillPhone,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import "../styles/nav.css";
import Header from "./Header";
import ace_logo from "../images/ace_logo_white.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className=" bg-[#173e26] sticky top-0 z-50">
      <Header />
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className=" text-2xl font-semibold flex align-middle">
          <img src={ace_logo} className=" w-20" alt="" />{" "}
          <span className="AIDH">
            <span className="text-[45px]"> | </span>ACE Investment Data Hub
          </span>
          <span className="IDH hidden">
            <span className="text-[45px]"> | </span>IDH
          </span>
        </h1>
        <ul className="hidden  md:flex">
          <li className="p-4 list">
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>

          <li className="p-4 list">
            {/* <a href="../pages/explore.jsx">Explore</a> */}
            <Link to="/explore">Explore</Link>
          </li>
          <li className="p-4 list">
            {/* <a href="/">About us</a> */}
            <Link to="/">About us</Link>
          </li>
          <li className="p-4 list">
            <a href="mailto:ananisamuelhope@gmail.com">
              <AiFillMail size={25} />
            </a>

          </li>
          <li className="p-4 list">
            <a href="tel:+251962001111">
              <AiFillPhone size={25} />
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
        <div
          className={
            !nav
              ? "fixed top-[-100%]"
              : "fixed left-0 top-28 w-[100%] bg-gradient-to-b from-[#173e26] h-full ease-in-out duration-500"
          }
        >
          {/* <h1 className='w-[30%] text-3xl font-bold m-4'>ACE IDH</h1> */}
          <ul className={!nav ? "hidden md:flex" : "p-4 text-lg"} onClick={closeNav}>
            <li className="p-4 border-b border-gray-600">
              {/* <a href="/">Home</a> */}
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              {/* <a href="/">Explore</a> */}
              <Link to="/explore">Explore</Link>
            </li>
            <li className="p-4 border-b border-gray-600">
              {/* <a href="/">About us</a> */}
              <Link to="/">About us</Link>
            </li>
            <li className="p-4 border-b border-gray-600 flex">
              <a href="mailto:ananisamuelhope@gmail.com" className="flex">
                <AiFillMail size={25} className=" mr-4"/>
                 Email
              </a>
            </li>
            <li className="p-4">
              <a href="tel:+251962001111" className="flex">
                <AiFillPhone size={25} className=" mr-4" />
                 Phone
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
