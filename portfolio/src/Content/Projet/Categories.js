import React from "react";
import { useGlobalContext } from "../../Context/AppContext";

const Categories = () => {
  const { allLangague, filterMenu, selectedCategorie, setSelectedCategorie } =
    useGlobalContext();
  return (
    <ul className="catego-container ">
      {allLangague.map((items, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              filterMenu(items);
              setSelectedCategorie(i);
            }}
            className={`catego-${i} color-bleu ${
              i === selectedCategorie && "selectedCat"
            }`}
          >
            {items}
          </button>
        );
      })}
    </ul>
  );
};

export default Categories;
