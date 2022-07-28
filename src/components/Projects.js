import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="project">
      <div>
        <h1 className="project-h1">
          hover over the icon and see the preview of each project!
        </h1>
      </div>
      <div className="project-div">
        <div className="project-1">
          <img
            className="img"
            src="https://i.imgur.com/pxHF1mA.png"
            alt=""
          ></img>
          <span className="large">
            <img
              src="https://i.imgur.com/Td2GZ3f.png"
              alt=""
              className="large-img"
            ></img>
          </span>
          <h2 className="projectNum">Project 1</h2>
          <h4 className="projectName">GCCK Audio Engineer Website</h4>
          <div>
            <a
              href="https://github.com/jykyle0226/Audio-Engineer-Guide-Website-FrontEnd"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="github"
                src="https://i.imgur.com/OekuFsO.png"
                alt=""
              ></img>
            </a>
            <a
              href="https://iridescent-croquembouche-9e80f7.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="live"
                src="https://i.imgur.com/cGHJKG5.png"
                alt=""
              ></img>
            </a>
          </div>
        </div>
        <div className="project-2">
          <img
            className="img"
            src="https://i.imgur.com/3uFEhOT.png"
            alt=""
          ></img>
          <span className="large">
            <img
              src="https://i.imgur.com/sgzue30.png"
              alt=""
              className="large-img"
            ></img>
          </span>
          <h2 className="projectNum">Project 2</h2>
          <h4 className="projectName">CaffeNova</h4>
          <div>
            <a
              href="https://github.com/jykyle0226/CaffeNova"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="github"
                src="https://i.imgur.com/OekuFsO.png"
                alt=""
              ></img>
            </a>
            <a
              href="https://caffenova.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="live"
                src="https://i.imgur.com/cGHJKG5.png"
                alt=""
              ></img>
            </a>
          </div>
        </div>
        <div className="project-3">
          <img
            className="img"
            src="https://i.imgur.com/TVJKbcL.png"
            alt=""
          ></img>
          <span className="large">
            <img
              src="https://i.imgur.com/84IDtHM.png"
              alt=""
              className="large-img"
            ></img>
          </span>
          <h2 className="projectNum">Project 3</h2>
          <h4 className="projectName">BuckT</h4>
          <div>
            <a
              href="https://github.com/jykyle0226/buckT-frontend"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="github"
                src="https://i.imgur.com/OekuFsO.png"
                alt=""
              ></img>
            </a>
            <a
              href="https://buck-it.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="live"
                src="https://i.imgur.com/cGHJKG5.png"
                alt=""
              ></img>
            </a>
          </div>
        </div>
        <div className="project-4">
          <img
            className="img"
            src="https://i.imgur.com/xDeem9N.png"
            alt=""
          ></img>
          <span className="large">
            <img
              src="https://i.imgur.com/zj0eudJ.png"
              alt=""
              className="large-img"
            ></img>
          </span>
          <h2 className="projectNum">Project 4</h2>
          <h4 className="projectName">My Personal Diary and Devo</h4>
          <div>
            <a
              href="https://github.com/jykyle0226/My-Personal-Devo-Diary"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="github"
                src="https://i.imgur.com/OekuFsO.png"
                alt=""
              ></img>
            </a>
            <a
              href="https://project2-minyong-kim.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="live"
                src="https://i.imgur.com/cGHJKG5.png"
                alt=""
              ></img>
            </a>
          </div>
        </div>

        <div className="project-4">
          <img
            className="img"
            src="https://i.imgur.com/ZHpI4YV.png"
            alt=""
          ></img>
          <span className="large">
            <img
              src="https://i.imgur.com/zj0eudJ.png"
              alt=""
              className="large-img"
            ></img>
          </span>
          <h2 className="projectNum">Project 5</h2>
          <h4 className="projectName">GIF Generator</h4>
          <div>
            <a
              href="https://github.com/jykyle0226/GIF-Generator"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="github"
                src="https://i.imgur.com/OekuFsO.png"
                alt=""
              ></img>
            </a>
            <a
              href="https://main--astonishing-dieffenbachia-49841b.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="live"
                src="https://i.imgur.com/cGHJKG5.png"
                alt=""
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
