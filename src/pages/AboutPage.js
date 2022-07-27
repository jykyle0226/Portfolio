import React from "react";
import { Link } from "react-router-dom";
import "../Style/About.css";
import About from "../components/About";
import "../Style/About.css";
import Navbar2 from "../components/NavBar2";

const AboutPage = (props) => {
  return (
    <div className="AboutPage">
      <div>
        <Navbar2></Navbar2>
      </div>
      <div>
        <About></About>
      </div>
    </div>
  );
};
export default AboutPage;
