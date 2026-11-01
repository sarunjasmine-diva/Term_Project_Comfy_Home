import React, { useState } from 'react';
import { Trash2, Plus, Minus, ArrowLeft, ShieldCheck, Truck, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { ProductArtwork } from './ProductArtwork';

interface CartViewProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onContinueShopping: () => void;
  onCheckout: () => void;
}

export const CartView: React.FC<CartViewProps> = ({
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onContinueShopping,
  onCheckout,
}) => {
  const [postalCode, setPostalCode] = useState('159965');
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [discountError, setDiscountError] = useState('');

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const deliveryFee = subtotal > 100 || subtotal === 0 ? 0 : 15.00;
  const gst = (subtotal - appliedDiscount) * 0.09;
  const total = Math.max(0, subtotal - appliedDiscount + (subtotal > 0 ? deliveryFee : 0) + gst);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'COMFY10' || promoCode.trim().toUpperCase() === 'FAMILY') {
      const disc = subtotal * 0.10;
      setAppliedDiscount(disc);
      setDiscountError('');
    } else {
      setDiscountError('Invalid code. Try "COMFY10" for 10% off.');
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-8 animate-in fade-in">
      {/* Back button & Title Header */}
      <div className="flex flex-wrap items-center justify-between pb-6 border-b border-neutral-200 gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onContinueShopping}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer text-neutral-700"
            title="Continue Shopping"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Shopping Cart ({cart.reduce((sum, i) => sum + i.quantity, 0)} items)
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onClearCart}
            className="text-xs text-neutral-500 hover:text-neutral-900 underline font-medium cursor-pointer"
          >
            Empty cart
          </button>
          <button
            onClick={onContinueShopping}
            className="text-xs font-bold text-neutral-900 border border-neutral-300 hover:border-neutral-900 px-4 py-2 rounded-full transition-colors"
          >
            Continue shopping
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8">
        {/* Left Column: Cart Items List */}
        <div className="lg:col-span-8 space-y-6">
          {cart.map((item) => {
            const itemTotal = item.product.price * item.quantity;
            return (
              <div
                key={item.product.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-neutral-200 bg-white hover:shadow-xs transition-shadow"
              >
                {/* Product image & Info */}
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-[#f5f5f5] rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                    <ProductArtwork type={item.product.imageType} className="max-h-16" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-neutral-900 text-sm uppercase tracking-tight">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mb-1">{item.product.type}</p>
                    <div className="text-xs font-bold text-neutral-900">
                      ${item.product.price.toFixed(2)}{' '}
                      {item.product.pricePerUnitText && (
                        <span className="font-normal text-neutral-500 text-[11px]">
                          {item.product.pricePerUnitText}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Quantity steppers & Remove */}
                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6">
                  {/* Stepper */}
                  <div className="flex items-center border border-neutral-300 rounded-full px-2 py-1">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1 text-neutral-600 hover:text-neutral-900 transition-colors"
                      title="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-xs font-bold text-neutral-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1 text-neutral-600 hover:text-neutral-900 transition-colors"
                      title="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Line Total */}
                  <div className="text-right min-w-[70px]">
                    <div className="text-sm font-extrabold text-neutral-900">
                      ${itemTotal.toFixed(2)}
                    </div>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="p-2 text-neutral-400 hover:text-[#cc0008] transition-colors rounded-full hover:bg-neutral-50"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Delivery & Assurance note */}
          <div className="bg-[#f5f5f5] rounded-xl p-5 flex items-start gap-3.5 text-xs text-neutral-700">
            <Truck className="w-5 h-5 text-[#0058a3] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-neutral-900 mb-1">Delivering to Singapore postal code {postalCode}</p>
              <p>Standard home delivery is free on orders above $100. Contactless doorstep delivery available in all SG districts.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-[#f9f9f9] border border-neutral-200 rounded-2xl p-6 sticky top-24">
            <h2 className="text-lg font-bold text-neutral-900 mb-4 pb-3 border-b border-neutral-200">
              Order summary
            </h2>

            {/* Calculations */}
            <div className="space-y-3 text-sm text-neutral-700 mb-6">
              <div className="flex justify-between">
                <span>Products subtotal</span>
                <span className="font-semibold text-neutral-900">${subtotal.toFixed(2)}</span>
              </div>

              {appliedDiscount > 0 && (
                <div className="flex justify-between text-green-700 font-medium">
                  <span>Discount (10% promo)</span>
                  <span>-${appliedDiscount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Estimated delivery</span>
                <span className="font-semibold text-neutral-900">
                  {deliveryFee === 0 ? <span className="text-green-700 font-bold">FREE</span> : `$${deliveryFee.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Estimated GST (9%)</span>
                <span className="font-semibold text-neutral-900">${gst.toFixed(2)}</span>
              </div>

              <div className="pt-3 border-t border-neutral-200 flex justify-between items-baseline">
                <span className="text-base font-extrabold text-neutral-900">Total</span>
                <span className="text-2xl font-black text-neutral-900">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Promo Code Form */}
            <form onSubmit={handleApplyPromo} className="mb-6">
              <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Have a discount code?</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="e.g. COMFY10"
                  className="flex-1 text-xs border border-neutral-300 rounded-full px-3 py-2 bg-white uppercase tracking-wider focus:outline-none focus:border-neutral-800"
                />
                <button
                  type="submit"
                  className="bg-neutral-800 hover:bg-black text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
                >
                  Apply
                </button>
              </div>
              {discountError && <p className="text-[11px] text-red-600 mt-1">{discountError}</p>}
              {appliedDiscount > 0 && <p className="text-[11px] text-green-600 mt-1">COMFY10 code applied successfully!</p>}
            </form>

            {/* Checkout Action */}
            <button
              onClick={onCheckout}
              className="w-full bg-[#0058a3] hover:bg-[#004785] text-white font-bold text-sm py-3.5 px-6 rounded-full transition-all duration-150 transform active:scale-98 shadow-sm flex items-center justify-center gap-2 cursor-pointer mb-3"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Proceed to checkout</span>
            </button>

            <button
              onClick={onContinueShopping}
              className="w-full bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 font-bold text-xs py-2.5 px-4 rounded-full transition-colors text-center cursor-pointer"
            >
              Continue shopping
            </button>

            {/* Guarantees */}
            <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-center gap-4 text-[11px] text-neutral-500 text-center">
              <span>✓ 365-day return policy</span>
              <span>•</span>
              <span>✓ Secure payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
