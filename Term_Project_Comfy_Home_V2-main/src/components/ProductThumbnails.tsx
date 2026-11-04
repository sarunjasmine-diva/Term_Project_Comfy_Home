import React from 'react';

export const SealoBagsArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center p-1 bg-[#f5f5f5] select-none ${className}`}>
      <svg viewBox="0 0 160 140" className="w-full h-full max-h-24 object-contain">
        {/* Left bag: pale green / frosted translucent with leaf pattern */}
        <g transform="translate(10, 10)">
          {/* Frosted bag body */}
          <rect x="0" y="0" width="70" height="95" rx="3" fill="#e8f3ea" stroke="#c2dec7" strokeWidth="1" />
          {/* Top seal zipper */}
          <rect x="0" y="8" width="70" height="5" fill="#a8d5b1" opacity="0.6" />
          <line x1="0" y1="18" x2="70" y2="18" stroke="#a8d5b1" strokeWidth="1" strokeDasharray="3 2" />
          {/* Foliage / leaves pattern */}
          {[12, 26, 40, 54].map((x) => (
            <path
              key={x}
              d={`M ${x} 82 C ${x - 4} 65, ${x - 3} 45, ${x + 4} 35 C ${x + 11} 45, ${x + 12} 65, ${x + 8} 82 Z`}
              fill="#cbe3cf"
              stroke="#a6cfae"
              strokeWidth="0.8"
            />
          ))}
          {/* Subtle text */}
          <text x="35" y="30" textAnchor="middle" fill="#6c9372" fontSize="5" fontWeight="800" letterSpacing="0.5">
            SEALO
          </text>
        </g>

        {/* Right bag: pink patterned bag in front */}
        <g transform="translate(75, 30)">
          <rect x="0" y="0" width="65" height="75" rx="3" fill="#ffe3ec" stroke="#f7b7cb" strokeWidth="1" />
          <rect x="0" y="6" width="65" height="4" fill="#f48fb1" opacity="0.7" />
          <line x1="0" y1="14" x2="65" y2="14" stroke="#f48fb1" strokeWidth="1" strokeDasharray="2 2" />
          {/* Floral / starburst patterns */}
          {[12, 32, 52].map((x) => (
            <g key={x} transform={`translate(${x}, 46)`}>
              <circle cx="0" cy="0" r="5" fill="#f8bbd0" stroke="#f06292" strokeWidth="0.8" />
              <line x1="0" y1="5" x2="0" y2="20" stroke="#f06292" strokeWidth="1" />
              <circle cx="0" cy="0" r="1.5" fill="#ad1457" />
            </g>
          ))}
          <text x="32" y="24" textAnchor="middle" fill="#ad1457" fontSize="5" fontWeight="800" letterSpacing="0.5">
            SEALO
          </text>
        </g>
      </svg>
    </div>
  );
};

export const ArloBookcaseArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center p-1 bg-[#f5f5f5] select-none ${className}`}>
      <svg viewBox="0 0 160 160" className="w-full h-full max-h-24 object-contain">
        <ellipse cx="80" cy="148" rx="28" ry="4" fill="#000" opacity="0.08" />
        {/* Back board */}
        <rect x="56" y="16" width="48" height="130" fill="#fafafa" stroke="#e4e4e7" strokeWidth="1" />
        {/* Left side panel */}
        <rect x="52" y="14" width="5" height="134" fill="#ffffff" stroke="#d4d4d8" strokeWidth="1" />
        {/* Right side panel */}
        <rect x="103" y="14" width="5" height="134" fill="#ffffff" stroke="#d4d4d8" strokeWidth="1" />
        {/* Top & Base plinth */}
        <rect x="52" y="14" width="56" height="4" fill="#ffffff" stroke="#d4d4d8" strokeWidth="0.8" />
        <rect x="52" y="140" width="56" height="8" fill="#ffffff" stroke="#d4d4d8" strokeWidth="0.8" />
        {/* 5 Shelves */}
        {[38, 62, 86, 110, 130].map((y) => (
          <rect key={y} x="57" y={y} width="46" height="4" fill="#ffffff" stroke="#d4d4d8" strokeWidth="0.8" />
        ))}
      </svg>
    </div>
  );
};

export const NovaBedArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center p-1 bg-[#f5f5f5] select-none ${className}`}>
      <svg viewBox="0 0 160 140" className="w-full h-full max-h-24 object-contain">
        <ellipse cx="80" cy="124" rx="46" ry="6" fill="#000" opacity="0.08" />
        {/* Headboard */}
        <rect x="22" y="32" width="10" height="78" rx="2" fill="#ffffff" stroke="#d4d4d8" strokeWidth="1.2" />
        <rect x="24" y="34" width="6" height="74" fill="#fafafa" />
        {/* Footboard post */}
        <rect x="128" y="72" width="8" height="38" rx="1.5" fill="#ffffff" stroke="#d4d4d8" strokeWidth="1.2" />
        {/* Side Rail */}
        <rect x="28" y="86" width="104" height="12" rx="1" fill="#ffffff" stroke="#d4d4d8" strokeWidth="1.2" />
        {/* Mattress */}
        <rect x="30" y="70" width="98" height="18" rx="3" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1" />
        {/* Pillow */}
        <rect x="34" y="64" width="24" height="10" rx="3" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        {/* Bed Legs */}
        <rect x="24" y="106" width="6" height="18" fill="#ffffff" stroke="#d4d4d8" strokeWidth="1" />
        <rect x="129" y="106" width="6" height="18" fill="#ffffff" stroke="#d4d4d8" strokeWidth="1" />
      </svg>
    </div>
  );
};
