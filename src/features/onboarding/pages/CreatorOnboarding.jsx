import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatorOnboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 7;

  const stepPaths = [
    "/onboarding",
    "/role-selection",
    "/creator-work-type-selection",
    "/creator-goals-selection",
    "/creator-needs",
    "/creator-setup-workspace",
    "/creator-profile-setup"
  ];


  const handleGetStarted = () => {
    navigate('/role-selection');
  };


  const handleSkip = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full flex flex-col min-[950px]:flex-row">
      {/* Character Image - Top on mobile, Left side on desktop */}
      {/* Responsive Layout Wrapper (REQUIRED) */}
      <div className="w-full min-h-[100svh] overflow-hidden flex flex-col min-[950px]:flex-row">

        {/* Character Image */}
        <div
          className="
      relative w-full
      h-[38svh] min-[390px]:h-[40svh] sm:h-[42svh] md:h-[44svh]
      min-[950px]:h-auto min-[950px]:basis-[46%] min-[950px]:shrink-0
      overflow-hidden flex items-center justify-center
    "
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#E8E8E8] via-[#E0E0E0] to-[#D8D8D8]" />
          <img
            src="/onboarding-character.png"
            alt="Ultra Hustle Character"
            className="relative z-10 w-full h-full object-cover object-top"
          />
        </div>

        {/* Welcome Content */}
        <div
          className="
      w-full flex-1 min-h-0
      bg-[#E0E0E0]
      min-[950px]:bg-gradient-to-br min-[950px]:from-[#E8E8E8] min-[950px]:via-[#E0E0E0] min-[950px]:to-[#D8D8D8]
      rounded-t-[44px] min-[950px]:rounded-none
      -mt-10 min-[390px]:-mt-12 min-[950px]:mt-0
      px-4 pt-7 pb-6 sm:px-6 sm:pt-8 sm:pb-8 min-[950px]:p-12
      flex flex-col items-center justify-start min-[950px]:justify-center
      overflow-y-auto
      relative z-20
    "
        >
          {/* Content Card */}
          <div
            className="
        w-full
        max-w-[min(92vw,620px)]
        min-[950px]:max-w-[min(52vw,940px)]
        bg-white/40 backdrop-blur-xl
        rounded-[22px] min-[950px]:rounded-[30px]
        shadow-xl border border-[#CEFF1B]
        px-[clamp(16px,4vw,32px)] py-[clamp(18px,4.5vw,40px)]
        min-[950px]:px-[clamp(40px,3.4vw,64px)] min-[950px]:py-[clamp(40px,3.4vw,64px)]
      "
          >
            {/* Top Content */}
            <div className="text-center mx-auto">
              <h2 className="font-roboto font-bold text-gray-800 leading-tight text-[clamp(22px,5vw,34px)] min-[950px]:text-[clamp(40px,3.4vw,56px)]">
                Welcome To
              </h2>

              <div className="mt-2 min-[950px]:mt-3">
                <img
                  src="/logo.png"
                  alt="Ultra Hustle"
                  className="mx-auto object-contain h-[clamp(44px,10vw,64px)] min-[950px]:h-[clamp(80px,6vw,96px)]"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="h-[2px] w-full bg-black my-4 min-[950px]:my-8" />

            {/* Bottom Content */}
            <div className="text-center mx-auto">
              <p className="text-gray-800 leading-relaxed text-[clamp(13px,3.4vw,16px)] min-[950px]:text-[clamp(20px,1.6vw,28px)] mb-5 min-[950px]:mb-12">
                Let's personalize your workspace.
              </p>

              <div className="flex justify-center mb-6 min-[950px]:mb-12">
                <button
                  onClick={handleGetStarted}
                  className="
              bg-[#CEFF1B] border border-black min-[950px]:border-2
              rounded-lg min-[950px]:rounded-xl
              px-[clamp(18px,4.5vw,28px)] py-[clamp(10px,2.8vw,14px)]
              min-[950px]:px-[clamp(40px,3vw,56px)] min-[950px]:py-[clamp(14px,1.3vw,18px)]
              text-black font-[400]
              text-[clamp(13px,3.3vw,16px)] min-[950px]:text-[clamp(22px,1.8vw,30px)]
              hover:bg-white hover:text-gray-900 transition-all duration-300
              shadow-sm hover:shadow-[0_0_15px_#CEFF1B]
            "
                >
                  Get Started
                </button>
              </div>

              {/* Step Indicators */}
              <div className="flex justify-center items-center gap-2 min-[950px]:gap-3.5">
                {[...Array(totalSteps)].map((_, index) =>
                  index <= currentStep ? (
                    <div
                      key={index}
                      onClick={() => index < currentStep && navigate(stepPaths[index])}
                      className={`rounded-full transition-all duration-300
                  ${index === currentStep
                          ? "bg-[#C3FF00] w-5 h-5 min-[950px]:w-6 min-[950px]:h-6 shadow-md shadow-[#C3FF00]/40"
                          : "bg-[#5C5C5C] w-3 h-3 min-[950px]:w-4 min-[950px]:h-4 hover:bg-gray-400 cursor-pointer"
                        }`}
                    />
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
