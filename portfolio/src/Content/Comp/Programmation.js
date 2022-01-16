import React from "react";
import { langague } from "../../Database/Data.js";

const Programmation = () => {
  return (
    <article className="comp-detail">
      {langague.map(({ id, text, icon }) => {
        return (
          <div key={id} className="icon">
            {icon}
          </div>
        );
      })}
    </article>
  );
};

export default Programmation;
