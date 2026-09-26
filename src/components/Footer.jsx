import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BotanicalLeaf } from './Decorations';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer = ({ lang, setLang, onOpenPoster }) => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#3a0705] text-[#f8f0df] pt-8 pb-7 border-t border-[#d8a83e]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6">
          
          {/* LEFT: Logo & Brand */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full border border-[#d8a83e]/40 overflow-hidden flex items-center justify-center bg-[#2a0503]">
              <img 
                src="/images/logo-cook.png" 
                alt="Nalina's Kai Ruchi Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-['Satisfy',cursive] text-[20px] text-[#fff9ec] leading-none">
                Nalina's Kai Ruchi
              </span>
              <span className="text-[11px] text-[#f8f0df]/80 italic font-serif mt-1">
                Bringing <strong className="not-italic font-semibold">Brahmins</strong> tradition to your table
              </span>
            </div>
          </div>

          {/* CENTER: Navigation Links & Language */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-[13.5px] font-sans">
            <button onClick={() => scrollTo('home')} className="hover:text-[#d8a83e] transition-colors">
              Home
            </button>
            <button onClick={() => scrollTo('story')} className="hover:text-[#d8a83e] transition-colors">
              Our Story
            </button>
            <button onClick={() => scrollTo('menu')} className="hover:text-[#d8a83e] transition-colors">
              Menu
            </button>
            <button onClick={() => scrollTo('story')} className="hover:text-[#d8a83e] transition-colors">
              Journal
            </button>
            <button onClick={() => scrollTo('reviews')} className="hover:text-[#d8a83e] transition-colors">
              {lang === 'en' ? 'Reviews' : 'ಅನಿಸಿಕೆಗಳು'}
            </button>
            <button onClick={() => scrollTo('order')} className="hover:text-[#d8a83e] transition-colors">
              Contact
            </button>
            <button onClick={onOpenPoster} className="text-[#d8a83e] hover:text-[#fff] transition-colors font-medium">
              {lang === 'en' ? 'Poster' : 'ಪೋಸ್ಟರ್'}
            </button>

            {/* Language toggle pill in footer */}
            <div className="border border-[#d8a83e]/40 rounded-full px-2 py-0.5 text-[11px]">
              <button 
                onClick={() => setLang('en')} 
                className={lang === 'en' ? 'text-[#d8a83e] font-semibold' : 'text-white/70'}
              >
                EN
              </button>
              <span className="mx-1 text-[#d8a83e]/40">|</span>
              <button 
                onClick={() => setLang('kn')} 
                className={lang === 'kn' ? 'text-[#d8a83e] font-semibold' : 'text-white/70'}
              >
                ಕನ್ನಡ
              </button>
            </div>
          </div>

          {/* RIGHT: Social Icons & Handwritten Motto */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#f8f0df] hover:text-[#d8a83e] transition-colors"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/919980819355"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-[#f8f0df] hover:text-[#d8a83e] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-1.5 text-[#d8a83e]/80">
              <BotanicalLeaf className="w-6 h-6" strokeWidth={1.3} />
            </div>
          </div>

        </div>

        {/* Delivery & Bulk Orders Note */}
        <div className="py-2.5 my-2 border-t border-b border-[#d8a83e]/15 text-[12px] text-[#f8f0df]/85 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          <span className="flex items-center gap-1.5">
            <span>🇮🇳</span>
            <strong>All-India Delivery Available</strong>
          </span>
          <span className="text-[#d8a83e]/40">•</span>
          <span className="flex items-center gap-1.5">
            <span>📦</span>
            <strong>Bulk Orders for Events & Festivals Accepted</strong>
          </span>
          <span className="text-[#d8a83e]/40">•</span>
          <span className="flex items-center gap-1.5">
            <span>🌿</span>
            <span>100% Homemade Brahmin Tradition</span>
          </span>
        </div>

        {/* BOTTOM: Copyright & Heritage Tagline */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-between text-[11.5px] text-[#f8f0df]/70 gap-2">
          <div>
            © 2025 Nalina's Kai Ruchi. All rights reserved.
          </div>
          <div className="font-serif italic text-[#d8a83e]/90 text-[12.5px]">
            Traditional flavours • Homemade with love
          </div>
        </div>

      </div>
    </footer>
  );
};
