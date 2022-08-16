import React from "react";
import { Link } from "react-router-dom";
import Project1 from "../Projects/Project1";
import Project2 from "../Projects/Project2";
import Project3 from "../Projects/Project3";
import Project4 from "../Projects/Project4";
import Project5 from "../Projects/Project5";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="Project-div"> 
      <div className="projectComp-div">
        {/* <Project1 /> */}
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
      </div>
    </div>
  );
};

export default Projects;
