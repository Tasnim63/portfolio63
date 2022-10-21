import React from "react";
import ImageSection from "../components/ImageSection";
import ServicesSection from "../components/ServicesSection";
import Skill from "../components/Skill";

import Tittle from "../components/Tittle";
import design from '../images/design.svg'
import intelisnce from '../images/intelligence.svg';
import gamedev from '../images/game-dev.svg';
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
          <ServicesSection image={design} title={'web Design'} text={'thishseh hsh sjdh dee dhfh dhdd ueeuue dduduue  uieueue thishseh hsh sjdh dee dhfh dhdd ueeuue dduduue  uieueue'} />
          <ServicesSection image={intelisnce} title={'web Development'} text={'thishseh hsh sjdh dee dhfh dhdd ueeuue dduduue  uieueue thishseh hsh sjdh dee dhfh dhdd ueeuue dduduue  uieueue'} />
          <ServicesSection image={gamedev} title={'Problem solving'} text={'thishseh hsh sjdh dee dhfh dhdd ueeuue dduduue  uieueue thishseh hsh sjdh dee dhfh dhdd ueeuue dduduue  uieueue'} />
        
        </div>
      </div>
    </>
  );
}
