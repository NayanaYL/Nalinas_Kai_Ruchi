import React from 'react';

// Delicate botanical twig with leaves (matching hero and kitchen card)
export const BotanicalLeaf = ({ className = "w-10 h-10 text-[#d8a83e]", strokeWidth = 1.2 }) => (
  <svg
    viewBox="0 0 100 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Central curved stem */}
    <path d="M 85 110 C 60 80, 45 45, 30 10" />
    
    {/* Leaves branching off */}
    <path d="M 30 10 C 25 15, 20 28, 38 25 C 42 24, 38 15, 30 10 Z" />
    <path d="M 37 32 C 15 28, 12 45, 30 50 C 40 48, 42 38, 37 32 Z" />
    <path d="M 46 43 C 65 32, 75 42, 60 55 C 50 56, 45 48, 46 43 Z" />
    <path d="M 48 60 C 25 58, 22 75, 42 78 C 50 75, 52 65, 48 60 Z" />
    <path d="M 58 68 C 78 60, 85 75, 70 85 C 60 84, 56 75, 58 68 Z" />
    <path d="M 64 88 C 45 88, 42 102, 60 104 C 68 102, 70 93, 64 88 Z" />
  </svg>
);

// Traditional 4-petal flower kolam motif divider
export const KolamDivider = ({ className = "w-12 h-6 text-[#d8a83e]" }) => (
  <div className="flex items-center justify-center gap-3">
    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#d8a83e]/50" />
    <svg viewBox="0 0 50 25" fill="none" className={className} stroke="currentColor" strokeWidth="1.2">
      {/* Central diamond */}
      <polygon points="25,5 32,12.5 25,20 18,12.5" stroke="currentColor" />
      <circle cx="25" cy="12.5" r="2.5" fill="currentColor" />
      
      {/* Side petals */}
      <path d="M 18 12.5 C 10 7, 5 12.5, 0 12.5 C 5 12.5, 10 18, 18 12.5" />
      <path d="M 32 12.5 C 40 7, 45 12.5, 50 12.5 C 45 12.5, 40 18, 32 12.5" />
      
      {/* Top and bottom subtle flourish */}
      <path d="M 25 5 C 21 0, 29 0, 25 5" />
      <path d="M 25 20 C 21 25, 29 25, 25 20" />
    </svg>
    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#d8a83e]/50" />
  </div>
);

// Traditional Pot / Brass Handi Icon
export const TraditionalPotIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Lid handle */}
    <path d="M 12 3 L 12 5" />
    {/* Lid curved dome */}
    <path d="M 8 7 C 8 5, 16 5, 16 7" />
    {/* Pot rim */}
    <path d="M 6 8 L 18 8" />
    {/* Pot round bulbous body */}
    <path d="M 6 8 C 3 13, 5 19, 10 20 L 14 20 C 19 19, 21 13, 18 8" />
    {/* Base */}
    <path d="M 9 20 L 15 20" />
  </svg>
);
