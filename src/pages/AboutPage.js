import React from "react";
import ImageSection from "../components/ImageSection";
import Skill from "../components/Skill";

import Tittle from "../components/Tittle";


export default function AboutPage() {
  return (
    <>
      <div className="AboutPage">
        <Tittle title={"About Me"} span={"About Me"} />
        <ImageSection />
        <Tittle title={"My Skills"} span={"My Skills"} />
     <div className="skills-container">
     <Skill skill={'Html'} progress={'80%'} width={'80%'} />
     <Skill skill={'Css'} progress={'80%'} width={'80%'} />
     <Skill skill={'Taiwind'} progress={'80%'} width={'80%'} />
     <Skill skill={'Boottrap 5'} progress={'80%'} width={'80%'} />
     <Skill skill={'javascript'} progress={'70%'} width={'70%'} />
     <Skill skill={'React js'} progress={'70%'} width={'70%'} />
     <Skill skill={'Node js'} progress={'30%'} width={'30%'} />
     <Skill skill={'MongoDb'} progress={'70%'} width={'70%'} />
     <Skill skill={'Express js'} progress={'30%'} width={'30%'} />
     </div>
      </div>
    </>
  );
}
