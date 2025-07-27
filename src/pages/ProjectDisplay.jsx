import disp from "../static_data/disp";
function ProjectDisplay() {
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
