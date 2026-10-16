import React from "react";
import Reveal from "../ui/Reveal";
import { ExternalIcon, GithubIcon, ChevronRight } from "../ui/Icons";
import Snap2StayVisual from "./Snap2StayVisual";
import NexGenVisual from "./NexGenVisual";

const VISUALS = {
  snap2stay: Snap2StayVisual,
  nexgen: NexGenVisual,
};

const ProjectCard = ({ project, index }) => {
  const Visual = VISUALS[project.visual] || Snap2StayVisual;
  const featured = project.featured;

  return (
    <Reveal
      as="article"
      delay={0.05 * index}
      className="group card card-hover overflow-hidden"
    >
      <div className={`grid ${featured ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-2"}`}>
        {/* Content */}
        <div className={`flex flex-col p-7 sm:p-9 ${featured ? "lg:order-1" : ""}`}>
          <div className="flex items-center gap-3">
            <span className="eyebrow">{featured ? "Featured project" : `Project ${String(index + 1).padStart(2, "0")}`}</span>
          </div>

          <h3 className="mt-4 font-display text-2xl font-normal leading-tight tracking-[-0.01em] text-paper sm:text-[28px]">
            {project.name}
            <span className="ml-2 align-middle text-base font-normal text-muted">
              — {project.tagline}
            </span>
          </h3>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-[15px]">
            {project.description}
          </p>

          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-3">
                <ChevronRight size={15} className="mt-[3px] shrink-0 text-accent/80" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-muted">{h}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.name} technologies`}>
            {project.tech.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost group/link"
            >
              <GithubIcon size={16} />
              View on GitHub
              <ExternalIcon
                size={14}
                className="text-muted transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
              />
            </a>
          </div>
        </div>

        {/* Visual */}
        <div
          className={`relative flex items-center border-t border-white/[0.07] bg-ink-900/40 p-6 sm:p-8 lg:border-t-0 ${
            featured ? "lg:order-2 lg:border-l" : "lg:border-l"
          }`}
        >
          <div className="w-full overflow-hidden rounded-xl border border-white/[0.06] bg-ink-950/60 p-4 transition-transform duration-700 ease-out group-hover:scale-[1.02]">
            <Visual />
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProjectCard;
