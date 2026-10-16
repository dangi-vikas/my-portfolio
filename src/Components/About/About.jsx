import React from "react";
import { about } from "../../data/site";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import CurtainSection from "../ui/CurtainSection";

const About = () => (
  <CurtainSection
    id="about"
    labelledBy="about-heading"
    className="section-anchor section-pad curtain-panel"
  >
    <div className="container-content grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
      <div>
        <SectionHeading
          id="about-heading"
          eyebrow={about.eyebrow}
          title={about.heading}
        />

        <div className="mt-8 space-y-5">
          {about.paragraphs.map((paragraph, i) => (
            <Reveal
              key={i}
              as="p"
              delay={0.08 + i * 0.06}
              className="max-w-2xl text-base leading-relaxed text-muted sm:text-[17px]"
            >
              {paragraph}
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal
        as="div"
        y={26}
        delay={0.1}
        className="card h-fit overflow-hidden p-6 sm:p-7"
      >
        <dl className="divide-y divide-white/[0.06]">
          {about.facts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-baseline justify-between gap-6 py-4 first:pt-0 last:pb-0"
            >
              <dt className="font-mono text-2xs uppercase tracking-widest2 text-muted">
                {fact.label}
              </dt>
              <dd className="text-right font-display text-sm font-medium text-paper sm:text-[15px]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_0_4px_rgba(201,168,106,0.18)]"
            aria-hidden="true"
          />
          <p className="text-sm leading-snug text-muted">
            Comfortable owning a service end to end — from API contract and data
            model to deployment, observability, and on-call reliability.
          </p>
        </div>
      </Reveal>
    </div>
  </CurtainSection>
);

export default About;
