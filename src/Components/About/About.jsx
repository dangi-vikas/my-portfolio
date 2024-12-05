import { RiArrowGoForwardLine } from "@remixicon/react";
import React from "react";

const About = () => {
  return (
    <div id="about"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black 
    shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src="" alt="About" />
          <ul>
            <div className="flex gap-3 py-4">
              <RiArrowGoForwardLine
                size={30}
                className="mt-1"
              ></RiArrowGoForwardLine>
              <span className="w-96">
                <h1 className="text-x1 md:text-2xl font-semibold leading-normal">
                  Java Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  fugit provident illo aspernatur deserunt eum, dolorum neque
                  incidunt cumque optio dolores, explicabo tempora minima ullam
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <RiArrowGoForwardLine
                size={30}
                className="mt-1"
              ></RiArrowGoForwardLine>
              <span className="w-96">
                <h1 className="text-x1 md:text-2xl font-semibold leading-normal">
                  React Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                  fugit provident illo aspernatur incidunt cumque optio dolores,
                  explicabo tempora minima ullam
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
