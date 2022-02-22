import React from "react";
import DocumentMeta from "react-document-meta";
import Sidebar from "./Content/Sidebar";
import Home from "./Content/Home";
import Comp from "./Content/Comp";
import Project from "./Content/Project";
import Show from "./Content/Show";
import Question from "./Content/Question";
import Contact from "./Content/Contact";

function App() {
  const meta = {
    title: "Developpeur Full Stack",
    description: "I am a porftolio made in React by johan Damioy",
    canonical: "http://portfolio.com",
    image: "../images/linkedin.jpg",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  };
  return (
    <>
      <Home {...meta} />
      <Comp />
      <Project />
      <Show />
      <Question />
      <Contact />
      <Sidebar />
    </>
  );
}

export default App;
