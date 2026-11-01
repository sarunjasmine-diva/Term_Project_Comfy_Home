import React from 'react';

interface DebriefScreenProps {
  variant?: string;
}

export const DebriefScreen: React.FC<DebriefScreenProps> = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-2xl shadow-md max-w-lg w-full p-8 border border-neutral-200 text-center">
        <h1 className="text-xl font-bold text-neutral-900 mb-3">Study Debrief</h1>
        <p className="text-sm text-neutral-700 leading-relaxed text-left sm:text-center">
          Nothing was ordered or paid. Comfy Home and its products are fictional. In a real order to a 3rd-floor flat with no lift, you would also pay a $20 no-lift charge to the driver and 10% for assembly (which includes anchoring the bookcase) – costs this cart did not show. You saw variant A.
        </p>
      </div>
    </div>
  );
};
