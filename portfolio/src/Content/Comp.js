import React, { useRef, useEffect, useState } from "react";
import CompModal from "./Modal-Comp.js";
import Programmation from "./Comp/Programmation.js";
import Graphique from "./Comp/Graphique.js";
import Formation from "./Comp/Formation.js";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
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
    showNext,
    setShowNext,
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
    <>
      {!showNext && (
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
            </div>
            <button onClick={() => setShowNext(!showNext)}>
              Formation <AiOutlineArrowRight style={{ paddingTop: "0.6rem" }} />
            </button>
          </div>
        </div>
      )}
      {showNext && (
        <div ref={refContainer} className="forma-overlay" id="comp">
          <div className="forma-container">
            <div className="forma-header">
              <h1>Formation</h1>
            </div>
            <div className="forma-items">
              <Formation />
            </div>
            <button onClick={() => setShowNext(!showNext)}>
              <AiOutlineArrowLeft style={{ paddingTop: "0.5rem" }} />{" "}
              Compétences
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Comp;
