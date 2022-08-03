import React from "react";
import { motion } from "framer-motion";

function Project1() {
  return (
    <motion.div
    animate={{ scale: [0.5, 1] }}
      transition={{ delay: 0.1 }}
      className="project"
    >
      <div>
        <motion.div
          whileHover={{
            scale: [1, 1.5]
          }}
          className="project-img-div"
        >
          <img
            className="project-img"
            src="https://i.imgur.com/Td2GZ3f.png"
            alt=""
          ></img>
        </motion.div>
      </div>
      <div>
        <div className="name-div">
          <h2 className="project-name">GCCK Audio Engineer Website</h2>
        </div>
        <div className="project-info-div">
          <div className="info">
            <ul className="project-ul">
              <li>
                Utilized Mongoose/MongoDB, Express, React, and Node (MERN) to
                develop web applicationy
              </li>
              <li>Implemented Spotify API to add artist search functionality</li>
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
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
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
              whileTap={{ scale: 0.9 }}
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

export default Project1;
