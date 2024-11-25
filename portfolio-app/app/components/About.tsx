import React from "react";
import profile from "@/public/images/about.jpg";
import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row mx-[15%] my-16 items-center bg-[linear-gradient(126deg,_rgb(252,_235,_239),_#fcebef_0%,_rgb(244,_237,_255),_rgb(244,_237,_255)_100%)] sm:p-14 p-7  rounded-[40px] justify-start"
    >
      <Image
        src={profile}
        alt="profile image"
        className="rounded-[40px] mb-5 lg:w-[50%] md: w-[100%]"
      />

      <div className="lg:ml-20 ml-0 w-[100%] lg:w-[50%]">
        <h4 className="text-[28px] mb-3">Hi, I&apos;m Shina! 💻</h4>
        <p className="text-[#505050] leading-loose mb-10">
          I&apos;m a recent graduate and Full-Stack Developer based in
          Melbourne, Australia, with over a year of experience building
          high-quality websites and products.
          <br />
          If you&apos;re looking for someone passionate about delivering
          innovative solutions, feel free to reach out!
        </p>
        <div className="text-white bg-gray-800 px-8 py-5 rounded-full transition duration-200 hover:scale-95 inline-block">
          <Link href="/resume.pdf">Download my resume</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
