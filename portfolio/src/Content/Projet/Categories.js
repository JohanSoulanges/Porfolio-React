import React from "react";
import { useGlobalContext } from "../../Context/AppContext";
import { AnimateSharedLayout, motion } from "framer-motion";

const Categories = () => {
  const { allLangague, filterMenu, selectedCategorie, setSelectedCategorie } =
    useGlobalContext();
  return (
    <AnimateSharedLayout>
      <ul className="menu-cat">
        {allLangague.map((items, i) => {
          return (
            <li
              key={i}
              className={`${i === selectedCategorie && "selectedCat"}`}
            >
              <button
                className="projet-btn"
                onClick={() => {
                  filterMenu(items);
                  setSelectedCategorie(i);
                }}
              >
                {items}
              </button>
            </li>
          );
        })}
      </ul>
    </AnimateSharedLayout>
  );
};

export default Categories;
