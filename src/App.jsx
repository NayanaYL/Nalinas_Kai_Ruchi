import React, { useEffect, useState } from 'react';
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
import { CustomerReviews } from './components/CustomerReviews';
import { ReviewModal } from './components/ReviewModal';
import { DEFAULT_REVIEWS } from './data/reviewsData';

const normalizeReview = (review, index = 0) => ({
  id: review.id || `rev-${Date.now()}-${index}`,
  name: review.name || 'Customer',
  location: review.location || 'Bengaluru, Karnataka',
  rating: Number(review.rating) || 5,
  date: review.date || (review.created_at
    ? new Date(review.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    : 'Just now'),
  product: review.product || '',
  comment: review.comment || '',
  verified: Boolean(review.verified),
  status: review.status || 'approved'
});

export default function App() {
  const [lang, setLang] = useState('en');
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [reviews, setReviews] = useState(DEFAULT_REVIEWS);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        if (!response.ok) throw new Error('Could not fetch reviews');
        const data = await response.json();
        if (!Array.isArray(data.reviews)) throw new Error('Invalid reviews response');

        if (!cancelled) {
          const mergedReviews = [...data.reviews, ...DEFAULT_REVIEWS]
            .map((review, index) => normalizeReview(review, index))
            .filter((review) => review.status === 'approved');
          setReviews([...new Map(mergedReviews.map((review) => [review.id, review])).values()]);
        }
      } catch (error) {
        console.warn('Using manually maintained reviews because the shared review feed is unavailable.', error);
      } finally {
        if (!cancelled) setReviewsLoading(false);
      }
    };

    loadReviews();
    return () => { cancelled = true; };
  }, []);

  const approvedReviews = reviews.filter((review) => review.status === 'approved');
  const handleExploreClick = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-clip bg-[#f8f2e6] text-[#2b1710] flex flex-col font-sans selection:bg-[#d8a83e]/30 selection:text-[#35170d]">
      
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
      />

      {/* Customer Reviews Section */}
      <CustomerReviews
        lang={lang}
        reviews={approvedReviews}
        reviewsLoading={reviewsLoading}
        onOpenReviewForm={() => setReviewModalOpen(true)}
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

      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        lang={lang}
      />

    </div>
  );
}
