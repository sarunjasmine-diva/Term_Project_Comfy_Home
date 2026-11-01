import React, { useState } from 'react';
import { BookcaseArtwork } from './BookcaseArtwork';
import {
  Globe,
  Store,
  Search,
  User,
  Truck,
  Heart,
  ShoppingBag,
  Trash2,
  X,
  CreditCard,
} from 'lucide-react';

interface CartPageProps {
  onCheckOut: () => void;
}

export const CartPage: React.FC<CartPageProps> = ({ onCheckOut }) => {
  const [quantity, setQuantity] = useState(1);
  const [itemRemoved, setItemRemoved] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const itemPrice = 59.00;
  const productsTotal = itemPrice * quantity;

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans flex flex-col relative">
      {/* 1. Black Top Strip */}
      <div className="bg-[#111111] text-white text-xs py-2 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Left: SG | English */}
          <div className="flex items-center gap-1.5 font-medium cursor-pointer hover:text-neutral-300">
            <Globe className="w-3.5 h-3.5" />
            <span>SG | English</span>
          </div>

          {/* Centre: 365 days to change your mind */}
          <div className="hidden md:flex items-center gap-1.5 font-medium">
            {/* Heart outline icon */}
            <svg
              className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span>365 days to change your mind</span>
          </div>

          {/* Right: Select store */}
          <div className="flex items-center gap-1.5 font-medium cursor-pointer hover:text-neutral-300">
            <Store className="w-3.5 h-3.5" />
            <span>Select store</span>
          </div>
        </div>
      </div>

      {/* 2. Full-width Blue Banner */}
      {isBannerVisible && (
        <div className="bg-[#0058a3] text-white text-xs sm:text-sm py-2.5 px-4 sm:px-8 flex items-center justify-between transition-all">
          <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between">
            <span className="font-medium">
              We're redesigning Comfy Club & want to know what matters most to you!
            </span>
            <button
              onClick={() => setIsBannerVisible(false)}
              className="p-1 text-white hover:text-neutral-200 cursor-pointer ml-4"
              aria-label="Close banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 3. White Header Row */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 lg:gap-8">
          {/* Logo & Category Menu */}
          <div className="flex items-center gap-6 xl:gap-8 flex-shrink-0">
            {/* Dark grey text on white (NOT yellow on blue) */}
            <div className="cursor-pointer select-none">
              <span className="text-[#111111] font-black text-2xl tracking-tighter uppercase leading-none font-sans">
                COMFY HOME
              </span>
            </div>

            {/* Menu Links */}
            <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-neutral-900">
              {['Products', 'Rooms', 'Offers', 'Ideas & guides', 'Services'].map((item) => (
                <span
                  key={item}
                  className="hover:underline underline-offset-4 cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </nav>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl relative">
            <div className="relative w-full flex items-center">
              <Search className="w-4 h-4 text-neutral-500 absolute left-4 pointer-events-none" />
              <input
                type="text"
                readOnly
                placeholder="What are you looking for?"
                className="w-full bg-[#f5f5f5] text-neutral-900 text-sm rounded-full pl-11 pr-4 py-2.5 outline-none border border-transparent placeholder:text-neutral-500 cursor-default"
              />
            </div>
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0 text-neutral-900">
            {/* Hi! Log in or sign up */}
            <div className="hidden sm:flex items-center gap-2 cursor-pointer hover:underline text-sm font-medium">
              <User className="w-4 h-4" />
              <span>Hi! Log in or sign up</span>
            </div>

            {/* Truck icon */}
            <div className="p-1 cursor-pointer">
              <Truck className="w-5 h-5 text-neutral-800" />
            </div>

            {/* Heart icon */}
            <div className="p-1 cursor-pointer">
              <Heart className="w-5 h-5 text-neutral-800" />
            </div>

            {/* Cart icon with badge "1" */}
            <div className="p-1 relative cursor-pointer">
              <ShoppingBag className="w-5 h-5 text-neutral-800" />
              <span className="absolute -top-1 -right-1 bg-[#0058a3] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                1
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 4. Main Cart Area */}
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-8 py-8 sm:py-10">
        {/* Title: Your cart */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-2">
          Your cart
        </h1>

        {/* Subtitle: 1 item in total */}
        <p className="text-xs text-neutral-600 mb-3">1 item in total</p>

        {/* Thin divider */}
        <hr className="border-neutral-200 mb-8" />

        {itemRemoved ? (
          <div className="border border-neutral-200 rounded-xl p-8 text-center max-w-lg mx-auto my-12">
            <p className="text-base font-bold text-neutral-800 mb-2">Your cart is empty</p>
            <p className="text-xs text-neutral-500 mb-4">You removed the item from your cart.</p>
            <button
              onClick={() => {
                setItemRemoved(false);
                setQuantity(1);
              }}
              className="text-xs font-bold text-[#0058a3] hover:underline cursor-pointer"
            >
              Restore ARLO bookcase to cart
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Left Column: Cart Item */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="flex items-start justify-between gap-4 pb-8">
                {/* Bookcase Artwork Thumbnail & Details */}
                <div className="flex items-start gap-4 sm:gap-6 flex-1">
                  <div className="w-24 sm:w-28 h-24 sm:h-28 bg-[#f5f5f5] flex items-center justify-center p-2 flex-shrink-0">
                    <BookcaseArtwork className="max-h-24" />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Title */}
                    <h2 className="text-sm sm:text-base font-bold text-neutral-900 uppercase tracking-tight">
                      ARLO
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Bookcase, white, 80x28x202 cm
                    </p>

                    {/* Grey article-number chip */}
                    <div className="my-2">
                      <span className="bg-[#f0f0f0] text-neutral-900 text-[11px] font-bold px-2 py-0.5 inline-block rounded-[2px] tracking-wider">
                        302.118.47
                      </span>
                    </div>

                    {/* Pill stepper: "–  1  +" and bin icon */}
                    <div className="flex items-center gap-3 mt-3">
                      <div className="border border-neutral-300 rounded-full flex items-center px-3 py-1 bg-white select-none">
                        <button
                          onClick={() => {
                            if (quantity > 1) {
                              setQuantity(quantity - 1);
                            } else {
                              setItemRemoved(true);
                            }
                          }}
                          className="text-base font-medium text-neutral-700 hover:text-neutral-950 px-1 cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          –
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-neutral-900">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="text-base font-medium text-neutral-700 hover:text-neutral-950 px-1 cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Bin icon */}
                      <button
                        onClick={() => setItemRemoved(true)}
                        className="p-1.5 text-neutral-700 hover:text-neutral-950 transition-colors cursor-pointer"
                        title="Remove item"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Underlined link: Move to favourites */}
                    <div className="mt-4">
                      <button
                        onClick={() => {}}
                        className="underline text-xs text-neutral-900 hover:text-neutral-600 font-medium cursor-pointer"
                      >
                        Move to favourites
                      </button>
                    </div>
                  </div>
                </div>

                {/* Price on the right only (No duplicate under description) */}
                <div className="text-right sm:self-start">
                  <span className="text-sm font-bold text-neutral-900">
                    ${productsTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary (Plain white, matching screenshot) */}
            <div className="lg:col-span-5 xl:col-span-4 bg-white">
              <h2 className="text-base font-extrabold text-neutral-900 tracking-tight mb-4">
                Order summary
              </h2>

              <div className="space-y-3 text-sm text-neutral-900">
                {/* Products (1) */}
                <div className="flex justify-between items-center">
                  <span>Products ({quantity})</span>
                  <span className="font-bold">${productsTotal.toFixed(2)}</span>
                </div>

                {/* Delivery price on left, From $10 on right */}
                <div className="flex justify-between items-center">
                  <span>Delivery price</span>
                  <span>From $10</span>
                </div>
              </div>

              {/* Thick dark line */}
              <div className="border-t-2 border-neutral-900 my-4"></div>

              {/* Subtotal line with small superscript "$" and ".00" */}
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-base font-bold text-neutral-900">
                  Subtotal (excl. assembly fees)
                </span>
                <div className="text-neutral-900 font-black">
                  <span className="text-sm font-bold align-top leading-none mr-0.5">$</span>
                  <span className="text-3xl font-black tracking-tight leading-none">69</span>
                  <span className="text-sm font-bold align-top leading-none">.00</span>
                </div>
              </div>

              {/* Small text above button */}
              <p className="text-xs text-neutral-600 mb-4 leading-relaxed">
                By clicking "check out", you're agreeing to our{' '}
                <span className="underline cursor-pointer text-neutral-900">
                  Privacy Policy
                </span>
              </p>

              {/* Check out button */}
              <button
                onClick={onCheckOut}
                className="w-full bg-[#0058a3] hover:bg-[#004f80] text-white font-bold text-sm py-3.5 px-6 rounded-full transition-all duration-150 transform active:scale-98 shadow-sm cursor-pointer text-center"
              >
                Check out
              </button>

              {/* Payment Badges Row as small bordered boxes */}
              <div className="flex flex-wrap items-center gap-1.5 mt-5">
                {/* VISA */}
                <div className="border border-neutral-300 rounded px-2 py-1 text-[10px] font-black italic tracking-tighter text-[#1a1f71] bg-white">
                  VISA
                </div>

                {/* Mastercard */}
                <div className="border border-neutral-300 rounded px-2 py-1 flex items-center gap-1 bg-white">
                  <div className="flex -space-x-1.5 items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#eb001b] inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f79e1b] inline-block opacity-90"></span>
                  </div>
                  <span className="text-[10px] font-bold text-neutral-800">Mastercard</span>
                </div>

                {/* AMEX */}
                <div className="border border-neutral-300 rounded px-2 py-1 text-[10px] font-black text-[#006fcf] bg-white">
                  AMEX
                </div>

                {/* eNETS */}
                <div className="border border-neutral-300 rounded px-2 py-1 text-[10px] font-black text-[#e31837] bg-white">
                  eNETS
                </div>

                {/* atome */}
                <div className="border border-neutral-300 rounded px-2 py-1 text-[10px] font-extrabold text-neutral-900 bg-white">
                  atome
                </div>

                {/* Grab */}
                <div className="border border-neutral-300 rounded px-2 py-1 text-[10px] font-black text-[#00b14f] bg-white">
                  Grab
                </div>

                {/* G Pay */}
                <div className="border border-neutral-300 rounded px-2 py-1 text-[10px] font-bold text-neutral-700 bg-white">
                  G Pay
                </div>

                {/* Generic Wallet */}
                <div className="border border-neutral-300 rounded px-2 py-1 text-[10px] text-neutral-700 bg-white flex items-center justify-center">
                  <CreditCard className="w-3 h-3" />
                </div>
              </div>

              {/* Underlined link: 365 days to change your mind */}
              <div className="mt-5 flex items-center gap-2">
                <svg
                  className="w-4 h-4 fill-none stroke-neutral-900 stroke-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <span className="underline font-bold text-xs text-neutral-900 cursor-pointer">
                  365 days to change your mind
                </span>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 5. Fixed Round Yellow Smiley Button at Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 select-none">
        <div
          title="Feedback"
          className="w-12 h-12 bg-[#ffd800] rounded-full shadow-lg flex items-center justify-center cursor-pointer transform hover:scale-105 active:scale-95 transition-transform border border-amber-300/60"
        >
          <svg viewBox="0 0 32 32" className="w-7 h-7">
            {/* Eyes */}
            <circle cx="11" cy="13" r="2" fill="#111111" />
            <circle cx="21" cy="13" r="2" fill="#111111" />
            {/* Smile */}
            <path
              d="M 9 18 C 12 24, 20 24, 23 18"
              fill="none"
              stroke="#111111"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
