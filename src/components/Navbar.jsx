import React, { useState, useEffect } from 'react';
import { Search, Menu as MenuIcon, X, MessageCircle, ChevronDown } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/menuData';

export const Navbar = ({ 
  lang, 
  setLang, 
  onOpenSearch, 
  onSelectCategory
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current visible section
      const sections = ['home', 'story', 'menu', 'reviews', 'order'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    setMenuDropdownOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 64;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLabels = {
    home: lang === 'en' ? 'Home' : 'ಮುಖಪುಟ',
    story: lang === 'en' ? 'Our Story' : 'ನಮ್ಮ ಕಥೆ',
    menu: lang === 'en' ? 'Menu' : 'ಮೆನು',
    reviews: lang === 'en' ? 'Reviews' : 'ಅನಿಸಿಕೆಗಳು',
    contact: lang === 'en' ? 'Contact' : 'ಸಂಪರ್ಕಿಸಿ',
    orderNow: lang === 'en' ? 'Order Now' : 'ಈಗಲೇ ಆರ್ಡರ್ ಮಾಡಿ'
  };

  return (
    <header className={`sticky top-0 z-50 w-full bg-[#4a0d09] border-b border-[#d8a83e]/20 transition-all duration-300 ${isScrolled ? 'shadow-lg bg-[#4a0d09]/95 backdrop-blur-sm' : 'shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-[58px] sm:h-[68px] flex items-center justify-between">
        
        {/* LEFT: Logo & Brand */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
          className="flex items-center gap-2 sm:gap-3 group focus:outline-none min-w-0"
        >
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[#d8a83e]/40 overflow-hidden flex items-center justify-center bg-[#3a0705] p-0.5 shrink-0">
            <img 
              src="/images/logo-cook.png" 
              alt="Nalina's Kai Ruchi Cook Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col text-left min-w-0">
            <span className="font-['Satisfy',cursive] text-[18px] sm:text-[23px] text-[#fff9ec] leading-none tracking-wide group-hover:text-[#d8a83e] transition-colors whitespace-nowrap">
              Nalina's Kai Ruchi
            </span>
            <span className="hidden sm:block text-[11px] sm:text-[11.5px] text-[#f8f0df]/85 tracking-tight font-serif italic">
              Bringing <strong className="font-semibold not-italic">Brahmins</strong> tradition to your table
            </span>
          </div>
        </a>

        {/* CENTER: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[14.5px] font-sans font-medium text-[#f8f0df]">
          <button
            onClick={() => scrollTo('home')}
            className={`relative py-1 transition-colors hover:text-[#d8a83e] ${
              activeSection === 'home' ? 'text-white' : 'text-[#f8f0df]/90'
            }`}
          >
            {navLabels.home}
            {activeSection === 'home' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#d8a83e]" />
            )}
          </button>

          <button
            onClick={() => scrollTo('story')}
            className={`relative py-1 transition-colors hover:text-[#d8a83e] ${
              activeSection === 'story' ? 'text-white' : 'text-[#f8f0df]/90'
            }`}
          >
            {navLabels.story}
            {activeSection === 'story' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#d8a83e]" />
            )}
          </button>

          {/* Menu Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMenuDropdownOpen(!menuDropdownOpen)}
              onMouseEnter={() => setMenuDropdownOpen(true)}
              className={`flex items-center gap-1 py-1 transition-colors hover:text-[#d8a83e] ${
                activeSection === 'menu' ? 'text-white' : 'text-[#f8f0df]/90'
              }`}
            >
              <span>{navLabels.menu}</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-80" />
            </button>

            {menuDropdownOpen && (
              <div 
                onMouseLeave={() => setMenuDropdownOpen(false)}
                className="absolute top-full left-0 mt-1 w-56 bg-[#3a0705] border border-[#d8a83e]/30 rounded-md shadow-xl py-2 z-50 text-left"
              >
                {MENU_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setMenuDropdownOpen(false);
                      onSelectCategory(cat);
                    }}
                    className="w-full px-4 py-2 text-left text-[13.5px] text-[#f8f0df] hover:bg-[#4a0d09] hover:text-[#d8a83e] transition-colors block"
                  >
                    {lang === 'en' ? cat.title : cat.kannadaTitle}
                  </button>
                ))}
                <div className="border-t border-[#d8a83e]/20 my-1" />
                <button
                  onClick={() => {
                    setMenuDropdownOpen(false);
                    scrollTo('menu');
                  }}
                  className="w-full px-4 py-1.5 text-left text-[12.5px] text-[#d8a83e] hover:underline"
                >
                  {lang === 'en' ? 'View All Categories →' : 'ಎಲ್ಲ ವಿಭಾಗಗಳನ್ನು ವೀಕ್ಷಿಸಿ →'}
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollTo('reviews')}
            className={`relative py-1 transition-colors hover:text-[#d8a83e] ${
              activeSection === 'reviews' ? 'text-white' : 'text-[#f8f0df]/90'
            }`}
          >
            {navLabels.reviews}
            {activeSection === 'reviews' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#d8a83e]" />
            )}
          </button>

          <button
            onClick={() => scrollTo('order')}
            className={`relative py-1 transition-colors hover:text-[#d8a83e] ${
              activeSection === 'order' ? 'text-white' : 'text-[#f8f0df]/90'
            }`}
          >
            {navLabels.contact}
            {activeSection === 'order' && (
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#d8a83e]" />
            )}
          </button>
        </nav>

        {/* RIGHT: Language Toggle, Search, Order Now */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Language Toggle Pill: EN | ಕನ್ನಡ */}
          <div className="flex items-center border border-[#d8a83e]/40 rounded-full px-2 py-1 text-[10px] sm:text-[12px] font-sans font-medium text-[#f8f0df]">
            <button
              onClick={() => setLang('en')}
              className={`transition-colors ${lang === 'en' ? 'text-[#d8a83e] font-semibold' : 'text-[#f8f0df]/70 hover:text-white'}`}
            >
              EN
            </button>
            <span className="mx-1 sm:mx-1.5 text-[#d8a83e]/50">|</span>
            <button
              onClick={() => setLang('kn')}
              className={`transition-colors ${lang === 'kn' ? 'text-[#d8a83e] font-semibold' : 'text-[#f8f0df]/70 hover:text-white'}`}
            >
              ಕನ್ನಡ
            </button>
          </div>

          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search spices and snacks"
            className="p-1.5 text-[#f8f0df] hover:text-[#d8a83e] transition-colors"
          >
            <Search className="w-4 h-4 sm:w-4 sm:h-4" />
          </button>

          {/* WhatsApp Order Now Button (Pistachio/light golden pill with WhatsApp icon) */}
          <a
            href="https://wa.me/919980819355?text=Hello%20Nalina's%20Kai%20Ruchi,%20I%20would%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#e4efa8] hover:bg-[#d8e698] text-[#2b1710] px-3.5 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="text-[#128C7E] flex items-center">
              <MessageCircle className="w-4 h-4 fill-current text-[#128C7E]" />
            </span>
            <span>{navLabels.orderNow}</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-1.5 text-[#f8f0df] hover:text-[#d8a83e]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#3a0705] border-b border-[#d8a83e]/30 px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-[16px] font-medium text-[#f8f0df]">
            <button 
              onClick={() => scrollTo('home')}
              className="text-left py-1 hover:text-[#d8a83e]"
            >
              {navLabels.home}
            </button>
            <button 
              onClick={() => scrollTo('story')}
              className="text-left py-1 hover:text-[#d8a83e]"
            >
              {navLabels.story}
            </button>
            <button 
              onClick={() => scrollTo('menu')}
              className="text-left py-1 hover:text-[#d8a83e]"
            >
              {navLabels.menu}
            </button>
            <button 
              onClick={() => scrollTo('reviews')}
              className="text-left py-1 hover:text-[#d8a83e]"
            >
              {navLabels.reviews}
            </button>
            <button 
              onClick={() => scrollTo('order')}
              className="text-left py-1 hover:text-[#d8a83e]"
            >
              {navLabels.contact}
            </button>
          </div>

          <div className="pt-3 border-t border-[#d8a83e]/20 flex flex-col gap-3">
            <a
              href="https://wa.me/919980819355?text=Hello%20Nalina's%20Kai%20Ruchi,%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#e4efa8] text-[#2b1710] py-2.5 rounded-full text-[14px] font-semibold"
            >
              <MessageCircle className="w-4 h-4 fill-current text-[#128C7E]" />
              <span>{navLabels.orderNow} (WhatsApp)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
