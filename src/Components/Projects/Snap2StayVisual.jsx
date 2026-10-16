import React from "react";

/**
 * Conceptual illustration of image-based property discovery:
 * query image → CLIP embedding → vector similarity → ranked matches.
 * Deliberately abstract — it is not a screenshot of a real product UI.
 */
const Snap2StayVisual = () => (
  <svg
    viewBox="0 0 520 320"
    role="img"
    aria-label="Conceptual diagram of visual property search: a query image is encoded by CLIP into an embedding, compared in a vector store, and returned as ranked property matches."
    className="h-auto w-full"
  >
    <defs>
      <linearGradient id="s2s-photo" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#c9a86a" stopOpacity="0.38" />
        <stop offset="100%" stopColor="#7fae92" stopOpacity="0.12" />
      </linearGradient>
      <radialGradient id="s2s-vec" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#c9a86a" stopOpacity="0.20" />
        <stop offset="100%" stopColor="#c9a86a" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* step 1 — query image */}
    <g>
      <text x="16" y="20" fill="#8c9a90" fontSize="9" letterSpacing="0.16em" fontFamily="ui-monospace, monospace">
        01 · QUERY
      </text>
      <rect x="14" y="32" width="132" height="104" rx="12" fill="#0a1210" stroke="rgba(242,239,230,0.12)" />
      <rect x="26" y="44" width="108" height="70" rx="8" fill="url(#s2s-photo)" />
      <circle cx="52" cy="66" r="7" fill="#f2efe6" opacity="0.7" />
      <path d="M26 104 L58 78 L84 98 L104 84 L134 108 V106 A8 8 0 0 1 126 114 H34 A8 8 0 0 1 26 106 Z" fill="#0a1210" opacity="0.55" />
      <text x="26" y="130" fill="#a3b0a6" fontSize="9" fontFamily="ui-monospace, monospace">
        uploaded image
      </text>
    </g>

    {/* connector 1 */}
    <g stroke="#c9a86a" strokeOpacity="0.6" strokeWidth="1.4" fill="none">
      <path d="M146 84 H176" className="flow-line" />
    </g>
    <path d="M172 79 l6 5 -6 5" fill="none" stroke="#c9a86a" strokeOpacity="0.8" strokeWidth="1.4" />

    {/* step 2 — CLIP encoder */}
    <g>
      <text x="182" y="20" fill="#8c9a90" fontSize="9" letterSpacing="0.16em" fontFamily="ui-monospace, monospace">
        02 · EMBED
      </text>
      <rect x="180" y="32" width="150" height="104" rx="12" fill="#0a1210" stroke="rgba(242,239,230,0.12)" />
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={196 + i * 10}
          y={50 + i * 6}
          width="96"
          height="12"
          rx="4"
          fill="#c9a86a"
          opacity={0.34 - i * 0.08}
        />
      ))}
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={200 + i * 8}
          y={78 + i * 6}
          width="104"
          height="8"
          rx="3"
          fill="#7fae92"
          opacity={0.26 - i * 0.05}
        />
      ))}
      <text x="196" y="128" fill="#a3b0a6" fontSize="9" fontFamily="ui-monospace, monospace">
        CLIP · ViT
      </text>
    </g>

    {/* connector 2 */}
    <g stroke="#c9a86a" strokeOpacity="0.6" strokeWidth="1.4" fill="none">
      <path d="M330 84 H360" className="flow-line" style={{ animationDelay: "0.6s" }} />
    </g>
    <path d="M356 79 l6 5 -6 5" fill="none" stroke="#c9a86a" strokeOpacity="0.8" strokeWidth="1.4" />

    {/* step 3 — vector space */}
    <g>
      <text x="366" y="20" fill="#8c9a90" fontSize="9" letterSpacing="0.16em" fontFamily="ui-monospace, monospace">
        03 · VECTOR SEARCH
      </text>
      <rect x="364" y="32" width="142" height="104" rx="12" fill="#0a1210" stroke="rgba(242,239,230,0.12)" />
      <rect x="364" y="32" width="142" height="104" rx="12" fill="url(#s2s-vec)" />
      {[
        [392, 62, 2.4, 0.35],
        [410, 88, 2, 0.3],
        [428, 58, 2.6, 0.3],
        [446, 96, 2.2, 0.35],
        [470, 70, 2.4, 0.3],
        [398, 112, 2, 0.28],
        [456, 118, 2, 0.28],
        [432, 78, 3.4, 0.95],
        [416, 74, 2.2, 0.4],
        [444, 86, 2.2, 0.4],
      ].map(([cx, cy, r, o], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#7fae92" opacity={o} />
      ))}
      <circle cx="432" cy="78" r="7" fill="none" stroke="#c9a86a" strokeOpacity="0.7" strokeWidth="1.2" />
      <text x="374" y="128" fill="#a3b0a6" fontSize="9" fontFamily="ui-monospace, monospace">
        nearest neighbour
      </text>
    </g>

    {/* results */}
    <text x="16" y="176" fill="#8c9a90" fontSize="9" letterSpacing="0.16em" fontFamily="ui-monospace, monospace">
      RANKED DESTINATION MATCHES
    </text>
    {[0, 1, 2].map((i) => {
      const y = 192 + i * 40;
      const best = i === 0;
      return (
        <g key={i}>
          <rect
            x="14"
            y={y}
            width="492"
            height="32"
            rx="9"
            fill={best ? "rgba(201,168,106,0.10)" : "#0a1210"}
            stroke={best ? "rgba(201,168,106,0.45)" : "rgba(242,239,230,0.09)"}
          />
          <rect x="24" y={y + 7} width="18" height="18" rx="5" fill="#c9a86a" opacity={best ? 0.85 : 0.3} />
          <rect x="52" y={y + 10} width={140 - i * 28} height="5" rx="2.5" fill="#f2efe6" opacity={best ? 0.85 : 0.4} />
          <rect x="52" y={y + 20} width={92 - i * 16} height="4" rx="2" fill="#a3b0a6" opacity="0.5" />
          <rect x="404" y={y + 9} width="90" height="14" rx="7" fill="none" stroke="rgba(242,239,230,0.12)" />
          <rect x="410" y={y + 13} width={56 - i * 14} height="6" rx="3" fill="#7fae92" opacity={best ? 0.85 : 0.4} />
        </g>
      );
    })}
  </svg>
);

export default Snap2StayVisual;
