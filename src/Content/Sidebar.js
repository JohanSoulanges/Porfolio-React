import React from "react";
import "../CSS/Sidebar.scss";
import { useGlobalContext } from "../Context/AppContext";
import { links, social } from "../Database/Data";
import nextImg from "../images/1.png";
import prevImg from "../images/2.png";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  return (
    <>
      <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <button
            className="sidebar-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <img src={prevImg} alt="nextImg" />
            ) : (
              <img src={nextImg} alt="nextImg" />
            )}
          </button>
        </div>
        <div className="sidebar-content">
          <div className="links">
            <ul>
              {links.map(({ id, url, text, icon }) => {
                return (
                  <li key={id}>
                    <a href={url}>
                      {icon} &ensp; {text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="social">
            {social.map(({ id, url, icon }) => {
              return (
                <li key={id}>
                  <a target="_blank" href={url}>
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
