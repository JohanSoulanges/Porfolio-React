import React from "react";
import HomeOld from "./Content/HomeOld";
import Sidebar from "./Content/Sidebar";
import CompOld from "./Content/CompOld";
import ProjetOld from "./Content/ProjetOld";
import About from "./Content/About";
import Navbar from "./Content/Navbar";
import ContactOld from "./Content/ContactOld";
import Home from "./Content/Home";
import Comp from "./Content/Comp";
import Project from "./Content/Project";
import Show from "./Content/Show";
import Question from "./Content/Question";
import Contact from "./Content/Contact";
import Test from "./test";

function App() {
  return (
    <>
      <Home />
      <Comp />
      <Project />
      <Show />
      <Question />
      <Contact />
      {/* <Navbar />
      <HomeOld />
      <CompOld />
      <ProjetOld />
      <About /> */}
      {/* <ContactOld /> */}
      {/* <Sidebar /> */}
    </>
  );
}

export default App;
