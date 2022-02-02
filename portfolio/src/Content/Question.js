import React, { useState } from "react";
import "../CSS/Question.scss";
import MapQuestion from "./Question/MapQuestion";

const Question = () => {
  return (
    <>
      <section className="main-container-question">
        <h2 className="title color-bleu">
          Logiciel de travail ( a changer, pas sur le utiliter )
        </h2>
        <MapQuestion />
      </section>
    </>
  );
};

export default Question;
