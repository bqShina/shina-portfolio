import Link from "next/link";
import React from "react";

const Heading = () => {
  return (
    <div className="pt-32">
      <div className="max-w-[1400px] pt-[4%] pb-[30%] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgb(252,252,255)_52%),radial-gradient(53%_80.08%_at_50%_69.5%,rgba(253,225,241,0.9),rgba(252,235,251,0.8))] w-[95%] mx-auto rounded-[40px] xl:rounded-[100px]">
        <div className="sub-heading px-2">
          <h6 className="text-center">Hi I&apos;m Shina 💻</h6>
        </div>

        <h1 className="text-center w-[80%] my-8 mx-auto text-[32px] lg:text-[57px] md:text-[48px]">
          I build websites and apps that impresses beyond expectations
        </h1>
        <div className="flex justify-center  flex-col md:flex-row md:space-x-3 md:space-y-0 space-y-3">
          <Link
            className=" btn-primary w-[50%] md:w-fit mx-auto md:mx-0"
            href="#projects"
          >
            My work
          </Link>
          <Link
            className="btn-secondary w-[50%] md:w-fit mx-auto md:mx-0"
            href="#about"
          >
            About me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heading;
