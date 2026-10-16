import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { experience } from "../../data/site";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import CurtainSection from "../ui/CurtainSection";
import { ChevronRight } from "../ui/Icons";

const INITIAL_VISIBLE = 4;

const Bullet = ({ item }) => (
  <li className="flex gap-3">
    <ChevronRight
      size={15}
      className="mt-[3px] shrink-0 text-accent/80"
      aria-hidden="true"
    />
    <span className="text-sm leading-relaxed text-muted">
      {item.text}
      {item.metric && (
        <span className="ml-2 inline-flex translate-y-[-1px] items-center rounded-full border border-accent/25 bg-accent/[0.08] px-2 py-0.5 font-mono text-2xs tracking-wide text-accent-soft">
          {item.metric}
        </span>
      )}
    </span>
  </li>
);

const RoleCard = ({ role, index }) => {
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();

  const visible = role.highlights.slice(0, INITIAL_VISIBLE);
  const hidden = role.highlights.slice(INITIAL_VISIBLE);
  const hasMore = hidden.length > 0;

  return (
    <Reveal
      as="article"
      delay={0.05 * index}
      className="relative pl-8 sm:pl-12"
      aria-labelledby={`role-${index}`}
    >
      {/* timeline node */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 ${
          role.current
            ? "border-accent bg-accent/30 shadow-[0_0_0_5px_rgba(201,168,106,0.14)]"
            : "border-white/25 bg-ink-800"
        }`}
        style={{ transform: "translateX(-5.5px)" }}
      />

      <div className="card p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
          <div>
            <h3
              id={`role-${index}`}
              className="font-display text-xl font-normal tracking-[-0.01em] text-paper sm:text-2xl"
            >
              {role.role}
            </h3>
            <p className="mt-1 text-sm text-accent-soft">
              {role.company}
              <span className="text-muted"> · {role.location}</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            {role.current && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/[0.07] px-2.5 py-1 font-mono text-2xs uppercase tracking-wider text-accent-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                Current
              </span>
            )}
            <span className="whitespace-nowrap font-mono text-2xs uppercase tracking-wider text-muted">
              {role.period}
            </span>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted/90">{role.summary}</p>

        <ul className="mt-5 space-y-3">
          {visible.map((item, i) => (
            <Bullet key={i} item={item} />
          ))}
        </ul>

        {hasMore && (
          <>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  key="more"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="mt-3 space-y-3">
                    {hidden.map((item, i) => (
                      <Bullet key={i} item={item} />
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-2 text-xs font-medium text-muted transition-colors duration-300 hover:border-accent/50 hover:text-paper"
            >
              {expanded ? "Show less" : `Show ${hidden.length} more`}
              <ChevronRight
                size={14}
                className={`transition-transform duration-300 ${
                  expanded ? "-rotate-90" : "rotate-90"
                }`}
              />
            </button>
          </>
        )}

        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${role.company} technologies`}>
          {role.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};

const Experience = () => (
  <CurtainSection
    id="experience"
    labelledBy="experience-heading"
    className="section-anchor section-pad curtain-panel"
  >
    <div className="container-content">
      <SectionHeading
        id="experience-heading"
        eyebrow="Experience"
        title="Where I've built and shipped."
        description="Four years across a global hospitality platform and a high-traffic pharmacy platform — focused on backend reliability, performance, and delivery."
      />

      <div className="relative mt-14">
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-0 top-2 w-px bg-gradient-to-b from-accent/50 via-white/10 to-transparent"
        />
        <div className="space-y-10">
          {experience.map((role, i) => (
            <RoleCard key={role.company} role={role} index={i} />
          ))}
        </div>
      </div>
    </div>
  </CurtainSection>
);

export default Experience;
