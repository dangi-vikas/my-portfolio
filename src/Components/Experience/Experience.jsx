import React from "react";
import { FaCss3, FaJava, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiMysql, SiSpring } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import TCSLogo from "../../assets/tcs_logo.png";
import IncedoLogo from "../../assets/incedo_logo.jpg";
import { INCEDO_EXP, TCS_EXP } from "../../Constants";
import { CgChevronDoubleRight } from "react-icons/cg";

const Experience = () => {
  return (
    <div id="experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJava color="#5382a1" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiSpring color="47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMysql color="#00758f" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <VscAzureDevops color="#1572B6" size={50} />
          </span>
        </div>
        <div  >
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
            <img src={TCSLogo} className="h-7" />
            <span className="text-white">
              <h2 className="leading-tight">Java Developer , TCS</h2>
              <p className="text-sm leading-tight font-thin">
                August 2022 - Present
              </p>
              <ul className="text-sm py-2">
                {TCS_EXP.map((desc) => (
                  <li className="flex">
                    <CgChevronDoubleRight
                      color="#5382a1"
                      size={15}
                      className="mt-0.5 mr-0.5"
                    />
                    {desc}
                  </li>
                ))}
              </ul>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg  p-4 items-center">
            <img src={IncedoLogo} className="h-10" />
            <span className="text-white">
              <h2 className="leading-tight">
                Software Engineer Intern, Incedo
              </h2>
              <p className="text-sm leading-tight font-thin">
                January 2022 - July 2022
              </p>
              <ul className="text-sm py-2">
                {INCEDO_EXP.map((desc) => (
                  <li className="flex">
                    <CgChevronDoubleRight
                      color="#5382a1"
                      size={15}
                      className="mt-0.5 mr-0.5"
                    />
                    {desc}
                  </li>
                ))}
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
