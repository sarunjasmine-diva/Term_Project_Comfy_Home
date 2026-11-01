import React from 'react';
import { X, Store, Check, MapPin, Clock, Utensils } from 'lucide-react';
import { StoreLocation } from '../types';
import { STORE_LOCATIONS } from '../data/products';

interface StoreSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedStore: StoreLocation | null;
  onSelectStore: (store: StoreLocation) => void;
}

export const StoreSelectorModal: React.FC<StoreSelectorModalProps> = ({
  isOpen,
  onClose,
  selectedStore,
  onSelectStore,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative animate-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0058a3] flex items-center justify-center">
            <Store className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-neutral-900 tracking-tight">
              Select your preferred store
            </h2>
            <p className="text-xs text-neutral-500">
              Check in-store product availability and restaurant hours in Singapore
            </p>
          </div>
        </div>

        <div className="space-y-3.5">
          {STORE_LOCATIONS.map((store) => {
            const isCurrent = selectedStore?.id === store.id;
            return (
              <div
                key={store.id}
                onClick={() => {
                  onSelectStore(store);
                  onClose();
                }}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start justify-between ${
                  isCurrent
                    ? 'border-[#0058a3] bg-blue-50/40'
                    : 'border-neutral-200 hover:border-neutral-400 bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-neutral-900 text-sm">{store.name}</h3>
                    {isCurrent && (
                      <span className="bg-[#0058a3] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Selected
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-600 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400 flex-shrink-0" />
                    <span>{store.address}, {store.postalCode}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-neutral-500 mt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-neutral-400" />
                      {store.hours}
                    </span>
                    <span className="flex items-center gap-1">
                      <Utensils className="w-3 h-3 text-neutral-400" />
                      Bistro: {store.restaurantHours}
                    </span>
                  </div>
                </div>

                <div className="ml-3 flex-shrink-0">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                      isCurrent
                        ? 'bg-[#0058a3] border-[#0058a3] text-white'
                        : 'border-neutral-300 text-transparent'
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
