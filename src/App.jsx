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
import { CustomerReviews } from './components/CustomerReviews';
import { ReviewModal } from './components/ReviewModal';
import { DEFAULT_REVIEWS } from './data/reviewsData';

const REVIEW_STORAGE_KEY = 'nalinas_reviews_store';

const normalizeReview = (review, index = 0) => ({
  id: review.id || `rev-${Date.now()}-${index}`,
  name: review.name || 'Customer',
  location: review.location || 'Bengaluru, Karnataka',
  rating: Number(review.rating) || 5,
  date: review.date || 'Just now',
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
  const [reviewQueueOpen, setReviewQueueOpen] = useState(false);

  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem(REVIEW_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return parsed.map((review, index) => normalizeReview(review, index));
        }
      }
    } catch (e) {
      console.error('Failed to load reviews from localStorage', e);
    }
    return DEFAULT_REVIEWS;
  });

  const persistReviews = (updatedReviews) => {
    try {
      localStorage.setItem(REVIEW_STORAGE_KEY, JSON.stringify(updatedReviews));
    } catch (e) {
      console.error('Failed to save reviews to localStorage', e);
    }
  };

  const handleAddReview = (newReview) => {
    setReviews((prev) => {
      const updated = [normalizeReview(newReview, prev.length), ...prev];
      persistReviews(updated);
      return updated;
    });
  };

  const handleReviewDecision = (reviewId, decision) => {
    setReviews((prev) => {
      const updated = prev.map((review) => {
        if (review.id !== reviewId) return review;
        if (decision === 'approve') {
          return { ...review, status: 'approved' };
        }
        return { ...review, status: 'rejected' };
      });
      persistReviews(updated);
      return updated;
    });
  };

  const approvedReviews = reviews.filter((review) => review.status === 'approved');
  const pendingReviews = reviews.filter((review) => review.status === 'pending');

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
      />

      {/* Customer Reviews Section */}
      <CustomerReviews
        lang={lang}
        reviews={approvedReviews}
        pendingReviewsCount={pendingReviews.length}
        onOpenReviewModal={() => setReviewModalOpen(true)}
        onOpenReviewQueue={() => setReviewQueueOpen(true)}
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
        onAddReview={handleAddReview}
        lang={lang}
      />

      {reviewQueueOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-lg border border-[#e8dbc4] bg-[#fffdf9] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#e8dbc4] bg-[#4a0d09] px-5 py-4 text-[#fff9ec]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#d8a83e]">Admin</p>
                <h3 className="font-serif text-xl font-bold">Review Queue</h3>
              </div>
              <button
                type="button"
                onClick={() => setReviewQueueOpen(false)}
                className="rounded-full border border-white/20 px-2 py-1 text-xs font-medium text-[#f8f0df] hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="p-5">
              {pendingReviews.length === 0 ? (
                <div className="rounded border border-dashed border-[#d8dbc4] bg-[#f8f2e6] p-8 text-center text-sm text-[#6d5142]">
                  There are no pending reviews to moderate.
                </div>
              ) : (
                <div className="space-y-4">
                  {pendingReviews.map((review) => (
                    <div key={review.id} className="rounded border border-[#e8dbc4] bg-[#fffdf9] p-4 shadow-sm">
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <div className="font-serif text-lg font-bold text-[#2b1710]">{review.name}</div>
                          <div className="text-xs text-[#6d5142]">{review.location}</div>
                        </div>
                        <div className="flex items-center gap-1 text-[#d8a83e]">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className={star <= review.rating ? 'text-[#d8a83e]' : 'text-[#d8a83e]/30'}>★</span>
                          ))}
                        </div>
                      </div>

                      <p className="mb-3 text-sm leading-relaxed text-[#422c20]">“{review.comment}”</p>

                      <div className="mb-4 flex flex-wrap gap-2 text-[11px]">
                        {review.product && (
                          <span className="rounded border border-[#e8dbc4] bg-[#f8f2e6] px-2 py-1 text-[#5a0905]">
                            {review.product}
                          </span>
                        )}
                        <span className="rounded border border-amber-200 bg-amber-50 px-2 py-1 text-amber-800">
                          Pending approval
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            handleReviewDecision(review.id, 'approve');
                          }}
                          className="rounded bg-[#4a0d09] px-3 py-2 text-xs font-semibold text-[#fff9ec] hover:bg-[#5a0905]"
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            handleReviewDecision(review.id, 'reject');
                          }}
                          className="rounded border border-[#d8dbc4] bg-white px-3 py-2 text-xs font-semibold text-[#35170d] hover:bg-[#f8f2e6]"
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
