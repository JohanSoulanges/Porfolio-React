import React, { useRef, useEffect, useState } from "react";
import CompModal from "./Modal-Comp.js";
import Programmation from "./Comp/Programmation.js";
import Graphique from "./Comp/Graphique.js";
import Formation from "./Comp/Formation.js";
import { useGlobalContext } from "../Context/AppContext";
import { motion } from "framer-motion";

const Comp = () => {
  const {
    scrolling,
    setScrolling,
    setShowSidebar,
    setIsSidebarOpen,
    homeTop,
    setHomeTop,
  } = useGlobalContext();
  const refContainer = useRef(null);
  useEffect(() => {
    function handleScroll() {
      const scroll = window.scrollY;
      setScrolling(scroll);
    }
    setHomeTop(refContainer.current.getBoundingClientRect().y);
    if (scrolling >= homeTop && scrolling >= 900) {
      setShowSidebar(true);
    } else {
      setShowSidebar(false);
      setIsSidebarOpen(false);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [scrolling]);
  return (
    <div ref={refContainer} className="comp-overlay" id="comp">
      <div className="comp-container">
        <div className="comp-header">
          <h1>Compétences</h1>
        </div>
        <div className="comp-items">
          <h2>Programmation</h2>
          <Programmation />
          <h2>Outil Graphique</h2>
          <Graphique />
          {/* <h2>Formation</h2>
          <Formation /> */}
        </div>
      </div>
      {/* <CompModal /> */}
    </div>
  );
};

export default Comp;
