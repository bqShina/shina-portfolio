import Link from "next/link";
import React from "react";
import styles from "./NavBar.module.css";

const NarBar = () => {
  return (
    <div className={`navbar bg-base-100 ${styles.navbar}`}>
      <div className="flex-1">
        <Link href="#" className={styles.logo}>
          SHINA QIN
        </Link>
      </div>
      <div className="flex-none">
        <ul className={`menu menu-horizontal px-2 ${styles.navLinks}`}>
          <li>
            <Link href="#">Work</Link>
          </li>
          <li>
            <Link href="#">Tools</Link>
          </li>
          <li>
            <Link href="#">Skills</Link>
          </li>
          <li>
            <Link href="#">Experience</Link>
          </li>
          <li>
            <Link
              href="#"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-base px-8 py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NarBar;
