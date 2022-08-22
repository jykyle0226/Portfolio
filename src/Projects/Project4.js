import React from "react";
import { motion } from "framer-motion";

function Project4() {
  return (
    <motion.div
    animate={{ scale: [0.5, 1] }}
      transition={{ delay: 0.4 }}
      className="project"
    >
      <div>
        <motion.div
          whileHover={{
            scale: 1.5
          }}
          className="project-img-div"
        >
          <img
            className="project-img"
            src="https://i.imgur.com/zj0eudJ.png"
            alt=""
          ></img>
        </motion.div>
      </div>
      <div>
        <div className="name-div">
          <h2 className="project-name">Devo and Diary <span className="project-span"> - Full Stack</span></h2>
        </div>
        <div className="project-info-div">
          <div className="info">
          <ul className="project-ul">
              <li>A personal blog website for me to store my diary and devotional note</li>
              <li>Full stack web application developed in Express.js and MongoDB</li>
              <li>Implemented full CRUD functionality</li>
            </ul>
          </div>
        </div>
        <div className="icon-div">
          <a
            href="https://github.com/jykyle0226/My-Personal-Devo-Diary"
            target="_blank"
            rel="noreferrer"
          >
            <motion.img
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              className="github"
              src="https://i.imgur.com/OekuFsO.png"
              alt=""
            ></motion.img>
          </a>
          <a
            href="https://project2-minyong-kim.herokuapp.com/"
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

export default Project4;
