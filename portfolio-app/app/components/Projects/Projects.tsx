import React from "react";
import styles from "./Projects.module.css";
import Link from "next/link";
import Image from "next/image";
import retroLogo from "@/public/images/RetroAIPlusPlusLogo.png";
import monashAutoBodyLogo from "@/public/images/monashautobodyLogo.png";
import ptcLogo from "@/public/images/ptc-seeklogo.png";
import retroMock from "@/public/images/retroaipp.png";
import monashAutoBodyMock from "@/public/images/monashAutoBody.png";
import ptcMock from "@/public/images/ptc-onshape.png";

const Projects = () => {
  const projects = [
    {
      logo: ptcLogo,
      type: "React (Frontend), NodeJS (Backend)",
      projectMock: ptcMock,
      description: "Render studio features on a CAD application called onshape",
      website: "/project/ptcOnshape",
      sourceCode: "",
    },
    {
      logo: retroLogo,
      type: "React (Frontend), AWS Lambda with Java (Backend), DynamoDB (Database)",
      projectMock: retroMock,
      description: "Project Management Application based on Scrum Methodology",
      website: "https://d3fmvsgz845g3s.cloudfront.net",
      sourceCode: "",
    },
    {
      logo: monashAutoBodyLogo,
      type: "React with TypeScript (Frontend), Node js (Backend), MongoDB (Database)",
      projectMock: monashAutoBodyMock,
      description: "Customer Management System Dashboard",
      website: "https://monash-auto-body-client.onrender.com",
      sourceCode: "https://github.com/bqShina/monash-auto-body/tree/main/demo",
    },
  ];
  return (
    <div id="projects" className={styles.projects_container}>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`${index % 2 === 0 ? "bg-red-50" : "bg-violet-50"} p-20 ${
            styles.project
          }`}
        >
          <Image
            src={project.logo}
            alt="project logo"
            className="lg:w-[15%] w-[20%]"
          />
          <div className="flex flex-col lg:flex-row justify-between items-center my-16">
            <Image
              src={project.projectMock}
              alt="project mock"
              className="w-[100%] inline-block lg:hidden mb-8"
            />
            <div className="project_description">
              <p className="text-sm text-gray-600">{project.type}</p>
              <h2 className="my-10 text-[24px] sm:text-[32px] lg:text-[38px] font-semibold">
                {project.description}
              </h2>
              <div
                className="flex justify-center
              sm:justify-start flex-col sm:flex-row sm:space-y-0 space-y-3"
              >
                <Link className="mr-4 btn-primary" href={project.website}>
                  {index === 0 ? "View demo" : "Visit website"}
                </Link>
                {project.sourceCode && (
                  <Link className="btn-secondary" href={project.sourceCode}>
                    Source Code
                  </Link>
                )}
              </div>
            </div>
            <Image
              src={project.projectMock}
              alt="project mock"
              className="w-[50%] ml-3 hidden lg:inline-block"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
