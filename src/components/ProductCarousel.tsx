import React, { useRef, useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductCarouselProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: Set<string>;
  onSelectProduct: (product: Product) => void;
}

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  onSelectProduct,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll <= 0) {
      setScrollProgress(0);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const progress = (scrollLeft / maxScroll) * 100;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState);
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, [products]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const offset = direction === 'left' ? -320 : 320;
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-8 relative">
      <div className="relative group/carousel">
        {/* Navigation Arrow Right (matching the round black button in screenshot) */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="absolute -right-3 top-1/3 -translate-y-1/2 z-20 w-11 h-11 bg-black hover:bg-neutral-800 text-white rounded-full flex items-center justify-center shadow-md transition-all duration-150 transform active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Navigation Arrow Left (appears when scrolled) */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="absolute -left-3 top-1/3 -translate-y-1/2 z-20 w-11 h-11 bg-black hover:bg-neutral-800 text-white rounded-full flex items-center justify-center shadow-md transition-all duration-150 transform active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Carousel Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-4 pt-2 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[200px] sm:w-[220px] md:w-[230px] flex-shrink-0"
            >
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistIds.has(product.id)}
                onSelectProduct={onSelectProduct}
              />
            </div>
          ))}
        </div>

        {/* Horizontal Progress Bar under cards (matching the black/grey bar from screenshot) */}
        <div className="w-full max-w-sm mx-auto mt-6">
          <div className="w-full bg-neutral-200 h-0.5 rounded-full overflow-hidden relative">
            <div
              className="bg-neutral-900 h-full rounded-full transition-all duration-150"
              style={{
                width: '35%',
                transform: `translateX(${(scrollProgress * 1.85)}%)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
