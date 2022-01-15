import React from "react";
import { useGlobalContext } from "../../Context/AppContext";

const Menu = () => {
  const { menuItems } = useGlobalContext();
  return (
    <div className="menu-item">
      {menuItems.map(({ id, name, image, desc, urlWeb, urlGit }) => {
        return (
          <article key={id}>
            <h4>{name}</h4>
            <img src={image} alt="" />
            <a href={urlWeb}> Lien de la page</a>
            <a href={urlGit}>Lien Github</a>
            <p>{desc}</p>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
