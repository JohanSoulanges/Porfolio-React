import { AiOutlineToTop, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { GiBookmark, GiPapers } from "react-icons/gi";
import { FiMail } from "react-icons/fi";
import { GoTasklist } from "react-icons/go";
import Dyma from "../Image/DYMA.png";
// import Ifocop from "../Image/IFOCOP.png";

export const projet = [
  {
    id: 1,
    langague: "react",
    name: "Portfolio",
    image: Dyma,
    desc: "Portfolio que j'ai mis en place pour avoir un meilleur visuabilité et pour montre mes projet.",
    client:
      "Sur ce projet etant mon propre client je me suis éforcer de me mettre de objectif strict. Tel que la conception d'une maquette du site au préalable et faire en sorte qu'il soit responsive.",
    tech: ["React et SCSS", "Javascript", "React-icons", "Photoshop"],
    prob: "La plus grand dificulté de ce projet a été le design de la page.",
    urlWeb: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
    urlGit: "https://github.com/Vold69/Porfolio-React",
  },
  {
    id: 2,
    langague: "javascript",
    name: "CV gamefication",
    image: Dyma,
    desc: "Projet fr gamefication de mon CV fait pour la formation IFOCOP",
    client:
      "Ce projet fut la premier de la formation IFOCOP, il a été demande de l'effectuer sur une semaine sans delai autorisé. De plus, il été interdit d'utilise des librairies ou framework qui permeter de simplifié le travail. ",
    tech: ["Javascript", null, null, "Photoshop"],
    prob: "La dificulté de ce projet fut de mettre on place un système facilement modifiable, facile a comprendre et et le plus factorisé possible.",
    urlWeb: null,
    urlGit: "https://github.com/Vold69/Projet-01-Game-",
  },
  {
    id: 3,
    langague: "agular",
    name: "Reseau social",
    image: Dyma,
    desc: "Projet final IFOCOP mis en place d'un resseau social",
    client:
      "Ce projet fut la dernier de la formation IFOCOP, il a été demande de l'effectuer sur une mois tout en etant en stage, sans delai autorisé. Pour ce projet nous étions libre d'utilisé toutes librairies ou framwork possible et nous avions un cahier des charge a respecter",
    tech: ["Angular et CSS", "Node.js", null, "Photoshop"],
    prob: "La plus grand dificulté de ce projet fut la mise en place d'un système de connexion qui reconnai automatiquement un admin. Ce n'etait pas demander dans le cahier des charges mais j'ai un defi personnel.",
    urlWeb: null,
    urlGit: "https://github.com/Vold69/ProjetFinaleIFOCOP",
  },
];

export const links = [
  {
    id: 1,
    url: "#main",
    text: "Top",
    icon: <AiOutlineToTop size={20} />,
  },
  {
    id: 2,
    url: "#comp",
    text: "Expertise",
    icon: <GiBookmark size={20} />,
  },
  {
    id: 3,
    url: "#projet",
    text: "Projets",
    icon: <GiPapers size={20} />,
  },
  {
    id: 4,
    url: "#about",
    text: "Questions",
    icon: <GoTasklist size={20} />,
  },
  {
    id: 5,
    url: "#contact",
    text: "Contact",
    icon: <FiMail size={20} />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://github.com/Vold69",
    icon: <AiFillGithub />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/feed/",
    icon: <AiFillLinkedin />,
  },
];
