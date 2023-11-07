import React from "react";
import Projects from "./Projects";
import vidzy from "../assets/Projects/vidzy.png";
import shoppy from "../assets/Projects/Shoppy.png";
import moviesphere from "../assets/Projects/moviesphere.png";
import sumz from "../assets/Projects/sumz.png";
import telsa from "../assets/Projects/tesla.png";
import romi from "../assets/Projects/Romi.png";
import gaint from "../assets/Projects/gaint.png";
const ProjectProps = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl text-center underline gradient-text">
          Projects
        </h1>
        <div className=" lg:grid lg:grid-cols-3">
          <Projects
            link="https://github.com/karthikks26/vidzy"
            img={vidzy}
            name="Vidzy"
            para="  This is Vidzy video playing platform.This is build using react,
                mui,react-player,react-router-dom"
          />

          <Projects
            link="https://github.com/karthikks26/shoppy"
            img={shoppy}
            name="Shoppy"
            para="This shoppy shopping website. This is build using react, react tansackquery,axios,reactBootsrap"
          />
          <Projects
            link="https://github.com/karthikks26/Movie--sphere"
            img={moviesphere}
            name="MovieSphere"
            para="This is Moviesphere which tell about which yaer  movie was released.This is build using ombd api,react"
          />
          <Projects
            link="https://github.com/karthikks26/Article-Sumarizer"
            img={sumz}
            name="Sumz"
            para="This is sumz which summarizes news or articles . This is build using react react-redux redux-toolkit article-extractor-and-summarizer api "
          />

          <Projects
            link="https://github.com/karthikks26/tesla-clone"
            img={telsa}
            name="tesla"
            para="This is tesla clone.This is build using html,tailwind css"
          />

          <Projects
            link="https://github.com/karthikks26/Romifinance"
            img={romi}
            name="Romi"
            para="This is RomiFinance which is finance app. This is build using html css js"
          />

          <Projects
            link="https://github.com/karthikks26/giant.com"
            img={gaint}
            name="Giant"
            para="This website gives information of gaint .This is build using html css js"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectProps;
