import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view using IntersectionObserver.
 * The rootMargin creates a horizontal "reading line" near the upper third of
 * the viewport so the active link matches what the reader is focused on.
 */
export const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return undefined;

    const visible = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        });

        if (visible.size) {
          // Prefer the entry with the largest visible ratio.
          let best = null;
          let bestRatio = -1;
          visible.forEach((ratio, id) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              best = id;
            }
          });
          if (best) setActive(best);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
};

/**
 * Returns true once the page has scrolled past `offset` pixels.
 * Uses a passive, rAF-throttled listener.
 */
export const useScrolled = (offset = 24) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const read = () => {
      frame = 0;
      setScrolled(window.scrollY > offset);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [offset]);

  return scrolled;
};
