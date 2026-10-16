import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Brief, non-blocking page reveal. The overlay is pointer-events-none and
 * unmounts after ~1s, so it never delays interaction or content access.
 * Skipped entirely when the user prefers reduced motion.
 */
const IntroCurtain = () => {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(!reduce);

  useEffect(() => {
    if (reduce) return undefined;
    // Safety net in case onAnimationComplete never fires (e.g. tab hidden).
    const t = setTimeout(() => setMounted(false), 1600);
    return () => clearTimeout(t);
  }, [reduce]);

  if (!mounted) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[120] flex items-center justify-center bg-ink-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.55, duration: 0.55, ease: "easeInOut" }}
      onAnimationComplete={() => setMounted(false)}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="font-display text-3xl font-normal tracking-[-0.01em] text-paper"
        >
          Vikas Dangi
        </motion.span>
        <span className="h-px w-24 overflow-hidden rounded-full bg-white/10">
          <motion.span
            className="block h-full w-full origin-left bg-accent-sheen"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </span>
      </div>
    </motion.div>
  );
};

export default IntroCurtain;
