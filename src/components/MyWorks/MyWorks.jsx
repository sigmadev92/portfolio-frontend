import React from "react";
import "./myworks.css";
import WebDevelop from "./WebDevelop";
// import GuiApp from "./GuiApp";
// import GameDevelopment from "./GameDevelopment";
// import ThreedModelling from "./ThreedModelling";
import { useNavigate } from "react-router-dom";
function MyWorks() {
  const navigate = useNavigate();
  return (
    <div id="my-works">
      <h1>My Projects</h1>
      <div id="projects-container">
        <WebDevelop />
        {/* <GuiApp />
        <GameDevelopment />
        <ThreedModelling /> */}
      </div>
      <div className="flex flex-row justify-center pt-3">
        <button
          className="bg-black py-2 px-5 hover:bg-white hover:text-black text-right"
          onClick={() => navigate("/projects")}
        >
          View More projects
        </button>
      </div>
    </div>
  );
}

export default MyWorks;
