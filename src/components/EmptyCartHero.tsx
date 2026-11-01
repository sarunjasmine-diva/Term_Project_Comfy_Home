import React from 'react';
import { HeroBagIllustration } from './HeroBagIllustration';

interface EmptyCartHeroProps {
  onLoginClick: () => void;
  onDiscoverClick: () => void;
}

export const EmptyCartHero: React.FC<EmptyCartHeroProps> = ({
  onLoginClick,
  onDiscoverClick,
}) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 pt-10 sm:pt-16 pb-12 sm:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Heading and action buttons */}
        <div className="lg:col-span-7 flex flex-col justify-center max-w-xl">
          <h1 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-neutral-900 tracking-tight leading-[1.15] mb-4">
            Your shopping cart is empty
          </h1>
          <p className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed mb-8 max-w-md">
            Log in to see your saved items, or explore our products for new ideas at home.
          </p>

          <div className="flex flex-wrap items-center gap-3.5">
            {/* Log in Button */}
            <button
              onClick={onLoginClick}
              className="bg-black hover:bg-neutral-800 text-white font-bold text-sm px-7 py-3 rounded-full transition-all duration-150 transform active:scale-98 shadow-sm cursor-pointer"
            >
              Log in
            </button>

            {/* Discover new arrivals Button */}
            <button
              onClick={onDiscoverClick}
              className="bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-900 font-bold text-sm px-6 py-3 rounded-full transition-all duration-150 transform active:scale-98 cursor-pointer"
            >
              Discover new arrivals
            </button>
          </div>
        </div>

        {/* Right Column: Hero Bag Illustration */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <HeroBagIllustration className="w-full max-w-[420px]" />
        </div>
      </div>
    </section>
  );
};
