import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import svg from "./assets/bg.svg";
import Main from "./Components/Main";
import About from "./Components/About";
import Tech from "./Components/Tech";
import ProjectProps from "./Components/ProjectProps";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className=" h-full  bg-blue-100">
        <Main />
        <About />
        <Tech />
        <ProjectProps />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
