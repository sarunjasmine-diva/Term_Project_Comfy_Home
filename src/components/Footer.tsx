import React from 'react';
import { Globe, Settings } from 'lucide-react';

interface FooterProps {
  onOpenCookieSettings: () => void;
  onOpenLanguageModal: () => void;
  onOpenFeedback: () => void;
  onSelectCategory: (name: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenCookieSettings,
  onOpenLanguageModal,
  onOpenFeedback,
  onSelectCategory,
}) => {
  return (
    <footer className="w-full bg-[#f9f9f9] text-neutral-800 text-xs sm:text-sm pt-12 pb-16 border-t border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* 4-column Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Shop at COMFY HOME */}
          <div>
            <h3 className="font-bold text-neutral-900 text-sm mb-4">Shop at COMFY HOME</h3>
            <ul className="space-y-2.5 text-neutral-600 text-xs sm:text-sm">
              <li><button onClick={() => onSelectCategory('Offers')} className="hover:underline hover:text-neutral-900 text-left">Offers & promotions</button></li>
              <li><button onClick={() => onSelectCategory('New products')} className="hover:underline hover:text-neutral-900 text-left">New products</button></li>
              <li><button onClick={() => onSelectCategory('Planning tools')} className="hover:underline hover:text-neutral-900 text-left">Planning tools</button></li>
              <li><button onClick={() => onSelectCategory('Stores information')} className="hover:underline hover:text-neutral-900 text-left">Stores information</button></li>
              <li><button onClick={() => onSelectCategory('Restaurant menu')} className="hover:underline hover:text-neutral-900 text-left">Restaurant menu</button></li>
              <li><button onClick={() => onSelectCategory('Shopping app')} className="hover:underline hover:text-neutral-900 text-left">COMFY HOME Shopping app</button></li>
            </ul>
          </div>

          {/* Col 2: Customer Service */}
          <div>
            <h3 className="font-bold text-neutral-900 text-sm mb-4">Customer Service</h3>
            <ul className="space-y-2.5 text-neutral-600 text-xs sm:text-sm">
              <li><button onClick={() => onSelectCategory('FAQ')} className="hover:underline hover:text-neutral-900 text-left">FAQ</button></li>
              <li><button onClick={() => onSelectCategory('Delivery')} className="hover:underline hover:text-neutral-900 text-left">Delivery</button></li>
              <li><button onClick={() => onSelectCategory('Return policy')} className="hover:underline hover:text-neutral-900 text-left">Return policy</button></li>
              <li><button onClick={() => onSelectCategory('Track your order')} className="hover:underline hover:text-neutral-900 text-left">Track your order</button></li>
              <li><button onClick={() => onSelectCategory('Product guarantees')} className="hover:underline hover:text-neutral-900 text-left">Product guarantees</button></li>
              <li><button onClick={() => onSelectCategory('Our services')} className="hover:underline hover:text-neutral-900 text-left">Our services</button></li>
              <li><button onClick={onOpenFeedback} className="hover:underline hover:text-neutral-900 text-left font-medium text-[#0058a3]">Share your feedback</button></li>
              <li><button onClick={() => onSelectCategory('Spare parts')} className="hover:underline hover:text-neutral-900 text-left">Spare parts</button></li>
            </ul>
          </div>

          {/* Col 3: This is COMFY HOME */}
          <div>
            <h3 className="font-bold text-neutral-900 text-sm mb-4">This is COMFY HOME</h3>
            <ul className="space-y-2.5 text-neutral-600 text-xs sm:text-sm">
              <li><button onClick={() => onSelectCategory('About us')} className="hover:underline hover:text-neutral-900 text-left">About us</button></li>
              <li><button onClick={() => onSelectCategory('Family')} className="hover:underline hover:text-neutral-900 text-left">COMFY HOME Family</button></li>
              <li><button onClick={() => onSelectCategory('Kids Club')} className="hover:underline hover:text-neutral-900 text-left">COMFY HOME Family Kids' Club</button></li>
              <li><button onClick={() => onSelectCategory('Business')} className="hover:underline hover:text-neutral-900 text-left">COMFY HOME for Business</button></li>
              <li><button onClick={() => onSelectCategory('Sustainability')} className="hover:underline hover:text-neutral-900 text-left">A sustainable everyday</button></li>
              <li><button onClick={() => onSelectCategory('Careers')} className="hover:underline hover:text-neutral-900 text-left">Work with us</button></li>
            </ul>
          </div>

          {/* Col 4: News & media */}
          <div>
            <h3 className="font-bold text-neutral-900 text-sm mb-4">News & media</h3>
            <ul className="space-y-2.5 text-neutral-600 text-xs sm:text-sm">
              <li><button onClick={() => onSelectCategory('Newsroom')} className="hover:underline hover:text-neutral-900 text-left">Newsroom</button></li>
              <li><button onClick={() => onSelectCategory('Recalls')} className="hover:underline hover:text-neutral-900 text-left">Product recalls</button></li>
              <li><button onClick={() => onSelectCategory('Safety')} className="hover:underline hover:text-neutral-900 text-left font-medium">Secure it or Return it!</button></li>
              <li><button onClick={() => onSelectCategory('Media')} className="hover:underline hover:text-neutral-900 text-left">Media resources</button></li>
              <li><button onClick={() => onSelectCategory('Contacts')} className="hover:underline hover:text-neutral-900 text-left">Media contacts</button></li>
              <li><button onClick={() => onSelectCategory('Disclaimer')} className="hover:underline hover:text-neutral-900 text-left">Disclaimer</button></li>
            </ul>
          </div>
        </div>

        {/* Middle Row: Social Icons and Action Pills */}
        <div className="border-t border-neutral-200 pt-8 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="#facebook"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-800 hover:border-neutral-800 hover:bg-neutral-100 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#instagram"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-800 hover:border-neutral-800 hover:bg-neutral-100 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#youtube"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-800 hover:border-neutral-800 hover:bg-neutral-100 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          {/* Right Action Pill Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCookieSettings}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 bg-white hover:border-neutral-600 text-xs font-semibold text-neutral-800 transition-colors"
            >
              <Settings className="w-3.5 h-3.5 text-neutral-600" />
              <span>Cookie settings</span>
            </button>

            <button
              onClick={onOpenLanguageModal}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-300 bg-white hover:border-neutral-600 text-xs font-semibold text-neutral-800 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-neutral-600" />
              <span>SG | English</span>
            </button>
          </div>
        </div>

        {/* Bottom Legal / Copyright Row */}
        <div className="border-t border-neutral-200 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-neutral-500 gap-4">
          <div>
            © Inter COMFY HOME Systems B.V. 1999-2026
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#privacy" className="hover:underline hover:text-neutral-800">Privacy notice</a>
            <a href="#cookies" onClick={(e) => { e.preventDefault(); onOpenCookieSettings(); }} className="hover:underline hover:text-neutral-800">Cookie policy</a>
            <a href="#terms" className="hover:underline hover:text-neutral-800">Terms of use</a>
            <a href="#purchase" className="hover:underline hover:text-neutral-800">Terms of purchase</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
