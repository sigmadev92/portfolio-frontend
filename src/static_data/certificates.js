import cert1 from "../images/aptitude-certificate-cn.png";
import cert2 from "../images/nodejs-top-performer.png";
import cert3 from "../images/cert-gen-ai.png";
import cert4 from "../images/Operating-sys-CN.png";
import cert5 from "../images/forage-cert.png";
import cert6 from "../images/codsoft-cert.jpeg";
import cert7 from "../images/front-end-cert.png";
const certificationsArr = [
  {
    imgURL: cert3,
    name: "Web Dev with Generative AI",
    concepts: "Generative AI, Langchain, LLMs",
    org: "Coding Ninjas",
  },

  {
    imgURL: cert2,
    name: "Backend with Nodejs| Certifcate of Excellence",
    concepts: "Nodejs, Express, Mongodb, MVC, REST API, Mailing, Documentation",
    org: "Coding Ninjas",
  },
  {
    imgURL: cert4,
    name: "Operating System",
    concepts: "Linux, OS, Kernel, Fragmentation",
    org: "Coding Ninjas",
  },
  {
    imgURL: cert5,
    name: "Accenture Solution Architect Simulation",
    concepts: "Software Development Life Cycle",
    issuedBy: "Accenture",
    org: "Forage",
  },
  {
    imgURL: cert1,
    name: "Aptitude",
    concepts: "Numerical Solving, PCG, Problem solving, Quants, Reasoning",
    org: "Coding Ninjas",
  },
  {
    imgURL: cert7,
    name: "Frontend - HTML5,CSS3,JS",
    concepts:
      "HTML,CSS,JS,ES6 syntax,Bootstrap, Animations, CSS Preprocessors, SCSS",
    org: "Coding Ninjas",
  },
  {
    imgURL: cert6,
    name: "CODSOFT Internship Certificate",
    concepts: "MERN, JOb Portal Web Application",
    org: "CODSOFT",
  },
];

const pendingCert = [
  {
    imgURL: "",
    name: "Full Stack Web Development Bootcamp",
    concepts: "MERN Stack, SQL, Git, Web3",
    instructor: "Dr Angela Yu",
    org: "Udemy",
  },

  {
    imgURL: "",
    name: "Business Analytics with Power BI",
    concepts: "Power BI",
    issuedBy: "Maven Analytics",
    org: "Udemy",
  },
  {
    imgURL: "",
    name: "Java",
    concepts: "Core Java, Networking, JDBC, JavaFx",
    instructor: "Tim Buchalka",
    org: "Udemy",
  },
  {
    imgURL: "",
    name: "C#",
    concepts:
      "C# fundamentals, Unity3d game dev, WPA, Generics, , JDBC, JavaFx",
    instructor: "Denis Panjuta",
    issuedBy: "Tutorials.eu",
    org: "Udemy",
  },
  {
    imgURL: "",
    name: "Data Science Bootcamp",
    concepts: "Probabilty, Statistics, Python, Regression",
    issuedBy: "365 careers",
    org: "Udemy",
  },
  {
    imgURL: "",
    name: "Blender: Beginner to expert",
    concepts: "Blender3d",
    issuedBy: "Creativity Unleashed",
    org: "Udemy",
  },
];

export default certificationsArr;

export { pendingCert };
