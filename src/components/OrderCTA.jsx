import React from 'react';
import { Phone, MapPin, ArrowRight, Package, MessageCircle } from 'lucide-react';

export const OrderCTA = ({ lang }) => {
  return (
    <section id="order" className="w-full bg-[#fbf7ee] border-t border-b border-[#e8dbc4] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* TOP ROW: Delivery & Bulk Orders Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Card 1: All-India Delivery */}
          <div className="bg-[#fffdf9] border border-[#e8dbc4] rounded-[6px] p-5 sm:p-6 shadow-sm flex items-start gap-4 text-left transition-all hover:border-[#d8a83e]/70">
            <div className="w-12 h-12 rounded-full bg-[#4a0d09] text-[#d8a83e] flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
              <span className="text-2xl">🇮🇳</span>
            </div>
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-serif text-[17.5px] sm:text-[18.5px] font-bold text-[#2b1710]">
                  {lang === 'en' ? 'All-India Delivery Available' : 'ದೇಶಾದ್ಯಂತ ಡೆಲಿವರಿ ಲಭ್ಯವಿದೆ'}
                </h3>
                <span className="bg-[#d8a83e]/20 text-[#5a0905] text-[10.5px] font-semibold px-2 py-0.5 rounded-full border border-[#d8a83e]/40">
                  Pan-India Safe Shipping
                </span>
              </div>
              <p className="text-[13px] text-[#6d5142] font-sans leading-relaxed">
                {lang === 'en' 
                  ? 'Enjoy our homemade traditional delicacies delivered across India in premium airtight packaging, retaining complete aroma and freshness.'
                  : 'ನಮ್ಮ ಪಾರಂಪರಿಕ ಮನೆ ಅಡುಗೆಯ ರುಚಿ ಮತ್ತು ಪರಿಮಳವನ್ನು ದೇಶಾದ್ಯಂತ ನಿಮ್ಮ ಮನೆಬಾಗಿಲಿಗೆ ತಲುಪಿಸಲಾಗುತ್ತದೆ.'}
              </p>
            </div>
          </div>

          {/* Card 2: Bulk Orders Accepted (Clickable) */}
          <a
            href="https://wa.me/919980819355?text=Hello%20Nalina's%20Kai%20Ruchi,%20I%20would%20like%20to%20enquire%20about%20a%20bulk%20order%20for%20an%20event/function."
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#fffdf9] border border-[#e8dbc4] hover:border-[#d8a83e] rounded-[6px] p-5 sm:p-6 shadow-sm hover:shadow-md transition-all flex items-start gap-4 text-left"
          >
            <div className="w-12 h-12 rounded-full bg-[#35170d] group-hover:bg-[#5a0905] text-[#d8a83e] flex items-center justify-center flex-shrink-0 shadow-sm transition-colors mt-0.5">
              <Package className="w-6 h-6 text-[#d8a83e]" />
            </div>
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-serif text-[17.5px] sm:text-[18.5px] font-bold text-[#2b1710] group-hover:text-[#5a0905] transition-colors">
                  {lang === 'en' ? 'Bulk Orders Accepted' : 'ಸಗಟು ಆರ್ಡರ್ ಸ್ವೀಕರಿಸಲಾಗುವುದು'}
                </h3>
                <span className="bg-[#5a0905] text-[#fff9ec] text-[10.5px] font-semibold px-2 py-0.5 rounded-full">
                  Events & Festivals
                </span>
              </div>
              <p className="text-[13px] text-[#6d5142] font-sans leading-relaxed">
                {lang === 'en'
                  ? 'Planning an event, function, festival, or special occasion? We accept bulk orders with customized preparation and fresh delivery.'
                  : 'ಹಬ್ಬ, ಮದುವೆ, ಉಪನಯನ, ಪೂಜೆ ಹಾಗೂ ವಿಶೇಷ ಸಮಾರಂಭಗಳಿಗೆ ಶುದ್ಧ ಸಾತ್ವಿಕ ಅಡುಗೆ ಮತ್ತು ತಿಂಡಿಗಳ ಸಗಟು ಆರ್ಡರ್ ನೀಡಬಹುದು.'}
              </p>
              <div className="pt-1.5 flex items-center gap-1.5 text-[12.5px] font-semibold text-[#5a0905] group-hover:text-[#d8a83e] transition-colors">
                <MessageCircle className="w-3.5 h-3.5 fill-current text-[#25D366]" />
                <span>Enquire for Bulk Orders on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>
          </a>

        </div>

        {/* BOTTOM ROW: Order Contact Details Strip */}
        <div className="pt-6 border-t border-[#e8dbc4]/70 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* LEFT: Heading & Description */}
          <div className="text-left w-full lg:w-auto space-y-1">
            <div className="flex flex-wrap items-baseline gap-2">
              <h2 className="font-serif text-[24px] sm:text-[26px] font-bold text-[#2b1710]">
                Order from Us
              </h2>
              <span className="font-['Noto_Serif_Kannada',serif] text-[20px] font-semibold text-[#5a0905]">
                ನಮ್ಮಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ
              </span>
            </div>
            <p className="text-[13.5px] text-[#6d5142] font-sans">
              100% Homemade traditional products • Place your order easily via WhatsApp or call.
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
              <div className="w-10 h-10 rounded-full bg-[#35170d] text-[#fff9ec] flex items-center justify-center flex-shrink-0 group-hover:bg-[#5a0905] transition-colors shadow-sm">
                <Phone className="w-4 h-4 fill-current" />
              </div>
              <div>
                <div className="font-serif text-[15.5px] font-bold text-[#2b1710] group-hover:text-[#5a0905] transition-colors">
                  +91 9980819355
                </div>
                <div className="text-[12px] text-[#6d5142]">
                  (Call / WhatsApp for Orders)
                </div>
              </div>
            </a>

            {/* Subtle Divider */}
            <div className="h-10 w-[1px] bg-[#d8dbc4] hidden sm:block" />

            {/* Location Item */}
            <a 
              href="https://www.google.com/maps/place/A6+RESIDENCY/@12.8809165,77.5559192,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3f2357cfa60b:0x9e289791d0e9e6b!8m2!3d12.8809165!4d77.5584941!16s%2Fg%2F11krcd9vh7?entry=ttu&g_ep=EgoyMDI2MDkyMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              title="A6 Residency, Bengaluru"
              className="flex items-center gap-3 group text-left"
            >
              <div className="w-10 h-10 rounded-full bg-[#35170d] text-[#fff9ec] flex items-center justify-center flex-shrink-0 group-hover:bg-[#5a0905] transition-colors shadow-sm">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="font-serif text-[15.5px] font-bold text-[#2b1710]">
                  Bengaluru, Karnataka
                </div>
                <div className="text-[12px] text-[#6d5142] inline-flex items-center gap-1 group-hover:text-[#5a0905]">
                  <span>A6 Residency • View Map</span>
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
