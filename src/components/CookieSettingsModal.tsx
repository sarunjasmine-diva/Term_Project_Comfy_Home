import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { CookiePreferences } from '../types';

interface CookieSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSavePreferences: (prefs: CookiePreferences) => void;
}

export const CookieSettingsModal: React.FC<CookieSettingsModalProps> = ({
  isOpen,
  onClose,
  onSavePreferences,
}) => {
  const [measurement, setMeasurement] = useState(true);
  const [personalisation, setPersonalisation] = useState(true);
  const [marketing, setMarketing] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onSavePreferences({
      strictlyNecessary: true,
      performanceMeasurement: measurement,
      personalisation: personalisation,
      advertisingSocial: marketing,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-extrabold text-neutral-900 tracking-tight mb-2">
          Cookie & Privacy Preferences
        </h2>
        <p className="text-xs text-neutral-600 mb-6 leading-relaxed">
          When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. You can choose not to allow some types of cookies.
        </p>

        <div className="space-y-4">
          {/* Strictly Necessary */}
          <div className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-neutral-900">Strictly Necessary Cookies</span>
              <span className="text-[11px] font-bold text-neutral-500 uppercase">Always Active</span>
            </div>
            <p className="text-[11px] text-neutral-500">
              Essential for the site to function properly, including shopping cart storage, security, and session management.
            </p>
          </div>

          {/* Performance & Measurement */}
          <div className="p-3.5 bg-white rounded-xl border border-neutral-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-neutral-900">Measurement & Performance</span>
              <input
                type="checkbox"
                checked={measurement}
                onChange={(e) => setMeasurement(e.target.checked)}
                className="w-4 h-4 accent-[#0058a3] rounded cursor-pointer"
              />
            </div>
            <p className="text-[11px] text-neutral-500">
              Help us measure traffic and see how visitors move around the site to improve navigation and user experience.
            </p>
          </div>

          {/* Personalisation */}
          <div className="p-3.5 bg-white rounded-xl border border-neutral-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-neutral-900">Personalisation Cookies</span>
              <input
                type="checkbox"
                checked={personalisation}
                onChange={(e) => setPersonalisation(e.target.checked)}
                className="w-4 h-4 accent-[#0058a3] rounded cursor-pointer"
              />
            </div>
            <p className="text-[11px] text-neutral-500">
              Enable the website to remember your chosen store, language, and recommended items tailored for you.
            </p>
          </div>

          {/* Advertising & Social Media */}
          <div className="p-3.5 bg-white rounded-xl border border-neutral-200">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-neutral-900">Advertising & Social Media</span>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="w-4 h-4 accent-[#0058a3] rounded cursor-pointer"
              />
            </div>
            <p className="text-[11px] text-neutral-500">
              Used by us and our advertising partners to show you relevant offers on other platforms.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-neutral-200 flex gap-2">
          <button
            onClick={() => {
              setMeasurement(true);
              setPersonalisation(true);
              setMarketing(true);
            }}
            className="flex-1 py-2.5 text-xs font-bold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-full"
          >
            Allow all
          </button>
          <button
            onClick={handleSave}
            className="flex-1 py-2.5 text-xs font-bold text-white bg-black hover:bg-neutral-800 rounded-full"
          >
            Confirm choices
          </button>
        </div>
      </div>
    </div>
  );
};
