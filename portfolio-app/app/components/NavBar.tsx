"use client";
import Link from "next/link";
import { Wix_Madefor_Display } from "next/font/google";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from "react";

const wix = Wix_Madefor_Display({
  subsets: ["latin"],
  weight: ["700"],
});

const NarBar = () => {
  const navLinks = [
    { name: "Work", url: "/#projects" },
    { name: "Skills", url: "/#skills" },
    { name: "Practices", url: "/#practices" },
    { name: "About", url: "/#about" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="items-center w-[100%] px-[10%] py-4 bg-white/60 backdrop-blur-md fixed top-0 text-base z-10 transition-all duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <Link href="/" className={wix.className}>
            SHINA QIN
          </Link>
        </div>

        {/* Menu (Hidden on mobile, visible on larger screens) */}
        <ul className="lg:flex px-2 text-base items-center space-x-7 hidden">
          {navLinks.map((navLink) => (
            <li key={navLink.url} className="hover-nav-link">
              <Link href={navLink.url}>{navLink.name}</Link>
            </li>
          ))}
          <li>
            <Link
              href="/resume.pdf"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white font-medium rounded-full  px-9 py-3 transition duration-200 hover:scale-95 ml-2"
            >
              Resume
            </Link>
          </li>
        </ul>

        <button
          className="text-[35px] lg:hidden inline-block"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <HiOutlineMenuAlt4 />
        </button>
      </div>

      {menuOpen && (
        <ul className="lg:hidden flex flex-col justify-center space-y-10 mt-8 mb-3">
          {navLinks.map((navLinks) => (
            <li key={navLinks.url} className="text-xl inline-block text-center">
              <Link href={navLinks.url}>{navLinks.name}</Link>
            </li>
          ))}

          <Link
            href="/resume.pdf"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white font-medium rounded-full  px-9 py-3 transition duration-200 hover:scale-95 ml-2 inline-block text-center"
          >
            Resume
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default NarBar;
