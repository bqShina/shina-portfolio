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
          <Link className="mr-4 btn-primary" href="#projects">
            My work
          </Link>
          <Link className="btn-secondary" href={"#"}>
            About me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heading;
