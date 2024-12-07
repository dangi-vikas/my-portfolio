import React from "react";
import TextChange from "../TextChange";
import homeImg from "../../assets/home_img.png";
import { HOME_DESC } from "../../Constants";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          {HOME_DESC}
        </p>
        <a href="#contact">
        <button
          className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
        duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
        </a>
      </div>
      <div></div>
      <img className="w-2/5" src={homeImg} alt="home" />
    </div>
  );
};

export default Home;
