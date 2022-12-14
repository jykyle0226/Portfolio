import React from "react";
import { motion } from "framer-motion";

function Project3() {
  return (
    <motion.div
      animate={{ scale: [0.5, 1] }}
      transition={{ delay: 0.3 }}
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
            src="https://i.imgur.com/84IDtHM.png"
            alt=""
          ></img>
        </motion.div>
      </div>
      <div>
        <div className="name-div">
          <h2 className="project-name">BuckT <span className="project-span"> - Back-End</span></h2>
        </div>
        <div className="project-info-div">
          <div className="info">
            <ul className="project-ul">
              <li>A web application where users can store bucket list data</li>
              <li>
                Worked with three other team members utilizing GitHub/Git
                Collaboration for version control.
              </li>
              <li>
                Utilized Mongoose/MongoDB, Express, React, and Node (MERN)
              </li>
              <li>
                Implemented full CRUD functionality as a back-end developer
              </li>
            </ul>
          </div>
        </div>
        <div className="icon-div">
          <a
            href="https://github.com/jykyle0226/buckT-backend"
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
            href="https://buck-it.netlify.app/"
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

export default Project3;
