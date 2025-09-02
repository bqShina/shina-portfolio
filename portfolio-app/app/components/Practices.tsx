import React from "react";
import movieSearch from "@/public/images/movie-search.png";
// import blog from "@/public/images/blog.png";
import imageAI from "@/public/images/imageAI.png";
import githubUserSearch from "@/public/images/github-user-search-app.png";
import Image from "next/image";
import Link from "next/link";

const Practices = () => {
  const practices = [
    {
      name: "Movie Search",
      image: movieSearch,
      link: "https://bqshina.github.io/Movie-Search/",
      description: "Front-end (React, Bootstrap)",
    },
    {
      name: "Image AI",
      image: imageAI,
      link: "https://image-to-image-generator.vercel.app/",
      description: "Next.js with Replicate’s SDXL model",
    },
    {
      name: "Github User Search App",
      image: githubUserSearch,
      link: "https://bqshina.github.io/My-Portfolio/projects/github-user-search-app/index.html",
      description: "Front-end (Pure HTML, CSS, Javascript)",
    },
  ];
  return (
    <div id="practices" className="mb-40">
      <div className="sub-heading">
        <h6 className="text-center">Extra Projects 🌸</h6>
      </div>
      <h2 className="text-center font-bold text-[38px] my-10">
        Small projects for skill-building and practice
      </h2>
      <div className="flex flex-col lg:flex-row w-[80%] mx-[auto] space-x-0 lg:space-x-3 space-y-5 lg:space-y-0">
        {practices.map((practice) => (
          <Link
            href={practice.link}
            key={practice.link}
            className="rounded-[24px] lg:w-[33%] w-[100%] h-96 overflow-hidden shadow relative transition duration-200 hover:scale-95"
          >
            <Image
              src={practice.image}
              alt="project image"
              className="w-[100%] h-[100%] overflow-hidden object-center object-cover"
            />
            <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgb(255,255,255)_45%)] px-6 pt-20 pb-5 z-100 absolute bottom-0 w-[100%] space-y-2">
              <p className="text-[#505050] text-sm">{practice.description}</p>
              <h6 className="text-black">{practice.name}</h6>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/practices" className="btn-primary">
          See all practices
        </Link>
      </div>
    </div>
  );
};

export default Practices;
