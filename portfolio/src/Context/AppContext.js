import React, { useContext, useState, useRef } from "react";
import { projet } from "../Database/Data";

const AppContext = React.createContext();

const allLangague = ["all", ...new Set(projet.map((items) => items.langague))];

console.log(allLangague[4]);

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showNext, setShowNext] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategorie, setSelectedCategorie] = useState(0);
  const [maxPage, setMaxpage] = useState(null);
  const [scrolling, setScrolling] = useState(0);
  const [projetTop, setProjetTop] = useState(0);
  const [homeTop, setHomeTop] = useState(0);
  const [compTop, setcomTop] = useState(0);
  const [menuPage, setMenuPage] = useState(0);
  const [mult, setMult] = useState(0);
  const [menuItems, setMenuItems] = useState(
    projet.filter((items, i) => i >= 0 && i < 4)
  );

  console.log(maxPage);

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
      setMenuItems(projet.filter((items) => items.id > 0 && items.id <= 4));
      setMult(0);
      if (projet.length <= 4) {
        setMaxpage(1);
      } else {
        setMaxpage(null);
      }
      return;
    }
    const newItems = projet.filter((items) => items.langague === langague);
    setMenuItems(newItems.filter((items, i) => i >= 0 && i < 4));
    setMult(0);
    console.log(newItems);
    if (newItems.length <= 4) {
      setMaxpage(1);
    } else {
      setMaxpage(null);
    }
  };

  const selectMenuPageUp = (array) => {
    let maxMult = Math.round(array.length / 4);
    if (mult !== maxMult - 1) {
      const valeur = [4 * (mult + 1), 4 * (mult + 2)];
      if (selectedCategorie !== 0) {
        const nextCategories = array.filter(
          (items) => items.langague === allLangague[selectedCategorie]
        );
        const arrayFinal = nextCategories.filter(
          (items, i) => i >= valeur[0] && i < valeur[1]
        );
        maxMult = Math.round(nextCategories.length / 4);
        setMaxpage(maxMult);
        setMenuItems(arrayFinal);
        setMult(mult + 1);
        console.log(maxMult);
      } else {
        console.log("not categoreis");
        const arrayFinal = array.filter(
          (items, i) => i >= valeur[0] && i < valeur[1]
        );
        setMaxpage(maxMult);
        setMenuItems(arrayFinal);
        setMult(mult + 1);
      }
    }
  };

  const selectMenuPageDown = (array) => {
    if (mult > 0) {
      const valeur = [4 * (mult - 1), 4 * mult];
      if (selectedCategorie !== 0) {
        const nextCategories = array.filter(
          (items) => items.langague === allLangague[selectedCategorie]
        );
        const arrayFinal = nextCategories.filter(
          (items, i) => i >= valeur[0] && i < valeur[1]
        );
        setMenuItems(arrayFinal);
        setMult(mult - 1);
      } else {
        const arrayFinal = array.filter(
          (items, i) => i >= valeur[0] && i < valeur[1]
        );
        setMenuItems(arrayFinal);
        setMult(mult - 1);
      }
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
        navVisible,
        setNavVisible,
        maxPage,
        mult,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
