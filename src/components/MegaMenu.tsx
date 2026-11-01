import React from 'react';
import { X, ArrowRight, Sparkles, Tag, Lightbulb, Wrench, Package } from 'lucide-react';

interface MegaMenuProps {
  activeTab: string | null;
  onClose: () => void;
  onSelectCategory: (category: string) => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({
  activeTab,
  onClose,
  onSelectCategory,
}) => {
  if (!activeTab) return null;

  const renderContent = () => {
    switch (activeTab) {
      case 'Products':
        return (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
            <div>
              <h4 className="font-bold text-neutral-900 mb-2 uppercase tracking-wider text-[11px] text-[#0058a3]">
                Furniture
              </h4>
              <ul className="space-y-1.5 text-neutral-600">
                {['Sofas & armchairs', 'Tables & desks', 'Bookcases & shelving', 'Wardrobes & storage', 'Beds & mattresses'].map((item) => (
                  <li key={item}>
                    <button onClick={() => onSelectCategory(item)} className="hover:underline hover:text-neutral-900">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-neutral-900 mb-2 uppercase tracking-wider text-[11px] text-[#0058a3]">
                Kitchen & Dining
              </h4>
              <ul className="space-y-1.5 text-neutral-600">
                {['Food storage & resealable bags', 'Cookware & tableware', 'Kitchen organizers', 'Dinnerware & cutlery'].map((item) => (
                  <li key={item}>
                    <button onClick={() => onSelectCategory(item)} className="hover:underline hover:text-neutral-900">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-neutral-900 mb-2 uppercase tracking-wider text-[11px] text-[#0058a3]">
                Home Organization
              </h4>
              <ul className="space-y-1.5 text-neutral-600">
                {['Clothes hangers & racks', 'Storage boxes & baskets', 'Waste sorting & bins', 'Hooks & wall organizers'].map((item) => (
                  <li key={item}>
                    <button onClick={() => onSelectCategory(item)} className="hover:underline hover:text-neutral-900">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-neutral-900 mb-2 uppercase tracking-wider text-[11px] text-[#0058a3]">
                Bathroom & Cleaning
              </h4>
              <ul className="space-y-1.5 text-neutral-600">
                {['Toilet accessories & holders', 'Dish sponges & cloths', 'Towels & bath mats', 'Shower curtains'].map((item) => (
                  <li key={item}>
                    <button onClick={() => onSelectCategory(item)} className="hover:underline hover:text-neutral-900">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'Rooms':
        return (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
            {['Living Room', 'Bedroom', 'Kitchen', 'Home Office', 'Dining Room', 'Bathroom', 'Outdoor & Balcony', "Children's Room"].map((room) => (
              <button
                key={room}
                onClick={() => onSelectCategory(room)}
                className="p-3.5 bg-neutral-50 hover:bg-neutral-100 rounded-xl text-left border border-neutral-200 transition-colors group"
              >
                <div className="font-bold text-neutral-900 text-sm group-hover:text-[#0058a3] mb-1">
                  {room}
                </div>
                <div className="text-[11px] text-neutral-500">Explore setups & furniture</div>
              </button>
            ))}
          </div>
        );

      case 'Offers':
        return (
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl">
            <div className="flex items-center gap-2 mb-2 text-amber-900 font-bold text-sm">
              <Tag className="w-4 h-4 text-amber-700" />
              <span>Current Singapore Member Deals</span>
            </div>
            <p className="text-xs text-neutral-700 mb-4">
              Get up to 30% off selected storage boxes, hangers, and kitchen organizers with your COMFY HOME Family membership.
            </p>
            <div className="flex flex-wrap gap-2">
              <button onClick={() => onSelectCategory('Under $2')} className="px-3 py-1.5 bg-white border border-neutral-300 rounded-full text-xs font-semibold hover:border-neutral-900">
                Under $2 Everyday Essentials
              </button>
              <button onClick={() => onSelectCategory('Top Sellers')} className="px-3 py-1.5 bg-white border border-neutral-300 rounded-full text-xs font-semibold hover:border-neutral-900">
                Top Sellers This Week
              </button>
            </div>
          </div>
        );

      case 'Ideas & guides':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
              <Lightbulb className="w-5 h-5 text-amber-500 mb-2" />
              <h5 className="font-bold text-neutral-900 text-sm mb-1">Small space living in HDB flats</h5>
              <p className="text-neutral-600 text-[11px]">Clever multi-functional storage hacks for Singapore apartments.</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
              <Sparkles className="w-5 h-5 text-blue-500 mb-2" />
              <h5 className="font-bold text-neutral-900 text-sm mb-1">Pantry organization 101</h5>
              <p className="text-neutral-600 text-[11px]">Keep fresh food dry and tidy using reusable silicone and ISTAD bags.</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200">
              <Package className="w-5 h-5 text-green-500 mb-2" />
              <h5 className="font-bold text-neutral-900 text-sm mb-1">Sustainable home solutions</h5>
              <p className="text-neutral-600 text-[11px]">Energy-efficient lighting and recycled materials for daily life.</p>
            </div>
          </div>
        );

      case 'Services':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-3.5 border border-neutral-200 rounded-xl">
              <Wrench className="w-4 h-4 text-[#0058a3] mb-1.5" />
              <h5 className="font-bold text-neutral-900">Assembly Service</h5>
              <p className="text-neutral-500 text-[11px]">Professional furniture assembly at your door from $20.</p>
            </div>
            <div className="p-3.5 border border-neutral-200 rounded-xl">
              <Package className="w-4 h-4 text-[#0058a3] mb-1.5" />
              <h5 className="font-bold text-neutral-900">Click & Collect</h5>
              <p className="text-neutral-500 text-[11px]">Free pickup at Alexandra, Tampines, or Jurong Jem.</p>
            </div>
            <div className="p-3.5 border border-neutral-200 rounded-xl">
              <Tag className="w-4 h-4 text-[#0058a3] mb-1.5" />
              <h5 className="font-bold text-neutral-900">Kitchen Planning</h5>
              <p className="text-neutral-500 text-[11px]">Free 1-on-1 interior planning session with our experts.</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white border-b border-neutral-200 shadow-xl py-6 px-4 sm:px-8 animate-in slide-in-from-top-2 duration-150 relative z-30">
      <div className="max-w-[1440px] mx-auto relative">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-100">
          <h3 className="font-extrabold text-neutral-900 text-base">{activeTab}</h3>
          <button
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};
