import React from "react";
import pdf from "../assets/Resume.pdf";

const Resume = () => {
  return (
    <>
      <h1 className="text-3xl text-center underline gradient-text">Resume</h1>
      <div className="text-center my-6">
        <a
          href={pdf}
          download
          className="bg-blue-500 py-2 px-2 text-white rounded-lg text-2xl hover:bg-purple-800"
        >
          Download
        </a>
      </div>
    </>
  );
};

export default Resume;
