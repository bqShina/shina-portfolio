import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white rounded-tl-[64px] rounded-tr-[64px] px-7 py-5">
      <div>
        <div className="flex">
          <p>Follow me on other channels</p>
          <Link href="">Github</Link>
          <Link href="">LinkedIn</Link>
        </div>
        <div></div>
        <div className="flex">
          <div>
            <p>Navigation</p>
            <ul>
              <li>Home</li>
              <li>Work</li>
              <li>Skills</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p>Projects</p>
            <ul>
              <li>Project 1</li>
              <li>Project 2</li>
              <li>Project 3</li>
              <li>Project 4</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <small>&copy; 2024 &ndash; Shina Qin</small>
      </div>
    </div>
  );
};

export default Footer;
