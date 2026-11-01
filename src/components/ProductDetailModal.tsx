import React, { useState } from 'react';
import { X, Star, ShoppingCart, Heart, Store, ShieldCheck, Check } from 'lucide-react';
import { Product } from '../types';
import { ProductArtwork } from './ProductArtwork';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const priceParts = product.price.toFixed(2).split('.');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          {/* Left: Product visual preview */}
          <div className="bg-[#f5f5f5] rounded-xl flex items-center justify-center p-8 aspect-square relative">
            {product.badge && (
              <span className="absolute top-3 left-3 bg-[#cc0008] text-white text-xs font-black px-2 py-0.5 tracking-wider uppercase">
                {product.badge}
              </span>
            )}
            <ProductArtwork type={product.imageType} className="max-h-60" />
          </div>

          {/* Right: Product details and actions */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-black text-neutral-900 uppercase tracking-tight">
                {product.name}
              </h2>
              <p className="text-sm text-neutral-600 mb-3">{product.type}</p>

              {/* Price */}
              <div className="mb-4">
                {product.highlightPrice ? (
                  <div className="bg-[#ffe000] px-2 py-1 inline-flex items-baseline rounded-[2px]">
                    <span className="font-extrabold text-sm mr-1">$</span>
                    <span className="font-extrabold text-2xl leading-none">{priceParts[0]}</span>
                    <span className="font-extrabold text-base leading-none">.{priceParts[1]}</span>
                    {product.pricePerUnitText && (
                      <span className="font-medium text-xs ml-1.5">{product.pricePerUnitText}</span>
                    )}
                  </div>
                ) : (
                  <div className="inline-flex items-baseline">
                    <span className="font-extrabold text-sm mr-1">$</span>
                    <span className="font-extrabold text-2xl leading-none">{priceParts[0]}</span>
                    <span className="font-extrabold text-base leading-none">.{priceParts[1]}</span>
                    {product.pricePerUnitText && (
                      <span className="font-normal text-neutral-600 text-xs ml-1.5">{product.pricePerUnitText}</span>
                    )}
                  </div>
                )}
                {product.unitPriceText && (
                  <p className="text-xs text-neutral-500 mt-1">{product.unitPriceText}</p>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-4 text-xs">
                <div className="flex text-neutral-900">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-neutral-900 text-neutral-900'
                          : 'text-neutral-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold text-neutral-900">{product.rating}</span>
                <span className="text-neutral-500">({product.reviewCount} reviews)</span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Stock in Singapore Stores */}
              <div className="border-t border-b border-neutral-200 py-3 my-4 space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-neutral-900 mb-1">
                  <Store className="w-3.5 h-3.5 text-[#0058a3]" />
                  <span>Check Singapore Store Stock:</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Alexandra</span>
                  <span className="font-semibold text-green-700">{product.inStockStores.alexandra} in stock</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Tampines</span>
                  <span className="font-semibold text-green-700">{product.inStockStores.tampines} in stock</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Jurong (Jem)</span>
                  <span className="font-semibold text-green-700">{product.inStockStores.jurong} in stock</span>
                </div>
              </div>
            </div>

            {/* Stepper + Add to Cart */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center border border-neutral-300 rounded-full px-3 py-1.5">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 hover:text-neutral-900 text-neutral-500"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-neutral-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 hover:text-neutral-900 text-neutral-500"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={handleAdd}
                  className="flex-1 bg-[#0058a3] hover:bg-[#004785] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-full flex items-center justify-center gap-2 transition-transform active:scale-98 shadow-sm cursor-pointer"
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4 text-green-300" />
                      <span>Added to cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to shopping cart</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className="p-2.5 rounded-full border border-neutral-300 hover:bg-neutral-50 transition-colors"
                  title="Wishlist"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isWishlisted ? 'fill-[#cc0008] text-[#cc0008]' : 'text-neutral-700'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                <span>365-day return policy. Keep your receipt or COMFY HOME Family card.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
