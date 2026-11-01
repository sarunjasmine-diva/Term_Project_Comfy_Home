import React from 'react';
import { CheckCircle2, RotateCcw, GraduationCap } from 'lucide-react';
import { QuestionnaireResponses } from '../types';

interface DebriefScreenProps {
  onRestart: () => void;
  variant: string;
  responses: QuestionnaireResponses | null;
}

export const DebriefScreen: React.FC<DebriefScreenProps> = ({ onRestart, variant, responses }) => {
  return (
    <div className="min-h-screen bg-[#f7f7f7] py-12 px-4 sm:px-6 font-sans flex items-center justify-center">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-neutral-200">
        <div className="text-center pb-6 border-b border-neutral-200">
          <div className="w-14 h-14 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black text-neutral-900 tracking-tight">
            Study Complete — Thank You!
          </h1>
          <p className="text-xs text-neutral-500 mt-1">
            Singapore Management University (SMU) Class Experiment
          </p>
        </div>

        {/* Debrief Content */}
        <div className="py-6 space-y-4 text-xs text-neutral-700 leading-relaxed border-b border-neutral-200">
          <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 flex items-start gap-3 text-blue-950">
            <GraduationCap className="w-5 h-5 text-[#0058a3] flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-sm text-[#0058a3] mb-1">Debriefing Information</h2>
              <p className="text-xs text-neutral-700">
                The objective of this academic research is to investigate how consumers perceive online shipping fee disclosures (such as <em>"Delivery price: From $10"</em>) and how different cart pricing structures influence perceived transparency, fairness, and purchase confidence.
              </p>
            </div>
          </div>

          <p>
            This prototype is entirely simulated under the fictional brand <strong>COMFY HOME</strong>.
          </p>

          <ul className="list-disc pl-5 space-y-1 text-neutral-600">
            <li><strong>No order has been placed</strong> and no item will be shipped.</li>
            <li><strong>No payment was charged</strong> or requested.</li>
            <li><strong>No personal data</strong> (such as names, addresses, or phone numbers) was stored.</li>
          </ul>

          {responses && (
            <div className="bg-neutral-50 rounded-xl p-3.5 border border-neutral-200 text-[11px] text-neutral-600">
              <span className="font-bold text-neutral-800">Your submitted ratings: </span>
              Price Clarity: {responses.priceClarity}/7 • Delivery Fairness: {responses.deliveryFairness}/7 • Checkout Ease: {responses.checkoutEase}/7 • Purchase Intention: {responses.purchaseIntention}/7
            </div>
          )}
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-neutral-500 font-mono">
            Condition: Variant {variant}
          </span>
          <button
            onClick={onRestart}
            className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs py-2.5 px-5 rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restart Experiment</span>
          </button>
        </div>
      </div>
    </div>
  );
};
