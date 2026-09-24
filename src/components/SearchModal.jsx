import React, { useState } from 'react';
import { Search, X, MessageCircle, ArrowRight } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/menuData';

export const SearchModal = ({ isOpen, onClose, onSelectCategory }) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  // Collect all items across categories
  const allItems = MENU_CATEGORIES.flatMap(cat => 
    cat.items.map(item => ({ ...item, categoryTitle: cat.title, category: cat }))
  );

  const filteredItems = query.trim() === '' 
    ? allItems.slice(0, 5) 
    : allItems.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.kannadaName.includes(query) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.ingredients.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/65 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#fffdf9] w-full max-w-2xl rounded-lg shadow-2xl border border-[#d8a83e]/40 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="p-4 bg-[#4a0d09] flex items-center gap-3 border-b border-[#d8a83e]/30">
          <Search className="w-5 h-5 text-[#d8a83e]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Bisi Bele Bath, Chutney Pudi, Holige, Chakkuli..."
            className="flex-1 bg-transparent text-[#fff9ec] placeholder-[#f8f0df]/60 font-sans text-[15px] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 text-[#f8f0df] hover:text-[#d8a83e] rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3 divide-y divide-[#f0e6d6]">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-[#6d5142] text-[14px]">
              No matching traditional food found for "{query}".<br />
              <span className="text-[12px] text-[#8c6f5d]">Call us directly at +91 9980819355 for custom preparation!</span>
            </div>
          ) : (
            filteredItems.map(item => (
              <div key={item.id} className="pt-3 first:pt-0 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-[15px] text-[#2b1710]">{item.name}</span>
                    <span className="font-['Noto_Serif_Kannada',serif] text-[13px] text-[#6d5142]">({item.kannadaName})</span>
                  </div>
                  <div className="text-[11.5px] text-[#8c6f5d]">
                    Category: <span className="font-medium text-[#5a0905]">{item.categoryTitle}</span> • From ₹{item.prices[item.weights[0]]}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/919980819355?text=Hello%20Nalina's%20Kai%20Ruchi,%20I%20would%20like%20to%20order%20${encodeURIComponent(item.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-[#25D366] text-white px-2.5 py-1 rounded text-[11.5px] font-semibold"
                  >
                    <MessageCircle className="w-3 h-3 fill-current" />
                    <span>Order</span>
                  </a>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectCategory(item.category);
                    }}
                    className="p-1 text-[#5a0905] hover:text-[#d8a83e]"
                    title="View Category"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="bg-[#fbf7ee] px-4 py-2.5 border-t border-[#e8dbc4] text-[11.5px] text-[#6d5142] flex justify-between items-center">
          <span>Popular: Bisi Bele Bath • Shenga Pudi • Butter Chakkuli • Bele Holige</span>
          <button onClick={onClose} className="font-semibold text-[#5a0905]">Esc to close</button>
        </div>
      </div>
    </div>
  );
};
