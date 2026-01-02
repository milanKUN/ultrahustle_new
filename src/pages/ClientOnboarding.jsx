import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ClientOnboarding() {
  const navigate = useNavigate();
  const [currentStep] = useState(0);
  const totalSteps = 8;

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">

      {/* 🔼 TOP IMAGE (Mobile) / LEFT IMAGE (Desktop) */}
      <div className="w-full h-[40vh] md:h-auto md:w-[30%] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8E8E8] via-[#E0E0E0] to-[#D8D8D8]" />
        <img
          src="/onboarding-character.jpg"
          alt="Ultra Hustle Character"
          className="relative z-10 w-full h-full object-cover object-top"
        />
      </div>

      {/* 🔽 CONTENT / FORM */}
      <div className=" w-full md:w-[70%] bg-gradient-to-br from-[#E8E8E8] via-[#E0E0E0] to-[#D8D8D8] p-6 md:p-12 flex justify-center items-center relative">

        {/* Card */}
        <div className=" bg-white/30 backdrop-blur-xl rounded-[30px] shadow-xl p-6 md:p-16 w-full max-w-4xl border-4 border-white/50">

          {/* Top */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-medium text-gray-800 mb-4">
              Welcome To
            </h2>
            <img
              src="/logo.png"
              alt="Ultra Hustle"
              className="h-16 md:h-24 mx-auto"
            />
          </div>

          <div className="w-full h-[3px] bg-black mb-8" />

          {/* Bottom */}
          <div className="text-center">
            <p className="text-gray-600 text-lg md:text-2xl mb-10">
              Let's personalize your workspace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button
                onClick={() => navigate('/role-selection')}
                className="px-10 py-4 rounded-xl bg-[#CEFF1B] border-2 border-black text-black font-semibold text-xl hover:bg-gray-100 transition"
              >
                Get Started
              </button>

              <button
                onClick={() => navigate('/')}
                className="px-10 py-4 rounded-xl bg-transparent border-2 border-black text-gray-600 font-semibold text-xl hover:bg-gray-100 transition"
              >
                Skip for now
              </button>
            </div>

            {/* Steps */}
            <div className="flex justify-center gap-3">
              {[...Array(totalSteps)].map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all ${
                    i === currentStep
                      ? 'w-5 h-5 bg-[#C3FF00]'
                      : 'w-3.5 h-3.5 bg-gray-500'
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
