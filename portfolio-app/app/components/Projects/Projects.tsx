import React from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div id="projects">
      <div className={`bg-red-50 ${styles.project}`}>project 1</div>
      <div className={`bg-violet-50 ${styles.project}`}>project 2</div>
      <div className={`bg-red-50 ${styles.project}`}>project 3</div>
      <div className={`bg-violet-50 ${styles.project}`}>project 4</div>
    </div>
  );
};

export default Projects;
