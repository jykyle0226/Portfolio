import React from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";
import Projects from "../components/Projects";
import Navbar2 from "../components/NavBar2";
import "../Style/Project.css";
import { motion } from "framer-motion";

const ProjectsPage = (props) => {
  return (
    <div className="ProjectPage">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navbar2></Navbar2>
      </motion.div>
      <div>
        <Projects></Projects>
      </div>
    </div>
  );
};
export default ProjectsPage;
