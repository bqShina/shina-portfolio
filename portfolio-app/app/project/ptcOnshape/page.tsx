import Link from "next/link";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

interface VideoDemoType {
  title: string;
  videoID: string;
  description: string;
  releaseLink?: string;
}

const PtcOnshapePage = () => {
  const videoDemos: VideoDemoType[] = [
    {
      title: "Quick Applying Texture",
      videoID: "tuo-CSJNEUI",
      description:
        "This offers a way to quickly apply texture to an object. User can directly add a bitmap image by right-clicking on an applicable Appearance panel parameter and selecting Use bitmap file from the context menu.",
      releaseLink:
        "https://forum.onshape.com/discussion/27130/improvements-to-onshape-march-13th-2025#latest",
    },
    {
      title: "Reusable Hint Component",
      videoID: "ee8PqvVNhxk",
      description: "",
    },
    {
      title: "Filter named view properties",
      videoID: "8ewd0h9u-3I",
      description: "",
    },
    {
      title: "Appearance Modifier Folder",
      videoID: "s-KiTmThv4Q",
      description: "",
    },
    {
      title: "Persist rendering setting between sessions",
      videoID: "R2jCk5BzCes",
      description:
        "Render option settings are remembered from the latest render. Settings are retained after the page is refreshed and after logging out and back in. These settings are tab specific.",
      releaseLink:
        "https://forum.onshape.com/discussion/27376/improvements-to-onshape-april-4th-2025#latest",
    },
  ];
  return (
    <div className="pt-32 px-[14%] mb-32">
      <p className="uppercase">Cloud SaaS CAD Solution</p>
      <h2 className="text-left text-[57px] mb-20 font-bold">
        Onshape Render Studio Features
      </h2>
      <div className="flex justify-between flex-col lg:flex-row lg:space-y-0 space-y-3">
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

      {videoDemos.map((video) => (
        <section key={video.title} className="mt-20">
          <h3 className="text-[30px] font-bold mb-3">{video.title}</h3>
          {video.description && (
            <p className="mb-3 text-[14px]">
              {video.description}
              <br />
              {video.releaseLink && (
                <span className="text-blue-600 hover:underline">
                  <Link href={video.releaseLink}>public link</Link>
                </span>
              )}
            </p>
          )}

          <div className="w-[100%] aspect-video">
            <iframe
              className="w-full h-full rounded-md"
              src={`https://www.youtube.com/embed/${video.videoID}`}
              title={video.title}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default PtcOnshapePage;
