import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaHome,
} from "react-icons/fa";
import {
  AiOutlineFundProjectionScreen,
  AiFillContainer,
  AiOutlineToTop,
} from "react-icons/ai";
import { GiBookmark, GiPapers } from "react-icons/gi";
import { FiMail } from "react-icons/fi";
import { GoTasklist } from "react-icons/go";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiAdobephotoshop,
} from "react-icons/si";
import Dyma from "../Image/DYMA.png";
import Ifocop from "../Image/IFOCOP.png";

export const projet = [
  {
    id: 1,
    langague: "javascript",
    name: "projet type javascript",
    image: Dyma,
    desc: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    urlWeb: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
    urlGit: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
  },
  {
    id: 2,
    langague: "react",
    name: "projet type react",
    image: Dyma,
    desc: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    urlWeb: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
    urlGit: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
  },
  {
    id: 3,
    langague: "agular",
    name: "projet type angular",
    image: Dyma,
    desc: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    urlWeb: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
    urlGit: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
  },
  {
    id: 4,
    langague: "C/C++",
    name: "projet type C/C++",
    image: Dyma,
    desc: "Sample text. Click to select the text box. Click again or double click to start editing the text.",
    urlWeb: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
    urlGit: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
  },
  {
    id: 5,
    langague: "C/C++",
    name: "projet type C/C++",
    image: Ifocop,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et dicta commodi adipisci cum neque omnis necessitatibus nisi est molestias!",
    urlWeb: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
    urlGit: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
  },
  {
    id: 6,
    langague: "C/C++",
    name: "projet type C/C++",
    image: Ifocop,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et dicta commodi adipisci cum neque omnis necessitatibus nisi est molestias!",
    urlWeb: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
    urlGit: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
  },
  {
    id: 7,
    langague: "javascript",
    name: "projet type javascript",
    image: Ifocop,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et dicta commodi adipisci cum neque omnis necessitatibus nisi est molestias!",
    urlWeb: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
    urlGit: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
  },
  {
    id: 8,
    langague: "react",
    name: "projet type react",
    image: Ifocop,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et dicta commodi adipisci cum neque omnis necessitatibus nisi est molestias!",
    urlWeb: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
    urlGit: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
  },
  {
    id: 9,
    langague: "C/C++",
    name: "projet type C/C++",
    image: Dyma,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et dicta commodi adipisci cum neque omnis necessitatibus nisi est molestias!",
    urlWeb: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
    urlGit: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
  },
  {
    id: 10,
    langague: "C/C++",
    name: "projet type C/C++",
    image: Dyma,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et dicta commodi adipisci cum neque omnis necessitatibus nisi est molestias!",
    urlWeb: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
    urlGit: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
  },
  {
    id: 11,
    langague: "react",
    name: "projet type react",
    image: Dyma,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et dicta commodi adipisci cum neque omnis necessitatibus nisi est molestias!",
    urlWeb: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
    urlGit: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
  },
  {
    id: 12,
    langague: "C/C++",
    name: "projet type C/C++",
    image: Ifocop,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et dicta commodi adipisci cum neque omnis necessitatibus nisi est molestias!",
    urlWeb: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
    urlGit: "https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Grid_Layout",
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

// export const question = [
//   {
//     id: 1,
//     question: "Sur quel logiciel j'utilise pour developper mes projects ?",
//     svg: (
//       <svg className="" viewBox="0 0 16 16" x="0px" y="0px" id="svg-8021">
//         <path
//           fill="#ccd3db"
//           d="M8,10.7L1.6,5.3c-0.4-0.4-1-0.4-1.3,0c-0.4,0.4-0.4,0.9,0,1.3l7.2,6.1c0.1,0.1,0.4,0.2,0.6,0.2s0.4-0.1,0.6-0.2l7.1-6
// 	c0.4-0.4,0.4-0.9,0-1.3c-0.4-0.4-1-0.4-1.3,0L8,10.7z"
//         />
//       </svg>
//     ),
//     answer: `Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis
//                 elementum. Phasellus sed efficitur dolor, et ultricies sapien.
//                 Quisque fringilla sit amet dolor commodo efficitur. Aliquam et
//                 sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis
//                 sit amet.`,
//   },
// ];
