'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import {MdKeyboardArrowDown} from "react-icons/md"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   <div className='m-auto md:container'>
     <nav className="flex items-center justify-between px-6 py-4 text-white">
      {/* Logo */}
      <div className="flex items-center">
       <Image alt='logo' width={20} height={20} src='/images/logo.png'></Image>
        <span className="ml-2 text-lg font-semibold">Landguru</span>
      </div>

      {/* Centered Links */}
      <div className="justify-center flex-grow hidden md:flex">
        <a href="#" className="relative px-4 py-2 hover:text-gray-400">
          Home
        </a>
        <a href="#" className="relative px-4 py-2 hover:text-gray-400">
          Adversite <span className='absolute top-3'><MdKeyboardArrowDown/></span>
        </a>
        <a href="#" className="relative px-4 py-2 hover:text-gray-400">
          Supports <span className='absolute top-3'><MdKeyboardArrowDown/></span>
        </a>
        <a href="#" className="relative px-4 py-2 hover:text-gray-400">
          Contact <span className='absolute top-3'><MdKeyboardArrowDown/></span>
        </a>
      </div>

      {/* Button */}
      <button className="px-4 py-2 text-white border rounded-full hover:cursor-pointer font-sm hover:bg-blue-600">
        Get Started
      </button>

      {/* Mobile menu button */}
      <div className="flex items-center md:hidden">
        <button
          onClick={toggleMenu}
          className="outline-none mobile-menu-button"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 py-2 bg-gray-800 md:hidden top-full">
          <div className="flex flex-col items-center">
            <a
              href="#"
              className="px-4 py-2 text-white hover:text-gray-300"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="#"
              className="px-4 py-2 text-white hover:text-gray-300"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="#"
              className="px-4 py-2 text-white hover:text-gray-300"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#"
              className="px-4 py-2 text-white hover:text-gray-300"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
   </div>
  );
};

export default Navbar;
