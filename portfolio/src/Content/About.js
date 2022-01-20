import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { useGlobalContext } from "../Context/AppContext";
import { about } from "../Database/Data";

const About = () => {
  const [index, setIndex] = useState(1);
  const { nextPage, prevPage } = useGlobalContext();

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     let newIndex = index + 1;
  //     if (index === 2) {
  //       newIndex = 0;
  //     }
  //     setIndex(newIndex);
  //   }, 5000);
  //   return () => {
  //     clearInterval(slider);
  //   };
  // });
  const finaAbout = about.filter((items) => items.id === index);

  return (
    <div className="about-overlay" id="about">
      <div className="about-container">
        {finaAbout.map(({ id, text }) => {
          return <p key={id}>{text}</p>;
        })}
      </div>
      <button onClick={() => nextPage(about, index, setIndex)}>X</button>
      <button onClick={() => prevPage(index, setIndex)}>Y</button>
    </div>
  );
};

export default About;
