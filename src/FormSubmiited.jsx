import React from "react";
import { Link } from "react-router-dom";

const FormSubmiited = () => {
  return (
    <>
      <div className="h-screen  bg-blue-100 text-center flex justify-center items-center flex-col">
        <h1 className=" text-3xl animate-bounce ">Form submitted</h1>
        <p>Click the button below to Go back to Home page</p>
        <button className=" bg-blue-900 text-white py-2 px-3 ">
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    </>
  );
};

export default FormSubmiited;
