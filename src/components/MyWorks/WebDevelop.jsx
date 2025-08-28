import React from "react";
function WebDevelop() {
  return (
    <figure className="projects-div">
      <div className="works-img-div">
        <img
          src={
            "https://res.cloudinary.com/dwyeologv/image/upload/v1756371816/Screenshot_2024-10-21_162639_tsd7s9.png"
          }
          alt="thumbnail"
        />
      </div>
      <figcaption>
        <h2 className="app-name">Job Portal</h2>
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
