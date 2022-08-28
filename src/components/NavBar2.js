import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar2 = () => {
  return (
    <motion.div className="Navbar2">
      <motion.div className="about-div">
        <div className="About-banner">
          <Link to="/">
            <img
              id="about-banner"
              src="https://i.imgur.com/o0ScWXq.png"
              alt=""
            />
          </Link>
        </div>

        <nav id="about-nav">
          <Link className="Link" to="/about">
            <li id="li1" className="about-li">About</li>
          </Link>
          <Link className="Link" to="/projects">
            <li id="li1" className="about-li">Projects</li>
          </Link>

          <li className="about-li">
            <a
              className="about-li-a"
              href="https://drive.google.com/file/d/1p5GGicnelbUv8iy02SZ_iotNNerlwmPb/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>

          <li className="about-li">
            <a
              className="about-li-a"
              href="https://github.com/jykyle0226"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="about-li">
            <a
              className="about-li-a"
              href="https://www.linkedin.com/in/min-yong-kim/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </nav>
      </motion.div>
    </motion.div>
  );
};

export default Navbar2;
