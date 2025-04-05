import React from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Main from "../components/Main/Main";
import MyWorks from "../components/MyWorks/MyWorks";
import ContactMe from "../components/ContactMe/ContactMe";
// import pic from "../images/boy.jpg"
export default function Home() {
  return (
    <>
      <Main />
      <AboutMe />
      <MyWorks />
      <ContactMe />
    </>
  );
}
