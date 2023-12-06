"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Bars4Icon } from '@heroicons/react/24/outline'; // Import the Bars4Icon from Heroicons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle the menu toggle

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        
        {/* Logo and Title */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center hidden md:flex" // Hidden by default, visible on medium and larger screens
        >
          <Image
            src="/skull-logo-white.svg"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin p-3"
          />
          <span className="font-bold ml-[10px] text-gray-300">
            Oswaldo Colon Freites
          </span>
        </a>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden">
          <Bars4Icon className="w-6 h-6 text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
        </div>

        {/* Menu Items for Mobile */}
        {isOpen && (
          <div className="absolute top-[65px] left-0 w-full bg-black text-white p-4">
            <a href="#hero" className="block cursor-pointer">About me</a>
            <a href="#skills" className="block cursor-pointer">Skills</a>
            <a href="#projects" className="block cursor-pointer">Projects</a>
          </div>
        )}

        {/* Original Menu Items (Web) */}
        <div className="hidden md:flex w-[500px] h-full items-center justify-between mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#hero" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
