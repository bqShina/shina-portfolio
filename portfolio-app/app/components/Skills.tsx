import React from "react";
import { BiCodeBlock } from "react-icons/bi";
import { GrCloudComputer } from "react-icons/gr";
import { PiDesktopTowerBold, PiPencilCircle } from "react-icons/pi";
import { SiMicrosoftteams } from "react-icons/si";
import { TbDatabaseEdit } from "react-icons/tb";

const Skills = () => {
  const skills = [
    {
      title: "Front-End Development",
      description:
        "Proficient in JavaScript, TypeScript, React JS, Next JS, Tailwind and Bootstrap. I deliver responsive and interactive user interfaces.",
      iconType: "FE",
    },
    {
      title: "Back-End Development",
      description:
        "Skilled in .NET (C#), Node JS, Java, REST API, and GraphQL to manage server-side logic and API development.",
      iconType: "BE",
    },
    {
      title: "Database Management",
      description:
        "Experienced with SQL, MongoDB, MySQL, and SQLite to ensure efficient data storage and retrieval.",
      iconType: "DB",
    },
    {
      title: "Cloud Service",
      description:
        "Experienced in deploying applications on AWS and Azure for scalability and reliability.",
      iconType: "CS",
    },
    {
      title: "Design",
      description:
        "Fluent in Adobe Suite, Sketch, and Figma to create visually appealing and user-friendly UI/UX designs.",
      iconType: "D",
    },
    {
      title: "Software Engineering Practices",
      description:
        "Agile/Scrum methodologies and unit testing (JUnit, xUnit), focused on collaboration and delivering high-quality code.",
      iconType: "SEP",
    },
  ];

  const renderIcons = (iconType: string) => {
    switch (iconType) {
      case "FE":
        return <BiCodeBlock />;
      case "BE":
        return <PiDesktopTowerBold />;
      case "DB":
        return <TbDatabaseEdit />;
      case "CS":
        return <GrCloudComputer />;
      case "D":
        return <PiPencilCircle />;
      case "SEP":
        return <SiMicrosoftteams />;
      default:
        return null;
    }
  };

  return (
    <div id="skills" className="mb-32">
      <div className="sub-heading">
        <h6 className="text-center">Ways of working 💡</h6>
      </div>
      <h2 className="text-center font-bold text-[38px] my-10">
        Skills I Use to Build Robust Web & Mobile Applications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-14 px-[7%] ">
        {skills.map((skill) => (
          <div
            key={skill.iconType}
            className="bg-white p-7 rounded-[24px] flex justify-between"
          >
            <div className="mr-4">
              <div className="bg-[linear-gradient(152deg,_rgb(244,_237,_255),_#f4edff_0%,_rgb(252,_235,_239)_141%)] p-4 rounded-[24px] text-[50px]">
                {renderIcons(skill.iconType)}
              </div>
            </div>

            <div>
              <h5 className="text-[20px] mb-4">{skill.title}</h5>
              <p className="text-[#505050]">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
