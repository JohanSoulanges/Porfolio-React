import React from "react";
import logo from "../SVG/logo.svg";
import { links, social } from "../Database/Data";
import { useGlobalContext } from "../Context/AppContext";

const Navbar = () => {
  const { projetsSmooth } = useGlobalContext();
  return (
    <>
      <nav>
        <div className="nav-header">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <ul className="links-container">
          {links.map(({ id, url, text, icon }) => {
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
        <ul className="social-icons">
          {social.map(({ id, url, icon }) => {
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
