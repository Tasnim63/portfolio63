import React from "react";
import ImageSection from "../components/ImageSection";
import ServicesSection from "../components/ServicesSection";
import Skill from "../components/Skill";

import Tittle from "../components/Tittle";
import design from "../images/graphic-design.png";
import intelisnce from "../images/app-development.png";
import gamedev from "../images/coding.png";
export default function AboutPage() {
  return (
    <>
      <div className="AboutPage">
        <Tittle title={"About Me"} span={"About Me"} />
        <ImageSection />
        <Tittle title={"My Skills"} span={"My Skills"} />
        <div className="skillsContainer">
          <Skill skill={"Html"} progress={"80%"} width={"80%"} />
          <Skill skill={"Css"} progress={"80%"} width={"80%"} />
          <Skill skill={"Taiwind"} progress={"80%"} width={"80%"} />
          <Skill skill={"Boottrap 5"} progress={"80%"} width={"80%"} />
          <Skill skill={"javascript"} progress={"70%"} width={"70%"} />
          <Skill skill={"React js"} progress={"70%"} width={"70%"} />
          <Skill skill={"Node js"} progress={"30%"} width={"30%"} />
          <Skill skill={"MongoDb"} progress={"30%"} width={"30%"} />
          <Skill skill={"Express js"} progress={"30%"} width={"30%"} />
        </div>
        <Tittle title={"Services"} span={"Services"} />
        <div className="services-container">
          <ServicesSection
            image={design}
            title={"web Design"}
            text={
              "I can design any kind of websites. I can build super responsive websites.It will be pixel perfect. I uesd css,scss,bootstrap,tailwind for desiging websites."
            }
          />
          <ServicesSection
            image={intelisnce}
            title={"web Development"}
            text={
              "I can develop any kind of website. I can add functionality for any websites.It always try to make it professional. I know javacript functionality for developing websites."
            }
          />
          <ServicesSection
            image={gamedev}
            title={"Problem solving"}
            text={
              "I always practise problem sloving. This practise will grow my skills. It will make me professional. I know javacript functionality developing websites."
            }
          />
        </div>
      </div>
    </>
  );
}
