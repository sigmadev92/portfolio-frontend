import React from "react";
import "./main.css";
import WebDev from "../WebDev";
import Left from "./Left";
import MyPIc from "./MyPIc";
function Main() {
  return (
    <main id="home-main">
      <Left />
      <MyPIc />
      <WebDev />
    </main>
  );
}

export default Main;
