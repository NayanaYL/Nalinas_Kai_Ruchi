import React, { useState } from 'react';
import { MessageCircle, Star, X } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/menuData';

const BUSINESS_WHATSAPP = '919980819355';

const cleanText = (value) => String(value || '').replace(/[<>]/g, '').trim();

export const ReviewModal = ({ isOpen, onClose, lang }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [product, setProduct] = useState('Bisi Bele Bath Powder');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');
  const products = MENU_CATEGORIES.flatMap((category) => category.items.map((item) => item.name));

  if (!isOpen) return null;

  const handleShare = (event) => {
    event.preventDefault();
    const cleanName = cleanText(name);
    const cleanLocation = cleanText(location);
    const cleanComment = cleanText(comment);

    if (!cleanName || !cleanComment) {
      setError('Please enter your name and review.');
      return;
    }
    if (cleanComment.length < 10) {
      setError('Please write at least 10 characters for your review.');
      return;
    }

    const message = [
      'Hi Nalina’s Kai Ruchi! I would like to share my review about your products:',
      '',
      `Name: ${cleanName}`,
      cleanLocation ? `Location: ${cleanLocation}` : '',
      `Rating: ${'★'.repeat(rating)} (${rating}/5)`,
      product ? `Product: ${product}` : '',
      `Review: ${cleanComment}`
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-3 backdrop-blur-sm sm:p-5" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-modal-title"
        className="flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-lg border border-[#d8a83e]/50 bg-[#fffdf9] text-left shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#d8a83e]/30 bg-[#4a0d09] px-6 py-4 text-[#fff9ec]">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#d8a83e]">Customer Feedback</span>
            <h2 id="review-modal-title" className="font-serif text-[20px] font-bold sm:text-[22px]">
              {lang === 'en' ? 'Share Your Review' : 'ನಿಮ್ಮ ಅನಿಸಿಕೆ ಹಂಚಿಕೊಳ್ಳಿ'}
            </h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close review form" className="rounded-full p-1.5 text-[#f8f0df] hover:bg-white/10 hover:text-[#d8a83e]">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleShare} className="space-y-4 overflow-y-auto p-6">
          <div>
            <label className="mb-1 block text-[12.5px] font-semibold text-[#35170d]">Your Rating</label>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((value) => (
                <button key={value} type="button" onClick={() => setRating(value)} aria-label={`${value} stars`} className="p-1 text-[#d8a83e]">
                  <Star className={`h-6 w-6 ${rating >= value ? 'fill-[#d8a83e]' : 'text-[#d8a83e]/30'}`} />
                </button>
              ))}
              <span className="ml-2 text-[13px] text-[#6d5142]">{rating} of 5 Stars</span>
            </div>
          </div>

          <div>
            <label htmlFor="review-name" className="mb-1 block text-[12.5px] font-semibold text-[#35170d]">Your Name <span className="text-red-600">*</span></label>
            <input id="review-name" value={name} onChange={(event) => setName(event.target.value)} maxLength={80} required placeholder="e.g. Smt. Malathi Rao" className="w-full rounded border border-[#d8dbc4] bg-white px-3 py-2 text-[13.5px] text-[#2b1710] focus:border-[#5a0905] focus:outline-none" />
          </div>

          <div>
            <label htmlFor="review-location" className="mb-1 block text-[12.5px] font-semibold text-[#35170d]">City / Location</label>
            <input id="review-location" value={location} onChange={(event) => setLocation(event.target.value)} maxLength={120} placeholder="e.g. Bengaluru, Karnataka" className="w-full rounded border border-[#d8dbc4] bg-white px-3 py-2 text-[13.5px] text-[#2b1710] focus:border-[#5a0905] focus:outline-none" />
          </div>

          <div>
            <label htmlFor="review-product" className="mb-1 block text-[12.5px] font-semibold text-[#35170d]">Product You Enjoyed</label>
            <select id="review-product" value={product} onChange={(event) => setProduct(event.target.value)} className="w-full rounded border border-[#d8dbc4] bg-white px-3 py-2 text-[13.5px] text-[#2b1710] focus:border-[#5a0905] focus:outline-none">
              {products.map((productName) => <option key={productName} value={productName}>{productName}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="review-comment" className="mb-1 block text-[12.5px] font-semibold text-[#35170d]">Your Review <span className="text-red-600">*</span></label>
            <textarea id="review-comment" value={comment} onChange={(event) => setComment(event.target.value)} maxLength={2000} minLength={10} required rows={3} placeholder="Tell us what you liked about the taste, aroma, freshness, or packaging..." className="w-full rounded border border-[#d8dbc4] bg-white px-3 py-2 text-[13.5px] text-[#2b1710] focus:border-[#5a0905] focus:outline-none" />
          </div>

          {error && <p role="alert" className="rounded border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700">{error}</p>}

          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded bg-[#25D366] px-4 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-[#20ba59]">
            <MessageCircle className="h-4 w-4" />
            <span>Share via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};