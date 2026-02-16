import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatorOnboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 8;

  const handleGetStarted = () => {
    navigate('/role-selection');
  };

  const handleSkip = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full flex flex-col min-[950px]:flex-row">
      {/* Character Image - Top on mobile, Left side on desktop */}
      <div className="w-full min-[950px]:w-[46%] relative overflow-hidden flex items-center justify-center h-[50vh] min-[950px]:h-auto">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8E8E8] via-[#E0E0E0] to-[#D8D8D8]"></div>
        <img
          src="/onboarding-character.png"
          alt="Ultra Hustle Character"
          className="relative z-10 w-full h-full object-cover object-top"
        />
      </div>

      {/* Welcome Content - Bottom on mobile with curved overlap, Right side on desktop */}
      <div className="w-full min-[950px]:w-[70%] bg-[#E0E0E0] min-[950px]:bg-gradient-to-br min-[950px]:from-[#E8E8E8] min-[950px]:via-[#E0E0E0] min-[950px]:to-[#D8D8D8] rounded-t-[50px] min-[950px]:rounded-none -mt-16 min-[950px]:mt-0 p-6 pt-8 min-[950px]:p-12 flex flex-col justify-center items-center relative overflow-hidden min-h-[60vh] min-[950px]:min-h-screen z-20">
        {/* Animated Gradient Glow - Bottom Left */}
        <div
          className="hidden min-[950px]:block absolute w-[500px] h-[500px] rounded-full pointer-events-none z-0"

        ></div>

        {/* Animated Gradient Glow - Top Right */}
        <div
          className="hidden min-[950px]:block absolute w-[400px] h-[400px] rounded-full pointer-events-none z-0"

        ></div>

        {/* Animated Gradient Glow - Center */}
        <div
          className="hidden min-[950px]:block absolute w-[350px] h-[350px] rounded-full pointer-events-none z-0"

        ></div>

        {/* Content Card Container */}
        <div className="bg-white/40 min-[950px]:bg-white/40 backdrop-blur-xl rounded-[24px] min-[950px]:rounded-[30px] shadow-xl p-8 min-[950px]:p-16 w-[90%] min-[950px]:w-[95%] h-auto min-[950px]:h-[90%] max-w-none relative z-10 border border-[#CEFF1B] min-[950px]:border min-[950px]:border-[#CEFF1B] flex flex-col justify-center items-stretch">
          {/* Top Content */}
          <div className="text-center max-w-[600px] mx-auto mt-2 min-[950px]:mt-8">
            <h2 className="text-2xl min-[950px]:text-5xl font-bold font-roboto text-gray-800 mb-2 min-[950px]:mb-4">Welcome To</h2>
            <div className="mb-1 min-[950px]:mb-4">
              <img
                src="/logo.png"
                alt="Ultra Hustle"
                className="h-16 min-[950px]:h-24 mx-auto object-contain "
              />
            </div>
          </div>

          {/* Divider */}
          <div className="w-full flex-shrink-0 self-stretch" style={{ height: '2px', backgroundColor: '#000000', marginTop: '12px', marginBottom: '24px' }}></div>

          {/* Bottom Content */}
          <div className="text-center max-w-[600px] mx-auto">
            <p className="text-gray-800 text-sm min-[950px]:text-2xl mb-6 min-[950px]:mb-14">Let's personalize your workspace.</p>

            <div className="flex flex-row gap-2 min-[950px]:gap-6 justify-center mb-6 min-[950px]:mb-14">
              <button
                onClick={handleGetStarted}
                className="px-5 min-[950px]:px-12 py-2.5 min-[950px]:py-4 rounded-lg min-[950px]:rounded-xl bg-[#CEFF1B] border border-black min-[950px]:border-2 text-black font-sm min-[950px]:font-[400] text-sm min-[950px]:text-2xl hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_#CEFF1B]"
              >
                Get Started
              </button>

            </div>

            {/* Step Indicators */}
            <div className="flex justify-center items-center gap-2 min-[950px]:gap-3.5">
              {[...Array(totalSteps)].map((_, index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 min-[950px]:w-3.5 min-[950px]:h-3.5 rounded-full transition-all duration-300 ${index === currentStep
                    ? 'bg-[#C3FF00] w-3.5 h-3.5 min-[950px]:w-5 min-[950px]:h-5 shadow-md shadow-[#C3FF00]/40'
                    : 'bg-[#5C5C5C] hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
