import React from "react";
import Tittle from "../components/Tittle";
import ImageSection from "./ImageSection";

export default function AboutPage() {
  return (
    <>
      <div className="AboutPage">
        <Tittle title={"About Me"} span={"About Me"} />
        <ImageSection />
      </div>
    </>
  );
}
