import React from "react";
import { projet } from "../../Database/Data";
import projetImg from "../../images/IMG_0444.JPG";
import nextImg from "../../images/1.png";
import prevImg from "../../images/2.png";
import { useGlobalContext } from "../../Context/AppContext";

const Menu = () => {
  const {
    menuItems,
    maxPage,
    mult,
    selectMenuPageUp,
    selectMenuPageDown,
    selectedProjet,
  } = useGlobalContext();
  return (
    <>
      <div className="project-container">
        {menuItems.map(({ id, name, desc }, i) => {
          return (
            <div key={id} className={`project-${i} project-block`}>
              <button onClick={() => selectedProjet(id)}>
                <h2 className="title color-bleu">{name}</h2>
                <p>{desc}</p>
              </button>
            </div>
          );
        })}
      </div>
      {mult === 0 || (
        <button onClick={() => selectMenuPageDown(projet)}>
          <img className="prevImg" src={prevImg} alt="" />
        </button>
      )}
      {mult === maxPage - 1 || (
        <button onClick={() => selectMenuPageUp(projet)}>
          <img className="nextImg" src={nextImg} alt="" />
        </button>
      )}
      <img src={projetImg} className="project-img" />
      <div className="svg-background">
        <svg viewBox="0 0 160 150" x="0px" y="0px" id="svg-7553">
          <path
            fill="#2f4ace"
            d="M43.2,126.9c14.2,1.3,27.6,7,39.1,15.6c8.3,6.1,19.4,10.3,32.7,5.3c11.7-4.4,18.6-17.4,21-30.2c2.6-13.3,8.1-25.9,15.7-37.1
	c8.3-12.1,10.8-27.9,5.3-42.7C150.5,20.3,134.6,9,117,7.6C107.9,6.9,98.8,5,90.1,1.9C83-0.6,75-0.7,67.4,2.1
	c-9.9,3.7-17,11.6-20.1,21c-3.3,10.1-10.9,18-20.6,22.2c-0.1,0-0.1,0.1-0.2,0.1c-20.3,8.9-31,32-24.6,53.2
	C6.9,115.6,25.2,125.2,43.2,126.9z"
          />
        </svg>
      </div>
    </>
  );
};

export default Menu;
