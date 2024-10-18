import React from "react";
import styles from "./Projects.module.css";
import Link from "next/link";
import Image from "next/image";
import retroLogo from "@/public/images/RetroAIPlusPlusLogo.png";
import monashAutoBodyLogo from "@/public/images/monashautobodyLogo.png";
import retroMock from "@/public/images/retroaipp.png";
import monashAutoBodyMock from "@/public/images/monashAutoBody.png";

const Projects = () => {
  const projects = [
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
          <Image src={project.logo} alt="project logo" className="w-[15%]" />
          <div className="flex justify-between items-center my-16">
            <div className="project_description">
              <p className="text-sm text-gray-600">{project.type}</p>
              <h2 className="my-10 text-[38px] font-bold">
                {project.description}
              </h2>
              <div className="flex justify-start">
                <Link className="mr-4 btn-primary" href={project.website}>
                  Visit website
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
              style={{ width: "50%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
