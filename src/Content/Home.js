import React from "react";
import "../CSS/Home.scss";

const Home = () => {
  return (
    <>
      <section className="home-section" id="main">
        <div className="home-container">
          <div className="home-image" />
          <div className="home-block">
            <h1 className="title color-bleu">Vous rechercher un developpeur</h1>
            <button className="btn">
              <a href={"#contact"}>Contacter moi</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
