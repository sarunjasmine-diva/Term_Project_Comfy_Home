import React from 'react';

interface ConsentScreenProps {
  onConsent: () => void;
}

export const ConsentScreen: React.FC<ConsentScreenProps> = ({ onConsent }) => {
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-2xl shadow-md max-w-md w-full p-8 border border-neutral-200 text-center">
        <p className="text-sm font-medium text-neutral-800 mb-6">
          Class prototype – no real order, no payment, no personal data
        </p>

        <button
          onClick={onConsent}
          className="w-full bg-[#0058a3] hover:bg-[#004785] text-white font-bold text-sm py-3 px-6 rounded-full transition-all duration-150 transform active:scale-98 shadow-sm cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
