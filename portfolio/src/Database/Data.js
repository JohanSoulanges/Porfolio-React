import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaHome,
} from "react-icons/fa";
import { AiOutlineFundProjectionScreen, AiFillContainer } from "react-icons/ai";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiAngular,
  SiNodedotjs,
} from "react-icons/si";
import Dyma from "../Image/DYMA.png";
import Ifocop from "../Image/IFOCOP.png";

export const projet = [
  {
    id: 1,
    langague: "javascript",
    name: "projet type javascript",
    image: Dyma,
    desc: "un projet test",
    urlWeb: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
    urlGit: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
  },
  {
    id: 2,
    langague: "react",
    name: "projet type react",
    image: Dyma,
    desc: "un projet test",
    urlWeb: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
    urlGit: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
  },
  {
    id: 3,
    langague: "agular",
    name: "projet type angular",
    image: Dyma,
    desc: "un projet test",
    urlWeb: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
    urlGit: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
  },
  {
    id: 4,
    langague: "C/C++",
    name: "projet type C/C++",
    image: Dyma,
    desc: "un projet test",
    urlWeb: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
    urlGit: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
  },
];

export const langague = [
  { id: 1, text: "HTML", icon: <SiHtml5 /> },
  { id: 2, text: "CSS", icon: <SiCss3 /> },
  { id: 3, text: "Javascript", icon: <SiJavascript /> },
];

export const frameWork = [
  { id: 1, text: "React", icon: <SiReact /> },
  { id: 2, text: "Angular", icon: <SiAngular /> },
  { id: 3, text: "NodeJS", icon: <SiNodedotjs /> },
];

export const formation = [
  { id: 1, text: "IFOCOP", image: Ifocop },
  { id: 2, text: "Dyma", image: Dyma },
];

export const links = [
  {
    id: 1,
    url: "#main",
    text: "home",
    icon: <FaHome size={20} />,
  },
  {
    id: 2,
    url: "#comp",
    text: "comp",
    icon: <FaHome size={20} />,
  },
  {
    id: 3,
    url: "#projet",
    text: "projects",
    icon: <AiOutlineFundProjectionScreen size={20} />,
  },
  {
    id: 4,
    url: "#about",
    text: "about",
    icon: <AiFillContainer size={20} />,
  },
  {
    id: 5,
    url: "#contact",
    text: "contact",
    icon: <AiFillContainer size={20} />,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
];
