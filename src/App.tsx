import React, { useState, useEffect } from 'react';
import { Product, CartItem, StoreLocation, CookiePreferences } from './types';
import { FEATURED_PRODUCTS, STORE_LOCATIONS } from './data/products';
import { Header } from './components/Header';
import { EmptyCartHero } from './components/EmptyCartHero';
import { ProductCarousel } from './components/ProductCarousel';
import { PromoBanners } from './components/PromoBanners';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { FeedbackWidget } from './components/FeedbackWidget';
import { CartView } from './components/CartView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { StoreSelectorModal } from './components/StoreSelectorModal';
import { LoginModal } from './components/LoginModal';
import { CookieSettingsModal } from './components/CookieSettingsModal';
import { TrackDeliveryModal } from './components/TrackDeliveryModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { MegaMenu } from './components/MegaMenu';
import { Check, ShoppingBag, ArrowRight } from 'lucide-react';

export default function App() {
  // Navigation and Views
  const [currentView, setCurrentView] = useState<'home' | 'cart'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNavTab, setActiveNavTab] = useState<string | null>(null);

  // Cart State (starts empty as in screenshot, or loads from localStorage if present)
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('comfy_home_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist State
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('comfy_home_wishlist');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Store Selection (default to Alexandra)
  const [selectedStore, setSelectedStore] = useState<StoreLocation | null>(STORE_LOCATIONS[0]);

  // Modals & Drawers
  // Note: Cookie banner starts OPEN (true) so the user immediately sees the exact screen from the screenshot!
  const [isCookieBannerOpen, setIsCookieBannerOpen] = useState(true);
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isStoreSelectorOpen, setIsStoreSelectorOpen] = useState(false);
  const [isTrackDeliveryOpen, setIsTrackDeliveryOpen] = useState(false);
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // User Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('comfy_home_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Persist wishlist
  useEffect(() => {
    try {
      localStorage.setItem('comfy_home_wishlist', JSON.stringify(Array.from(wishlistIds)));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  // Cart actions
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${quantity}x ${product.name} to cart`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart');
  };

  const handleClearCart = () => {
    setCart([]);
    showToast('Cart emptied');
  };

  // Wishlist toggle
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
        showToast(`Removed ${product.name} from saved items`);
      } else {
        next.add(product.id);
        showToast(`Saved ${product.name} to wishlist`);
      }
      return next;
    });
  };

  // Cookie actions
  const handleAcceptAllCookies = () => {
    setIsCookieBannerOpen(false);
    showToast('All cookies accepted');
  };

  const handleOnlyNecessaryCookies = () => {
    setIsCookieBannerOpen(false);
    showToast('Strictly necessary cookies applied');
  };

  const handleSaveCookiePreferences = (prefs: CookiePreferences) => {
    setIsCookieBannerOpen(false);
    showToast('Cookie preferences updated');
  };

  // Products filtered by search query
  const filteredProducts = searchQuery.trim()
    ? FEATURED_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : FEATURED_PRODUCTS;

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const wishlistProducts = FEATURED_PRODUCTS.filter((p) => wishlistIds.has(p.id));

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans flex flex-col selection:bg-[#ffe000] selection:text-black relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-neutral-900 text-white text-xs font-semibold px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-4">
          <Check className="w-4 h-4 text-green-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Screen Mode Quick Switcher Bar (Discreet sticky floating pill) */}
      <div className="bg-neutral-900 text-white text-[11px] py-1.5 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#ffd800]">COMFY HOME SG</span>
          <span className="text-neutral-400 hidden sm:inline">• Recreating the exact IKEA Singapore style shopping experience</span>
        </div>
        <div className="flex items-center gap-2">
          {currentView === 'cart' ? (
            <button
              onClick={() => setCurrentView('home')}
              className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white px-3 py-0.5 rounded-full text-[11px] font-medium transition-colors cursor-pointer"
            >
              ← Back to Screenshot Screen (Empty Cart)
            </button>
          ) : (
            <button
              onClick={() => setCurrentView('cart')}
              className="bg-[#0058a3] hover:bg-[#004785] text-white px-3 py-0.5 rounded-full text-[11px] font-bold transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <ShoppingBag className="w-3 h-3" />
              <span>View Cart Screen ({totalCartCount})</span>
            </button>
          )}

          {!isCookieBannerOpen && (
            <button
              onClick={() => setIsCookieBannerOpen(true)}
              className="text-neutral-400 hover:text-white underline text-[10px] ml-2"
            >
              Show Cookie Banner
            </button>
          )}
        </div>
      </div>

      {/* Header */}
      <Header
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.size}
        onOpenCart={() => setCurrentView(currentView === 'cart' ? 'home' : 'cart')}
        onOpenWishlist={() => setIsWishlistDrawerOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenStoreSelector={() => setIsStoreSelectorOpen(true)}
        onOpenTrackDelivery={() => setIsTrackDeliveryOpen(true)}
        selectedStore={selectedStore}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeNavTab={activeNavTab}
        setActiveNavTab={setActiveNavTab}
        onNavigateHome={() => {
          setCurrentView('home');
          setSearchQuery('');
          setActiveNavTab(null);
        }}
      />

      {/* Mega Menu Dropdown */}
      <MegaMenu
        activeTab={activeNavTab}
        onClose={() => setActiveNavTab(null)}
        onSelectCategory={(category) => {
          setSearchQuery(category);
          setActiveNavTab(null);
          setCurrentView('home');
          showToast(`Filtered by ${category}`);
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'cart' && cart.length > 0 ? (
          <CartView
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveFromCart}
            onClearCart={handleClearCart}
            onContinueShopping={() => setCurrentView('home')}
            onCheckout={() => {
              showToast('Thank you! Redirecting to secure checkout...');
              setTimeout(() => {
                setCart([]);
                setCurrentView('home');
                showToast('Order SG-9921 placed successfully! Check your email.');
              }, 1800);
            }}
          />
        ) : (
          /* Exact Screen from the attached image */
          <>
            {/* Search active indicator */}
            {searchQuery && (
              <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pt-6">
                <div className="bg-neutral-100 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs text-neutral-800">
                  <span>
                    Showing results for <strong className="font-bold">"{searchQuery}"</strong> ({filteredProducts.length} items)
                  </span>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-[#0058a3] font-bold hover:underline"
                  >
                    Clear search
                  </button>
                </div>
              </div>
            )}

            {/* Empty Cart Hero (The exact top half of the screenshot) */}
            <EmptyCartHero
              onLoginClick={() => setIsLoginOpen(true)}
              onDiscoverClick={() => {
                const el = document.getElementById('featured-carousel');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />

            {/* Product Carousel (The exact bottom carousel of the screenshot) */}
            <div id="featured-carousel">
              <ProductCarousel
                products={filteredProducts}
                onAddToCart={handleAddToCart}
                onToggleWishlist={handleToggleWishlist}
                wishlistIds={wishlistIds}
                onSelectProduct={(p) => setSelectedProduct(p)}
              />
            </div>

            {/* Promo Banners: COMFY HOME Family & Business (Exact matches from screenshot) */}
            <PromoBanners
              onDiscoverFamily={() => setIsLoginOpen(true)}
              onBusinessInquiry={() => {
                showToast('Connecting with COMFY HOME for Business team...');
                setIsLoginOpen(true);
              }}
            />
          </>
        )}
      </main>

      {/* Floating Yellow Smiley Feedback Button (Exact match from screenshot) */}
      <FeedbackWidget
        isOpen={isFeedbackOpen}
        onOpen={() => setIsFeedbackOpen(true)}
        onClose={() => setIsFeedbackOpen(false)}
      />

      {/* Floating Cookie Banner (Exact match from screenshot, bottom-left) */}
      <CookieBanner
        isOpen={isCookieBannerOpen}
        onAcceptAll={handleAcceptAllCookies}
        onOnlyNecessary={handleOnlyNecessaryCookies}
        onOpenSettings={() => setIsCookieSettingsOpen(true)}
        onPolicyClick={() => setIsCookieSettingsOpen(true)}
      />

      {/* Footer (Exact 4 columns, social icons, and copyright from screenshot) */}
      <Footer
        onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
        onOpenLanguageModal={() => showToast('Language: English (Singapore)')}
        onOpenFeedback={() => setIsFeedbackOpen(true)}
        onSelectCategory={(cat) => {
          setSearchQuery(cat);
          showToast(`Browsing ${cat}`);
        }}
      />

      {/* Modal Dialogs */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedProduct ? wishlistIds.has(selectedProduct.id) : false}
      />

      <StoreSelectorModal
        isOpen={isStoreSelectorOpen}
        onClose={() => setIsStoreSelectorOpen(false)}
        selectedStore={selectedStore}
        onSelectStore={(store) => {
          setSelectedStore(store);
          showToast(`Store set to ${store.name}`);
        }}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={(name) => {
          setIsLoggedIn(true);
          setUserName(name);
          showToast(`Welcome to COMFY HOME Family, ${name}!`);
        }}
        isLoggedIn={isLoggedIn}
        userName={userName}
        onLogout={() => {
          setIsLoggedIn(false);
          setUserName('');
          showToast('Signed out successfully');
        }}
      />

      <CookieSettingsModal
        isOpen={isCookieSettingsOpen}
        onClose={() => setIsCookieSettingsOpen(false)}
        onSavePreferences={handleSaveCookiePreferences}
      />

      <TrackDeliveryModal
        isOpen={isTrackDeliveryOpen}
        onClose={() => setIsTrackDeliveryOpen(false)}
      />

      <WishlistDrawer
        isOpen={isWishlistDrawerOpen}
        onClose={() => setIsWishlistDrawerOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={(id) => {
          setWishlistIds((prev) => {
            const next = new Set(prev);
            next.delete(id);
            return next;
          });
        }}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
