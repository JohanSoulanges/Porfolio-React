import React from "react";
import "../CSS/Home.scss";

const Home = () => {
  return (
    <>
      <section className="home-section">
        <div className="home-container">
          <div className="home-image" />
          <div className="home-block">
            <h1 className="title color-bleu">You look for a devellopper</h1>
            <button className="btn">
              <a href={"#contact"}>Contact me</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
