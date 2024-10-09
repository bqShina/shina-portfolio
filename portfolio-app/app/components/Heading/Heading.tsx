import Link from "next/link";
import React from "react";
import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <div className="pt-32">
      <div className={styles.heading_frame}>
        <div className="sub-heading">
          <h6 className="text-center">Hi I&apos;m Shina 💻</h6>
        </div>

        <h1 className="text-center">
          I build websites and apps that blows your mind
        </h1>
        <div className="flex justify-center">
          <Link
            className="mr-4 text-white bg-gray-800 px-7 py-3 rounded-full transition duration-200 hover:scale-95"
            href="#projects"
          >
            My work
          </Link>
          <Link
            className="border-2 border-gray-800 px-7 py-3 rounded-full transition duration-200 hover:scale-95"
            href={"#"}
          >
            About me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heading;
