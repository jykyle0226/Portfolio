import React from "react";
import { motion } from "framer-motion";

function Project4() {
  return (
    <motion.div 
    animate={{ x: 200 }}
    transition={{ delay: 0.4}}
    className="project">
      <div>
      <div className="project-img-div">
          <img className="project-img" src="https://i.imgur.com/zj0eudJ.png" alt=""></img>
        </div>
      </div>
        <div>
        <div className="name-div">
          <h2 className="project-name">Devo and Diary</h2>
        </div>
        <div className="project-info-div">
          <div className="info">
            <ul>
              <li>
                Utilized Mongoose/MongoDB, Express, React, and Node (MERN) to
                develop web applicationy
              </li>
              <li>Implemented Spotify API to add artist search functionalit</li>
            </ul>
          </div>
        </div>
        <div className="icon-div">
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
        
    </motion.div>
  );
}

export default Project4;
