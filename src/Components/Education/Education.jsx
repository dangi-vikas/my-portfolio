import React from "react";
import { certifications, education } from "../../data/site";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import CurtainSection from "../ui/CurtainSection";

const Education = () => (
  <CurtainSection
    id="education"
    labelledBy="education-heading"
    className="section-anchor section-pad curtain-panel"
  >
    <div className="container-content">
      <SectionHeading
        id="education-heading"
        eyebrow="Education & certifications"
        title="Foundations and credentials."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        <Reveal as="article" className="card flex flex-col p-7 sm:p-8">
          <span className="eyebrow">Education</span>
          <h3 className="mt-4 font-display text-xl font-normal leading-snug tracking-[-0.01em] text-paper sm:text-2xl">
            {education.degree}
          </h3>
          <p className="mt-3 text-sm text-muted">{education.institute}</p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="chip">{education.period}</span>
            <span className="chip">{education.score}</span>
            <span className="chip border-accent/25 text-accent-soft">
              {education.distinction}
            </span>
          </div>
        </Reveal>

        <Reveal as="article" delay={0.08} className="card flex flex-col p-7 sm:p-8">
          <span className="eyebrow">Certifications</span>
          <ul className="mt-4 divide-y divide-white/[0.06]">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex items-start gap-3 py-4 first:pt-1">
                <span
                  aria-hidden="true"
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_0_4px_rgba(201,168,106,0.16)]"
                />
                <span>
                  <span className="block font-display text-[15px] font-medium text-paper">
                    {cert.name}
                  </span>
                  <span className="mt-0.5 block font-mono text-2xs uppercase tracking-wider text-muted">
                    {cert.issuer}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </CurtainSection>
);

export default Education;
