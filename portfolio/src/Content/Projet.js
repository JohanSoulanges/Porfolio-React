import React, { useEffect } from "react";
import { useRef } from "react/cjs/react.development";
import { useGlobalContext } from "../Context/AppContext";
import { LayoutGroup, motion } from "framer-motion";
import { projet } from "../Database/Data";
import Categories from "./Projet/Categories";
import Menu from "./Projet/Menu";

const Projet = () => {
  const containerProjet = useRef(null);
  const {
    setProjetTop,
    isOpen,
    menuPage,
    setMenuPage,
    selectMenuPageUp,
    selectMenuPageDown,
  } = useGlobalContext();
  useEffect(() => {
    setProjetTop(containerProjet.current.getBoundingClientRect().y);
  }, []);

  const valeur = (mult) => {
    return 4 * mult;
  };

  return (
    <div ref={containerProjet} className="projet-overlay" id="projet">
      <div>
        <div className="projet-container">
          <Categories />
          <Menu />
        </div>
        <button onClick={() => selectMenuPageUp(projet)}>X</button>
        <button onClick={() => selectMenuPageDown(projet)}>Y</button>
      </div>
    </div>
  );
};

export default Projet;
