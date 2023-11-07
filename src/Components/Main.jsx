import React from "react";
import img from "../assets/photo.png";

const Main = () => {
  return (
    <>
      <nav className="  border-gray-300 border-b py-2">
        <h2 className="text-xl  text-center animate-rotate-y animate-thrice">
          <i>Karthik KS</i>
        </h2>
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
          <h2 className=" font-bold text-4xl">
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
