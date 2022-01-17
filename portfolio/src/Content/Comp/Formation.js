import React from "react";
import { formation } from "../../Database/Data.js";

const Formation = () => {
  return (
    <div className="forma-detail">
      {formation.map(({ id, text, image }) => {
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
    </div>
  );
};

export default Formation;
