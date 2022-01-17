import React, { useContext, useState, useRef } from "react";
import { projet } from "../Database/Data";

const AppContext = React.createContext();

const allLangague = ["all", ...new Set(projet.map((items) => items.langague))];

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [scrolling, setScrolling] = useState(0);
  const [projetTop, setProjetTop] = useState(0);
  const [homeTop, setHomeTop] = useState(0);
  const [compTop, setcomTop] = useState(0);
  const [menuItems, setMenuItems] = useState(projet);

  const projetsSmooth = () => {
    let scroll = window.scrollY;
    setInterval(() => {
      if (scroll < projetTop) {
        scroll++;
        window.scroll(0, scroll);
      }
    }, 1);
  };

  const filterMenu = (langague) => {
    if (langague === "all") {
      setMenuItems(projet);
      return;
    }
    const newItems = projet.filter((items) => items.langague === langague);
    console.log(newItems);
    setMenuItems(newItems);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        showSidebar,
        setShowSidebar,
        scrolling,
        setScrolling,
        projetTop,
        setProjetTop,
        homeTop,
        setHomeTop,
        compTop,
        setcomTop,
        projetsSmooth,
        showModal,
        setShowModal,
        allLangague,
        menuItems,
        filterMenu,
        showNext,
        setShowNext,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
