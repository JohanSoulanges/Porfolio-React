import React, { useContext, useState, useRef } from "react";
import { projet } from "../Database/Data";

const AppContext = React.createContext();

const allLangague = ["all", ...new Set(projet.map((items) => items.langague))];

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategorie, setSelectedCategorie] = useState(null);
  const [scrolling, setScrolling] = useState(0);
  const [projetTop, setProjetTop] = useState(0);
  const [homeTop, setHomeTop] = useState(0);
  const [compTop, setcomTop] = useState(0);
  const [menuPage, setMenuPage] = useState(0);
  const [mult, setMult] = useState(0);
  const [menuItems, setMenuItems] = useState(
    projet.filter((items) => items.id > 0 && items.id <= 4)
  );

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

  const selectMenuPageUp = (array) => {
    const maxMult = array.length / 4;
    const valeur = [4 * (mult + 1), 4 * (mult + 2)];
    const arrayFinal = array.filter(
      (items) => items.id > valeur[0] && items.id <= valeur[1]
    );
    console.log(valeur);
    setMenuItems(arrayFinal);
    if (mult < maxMult - 1) {
      setMult(mult + 1);
    }
  };

  const selectMenuPageDown = (array) => {
    const valeur = [4 * (mult - 1), 4 * mult];
    const arrayFinal = array.filter(
      (items) => items.id > valeur[0] && items.id <= valeur[1]
    );
    console.log(valeur);
    setMenuItems(arrayFinal);
    if (mult >= 0) {
      setMult(mult - 1);
    }
  };

  const nextPage = (array, index, setIndex) => {
    const maxValeur = array.length;
    if (index < maxValeur) {
      setIndex(index + 1);
    }
    console.log(index);
  };
  const prevPage = (index, setIndex) => {
    if (index >= 2) {
      setIndex(index - 1);
      console.log(index);
    }
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
        selectedItem,
        setSelectedItem,
        selectedCategorie,
        setSelectedCategorie,
        menuPage,
        setMenuPage,
        selectMenuPageUp,
        selectMenuPageDown,
        nextPage,
        prevPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
