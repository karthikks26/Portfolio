import React from "react";

const Projects = (props) => {
  const { link, img, name, para } = props;
  return (
    <>
      <div className="md:w-[600px] md:block md:mx-auto md:my-3 lg:w-[350px]">
        <a href={link} target="_blank">
          <div className="  shadow-2xl rounded-lg mx-7 my-4  dark:shadow-cyan-500 ">
            <div>
              <img src={img} />
            </div>
            <div className="py-1 px-1">
              <h2 className="text-2xl font-bold  text-center">{name}</h2>
              <p className="font-normal text-base">{para}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Projects;
