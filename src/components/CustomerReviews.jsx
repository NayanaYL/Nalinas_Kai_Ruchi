import React from 'react';
import { Star, CheckCircle, MessageSquarePlus, MapPin, ShieldCheck } from 'lucide-react';
import { KolamDivider } from './Decorations';

export const CustomerReviews = ({ lang, reviews, onOpenReviewModal, onOpenReviewQueue, pendingReviewsCount = 0 }) => {
  return (
    <section id="reviews" className="w-full bg-[#f8f2e6] py-14 sm:py-18 border-t border-[#e8dbc4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 text-left">
          <div>
            <div className="flex flex-wrap items-baseline gap-2">
              <h2 className="font-serif text-[26px] sm:text-[30px] font-bold text-[#2b1710] tracking-tight">
                Customer Reviews
              </h2>
              <span className="text-[#6d5142] font-serif text-[24px]">|</span>
              <span className="font-['Noto_Serif_Kannada',serif] text-[22px] sm:text-[25px] font-semibold text-[#35170d]">
                ಗ್ರಾಹಕರ ಅನಿಸಿಕೆಗಳು
              </span>
            </div>
            <p className="text-[14px] sm:text-[15px] text-[#6d5142] font-sans mt-1">
              Authentic love from homes that cherish Karnataka's traditional flavours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {pendingReviewsCount > 0 && (
              <button
                type="button"
                onClick={onOpenReviewQueue}
                className="inline-flex items-center gap-2 rounded-[4px] border border-[#d8a83e]/60 bg-[#fffdf9] px-3 py-2 text-[11px] font-semibold text-[#5a0905] shadow-sm transition-all duration-200 hover:bg-[#f8f2e6]"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#d8a83e]" />
                <span>{pendingReviewsCount} pending</span>
              </button>
            )}

            <button
              onClick={onOpenReviewModal}
              className="self-start sm:self-auto inline-flex items-center gap-2 bg-[#fffdf9] hover:bg-[#5a0905] text-[#5a0905] hover:text-[#fff9ec] border border-[#d8a83e]/60 px-4 py-2 rounded-[4px] text-[13px] font-semibold shadow-sm transition-all duration-200"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#d8a83e]" />
              <span>{lang === 'en' ? 'Write a Review' : 'ನಿಮ್ಮ ಅನಿಸಿಕೆ ಹಂಚಿಕೊಳ್ಳಿ'}</span>
            </button>
          </div>
        </div>

        {reviews.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-6 bg-[#fffdf9] border border-[#e8dbc4] rounded-[6px] text-center shadow-sm">
            <div className="flex items-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-6 h-6 text-[#d8a83e]/40" />
              ))}
            </div>
            <h3 className="font-serif text-[18px] font-bold text-[#2b1710] mb-2">
              Be the first to share your experience with Nalina’s Kai Ruchi!
            </h3>
            <p className="text-[13.5px] text-[#6d5142] font-sans leading-relaxed max-w-md">
              We’re waiting to hear what you loved most about our homemade Karnataka specials.
            </p>
            <button
              onClick={onOpenReviewModal}
              className="mt-6 inline-flex items-center gap-2 bg-[#4a0d09] hover:bg-[#5a0905] text-[#fff9ec] px-5 py-2.5 rounded-[4px] text-[13px] font-semibold shadow-sm transition-all duration-200"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#d8a83e]" />
              <span>{lang === 'en' ? 'Write a Review' : 'ನಿಮ್ಮ ಅನಿಸಿಕೆ ಹಂಚಿಕೊಳ್ಳಿ'}</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#fffdf9] border border-[#e8dbc4] rounded-[6px] p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between text-left group hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className={`w-4 h-4 ${
                            s <= rev.rating
                              ? 'fill-[#d8a83e] text-[#d8a83e]'
                              : 'text-[#d8a83e]/30'
                          }`}
                        />
                      ))}
                    </div>

                    {rev.verified && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        <span>{lang === 'en' ? 'Verified Order' : 'ಖರೀದಿ ದೃಢೀಕರಿಸಲಾಗಿದೆ'}</span>
                      </span>
                    )}
                  </div>

                  <p className="text-[13px] text-[#422c20] leading-relaxed font-sans italic relative pl-0.5 mb-3">
                    “{rev.comment}”
                  </p>

                  {rev.product && (
                    <div className="inline-block bg-[#f8f2e6] text-[#5a0905] text-[11px] font-medium px-2 py-0.5 rounded border border-[#e8dbc4] mb-3">
                      ✦ {rev.product}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#f0e6d6] flex items-center justify-between text-[12px] text-[#6d5142]">
                  <div>
                    <div className="font-serif font-bold text-[#2b1710] text-[14px]">
                      {rev.name}
                    </div>
                    <div className="flex items-center gap-1 text-[11.5px] text-[#8c6f5d] mt-0.5">
                      <MapPin className="w-3 h-3 text-[#5a0905]" />
                      <span>{rev.location}</span>
                    </div>
                  </div>

                  <span className="text-[11px] text-[#8c6f5d] font-sans">
                    {rev.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <KolamDivider className="w-8 h-4 text-[#d8a83e]" />
        </div>

      </div>
    </section>
  );
};
