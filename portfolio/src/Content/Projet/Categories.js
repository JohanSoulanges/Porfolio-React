import React from "react";
import { useGlobalContext } from "../../Context/AppContext";

const Categories = () => {
  const { allLangague, filterMenu } = useGlobalContext();
  return (
    <ul className="menu-cat">
      {allLangague.map((items, index) => {
        return (
          <li key={index}>
            <button className="projet-btn" onClick={() => filterMenu(items)}>
              {items}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
