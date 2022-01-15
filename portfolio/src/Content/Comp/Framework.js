import React from "react";
import { frameWork } from "../../Database/Data.js";
import { useGlobalContext } from "../../Context/AppContext.js";

const Framework = () => {
  const { showModal, setShowModal } = useGlobalContext();
  return (
    <div>
      {frameWork.map(({ id, text, icon }) => {
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

export default Framework;
