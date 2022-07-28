import React from "react";
import { Link } from "react-router-dom";
import '../Style/About.css'
const About = () => {
  return (
    <div className="About-div">
      <div className="name-div">
        <h1 className="name"><span className="hello-span">Hello,</span></h1>
        <h1 className="name">My name is Min Yong Kim</h1>
      </div>
      <div className="intro-div">
        <div >
          <h4 className="intro">
            I am a full-stack developer with a focus on JavaScript, React,
            Express, MongoDB, and Node.
          </h4>
        </div>
        <div>
          <h4 className="intro">
          As a recent graduate at General Assembly, I’m equipped with self-teaching ability and flexibility to an individual work setting and collaboration.  
          </h4>
        </div>
        <div>
          <h4 className="passion">
            With 4 years of experience in audio engineering, I possess a strong
            foundation in problem solving skills and result-oriented work ethic.
          </h4>
        </div>
      </div>
    </div>

  );
};

export default About;
