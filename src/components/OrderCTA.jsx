import React from 'react';
import { Phone, MapPin, ArrowRight } from 'lucide-react';

export const OrderCTA = ({ lang }) => {
  return (
    <section id="order" className="w-full bg-[#fbf7ee] border-t border-b border-[#e8dbc4] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* LEFT: Heading & Description */}
          <div className="text-left w-full lg:w-auto">
            <div className="flex flex-wrap items-baseline gap-2">
              <h2 className="font-serif text-[24px] sm:text-[26px] font-bold text-[#2b1710]">
                Order from Us
              </h2>
              <span className="font-['Noto_Serif_Kannada',serif] text-[20px] font-semibold text-[#5a0905]">
                ನಮ್ಮಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ
              </span>
            </div>
            <p className="text-[13.5px] text-[#6d5142] font-sans mt-0.5">
              Place your order easily via WhatsApp or call.
            </p>
          </div>

          {/* MIDDLE: Phone and Location */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 w-full lg:w-auto">
            
            {/* Phone Item */}
            <a 
              href="https://wa.me/919980819355?text=Hello%20Nalina's%20Kai%20Ruchi,%20I%20would%20like%20to%20place%20an%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group text-left"
            >
              <div className="w-9 h-9 rounded-full bg-[#35170d] text-[#fff9ec] flex items-center justify-center flex-shrink-0 group-hover:bg-[#5a0905] transition-colors">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              <div>
                <div className="font-serif text-[15px] font-bold text-[#2b1710] group-hover:text-[#5a0905] transition-colors">
                  +91 9980819355
                </div>
                <div className="text-[12px] text-[#6d5142]">
                  (Call / WhatsApp)
                </div>
              </div>
            </a>

            {/* Subtle Divider */}
            <div className="h-9 w-[1px] bg-[#d8dbc4] hidden sm:block" />

            {/* Location Item */}
            <a 
              href="https://maps.google.com/?q=Bengaluru,Karnataka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group text-left"
            >
              <div className="w-9 h-9 rounded-full bg-[#35170d] text-[#fff9ec] flex items-center justify-center flex-shrink-0 group-hover:bg-[#5a0905] transition-colors">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="font-serif text-[15px] font-bold text-[#2b1710]">
                  Bengaluru, Karnataka
                </div>
                <div className="text-[12px] text-[#6d5142] inline-flex items-center gap-1 group-hover:text-[#5a0905]">
                  <span>View on Google Maps</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </a>

          </div>

          {/* RIGHT: Brush Stamp Badge "Support Homemade Support Local ♡" */}
          <div className="flex-shrink-0">
            <div className="relative transform rotate-[-2deg] hover:rotate-0 transition-transform duration-200">
              <img
                src="/images/support-local-badge.png"
                alt="Support Homemade Support Local"
                className="h-14 sm:h-16 w-auto object-contain drop-shadow"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
