import React from 'react';

export const DebriefScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-2xl shadow-md max-w-md w-full p-8 border border-neutral-200 text-center">
        <h1 className="text-xl font-bold text-neutral-900 mb-3">Study Debrief</h1>
        <p className="text-sm text-neutral-700 leading-relaxed">
          Nothing was ordered or paid. Comfy Home is fictional. You saw variant A.
        </p>
      </div>
    </div>
  );
};
