import React from "react";
import "../components/ProjectPage/projectpage.css";
import { FaFolderOpen } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
function Projects() {
  const projectsInfo = [
    {
      heading: "Web Development",
      keyword: "web-dev",
      subCategory: true,
      content: [
        {
          heading: "Frontend",
          keyword: "frontend",
          content: [
            { link: "/html-css", name: "HTML+CSS" },
            { link: "/css-shapes", name: "CSS Shapes" },
            { link: "/css-animations", name: "CSS Animations" },
            { link: "/js", name: "JavaScript" },
            { link: "/react", name: "ReactJS" },
          ],
        },
        {
          heading: "Full Stack",
          keyword: "full-stack",
          content: [
            { link: "/mern", name: "MERN" },
            { link: "/embededjs", name: "EmbededJS" },
            { link: "/django", name: "Django+React" },
            { link: "/spring-boot", name: "SpringBoot + React" },
            { link: "/laravel", name: "Laravel + React" },
          ],
        },
      ],
    },
    {
      heading: "Desktop Applications",
      keyword: "desktop",
      content: [
        { link: "/electron-node", name: "Electron+NodeJS" },
        { link: "/java-gui", name: "Java + JavaFx" },
        { link: "/cpp-gui", name: "C++ GUI" },
        { link: "/c#-wpf", name: "C#+WPF" },
        { link: "/python-gui", name: "Python GUI" },
      ],
    },
    {
      heading: "3d Modelling and Animations",
      keyword: "3d-modelling",
      content: [{ link: "/blender", name: "Blender" }],
    },
    {
      heading: "Game Development",
      keyword: "game-dev",
      content: [
        { link: "/unity", name: "C# + Unity" },
        { link: "/browser", name: "JS + Browser" },
      ],
    },
    {
      heading: "Data Science, AI and ML",
      keyword: "data-science",
      content: [
        { link: "/ms-excel", name: "MS Excel" },
        { link: "/powerbi", name: "Power BI" },
        { link: "/python", name: "Python" },
      ],
    },
  ];

  const navigate = useNavigate();
  return (
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
                            onClick={() =>
                              navigate(
                                `/${box.keyword}/${part.keyword}${skill.link}`
                              )
                            }
                          >
                            <FaFolderOpen className="folder-icon" />
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
                      onClick={() => navigate(`/${box.keyword}${skill.link}`)}
                    >
                      <FaFolderOpen className="folder-icon" />
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
  );
}

export default Projects;
