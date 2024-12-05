import React from "react";
import { FaCss3, FaJava, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#F24E1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
        </div>
        <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <img color="#4285F4" size={50} src="" />
            <span className="text-white">
              <h2 className="leading-tight">Java Developer , TCS</h2>
              <p className="text-sm leading-tight font-thin">
                August 2022 - Present
              </p>
              <ul className="text-sm p-2">
                <li>- Work as Backend developer</li>
                <li>- Java Developer</li>
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <img color="#E50914" size={50} src="" />
            <span className="text-white">
              <h2 className="leading-tight">
                Software Engineer Intern, Incedo
              </h2>
              <p className="text-sm leading-tight font-thin">
                January 2022 - July 2022
              </p>
              <ul className="text-sm p-2">
                <li>- Worked as a software developer.</li>
                <li>- Software Engineer Intern</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
