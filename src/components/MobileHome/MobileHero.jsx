import React from 'react';
import { Search } from 'lucide-react';

const categories = [
  { id: 1, name: 'Service', active: true },
  { id: 2, name: 'Digital Products', active: false },
  { id: 3, name: 'Teams', active: false },
  { id: 4, name: 'Courses', active: false },
  { id: 5, name: 'Webinars', active: false }
];

export default function MobileHero({ searchQuery, setSearchQuery, activeCategory, setActiveCategory }) {
  return (
    <section className="relative px-5 py-6 pb-8">
      <div className="relative z-10">
        {/* Main Heading */}
        <h1 className="font-poppins text-[36px] sm:text-[32px] font-bold leading-tight text-gray-500 mb-4">
          One Home for<br />
          Your <span className="underline decoration-lime-300">Whole Hustle</span>
        </h1>
        
        {/* Create Subtitle */}
        <h2 className="mb-4 font-roboto text-2xl sm:text-4xl inline-block font-bold bg-gradient-to-b from-[#CEFF1B] to-[#585858] bg-clip-text text-transparent">Create</h2>
        
        {/* Description */}
        <p className="font-roboto text-sm font-medium leading-relaxed text-gray-800 mb-6 max-w-[300px]">
          All from one powerful platform designed for creators and clients who are tired of chaos.
        </p>
        
        {/* Search Bar */}
        <div className="mb-5">
          <div className="flex items-center bg-transparent border border-gray-200 rounded-xl px-4 py-3 shadow-sm transition-all duration-200 hover:bg-white hover:border-[#CEFF1B] hover:shadow-[0_0_15px_rgba(206,255,27,0.5)] focus-within:bg-white focus-within:border-[#CEFF1B] focus-within:shadow-[0_0_15px_rgba(206,255,27,0.5)]">
            <input
              type="text"
              placeholder="Search here"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-none outline-none font-roboto text-[15px] text-center text-gray-800 bg-transparent placeholder:text-gray-400"
            />
            <Search className="text-gray-400 ml-3" size={20} />
          </div>
        </div>
        
        {/* Category Pills */}
        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-2.5 py-1 rounded-full border text-[10px] font-medium backdrop-blur-sm transition-colors
                ${activeCategory === category.name 
                  ? 'bg-white text-gray-800 border-white/60' 
                  : 'border-white bg-gradient-to-b from-[#EFEFEF] to-[#D5D5D6] text-gray-800 hover:bg-white'
                }`}
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
