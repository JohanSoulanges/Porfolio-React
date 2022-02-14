import React from "react";
import "../CSS/Question.scss";
import MapQuestion from "./Question/MapQuestion";

const Question = () => {
  return (
    <>
      <section className="main-container-question" id="about">
        <h2 className="title color-bleu">A propos de moi</h2>
        <MapQuestion />
      </section>
    </>
  );
};

export default Question;
