import React from "react";
import img from "../assets/work.png";
import css from "../assets/tech/css.svg";
import html from "../assets/tech/html.png";
import js from "../assets/tech/js.png";
import react from "../assets/tech/react.png";
import tailwind from "../assets/tech/tailwind.png";
import redux from "../assets/tech/redux.svg";
import express from "../assets/tech/express.png";
import mongo from "../assets/tech/mongo.png"
import Marquee from "react-fast-marquee";
const Tech = () => {
  return (
    <>
      <h1 className="text-3xl text-center underline gradient-text ">
        Tech I know
      </h1>
      <div className="lg:flex lg:justify-between lg:items-center ">
        <div className=" md:w-[600px] md:block md:mx-auto md:my-5 lg:ml-5 lg:w-[800px]  dark:rounded-full ">
          <img
            src={img}
            className="md:w-full dark:bg-neutral-100 my-3  dark:rounded-full"
          />
        </div>

        <Marquee className=" h-[200px] ">
          <img src={html} className="tech" />

          <img src={css} className="tech" />
          <img src={js} className="tech" />
          <img src={react} className="tech" />

          <img src={tailwind} className="tech" />
          <img src={redux} className="tech" />
          <img src={express} className="tech" />
          <img src={mongo} className="tech" />

        </Marquee>
      </div>
    </>
  );
};

export default Tech;
