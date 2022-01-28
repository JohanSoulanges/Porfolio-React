import React from "react";
import HomeOld from "./Content/HomeOld";
import Sidebar from "./Content/Sidebar";
import CompOld from "./Content/CompOld";
import ProjetOld from "./Content/ProjetOld";
import About from "./Content/About";
import Navbar from "./Content/Navbar";
import Contact from "./Content/Contact";
import Home from "./Content/Home";
import Comp from "./Content/Comp";
import Project from "./Content/Project";
import Show from "./Content/Show";
import Test from "./test";

function App() {
  return (
    <>
      <Home />
      <Comp />
      <Project />
      <Show />
      <Test />
      {/* <Navbar />
      <HomeOld />
      <CompOld />
      <ProjetOld />
      <About />
      <Contact />
      <Sidebar /> */}
    </>
  );
}

export default App;
