import React from "react";
import { useGlobalContext } from "../../Context/AppContext";

const Menu = () => {
  const { menuItems } = useGlobalContext();
  return (
    <div className="menu-item">
      {menuItems.map(({ id, name, image, desc, urlWeb, urlGit }) => {
        return (
          <article className="projet-item" key={id}>
            {/* <h4>{name}</h4> */}
            <button>
              <img src={image} alt="" />
            </button>
            {/* <p>{desc}</p>
            <button>détail</button> */}
            {/* <a href={urlWeb}> Lien de la page</a>
            <a href={urlGit}>Lien Github</a> */}
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
