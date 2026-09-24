import React from 'react';
import { Leaf, Home, Heart, Sprout } from 'lucide-react';
import { TraditionalPotIcon, KolamDivider } from './Decorations';

export const FeatureStrip = ({ lang }) => {
  const features = [
    {
      icon: <Leaf className="w-7 h-7 text-[#5a0905]" strokeWidth={1.4} />,
      title: "Pure Ingredients",
      kannada: "ಶುದ್ಧ ಪದಾರ್ಥಗಳು"
    },
    {
      icon: <Home className="w-7 h-7 text-[#5a0905]" strokeWidth={1.4} />,
      title: "Homemade with Care",
      kannada: "ಮನೆಯಲ್ಲಿ ತಯಾರಿಸಿದಂತೆ"
    },
    {
      icon: <TraditionalPotIcon className="w-7 h-7 text-[#5a0905]" />,
      title: "Traditional Recipes",
      kannada: "ಪಾರಂಪರಿಕ ಅಡುಗೆ"
    },
    {
      icon: <Heart className="w-7 h-7 text-[#5a0905]" strokeWidth={1.4} />,
      title: "Small Batches",
      kannada: "ಕಡಿಮೆ ತಯಾರಿಕೆ"
    },
    {
      icon: <Sprout className="w-7 h-7 text-[#5a0905]" strokeWidth={1.4} />,
      title: "No Preservatives",
      kannada: "ರಾಸಾಯನಿಕ ಸಂರಕ್ಷಕಗಳಿಲ್ಲ"
    }
  ];

  return (
    <div className="w-full bg-[#fbf7ee] border-b border-[#e8dbc4]/70 pt-7 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Five evenly spaced feature items */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 items-center justify-between">
          {features.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center px-3 py-2 transition-transform duration-200 hover:-translate-y-0.5 ${
                index !== features.length - 1 ? 'md:border-r md:border-[#e2d2ba]/80' : ''
              }`}
            >
              <div className="mb-2 text-[#5a0905]">
                {item.icon}
              </div>
              <h3 className="font-serif text-[14.5px] sm:text-[15.5px] font-semibold text-[#2b1710] leading-snug">
                {item.title}
              </h3>
              <p className="font-['Noto_Serif_Kannada',serif] text-[12.5px] text-[#6d5142] mt-0.5">
                {item.kannada}
              </p>
            </div>
          ))}
        </div>

        {/* Traditional Kolam / Flower Divider Motif */}
        <div className="mt-6 flex justify-center">
          <KolamDivider className="w-8 h-4 text-[#d8a83e]" />
        </div>

      </div>
    </div>
  );
};
