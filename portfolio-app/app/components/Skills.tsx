import React from "react";

const Skills = () => {
  return (
    <div className="mb-28">
      <div className="sub-heading">
        <h6 className="text-center">Ways of working 💡</h6>
      </div>
      <h2 className="text-center font-bold text-[38px] my-10">
        Skills I Use to Build Robust Web & Mobile Applications
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-14 px-[7%]">
        <div className="bg-white p-6 rounded-[24px]">
          <h5 className="text-[20px] mb-4">Front-End Development</h5>
          <p className="text-[#505050]">
            Proficient in HTML, CSS, JavaScript/TypeScript, React JS, Vue, Next
            JS, and Bootstrap. I deliver responsive and interactive user
            interfaces.
          </p>
        </div>
        <div>
          <h5>Back-End Development</h5>
          <p>
            Skilled in .NET (C#), Node JS, Java, REST API, and GraphQL to manage
            server-side logic and API development.
          </p>
        </div>
        <div>
          <h5>Database Management</h5>
          <p>
            Experienced with SQL, MongoDB, MySQL, and SQLite to ensure efficient
            data storage and retrieval.
          </p>
        </div>
        <div>
          <h5>Cloud Service</h5>
          <p>
            Experienced in deploying applications on AWS and Azure for
            scalability and reliability.
          </p>
        </div>
        <div>
          <h5>Design</h5>
          <p>
            Fluent in Adobe Suite, Sketch, and Figma to create visually
            appealing and user-friendly UI/UX designs.
          </p>
        </div>
        <div>
          <h5>Software Engineering Practices</h5>
          <p>
            Agile/Scrum methodologies and unit testing (JUnit, xUnit), focused
            on collaboration and delivering high-quality code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
