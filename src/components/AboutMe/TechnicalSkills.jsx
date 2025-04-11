import React from "react";

function TechnicalSkills() {
  return (
    <div id="tech-skills" className="about-me-div">
      <h1>Skills</h1>
      <div>
        <strong>Web Development :</strong>
        <ul style={{ listStyleType: "circle", listStylePosition: "inside" }}>
          <li>Frontend : HTML, CSS, JavaScript,EmbeddedJs</li>
          <li>Backend : NodeJs, Multer</li>
          <li>Frameworks : Express, Bootstrap, Tailwind, React, Redux</li>
          <li>Databases : Postgres, MongoDb</li>
        </ul>

        <p></p>
        <p>
          <strong>Desktop GUI :</strong> Electron, JavaFx, WPF{" "}
        </p>
        <p>
          <strong>Programming Languages :</strong> Java, C#, Python, C++, PHP,
          SQL
        </p>
        <p>
          <strong>Data Science and Analytics :</strong> PowerBI, MS Excel
        </p>
        <p>
          <strong>3d Animation and Game Dev :</strong> Blender, Unity
        </p>
        <p>
          <strong>Utility Tools :</strong> MS Word, Powerpoint, GIMP2, Canva,
          Gen-AI
        </p>
        <p>
          <strong>DevOps :</strong> Docker, Git, Cloudinary
        </p>
      </div>
    </div>
  );
}

export default TechnicalSkills;
