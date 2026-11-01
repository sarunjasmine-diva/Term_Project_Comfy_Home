import React from 'react';

interface ProductArtworkProps {
  type: string;
  className?: string;
}

export const ProductArtwork: React.FC<ProductArtworkProps> = ({ type, className = '' }) => {
  switch (type) {
    case 'spruttig':
      // Black clothes hangers
      return (
        <div className={`w-full h-full flex items-center justify-center p-6 ${className}`}>
          <svg viewBox="0 0 200 160" className="w-full h-full max-h-44 object-contain filter drop-shadow-sm">
            <defs>
              <filter id="shadow-spruttig" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000" floodOpacity="0.12" />
              </filter>
            </defs>
            {/* Background 2nd hanger slightly offset for stack effect */}
            <g opacity="0.35" transform="translate(4, -4)">
              <path
                d="M100 20 C92 20 86 26 86 34 C86 42 93 47 100 52 L30 110 C25 114 25 120 30 122 C34 124 166 124 170 122 C175 120 175 114 170 110 L100 52"
                fill="none"
                stroke="#111"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            {/* Front hanger */}
            <g filter="url(#shadow-spruttig)">
              {/* Hook */}
              <path
                d="M100 18 C92 18 84 25 84 34 C84 43 92 48 100 54"
                fill="none"
                stroke="#111"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Triangle body */}
              <polygon
                points="100,54 26,112 174,112"
                fill="none"
                stroke="#111"
                strokeWidth="5.5"
                strokeLinejoin="round"
              />
              {/* Lower trouser bar with slight groove */}
              <line x1="26" y1="112" x2="174" y2="112" stroke="#111" strokeWidth="6" strokeLinecap="round" />
              {/* Inner accessory loops */}
              <path d="M48 94 C48 102 54 102 54 94" fill="none" stroke="#222" strokeWidth="3" />
              <path d="M152 94 C152 102 146 102 146 94" fill="none" stroke="#222" strokeWidth="3" />
              {/* Central reinforcement rib */}
              <circle cx="100" cy="72" r="3" fill="#222" />
            </g>
          </svg>
        </div>
      );

    case 'istad-pink':
      // Pink resealable bag packaging matching screenshot
      return (
        <div className={`w-full h-full flex items-center justify-center p-4 ${className}`}>
          <svg viewBox="0 0 200 180" className="w-full h-full max-h-48 object-contain">
            <defs>
              <linearGradient id="pinkBox" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffb8cf" />
                <stop offset="100%" stopColor="#f79ab8" />
              </linearGradient>
              <linearGradient id="pinkBag" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ffe6ee" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ffd1df" stopOpacity="0.85" />
              </linearGradient>
            </defs>
            {/* Semi-transparent bag sticking out behind */}
            <rect x="55" y="24" width="90" height="95" rx="5" fill="url(#pinkBag)" stroke="#f088a8" strokeWidth="1.5" />
            <line x1="55" y1="36" x2="145" y2="36" stroke="#f088a8" strokeWidth="1.5" strokeDasharray="3 2" />
            <line x1="55" y1="42" x2="145" y2="42" stroke="#f088a8" strokeWidth="1.5" />

            {/* Front Box */}
            <rect x="62" y="58" width="76" height="96" rx="6" fill="url(#pinkBox)" stroke="#e47f9f" strokeWidth="1.5" />
            {/* Box cutout handles/windows */}
            <circle cx="90" cy="132" r="3.5" fill="#ffffff" />
            <circle cx="100" cy="132" r="3.5" fill="#ffffff" />
            <circle cx="110" cy="132" r="3.5" fill="#ffffff" />

            {/* Brand text */}
            <text x="100" y="88" textAnchor="middle" fill="#6d1e38" fontSize="8" fontWeight="800" letterSpacing="0.5">COMFY</text>
            <text x="100" y="98" textAnchor="middle" fill="#6d1e38" fontSize="8" fontWeight="800" letterSpacing="0.5">HOME</text>
            <rect x="80" y="105" width="40" height="1.5" fill="#ffffff" opacity="0.8" />
            <text x="100" y="117" textAnchor="middle" fill="#7d2944" fontSize="7" fontWeight="600">1 L / 0.4 L</text>
          </svg>
        </div>
      );

    case 'bolmen':
      // Toilet brush and holder in black, exact match to screenshot
      return (
        <div className={`w-full h-full flex items-center justify-center p-4 ${className}`}>
          <svg viewBox="0 0 160 220" className="w-full h-full max-h-52 object-contain filter drop-shadow-sm">
            {/* Brush handle */}
            <rect x="75" y="18" width="10" height="85" rx="3" fill="#18181b" />
            {/* Top rounded grip */}
            <path d="M75 22 C75 16 85 16 85 22" fill="#18181b" />
            {/* Shield/disc between handle and bristles */}
            <ellipse cx="80" cy="103" rx="14" ry="4" fill="#27272a" />
            {/* Cylindrical Holder cup */}
            <path
              d="M66 106 L68 180 C68 184 73 186 80 186 C87 186 92 184 92 180 L94 106 Z"
              fill="#18181b"
            />
            {/* Top rim of holder */}
            <ellipse cx="80" cy="106" rx="14" ry="4.5" fill="#27272a" />
            {/* Subtle highlight sheen */}
            <path d="M72 110 L74 178" stroke="#3f3f46" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          </svg>
        </div>
      );

    case 'istad-duo':
      // Resealable bag twin boxes (green on left, cyan on right)
      return (
        <div className={`w-full h-full flex items-center justify-center p-4 ${className}`}>
          <svg viewBox="0 0 220 180" className="w-full h-full max-h-48 object-contain">
            {/* Left box - Light Green */}
            <g transform="translate(18, 25)">
              <rect x="18" y="30" width="78" height="92" rx="6" fill="#cdeeb4" stroke="#a6d884" strokeWidth="1.5" />
              <text x="57" y="58" textAnchor="middle" fill="#2d5e16" fontSize="8" fontWeight="800">COMFY</text>
              <text x="57" y="68" textAnchor="middle" fill="#2d5e16" fontSize="8" fontWeight="800">HOME</text>
              <line x1="38" y1="74" x2="76" y2="74" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="51" cy="94" r="4" fill="#388e3c" />
              <circle cx="63" cy="94" r="4" fill="#388e3c" />
              <text x="57" y="110" textAnchor="middle" fill="#2d5e16" fontSize="7" fontWeight="600">2.5 L</text>
            </g>

            {/* Right box - Light Cyan Blue */}
            <g transform="translate(105, 28)">
              <rect x="14" y="32" width="78" height="92" rx="6" fill="#bfe7f6" stroke="#87cbe5" strokeWidth="1.5" />
              <text x="53" y="60" textAnchor="middle" fill="#10567a" fontSize="8" fontWeight="800">COMFY</text>
              <text x="53" y="70" textAnchor="middle" fill="#10567a" fontSize="8" fontWeight="800">HOME</text>
              <line x1="34" y1="76" x2="72" y2="76" stroke="#ffffff" strokeWidth="1.5" />
              <circle cx="47" cy="96" r="4" fill="#1976d2" />
              <circle cx="59" cy="96" r="4" fill="#1976d2" />
              <text x="53" y="112" textAnchor="middle" fill="#10567a" fontSize="7" fontWeight="600">1.2 L</text>
            </g>
          </svg>
        </div>
      );

    case 'svampig':
      // Sponge pair (light grey/mint and charcoal scouring pad)
      return (
        <div className={`w-full h-full flex items-center justify-center p-4 ${className}`}>
          <svg viewBox="0 0 200 180" className="w-full h-full max-h-48 object-contain">
            <defs>
              <linearGradient id="spongeWhite" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#eef2f5" />
                <stop offset="100%" stopColor="#dce4eb" />
              </linearGradient>
              <linearGradient id="spongeGrey" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#a3a3a3" />
                <stop offset="100%" stopColor="#858585" />
              </linearGradient>
            </defs>
            {/* Sponge 1 */}
            <g transform="translate(42, 38)">
              {/* Soft layer */}
              <rect x="0" y="0" width="46" height="78" rx="4" fill="url(#spongeWhite)" stroke="#cbd5e1" strokeWidth="1" />
              {/* Top/bottom rounded bevel */}
              <line x1="6" y1="12" x2="40" y2="12" stroke="#b0bec5" strokeWidth="0.8" opacity="0.4" />
              {/* Scouring green/blue top layer */}
              <rect x="0" y="0" width="46" height="9" rx="3" fill="#60a5fa" opacity="0.3" />
            </g>

            {/* Sponge 2 */}
            <g transform="translate(104, 44)">
              {/* Charcoal scour layer */}
              <rect x="0" y="0" width="46" height="78" rx="4" fill="url(#spongeGrey)" stroke="#737373" strokeWidth="1" />
              {/* Texture dots */}
              <circle cx="15" cy="24" r="1.5" fill="#525252" />
              <circle cx="32" cy="36" r="1.5" fill="#525252" />
              <circle cx="18" cy="52" r="1.5" fill="#525252" />
              <circle cx="34" cy="62" r="1.5" fill="#525252" />
              <rect x="0" y="0" width="46" height="8" rx="2" fill="#525252" opacity="0.4" />
            </g>
          </svg>
        </div>
      );

    case 'frakta':
      return (
        <div className={`w-full h-full flex items-center justify-center p-4 ${className}`}>
          <svg viewBox="0 0 200 180" className="w-full h-full max-h-48 object-contain">
            {/* Yellow Straps */}
            <path d="M70 65 Q70 20 85 20 Q95 20 95 65" fill="none" stroke="#facc15" strokeWidth="4" />
            <path d="M105 65 Q105 20 115 20 Q125 20 125 65" fill="none" stroke="#facc15" strokeWidth="4" />
            {/* Blue Tote Body */}
            <polygon points="35,65 165,65 152,145 48,145" fill="#0058a3" stroke="#004785" strokeWidth="2" />
            {/* Woven Hatching */}
            <line x1="45" y1="85" x2="155" y2="85" stroke="#006bc5" strokeWidth="1" />
            <line x1="48" y1="105" x2="152" y2="105" stroke="#006bc5" strokeWidth="1" />
            <line x1="50" y1="125" x2="150" y2="125" stroke="#006bc5" strokeWidth="1" />
            {/* Yellow Horizontal Handle band */}
            <rect x="58" y="65" width="84" height="6" fill="#facc15" />
            <text x="100" y="70" textAnchor="middle" fill="#0058a3" fontSize="4.5" fontWeight="900">COMFY HOME</text>
          </svg>
        </div>
      );

    case 'lack':
      return (
        <div className={`w-full h-full flex items-center justify-center p-4 ${className}`}>
          <svg viewBox="0 0 200 180" className="w-full h-full max-h-48 object-contain">
            {/* Table top */}
            <polygon points="30,65 100,45 170,65 100,85" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />
            <polygon points="30,65 100,85 100,95 30,75" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
            <polygon points="100,85 170,65 170,75 100,95" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Front Left Leg */}
            <rect x="40" y="75" width="12" height="60" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="1.2" />
            {/* Front Right Leg */}
            <rect x="148" y="75" width="12" height="60" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.2" />
            {/* Front Center Leg */}
            <rect x="94" y="95" width="12" height="58" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.2" />
          </svg>
        </div>
      );

    case 'fejka':
      return (
        <div className={`w-full h-full flex items-center justify-center p-4 ${className}`}>
          <svg viewBox="0 0 200 180" className="w-full h-full max-h-48 object-contain">
            {/* Leaves */}
            <ellipse cx="80" cy="50" rx="20" ry="35" transform="rotate(-25 80 50)" fill="#15803d" />
            <ellipse cx="120" cy="48" rx="20" ry="35" transform="rotate(25 120 48)" fill="#16a34a" />
            <ellipse cx="100" cy="35" rx="18" ry="32" fill="#22c55e" />
            {/* Leaf ribs */}
            <line x1="80" y1="20" x2="80" y2="75" stroke="#14532d" strokeWidth="1.5" />
            <line x1="120" y1="20" x2="120" y2="75" stroke="#14532d" strokeWidth="1.5" />
            <line x1="100" y1="10" x2="100" y2="70" stroke="#14532d" strokeWidth="1.5" />
            {/* Pot */}
            <polygon points="76,85 124,85 116,145 84,145" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
            <ellipse cx="100" cy="85" rx="24" ry="4" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
          </svg>
        </div>
      );

    default:
      return (
        <div className="w-full h-44 bg-neutral-100 flex items-center justify-center text-neutral-400">
          COMFY HOME
        </div>
      );
  }
};
