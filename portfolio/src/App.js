import React from "react";
import Home from "./Content/Home";
import Sidebar from "./Content/Sidebar";
import Comp from "./Content/Comp";
import Projet from "./Content/Projet";
import About from "./Content/About";
import Navbar from "./Content/Navbar";
import Contact from "./Content/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Comp />
      <Projet />
      <About />
      <Contact />
      <Sidebar />
    </>
  );
}

export default App;
