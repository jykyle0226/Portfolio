import React from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.css";
import Navbar2 from "../components/NavBar2";
import "../Style/Resume.css";
import Resume from "../components/Resume";

const ResumePage = (props) => {
  return (
    <div className="ProjectPage">
      <div>
        <Navbar2></Navbar2>
      </div>
      <div>
        <Resume></Resume>
      </div>
    </div>
  );
};
export default ResumePage;
