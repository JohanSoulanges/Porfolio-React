import React from "react";
import "../CSS/Project.scss";
import Categories from "./Projet/Categories";
import Menu from "./Projet/Menu";

const Project = () => {
  return (
    <>
      <section className="main-container-projet" id="projet">
        <h2 className="title color-bleu">Projet</h2>
        <Categories />
        <Menu />
      </section>
    </>
  );
};

export default Project;
