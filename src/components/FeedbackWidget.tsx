import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface FeedbackWidgetProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const FeedbackWidget: React.FC<FeedbackWidgetProps> = ({
  isOpen,
  onOpen,
  onClose,
}) => {
  const [rating, setRating] = useState<number | null>(5);
  const [category, setCategory] = useState('Website experience');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setComments('');
      onClose();
    }, 1800);
  };

  return (
    <>
      {/* Floating Yellow Smiley Button (matching screenshot) */}
      <button
        onClick={onOpen}
        aria-label="Feedback"
        title="Give Feedback"
        className="fixed right-6 bottom-24 z-30 w-12 h-12 bg-[#ffe000] hover:bg-[#fad000] rounded-full shadow-lg flex items-center justify-center transform hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border-2 border-white/60"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7">
          {/* Eyes */}
          <circle cx="11" cy="13" r="2" fill="#18181b" />
          <circle cx="21" cy="13" r="2" fill="#18181b" />
          {/* Smile */}
          <path
            d="M 9 18 C 12 24, 20 24, 23 18"
            fill="none"
            stroke="#18181b"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Feedback Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in-95">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">Tack! Thank you for your feedback!</h3>
                <p className="text-sm text-neutral-600">Your opinion helps us make COMFY HOME even better.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#ffe000] rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 32 32" className="w-6 h-6">
                      <circle cx="11" cy="13" r="2" fill="#18181b" />
                      <circle cx="21" cy="13" r="2" fill="#18181b" />
                      <path d="M 9 18 C 12 24, 20 24, 23 18" fill="none" stroke="#18181b" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900">How was your visit today?</h3>
                    <p className="text-xs text-neutral-500">We appreciate your honest feedback</p>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-neutral-700 mb-2">Overall satisfaction</label>
                  <div className="flex justify-between gap-1">
                    {[
                      { val: 1, label: 'Poor', emoji: '😞' },
                      { val: 2, label: 'Fair', emoji: '😐' },
                      { val: 3, label: 'Good', emoji: '🙂' },
                      { val: 4, label: 'Very good', emoji: '😊' },
                      { val: 5, label: 'Excellent', emoji: '😍' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.val}
                        onClick={() => setRating(item.val)}
                        className={`flex-1 py-2 flex flex-col items-center rounded-xl border text-xs transition-colors ${
                          rating === item.val
                            ? 'border-[#0058a3] bg-blue-50/60 font-bold text-[#0058a3]'
                            : 'border-neutral-200 hover:bg-neutral-50 text-neutral-600'
                        }`}
                      >
                        <span className="text-lg mb-0.5">{item.emoji}</span>
                        <span className="text-[10px]">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">What were you doing today?</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full text-xs border border-neutral-300 rounded-lg px-3 py-2 bg-white text-neutral-800 focus:outline-none focus:border-[#0058a3]"
                  >
                    <option value="Website experience">Browsing products and home ideas</option>
                    <option value="Cart & Checkout">Checking cart or checkout</option>
                    <option value="Store inventory">Checking store stock in Singapore</option>
                    <option value="Delivery">Tracking delivery or checking shipping fee</option>
                  </select>
                </div>

                <div className="mb-5">
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Your comments (optional)</label>
                  <textarea
                    rows={3}
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Tell us what you liked or how we can improve..."
                    className="w-full text-xs border border-neutral-300 rounded-lg p-2.5 focus:outline-none focus:border-[#0058a3] resize-none"
                  />
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 py-2.5 text-xs font-bold text-neutral-700 rounded-full border border-neutral-300 hover:bg-neutral-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 text-xs font-bold text-white bg-black hover:bg-neutral-800 rounded-full transition-colors"
                  >
                    Send feedback
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
