import React from "react";
import { motion } from "framer-motion";

function Project5() {
  return (
    <motion.div
      animate={{ x: 200 }}
      transition={{ delay: 0.5 }}
      className="project"
    >
      <div>
        <motion.div
          whileHover={{
            scale: [1, 1.5],
            rotate: [0, 360],
          }}
          className="project-img-div"
        >
          <img
            className="project-img"
            src="https://i.imgur.com/QkpluYP.png"
            alt=""
          ></img>
        </motion.div>
      </div>
      <div>
        <div className="name-div">
          <h2 className="project-name">GIF Generator</h2>
        </div>
        <div className="project-info-div">
          <div className="info">
          <ul className="project-ul">
              <li>Single page web app implemented with third-party API</li>
              <li>Takes search requests and generates 3 gifs </li>
              <li>Developed with JavaScript, Ajax, jQuery, HTML and CSSBuck</li>
            </ul>
          </div>
        </div>
        <div className="icon-div">
          <a
            href="https://github.com/jykyle0226/Audio-Engineer-Guide-Website-FrontEnd"
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              whileHover={{ scale: 1.3 }}
              className="github"
              src="https://i.imgur.com/OekuFsO.png"
              alt=""
            ></motion.img>
          </a>
          <a
            href="https://iridescent-croquembouche-9e80f7.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              whileHover={{ scale: 1.3 }}
              className="live"
              src="https://i.imgur.com/cGHJKG5.png"
              alt=""
            ></motion.img>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Project5;