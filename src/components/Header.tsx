import React, { useState } from 'react';
import { Globe, Store, Search, User, Truck, Heart, ShoppingBag, X, ChevronDown } from 'lucide-react';
import { StoreLocation } from '../types';

interface HeaderProps {
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenLogin: () => void;
  onOpenStoreSelector: () => void;
  onOpenTrackDelivery: () => void;
  selectedStore: StoreLocation | null;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeNavTab: string | null;
  setActiveNavTab: (tab: string | null) => void;
  onNavigateHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenLogin,
  onOpenStoreSelector,
  onOpenTrackDelivery,
  selectedStore,
  searchQuery,
  setSearchQuery,
  activeNavTab,
  setActiveNavTab,
  onNavigateHome,
}) => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('SG | English');

  return (
    <header className="w-full bg-white border-b border-neutral-200 sticky top-0 z-40">
      {/* Top Utility Bar */}
      <div className="border-b border-neutral-100 bg-[#fafafa] text-xs text-neutral-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-1.5 flex items-center justify-between">
          {/* Country / Language */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="flex items-center gap-1.5 hover:underline font-medium focus:outline-none"
            >
              <Globe className="w-3.5 h-3.5 text-neutral-700" />
              <span>{selectedLanguage}</span>
            </button>
            {showLanguageDropdown && (
              <div className="absolute top-full left-0 mt-1 w-44 bg-white rounded-lg shadow-lg border border-neutral-200 py-1 z-50">
                {['SG | English', 'SG | 中文', 'MY | English', 'AU | English', 'UK | English'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setShowLanguageDropdown(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs hover:bg-neutral-100 ${
                      selectedLanguage === lang ? 'font-bold text-[#0058a3]' : 'text-neutral-700'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Store Selector */}
          <div>
            <button
              onClick={onOpenStoreSelector}
              className="flex items-center gap-1.5 hover:underline font-medium text-neutral-800"
            >
              <Store className="w-3.5 h-3.5 text-neutral-700" />
              <span>{selectedStore ? selectedStore.name : 'Select store'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 lg:gap-8">
        {/* Brand Logo & Navigation Links */}
        <div className="flex items-center gap-6 xl:gap-8 flex-shrink-0">
          {/* COMFY HOME Oval Blue/Yellow Brand Logo */}
          <button
            onClick={onNavigateHome}
            className="flex items-center focus:outline-none group transform active:scale-95 transition-transform"
            aria-label="COMFY HOME Homepage"
          >
            <div className="bg-[#0058a3] px-4 py-1.5 rounded-full flex items-center justify-center border-2 border-[#0058a3] shadow-sm">
              <span className="text-[#ffd800] font-black text-xl tracking-tight leading-none uppercase font-sans">
                COMFY HOME
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-semibold text-neutral-900">
            {['Products', 'Rooms', 'Offers', 'Ideas & guides', 'Services'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveNavTab(activeNavTab === item ? null : item)}
                className={`py-1 hover:text-[#0058a3] hover:underline underline-offset-4 transition-colors flex items-center gap-1 ${
                  activeNavTab === item ? 'text-[#0058a3] underline' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl relative">
          <div className="relative w-full flex items-center">
            <Search className="w-4 h-4 text-neutral-500 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What are you looking for?"
              className="w-full bg-[#f5f5f5] hover:bg-[#ebebeb] focus:bg-white text-neutral-900 text-sm rounded-full pl-11 pr-10 py-2.5 outline-none border border-transparent focus:border-neutral-400 transition-all placeholder:text-neutral-500 font-normal"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 p-1 text-neutral-400 hover:text-neutral-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 text-neutral-800">
          {/* User profile */}
          <button
            onClick={onOpenLogin}
            title="User Profile / Family Login"
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors focus:outline-none"
          >
            <User className="w-5 h-5 text-neutral-800" />
          </button>

          {/* Delivery tracking */}
          <button
            onClick={onOpenTrackDelivery}
            title="Track Order / Delivery"
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors focus:outline-none hidden sm:block"
          >
            <Truck className="w-5 h-5 text-neutral-800" />
          </button>

          {/* Wishlist */}
          <button
            onClick={onOpenWishlist}
            title="Favorites / Wishlist"
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors relative focus:outline-none"
          >
            <Heart className="w-5 h-5 text-neutral-800" />
            {wishlistCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#0058a3] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            title="Shopping Cart"
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors relative focus:outline-none"
          >
            <ShoppingBag className="w-5 h-5 text-neutral-800" />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[#0058a3] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
