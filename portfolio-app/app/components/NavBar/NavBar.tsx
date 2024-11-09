import Link from "next/link";
import React from "react";
import styles from "./NavBar.module.css";
import { Wix_Madefor_Display } from "next/font/google";

const wix = Wix_Madefor_Display({
  subsets: ["latin"],
  weight: ["700"],
});

const NarBar = () => {
  return (
    <nav className={`navbar py-8 bg-base-100 ${styles.navbar}`}>
      <div className="flex-1">
        <Link href="/" className={wix.className}>
          SHINA QIN
        </Link>
      </div>
      <div className="flex-none">
        <ul className={`menu menu-horizontal px-2 ${styles.nav_links}`}>
          <li>
            <Link href="/#projects">Work</Link>
          </li>
          {/* <li>
            <Link href="#">Experience</Link>
          </li> */}
          <li>
            <Link href="/#skills">Skills</Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:bg-gray-900 focus:text-white font-medium rounded-full  px-9 py-3 transition duration-200 hover:scale-95 ml-2"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NarBar;
