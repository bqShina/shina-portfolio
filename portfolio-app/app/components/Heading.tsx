import Link from "next/link";
import React from "react";

const Heading = () => {
  return (
    <div className="pt-32">
      <div className="px-[7%] pt-[4%] pb-[30%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgb(252,252,255)_52%),radial-gradient(53%_80.08%_at_50%_69.5%,rgba(253,225,241,0.9),rgba(252,235,251,0.8))] w-[80%] mx-auto rounded-[100px]">
        <div className="sub-heading">
          <h6 className="text-center">Hi I&apos;m Shina 💻</h6>
        </div>

        <h1 className="text-center">
          I build websites and apps that impresses beyond expectations
        </h1>
        <div className="flex justify-center">
          <Link className="mr-4 btn-primary" href="#projects">
            My work
          </Link>
          <Link className="btn-secondary" href={"#about"}>
            About me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heading;
