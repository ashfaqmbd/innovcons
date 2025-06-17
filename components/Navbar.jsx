"use client";

import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Image from "next/image";
import Logo from "../images/Innovate-Logo-png.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white sticky top-0 z-10 shadow-lg">
      <div className="h-23 flex justify-between items-center ">
        <div className="w-35 h-35 p-7 ">
          <Image src={Logo} alt="logo" />
        </div>

        {/* <div className="text-[#132244] font-bold text-3xl mx-4 leading-3 tracking-tight ">
          INNOVATE <span className="block text-lg text-center tracking-widest text-red-500 ">CONSULTING</span>
        </div> */}
        <div className="hidden sm:block">
          <a
            href="#about"
            className="text-gray-600 text-sm px-4 hover:text-red-500"
          >
            About US
          </a>
          <a
            href="#destinations"
            className="text-gray-600 text-sm px-4 hover:text-red-500"
          >
            Destinations
          </a>
          <a
            href="#ielts"
            className="text-gray-600 text-sm px-4 hover:text-red-500"
          >
            IELTS
          </a>
          <a
            href="#services"
            className="text-gray-600 text-sm px-4 hover:text-red-500"
          >
            Services
          </a>
          <a
            href="#faq"
            className="text-gray-600 text-sm px-4 hover:text-red-500"
          >
            FAQs
          </a>
          <button className="text-sm font-semibold p-3 rounded-lg text-white bg-blue-950 mx-4 xsm:hidden">
            Virtual Consultation
          </button>
        </div>
          <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="block sm:hidden px-4 text-3xl text-gray-500"
        >
                  <CiMenuBurger />
        </button>
      </div>  
      

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden bg-gray-100 space-y-2 pb-3`}
      >
        <a
          href=""
          className="text-gray-600  text-sm pt-4 px-4 block hover:text-red-500 "
        >
          About US
        </a>
        <a
          href=""
          className="text-gray-600 text-sm px-4 block hover:text-red-500"
        >
          Destinations
        </a>
        <a
          href=""
          className="text-gray-600 text-sm px-4 block hover:text-red-500 "
        >
          IELTS
        </a>
        <a
          href=""
          className="text-gray-600 text-sm px-4 block hover:text-red-500 "
        >
          Services
        </a>
        <a
          href=""
          className="text-gray-600 text-sm px-4 block hover:text-red-500"
        >
          FAQs
        </a>
      </div>
    </nav>
  );
}
