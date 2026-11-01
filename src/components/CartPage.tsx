import React, { useState } from 'react';
import { BookcaseArtwork } from './BookcaseArtwork';
import { Trash2, ChevronDown } from 'lucide-react';

interface CartPageProps {
  onCheckOut: () => void;
}

export const CartPage: React.FC<CartPageProps> = ({ onCheckOut }) => {
  const [quantity, setQuantity] = useState(1);
  const [itemRemoved, setItemRemoved] = useState(false);

  const itemPrice = 59.00;
  const deliveryBasePrice = 10.00;
  const productsTotal = itemPrice * quantity;
  const subtotal = productsTotal + deliveryBasePrice;

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans flex flex-col">
      {/* Clean Minimalist Header (Fictional Brand COMFY HOME) */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Fictional COMFY HOME Logo */}
            <div className="bg-[#0058a3] px-3.5 py-1.5 rounded-full flex items-center justify-center">
              <span className="text-[#ffd800] font-black text-lg tracking-tight uppercase leading-none">
                COMFY HOME
              </span>
            </div>
          </div>
          <div className="text-xs text-neutral-500 font-medium">
            SG | English
          </div>
        </div>
      </header>

      {/* Main Cart Content */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mb-8">
          Shopping cart
        </h1>

        {itemRemoved ? (
          <div className="border border-neutral-200 rounded-xl p-8 text-center max-w-lg mx-auto my-12">
            <p className="text-base font-bold text-neutral-800 mb-2">Your shopping cart is empty</p>
            <p className="text-xs text-neutral-500 mb-4">You removed the item from your cart.</p>
            <button
              onClick={() => {
                setItemRemoved(false);
                setQuantity(1);
              }}
              className="text-xs font-bold text-[#0058a3] hover:underline"
            >
              Restore ARLO bookcase to cart
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-8">
              <div className="border-b border-neutral-200 pb-8">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
                  {/* Product Artwork & Info */}
                  <div className="flex items-start gap-4 sm:gap-6 flex-1">
                    <div className="w-24 sm:w-28 h-24 sm:h-28 bg-[#f5f5f5] flex items-center justify-center p-2 flex-shrink-0 rounded-xs">
                      <BookcaseArtwork className="max-h-24" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h2 className="text-base sm:text-lg font-bold text-neutral-900 uppercase tracking-tight">
                        ARLO
                      </h2>
                      <p className="text-xs text-neutral-600 mt-0.5">
                        Bookcase, white, 80x28x202 cm
                      </p>

                      <div className="text-sm font-extrabold text-neutral-900 mt-2">
                        ${itemPrice.toFixed(2)}
                      </div>

                      {/* Quantity & Delete Controls */}
                      <div className="flex items-center gap-4 mt-4">
                        <div className="relative inline-block">
                          <select
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            aria-label="Quantity"
                            className="appearance-none bg-white border border-neutral-300 hover:border-neutral-800 text-xs font-bold text-neutral-900 py-1.5 pl-3 pr-8 rounded-full cursor-pointer focus:outline-none"
                          >
                            {[1, 2, 3, 4, 5].map((n) => (
                              <option key={n} value={n}>
                                {n}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="w-3.5 h-3.5 text-neutral-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>

                        <button
                          onClick={() => setItemRemoved(true)}
                          className="p-1.5 text-neutral-500 hover:text-neutral-900 transition-colors"
                          title="Remove item"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Line Total */}
                  <div className="text-right sm:self-start">
                    <span className="text-base font-extrabold text-neutral-900">
                      ${productsTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-4">
              <div className="bg-[#f5f5f5] rounded-none sm:rounded-xl p-6">
                <h2 className="text-lg font-extrabold text-neutral-900 tracking-tight mb-6">
                  Order summary
                </h2>

                <div className="space-y-4 text-xs sm:text-sm text-neutral-700 pb-6 border-b border-neutral-300">
                  {/* Products price */}
                  <div className="flex justify-between items-center">
                    <span>Products</span>
                    <span className="font-semibold text-neutral-900">
                      ${productsTotal.toFixed(2)}
                    </span>
                  </div>

                  {/* Delivery price line */}
                  <div className="flex justify-between items-center">
                    <span>Delivery price: From $10</span>
                    <span className="font-semibold text-neutral-900">
                      ${deliveryBasePrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Subtotal line */}
                <div className="py-6 border-b border-neutral-300 flex justify-between items-baseline">
                  <span className="text-sm sm:text-base font-bold text-neutral-900">
                    Subtotal (excl. assembly fees)
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-neutral-900">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                {/* Check Out Button */}
                <div className="pt-6">
                  <button
                    onClick={onCheckOut}
                    className="w-full bg-[#0058a3] hover:bg-[#004785] text-white font-bold text-sm py-3.5 px-6 rounded-full transition-all duration-150 transform active:scale-98 shadow-sm cursor-pointer text-center"
                  >
                    Check out
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Simple footer */}
      <footer className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">
        <p>© COMFY HOME Singapore</p>
      </footer>
    </div>
  );
};
