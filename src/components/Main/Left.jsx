import React from "react";

import { FaInstagram } from "react-icons/fa6";
import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
export default function Left() {
  return (
    <div id="main-left" className=" border-2 p-3">
      <h1 id="name">Devansh Raghuwanshi</h1>
      <h1 id="job" className="text-center">
        {"<>"}Full Stack Software Developer {"</>"}
      </h1>
      <div id="links" className="mt-[20px]">
        <ul className=" flex gap-3 justify-center relative">
          <li id="ig">
            <a
              href="https://www.instagram.com/_devaanssh_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="rounded-full text-[30px] text-pink-700 " />
            </a>
          </li>
          <li id="linkedin">
            <a
              href="http://www.linkedin.com/in/devofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-[30px] text-white " />
            </a>
          </li>
          <li id="github">
            <a
              href="http://www.github.com/sigmadev92"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-[30px] text-white " />
            </a>
          </li>
          <li id="yt">
            <a
              href="http://www.youtube.com/@RecluseD07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-[30px] text-red-700 " />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
