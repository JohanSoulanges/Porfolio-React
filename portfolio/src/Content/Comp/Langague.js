import React from "react";
import { langague } from "../../Database/Data.js";
import { useGlobalContext } from "../../Context/AppContext.js";

const Langague = () => {
  const { showModal, setShowModal } = useGlobalContext();
  return (
    <div>
      {langague.map(({ id, text, icon }) => {
        return (
          <button
            key={id}
            className="btn"
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
};

export default Langague;
