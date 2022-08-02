import React from "react";
import { Link } from "react-router-dom";
import "../Style/About.css";
import About from "../components/About";
import "../Style/About.css";
import Navbar2 from "../components/NavBar2";
import { Spring } from "react-spring";
import { motion } from "framer-motion";
const AboutPage = (props) => {
  return (
    <div className="AboutPage">
      <div>
        <Navbar2></Navbar2>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <About></About>
      </motion.div>
    </div>
  );
};
export default AboutPage;
