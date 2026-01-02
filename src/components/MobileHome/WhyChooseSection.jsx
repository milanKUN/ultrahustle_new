import React from 'react';

const platformFeatures = [
  {
    id: 1,
    title: 'Sell Products',
    description: 'Create and sell digital products with automated payments and instant delivery.'
  },
  {
    id: 2,
    title: 'Host Events',
    description: 'Run webinars and workshops with integrated booking, ticketing, and payments.'
  },
  {
    id: 3,
    title: 'Teach Courses',
    description: 'Host and monetize courses with video hosting and student management.'
  },
  {
    id: 4,
    title: 'Launch Services',
    description: 'Offer freelance services with built-in proposals, contracts, and project management tools.'
  },
  {
    id: 5,
    title: 'Build Teams',
    description: 'Form flexible creator teams, assign tasks, and track progress seamlessly.',
    fullWidth: true
  }
];

function FeatureCard({ feature }) {
  return (
    <div 
      className={`rounded-xl p-4 shadow-sm border border-[#B5B5B5] bg-gradient-to-b from-[#DDDDDD] to-[#EFEFEF] ${feature.fullWidth ? 'col-span-2' : ''}`}
    >
      <h4 className="font-roboto text-[13px] font-semibold text-gray-600 mb-2">{feature.title}</h4>
      <p className="font-roboto text-[11px] font-normal leading-relaxed text-gray-700 m-0">{feature.description}</p>
    </div>
  );
}

export default function WhyChooseSection() {
  return (
    <section className="relative px-5 py-8 pb-10">
      {/* Animated Gradient Glow - Bottom Right (Pulsing) */}
      <div 
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #CEFF1B 0%, #CEFF1B 30%, transparent 70%)',
          filter: 'blur(60px)',
          bottom: '-50%',
          right: '-20%',
          zIndex: 20,
          animation: 'glow-bottomright-pulse 4s ease-in-out infinite',
        }}
      ></div>

      {/* Background gradient */}
      <div className="absolute inset-0 z-0"></div>
      
      <div className="relative z-10">
        <h2 className="font-roboto text-xl sm:text-xl font-bold text-gray-500 mb-2">Why Choose Ultra Hustle?</h2>
        <h3 className="font-roboto text-xl sm:text-2xl font-semibold text-gray-900 mb-2">We provide All-in-One Solution</h3>
        <p className="font-roboto text-[13px] font-normal leading-relaxed text-gray-700 mb-6">
          Imagine a space where everything you need lives under one roof. Ultra Hustle unifies every aspect of your creator or client journey into a single, intuitive system
        </p>
        
        <div className="grid grid-cols-2 gap-3">
          {platformFeatures.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
