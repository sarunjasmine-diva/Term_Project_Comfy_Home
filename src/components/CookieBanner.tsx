import React from 'react';

interface CookieBannerProps {
  isOpen: boolean;
  onAcceptAll: () => void;
  onOnlyNecessary: () => void;
  onOpenSettings: () => void;
  onPolicyClick: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  isOpen,
  onAcceptAll,
  onOnlyNecessary,
  onOpenSettings,
  onPolicyClick,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      className="fixed bottom-6 left-6 z-50 w-[92vw] max-w-[360px] bg-white rounded-2xl shadow-2xl border border-neutral-200/80 p-6 text-neutral-800 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
    >
      <h3 id="cookie-banner-title" className="text-sm font-bold text-neutral-900 mb-2.5">
        You are in control of your own cookies
      </h3>

      <p className="text-xs text-neutral-600 leading-relaxed mb-3">
        COMFY HOME Pte Ltd and our digital partners use cookies on this site. Some are strictly necessary, but below are optional ones:
      </p>

      <ul className="text-xs text-neutral-600 space-y-1.5 mb-3.5 list-disc pl-4">
        <li>Used for measuring how the site is used</li>
        <li>Enabling personalisation of the site</li>
        <li>For advertising and social media</li>
      </ul>

      <button
        onClick={onPolicyClick}
        className="text-xs text-neutral-900 underline underline-offset-2 hover:text-[#0058a3] block mb-5 font-medium"
      >
        Click here for our cookie policy.
      </button>

      <div className="flex flex-col gap-2">
        <button
          onClick={onAcceptAll}
          className="w-full bg-black hover:bg-neutral-800 text-white font-bold text-xs py-2.5 px-4 rounded-full transition-all duration-150 transform active:scale-98 cursor-pointer"
        >
          Accept all cookies
        </button>

        <button
          onClick={onOnlyNecessary}
          className="w-full bg-black hover:bg-neutral-800 text-white font-bold text-xs py-2.5 px-4 rounded-full transition-all duration-150 transform active:scale-98 cursor-pointer"
        >
          Only necessary cookies
        </button>

        <button
          onClick={onOpenSettings}
          className="w-full bg-black hover:bg-neutral-800 text-white font-bold text-xs py-2.5 px-4 rounded-full transition-all duration-150 transform active:scale-98 cursor-pointer"
        >
          Cookies settings
        </button>
      </div>
    </div>
  );
};
