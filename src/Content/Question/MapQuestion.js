import React from "react";
import { useGlobalContext } from "../../Context/AppContext";
// import { question } from "../../Database/Data";

const MapQuestion = () => {
  const {
    isShowAnswer1,
    setIsShowAnswer1,
    isShowAnswer2,
    setIsShowAnswer2,
    // isShowAnswer3,
    // setIsShowAnswer3,
    isShowAnswer4,
    setIsShowAnswer4,
  } = useGlobalContext();
  return (
    <>
      <div className="question-container">
        <div className="question-1">
          <a
            className="fleche-question-1"
            onClick={() => setIsShowAnswer1(!isShowAnswer1)}
          >
            <span className="inf-title">
              Sur quel logiciel je développe mes projets ?
            </span>
            <span className="fleche svg-arrow-1">
              <svg viewBox="0 0 16 16" x="0px" y="0px">
                <path
                  fill="#ccd3db"
                  d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
	c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"
                />
              </svg>
            </span>
          </a>
          <div
            className={
              isShowAnswer1 ? `question-aswer-1` : `question-aswer-1 none`
            }
          >
            <p>
              Les logiciels que j'utilise pour le code sont Visual Studio Code,
              Photoshop, Abode Premiere Pro, Git Bash, Gitup Desktop, Mongo
              Compass ou encore Robo 3T.
            </p>
          </div>
        </div>
        <div className="question-2">
          <a onClick={() => setIsShowAnswer2(!isShowAnswer2)}>
            <span className="inf-title">
              Quel service d'hébergement j'utilise ?
            </span>
            <span className="fleche svg-arrow-2">
              <svg viewBox="0 0 16 16" x="0px" y="0px">
                <path
                  fill="#ccd3db"
                  d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
	c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"
                />
              </svg>
            </span>
          </a>
          <div
            className={
              isShowAnswer2 ? `question-aswer-2` : `question-aswer-2 none`
            }
          >
            <p>
              La plupart de mes projets son hébergés sur Heroku, mais certain de
              mes project sont sur Netlify.
            </p>
          </div>
        </div>
        {/* <div className="question-3">
          <a
            className="fleche-question-3"
            onClick={() => setIsShowAnswer3(!isShowAnswer3)}
          >
            <span className="inf-title">trouver un troisème point ?</span>
            <span className="fleche svg-arrow-3">
              <svg
                
                viewBox="0 0 16 16"
                x="0px"
                y="0px"
                id="svg-e07d"
              >
                <path
                  fill="#ccd3db"
                  d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
	c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"
                />
              </svg>
            </span>
          </a>
          <div
            className={
              isShowAnswer3 ? `question-aswer-3` : `question-aswer-3 none`
            }
          >
            <p>
              Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis
              elementum. Phasellus sed efficitur dolor, et ultricies sapien.
              Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem
              odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit
              amet.
            </p>
          </div>
        </div> */}
        <div className="question-4">
          <a
            className="fleche-question-4"
            onClick={() => setIsShowAnswer4(!isShowAnswer4)}
          >
            <span className="inf-title">Quel sont mes passe-temps ?</span>
            <span className="fleche svg-arrow-4">
              <svg viewBox="0 0 16 16" x="0px" y="0px">
                <path
                  fill="#ccd3db"
                  d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
	c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"
                />
              </svg>
            </span>
          </a>
          <div
            className={
              isShowAnswer4 ? `question-aswer-4` : `question-aswer-4 none`
            }
          >
            <p>
              J'ai pour passe-temps le modélisme de robot, le gunpla pour être
              plus précis. Je pratique aussi la randonnée en montagne de
              préférence en groupe mais il m'arrive de le pratiquer en
              solitaire.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapQuestion;
