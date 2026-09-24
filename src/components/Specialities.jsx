import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/menuData';

export const Specialities = ({ lang, onSelectCategory }) => {
  return (
    <section id="menu" className="w-full bg-[#f8f2e6] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-8">
          <div className="flex flex-wrap items-baseline gap-2">
            <h2 className="font-serif text-[26px] sm:text-[30px] font-bold text-[#2b1710] tracking-tight">
              Our Specialities
            </h2>
            <span className="text-[#6d5142] font-serif text-[24px]">|</span>
            <span className="font-['Noto_Serif_Kannada',serif] text-[22px] sm:text-[25px] font-semibold text-[#35170d]">
              ನಮ್ಮ ವಿಶೇಷತೆಗಳು
            </span>
          </div>
          <p className="text-[14px] sm:text-[15px] text-[#6d5142] font-sans mt-1">
            Authentic Karnataka flavours, crafted with tradition.
          </p>
        </div>

        {/* 3 Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {MENU_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="group cursor-pointer bg-[#fffdf9] rounded-[6px] border border-[#e8dbc4] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="w-full h-32 sm:h-36 overflow-hidden bg-[#3a0705]/10 relative">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="font-serif-heading text-[17.5px] sm:text-[18.5px] font-bold text-[#2b1710] group-hover:text-[#5a0905] transition-colors">
                    {lang === 'en' ? cat.title : cat.kannadaTitle}
                  </h3>
                  <p className="text-[12.5px] sm:text-[13px] text-[#6d5142] font-sans leading-relaxed mt-2">
                    {cat.summary}
                  </p>
                </div>

                {/* Explore Link */}
                <div className="pt-4 mt-auto">
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#35170d] group-hover:text-[#5a0905]">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
