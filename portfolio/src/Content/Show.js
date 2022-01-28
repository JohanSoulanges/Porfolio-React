import React from "react";
import "../CSS/Show.scss";
import priviImg from "../images/b0e8ea6c-f26d-a0b2-d308-76430fa686a8.jpg";

const Show = () => {
  return (
    <>
      <section className="main-container-show">
        <div className="svg-1">
          <svg viewBox="0 0 160 160" x="0px" y="0px">
            <path
              fill="#999999"
              d="M114.3,152.3l38-38C144.4,130.9,130.9,144.4,114.3,152.3z M117.1,9.1l-108,108c0.8,1.6,1.7,3.2,2.7,4.8l110-110
	C120.3,10.9,118.7,10,117.1,9.1z M97.5,2L2,97.5c0.4,2,1,4,1.5,5.9l99.9-99.9C101.5,2.9,99.5,2.4,97.5,2z M80,160c2,0,4-0.1,5.9-0.2
	l73.9-73.9c0.1-2,0.2-3.9,0.2-5.9c0-0.6,0-1.2,0-1.9L78.1,160C78.8,160,79.4,160,80,160z M34.9,146.1c1.5,1,3,2,4.6,2.9L149,39.5
	c-0.9-1.6-1.9-3.1-2.9-4.6L34.9,146.1z M132.7,19.8L19.8,132.7c1.2,1.3,2.3,2.6,3.6,3.9L136.6,23.4C135.3,22.2,134,21,132.7,19.8z
	 M59.6,157.4l97.8-97.8c-0.5-1.9-1.1-3.8-1.7-5.7L53.9,155.6C55.8,156.3,57.7,156.9,59.6,157.4z M7.6,45.9L45.9,7.6
	C29.1,15.5,15.5,29.1,7.6,45.9z M80,0c-2.6,0-5.1,0.1-7.6,0.4l-72,72C0.1,74.9,0,77.4,0,80c0,0.1,0,0.2,0,0.2L80.2,0
	C80.2,0,80.1,0,80,0z"
            />
          </svg>
        </div>
        <div className="priviImg">
          <img src={priviImg} />
        </div>
        <div className="detail-container">
          <h2 className="title color-bleu"> Projet Name</h2>
          <p>
            Projet description.
            <br />
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
          </p>
          <button className="btn">
            <a href="https://nicepage.review">Lien Github</a>
          </button>
          <button className="btn">
            <a href="https://nicepage.app">Voir Projet</a>
          </button>
        </div>
        <div className="svg-2">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle fill="#2f4ace" cx="50" cy="50" r="50" />
          </svg>
        </div>
        <div className="svg-3">
          <svg viewBox="0 0 160 160" x="0px" y="0px">
            <path
              fill="#ccd3db"
              d="M80,30c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S52.4,30,80,30 M80,0C35.8,0,0,35.8,0,80s35.8,80,80,80
	s80-35.8,80-80S124.2,0,80,0L80,0z"
            />
          </svg>
        </div>
        <div className="info-container">
          <div className="client">
            <h5 className="mid-title color-bleu">Demande du client</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
              nunc justo sagittis suscipit ultrices.&nbsp;Morbi enim nunc
              faucibus a pellentesque sit amet porttitor. Sapien eget mi proin
              sed libero enim sed faucibus. Vel fringilla est ullamcorper eget.
            </p>
          </div>
          <div className="tech">
            <h5 className="mid-title color-bleu">Tech Utiliser</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
              nunc justo sagittis suscipit ultrices.&nbsp;Morbi enim nunc
              faucibus a pellentesque sit amet porttitor. Sapien eget mi proin
              sed libero enim sed faucibus. Vel fringilla est ullamcorper eget.
            </p>
          </div>
          <div className="prob">
            <h5 className="mid-title color-bleu">Probleme rencontrer</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
              nunc justo sagittis suscipit ultrices.&nbsp;Morbi enim nunc
              faucibus a pellentesque sit amet porttitor. Sapien eget mi proin
              sed libero enim sed faucibus. Vel fringilla est ullamcorper eget.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Show;
