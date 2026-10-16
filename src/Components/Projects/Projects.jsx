import React from "react";
import { projects } from "../../data/site";
import SectionHeading from "../ui/SectionHeading";
import CurtainSection from "../ui/CurtainSection";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <CurtainSection
    id="projects"
    labelledBy="projects-heading"
    className="section-anchor section-pad curtain-panel"
  >
    <div className="container-content">
      <SectionHeading
        id="projects-heading"
        eyebrow="Selected work"
        title="Systems built end to end."
        description="Two projects that best represent how I design services, integrate machine learning into Java backends, and reason about reliability."
      />

      <div className="mt-14 space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <p className="mt-8 text-xs leading-relaxed text-muted/85">
        Illustrated above with original conceptual diagrams in place of product
        screenshots. Source code and documentation live in the linked repositories.
      </p>
    </div>
  </CurtainSection>
);

export default Projects;
