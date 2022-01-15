import React from "react";
import { formation } from "../../Database/Data.js";
import { useGlobalContext } from "../../Context/AppContext.js";

const Formation = () => {
  const { showModal, setShowModal } = useGlobalContext();
  return (
    <div>
      {formation.map(({ id, text, image }) => {
        return (
          <button
            key={id}
            className="btn"
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            <img src={image} alt={`logo ${text}`} />
          </button>
        );
      })}
    </div>
  );
};

export default Formation;
