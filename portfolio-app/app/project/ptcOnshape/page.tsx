import Image from "next/image";
import Link from "next/link";
import React from "react";
import githubContribution from "@/public/images/ptc/github-contribution.png";
import { MdOutlineArrowOutward } from "react-icons/md";

const PtcOnshapePage = () => {
  return (
    <div className="pt-32 px-[14%] mb-32">
      <p className="uppercase">Cloud SaaS CAD Solution</p>
      <h2 className="text-left text-[57px] mb-20 font-bold">
        Onshape Render Studio Features
      </h2>

      <div className="flex justify-between">
        <div className="space-y-1">
          <h5 className="uppercase text-[14px]">Company</h5>
          <Link href="https://www.onshape.com/en/features/render-studio">
            <div className="flex items-center space-x-1">
              <h3 className="text-[24px]">PTC-Onshape</h3>
              <MdOutlineArrowOutward className="text-[24px]" />
            </div>
          </Link>
        </div>

        <div className="space-y-1">
          <h5 className="uppercase text-[14px]">Role</h5>
          <h3 className="text-[24px]">Software Engineer Intern</h3>
        </div>
        <div className="space-y-1">
          <h5 className="uppercase text-[14px]">Time</h5>
          <h3 className="text-[24px]">Jan 2025 - Apr 2025</h3>
        </div>
      </div>

      <section className="mt-20">
        <h3 className="text-[30px] font-bold mb-3">Github Contribution</h3>
        <Image
          src={githubContribution}
          alt="github contribution"
          className="w-[100%] rounded-md"
        />
      </section>

      <div className="p-14 text-center text-[16px] italic">
        <p>This page is still baking in the code oven 🍰</p>
        <p>Check back soon for something awesome!</p>
      </div>
    </div>
  );
};

export default PtcOnshapePage;
