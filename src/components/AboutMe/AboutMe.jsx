import React, { useState } from "react";
import Academics from "./Academics";
import TechnicalSkills from "./TechnicalSkills";
import "./aboutme.css";
import Courses from "./Courses";
import Details from "./Details";
import Experience from "./Experience";
import Achivements from "./Achivements";
import styled from "styled-components";
import buttonsAbout from "../../static_data/buttonsAbout";

const AboutButtonsNav = styled.div`
  padding: 0.3rem 1rem 1rem;
  background-color: ${"#123456"};
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
`;

function AboutMe() {
  const btnclass =
    "bg-white py-1 px-2 text-[12px] rounded-[0.3rem] hover:bg-[#878fff] hover:text-white flex-shrink-0";
  const [btn1, setBtn] = useState("1");
  return (
    <div id="about-me" className="w-full">
      <h2 className="text-center text-[20px] sticky top-0 z-10">About Me</h2>
      <AboutButtonsNav>
        {buttonsAbout.map((btn, index) => (
          <button
            key={index}
            className={`${btnclass} ${
              btn1 === btn.btn && "bg-[#456ddd] text-[#fff]"
            }`}
            onClick={() => setBtn(btn.btn)}
          >
            {btn.text}
          </button>
        ))}
      </AboutButtonsNav>
      <div id="about-me-inner">
        {btn1 === "1" && <Academics />}
        {btn1 === "2" && <TechnicalSkills />}
        {btn1 === "3" && <Experience />}
        {btn1 === "4" && <Details />}
        {btn1 === "5" && <Courses />}
        {btn1 === "6" && <Achivements />}
      </div>
    </div>
  );
}

export default AboutMe;
