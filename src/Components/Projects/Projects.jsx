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
          link=""
        />
        <ProjectCard
          title="Star App"
          main="Shift allowance calculator application"
          link="https://github.com/mangat00/Star-App"
        />
        <ProjectCard
          title="Reddit Clone"
          main="Clone application for Reddit"
          link="https://github.com/dangi-vikas/reddit-clone"
        />
      </div>
    </div>
  );
};

export default Projects;