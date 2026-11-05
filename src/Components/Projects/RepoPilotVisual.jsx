import React from "react";

/**
 * High-level illustration of RepoPilot: a Java repository on disk → an index of
 * symbols and the references between them → the interactive Code Universe built
 * from that index. Deliberately conceptual — it is not a screenshot of the real
 * workbench, which lives in the linked repository.
 */
const RepoPilotVisual = () => {
  const nodes = [
    { x: 396, y: 60, r: 4.6, accent: true },
    { x: 420, y: 46, r: 2.8 },
    { x: 444, y: 62, r: 3.6, accent: true },
    { x: 470, y: 50, r: 2.4 },
    { x: 404, y: 84, r: 3.2 },
    { x: 434, y: 90, r: 4.2, accent: true },
    { x: 462, y: 80, r: 3 },
    { x: 486, y: 96, r: 2.2 },
  ];

  const edges = [
    [0, 1],
    [0, 4],
    [1, 2],
    [1, 5],
    [2, 3],
    [4, 5],
    [5, 6],
    [6, 7],
    [2, 6],
    [0, 5],
  ];

  const reports = [
    { label: "Coverage", detail: "read · skipped · unparsed", pill: "STATED" },
    { label: "Findings", detail: "severity · rule · line", pill: "CONFIRMED" },
    { label: "Performance Lab", detail: "JMH · recordings · runs", pill: "MEASURED" },
  ];

  return (
    <svg
      viewBox="0 0 520 320"
      role="img"
      aria-label="Conceptual diagram of RepoPilot: a Java repository on disk is indexed into symbols and references, then drawn as an interactive Code Universe of nodes and edges, with coverage, findings and performance reports beneath."
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="rp-index" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9a86a" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#7fae92" stopOpacity="0.03" />
        </linearGradient>
        <radialGradient id="rp-universe" cx="50%" cy="50%" r="62%">
          <stop offset="0%" stopColor="#7fae92" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#7fae92" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* step 1 — repository on disk */}
      <g>
        <text x="16" y="20" fill="#8c9a90" fontSize="9" letterSpacing="0.16em" fontFamily="ui-monospace, monospace">
          01 · REPOSITORY
        </text>
        <rect x="14" y="32" width="132" height="104" rx="12" fill="#0a1210" stroke="rgba(242,239,230,0.12)" />
        {/* folder */}
        <path
          d="M26 46 h12 l3 4 h15 v14 h-30z"
          fill="none"
          stroke="rgba(242,239,230,0.35)"
          strokeWidth="1.1"
        />
        {/* file rows */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x="26" y={76 + i * 12} width="6" height="6" rx="1.5" fill="#7fae92" opacity={0.75 - i * 0.12} />
            <rect x="38" y={77 + i * 12} width={78 - i * 14} height="4" rx="2" fill="#f2efe6" opacity={0.24 - i * 0.03} />
          </g>
        ))}
        <text x="26" y="130" fill="#a3b0a6" fontSize="9" fontFamily="ui-monospace, monospace">
          Java · on disk
        </text>
      </g>

      {/* connector 1 */}
      <g stroke="#c9a86a" strokeOpacity="0.6" strokeWidth="1.4" fill="none">
        <path d="M146 84 H176" className="flow-line" />
      </g>
      <path d="M172 79 l6 5 -6 5" fill="none" stroke="#c9a86a" strokeOpacity="0.8" strokeWidth="1.4" />

      {/* step 2 — index of symbols and references */}
      <g>
        <text x="182" y="20" fill="#8c9a90" fontSize="9" letterSpacing="0.16em" fontFamily="ui-monospace, monospace">
          02 · INDEX
        </text>
        <rect x="180" y="32" width="150" height="104" rx="12" fill="#0a1210" stroke="rgba(242,239,230,0.12)" />
        <rect
          x="190"
          y="42"
          width="130"
          height="74"
          rx="10"
          fill="url(#rp-index)"
          stroke="rgba(201,168,106,0.38)"
          strokeWidth="1.2"
          strokeDasharray="6 6"
        />
        {[
          { x: 200, y: 50, w: 62, o: 0.9 },
          { x: 200, y: 70, w: 92, o: 0.55 },
          { x: 200, y: 90, w: 74, o: 0.35 },
        ].map((s) => (
          <g key={s.y}>
            <rect x={s.x} y={s.y} width={s.w} height="12" rx="6" fill="#f2efe6" opacity="0.14" />
            <circle cx={s.x + 6} cy={s.y + 6} r="2" fill="#7fae92" opacity={s.o} />
          </g>
        ))}
        <text x="196" y="130" fill="#a3b0a6" fontSize="9" fontFamily="ui-monospace, monospace">
          symbols · references
        </text>
      </g>

      {/* connector 2 */}
      <g stroke="#7fae92" strokeOpacity="0.6" strokeWidth="1.4" fill="none">
        <path d="M330 84 H360" className="flow-line" style={{ animationDelay: "0.6s" }} />
      </g>
      <path d="M356 79 l6 5 -6 5" fill="none" stroke="#7fae92" strokeOpacity="0.8" strokeWidth="1.4" />

      {/* step 3 — code universe graph */}
      <g>
        <text x="366" y="20" fill="#8c9a90" fontSize="9" letterSpacing="0.16em" fontFamily="ui-monospace, monospace">
          03 · CODE UNIVERSE
        </text>
        <rect x="364" y="32" width="142" height="104" rx="12" fill="#0a1210" stroke="rgba(242,239,230,0.12)" />
        <rect x="364" y="32" width="142" height="104" rx="12" fill="url(#rp-universe)" />

        <g stroke="rgba(242,239,230,0.22)" strokeWidth="0.9">
          {edges.map(([a, b]) => (
            <line key={`${a}-${b}`} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} />
          ))}
        </g>
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.accent ? "#c9a86a" : "#7fae92"}
            opacity={n.accent ? 0.9 : 0.55}
          />
        ))}
        <circle cx="434" cy="90" r="8" fill="none" stroke="#c9a86a" strokeOpacity="0.55" />

        <text x="374" y="122" fill="#a3b0a6" fontSize="8" fontFamily="ui-monospace, monospace">
          2,400 of 100,801 edges
        </text>
        <text x="374" y="132" fill="#8c9a90" fontSize="8" fontFamily="ui-monospace, monospace">
          a stated slice, not a summary
        </text>
      </g>

      {/* what it reports */}
      <text x="16" y="176" fill="#8c9a90" fontSize="9" letterSpacing="0.16em" fontFamily="ui-monospace, monospace">
        WHAT IT REPORTS
      </text>
      {reports.map((row, i) => {
        const y = 192 + i * 40;
        const best = i === 0;
        return (
          <g key={row.label}>
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
            <text
              x="52"
              y={y + 14}
              fill="#f2efe6"
              fillOpacity={best ? 0.9 : 0.55}
              fontSize="10"
              fontFamily="ui-monospace, monospace"
            >
              {row.label}
            </text>
            <text x="52" y={y + 25} fill="#a3b0a6" fillOpacity="0.6" fontSize="8.5" fontFamily="ui-monospace, monospace">
              {row.detail}
            </text>
            <rect x="404" y={y + 9} width="90" height="14" rx="7" fill="none" stroke="rgba(242,239,230,0.12)" />
            <text
              x="449"
              y={y + 19}
              fill="#7fae92"
              fillOpacity={best ? 0.95 : 0.6}
              fontSize="7.5"
              letterSpacing="0.08em"
              textAnchor="middle"
              fontFamily="ui-monospace, monospace"
            >
              {row.pill}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default RepoPilotVisual;
