import React, { useState } from "react";
import img from "../assets/photo.png";
import { Sun, Moon } from "lucide-react";
import { useContext } from "react";
import { context } from "../MainLayout";
import "animate.css/animate.css";

const Main = () => {
  const { handleclick, state, setState } = useContext(context);
  return (
    <>
      <nav className="  border-gray-300 border-b py-2 dark:border-none flex items-center ">
        <h2 className="text-xl    animate-rotate-y animate-thrice dark:text-white mx-auto translate-x-6 ">
          <i className="flex-1 text-center">Karthik KS</i>
        </h2>
        <div className="mr-2 cursor-pointer " onClick={handleclick}>
          {state ? <Sun /> : <Moon />}
        </div>
      </nav>
      <div className="container flex flex-col justify-center items-center my-3  md:flex-row-reverse md:items-center  lg:justify-evenly">
        <div className="bg-yellow-400 rounded-full">
          <img
            src={img}
            className="w-[300px] h-[300px] rounded-full  object-cover "
          />
        </div>
        {/* Bio */}
        <div className=" text-center md:mx-10">
          <h2 className=" font-bold text-4xl dark:text-white">
            {" "}
            Hi, I am <br />
            <span className="text-blue-600">Karthik Ks</span>
            <br /> Web Developer
          </h2>
          <button className=" bg-blue-400 text-white px-2 py-1 rounded mt-2 shadow-sm">
            {" "}
            <a
              href="https://www.linkedin.com/in/karthik-ks-b46640279/"
              target="_blank"
            >
              Connect
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
