import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex items-center justify-between m-auto">
        
        {/* Logo Section */}
        <a
          href="#about-me"
          className="flex items-center space-x-2"
        >
          <Image
            src="/logo_nav.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold hidden md:block text-gray-300">
            AslamSadique
          </span>
        </a>

        {/* Nav Links */}
        <div className="hidden md:flex items-center justify-center">
          <div className="flex items-center gap-5 border border-[#7042f861] bg-[#0300145e] px-5 py-2 rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer text-sm">
              About me
            </a>
            <a href="#skills" className="cursor-pointer text-sm">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer text-sm">
              Projects
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer"
              />
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
