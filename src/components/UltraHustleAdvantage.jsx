import React from 'react';

export default function UltraHustleAdvantage() {
  return (
    <section className="relative container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 z-10">
      {/* Main card */}
      <div className="relative bg-transparent font-roboto backdrop-blur-xl border-2 border-gray-300 rounded-3xl p-8 md:p-12 shadow-2xl overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left content spans cols 1-7 on lg */}
          <div className="lg:col-span-7 col-span-1 z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 mb-2">
              The Ultra Hustle Advantage
            </h2>
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mt-4 mb-6">
              One Home for Every Ambition
            </h3>

            <ul className="space-y-4 text-gray-700 font-medium text-base md:text-lg ml-4 mb-6">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 bg-gray-600 rounded-full shrink-0"></span>
                <span>
                  Seamless Collaboration: Chat, share files, and track milestones all in one thread.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 bg-gray-600 rounded-full shrink-0"></span>
                <span>
                  Universal Dashboard: Manage projects, payments, and growth at a glance.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 bg-gray-600 rounded-full shrink-0"></span>
                <span>
                  Instant Payouts: Get paid globally within minutes of approval.
                </span>
              </li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-gray-800">
              Ultra Hustle doesn’t replace your work.<br />
              It amplifies it.
            </h3>
          </div>

          {/* Spacer column for overlap on large screens */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right area: character image container (spans cols 9-12 on lg) */}
          <div className="lg:col-span-4 col-span-1 relative flex items-center justify-center">
            {/* Desktop / large screens: absolutely positioned to slightly overlap card */}
            <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 pointer-events-none z-20 w-[40%] max-w-[420px]">
              <img
                src="/advantage-character.png"
                alt="UltraHustle Advantage Character"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Tablet: center-right, smaller */}
            <div className="hidden md:block lg:hidden w-1/2 max-w-[320px]">
              <img
                src="/advantage-character.png"
                alt="UltraHustle Advantage Character"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Mobile: below content (visible on small screens) */}
            <div className="block lg:hidden w-full flex justify-center mt-6">
              <img
                src="/advantage-character.png"
                alt="UltraHustle Advantage Character"
                className="w-11/12 max-w-[520px] h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Who We're Building For */}
      <div className="mt-12 md:mt-20 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 mb-8">
          Who We're Building For
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* For Creators */}
          <div className="bg-transparent backdrop-blur-xl border-2 border-gray-300 p-6 md:p-10 rounded-2xl shadow-lg">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">For Creators:</h3>
            <p className="text-gray-700 font-medium leading-relaxed">
              You’re done chasing opportunities. Now, opportunities chase you. Get discovered,
              get respected, and get paid what you deserve — on your terms.
            </p>
          </div>

          {/* For Clients */}
          <div className="bg-transparent backdrop-blur-xl border-2 border-gray-300 p-6 md:p-10 rounded-2xl shadow-lg">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">For Clients:</h3>
            <p className="text-gray-700 font-medium leading-relaxed">
              You deserve creators who deliver — without risk or delay. Hire verified talent,
              track progress in real time, and pay only when satisfied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
