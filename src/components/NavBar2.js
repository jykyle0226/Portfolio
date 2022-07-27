import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="Navbar2">
      <div className="about-div">
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
            <li className="about-li">About</li>
          </Link>
          <Link className="Link" to="/projects">
            <li className="about-li">Projects</li>
          </Link>
          <Link className="Link" to="/Resume">
            <li className="nav-li">Resume</li>
          </Link>

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
      </div>
    </div>
  );
};

export default Navbar2;
