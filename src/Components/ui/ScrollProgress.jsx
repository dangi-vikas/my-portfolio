import React from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * Thin reading-progress bar pinned under the header. Purely decorative and
 * hidden entirely for reduced-motion users.
 */
const ScrollProgress = () => {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    mass: 0.3,
  });

  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[90] h-[2px] origin-left bg-accent-sheen"
    />
  );
};

export default ScrollProgress;
