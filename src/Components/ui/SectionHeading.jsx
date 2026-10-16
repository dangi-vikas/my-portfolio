import React from "react";
import Reveal from "./Reveal";

/**
 * Shared section heading: monospace eyebrow, editorial title, optional lead.
 */
const SectionHeading = ({ eyebrow, title, description, align = "left", id }) => {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow && (
        <Reveal as="span" className="eyebrow" y={14}>
          <span className="h-px w-6 bg-accent/70" aria-hidden="true" />
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        as="h2"
        id={id}
        delay={0.05}
        className="mt-5 text-3xl font-normal leading-[1.12] tracking-[-0.01em] text-paper sm:text-4xl lg:text-[3.25rem]"
      >
        {title}
      </Reveal>
      {description && (
        <Reveal
          as="p"
          delay={0.1}
          className="mt-5 max-w-xl text-base leading-relaxed text-muted"
        >
          {description}
        </Reveal>
      )}
    </div>
  );
};

export default SectionHeading;
