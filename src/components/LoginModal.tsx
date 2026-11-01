import React, { useState } from 'react';
import { X, Coffee, Tag, Shield, Gift, ArrowRight } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (name: string) => void;
  isLoggedIn: boolean;
  userName?: string;
  onLogout: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  isLoggedIn,
  userName,
  onLogout,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'login' | 'register'>('login');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = email.split('@')[0] || 'Friend';
    onLoginSuccess(name.charAt(0).toUpperCase() + name.slice(1));
    onClose();
  };

  const handleDemoLogin = () => {
    onLoginSuccess('Alex Lim');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative animate-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100"
        >
          <X className="w-5 h-5" />
        </button>

        {isLoggedIn ? (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-[#0058a3] text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-3">
              {userName?.charAt(0) || 'U'}
            </div>
            <h2 className="text-xl font-extrabold text-neutral-900 mb-1">
              Welcome back, {userName}!
            </h2>
            <p className="text-xs text-neutral-500 mb-6">
              COMFY HOME Family Member • Card #SG-8849-2026
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-left text-xs space-y-2 mb-6">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <Coffee className="w-4 h-4 text-amber-700" />
                <span>Complimentary hot coffee available at Swedish Bistro today</span>
              </div>
              <p className="text-amber-800 text-[11px]">
                Show your digital card at the cashier in Alexandra, Tampines, or Jurong Jem.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={onLogout}
                className="flex-1 py-2.5 text-xs font-bold text-red-600 rounded-full border border-red-200 hover:bg-red-50"
              >
                Sign out
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 text-xs font-bold text-white bg-black hover:bg-neutral-800 rounded-full"
              >
                Continue shopping
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Logo and Tag */}
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#0058a3] px-2.5 py-0.5 rounded-full">
                <span className="text-[#ffd800] font-black text-xs uppercase">COMFY HOME</span>
              </div>
              <span className="text-xs font-bold text-neutral-700">Family</span>
            </div>

            <h2 className="text-2xl font-extrabold text-neutral-900 tracking-tight mb-2">
              {mode === 'login' ? 'Log in to your account' : 'Join COMFY HOME Family for free'}
            </h2>
            <p className="text-xs text-neutral-600 mb-6 leading-relaxed">
              Log in to see your saved carts, track deliveries, and enjoy exclusive member perks.
            </p>

            {/* Member Perks Strip */}
            <div className="grid grid-cols-2 gap-2 bg-[#f9f9f9] rounded-xl p-3 mb-6 text-[11px] text-neutral-700">
              <div className="flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-[#0058a3]" />
                <span>Free hot coffee in store</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#0058a3]" />
                <span>Member exclusive prices</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#0058a3]" />
                <span>14-day price protection</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Gift className="w-3.5 h-3.5 text-[#0058a3]" />
                <span>Birthday surprise coupon</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Email or Singapore Mobile Number
                </label>
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. name@example.sg or +65 9123 4567"
                  className="w-full text-xs border border-neutral-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#0058a3]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full text-xs border border-neutral-300 rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#0058a3]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-neutral-800 text-white font-bold text-xs py-3 px-4 rounded-full transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{mode === 'login' ? 'Log in' : 'Create free account'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Demo Login */}
            <div className="mt-4 pt-4 border-t border-neutral-200">
              <button
                type="button"
                onClick={handleDemoLogin}
                className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-xs py-2 rounded-full transition-colors cursor-pointer"
              >
                ⚡ Quick Demo Member Login (1-click)
              </button>

              <div className="text-center mt-3 text-xs text-neutral-500">
                {mode === 'login' ? (
                  <span>
                    Don't have a membership?{' '}
                    <button
                      onClick={() => setMode('register')}
                      className="text-[#0058a3] font-bold hover:underline"
                    >
                      Join now
                    </button>
                  </span>
                ) : (
                  <span>
                    Already a member?{' '}
                    <button
                      onClick={() => setMode('login')}
                      className="text-[#0058a3] font-bold hover:underline"
                    >
                      Log in
                    </button>
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
