import React, { useState } from 'react';
import { X, Star, MessageCircle, Send, Check } from 'lucide-react';
import { MENU_CATEGORIES } from '../data/menuData';

export const ReviewModal = ({ isOpen, onClose, onAddReview, lang }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [product, setProduct] = useState('Bisi Bele Bath Powder');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // List of all products for dropdown
  const allProducts = MENU_CATEGORIES.flatMap(cat => cat.items.map(i => i.name));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      location: location.trim() || 'Bengaluru, Karnataka',
      rating,
      date: 'Just now',
      product,
      comment: comment.trim(),
      verified: true
    };

    onAddReview(newRev);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  const handleWhatsAppSubmit = () => {
    if (!name.trim() || !comment.trim()) return;
    const msg = `Hello Nalina's Kai Ruchi! I would like to submit a customer review:
- Name: ${name.trim()} (${location.trim() || 'Bengaluru'})
- Rating: ${'★'.repeat(rating)} (${rating}/5)
- Product: ${product}
- Review: "${comment.trim()}"

Thank you for the authentic traditional food!`;
    window.open(`https://wa.me/919980819355?text=${encodeURIComponent(msg)}`, '_blank');
    handleSubmit({ preventDefault: () => {} });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/65 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#fffdf9] w-full max-w-lg rounded-lg shadow-2xl border border-[#d8a83e]/50 flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#4a0d09] px-6 py-4 flex items-center justify-between text-[#fff9ec] border-b border-[#d8a83e]/30">
          <div>
            <span className="text-[11px] font-sans tracking-widest uppercase text-[#d8a83e]">
              Customer Feedback
            </span>
            <h2 className="font-serif text-[20px] sm:text-[22px] font-bold">
              {lang === 'en' ? 'Share Your Review' : 'ನಿಮ್ಮ ಅನಿಸಿಕೆ ಹಂಚಿಕೊಳ್ಳಿ'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#f8f0df] hover:text-[#d8a83e] rounded-full hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h3 className="font-serif text-[20px] font-bold text-[#2b1710]">
              Thank You! / ಧನ್ಯವಾದಗಳು
            </h3>
            <p className="text-[13.5px] text-[#6d5142]">
              Your review has been posted and will appear on our customer reviews section.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto max-h-[75vh]">
            
            {/* Star Rating Selector */}
            <div>
              <label className="block text-[12.5px] font-semibold text-[#35170d] mb-1">
                Your Rating
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 text-[#d8a83e] transition-transform hover:scale-110 focus:outline-none"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        (hoverRating || rating) >= star
                          ? 'fill-[#d8a83e] text-[#d8a83e]'
                          : 'text-[#d8a83e]/30'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-[13px] font-medium text-[#6d5142] ml-2">
                  {rating} of 5 Stars
                </span>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-[12.5px] font-semibold text-[#35170d] mb-1">
                Your Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Smt. Malathi Rao"
                className="w-full px-3 py-2 bg-white border border-[#d8dbc4] rounded text-[13.5px] text-[#2b1710] focus:outline-none focus:border-[#5a0905]"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-[12.5px] font-semibold text-[#35170d] mb-1">
                City / Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Malleshwaram, Bengaluru / Mysuru / Mumbai"
                className="w-full px-3 py-2 bg-white border border-[#d8dbc4] rounded text-[13.5px] text-[#2b1710] focus:outline-none focus:border-[#5a0905]"
              />
            </div>

            {/* Product Reviewed */}
            <div>
              <label className="block text-[12.5px] font-semibold text-[#35170d] mb-1">
                Product You Enjoyed
              </label>
              <select
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#d8dbc4] rounded text-[13.5px] text-[#2b1710] focus:outline-none focus:border-[#5a0905]"
              >
                {allProducts.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* Review Comment */}
            <div>
              <label className="block text-[12.5px] font-semibold text-[#35170d] mb-1">
                Your Review <span className="text-red-600">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tell us what you liked about the taste, aroma, freshness, or packaging..."
                className="w-full px-3 py-2 bg-white border border-[#d8dbc4] rounded text-[13.5px] text-[#2b1710] focus:outline-none focus:border-[#5a0905]"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
              <button
                type="submit"
                className="w-full sm:flex-1 py-2.5 px-4 bg-[#5a0905] hover:bg-[#35170d] text-[#fff9ec] rounded text-[13.5px] font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Review</span>
              </button>
              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="w-full sm:w-auto py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded text-[13.5px] font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Share via WhatsApp</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
