import React from "react";
import projectStyle from "./ProjectStyle.module.css";
import Cards from "./Cards";
// import todo from "../../assets/undraw_select_re_3kbd.svg";
import greensiaEarthworks from "../../assets/gew-pic.png";
// import portfolio from "../../assets/undraw_profile_re_4a55.svg";




const Projects = (props) => {
  return (
    <div className={projectStyle.Projects} id="projects">
      <div >
        <h1>{props.title}</h1>
        <Cards  />

        <Cards logo={greensiaEarthworks}/>

        <Cards  />
      </div>
    </div>
  );
};

export default Projects;
