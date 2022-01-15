import React, { useRef, useEffect, useState } from "react";
import CompModal from "./Modal-Comp.js";
import Langague from "./Comp/Langague.js";
import Framework from "./Comp/Framework.js";
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
    <div ref={refContainer} className="comp" id="comp">
      <div className="comp-header">
        <h1>Compétences</h1>
      </div>
      <div className="comp-container">
        <h2>Langague</h2>
        <Langague />
        <h2>Framework et Librairie</h2>
        <Framework />
        <h2>Formation</h2>
        <Formation />
      </div>
      <CompModal />
    </div>
  );
};

export default Comp;
