import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureStrip } from './components/FeatureStrip';
import { Specialities } from './components/Specialities';
import { StoryAndKitchen } from './components/StoryAndKitchen';
import { OrderCTA } from './components/OrderCTA';
import { Footer } from './components/Footer';
import { MenuCategoryModal } from './components/MenuCategoryModal';
import { SearchModal } from './components/SearchModal';
import { StoryModal } from './components/StoryModal';
import { JournalModal } from './components/JournalModal';
import { MENU_CATEGORIES } from './data/menuData';

export default function App() {
  const [lang, setLang] = useState('en');
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [journalOpen, setJournalOpen] = useState(false);

  const handleExploreClick = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f2e6] text-[#2b1710] flex flex-col font-sans selection:bg-[#d8a83e]/30 selection:text-[#35170d]">
      
      {/* Top Sticky Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenSearch={() => setSearchOpen(true)}
        onSelectCategory={(cat) => setActiveCategory(cat)}
      />

      {/* Hero Section */}
      <Hero
        lang={lang}
        onExploreClick={handleExploreClick}
      />

      {/* Five-Item Feature Strip */}
      <FeatureStrip lang={lang} />

      {/* Our Specialities: 3 Horizontal Cards */}
      <Specialities
        lang={lang}
        onSelectCategory={(cat) => setActiveCategory(cat)}
      />

      {/* Our Story & From Our Kitchen Side-by-Side */}
      <StoryAndKitchen
        lang={lang}
        onOpenStory={() => setStoryOpen(true)}
        onOpenJournal={() => setJournalOpen(true)}
      />

      {/* Full-width Order Strip */}
      <OrderCTA lang={lang} />

      {/* Maroon Footer */}
      <Footer
        lang={lang}
        setLang={setLang}
      />

      {/* Interactive Modals */}
      <MenuCategoryModal
        category={activeCategory}
        lang={lang}
        onClose={() => setActiveCategory(null)}
      />

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectCategory={(cat) => {
          setSearchOpen(false);
          setActiveCategory(cat);
        }}
      />

      <StoryModal
        isOpen={storyOpen}
        onClose={() => setStoryOpen(false)}
      />

      <JournalModal
        isOpen={journalOpen}
        onClose={() => setJournalOpen(false)}
      />

    </div>
  );
}
