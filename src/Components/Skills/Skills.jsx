import React from "react";
import { skillGroups } from "../../data/site";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import CurtainSection from "../ui/CurtainSection";
import { SkillIcon } from "../ui/Icons";

/** Bento spans so the eight groups fill the 12-column grid cleanly. */
const SPANS = [
  "md:col-span-4",
  "md:col-span-8",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
];

const SkillCard = ({ group, index }) => (
  <Reveal
    as="article"
    delay={0.04 * index}
    className={`group card card-hover col-span-1 flex flex-col p-6 sm:p-7 ${SPANS[index] || "md:col-span-4"}`}
  >
    <div className="flex items-center justify-between">
      <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-soft transition-colors duration-500 group-hover:border-accent/40 group-hover:text-white">
        <SkillIcon name={group.icon} size={20} />
      </span>
      <span className="font-mono text-2xs tracking-widest2 text-muted/85">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>

    <h3 className="mt-5 font-display text-lg font-medium tracking-tight text-paper">
      {group.title}
    </h3>

    {/* accent rule grows on hover */}
    <span
      aria-hidden="true"
      className="mt-3 h-px w-10 origin-left bg-accent/60 transition-transform duration-500 ease-out group-hover:scale-x-[5.5]"
    />

    <ul className="mt-5 flex flex-wrap gap-2">
      {group.items.map((skill) => (
        <li key={skill} className="chip">
          {skill}
        </li>
      ))}
    </ul>
  </Reveal>
);

const Skills = () => (
  <CurtainSection
    id="skills"
    labelledBy="skills-heading"
    className="section-anchor section-pad curtain-panel"
  >
    <div className="container-content">
      <SectionHeading
        id="skills-heading"
        eyebrow="Capabilities"
        title="The stack I reach for."
        description="Grouped by how they show up in my day-to-day work — not as scores on a chart. Depth in each area has grown through production systems rather than tutorials."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-12">
        {skillGroups.map((group, i) => (
          <SkillCard key={group.title} group={group} index={i} />
        ))}
      </div>
    </div>
  </CurtainSection>
);

export default Skills;
