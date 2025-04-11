import React from "react";
import socialMediaImg from "../../images/social-media-ss.png";
function WebDevelop() {
  return (
    <figure className="projects-div">
      <div className="works-img-div">
        <img src={socialMediaImg} alt="mail-scene" />
      </div>
      <figcaption>
        <h2 className="app-name">Social Media App</h2>
        <h3 className="app-tech">Full Stack MERN + Boostrap</h3>
        <div id="links">
          <a
            href="https://social.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            View
          </a>
          <a
            href="https://github.com/sigmadev92/social-media-frontend"
            target="_blank"
            rel="noreferrer"
          >
            Frontend
          </a>
          <a
            href="https://github.com/sigmadev92/social-media-backend"
            target="_blank"
            rel="noreferrer"
          >
            Backend
          </a>
        </div>
      </figcaption>
    </figure>
  );
}

export default WebDevelop;
