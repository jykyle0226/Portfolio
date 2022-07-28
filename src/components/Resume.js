import React from "react";

const Resume = () => {
  return (
    <div className="resume" >
      <a href="https://drive.google.com/file/d/1uQNPtvr-pgzpJA_DsojDEW7eoK9vuK5N/view?usp=sharing">
        <div id="resume-div">
          <img id="resume" src="https://i.imgur.com/wgVGKU0.png" alt=""></img>
          <h2>Creative Resume</h2>
        </div>
      </a>
      <a href="https://drive.google.com/file/d/1uQNPtvr-pgzpJA_DsojDEW7eoK9vuK5N/view?usp=sharing">
        <div>
          <img  className="resume-img" src="https://i.imgur.com/4nohCJd.png?1" alt=""></img>
          <h2>Scannable Resume</h2>
        </div>
      </a>
    </div>
  );
};

export default Resume;
