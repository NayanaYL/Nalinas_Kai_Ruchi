import React from 'react';
import { X, Heart, Award, Sparkles } from 'lucide-react';
import { BotanicalLeaf } from './Decorations';

export const StoryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#fffdf9] w-full max-w-3xl max-h-[90vh] rounded-lg shadow-2xl border border-[#d8a83e]/40 overflow-hidden flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#4a0d09] px-6 py-4 flex items-center justify-between text-[#fff9ec] border-b border-[#d8a83e]/30">
          <div>
            <span className="text-[11px] font-sans tracking-widest uppercase text-[#d8a83e]">
              Heirloom Heritage
            </span>
            <h2 className="font-serif text-[22px] sm:text-[24px] font-bold">
              The Story of Nalina's Kai Ruchi
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#f8f0df] hover:text-[#d8a83e] rounded-full hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 text-[#52392c] text-[14px] leading-relaxed font-sans">
          
          <div className="flex flex-col md:flex-row gap-6 items-center bg-[#fbf7ee] p-4 rounded-lg border border-[#e8dbc4]">
            <img
              src="/images/our-story.jpg"
              alt="Smt. Nalina cooking traditionally"
              className="w-full md:w-56 h-48 object-cover rounded shadow-sm"
            />
            <div className="space-y-2">
              <h3 className="font-serif text-[18px] font-bold text-[#2b1710]">
                "Every aroma that fills this kitchen carries my mother's blessings."
              </h3>
              <p className="text-[13px] text-[#6d5142]">
                For over four decades, Smt. Nalina prepared festive feasts, spice powders, and savouries for family weddings, temple ceremonies, and gatherings across Mysore and Bengaluru.
              </p>
              <div className="pt-2 flex items-center gap-2 text-[#5a0905] text-[12px] font-semibold">
                <Heart className="w-4 h-4 fill-current text-[#5a0905]" />
                <span>100% Home Cooked with Pure Ingredients</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-[18px] font-bold text-[#2b1710]">
              Our Brahmin Culinary Heritage
            </h4>
            <p>
              In traditional Karnataka Brahmin cooking, spices are not just condiments—they are medicine, sacred nourishment, and daily art. Our sambar and rasam powders are formulated strictly according to sattvic principles: no onion, no garlic, pure asafoetida (heeng), freshly roasted cumin, black pepper, and real sun-dried Byadagi chillies for that royal red hue without burning heat.
            </p>
            <p>
              Unlike industrial manufacturers who mass-grind in high-heat steel pulverizers (which burns the volatile essential oils and robs spices of their soul), we roast our spices gently over low flame and stone-grind in micro batches.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-3 bg-[#f8f2e6] rounded border border-[#e8dbc4] text-center">
              <Sparkles className="w-5 h-5 text-[#d8a83e] mx-auto mb-1" />
              <div className="font-bold text-[#2b1710] text-[14px]">No Preservatives</div>
              <div className="text-[11.5px] text-[#6d5142]">Zero artificial colors, MSG, or chemical stabilizers</div>
            </div>
            <div className="p-3 bg-[#f8f2e6] rounded border border-[#e8dbc4] text-center">
              <Award className="w-5 h-5 text-[#d8a83e] mx-auto mb-1" />
              <div className="font-bold text-[#2b1710] text-[14px]">Pure Cow Ghee</div>
              <div className="text-[11.5px] text-[#6d5142]">Sweets made only in fragrant farm cow ghee</div>
            </div>
            <div className="p-3 bg-[#f8f2e6] rounded border border-[#e8dbc4] text-center">
              <Heart className="w-5 h-5 text-[#d8a83e] mx-auto mb-1" />
              <div className="font-bold text-[#2b1710] text-[14px]">Hand-Pressed</div>
              <div className="text-[11.5px] text-[#6d5142]">Chakkuli, Kodubale shaped by experienced hands</div>
            </div>
          </div>

        </div>

        <div className="bg-[#fbf7ee] px-6 py-3 border-t border-[#e8dbc4] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#5a0905] text-[#fff9ec] px-5 py-1.5 rounded text-[13px] font-semibold hover:bg-[#35170d] transition-colors"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
};
