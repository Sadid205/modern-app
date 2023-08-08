"use client";
import { FaBars } from "react-icons/fa";

import React, { useState } from "react";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/home" },
    { name: "Adversite", link: "/testimonial" },
    { name: "Supports", link: "/function" },
    { name: "Contact", link: "/question" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-50 w-full shadow-md md:bg-transparent blueColor">
      <div className="items-center justify-between py-4 md:flex md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl">
            <img src="/images/NavLogo.png" alt="navlogo" />
          </span>
          <h1 className="ml-2">Landguru</h1>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute text-3xl cursor-pointer right-8 top-6 md:hidden"
        >
          <FaBars />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-transparent bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="text-xl md:ml-8 md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 duration-500 hover:text-gray-400"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="px-4 py-2 text-sm text-white bg-blue-900 border rounded-full md:hidden">
            Get Started
          </button>
        </ul>
        <div >
        <button className="hidden px-4 py-2 text-sm text-white border rounded-full md:block">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
