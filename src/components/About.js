import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "../Style/About.css";
const About = () => {
  return (
    <motion.div animate={{ y: 20, scale: 1 }} initial={{ scale: 0 }}>
      <div className="About-div">
        <div className="intro-div">
          <div>
            <motion.h1 whileHover={{ scale: 1.4 }} className="name">
              <span className="hello-span">Hello,</span>
            </motion.h1>
            <h1 className="name">
              My name is <span>Min Yong Kim.</span>
            </h1>
            <h4 className="intro">
              I am a full-stack developer with focuses in JavaScript, React,
              Express, MongoDB, and Node.
            </h4>
          </div>
          <div className="intro-div">
            <h4 className="intro">
              As a recent graduate from General Assembly, I am equipped with
              self-teaching ability and flexibility to an individual work
              setting and collaboration.
            </h4>
          </div>
          <div>
            <h4 className="intro">
              With 4 years of experience in audio engineering, I possess strong
              foundations in problem solving and result-oriented work ethic.
            </h4>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="phone-div">
          <motion.img
            whileHover={{ scale: 1.5 }}
            src="https://i.imgur.com/2rkG6JN.png"
            alt=""
            className="phone"
          ></motion.img>
          <h4 className="numb">(571)992-3010</h4>
        </div>
        <div className="email-div">
          <motion.img
            whileHover={{ scale: 1.5 }}
            src="https://i.imgur.com/G2R0wIX.png"
            alt=""
            className="email"
          ></motion.img>
          <h4>min.y.kim0226@gmail.com</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
