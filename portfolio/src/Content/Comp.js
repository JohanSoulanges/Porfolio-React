import React from "react";
import "../CSS/Comp.scss";
import logoDev from "../images/3442344.png";
import logoForma from "../images/3534031.png";

const Comp = () => {
  return (
    <>
      <section className="main-container-comp" id="comp">
        <div className="expert-header">
          <h2 className="title color-bleu">Mon Expertise</h2>
        </div>
        <div className="expert-container">
          <div className="dev-container">
            <span className="icone">
              <img src={logoDev} alt="" />
            </span>
            <h3 className="color-bleu sub-title">Développement</h3>
            <p className="">
              Voici touts les langagues ou frameworks sur les quels j'ai été
              former ou appris en autodidacte.
            </p>
            <h5 className="color-bleu inf-title">Langague Utiliser :</h5>
            <blockquote className="bloc">
              Html/CSS
              <br />
              SASS/SCSS
              <br />
              Javascript
              <br />
              Angular
              <br />
              Node JS
              <br />
              React
              <br />
              Angular
              <br />
              ...
            </blockquote>
          </div>
          <div className="forma-container">
            <span className="icone">
              <img src={logoForma} alt="" />
            </span>
            <h3 className="color-bleu sub-title">Expériences et Formation</h3>
            <p className="">
              Voivi toutes les formations et expériences que j'ai éffectuer au
              cours de ma vie.
            </p>
            <h5 className="color-bleu inf-title">Expériences effectuer :</h5>
            <blockquote className="bloc">
              Licence MIPI :<br />
              &nbsp;Initiation au langage informatique PYTHON
              <br />
              <br />
              IFOCOP :<br />
              Apprentisage du langague Javascript, Angular, React, NodeJS...
              <br />
              Perfection du langague HTML et CSS
              <br />
              Mise en place de divers project
              <br />
              <br />
              Dyma :<br /> Initiation au langage Javascript, HTML et CSS
              <br />
              Mise en place de divers project
              <br />
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default Comp;
