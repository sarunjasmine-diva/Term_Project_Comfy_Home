import React from 'react';
import { ShieldCheck, Info, CheckCircle2 } from 'lucide-react';

interface ConsentScreenProps {
  onConsent: () => void;
  variant: string;
}

export const ConsentScreen: React.FC<ConsentScreenProps> = ({ onConsent, variant }) => {
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center p-4 sm:p-6 font-sans">
      <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full p-6 sm:p-10 border border-neutral-200">
        {/* Academic Header Badge */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="bg-[#0058a3] text-[#ffd800] text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
              COMFY HOME
            </span>
            <span className="text-xs text-neutral-500 font-semibold">Class Prototype</span>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 bg-neutral-100 rounded text-neutral-600">
            Study Variant: {variant}
          </span>
        </div>

        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0058a3] flex items-center justify-center flex-shrink-0 mt-0.5">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
              Participant Information & Consent
            </h1>
            <p className="text-xs text-neutral-500 mt-0.5">
              Singapore Management University (SMU) • Academic Class Project
            </p>
          </div>
        </div>

        <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-4 mb-6 text-xs text-amber-950 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-900 mb-0.5">
              Class prototype – no real order, no payment, no personal data
            </p>
            <p className="text-amber-800 leading-relaxed">
              This simulated shopping environment is created strictly for educational and academic research purposes. No commercial transaction or delivery will take place.
            </p>
          </div>
        </div>

        <div className="space-y-3 text-xs text-neutral-600 leading-relaxed mb-8">
          <p>
            You are invited to take part in a short experiment examining online retail shopping cart experiences.
          </p>
          <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200 space-y-2">
            <div className="flex items-center gap-2 text-neutral-800 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
              <span><strong>Completely Anonymous:</strong> No names, emails, or personal identifiers are collected.</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-800 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
              <span><strong>Zero Financial Risk:</strong> No credit card or real payment information will be requested.</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-800 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
              <span><strong>Voluntary Participation:</strong> You may exit or close the browser tab at any time without penalty.</span>
            </div>
          </div>
          <p>
            By clicking <strong>"Begin Experiment"</strong>, you acknowledge that you are at least 18 years of age and freely consent to participate in this study.
          </p>
        </div>

        <button
          onClick={onConsent}
          className="w-full bg-[#0058a3] hover:bg-[#004785] text-white font-bold text-sm py-3.5 px-6 rounded-full transition-all duration-150 transform active:scale-98 shadow-sm cursor-pointer"
        >
          I Consent & Begin Experiment
        </button>
      </div>
    </div>
  );
};
