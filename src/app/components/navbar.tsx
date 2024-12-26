"use client";
import Image from "next/image";
import Link from "next/link";  // Import Link from Next.js
import user from "@/app/images/Vector (12).png";
import search from "@/app/images/icn settings icn-xs (6).png";
import cart from "@/app/images/icn settings icn-xs (7).png";
import mail from "@/app/images/icn settings icn-xs (8).png";
import { useState } from "react"; // Import useState for toggling hamburger menu

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state on hamburger click
  };

  return (
    // <div className="lg:w-[1437px] lg:h-[58px] w-full h-[532px] lg:absolute lg:top-[70px]">
    //   <div className="absolute left-[38px] flex items-center gap-[10px]">
    //     <h3 className="font-Montserrat font-semibold leading-[32px] text-[24px] sm:hiddden">Bandage</h3>
    //   </div>

    //   {/* Desktop Menu */}
    //   <div className="w-[1155px] h-[58px] absolute left-[265px] hidden lg:block">
    //     <div className="w-[361px] h-[25px] absolute top-[20.5px] flex gap-[15px]">
    //       <ul className="font-Montserrat font-semibold text-[14px] text-[#737373] gap-[15px] leading-[24px] flex justify-center">
    //         <li><Link href="/">Home</Link></li>
    //         <li><Link href="/shop">Shop</Link></li>
    //         <li><Link href="/about">About</Link></li>
    //         <li><Link href="/blog">Blog</Link></li>
    //         <li><Link href="/contact">Contact</Link></li>
    //         <li><Link href="/pages">Pages</Link></li>
    //       </ul>
    //     </div>

    //     {/* Login / Register section */}
    //     <div className="w-[324px] h-[54px] absolute top-[2px] left-[832px] flex justify-between items-center">
    //       <div className="w-[166px] h-[54px] p-[15px] flex items-center gap-[5px]">
    //         <div className="w-[12px] h-[12px] mt-[6px]">
    //           <Image src={user} alt="user" width={12} height={12} />
    //         </div>
    //         <span className="w-[119px] h-[24px] font-Montserrat font-semibold text-[14px] leading-[24px] text-[#23A6F0]">
    //           Login / Register
    //         </span>
    //       </div>

    //       {/* Icons section */}
    //       <ul className="flex gap-[15px] items-center">
    //         <li>
    //           <Image src={search} alt="search" width={16} height={16} />
    //         </li>
    //         <li>
    //           <Image src={cart} alt="cart" width={16} height={16} />
    //         </li>
    //         <li>
    //           <Image src={mail} alt="mail" width={16} height={16} />
    //         </li>
    //       </ul>
    //     </div>
    //   </div>

    //   {/* Mobile Menu */}
    //   <div className="lg:hidden w-full flex items-center justify-between p-4">
    //     {/* Logo */}
    //     <h3 className="font-Montserrat font-semibold leading-[32px] text-[24px]">Bandage</h3>

    //     {/* Hamburger Icon */}
    //     <div className="cursor-pointer" onClick={toggleMenu}>
    //       <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
    //       <div className="w-[24px] h-[2px] bg-black mb-[5px]"></div>
    //       <div className="w-[24px] h-[2px] bg-black"></div>
    //     </div>
    //   </div>

    //   {/* Mobile Menu Content */}
    //   <div
    //     className={`${
    //       isMenuOpen ? "block" : "hidden"
    //     } absolute bottom-0 w-full bg-[#252B42] p-4 flex flex-col items-center gap-4`}
    //   >
    //     <ul className="font-Montserrat font-semibold text-[14px] text-white leading-[24px] gap-4 flex flex-col items-center">
    //       <li><Link href="/">Home</Link></li>
    //       <li><Link href="/shop">Shop</Link></li>
    //       <li><Link href="/about">About</Link></li>
    //       <li><Link href="/blog">Blog</Link></li>
    //       <li><Link href="/contact">Contact</Link></li>
    //       <li><Link href="/pages">Pages</Link></li>
    //     </ul>

    //     {/* Close button */}
    //     <button
    //       onClick={toggleMenu}
    //       className="text-white font-Montserrat text-[14px]"
    //     >
    //       Close Menu
    //     </button>
    //   </div>
    // </div>
     <nav className="bg-white text-[#252B42] py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side: Logo */}
        <div className="text-4xl font-bold">
          <a href="#" className="hover:text-[#252B42]">Bandage</a>
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex space-x-8 text-[#737373] font-bold">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Shop</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Blog</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
          <a href="#" className="hover:text-gray-400">Pages</a>
        </div>

        {/* Right Side: Login/Register and Icons */}
        <div className="flex items-center space-x-4 ml-8"> {/* Added margin-left to push right */}
          {/* Login Icon */}
          <FiUser className="text-lg" />
          {/* Login and Register Links */}
          <div className="flex items-center space-x-2 text-[#23A6F0] font-bold ml-6">
            <a href="#" className="hover:text-gray-400">Login</a>
            <span className="text-gray-500">/</span>
            <a href="#" className="hover:text-gray-400">Register</a>
          </div>

          {/* Icons with individual divs */}
          <div className="w-[46px] h-[46px] flex justify-center items-center ml-4">
            <CiSearch className="text-lg text-[#23A6F0]" />
          </div>
          <div className="w-[46px] h-[46px] flex justify-center items-center ml-4">
            <RiShoppingCart2Line className="text-lg text-[#23A6F0]" />
            <span className="text-[#23A6F0] px-[5px]">1</span> 
          </div>
          <div className="w-[46px] h-[46px] flex justify-center items-center ml-4">
            <FaRegHeart className="text-lg text-[#23A6F0]" />
            <span className="text-[#23A6F0] px-[5px]">1</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
