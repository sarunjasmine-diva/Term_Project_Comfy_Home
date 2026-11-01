import React, { useState } from 'react';
import { X, Truck, MapPin, Calendar, CheckCircle } from 'lucide-react';

interface TrackDeliveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrackDeliveryModal: React.FC<TrackDeliveryModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [orderId, setOrderId] = useState('SG-449102');
  const [postalCode, setPostalCode] = useState('159965');
  const [trackingResult, setTrackingResult] = useState<boolean>(true);

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

        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0058a3] flex items-center justify-center">
            <Truck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-neutral-900 tracking-tight">
              Track Order & Delivery
            </h2>
            <p className="text-xs text-neutral-500">
              Singapore Home Delivery & Click & Collect Status
            </p>
          </div>
        </div>

        {/* Input fields */}
        <div className="space-y-3 mb-6">
          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Order Number
            </label>
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="e.g. SG-449102"
              className="w-full text-xs border border-neutral-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#0058a3] uppercase font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Postal Code / Phone Number
            </label>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              placeholder="e.g. 159965"
              className="w-full text-xs border border-neutral-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#0058a3]"
            />
          </div>
        </div>

        {/* Status Timeline */}
        {trackingResult && (
          <div className="bg-[#f9f9f9] border border-neutral-200 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between text-xs font-bold text-neutral-900 mb-3 pb-2 border-b border-neutral-200">
              <span>Order #{orderId}</span>
              <span className="text-[#0058a3] bg-blue-50 px-2 py-0.5 rounded-full">Out for Delivery</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-neutral-900">Order Placed & Confirmed</div>
                  <div className="text-[11px] text-neutral-500">COMFY HOME Tampines Central DC</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-neutral-900">Packed & Dispatched</div>
                  <div className="text-[11px] text-neutral-500">Loaded onto Eco-Fleet Van #14</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full bg-[#0058a3] text-white flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5">
                  🚚
                </div>
                <div>
                  <div className="font-semibold text-[#0058a3]">Delivering Today by 6:00 PM</div>
                  <div className="text-[11px] text-neutral-500">Contactless doorstep drop at Singapore {postalCode}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          className="w-full bg-black hover:bg-neutral-800 text-white font-bold text-xs py-2.5 rounded-full transition-colors"
        >
          Close tracking
        </button>
      </div>
    </div>
  );
};
