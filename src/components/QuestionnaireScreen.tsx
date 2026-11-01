import React, { useState } from 'react';
import { QuestionnaireResponses } from '../types';
import { FileQuestion, ArrowRight } from 'lucide-react';

interface QuestionnaireScreenProps {
  onSubmit: (responses: QuestionnaireResponses) => void;
  variant: string;
}

export const QuestionnaireScreen: React.FC<QuestionnaireScreenProps> = ({ onSubmit, variant }) => {
  const [priceClarity, setPriceClarity] = useState<number>(4);
  const [deliveryFairness, setDeliveryFairness] = useState<number>(4);
  const [checkoutEase, setCheckoutEase] = useState<number>(4);
  const [purchaseIntention, setPurchaseIntention] = useState<number>(4);
  const [comments, setComments] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      priceClarity,
      deliveryFairness,
      checkoutEase,
      purchaseIntention,
      comments,
    });
  };

  const renderScale = (
    value: number,
    onChange: (val: number) => void,
    leftLabel = 'Strongly Disagree',
    rightLabel = 'Strongly Agree'
  ) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-1 sm:gap-2">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <button
            type="button"
            key={num}
            onClick={() => onChange(num)}
            className={`w-9 sm:w-11 h-9 sm:h-11 rounded-lg text-xs font-bold border transition-all ${
              value === num
                ? 'bg-[#0058a3] text-white border-[#0058a3] shadow-xs'
                : 'bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50'
            }`}
          >
            {num}
          </button>
        ))}
      </div>
      <div className="flex justify-between text-[11px] text-neutral-500 font-medium px-1">
        <span>{leftLabel}</span>
        <span>Neutral</span>
        <span>{rightLabel}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f7f7f7] py-10 px-4 sm:px-6 font-sans">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-neutral-200">
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="bg-[#0058a3] text-[#ffd800] text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
              COMFY HOME
            </span>
            <span className="text-xs text-neutral-500 font-semibold">Post-Task Questionnaire</span>
          </div>
          <span className="text-xs font-semibold px-2 py-0.5 bg-neutral-100 rounded text-neutral-600">
            Variant: {variant}
          </span>
        </div>

        <div className="flex items-start gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0058a3] flex items-center justify-center flex-shrink-0 mt-0.5">
            <FileQuestion className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
              Post-Task Evaluation
            </h1>
            <p className="text-xs text-neutral-500 mt-0.5">
              Please rate your impressions of the shopping cart page you just reviewed.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-7">
          {/* Question 1 */}
          <div className="bg-neutral-50/70 p-4 rounded-xl border border-neutral-200">
            <label className="block text-xs sm:text-sm font-bold text-neutral-900 mb-3">
              1. The pricing breakdown and final subtotal in the cart were transparent and easy to understand.
            </label>
            {renderScale(priceClarity, setPriceClarity)}
          </div>

          {/* Question 2 */}
          <div className="bg-neutral-50/70 p-4 rounded-xl border border-neutral-200">
            <label className="block text-xs sm:text-sm font-bold text-neutral-900 mb-3">
              2. The delivery fee disclosure ("Delivery price: From $10") felt clear and reasonable.
            </label>
            {renderScale(deliveryFairness, setDeliveryFairness)}
          </div>

          {/* Question 3 */}
          <div className="bg-neutral-50/70 p-4 rounded-xl border border-neutral-200">
            <label className="block text-xs sm:text-sm font-bold text-neutral-900 mb-3">
              3. Navigating to the checkout step was straightforward and effortless.
            </label>
            {renderScale(checkoutEase, setCheckoutEase)}
          </div>

          {/* Question 4 */}
          <div className="bg-neutral-50/70 p-4 rounded-xl border border-neutral-200">
            <label className="block text-xs sm:text-sm font-bold text-neutral-900 mb-3">
              4. If I were shopping for home furniture in real life, I would feel confident completing this purchase.
            </label>
            {renderScale(purchaseIntention, setPurchaseIntention)}
          </div>

          {/* Optional comment */}
          <div>
            <label className="block text-xs sm:text-sm font-bold text-neutral-900 mb-1.5">
              5. (Optional) Any additional thoughts on the cart layout or pricing?
            </label>
            <textarea
              rows={3}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Your comments help our academic research..."
              className="w-full text-xs border border-neutral-300 rounded-lg p-3 focus:outline-none focus:border-[#0058a3] resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0058a3] hover:bg-[#004785] text-white font-bold text-sm py-3.5 px-6 rounded-full transition-all duration-150 transform active:scale-98 shadow-sm cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Submit Responses & View Debrief</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
