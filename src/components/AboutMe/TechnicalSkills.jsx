import React from "react";

function TechnicalSkills() {
  return (
    <div id="tech-skills" className="mx-auto h-[90%]">
      <div>
        <strong>Web Development :</strong>
        <ul style={{ listStyleType: "circle", listStylePosition: "inside" }}>
          <li>Frontend : HTML, CSS, JavaScript,EmbeddedJs</li>
          <li>Backend : NodeJs, Multer</li>
          <li>Frameworks : Express, Bootstrap, Tailwind, React, Redux</li>
          <li>Databases : Postgres, MongoDb, Firebase, MySQL</li>
          <li>Tools : Visual Studio, VS Code, IntelliJ Idea, Android Studio</li>
        </ul>

        <p></p>
        <p>
          <strong>Desktop GUI :</strong> Electron, JavaFx, WPF{" "}
        </p>
        <p>
          <strong>Programming Languages :</strong> Java, C#, Python, C++, SQL
        </p>
        <p>
          <strong>Data Science and Analytics :</strong> PowerBI, MS Excel
        </p>
        <p>
          <strong>3d Animation and Game Dev :</strong> Blender, Unity, Snapchat
          Lens Studio
        </p>
        <p>
          <strong>Utility Tools :</strong> MS Word, Powerpoint, GIMP2, Canva,
          Gen-AI , Audacity, VS
        </p>
        <p>
          <strong>DevOps :</strong> Docker, Git, Cloudinary, AWS EC2
        </p>
      </div>
    </div>
  );
}

export default TechnicalSkills;
