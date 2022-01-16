import React from "react";
import { graphique } from "../../Database/Data.js";

const Graphique = () => {
  return (
    <article className="comp-detail">
      {graphique.map(({ id, text, icon }) => {
        return (
          <div key={id} className="icon">
            {icon}
          </div>
        );
      })}
    </article>
  );
};

export default Graphique;
