import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * Distance (px) a band travels against the scroll direction. Kept as module
 * constants so the offset arrays keep a stable identity between renders.
 */
const ENTER_OFFSET = ["start end", "end start"];
const EXIT_OFFSET = ["start start", "end start"];

/**
 * A full-width page band that swipes upward as it moves through the viewport,
 * so scroll feels like sheets of film sliding up over one another.
 *
 * `mode="enter"` (default) travels symmetrically as the band crosses the
 * viewport; `mode="exit"` starts neutral at the top of the page and swipes up
 * and away, which is what the hero uses.
 *
 * The transform is transform-only (no layout thrash) and is skipped entirely
 * when the visitor prefers reduced motion.
 */
const CurtainSection = ({
  id,
  labelledBy,
  mode = "enter",
  distance = 76,
  className = "",
  children,
  ...rest
}) => {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: mode === "exit" ? EXIT_OFFSET : ENTER_OFFSET,
  });

  const range = useTransform(
    scrollYProgress,
    [0, 1],
    mode === "exit" ? [0, -distance] : [distance, -distance]
  );

  // A stiff, well-damped spring reads as "fast but smooth" rather than floaty.
  const y = useSpring(range, { stiffness: 320, damping: 46, mass: 0.4 });

  return (
    <motion.section
      id={id}
      ref={ref}
      aria-labelledby={labelledBy}
      style={reduce ? undefined : { y }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
};

export default CurtainSection;
