import React from "react";
import { useNavigate } from "react-router-dom";

export default function Details() {
  const navigate = useNavigate();
  return (
    <div
      id="details"
      className="about-me-div"
      onClick={() => navigate("/summary")}
    >
      <h1>Summary</h1>
      <p>
        Hello, My name is Devansh Raghuwanshi. <br />
        I completed my school education at Delhi Public School Vijaypur in 2019
        in science Stream. <br />
        My interest developed to solve complex mathematical problems and I
        decided to study science in depth and took admission in BSc H
        Mathematics at Jaypee University of Eng and Tech, Guna in 2019.
        <br />
        That was my best decision of my life as I learnt and understood so many
        things. Though I was a student of Mathematics but stil the University
        provided me with all possible disciplines like Computer Science,
        Mechanics and Physics.
        <br />
        Till my final year, I gained experience in many technologies of computer
        science like making websites and working on different languages like
        Python, C++, Matlab etc. Also they taught me essential concepts like DSA
        and DBMS
      </p>
    </div>
  );
}
