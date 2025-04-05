import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <div id="heading" onClick={() => navigate("/")}>
        <h1>Portfolio De 191G001</h1>
      </div>
      <div id="nav-links">
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li>
            <a href="/#about-me">About Me</a>
          </li>
          <li>
            <a href="/#my-works">My Works</a>
          </li>
          <li>
            <a href="/#contact-me">Contact Me</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
