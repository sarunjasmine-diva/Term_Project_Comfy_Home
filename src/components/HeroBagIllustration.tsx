import React from 'react';

export const HeroBagIllustration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 460 380"
        className="w-full max-w-[440px] h-auto drop-shadow-xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle ground shadow */}
          <filter id="bagGroundShadow" x="-20%" y="-10%" width="140%" height="150%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="12" />
            <feOffset dx="6" dy="18" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.18" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Woven pattern for blue fabric */}
          <pattern id="wovenTexture" width="6" height="6" patternUnits="userSpaceOnUse">
            <rect width="6" height="6" fill="#0058a3" />
            <path d="M 0 3 L 6 3 M 3 0 L 3 6" stroke="#004785" strokeWidth="0.8" opacity="0.6" />
            <path d="M 0 0 L 6 6" stroke="#006bc5" strokeWidth="0.5" opacity="0.3" />
          </pattern>

          {/* Side fold shading */}
          <linearGradient id="sideShade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#004785" />
            <stop offset="100%" stopColor="#003566" />
          </linearGradient>

          {/* Yellow strap gradient */}
          <linearGradient id="yellowStrap" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffd800" />
            <stop offset="100%" stopColor="#f5b800" />
          </linearGradient>
        </defs>

        {/* Ambient Ground Shadow */}
        <ellipse cx="230" cy="340" rx="160" ry="18" fill="#000000" opacity="0.12" filter="blur(8px)" />
        <ellipse cx="235" cy="342" rx="110" ry="10" fill="#000000" opacity="0.15" filter="blur(4px)" />

        <g filter="url(#bagGroundShadow)">
          {/* Back Straps (peeking through) */}
          <path
            d="M 165 170 C 160 50 185 20 205 20 C 225 20 220 90 220 170"
            fill="none"
            stroke="#d49a00"
            strokeWidth="11"
            strokeLinecap="round"
          />
          <path
            d="M 245 170 C 240 50 265 25 285 25 C 305 25 300 95 300 170"
            fill="none"
            stroke="#d49a00"
            strokeWidth="11"
            strokeLinecap="round"
          />

          {/* Main Bag Body - Trapezoid */}
          {/* Side 3D fold on right */}
          <polygon
            points="340,140 375,148 350,320 320,314"
            fill="url(#sideShade)"
            stroke="#003566"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Front Main Face */}
          <polygon
            points="95,140 340,140 320,314 115,314"
            fill="url(#wovenTexture)"
            stroke="#004785"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* Slight vertical fold creases on front */}
          <line x1="150" y1="140" x2="155" y2="314" stroke="#004b8d" strokeWidth="1.5" opacity="0.45" />
          <line x1="285" y1="140" x2="280" y2="314" stroke="#004b8d" strokeWidth="1.5" opacity="0.45" />
          <line x1="215" y1="140" x2="215" y2="314" stroke="#006bc5" strokeWidth="1" opacity="0.3" />

          {/* Bottom fold line */}
          <line x1="115" y1="314" x2="320" y2="314" stroke="#003b6e" strokeWidth="3" />

          {/* Front Straps (looping high up) */}
          {/* Left Handle Loop */}
          <path
            d="M 162 170 C 152 40 188 10 210 10 C 230 10 228 85 224 170"
            fill="none"
            stroke="url(#yellowStrap)"
            strokeWidth="13"
            strokeLinecap="round"
          />
          {/* Blue inlays on left strap */}
          <path
            d="M 162 165 C 153 43 188 14 210 14 C 229 14 227 85 224 165"
            fill="none"
            stroke="#0058a3"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Right Handle Loop */}
          <path
            d="M 248 170 C 238 45 272 15 294 15 C 314 15 312 90 306 170"
            fill="none"
            stroke="url(#yellowStrap)"
            strokeWidth="13"
            strokeLinecap="round"
          />
          {/* Blue inlays on right strap */}
          <path
            d="M 248 165 C 239 48 272 19 294 19 C 313 19 311 90 306 165"
            fill="none"
            stroke="#0058a3"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Horizontal Top Band (Yellow Webbing with COMFY HOME) */}
          <polygon
            points="90,138 345,138 343,153 92,153"
            fill="#ffd800"
            stroke="#f5b800"
            strokeWidth="1"
          />
          {/* Upper rim edge highlight */}
          <line x1="90" y1="138" x2="345" y2="138" stroke="#ffe766" strokeWidth="1.5" />

          {/* COMFY HOME blue text centered on yellow band */}
          <text
            x="218"
            y="149"
            textAnchor="middle"
            fill="#0058a3"
            fontFamily="'Inter', system-ui, sans-serif"
            fontSize="7.5"
            fontWeight="900"
            letterSpacing="0.8"
          >
            COMFY HOME
          </text>
        </g>
      </svg>
    </div>
  );
};
