import React from "react";
import { Navigate } from "react-router-dom";

const Contact = () => {
  let value1 = "http://localhost:5173/form-submitted";
  let value2 =
    "https://portfolio-ihhtio371-karthikks26.vercel.app/form-submitted";
  return (
    <>
      <h1 className="text-3xl text-center underline gradient-text">
        Contact Me
      </h1>
      <div className="w-full  text-center lg:w-[600px] lg:block lg:mx-auto ">
        <form
          action="https://formsubmit.co/karthikks260703@gmail.com"
          method="post"
        >
          <label htmlFor="name " className="text-xl">
            Name
          </label>
          <br />

          <input
            type="text"
            name="name"
            required
            className="w-[80%]"
            placeholder="Enter your name"
          />
          <br />
          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <br />
          <input
            type="email"
            name="email"
            required
            className="w-[80%]"
            placeholder="Enter your email"
          />
          <br />
          <label className="text-xl " form="message">
            More
          </label>
          <br />
          <textarea
            className="w-[80%] h-[200px]"
            placeholder="Tell me what you want to convey"
            type="text"
            name="Message"
          ></textarea>

          <input type="hidden" name="_captcha" value="false"></input>
          <input type="hidden" name="_template" value="table"></input>

          <br />
          <input type="hidden" name="_next" value={value2 || value1} />
          <button
            type="submit"
            className=" bg-green-900 text-white px-3 py-1 w-[80%]"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
