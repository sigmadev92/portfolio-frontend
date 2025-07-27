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
          { link: "/js", name: "JS-DOM" },
          { link: "/react", name: "ReactJS" },
        ],
      },
      {
        heading: "Full Stack",
        keyword: "full-stack",
        content: [
          { link: "/mern", name: "MERN" },
          { link: "/mern-with-nextjs", name: "NextJS", empty: true },
          { link: "/embededjs", name: "MVC" },
          { link: "/socket-io", name: "Sockets" },
          { link: "/rest-api", name: "RestAPI", empty: true },
          { link: "/django", name: "Django+React", empty: true },
          { link: "/spring-boot", name: "SpringBoot + React", empty: true },
          { link: "/laravel", name: "Laravel + React", empty: true },
          { link: "/wordpress", name: "Wordpress", empty: true },
        ],
      },
    ],
  },
  {
    heading: "Desktop Applications",
    keyword: "desktop",
    content: [
      { link: "/electron-node", name: "Electron+NodeJS", empty: true },
      { link: "/java-gui", name: "Java + JavaFx", empty: true },
      { link: "/cpp-gui", name: "C++ GUI", empty: true },
      { link: "/c#-wpf", name: "C#+WPF", empty: true },
      { link: "/python-gui", name: "Python GUI", empty: true },
    ],
  },
  {
    heading: "3d Modelling and Animations",
    keyword: "3d-modelling",
    content: [
      { link: "/blender", name: "Blender", empty: true },
      { link: "/snapchat-lens", name: "Snapchat Lens", empty: true },
    ],
  },
  {
    heading: "Game Development",
    keyword: "game-dev",
    content: [
      { link: "/unity", name: "C# + Unity", empty: true },
      { link: "/browser", name: "JS + Browser", empty: true },
    ],
  },
  {
    heading: "Data Science, AI and ML",
    keyword: "data-science",
    content: [
      { link: "/ms-excel", name: "MS Excel", empty: true },
      { link: "/powerbi", name: "Power BI", empty: true },
      { link: "/python", name: "Python", empty: true },
    ],
  },
  {
    heading: "Android Development",
    keyword: "android",
    content: [
      { link: "/kotlin", name: "Java + Kotlin", empty: true },
      { link: "/react-native", name: "React Native", empty: true },
      { link: "/flutter", name: "Flutter", empty: true },
    ],
  },
];

export default projectsInfo;
