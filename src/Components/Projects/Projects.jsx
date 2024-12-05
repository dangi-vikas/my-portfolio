import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="NexGen"
          main="Pharmacy dispensing application"
        />
        <ProjectCard
          title="Star App"
          main="Shift allowance calculator application"
        />
        <ProjectCard
          title="Reddit Clone"
          main="Clone application for Reddit"
        />
      </div>
    </div>
  );
};

export default Projects;