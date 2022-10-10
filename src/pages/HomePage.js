import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

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
            <a href="https://github.com/Tasnim63" className="icon-holder">
              <AiFillGithub className="icon gh"></AiFillGithub>
            </a>
            <a href="https://www.linkedin.com/in/tamanna-akter-95101a228/" className="icon-holder">
              <AiFillLinkedin className="icon li"></AiFillLinkedin>
            </a>
            <a href="https://github.com/Tasnim63" className="icon-holder">
              <AiFillFacebook className="icon fb"></AiFillFacebook>
            </a>
          </div>
        </header>
      </div>
    </>
  );
}
