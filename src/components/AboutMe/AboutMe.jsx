import React from "react";
import Academics from "./Academics";
import TechnicalSkills from "./TechnicalSkills";
import "./aboutme.css";
import Courses from "./Courses";
import Details from "./Details";
import Experience from "./Experience";
import Achivements from "./Achivements";
function AboutMe() {
  return (
    <div id="about-me" className="w-full">
      <h2 className="text-center  font-bold text-[30px] sticky top-0 z-10">
        About Me
      </h2>
      <div id="about-me-inner">
        <Academics />
        <TechnicalSkills />
        <Experience />
        <Achivements />
        <Courses />
        <Details />
      </div>
    </div>
  );
}

export default AboutMe;
