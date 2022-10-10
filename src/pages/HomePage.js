import React from "react";
import { AiFillGithub,AiFillLinkedin,AiFillFacebook } from 'react-icons/ai';
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <div className="HomePage">
        <header className="hero">
          <h1 className="hero_text">
          Hi , I am
            <span> Tamanna</span>
          </h1>
          <h6>Junior React js Developer</h6>
          <div className="icons">
            <a href="https://github.com/Tasnim63"><AiFillGithub></AiFillGithub></a>
      <span></span>
      <span><AiFillLinkedin></AiFillLinkedin></span>
      <span><AiFillFacebook></AiFillFacebook></span>
          </div>
        </header>
      </div>
    </>
  );
}
