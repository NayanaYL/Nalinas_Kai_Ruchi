import React, { useState } from 'react';
import { X, Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { JOURNAL_POSTS } from '../data/menuData';

export const JournalModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#fffdf9] w-full max-w-3xl max-h-[90vh] rounded-lg shadow-2xl border border-[#d8a83e]/40 overflow-hidden flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#4a0d09] px-6 py-4 flex items-center justify-between text-[#fff9ec] border-b border-[#d8a83e]/30">
          <div>
            <span className="text-[11px] font-sans tracking-widest uppercase text-[#d8a83e]">
              From Our Kitchen
            </span>
            <h2 className="font-serif text-[22px] sm:text-[24px] font-bold">
              The Culinary Journal & Recipes
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#f8f0df] hover:text-[#d8a83e] rounded-full hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {selectedPost ? (
            <div className="space-y-4">
              <button
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#5a0905] hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to all articles</span>
              </button>

              <h3 className="font-serif text-[24px] font-bold text-[#2b1710]">
                {selectedPost.title}
              </h3>
              <div className="flex items-center gap-4 text-[12px] text-[#6d5142]">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {selectedPost.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {selectedPost.readTime}</span>
                <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> By {selectedPost.author}</span>
              </div>

              <div className="w-full h-56 rounded-md overflow-hidden bg-[#3a0705]/10 my-4">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
              </div>

              <div className="text-[14px] text-[#52392c] leading-relaxed whitespace-pre-line font-sans">
                {selectedPost.content}
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <p className="text-[13.5px] text-[#6d5142]">
                Explore culinary secrets, heirloom roasting techniques, and traditional recipes written by Smt. Nalina.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {JOURNAL_POSTS.map(post => (
                  <div
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="p-4 rounded border border-[#e8dbc4] bg-[#fbf7ee] hover:bg-[#fff] cursor-pointer hover:shadow-md transition-all group"
                  >
                    <div className="h-32 rounded overflow-hidden mb-3">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform" />
                    </div>
                    <span className="text-[11px] text-[#8c6f5d] uppercase tracking-wider">{post.readTime}</span>
                    <h4 className="font-serif font-bold text-[16px] text-[#2b1710] group-hover:text-[#5a0905] mt-1">
                      {post.title}
                    </h4>
                    <p className="text-[12px] text-[#6d5142] mt-1.5 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-block mt-3 text-[12px] font-semibold text-[#5a0905] group-hover:underline">
                      Read Article →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-[#fbf7ee] px-6 py-3 border-t border-[#e8dbc4] flex justify-end">
          <button
            onClick={onClose}
            className="text-[#5a0905] font-semibold text-[13px] hover:underline"
          >
            Close Journal
          </button>
        </div>
      </div>
    </div>
  );
};
