import React from "react";
import "../components/ProjectPage/projectpage.css";
import { FaFolderOpen } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import projectsInfo from "../static_data/projectsInfo";
function Projects() {
  const navigate = useNavigate();
  return (
    <>
      <h3>Blue Folders are empty. Will add projects soon.</h3>
      <div id="projectpage-div" className="bg-black text-white justify-center">
        {projectsInfo.map((box, indexOuter) => {
          return (
            <div
              className="projectpage-divs"
              id={`projectpage-${box.keyword}`}
              key={indexOuter}
            >
              <h2 className="box-heading">{box.heading}</h2>
              {box.subCategory ? (
                box.content.map((part, indexMiddle) => {
                  return (
                    <>
                      <h3 className="box-subheading">{part.heading}</h3>
                      <div className="folder-container" key={indexMiddle}>
                        {part.content.map((skill, indexInner) => {
                          return (
                            <div
                              className="folder"
                              key={indexInner}
                              onClick={() => {
                                if (skill.empty) {
                                  alert("Sorry! No projects added yet");
                                  return;
                                }
                                navigate(
                                  `/${box.keyword}-${part.keyword}${skill.link}`
                                );
                              }}
                            >
                              <FaFolderOpen
                                className={`${
                                  skill.empty
                                    ? "folder-icon-faded"
                                    : "folder-icon"
                                }`}
                              />
                              <span className="folder-name truncate">
                                {skill.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  );
                })
              ) : (
                <div className="folder-container">
                  {box.content.map((skill, indexInner) => {
                    return (
                      <div
                        className="folder"
                        key={indexInner}
                        onClick={() => {
                          if (skill.empty) {
                            alert("Projects are not added yet");
                            return;
                          }
                          navigate(`/${box.keyword}${skill.link}`);
                        }}
                      >
                        <FaFolderOpen
                          className={`${
                            skill.empty ? "folder-icon-faded" : "folder-icon"
                          }`}
                        />
                        <span className="folder-name">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
