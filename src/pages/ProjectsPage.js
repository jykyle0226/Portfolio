import React from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";
import Projects from "../components/Projects";
import Navbar2 from "../components/NavBar2";
import "../Style/Project.css";

const ProjectsPage = (props) => {
  return (
    <div className="ProjectPage">
      <div>
        <Navbar2></Navbar2>
      </div>
      <div>
        <Projects></Projects>
      </div>
    </div>
  );
};
export default ProjectsPage;
