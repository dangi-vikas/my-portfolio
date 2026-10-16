import React from "react";

/**
 * High-level illustration of the NexGen pharmacy platform:
 * React client → Spring Boot services on Kubernetes → data and events.
 * Deliberately conceptual — it is not a screenshot of a real product UI.
 */
const NexGenVisual = () => (
  <svg
    viewBox="0 0 520 320"
    role="img"
    aria-label="Conceptual diagram of the NexGen pharmacy platform: a React client calls Spring Boot microservices running on Kubernetes, which read and write SQL Server, Redis and Kafka."
    className="h-auto w-full"
  >
    <defs>
      <linearGradient id="nx-services" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#c9a86a" stopOpacity="0.10" />
        <stop offset="100%" stopColor="#7fae92" stopOpacity="0.03" />
      </linearGradient>
      <radialGradient id="nx-data" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#7fae92" stopOpacity="0.16" />
        <stop offset="100%" stopColor="#7fae92" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* step 1 — client */}
    <g>
      <text x="16" y="20" fill="#8c9a90" fontSize="9" letterSpacing="0.16em" fontFamily="ui-monospace, monospace">
        01 · CLIENT
      </text>
      <rect x="14" y="32" width="132" height="104" rx="12" fill="#0a1210" stroke="rgba(242,239,230,0.12)" />
      <rect x="26" y="44" width="108" height="70" rx="8" fill="none" stroke="rgba(242,239,230,0.10)" />
      <circle cx="34.5" cy="52.5" r="1.8" fill="#8c9a90" opacity="0.6" />
      <circle cx="40.5" cy="52.5" r="1.8" fill="#8c9a90" opacity="0.6" />
      <circle cx="46.5" cy="52.5" r="1.8" fill="#c9a86a" opacity="0.85" />
      <rect x="34" y="62" width="92" height="6" rx="3" fill="#f2efe6" opacity="0.28" />
      <rect x="34" y="74" width="64" height="5" rx="2.5" fill="#f2efe6" opacity="0.16" />
      <rect x="34" y="90" width="46" height="14" rx="7" fill="#c9a86a" opacity="0.32" />
      <text x="26" y="130" fill="#a3b0a6" fontSize="9" fontFamily="ui-monospace, monospace">
        React SPA
      </text>
    </g>

    {/* connector 1 */}
    <g stroke="#c9a86a" strokeOpacity="0.6" strokeWidth="1.4" fill="none">
      <path d="M146 84 H176" className="flow-line" />
    </g>
    <path d="M172 79 l6 5 -6 5" fill="none" stroke="#c9a86a" strokeOpacity="0.8" strokeWidth="1.4" />

    {/* step 2 — services on Kubernetes */}
    <g>
      <text x="182" y="20" fill="#8c9a90" fontSize="9" letterSpacing="0.16em" fontFamily="ui-monospace, monospace">
        02 · SERVICES
      </text>
      <rect x="180" y="32" width="150" height="104" rx="12" fill="#0a1210" stroke="rgba(242,239,230,0.12)" />
      <rect
        x="190"
        y="42"
        width="130"
        height="74"
        rx="10"
        fill="url(#nx-services)"
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
          <circle cx={s.x + 6} cy={s.y + 6} r="2" fill="#c9a86a" opacity={s.o} />
        </g>
      ))}
      <text x="196" y="130" fill="#a3b0a6" fontSize="9" fontFamily="ui-monospace, monospace">
        Spring Boot · Kubernetes
      </text>
    </g>

    {/* connector 2 */}
    <g stroke="#7fae92" strokeOpacity="0.6" strokeWidth="1.4" fill="none">
      <path d="M330 84 H360" className="flow-line" style={{ animationDelay: "0.6s" }} />
    </g>
    <path d="M356 79 l6 5 -6 5" fill="none" stroke="#7fae92" strokeOpacity="0.8" strokeWidth="1.4" />

    {/* step 3 — data & events */}
    <g>
      <text x="366" y="20" fill="#8c9a90" fontSize="9" letterSpacing="0.16em" fontFamily="ui-monospace, monospace">
        03 · DATA · EVENTS
      </text>
      <rect x="364" y="32" width="142" height="104" rx="12" fill="#0a1210" stroke="rgba(242,239,230,0.12)" />
      <rect x="364" y="32" width="142" height="104" rx="12" fill="url(#nx-data)" />

      {/* SQL Server — cylinder */}
      <ellipse cx="382" cy="55" rx="9" ry="3.4" fill="none" stroke="#f2efe6" strokeOpacity="0.45" />
      <path d="M373 55v10c0 1.9 4 3.4 9 3.4s9-1.5 9-3.4V55" fill="none" stroke="#f2efe6" strokeOpacity="0.45" />
      <rect x="400" y="56" width="66" height="6" rx="3" fill="#f2efe6" opacity="0.3" />

      {/* Redis — stacked layers */}
      <path d="M373 82 l9-4 9 4-9 4z" fill="none" stroke="#c9a86a" strokeOpacity="0.7" />
      <path d="M373 88 l9-4 9 4-9 4z" fill="none" stroke="#c9a86a" strokeOpacity="0.45" />
      <rect x="400" y="84" width="52" height="6" rx="3" fill="#f2efe6" opacity="0.24" />

      {/* Kafka — event stream */}
      <path
        d="M373 110 q4.5-7 9 0 t9 0 t9 0"
        fill="none"
        stroke="#7fae92"
        strokeOpacity="0.85"
        strokeWidth="1.4"
      />
      <rect x="400" y="107" width="74" height="6" rx="3" fill="#f2efe6" opacity="0.18" />

      <text x="374" y="130" fill="#a3b0a6" fontSize="9" fontFamily="ui-monospace, monospace">
        SQL Server · Redis · Kafka
      </text>
    </g>

    {/* capabilities */}
    <text x="16" y="176" fill="#8c9a90" fontSize="9" letterSpacing="0.16em" fontFamily="ui-monospace, monospace">
      PLATFORM CAPABILITIES
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

export default NexGenVisual;
