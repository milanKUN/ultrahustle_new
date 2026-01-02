import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import {
  MobileHero,
  RecommendedSection,
  WhyChooseSection,
  WebAppDesignSection,
  MobileFooter
} from '../components/MobileHome';

export default function MobileHome() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Service');

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden relative">
      <Navbar />
      
      {/* Global Animated Gradient Glows */}
      {/* Glow 1 - Top area */}
      <div 
        className="fixed w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #CEFF1B 0%, #CEFF1B 30%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 5,
          animation: 'glow-center-bottomleft 6s ease-in-out infinite',
        }}
      ></div>

      {/* Glow 2 - Moving glow */}
      <div 
        className="fixed w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #CEFF1B 0%, #CEFF1B 30%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 5,
          animation: 'glow-center-topright 6s ease-in-out infinite',
        }}
      ></div>

      {/* Glow 3 - Bottom Left to Center to Right */}
      <div 
        className="fixed w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #CEFF1B 0%, #CEFF1B 30%, transparent 70%)',
          filter: 'blur(70px)',
          zIndex: 5,
          animation: 'glow-bottomleft-center-right 8s steps(1) infinite',
        }}
      ></div>
      
      {/* Main Content */}
      <main className="pt-20 relative z-10">
        <MobileHero 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <RecommendedSection />
        <WhyChooseSection />
        <WebAppDesignSection />
        <MobileFooter />
      </main>
    </div>
  );
}
