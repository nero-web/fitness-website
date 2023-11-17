/** @format */

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import myLogo from "../assets/F-logo.png";
import { Link as ScrollLink } from "react-scroll";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const links1 = [
    { to: "/", label: "Home" },
  ];

  const links2 = [
    { to: "/products", label: "Products" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <div className='bg-transparent flex w-full justify-center items-center h-20 md:px-20 xsm:px-5 z-30 text-black absolute'>
        <div className='w-full max-w-[1300px] flex justify-between items-center'>
          <div>
            <img className='w-16 h-16' src={myLogo} alt='myLogo' />
          </div>
          <ul className='hidden md:flex'>
            {links1.map((link, index) => (
              <Link to={link.to} key={index}>
                <li
                  className="p-4 text-lg transition duration-300 hover:text-white">
                  {link.label}
                </li>
              </Link>
            ))}
            <ScrollLink to="about" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-white">
              <li className="p-4 text-lg transition duration-300">About</li>
            </ScrollLink>
            {links2.map((link, index) => (
              <Link to={link.to} key={index}>
                <li
                  className="p-4 text-lg transition duration-300 hover:text-white">
                  {link.label}
                </li>
              </Link>
            ))}
          </ul>
          {/* Hamburger */}
          <div onClick={handleNav} className='md:hidden po'>
            {nav ? (
              ''
            ) : (
              <HiOutlineMenuAlt4 size={25} />
            )}
          </div>

          {/* Mobile menu dropdown */}
        </div>
      </div>
      <div
        onClick={handleNav}
        style={{
          color: "black",
          transition: "transform 1s",
          transform: nav ? "translateY(0%)" : "translateX(-100%)",
          opacity: 1,
        }}
        className={
          nav
            ? "h-full z-40 fixed left-0 top-0 w-[80%] bg-black px-4 flex flex-col rounded-r-[30px] drop-shadow-lg"
            : "absolute left-[-100%]"
        }>
        <div className="flex justify-between w-full mt-1  items-center">
          <img className='w-16 h-16' src={myLogo} alt='myLogo' />
          <AiOutlineClose className='text-white' size={25} />
        </div>
        <ul className='text-center relative top-[20%]'>
          {links1.map((link, index) => (
            <Link to={link.to} key={index}>
              <li
                className="p-4 text-3xl font-primary text-white">
                {link.label}
              </li>
            </Link>
          ))}
          <ScrollLink to="about" spy={true} smooth={true} duration={500} onClick={handleNav}>
              <li className="p-4 text-3xl font-primary text-white cursor-pointer">About</li>
            </ScrollLink>
            {links2.map((link, index) => (
            <Link to={link.to} key={index}>
              <li
                className="p-4 text-3xl font-primary text-white">
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
