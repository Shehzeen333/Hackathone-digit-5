"use client";
import Image from "next/image";
import Link from "next/link";
import user from "@/app/images/Vector (12).png";
import search from "@/app/images/icn settings icn-xs (6).png";
import cart from "@/app/images/icn settings icn-xs (7).png";
import mail from "@/app/images/icn settings icn-xs (8).png";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between items-center px-4 py-2">
        <h3 className="font-Montserrat font-semibold text-[24px]">Bandage</h3>
        <ul className="flex gap-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/pages">Pages</Link></li>
        </ul>
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2">
            <Image src={user} alt="user" width={16} height={16} />
            <span className="font-Montserrat text-[#23A6F0]">Login / Register</span>
          </div>
          <ul className="flex gap-4">
            <li><Image src={search} alt="search" width={16} height={16} /></li>
            <li><Image src={cart} alt="cart" width={16} height={16} /></li>
            <li><Image src={mail} alt="mail" width={16} height={16} /></li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex justify-between items-center px-4 py-2">
        <h3 className="font-Montserrat font-semibold text-[24px]">Bandage</h3>
        <div className="cursor-pointer" onClick={toggleMenu}>
          <div className="w-[24px] h-[2px] bg-black mb-2"></div>
          <div className="w-[24px] h-[2px] bg-black mb-2"></div>
          <div className="w-[24px] h-[2px] bg-black"></div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`${
        isMenuOpen ? "block" : "hidden"
      } absolute top-0 w-full bg-[#252B42] p-4 flex flex-col items-center gap-4`}>
        <ul className="font-Montserrat text-white gap-4 flex flex-col items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/pages">Pages</Link></li>
        </ul>
        <button
          onClick={toggleMenu}
          className="text-white text-[14px] mt-4"
        >
          Close Menu
        </button>
      </div>
    </div>
  );
}

