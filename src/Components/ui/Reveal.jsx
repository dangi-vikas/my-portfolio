import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Scroll-triggered reveal. Animates once, uses transform/opacity only, and
 * collapses to a plain, instantly-visible element when motion is reduced.
 */
const Reveal = ({
  children,
  as = "div",
  delay = 0,
  duration = 0.6,
  y = 26,
  x = 0,
  once = true,
  className = "",
  ...rest
}) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
