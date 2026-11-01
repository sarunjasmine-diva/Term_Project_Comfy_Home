import React from 'react';
import { X, Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Product } from '../types';
import { ProductArtwork } from './ProductArtwork';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs animate-in fade-in">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-neutral-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-[#cc0008] fill-[#cc0008]" />
              <h2 className="text-lg font-extrabold text-neutral-900 tracking-tight">
                Saved Items ({wishlistProducts.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List or Empty State */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="text-center py-16 text-neutral-500">
                <Heart className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
                <p className="font-bold text-neutral-800 text-sm mb-1">Your wishlist is empty</p>
                <p className="text-xs">Click the heart icon on any product to save it for later.</p>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between gap-3 p-3 rounded-xl border border-neutral-200 hover:shadow-xs transition-shadow"
                >
                  <div className="w-16 h-16 bg-[#f5f5f5] rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                    <ProductArtwork type={product.imageType} className="max-h-12" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-neutral-900 text-xs uppercase truncate">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-neutral-500 truncate mb-1">{product.type}</p>
                    <div className="text-xs font-extrabold text-neutral-900">
                      ${product.price.toFixed(2)}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      onClick={() => onAddToCart(product)}
                      className="p-2 bg-[#0058a3] hover:bg-[#004785] text-white rounded-full transition-transform active:scale-95"
                      title="Add to cart"
                    >
                      <ShoppingCart className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onRemoveFromWishlist(product.id)}
                      className="p-2 text-neutral-400 hover:text-red-600 rounded-full transition-colors"
                      title="Remove from wishlist"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlistProducts.length > 0 && (
            <div className="p-4 border-t border-neutral-200">
              <button
                onClick={() => {
                  wishlistProducts.forEach((p) => onAddToCart(p));
                }}
                className="w-full bg-[#0058a3] hover:bg-[#004785] text-white font-bold text-xs py-3 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add all items to cart</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
