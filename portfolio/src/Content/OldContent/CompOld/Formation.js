import React, { useState } from "react";
import { formation } from "../../Database/Data.js";
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";
import { useGlobalContext } from "../../Context/AppContext";

const Formation = () => {
  const [index, setIndex] = useState(1);
  const { nextPage, prevPage } = useGlobalContext();

  const finaFormation = formation.filter((items) => items.id === index);

  return (
    <div className={index === 1 ? "forma-detail first" : "forma-detail"}>
      {index > 1 && (
        <button className="arrowLeft" onClick={() => prevPage(index, setIndex)}>
          <RiArrowLeftSFill />
        </button>
      )}
      {finaFormation.map(({ id, text, image, name }) => {
        return (
          <div key={id}>
            <img className="logo" src={image} alt={`logo ${name}`} />
            <div>
              <h1>{name}</h1>
              <p>{text}</p>
              <a href="">Lien vers le site</a>
            </div>
          </div>
        );
      })}
      {index === formation.length || (
        <button
          className="arrowRight"
          onClick={() => nextPage(formation, index, setIndex)}
        >
          <RiArrowRightSFill />
        </button>
      )}
    </div>
  );
};

export default Formation;
