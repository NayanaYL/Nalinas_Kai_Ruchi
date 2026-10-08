import React, { useState } from 'react';
import { X, Download, Printer, MapPin, Phone, Sparkles } from 'lucide-react';
import { BotanicalLeaf } from './Decorations';

export const PosterModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('design'); // 'design' | 'print'

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#fffdf9] w-full max-w-4xl max-h-[92vh] rounded-lg shadow-2xl border border-[#d8a83e]/50 flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#4a0d09] px-6 py-3.5 flex items-center justify-between text-[#fff9ec] border-b border-[#d8a83e]/30">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#d8a83e]" />
            <div>
              <h2 className="font-serif text-[19px] sm:text-[21px] font-bold text-[#fff9ec] leading-none">
                Nalina's Kai Ruchi Brand Poster
              </h2>
              <span className="text-[11.5px] text-[#f8f0df]/80 font-sans">
                Heritage Karnataka Brahmin Food Poster (Print & Social Media Ready)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 text-[#f8f0df] hover:text-[#d8a83e] rounded-full hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Tab Controls & Action Bar */}
        <div className="bg-[#fbf7ee] px-6 py-2.5 border-b border-[#e8dbc4] flex flex-wrap items-center justify-between gap-3 text-[13px]">
          <div className="flex items-center gap-2 bg-[#f0e6d6] p-1 rounded-md">
            <button
              onClick={() => setActiveTab('design')}
              className={`px-3 py-1 rounded text-[12.5px] font-medium transition-all ${
                activeTab === 'design'
                  ? 'bg-[#5a0905] text-[#fff9ec] shadow-sm font-semibold'
                  : 'text-[#52392c] hover:text-[#5a0905]'
              }`}
            >
              Artwork Poster
            </button>
            <button
              onClick={() => setActiveTab('print')}
              className={`px-3 py-1 rounded text-[12.5px] font-medium transition-all ${
                activeTab === 'print'
                  ? 'bg-[#5a0905] text-[#fff9ec] shadow-sm font-semibold'
                  : 'text-[#52392c] hover:text-[#5a0905]'
              }`}
            >
              Print-Ready Flyer (Crisp Typography)
            </button>
          </div>

          <div className="flex items-center gap-2">
            {activeTab === 'design' ? (
              <a
                href="/images/brand-poster.jpg"
                download="Nalinas_Kai_Ruchi_Poster.jpg"
                className="inline-flex items-center gap-1.5 bg-[#d8a83e] hover:bg-[#e4b54c] text-[#2b1710] px-3.5 py-1.5 rounded text-[12px] font-semibold transition-all shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Poster Image</span>
              </a>
            ) : (
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 bg-[#5a0905] hover:bg-[#420b08] text-[#fff9ec] px-3.5 py-1.5 rounded text-[12px] font-semibold transition-all shadow-sm"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save as PDF</span>
              </button>
            )}
          </div>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1 flex justify-center bg-[#2b1710]/10">
          
          {activeTab === 'design' ? (
            /* Tab 1: Rendered High-Res Poster Image */
            <div className="relative max-w-lg w-full bg-[#3a0705] rounded-md overflow-hidden shadow-2xl border-2 border-[#d8a83e]/50">
              <img
                src="/images/brand-poster.jpg"
                alt="Nalina's Kai Ruchi Brand Poster"
                className="w-full h-auto object-contain block"
              />
            </div>
          ) : (
            /* Tab 2: Crisp Vector HTML/CSS Printable Poster */
            <div 
              id="printable-poster"
              className="w-full max-w-[620px] bg-[#fbf7ee] border-[6px] border-[#5a0905] outline outline-2 outline-[#d8a83e] p-6 sm:p-8 rounded-sm shadow-xl text-center space-y-4 text-[#2b1710] relative"
            >
              {/* Inner Decorative Border */}
              <div className="border border-[#d8a83e]/80 p-5 rounded-sm relative">
                
                {/* Corner flourishes */}
                <div className="absolute top-2 left-2 text-[#d8a83e]">
                  <BotanicalLeaf className="w-6 h-6 rotate-[-45deg]" />
                </div>
                <div className="absolute top-2 right-2 text-[#d8a83e]">
                  <BotanicalLeaf className="w-6 h-6 rotate-[45deg]" />
                </div>

                {/* Eyebrow */}
                <div className="text-[11px] font-sans tracking-[0.25em] text-[#d8a83e] uppercase font-bold">
                  — HOMEMADE • TRADITIONAL • BRAHMINS CUISINE —
                </div>

                {/* Brand Name */}
                <h1 className="font-serif text-[38px] sm:text-[44px] font-bold text-[#5a0905] leading-none mt-2 tracking-tight">
                  Nalina’s Kai Ruchi
                </h1>

                {/* Tagline */}
                <p className="font-serif text-[17px] text-[#35170d] italic mt-1.5 font-medium">
                  "Bringing Brahmins tradition to your table"
                </p>

                {/* Kannada Line */}
                <p className="font-['Noto_Serif_Kannada',serif] text-[17px] text-[#5a0905] font-semibold mt-1">
                  ನಮ್ಮ ಮನೆ ಅಡುಗೆ, ನಿಮ್ಮ ಮನೆಗೆ...
                </p>

                {/* Center Image */}
                <div className="my-4 rounded overflow-hidden border border-[#d8a83e]/60 shadow-md h-52 sm:h-56 relative bg-black/10">
                  <img
                    src="/images/hero-banner.jpg"
                    alt="Karnataka Traditional Food"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#200705]/70 via-transparent to-transparent flex items-end p-3">
                    <span className="text-[#fff9ec] font-serif text-[14px] italic">
                      Freshly ground masalas & authentic Brahmin savouries
                    </span>
                  </div>
                </div>

                {/* Price List Table (From official price chart) */}
                <div className="bg-[#fffdf9] rounded border border-[#e8dbc4] overflow-hidden my-3 text-left">
                  <div className="bg-[#5a0905] text-[#fff9ec] px-3 py-1.5 font-serif font-semibold text-[12.5px] flex items-center justify-between">
                    <span>Traditional Products Price List</span>
                    <span className="text-[11px] text-[#d8a83e] font-sans font-normal">Authentic Brahmin Preparation</span>
                  </div>
                  <table className="w-full text-[11.5px] border-collapse">
                    <thead>
                      <tr className="border-b border-[#e8dbc4] bg-[#f8f2e6]/70 text-[#35170d] font-semibold font-serif">
                        <th className="py-1 px-2.5 text-left">Product</th>
                        <th className="py-1 px-2 text-center">100 g</th>
                        <th className="py-1 px-2 text-center">200 g</th>
                        <th className="py-1 px-2 text-center">500 g</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f0e6d6] text-[#52392c]">
                      <tr>
                        <td className="py-1 px-2.5 font-medium text-[#2b1710]">🍆 Vangi Bath Powder</td>
                        <td className="py-1 px-2 text-center">₹90</td>
                        <td className="py-1 px-2 text-center">₹170</td>
                        <td className="py-1 px-2 text-center font-semibold text-[#5a0905]">₹400</td>
                      </tr>
                      <tr>
                        <td className="py-1 px-2.5 font-medium text-[#2b1710]">🍧 Bisi Bele Bath Powder</td>
                        <td className="py-1 px-2 text-center">₹100</td>
                        <td className="py-1 px-2 text-center">₹190</td>
                        <td className="py-1 px-2 text-center font-semibold text-[#5a0905]">₹450</td>
                      </tr>
                      <tr>
                        <td className="py-1 px-2.5 font-medium text-[#2b1710]">🌿 Puliogare Powder</td>
                        <td className="py-1 px-2 text-center">₹90</td>
                        <td className="py-1 px-2 text-center">₹170</td>
                        <td className="py-1 px-2 text-center font-semibold text-[#5a0905]">₹400</td>
                      </tr>
                      <tr>
                        <td className="py-1 px-2.5 font-medium text-[#2b1710]">🥣 Puliogare Gojju</td>
                        <td className="py-1 px-2 text-center">₹80</td>
                        <td className="py-1 px-2 text-center">₹150</td>
                        <td className="py-1 px-2 text-center font-semibold text-[#5a0905]">₹350</td>
                      </tr>
                      <tr>
                        <td className="py-1 px-2.5 font-medium text-[#2b1710]">🥘 Sambar Pudi / Huli Pudi</td>
                        <td className="py-1 px-2 text-center">₹90</td>
                        <td className="py-1 px-2 text-center">₹170</td>
                        <td className="py-1 px-2 text-center font-semibold text-[#5a0905]">₹400</td>
                      </tr>
                      <tr>
                        <td className="py-1 px-2.5 font-medium text-[#2b1710]">🍅 Rasam Powder / Saarina Pudi</td>
                        <td className="py-1 px-2 text-center">₹90</td>
                        <td className="py-1 px-2 text-center">₹170</td>
                        <td className="py-1 px-2 text-center font-semibold text-[#5a0905]">₹400</td>
                      </tr>
                      <tr>
                        <td className="py-1 px-2.5 font-medium text-[#2b1710]">🍥 Chakkuli</td>
                        <td className="py-1 px-2 text-center">₹90</td>
                        <td className="py-1 px-2 text-center">₹170</td>
                        <td className="py-1 px-2 text-center font-semibold text-[#5a0905]">₹400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center justify-around py-3 text-[11px] text-[#35170d] font-semibold">
                  <span>✦ 100% Homemade</span>
                  <span>✦ Pure Cow Ghee</span>
                  <span>✦ No Preservatives</span>
                  <span>✦ Small Batches</span>
                </div>

                {/* Footer Call to Action */}
                <div className="bg-[#4a0d09] text-[#fff9ec] p-3 rounded flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#d8a83e]">Order for Delivery</div>
                    <div className="text-[16px] font-bold font-serif flex items-center gap-1.5">
                      <Phone className="w-4 h-4 fill-current text-[#25D366]" />
                      <span>+91 9980819355</span>
                    </div>
                  </div>

                  <div className="text-right sm:text-left text-[11.5px] border-t sm:border-t-0 sm:border-l border-[#d8a83e]/30 sm:pl-3">
                    <div className="flex items-center gap-1 text-[#d8a83e]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="font-semibold">A6 RESIDENCY</span>
                    </div>
                    <span className="text-[#f8f0df]/80">Bengaluru, Karnataka</span>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-[#fbf7ee] px-6 py-2.5 border-t border-[#e8dbc4] flex items-center justify-between text-[12px] text-[#6d5142]">
          <span>Ideal for kitchen displays, festive announcements, WhatsApp status & Instagram stories.</span>
          <button
            onClick={onClose}
            className="text-[#5a0905] font-semibold hover:underline"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
