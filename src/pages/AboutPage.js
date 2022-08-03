import React from "react";
import "../Style/About.css";
import About from "../components/About";
import Navbar2 from "../components/NavBar2";
import { motion } from "framer-motion";
const AboutPage = (props) => {
  return (
    <div className="AboutPage">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Navbar2></Navbar2>
      </motion.div>
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
