import React from "react";
import aboutImg from "../images/focus-software-developer-hands-typing-source-code-keyboard-while-looking-computer-screens-with-programming-interface-programer-sitting-desk-with-clipboard-writing-algorithm.jpg";
import cv from '../images/Tamanna_Akter.pdf'
export default function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={aboutImg} alt="" />
      </div>
      <div className="about_info">
        <h6>
          I am <span>junior React js  </span>
        </h6>
        <p>
        Developer a with solid knowledge in different
          technologies & enough experience in creating & designing super
          responsive websites.   I am comfort in Html 5 , CSS 3,tailwind,daisyUi components , Bootstrap
          5 , JavaScript, ES6, Rest API, React JS React Bootstrap, React Router,
          Firebase Authentication ,node js ,mongodb and express js.
        </p>
        <div className="about_button">
         <a href={cv} className=" btn"  download >Download Cv</a>
        </div>
      </div>
    </div>
  );
}
