import React, { Component } from "react";
import sectionStyles from "../Section/Section.module.css";
import { info } from "../Section/SecData";

const Section = (props) => {
  return (
    <div className={sectionStyles.SectionStyle} id='section' >
      <div>
        <h1>{props.title}</h1>
        <ul >
          {info.map((item, index) => {
            return (
              <div >
                <li > {item} </li>
              </div>
            );  
          })}
        </ul>
      </div>
    </div>
  );
};

export default Section;
