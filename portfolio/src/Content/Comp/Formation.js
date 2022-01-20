import React, { useState } from "react";
import { formation } from "../../Database/Data.js";
import { useGlobalContext } from "../../Context/AppContext";

const Formation = () => {
  const [index, setIndex] = useState(1);
  const { nextPage, prevPage } = useGlobalContext();

  const finaFormation = formation.filter((items) => items.id === index);

  return (
    <div className="forma-detail">
      {finaFormation.map(({ id, text, image }) => {
        return (
          <div key={id}>
            <img src={image} alt={`logo ${text}`} />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                obcaecati repellat mollitia veritatis, distinctio, est itaque
                dolor tenetur vel eius soluta eaque minus molestiae officia
                eligendi? Obcaecati facilis alias ratione, sit doloremque amet
                atque quia ipsam nostrum vero, nulla labore dolore dolor
                exercitationem non quis vitae tenetur. Voluptate, distinctio
                quibusdam?
              </p>
              <a href="">Lien vers le site</a>
            </div>
          </div>
        );
      })}
      <button onClick={() => nextPage(formation, index, setIndex)}>X</button>
      <button onClick={() => prevPage(index, setIndex)}>Y</button>
    </div>
  );
};

export default Formation;
