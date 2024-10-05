import Link from "next/link";
import React from "react";
import styles from "./NavBar.module.css";

const NarBar = () => {
  return (
    <div className="navbar bg-base-100 px-52">
      <div className="flex-1">
        <Link href="#" className={styles.logo}>
          Shina Qin
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
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
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NarBar;
