import React from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";

import "../Style/Navbar.css";

const HomePage = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />
    </motion.div>
  );
};
export default HomePage;
