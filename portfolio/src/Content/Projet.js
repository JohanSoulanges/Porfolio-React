import React, { useEffect } from "react";
import { useRef } from "react/cjs/react.development";
import { useGlobalContext } from "../Context/AppContext";
import Categories from "./Projet/Categories";
import Menu from "./Projet/Menu";

const Projet = () => {
  const containerProjet = useRef(null);
  const { setProjetTop } = useGlobalContext();
  useEffect(() => {
    setProjetTop(containerProjet.current.getBoundingClientRect().y);
  }, []);

  return (
    <div ref={containerProjet} className="projet-overlay" id="projet">
      <Categories />
      <Menu />
    </div>
  );
};

export default Projet;
