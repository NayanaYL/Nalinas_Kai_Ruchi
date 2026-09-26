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
import { PosterModal } from './components/PosterModal';
import { CustomerReviews } from './components/CustomerReviews';
import { ReviewModal } from './components/ReviewModal';
import { DEFAULT_REVIEWS } from './data/reviewsData';

export default function App() {
  const [lang, setLang] = useState('en');
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [journalOpen, setJournalOpen] = useState(false);
  const [posterOpen, setPosterOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  // Initialize reviews from localStorage or default reviews
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem('nalinas_reviews');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to load reviews from localStorage', e);
    }
    return DEFAULT_REVIEWS;
  });

  const handleAddReview = (newReview) => {
    setReviews((prev) => {
      const updated = [newReview, ...prev];
      try {
        localStorage.setItem('nalinas_reviews', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save review to localStorage', e);
      }
      return updated;
    });
  };

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
        onOpenPoster={() => setPosterOpen(true)}
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

      {/* Customer Reviews Section */}
      <CustomerReviews
        lang={lang}
        reviews={reviews}
        onOpenReviewModal={() => setReviewModalOpen(true)}
      />

      {/* Full-width Order Strip */}
      <OrderCTA lang={lang} />

      {/* Maroon Footer */}
      <Footer
        lang={lang}
        setLang={setLang}
        onOpenPoster={() => setPosterOpen(true)}
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

      <PosterModal
        isOpen={posterOpen}
        onClose={() => setPosterOpen(false)}
      />

      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        onAddReview={handleAddReview}
        lang={lang}
      />

    </div>
  );
}
