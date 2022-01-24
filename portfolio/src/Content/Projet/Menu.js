import React, { useState } from "react";
import { projet } from "../../Database/Data";
import { RiArrowRightSFill, RiArrowLeftSFill } from "react-icons/ri";
import { useGlobalContext } from "../../Context/AppContext";
import { AnimateSharedLayout, motion } from "framer-motion";

const Menu = () => {
  const {
    menuItems,
    selectedItem,
    setSelectedItem,
    selectMenuPageUp,
    selectMenuPageDown,
    maxPage,
    mult,
  } = useGlobalContext();
  return (
    <AnimateSharedLayout>
      <div className="setup">
        {mult === 0 || (
          <button
            className="arrowRight proj"
            onClick={() => selectMenuPageDown(projet)}
          >
            <RiArrowLeftSFill />
          </button>
        )}
        <div className="menu-item">
          {menuItems.map(({ id, name, image, desc, urlWeb, urlGit }) => {
            return (
              <motion.article
                className={`projet-item ${id === selectedItem && "selected"}`}
                key={id}
                layout
              >
                <button onClick={() => setSelectedItem(id)}>
                  <motion.img
                    src={image}
                    alt=""
                    style={{
                      boxShadow:
                        id === selectedItem
                          ? "none"
                          : "10px 5px 5px rgb(222, 226, 230)",
                    }}
                  />
                </button>
                <motion.div
                  className="projet-detail"
                  style={{ display: id === selectedItem ? "block" : "none" }}
                >
                  <h4>{name}</h4>
                  <p>{desc}</p>
                  <a href={urlWeb}> Lien de la page</a>
                  <a href={urlGit}>Lien Github</a>
                  <button onClick={() => setSelectedItem(null)}>X</button>
                </motion.div>
              </motion.article>
            );
          })}
        </div>
        {mult === maxPage - 1 || (
          <button
            className="arrowLeft proj"
            onClick={() => selectMenuPageUp(projet)}
          >
            <RiArrowRightSFill />
          </button>
        )}
      </div>
    </AnimateSharedLayout>
  );
};

export default Menu;
