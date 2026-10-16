import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { BUSINESS_WHATSAPP } from '../utils/cart';

export const MenuCategoryModal = ({ category, lang, onClose, onAddToCart }) => {
  const [selectedWeights, setSelectedWeights] = useState({});

  if (!category) return null;

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
- Quantity: 1
- Pack size: ${weight}
- Price: ₹${price}
- Total: ₹${price}

Please confirm availability and dispatch details.`;
    return `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-[#fffdf9] w-full max-w-6xl max-h-[92vh] rounded-lg shadow-2xl border border-[#d8a83e]/40 flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#4a0d09] px-4 sm:px-6 py-4 flex items-center justify-between gap-3 text-[#fff9ec] border-b border-[#d8a83e]/30">
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
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full text-[#f8f0df] transition-colors hover:bg-white/10 hover:text-[#d8a83e]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Category Overview */}
        <div className="bg-[#fbf7ee] px-4 sm:px-6 py-3 border-b border-[#e8dbc4] text-[13px] text-[#52392c]">
          {category.description}
        </div>

        {/* Modal Items List */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {category.items.map((item) => {
              const currentWeight = selectedWeights[item.id] || item.weights[0];
              const currentPrice = item.prices[currentWeight];

              return (
                <article key={item.id} className="flex flex-col sm:flex-row gap-3 rounded-lg border border-[#e8dbc4] bg-white p-3 shadow-sm">
                  <div className="flex h-52 w-full flex-shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#f8f2e6] sm:h-44 sm:w-32">
                    <img
                      src={item.image}
                      alt={`${item.name} promotional poster with product photo and printed details`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full rounded-md border border-[#d8a83e]/40 object-contain"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-serif text-[17px] font-bold text-[#2b1710]">
                          {item.name}
                        </h3>
                        {item.kannadaName && (
                          <span className="font-['Noto_Serif_Kannada',serif] text-[14px] text-[#6d5142]">
                            ({item.kannadaName})
                          </span>
                        )}
                        {item.badge && (
                          <span className="bg-[#d8a83e]/20 text-[#5a0905] text-[10.5px] font-semibold px-2 py-0.5 rounded-full border border-[#d8a83e]/30">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-[12.5px] text-[#6d5142] font-sans leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        <span className="text-[11px] font-medium text-[#52392c]">Pack Size:</span>
                        {item.weights.map((weight) => (
                          <button
                            key={weight}
                            type="button"
                            onClick={() => handleWeightSelect(item.id, weight)}
                            className={`min-h-10 min-w-11 px-2.5 py-1 text-[11.5px] rounded-full border transition-all ${
                              currentWeight === weight
                                ? 'bg-[#5a0905] text-[#fff9ec] border-[#5a0905] font-semibold'
                                : 'bg-white text-[#52392c] border-[#d8dbc4] hover:border-[#5a0905]'
                            }`}
                          >
                            {weight}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <div className="text-[19px] font-bold text-[#5a0905] font-serif">
                          ₹{currentPrice}
                        </div>
                        {item.shelfLife && (
                          <div className="text-[10px] text-[#6d5142]">
                            Shelf life: {item.shelfLife}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 w-full">
                      <button
                        type="button"
                        onClick={() => onAddToCart?.({
                          id: item.id,
                          name: item.name,
                          kannadaName: item.kannadaName,
                          weight: currentWeight,
                          price: currentPrice,
                          image: item.image || category.image,
                        }, category.image)}
                        className="inline-flex min-h-10 items-center justify-center gap-1.5 bg-[#f5e7c0] hover:bg-[#e8d5a1] text-[#2b1710] px-2.5 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-all hover:scale-[1.01]"
                      >
                        Add to Cart
                      </button>

                      <a
                        href={createWhatsAppOrderUrl(item)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-2.5 py-1.5 rounded-full text-[12px] font-semibold shadow-sm transition-all hover:scale-[1.01]"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Order Now</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#fbf7ee] px-4 sm:px-6 py-3 border-t border-[#e8dbc4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[12px] text-[#6d5142]">
          <span>Freshly packaged upon order • Shipped across Karnataka & India</span>
          <button
            onClick={onClose}
            className="min-h-10 px-3 text-[#5a0905] font-semibold hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
