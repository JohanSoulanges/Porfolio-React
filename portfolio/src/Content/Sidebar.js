import React from "react";
import { useGlobalContext } from "../Context/AppContext";
import { links, social } from "../Database/Data";
import logo from "../SVG/logo.svg";

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen, showSidebar } = useGlobalContext();
  return (
    <>
      {showSidebar && (
        <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
          <div className="sidebar-header">
            <img className="title" src={logo} alt="" />
            <button
              className="sidebar-toggle"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              X
            </button>
          </div>
          <div className="links">
            <ul>
              {links.map(({ id, url, text }) => {
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
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
        </aside>
      )}
    </>
  );
};

export default Sidebar;
