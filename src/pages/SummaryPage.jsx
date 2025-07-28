import React from "react";

export default function SummaryPage() {
  function getTimeBasedGreeting() {
    const now = new Date();
    const hour = now.getHours();

    let greeting = "";

    if (hour >= 5 && hour < 12) {
      greeting = "Good morning and welcome to our website.";
    } else if (hour >= 12 && hour < 17) {
      greeting = "Good afternoon, thank you for visiting us today.";
    } else if (hour >= 17 && hour < 21) {
      greeting = "Good evening, we’re glad to have you here.";
    } else {
      greeting = "Greetings and thank you for visiting us at this hour.";
    }

    return greeting;
  }

  return (
    <div className="min-h-[100vh] w-[100%] px-2 pt-1 md:w-[70%] pr-2 md:mx-auto overflow-y-auto flex flex-col gap-2">
      <p>
        <i className="text-[10px] ">
          Last updated on : 28 July 2025 10:00 PM GMT+05:30
        </i>
        <br />
        <br />
        <span className="text-blue-500">{getTimeBasedGreeting()}</span>
        <br />
        My name is <strong>Devansh Raghuwanshi</strong>
        <br />
        <strong className="text-[#d53be3]">
          {" "}
          MERN Stack Developer | Game Developer | DBA (MySQL,Postgres) |
          Environmentalist - Finding Ways of Healthy Development | Experience in
          Teaching Undergraduate Maths Subjects
        </strong>
      </p>
      <div className="p-2 border-[2px] w-[95%] mx-2  rounded-[0.3rem] text-[12px] my-3">
        <p>
          <span>Mostly active on </span>
        </p>
        <a
          href="https://www.naukri.com/code360/profile/devOndev"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ff5112ab] py-1 px-2 rounded-[0.3rem] hover:bg-[#e67f44] mt-2 inline-block"
        >
          Coding Ninjas
        </a>
      </div>
      <p>
        I completed my school education at{" "}
        <i>Delhi Public School Vijaypur in 2019 </i>
        in <b>science Stream</b>. <br />
        My interest developed to solve complex mathematical problems and I
        decided to study science in depth and took admission in{" "}
        <strong>
          <span className="text-red-500">
            BSc [Mathematics, Computer Science, Physics]
          </span>{" "}
          at{" "}
          <a
            href="https://www.juet.ac.in"
            target="blank"
            className="text-blue-500"
          >
            Jaypee University of Engineering and Technology Guna
          </a>{" "}
          in <u>2019</u>.
        </strong>
      </p>
      <p>
        That was the best decision of my life as I learnt and understood so many
        things. Though I was a student of Mathematics but stil the University
        provided me with all possible disciplines like Computer Science,
        Mechanics and Physics.
      </p>
      <p>
        Till my final year, I gained experience in many technologies of computer
        science like making websites and working on different languages like
        Python, C++, Matlab etc. Also they taught me essential concepts like DSA
        and DBMS.
      </p>
      <p>
        I graduated in 2022 and for 2 years I experimented and learned so many
        things like multimedia editing, 3d modelling and animations. I prepared
        for exams like SBI PO, SSC CGL and MPPSC. Unfortunately I couldn't crack
        those exams but gained much knowledge in solving aptitude and GS
        questions. I later taught many students Quants and Reasoning.
      </p>
      <p>
        Now from Feb 2025 onwards, I decided to continue my career in Software
        development field. I have made web Apps, desktop apps, animations and 3d
        modelling and have a keen interest in Data Science as well.
      </p>
    </div>
  );
}
