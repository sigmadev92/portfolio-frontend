function ProjectDisplay() {
  const disp = {
    "html-css": [
      {
        name: "Resume Website",
        url: "https://sample-resume-simple.netlify.app/resume.html",
        webApp: true,
        webType: "static, Single Page, Responsive",
      },
      {
        name: "Indian Cricket team",
        url: "https://indian-cricket-team-htmlcss.netlify.app/",
      },
      {
        name: "Flipkart UI Clone",
        url: "https://ui-clone-1-fpk.netlify.app/",
      },
      {
        name: "Dashboard UI",
        url: "https://db-ui-1.netlify.app/",
      },
      {
        name: "Ed tech UI",
        url: "https://ed-tech-ui-capstone.netlify.app/",
      },
    ],
    "snapchat-lens": [
      {
        name: "soft-day",
        url: "https://www.snapchat.com/lens/6a626c003f234e7785332be0c20e9da0?type=SNAPCODE&metadata=01",
      },
    ],
    blender: [
      {
        name: "car",
        url: "",
      },
    ],
    js: [
      {
        name: "Emoji-guess-game",
        url: "https://emoji-guess-1.netlify.app/",
      },
    ],
    react: [
      {
        name: "Portfolio-website",
        url: "https://www.devansh-folio.netlify.app",
      },
    ],
    "socket-io": [
      {
        name: "Chatter Up",
        url: "NA",
      },
    ],
    embededjs: [
      {
        name: "Job Portal",
        url: "NA",
      },
      {
        name: "Flight Booking App",
        url: "NA",
      },
      {
        name: "The Achar walas",
        url: "NA",
      },
    ],
    mern: [
      {
        name: "Job Portal",
        url: "NA",
      },
      {
        name: "Social Media App",
        url: "NA",
      },
      {
        name: "E-commerce",
        url: "NA",
      },
      {
        name: "Flight Booking App",
        url: "NA",
      },
      {
        name: "The Achar Walas",
        url: "NA",
      },
    ],
  };
  const link = window.location.pathname.split("/")[2];

  return (
    <div className="h-[500px] p-4">
      {disp[link].length >= 1 ? (
        <ul className="flex gap-4">
          {disp[link].map((projectLink, index) => {
            return (
              <li key={index}>
                {projectLink.url === "NA" ? (
                  <h3>{projectLink.name} Adding soon</h3>
                ) : (
                  <a
                    href={projectLink.url}
                    target="blank"
                    className="hover:bg-blue-400 px-3 py-2 border-2"
                  >
                    {projectLink.name}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>No projects added yet</h3>
      )}
    </div>
  );
}

export default ProjectDisplay;
