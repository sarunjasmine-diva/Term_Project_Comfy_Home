import React from 'react';

export const BookcaseArtwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center p-2 bg-[#f5f5f5] ${className}`}>
      <svg
        viewBox="0 0 200 240"
        className="w-full h-full max-h-48 object-contain filter drop-shadow-sm select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft Drop Shadow beneath bookcase */}
        <ellipse cx="100" cy="226" rx="48" ry="5" fill="#000000" opacity="0.1" />

        {/* Backing Board of Bookcase */}
        <rect x="58" y="22" width="84" height="200" fill="#f4f4f5" stroke="#e4e4e7" strokeWidth="1" />

        {/* Outer Frame (Left Panel) */}
        <rect x="54" y="20" width="6" height="204" fill="#ffffff" stroke="#d4d4d8" strokeWidth="1" />
        <rect x="55" y="21" width="4" height="202" fill="#fafafa" />

        {/* Outer Frame (Right Panel) */}
        <rect x="140" y="20" width="6" height="204" fill="#ffffff" stroke="#d4d4d8" strokeWidth="1" />
        <rect x="141" y="21" width="4" height="202" fill="#fafafa" />

        {/* Top Header Shelf */}
        <rect x="54" y="20" width="92" height="6" fill="#ffffff" stroke="#d4d4d8" strokeWidth="1" />

        {/* Bottom Base Plinth */}
        <rect x="54" y="214" width="92" height="10" fill="#ffffff" stroke="#d4d4d8" strokeWidth="1" />

        {/* 5 Intermediate Fixed and Adjustable Shelves */}
        {/* Shelf 1 */}
        <rect x="60" y="56" width="80" height="5" fill="#ffffff" stroke="#d4d4d8" strokeWidth="0.8" />
        <rect x="60" y="60" width="80" height="1.5" fill="#e4e4e7" />

        {/* Shelf 2 */}
        <rect x="60" y="92" width="80" height="5" fill="#ffffff" stroke="#d4d4d8" strokeWidth="0.8" />
        <rect x="60" y="96" width="80" height="1.5" fill="#e4e4e7" />

        {/* Shelf 3 (Fixed middle shelf) */}
        <rect x="60" y="128" width="80" height="6" fill="#ffffff" stroke="#d4d4d8" strokeWidth="0.9" />
        <rect x="60" y="133" width="80" height="1.5" fill="#d4d4d8" />

        {/* Shelf 4 */}
        <rect x="60" y="164" width="80" height="5" fill="#ffffff" stroke="#d4d4d8" strokeWidth="0.8" />
        <rect x="60" y="168" width="80" height="1.5" fill="#e4e4e7" />

        {/* Shelf 5 */}
        <rect x="60" y="196" width="80" height="5" fill="#ffffff" stroke="#d4d4d8" strokeWidth="0.8" />
        <rect x="60" y="200" width="80" height="1.5" fill="#e4e4e7" />

        {/* Subtle pin holes for adjustable shelving on inner walls */}
        {[38, 46, 74, 82, 110, 118, 146, 154, 182, 190].map((y) => (
          <React.Fragment key={y}>
            <circle cx="63" cy={y} r="0.8" fill="#a1a1aa" />
            <circle cx="137" cy={y} r="0.8" fill="#a1a1aa" />
          </React.Fragment>
        ))}

        {/* Inner shadow at the top to give realistic depth */}
        <rect x="60" y="26" width="80" height="4" fill="#000000" opacity="0.04" />
      </svg>
    </div>
  );
};
