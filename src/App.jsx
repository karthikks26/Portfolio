import { useContext, useState } from "react";
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
import { context } from "./layout";

function App() {
  const { handleclick, state, setState } = useContext(context);

  return (
    <>
      <div className={`${state ? "dark" : ""}`}>
        <div className=" h-full  bg-blue-100  dark:bg-neutral-900 dark:text-neutral-300 ">
          {state}
          <Main />
          <About />
          <Tech />
          <ProjectProps />
          <Resume />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
