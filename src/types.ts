export interface Product {
  id: string;
  name: string;
  category: string;
  type: string;
  price: number;
  pricePerUnitText?: string; // e.g. "/10 pieces"
  unitPriceText?: string; // e.g. "Unit price: $0.19/pieces"
  minOrderQuantity?: number;
  highlightPrice?: boolean; // Yellow highlight pill
  badge?: string; // e.g. "TOP SELLER"
  rating: number;
  reviewCount: number;
  imageType: 'spruttig' | 'istad-pink' | 'bolmen' | 'istad-duo' | 'svampig' | 'frakta' | 'lack' | 'fejka' | 'poang' | 'billy';
  description: string;
  dimensions: string;
  material: string;
  inStockStores: {
    alexandra: number;
    tampines: number;
    jurong: number;
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  postalCode: string;
  hours: string;
  restaurantHours: string;
}

export interface CookiePreferences {
  strictlyNecessary: boolean;
  performanceMeasurement: boolean;
  personalisation: boolean;
  advertisingSocial: boolean;
}
