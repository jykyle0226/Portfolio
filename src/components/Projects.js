import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="project">
      <div className="project-div">
        <a
          href="https://iridescent-croquembouche-9e80f7.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-1">
            <img
              className="img"
              src="https://i.imgur.com/pxHF1mA.png"
              alt=""
            ></img>
          </div>
        </a>
        <a
          href="https://caffenova.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-2">
            <img
              className="img"
              src="https://i.imgur.com/3uFEhOT.png"
              alt=""
            ></img>
          </div>
        </a>
        <a href="https://buck-it.netlify.app/" target="_blank" rel="noreferrer">
          <div className="project-3">
            <img
              className="img"
              src="https://i.imgur.com/TVJKbcL.png"
              alt=""
            ></img>
          </div>
        </a>
        <a
          href="https://project2-minyong-kim.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-4">
            <img
              className="img"
              src="https://i.imgur.com/xDeem9N.png"
              alt=""
            ></img>
          </div>
        </a>
        <a
          href="https://main--astonishing-dieffenbachia-49841b.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="project-5">
            <img
              className="img"
              src="https://i.imgur.com/ZHpI4YV.png"
              alt=""
            ></img>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
