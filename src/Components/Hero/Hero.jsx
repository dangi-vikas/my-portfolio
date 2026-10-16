import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { hero, profile } from "../../data/site";
import CurtainSection from "../ui/CurtainSection";
import { ArrowRight, DownloadIcon } from "../ui/Icons";
import portrait from "../../assets/portrait-cutout.webp";

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.18 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const portraitIn = {
  hidden: { opacity: 0, scale: 0.97, y: 26 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.95, delay: 0.24, ease: EASE },
  },
};

/**
 * The portrait, already cut out from its background in the source asset, so the
 * canvas shows through its alpha channel. Only the bottom of the torso is
 * dissolved into the page (see `.portrait-frame`). `glow` adds the ambient
 * brass/foliage light that lifts the silhouette off the near-black canvas; the
 * small phone-sized instance skips it, where it would just smear over the copy.
 */
const HeroPortrait = ({ className = "", glow = false }) => (
  <div className={`relative ${className}`}>
    {glow && (
      <>
        <span
          aria-hidden="true"
          className="absolute -inset-x-6 -inset-y-12 -z-10 opacity-80"
          style={{
            background:
              "radial-gradient(closest-side, rgba(201,168,106,0.20), rgba(201,168,106,0))",
          }}
        />
        <span
          aria-hidden="true"
          className="absolute -inset-x-5 -inset-y-8 translate-y-10 -z-10 opacity-70"
          style={{
            background:
              "radial-gradient(closest-side, rgba(127,174,146,0.16), rgba(127,174,146,0))",
          }}
        />
      </>
    )}

    <div className="portrait-frame">
      <img
        src={portrait}
        alt="Vikas Dangi"
        width="880"
        height="1100"
        className="h-auto w-full"
      />
    </div>
  </div>
);

/**
 * Cinematic hero: editorial copy on the left with the portrait on the right at
 * every width — as a full column from the `md` breakpoint up, and as a small
 * float wrapped by the headline on phones, so it never drops below the copy. A
 * row of factual glass cards closes the band. The whole band swipes upward as
 * the visitor scrolls, handing off to the page like a drawn curtain.
 */
const Hero = () => {
  const reduce = useReducedMotion();

  const motionProps = reduce
    ? {}
    : { variants: container, initial: "hidden", animate: "show" };

  const itemProps = reduce ? {} : { variants: item };
  const portraitProps = reduce ? {} : { variants: portraitIn };

  return (
    <CurtainSection
      id="home"
      labelledBy="hero-heading"
      mode="exit"
      distance={110}
      className="section-anchor relative flex min-h-[100svh] flex-col justify-center pb-16 pt-28 sm:pt-32 lg:pb-20"
    >
      <div className="container-content">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start md:gap-14">
          {/* Copy */}
          <motion.div {...motionProps} className="max-w-2xl">
            <motion.p {...itemProps} className="eyebrow">
              <span className="h-px w-6 bg-accent/70" aria-hidden="true" />
              {hero.eyebrow}
            </motion.p>

            {/* Phones only: the same portrait, floated into the headline. It sits
                after the eyebrow because the eyebrow is a single atomic inline
                box — it cannot wrap around a float, so it goes full width first. */}
            <div className="float-right mt-6 mb-2 ml-4 w-[112px] sm:w-[140px] md:hidden">
              <HeroPortrait />
            </div>

            <h1
              id="hero-heading"
              className="mt-7 font-display text-[2.5rem] font-normal leading-[1.04] tracking-[-0.015em] text-paper sm:text-[3rem] lg:text-[3.5rem]"
            >
              <motion.span {...itemProps} className="block">
                {hero.headline[0]}
              </motion.span>
              <motion.span {...itemProps} className="block text-gradient">
                {hero.headline[1]}
              </motion.span>
            </h1>

            <motion.p
              {...itemProps}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {hero.supporting}
            </motion.p>

            <motion.ul
              {...itemProps}
              className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-2xs uppercase tracking-widest2 text-muted"
              aria-label="Core technologies"
            >
              {hero.highlight.map((tech, i) => (
                <li key={tech} className="flex items-center gap-3">
                  {tech}
                  {i < hero.highlight.length - 1 && (
                    <span
                      className="h-1 w-1 shrink-0 rounded-full bg-accent/60"
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </motion.ul>

            <motion.div
              {...itemProps}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href={hero.primaryCta.href} className="btn-primary group">
                {hero.primaryCta.label}
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href={hero.secondaryCta.href}
                download={profile.resumeFileName}
                className="btn-ghost"
              >
                <DownloadIcon size={16} />
                {hero.secondaryCta.label}
              </a>
            </motion.div>
          </motion.div>

          {/* Portrait column — from `md` up. */}
          <motion.div {...portraitProps} className="hidden md:block">
            <HeroPortrait glow className="mx-auto w-full max-w-[400px]" />
          </motion.div>
        </div>

        {/* Factual snapshot cards, echoing the reference layout's card row. */}
        <motion.ul
          {...motionProps}
          className="mt-14 grid gap-4 sm:grid-cols-3"
          aria-label="At a glance"
        >
          {hero.stats.map((stat) => (
            <motion.li
              {...itemProps}
              key={stat.label}
              className="card card-hover group relative overflow-hidden px-5 py-5"
            >
              <span className="block font-mono text-2xs uppercase tracking-widest2 text-muted">
                {stat.label}
              </span>
              <span className="mt-2 block font-display text-2xl font-normal leading-tight text-paper">
                {stat.value}
              </span>
              <span className="mt-1 block text-xs text-muted">{stat.note}</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-4 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-accent/60 to-transparent transition-transform duration-500 group-hover:scale-x-100"
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </CurtainSection>
  );
};

export default Hero;
