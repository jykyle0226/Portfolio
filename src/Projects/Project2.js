import React from "react";
import { motion } from "framer-motion";

function Project2() {
  return (
    <motion.div
      animate={{ scale: [0.5, 1] }}
      transition={{ delay: 0.2 }}
      className="project"
    >
      <div>
        <motion.div
          whileHover={{
            scale: 1.5,
          }}
          className="project-img-div"
        >
          <img
            className="project-img"
            src="https://i.imgur.com/sgzue30.png"
            alt=""
          ></img>
        </motion.div>
      </div>
      <div>
        <div className="name-div">
          <h2 className="project-name">CaffèNova</h2>
        </div>
        <div className="project-info-div">
          <div className="info">
            <ul className="project-ul">
              <li>Full stack web application developed in Django</li>
              <li>
                Used PostgreSQL to store and query user and cafe
                information(MERN)
              </li>
              <li>
                Implemented user authentication to enable log-in required
                functionalities
              </li>
            </ul>
          </div>
        </div>
        <div className="icon-div">
          <a
            href="https://github.com/jykyle0226/CaffeNova"
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
            href="https://caffenova.herokuapp.com/"
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

export default Project2;
