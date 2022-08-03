import React from "react";
import { motion } from "framer-motion";

function Project3() {
  return (
    <motion.div
      animate={{ x: 100 }}
      transition={{ delay: 0.3 }}
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
            src="https://i.imgur.com/84IDtHM.png"
            alt=""
          ></img>
        </motion.div>
      </div>
      <div>
        <div className="name-div">
          <h2 className="project-name">BuckT</h2>
        </div>
        <div className="project-info-div">
          <div className="info">
            <ul className="project-ul">
              <li>
                Focused on React fundamentals such as useState & useEffect &
                PropTypes to develop front-end elements
              </li>
              <li>
                Worked in collaboration with three other developers and utilized
                GitHub/Git Collaboration for version control
              </li>
              <li>
                Took charge of back-end and used Mongoose to define schemas for
                MongoDB collections
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
