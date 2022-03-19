import React from "react";
import projectStyle from "./ProjectStyle.module.css";
import Cards from "./Cards";
import { GiHealthNormal } from 'react-icons/gi'
import { MdTaskAlt } from 'react-icons/md'

// import todo from "../../assets/undraw_select_re_3kbd.svg";

// import portfolio from "../../assets/undraw_profile_re_4a55.svg";




const Projects = (props) => {
  return (
    <div className={projectStyle.Projects} id="projects">
      <h1>{props.title}</h1>
      
      <div>
        
        <Cards link = {'https://jmrc1995.github.io/Todo-App-JMRC/'} logo ={<MdTaskAlt size='30'/>} appTitle = {'To-do'}/>
   
        <Cards  link ={'https://jmrc1995.github.io/GEW.plp/'} logo={<GiHealthNormal size='30'/>} appTitle = {'Greensia Landing Page'}/>

     
      </div>
    </div>
  );
};

export default Projects;
