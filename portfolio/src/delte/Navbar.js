import React, { useEffect } from "react";
import logo from "../SVG/logo.svg";
import { links, social } from "../Database/Data";
import { useGlobalContext } from "../Context/AppContext";

const Navbar = () => {
  const { scrolling, navVisible, setNavVisible } = useGlobalContext();

  useEffect(() => {
    if (scrolling >= 500) {
      setNavVisible(true);
    } else {
      setNavVisible(false);
    }
  }, [scrolling]);
  return (
    <>
      <nav className={navVisible ? "none" : ""} style={{ top: scrolling }}>
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
