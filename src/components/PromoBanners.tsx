import React from 'react';

interface PromoBannersProps {
  onDiscoverFamily: () => void;
  onBusinessInquiry: () => void;
}

export const PromoBanners: React.FC<PromoBannersProps> = ({
  onDiscoverFamily,
  onBusinessInquiry,
}) => {
  return (
    <section className="w-full bg-[#f9f9f9] border-t border-b border-neutral-200 mt-12 py-14 sm:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
          {/* Left Promo: COMFY HOME Family */}
          <div className="flex flex-col justify-between max-w-lg">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-3">
                COMFY HOME Family
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal mb-6">
                Some clubs are for the select few, but COMFY HOME Family is for everyone. Become a Family member and enjoy rewards, discounts, inspirations and a few surprises all year round.
              </p>
            </div>
            <div>
              <button
                onClick={onDiscoverFamily}
                className="bg-black hover:bg-neutral-800 text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-150 transform active:scale-98 shadow-sm cursor-pointer"
              >
                Discover COMFY HOME Family
              </button>
            </div>
          </div>

          {/* Right Promo: COMFY HOME for Business */}
          <div className="flex flex-col justify-between max-w-lg">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight mb-3">
                COMFY HOME for Business
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal mb-6">
                It's our business to help take care of yours. COMFY HOME for Business offers personalised services, from interior planning to product installation, to help you create your dream business space.
              </p>
            </div>
            <div>
              <button
                onClick={onBusinessInquiry}
                className="text-neutral-900 font-bold text-sm underline underline-offset-4 hover:text-[#0058a3] transition-colors cursor-pointer"
              >
                Find out more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
