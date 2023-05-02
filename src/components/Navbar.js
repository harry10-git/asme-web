import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "./assets/asme-logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="flex justify-between items-center h-28 max-w-[1240px] mx-auto px-4 text-white mt-16">
        {/* <h1 className='w-full text-5xl font-bold text-[#00df9a]'></h1> */}
        <div
          className="max-w-[150px] ml-16"
          // data-aos="flip-right"
          // data-aos-duration="1500"
          // data-aos-delay="100"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        {/* <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul> */}
        <p className="text-white text-3xl font-light">
          Welcome the official page of{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-500">
            ASME Manipal.
          </span>{" "}
        </p>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">ASME</h1>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
