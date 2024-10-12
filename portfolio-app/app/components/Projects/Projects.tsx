import React from "react";
import styles from "./Projects.module.css";
import Link from "next/link";
import Image from "next/image";
import retroLogo from "@/public/images/RetroAIPlusPlusLogo.png";
import retroMock from "@/public/images/retroaipp.png";

const Projects = () => {
  return (
    <div id="projects" className={styles.projects_container}>
      <div className={`bg-red-50 p-20 ${styles.project}`}>
        <Image src={retroLogo} alt="project logo" style={{ width: "15%" }} />
        <div className="flex justify-between items-center my-16">
          <div className="project_description">
            <p className="text-sm text-gray-600 uppercase">
              Full-stack development
            </p>
            <h2 className="my-10 text-[38px] font-bold">
              Project Management Application based on Scrum Methodology
            </h2>
            <div className="flex justify-start">
              <Link className="mr-4 btn-primary" href="">
                Visit website
              </Link>
              <Link className="btn-secondary" href={"#"}>
                Source Code
              </Link>
            </div>
          </div>
          <Image src={retroMock} alt="project mock" style={{ width: "50%" }} />
        </div>
      </div>
      <div className={`bg-violet-50 p-20 ${styles.project}`}>
        {" "}
        <Image src={retroLogo} alt="project logo" style={{ width: "15%" }} />
        <div className="flex justify-between items-center my-16">
          <div className="project_description">
            <p className="text-sm text-gray-600 uppercase">
              Full-stack development
            </p>
            <h2 className="my-10 text-[38px] font-bold">
              Project Management Application based on Scrum Methodology
            </h2>
            <div className="flex justify-start">
              <Link className="mr-4 btn-primary" href="">
                Visit website
              </Link>
              <Link className="btn-secondary" href={"#"}>
                Source Code
              </Link>
            </div>
          </div>
          <Image src={retroMock} alt="project mock" style={{ width: "50%" }} />
        </div>
      </div>
      <div className={`bg-red-50 p-20 ${styles.project}`}>
        {" "}
        <Image src={retroLogo} alt="project logo" style={{ width: "15%" }} />
        <div className="flex justify-between items-center my-16">
          <div className="project_description">
            <p className="text-sm text-gray-600 uppercase">
              Full-stack development
            </p>
            <h2 className="my-10 text-[38px] font-bold">
              Project Management Application based on Scrum Methodology
            </h2>
            <div className="flex justify-start">
              <Link className="mr-4 btn-primary" href="">
                Visit website
              </Link>
              <Link className="btn-secondary" href={"#"}>
                Source Code
              </Link>
            </div>
          </div>
          <Image src={retroMock} alt="project mock" style={{ width: "50%" }} />
        </div>
      </div>
      <div className={`bg-violet-50 p-20 ${styles.project}`}>
        {" "}
        <Image src={retroLogo} alt="project logo" style={{ width: "15%" }} />
        <div className="flex justify-between items-center my-16">
          <div className="project_description">
            <p className="text-sm text-gray-600 uppercase">
              Full-stack development
            </p>
            <h2 className="my-10 text-[38px] font-bold">
              Project Management Application based on Scrum Methodology
            </h2>
            <div className="flex justify-start">
              <Link className="mr-4 btn-primary" href="">
                Visit website
              </Link>
              <Link className="btn-secondary" href={"#"}>
                Source Code
              </Link>
            </div>
          </div>
          <Image src={retroMock} alt="project mock" style={{ width: "50%" }} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
