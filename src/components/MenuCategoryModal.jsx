import React, { useState } from 'react';
import { X, MessageCircle, Check, Info } from 'lucide-react';

export const MenuCategoryModal = ({ category, lang, onClose }) => {
  if (!category) return null;

  const [selectedWeights, setSelectedWeights] = useState({});

  const handleWeightSelect = (itemId, weight) => {
    setSelectedWeights(prev => ({ ...prev, [itemId]: weight }));
  };

  const getPrice = (item) => {
    const weight = selectedWeights[item.id] || item.weights[0];
    return item.prices[weight] || item.prices[item.weights[0]];
  };

  const createWhatsAppOrderUrl = (item) => {
    const weight = selectedWeights[item.id] || item.weights[0];
    const price = getPrice(item);
    const msg = `Hello Nalina's Kai Ruchi! I would like to order:
- Item: ${item.name} (${item.kannadaName})
- Quantity/Pack: ${weight}
- Price: ₹${price}

Please confirm availability and dispatch details.`;
    return `https://wa.me/919980819355?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#fffdf9] w-full max-w-3xl max-h-[90vh] rounded-lg shadow-2xl border border-[#d8a83e]/40 flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#4a0d09] px-6 py-4 flex items-center justify-between text-[#fff9ec] border-b border-[#d8a83e]/30">
          <div>
            <span className="text-[11px] font-sans tracking-widest uppercase text-[#d8a83e]">
              Karnataka Brahmin Tradition
            </span>
            <h2 className="font-serif text-[22px] sm:text-[24px] font-bold">
              {lang === 'en' ? category.title : category.kannadaTitle}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-[#f8f0df] hover:text-[#d8a83e] rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Category Overview */}
        <div className="bg-[#fbf7ee] px-6 py-3 border-b border-[#e8dbc4] text-[13px] text-[#52392c]">
          {category.description}
        </div>

        {/* Modal Items List */}
        <div className="overflow-y-auto p-6 space-y-5 flex-1 divide-y divide-[#f0e6d6]">
          {category.items.map((item) => {
            const currentWeight = selectedWeights[item.id] || item.weights[0];
            const currentPrice = item.prices[currentWeight];

            return (
              <div key={item.id} className="pt-4 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-serif text-[17px] font-bold text-[#2b1710]">
                      {item.name}
                    </h3>
                    <span className="font-['Noto_Serif_Kannada',serif] text-[14px] text-[#6d5142]">
                      ({item.kannadaName})
                    </span>
                    {item.badge && (
                      <span className="bg-[#d8a83e]/20 text-[#5a0905] text-[10.5px] font-semibold px-2 py-0.5 rounded-full border border-[#d8a83e]/30">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-[12.5px] text-[#6d5142] font-sans leading-relaxed">
                    {item.description}
                  </p>

                  {/* Ingredients note */}
                  <div className="text-[11px] text-[#8c6f5d] flex items-start gap-1 pt-1">
                    <Info className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span>Ingredients: {item.ingredients}</span>
                  </div>

                  {/* Weight Selector Pills */}
                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-[11px] font-medium text-[#52392c]">Pack Size:</span>
                    {item.weights.map((w) => (
                      <button
                        key={w}
                        onClick={() => handleWeightSelect(item.id, w)}
                        className={`text-[11.5px] px-2.5 py-0.5 rounded-full border transition-all ${
                          currentWeight === w
                            ? 'bg-[#5a0905] text-[#fff9ec] border-[#5a0905] font-semibold'
                            : 'bg-white text-[#52392c] border-[#d8dbc4] hover:border-[#5a0905]'
                        }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price & Direct WhatsApp Button */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 pt-2 sm:pt-0">
                  <div className="text-right">
                    <div className="text-[19px] font-bold text-[#5a0905] font-serif">
                      ₹{currentPrice}
                    </div>
                    <div className="text-[10px] text-[#6d5142]">
                      Shelf life: {item.shelfLife}
                    </div>
                  </div>

                  <a
                    href={createWhatsAppOrderUrl(item)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold shadow-sm transition-all hover:scale-102"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Order</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#fbf7ee] px-6 py-3 border-t border-[#e8dbc4] flex items-center justify-between text-[12px] text-[#6d5142]">
          <span>Freshly packaged upon order • Shipped across Karnataka & India</span>
          <button
            onClick={onClose}
            className="text-[#5a0905] font-semibold hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
