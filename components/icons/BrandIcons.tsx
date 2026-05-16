/* Custom brand-recognisable SVG icons — no external dependency */

export function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        fill="#25D366"
      />
    </svg>
  );
}

export function AIIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Chat bubble body */}
      <path
        d="M20 2H4C2.897 2 2 2.897 2 4v13c0 1.103.897 2 2 2h3v3l4.333-3H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"
        fill="#D4AF37"
        fillOpacity="0.15"
        stroke="#D4AF37"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* "AI" text */}
      <text
        x="12"
        y="13.5"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="800"
        fontFamily="system-ui, sans-serif"
        fill="#F5C542"
        letterSpacing="0.5"
      >
        AI
      </text>
      {/* Spark top-right */}
      <path
        d="M18 3.5l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5z"
        fill="#F5C542"
      />
    </svg>
  );
}

export function ContentIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Camera body */}
      <rect x="2" y="6" width="20" height="14" rx="2.5" fill="#E1306C" fillOpacity="0.15" stroke="#E1306C" strokeWidth="1.5" />
      {/* Lens */}
      <circle cx="12" cy="13" r="3.5" stroke="#E1306C" strokeWidth="1.5" />
      <circle cx="12" cy="13" r="1.2" fill="#E1306C" />
      {/* Flash bump */}
      <path d="M8 6V5a2 2 0 014 0v1" stroke="#E1306C" strokeWidth="1.5" strokeLinecap="round" />
      {/* Sparkle */}
      <path d="M19 4l.4.9.9.4-.9.4-.4.9-.4-.9-.9-.4.9-.4z" fill="#F5C542" />
    </svg>
  );
}

export function WebsiteIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Browser frame */}
      <rect x="2" y="3" width="20" height="17" rx="2.5" fill="#4F8EF7" fillOpacity="0.12" stroke="#4F8EF7" strokeWidth="1.5" />
      {/* Title bar */}
      <path d="M2 7.5h20" stroke="#4F8EF7" strokeWidth="1.2" />
      {/* Dots */}
      <circle cx="5.5" cy="5.2" r="0.9" fill="#4F8EF7" />
      <circle cx="8.2" cy="5.2" r="0.9" fill="#4F8EF7" fillOpacity="0.5" />
      <circle cx="10.9" cy="5.2" r="0.9" fill="#4F8EF7" fillOpacity="0.3" />
      {/* URL bar */}
      <rect x="13" y="4.2" width="6" height="2" rx="1" fill="#4F8EF7" fillOpacity="0.3" />
      {/* Content lines */}
      <rect x="5" y="10.5" width="14" height="1.5" rx="0.75" fill="#4F8EF7" fillOpacity="0.4" />
      <rect x="5" y="13.5" width="10" height="1.5" rx="0.75" fill="#4F8EF7" fillOpacity="0.25" />
      <rect x="5" y="16.5" width="7" height="1.5" rx="0.75" fill="#4F8EF7" fillOpacity="0.15" />
    </svg>
  );
}

export function WorkflowIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Node 1 (top-left) */}
      <rect x="2" y="2" width="7" height="5" rx="1.5" fill="#A78BFA" fillOpacity="0.15" stroke="#A78BFA" strokeWidth="1.4" />
      {/* Node 2 (top-right) */}
      <rect x="15" y="2" width="7" height="5" rx="1.5" fill="#A78BFA" fillOpacity="0.15" stroke="#A78BFA" strokeWidth="1.4" />
      {/* Node 3 (bottom-center) */}
      <rect x="8.5" y="17" width="7" height="5" rx="1.5" fill="#A78BFA" fillOpacity="0.15" stroke="#A78BFA" strokeWidth="1.4" />
      {/* Arrows */}
      <path d="M9 4.5h6" stroke="#A78BFA" strokeWidth="1.4" strokeLinecap="round" markerEnd="url(#arr)" />
      <path d="M5.5 7l6.5 10" stroke="#A78BFA" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M18.5 7l-6.5 10" stroke="#A78BFA" strokeWidth="1.4" strokeLinecap="round" />
      {/* Arrow tips */}
      <path d="M11.5 16.2l.5.8.5-.8" stroke="#A78BFA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloudToolsIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Cloud */}
      <path
        d="M18 10.5a5 5 0 00-9.7-1.6A4 4 0 005 17h13a4 4 0 000-6.5z"
        fill="#22D3EE"
        fillOpacity="0.12"
        stroke="#22D3EE"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Check/tool inside */}
      <path d="M9 13.5l2 2 4-4" stroke="#22D3EE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
