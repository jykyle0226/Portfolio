import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="Title">
        <Link to="/">
          <img
            className="banner"
            src="https://i.imgur.com/o0ScWXq.png"
            alt=""
          />
        </Link>
      </div>

      <nav className="nav-right">
        <Link className="Link" to="/about">
          <li className="nav-li">About</li>
        </Link>
        <Link className="Link" to="/projects">
          <li className="nav-li">Projects</li>
        </Link>
        <li className="nav-li">
          <a
            className="li-a"
            href="https://drive.google.com/file/d/1p5GGicnelbUv8iy02SZ_iotNNerlwmPb/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
        <li className="nav-li">
          <a
            className="li-a"
            href="https://github.com/jykyle0226"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li className="nav-li">
          <a
            className="li-a"
            href="https://www.linkedin.com/in/min-yong-kim/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </nav>
    </div>
  );
};

export default NavBar;
