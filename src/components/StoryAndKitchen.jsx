import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BotanicalLeaf } from './Decorations';

export const StoryAndKitchen = ({ lang, onOpenStory, onOpenJournal }) => {
  return (
    <section id="story" className="w-full bg-[#f8f2e6] pb-14 sm:pb-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Our Story (Unboxed on cream background, matching screenshot) */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row gap-5 lg:gap-6 items-start">
            
            {/* Photo of Traditional Woman cooking in Karnataka kitchen */}
            <div className="w-full sm:w-[48%] h-56 sm:h-64 rounded-[4px] overflow-hidden flex-shrink-0 bg-[#3a0705]/10 shadow-sm">
              <img
                src="/images/our-story.jpg"
                alt="Traditional Karnataka Cook preparing food in brass vessels"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Story Text */}
            <div className="w-full sm:w-[52%] text-left flex flex-col justify-between h-full space-y-3 pt-1">
              <div>
                <div className="text-[#35170d] text-lg font-bold leading-none mb-1">—</div>
                <div className="flex flex-col items-start gap-0.5">
                  <h3 className="font-serif-heading text-[22px] sm:text-[24px] font-bold text-[#2b1710]">
                    Our Story
                  </h3>
                  <span className="font-kannada text-[18px] text-[#35170d] font-semibold">
                    ನಮ್ಮ ಕಥೆ
                  </span>
                </div>

                <p className="text-[12.8px] sm:text-[13.2px] text-[#52392c] leading-relaxed mt-2.5 font-sans">
                  Nalina's Kai Ruchi is born out of a deep love for traditional Karnataka recipes, handed down through generations.
                </p>
                <p className="text-[12.8px] sm:text-[13.2px] text-[#52392c] leading-relaxed mt-2.5 font-sans">
                  We make every product at home with care, using pure ingredients and time-tested recipes, just like our grandmothers did.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenStory}
                  className="group inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#35170d] hover:text-[#5a0905] transition-colors"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT: From Our Kitchen Card */}
          <div className="lg:col-span-5 bg-[#fbf7ee] border border-[#e8dbc4] rounded-[6px] p-5 sm:p-6 shadow-sm flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Right Decorative Leaf */}
            <div className="absolute top-3 right-3 text-[#d8a83e]/70">
              <BotanicalLeaf className="w-8 h-8" strokeWidth={1.2} />
            </div>

            {/* Header */}
            <div className="text-left pr-8">
              <h3 className="font-serif text-[21px] sm:text-[22px] font-bold text-[#2b1710]">
                From Our Kitchen
              </h3>
              <p className="text-[13px] text-[#6d5142] font-sans mt-0.5">
                Traditional recipes. Timeless flavours.
              </p>
            </div>

            {/* Content: Photo + Text */}
            <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center">
              <div className="w-full sm:w-36 h-28 rounded-[4px] overflow-hidden flex-shrink-0 bg-[#3a0705]/10">
                <img
                  src="/images/kitchen-masala.jpg"
                  alt="Freshly ground masala powder in brass bowl"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-[12.8px] text-[#52392c] leading-relaxed font-sans text-left">
                Every spice, every ingredient has a story. Explore our journal for recipes, preparation tips and the rich culture of Karnataka cuisine.
              </p>
            </div>

            {/* Visit Journal Link */}
            <div className="pt-3 mt-3 border-t border-[#e8dbc4]/70 text-left">
              <button
                onClick={onOpenJournal}
                className="group inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#35170d] hover:text-[#5a0905] transition-colors"
              >
                <span>Visit Journal</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
