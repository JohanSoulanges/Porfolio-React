import React from "react";
import "../CSS/Sidebar.scss";
import { useGlobalContext } from "../Context/AppContext";
import { links, social } from "../Database/Data";

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
            X
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
                  <a href={url}>{icon}</a>
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