function ProjectDisplay() {
  const disp = {
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
  };
  const link = window.location.pathname.split("/")[2];

  return (
    <div className="h-[500px] p-4">
      {disp[link].length >= 1 ? (
        <ul className="flex gap-4">
          {disp[link].map((projectLink, index) => {
            return (
              <li key={index}>
                <a
                  href={projectLink.url}
                  target="blank"
                  className="hover:bg-blue-400 px-3 py-2 border-2"
                >
                  {projectLink.name}
                </a>
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
