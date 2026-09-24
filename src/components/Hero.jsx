import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { BotanicalLeaf } from './Decorations';

export const Hero = ({ lang, onExploreClick }) => {
  return (
    <section id="home" className="relative w-full min-h-[500px] lg:min-h-[560px] bg-[#35170D] overflow-hidden flex items-center">
      
      {/* Background Hero Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/hero-banner.jpg"
          alt="Traditional Karnataka Brahmin Food and Spices in Clay Pot and Brass Vessels"
          className="w-full h-full object-cover object-right lg:object-center filter brightness-[0.92]"
        />
        {/* Dark cinematic vignette gradient covering left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#200705] via-[#200705]/85 to-transparent sm:w-3/5 lg:w-1/2" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT CONTENT (6 cols) */}
          <div className="lg:col-span-7 xl:col-span-6 text-left space-y-4 sm:space-y-5">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-2 text-[12px] sm:text-[13px] tracking-[0.22em] text-[#d8a83e] font-sans font-medium uppercase">
              <span className="w-5 h-[1px] bg-[#d8a83e]/80 inline-block" />
              <span>HOMEMADE • TRADITIONAL • AUTHENTIC</span>
              <span className="w-5 h-[1px] bg-[#d8a83e]/80 inline-block" />
            </div>

            {/* Main Title: Nalina's Kai Ruchi */}
            <h1 className="font-serif text-[42px] sm:text-[54px] lg:text-[62px] text-[#fff9ec] font-normal tracking-tight leading-[1.08] drop-shadow-sm">
              Nalina’s Kai Ruchi
            </h1>

            {/* Subheading */}
            <p className="font-serif text-[20px] sm:text-[23px] lg:text-[25px] text-[#e8c878] leading-snug drop-shadow">
              Bringing traditional flavours<br />
              to your table.
            </p>

            {/* Kannada Text */}
            <p className="font-['Noto_Serif_Kannada',serif] text-[16px] sm:text-[18px] text-[#f8f0df]/90 tracking-wide pt-1">
              ನಮ್ಮ ಮನೆ ಅಡುಗೆ, ನಿಮ್ಮ ಮನೆಗೆ...
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3 sm:pt-4">
              
              {/* Primary: View Menu */}
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-2.5 bg-[#d8a83e] hover:bg-[#e4b54c] text-[#2b1710] font-sans font-semibold text-[14px] sm:text-[15px] px-6 py-2.5 rounded-[4px] transition-all duration-200 shadow-md hover:shadow-lg active:scale-98"
              >
                <span>{lang === 'en' ? 'View Menu' : 'ಮೆನು ವೀಕ್ಷಿಸಿ'}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary: WhatsApp Order Now */}
              <a
                href="https://wa.me/919980819355?text=Hello%20Nalina's%20Kai%20Ruchi,%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#f8f0df]/50 hover:border-[#d8a83e] bg-[#2b1710]/40 hover:bg-[#2b1710]/70 text-[#fff9ec] font-sans font-medium text-[14px] sm:text-[15px] px-5 py-2.5 rounded-[4px] backdrop-blur-[2px] transition-all duration-200 shadow-sm hover:text-[#d8a83e]"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
                <span>{lang === 'en' ? 'Order Now' : 'ಈಗಲೇ ಆರ್ಡರ್ ಮಾಡಿ'}</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Decorative hand-drawn twig & handwritten quote (Visible on Desktop) */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 justify-end items-start pr-4 pt-4">
            <div className="flex flex-col items-center text-center select-none space-y-1">
              <BotanicalLeaf className="w-12 h-14 text-[#d8a83e]/90 drop-shadow" strokeWidth={1.3} />
              <div className="font-handwriting text-[21px] text-[#fff9ec]/95 leading-[1.15] tracking-wide drop-shadow-md transform rotate-[-3deg]">
                Traditional<br />
                recipes<br />
                Homemade<br />
                with love
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
