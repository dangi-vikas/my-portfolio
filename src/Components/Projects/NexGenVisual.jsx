import React from "react";

/**
 * Functional walkthrough of the NexGen pharmacy e-commerce platform:
 * browse the catalogue → cart and checkout → a tracked order.
 *
 * Deliberately functional rather than architectural: the rows at the bottom say
 * what the platform does for a customer, in plain language. The engineering
 * detail (event-driven checkout, saga compensation, outbox) is written up in the
 * project card and repository docs, not here.
 */
const NexGenVisual = () => {
  const capabilities = [
    {
      label: "Product catalogue",
      detail: "browse and search, with live stock levels",
      pill: "LIVE",
    },
    {
      label: "Cart & checkout",
      detail: "price and stock checked before payment",
      pill: "VALIDATED",
    },
    {
      label: "Order updates",
      detail: "order confirmed, cart cleared, customer notified",
      pill: "AUTOMATIC",
    },
  ];

  const orderSteps = ["stock reserved", "payment approved", "customer notified"];

  return (
    <svg
      viewBox="0 0 520 320"
      role="img"
      aria-label="Conceptual diagram of the NexGen pharmacy e-commerce journey: a customer browses the product catalogue with live stock, checks out with a cart whose price and stock are validated before payment, and then follows a confirmed order from stock reserved to payment approved to customer notified."
      className="h-auto w-full"
    >
      <defs>
        <linearGradient id="nx-prod" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7fae92" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#c9a86a" stopOpacity="0.14" />
        </linearGradient>
        <radialGradient id="nx-order" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#7fae92" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#7fae92" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* step 1 — browse */}
      <g>
        <text x="16" y="20" fill="#8c9a90" fontSize="9" letterSpacing="0.16em" fontFamily="ui-monospace, monospace">
          01 · BROWSE
        </text>
        <rect x="14" y="32" width="132" height="104" rx="12" fill="#0a1210" stroke="rgba(242,239,230,0.12)" />

        {/* search field */}
        <rect x="26" y="44" width="108" height="15" rx="7.5" fill="#0a1210" stroke="rgba(242,239,230,0.14)" />
        <circle cx="35" cy="51.5" r="3" fill="none" stroke="#8c9a90" strokeWidth="1.1" />
        <path d="M37.3 53.8 l2.4 2.4" stroke="#8c9a90" strokeWidth="1.1" />
        <rect x="45" y="49.5" width="54" height="4" rx="2" fill="#f2efe6" opacity="0.22" />

        {/* product tiles */}
        <rect x="26" y="68" width="48" height="42" rx="7" fill="#0a1210" stroke="rgba(242,239,230,0.10)" />
        <rect x="31" y="73" width="38" height="20" rx="4" fill="url(#nx-prod)" />
        <rect x="31" y="97" width="28" height="3.5" rx="1.75" fill="#f2efe6" opacity="0.32" />
        <rect x="31" y="103" width="16" height="3.5" rx="1.75" fill="#c9a86a" opacity="0.75" />

        <rect x="82" y="68" width="52" height="42" rx="7" fill="#0a1210" stroke="rgba(242,239,230,0.10)" />
        <rect x="87" y="73" width="42" height="20" rx="4" fill="url(#nx-prod)" opacity="0.65" />
        <rect x="87" y="97" width="30" height="3.5" rx="1.75" fill="#f2efe6" opacity="0.32" />
        <rect x="87" y="103" width="14" height="3.5" rx="1.75" fill="#c9a86a" opacity="0.6" />

        <text x="26" y="130" fill="#a3b0a6" fontSize="9" fontFamily="ui-monospace, monospace">
          product catalogue
        </text>
      </g>

      {/* connector 1 */}
      <g stroke="#c9a86a" strokeOpacity="0.6" strokeWidth="1.4" fill="none">
        <path d="M146 84 H176" className="flow-line" />
      </g>
      <path d="M172 79 l6 5 -6 5" fill="none" stroke="#c9a86a" strokeOpacity="0.8" strokeWidth="1.4" />

      {/* step 2 — cart & checkout */}
      <g>
        <text x="182" y="20" fill="#8c9a90" fontSize="9" letterSpacing="0.16em" fontFamily="ui-monospace, monospace">
          02 · CHECKOUT
        </text>
        <rect x="180" y="32" width="150" height="104" rx="12" fill="#0a1210" stroke="rgba(242,239,230,0.12)" />

        {/* two cart lines */}
        <rect x="192" y="45" width="14" height="14" rx="3" fill="#7fae92" opacity="0.22" />
        <rect x="211" y="47" width="56" height="4" rx="2" fill="#f2efe6" opacity="0.35" />
        <text x="318" y="53" fill="#a3b0a6" fillOpacity="0.7" fontSize="7.5" textAnchor="end" fontFamily="ui-monospace, monospace">
          ×2
        </text>

        <rect x="192" y="65" width="14" height="14" rx="3" fill="#c9a86a" opacity="0.22" />
        <rect x="211" y="67" width="70" height="4" rx="2" fill="#f2efe6" opacity="0.35" />
        <text x="318" y="73" fill="#a3b0a6" fillOpacity="0.7" fontSize="7.5" textAnchor="end" fontFamily="ui-monospace, monospace">
          ×1
        </text>

        <line x1="192" y1="86" x2="318" y2="86" stroke="rgba(242,239,230,0.10)" />
        <text x="192" y="98" fill="#a3b0a6" fillOpacity="0.75" fontSize="7.5" fontFamily="ui-monospace, monospace">
          total
        </text>
        <text x="318" y="98" fill="#c9a86a" fontSize="8" textAnchor="end" fontFamily="ui-monospace, monospace">
          3 items
        </text>

        <rect
          x="192"
          y="104"
          width="126"
          height="16"
          rx="8"
          fill="rgba(201,168,106,0.26)"
          stroke="rgba(201,168,106,0.50)"
        />
        <text
          x="255"
          y="115"
          fill="#f2efe6"
          fillOpacity="0.9"
          fontSize="7.5"
          textAnchor="middle"
          fontFamily="ui-monospace, monospace"
        >
          Pay &amp; place order
        </text>

        <text x="192" y="130" fill="#a3b0a6" fontSize="9" fontFamily="ui-monospace, monospace">
          cart &amp; checkout
        </text>
      </g>

      {/* connector 2 */}
      <g stroke="#c9a86a" strokeOpacity="0.6" strokeWidth="1.4" fill="none">
        <path d="M330 84 H360" className="flow-line" style={{ animationDelay: "0.6s" }} />
      </g>
      <path d="M356 79 l6 5 -6 5" fill="none" stroke="#c9a86a" strokeOpacity="0.8" strokeWidth="1.4" />

      {/* step 3 — order */}
      <g>
        <text x="366" y="20" fill="#8c9a90" fontSize="9" letterSpacing="0.16em" fontFamily="ui-monospace, monospace">
          03 · ORDER
        </text>
        <rect x="364" y="32" width="142" height="104" rx="12" fill="#0a1210" stroke="rgba(242,239,230,0.12)" />
        <rect x="364" y="32" width="142" height="104" rx="12" fill="url(#nx-order)" />

        {/* confirmation */}
        <circle cx="380" cy="49" r="6.5" fill="none" stroke="#7fae92" strokeOpacity="0.85" strokeWidth="1.3" />
        <path d="M377 49 l2.2 2.2 4-4.4" fill="none" stroke="#7fae92" strokeWidth="1.3" strokeLinecap="round" />
        <text x="392" y="53" fill="#f2efe6" fillOpacity="0.92" fontSize="9.5" fontFamily="Inter, system-ui, sans-serif">
          Order placed
        </text>

        {/* status timeline */}
        <line x1="378" y1="70" x2="378" y2="104" stroke="rgba(242,239,230,0.14)" strokeWidth="1.2" />
        {orderSteps.map((step, i) => {
          const y = 70 + i * 17;
          const first = i === 0;
          return (
            <g key={step}>
              <circle
                cx="378"
                cy={y}
                r="2.6"
                fill={first ? "#c9a86a" : "#0a1210"}
                stroke={first ? "#c9a86a" : "rgba(242,239,230,0.30)"}
                strokeWidth="1.1"
              />
              <text
                x="388"
                y={y + 3}
                fill="#f2efe6"
                fillOpacity={first ? 0.85 : 0.5}
                fontSize="7.5"
                fontFamily="ui-monospace, monospace"
              >
                {step}
              </text>
            </g>
          );
        })}

        <text x="374" y="130" fill="#a3b0a6" fontSize="9" fontFamily="ui-monospace, monospace">
          order tracking
        </text>
      </g>

      {/* what the platform does */}
      <text x="16" y="176" fill="#8c9a90" fontSize="9" letterSpacing="0.16em" fontFamily="ui-monospace, monospace">
        WHAT THE PLATFORM DOES
      </text>
      {capabilities.map((row, i) => {
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
              fillOpacity={best ? 0.9 : 0.6}
              fontSize="10"
              fontFamily="Inter, system-ui, sans-serif"
            >
              {row.label}
            </text>
            <text
              x="52"
              y={y + 25}
              fill="#a3b0a6"
              fillOpacity="0.62"
              fontSize="8"
              fontFamily="ui-monospace, monospace"
            >
              {row.detail}
            </text>
            <rect x="404" y={y + 9} width="90" height="14" rx="7" fill="none" stroke="rgba(242,239,230,0.12)" />
            <text
              x="449"
              y={y + 19}
              fill="#7fae92"
              fillOpacity={best ? 0.95 : 0.6}
              fontSize="7"
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

export default NexGenVisual;
