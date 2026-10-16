import React from "react";

/**
 * Ambient page backdrop: a fixed, layered gradient wash, a faint hairline grid
 * and a soft vignette. Implemented with plain gradients (no blur filters) so it
 * stays cheap to composite on low-end devices.
 */
const Background = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    {/* Base wash: warm at the top, deep green-black at the bottom. */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, #0a1210 0%, #060907 45%, #060907 100%)",
      }}
    />

    {/* Brass light source, top-left — the "sun through the canopy" of the theme. */}
    <div
      className="absolute left-[-12%] top-[-14%] h-[620px] w-[620px] rounded-full opacity-70"
      style={{
        background:
          "radial-gradient(closest-side, rgba(201,168,106,0.13), rgba(201,168,106,0))",
      }}
    />
    {/* Foliage green, right side. */}
    <div
      className="absolute right-[-18%] top-[18%] h-[640px] w-[640px] rounded-full opacity-60"
      style={{
        background:
          "radial-gradient(closest-side, rgba(127,174,146,0.11), rgba(127,174,146,0))",
      }}
    />
    {/* A single cool highlight low on the page to keep it from going flat. */}
    <div
      className="absolute bottom-[-24%] left-1/4 h-[560px] w-[560px] rounded-full opacity-40"
      style={{
        background:
          "radial-gradient(closest-side, rgba(242,239,230,0.05), rgba(242,239,230,0))",
      }}
    />

    {/* Hairline grid, faded out toward the bottom of the viewport. */}
    <div className="absolute inset-0 grid-overlay opacity-[0.5] mask-fade-b" />

    {/* Vignette so text keeps its contrast at the edges of the frame. */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 40%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 100%)",
      }}
    />

    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  </div>
);

export default Background;
