import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let slider = setInterval(() => {
      let newIndex = index + 1;
      if (index === 2) {
        newIndex = 0;
      }
      setIndex(newIndex);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  });

  return (
    <div className="about-container" id="about">
      {index === 0 && <p>premier chapitre</p>}
      {index === 1 && <p>deuxieme chapitre</p>}
      {index === 2 && <p>troisieme chapitre</p>}
    </div>
  );
};

export default About;
