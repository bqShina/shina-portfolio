import Link from "next/link";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineArrowOutward } from "react-icons/md";
import { VscGithubAlt } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="bg-white rounded-tl-[64px] rounded-tr-[64px] px-8 py-5">
      <div className="flex justify-center py-20 px-4">
        <div className="w-[40%]">
          <p className="text-[20px] mb-8">Follow me on other channels</p>
          <Link
            className="bg-[linear-gradient(106deg,_rgb(245,247,255)_0%,_rgb(252,250,255)_100%)] rounded-[24px] flex justify-between items-center py-4 px-5 w-[100%] mb-4 transition duration-200 hover:scale-95"
            href="https://github.com/bqShina"
          >
            <div className="flex items-center">
              <div className="bg-[linear-gradient(152deg,_rgb(252,235,239)_0%,_rgb(244,237,255)_100%)] p-3 rounded-[12px]">
                <VscGithubAlt className="text-[32px]" />
              </div>

              <span className="ml-5 text-[20px] mx-2">Github</span>
            </div>

            <MdOutlineArrowOutward className="text-[30px]" />
          </Link>
          <Link
            className="bg-[linear-gradient(106deg,_rgb(245,247,255)_0%,_rgb(252,250,255)_100%)] rounded-[24px] flex justify-between items-center py-4 px-5 w-[80%] mb-4 transition duration-200 hover:scale-95"
            href="https://www.linkedin.com/in/xiaohan-shina-qin-26090118b/"
          >
            <div className="flex items-center ">
              <div className="bg-[linear-gradient(152deg,_rgb(252,235,239)_0%,_rgb(244,237,255)_100%)] p-3 rounded-[12px]">
                <CiLinkedin className="text-[32px]" />
              </div>

              <span className="ml-5 text-[20px] mx-2">LinkedIn</span>
            </div>

            <MdOutlineArrowOutward className="text-[30px]" />
          </Link>
        </div>
        <div className="w-[2px] bg-[#f5f7ff] mx-20"></div>
        <div className="flex w-[40%] justify-start">
          <div className="mr-10 w-[45%]">
            <p className="text-[20px] mb-8">Navigation</p>
            <ul>
              <li className="mb-3 hover:underline">
                <Link href="#">Home</Link>
              </li>
              <li className="mb-3 hover:underline">
                <Link href="#projects">Work</Link>
              </li>
              <li className="mb-3 hover:underline">
                <Link href="#">Skills</Link>
              </li>
              <li className="mb-3 hover:underline">
                <Link href="#">About</Link>
              </li>
              <li className="mb-3 hover:underline">
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[20px] mb-8">Projects</p>
            <ul>
              <li className="mb-3 hover:underline">
                <Link href="https://d3fmvsgz845g3s.cloudfront.net">
                  RetroAI++
                </Link>
              </li>
              <li className="mb-3 hover:underline">
                <Link href="https://monash-auto-body-client.onrender.com">
                  Customer Management Dashboard
                </Link>
              </li>
              <li className="mb-3 hover:underline">
                <Link href="#">Project 3</Link>
              </li>
              <li className="mb-3 hover:underline">
                <Link href="#">Project 4</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <small>&copy; 2024 &ndash; Shina Qin</small>
      </div>
    </div>
  );
};

export default Footer;
