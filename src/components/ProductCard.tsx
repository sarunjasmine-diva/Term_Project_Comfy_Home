import React from 'react';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../types';
import { ProductArtwork } from './ProductArtwork';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
  onSelectProduct,
}) => {
  // Format price into dollar integer and decimal cents
  const priceParts = product.price.toFixed(2).split('.');
  const integerPart = priceParts[0];
  const decimalPart = priceParts[1];

  return (
    <div className="group flex flex-col justify-between h-full bg-white relative select-none">
      <div>
        {/* Top Tag/Badge (e.g. TOP SELLER) */}
        <div className="h-6 mb-1">
          {product.badge ? (
            <span className="bg-[#cc0008] text-white text-[10px] sm:text-[11px] font-black px-2 py-0.5 tracking-wider uppercase inline-block">
              {product.badge}
            </span>
          ) : null}
        </div>

        {/* Product Image Area */}
        <div
          onClick={() => onSelectProduct(product)}
          className="relative bg-[#f5f5f5] aspect-square w-full flex items-center justify-center p-3 cursor-pointer overflow-hidden transition-colors hover:bg-[#efefef]"
        >
          <ProductArtwork type={product.imageType} />
        </div>

        {/* Product Details */}
        <div className="pt-3 pb-2 cursor-pointer" onClick={() => onSelectProduct(product)}>
          {/* Title */}
          <h3 className="font-extrabold text-neutral-900 text-sm tracking-tight uppercase hover:underline">
            {product.name}
          </h3>

          {/* Subtitle / Category */}
          <p className="text-xs text-neutral-600 mt-0.5 line-clamp-1">{product.type}</p>

          {/* Price Block */}
          <div className="mt-2.5 flex items-baseline flex-wrap gap-1">
            {product.highlightPrice ? (
              <div className="bg-[#ffe000] px-1.5 py-0.5 inline-flex items-baseline rounded-[2px]">
                <span className="text-neutral-900 font-extrabold text-sm sm:text-base mr-1">$</span>
                <span className="text-neutral-900 font-extrabold text-lg sm:text-xl leading-none">
                  {integerPart}
                </span>
                <span className="text-neutral-900 font-extrabold text-xs sm:text-sm leading-none">
                  .{decimalPart}
                </span>
                {product.pricePerUnitText && (
                  <span className="text-neutral-900 font-medium text-xs ml-1">
                    {product.pricePerUnitText}
                  </span>
                )}
              </div>
            ) : (
              <div className="inline-flex items-baseline">
                <span className="text-neutral-900 font-extrabold text-sm sm:text-base mr-1">$</span>
                <span className="text-neutral-900 font-extrabold text-lg sm:text-xl leading-none">
                  {integerPart}
                </span>
                <span className="text-neutral-900 font-extrabold text-xs sm:text-sm leading-none">
                  .{decimalPart}
                </span>
                {product.pricePerUnitText && (
                  <span className="text-neutral-600 font-normal text-xs ml-1">
                    {product.pricePerUnitText}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Unit Price & Minimum order quantity */}
          <div className="text-[11px] text-neutral-500 mt-1 min-h-[30px] leading-tight">
            {product.unitPriceText && <div>{product.unitPriceText}</div>}
            {product.minOrderQuantity && (
              <div>Minimum order quantity: {product.minOrderQuantity}</div>
            )}
            {product.id === 'bolmen' && !product.unitPriceText && <div>More options</div>}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-1 text-xs text-neutral-700">
            <div className="flex text-neutral-900">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? 'fill-neutral-900 text-neutral-900'
                      : i < product.rating
                      ? 'fill-neutral-900 text-neutral-900 opacity-70'
                      : 'text-neutral-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-neutral-500 text-[11px]">({product.reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Action Buttons: Cart and Wishlist */}
      <div className="flex items-center gap-2 pt-2 pb-1">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          title="Add to cart"
          className="bg-[#0058a3] hover:bg-[#004785] text-white p-2.5 rounded-full transition-transform active:scale-95 shadow-sm cursor-pointer focus:outline-none"
        >
          <ShoppingCart className="w-4 h-4" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className="p-2.5 rounded-full hover:bg-neutral-100 transition-colors text-neutral-600 hover:text-neutral-900 cursor-pointer focus:outline-none"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isWishlisted ? 'fill-[#cc0008] text-[#cc0008]' : 'text-neutral-700'
            }`}
          />
        </button>
      </div>
    </div>
  );
};
