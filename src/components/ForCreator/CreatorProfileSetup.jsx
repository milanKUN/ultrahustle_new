import React from "react";
import { useNavigate } from "react-router-dom";

export default function CreatorProfileSetup() {
  const navigate = useNavigate();

  const currentStep = 6;
  const totalSteps = 8;

  const handleGetStarted = () => {
    // navigate("/creator-dashboard");
    console.log("Navigate to creator dashboard/profile setup");
  };

  const handleSkip = () => navigate("/");

  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden min-h-screen bg-[#E8E8E8] overflow-hidden">
        {/* 🔼 TOP IMAGE */}
        <div className="relative h-[35vh] w-full overflow-hidden">
          <img
            src="/onboarding-character.jpg"
            alt="Onboarding"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* ⬇️ BOTTOM CARD */}
        <div className="mt-6 px-4 pb-10 relative z-10">
          <div className="bg-[#F1F1EE] rounded-[28px] px-6 py-8 shadow-xl max-w-[360px] mx-auto text-center border border-black/10">
            {/* TITLE */}
            <h1 className="text-[35px] font-bold text-gray-900 mb-3">
              You're all set!
            </h1>

            {/* SUB TEXT */}
            <p className="text-[23px] text-gray-600 leading-relaxed mb-6">
              Complete your profile to boost <br />
              visibility and match accuracy
            </p>

            {/* DIVIDER */}
            <div className="w-full h-[1.5px] bg-black mb-6" />

            {/* SECTION TEXT */}
            <p className="text-[18px] font-medium text-gray-900 mb-6">
              Let’s create your profile
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 justify-center mb-8">
              <button
                className="
            px-6 py-3
            rounded-xl
            bg-[#CEFF1B]
            border-2 border-black
            text-black
            font-semibold
            text-[16px]
            active:scale-95
          "
              >
                Get Started
              </button>

              <button
                className="
            px-6 py-3
            rounded-xl
            border-2 border-gray-400
            text-gray-800
            font-semibold
            text-[16px]
            bg-transparent
            active:scale-95
          "
              >
                Skip for now
              </button>
            </div>

            {/* STEP DOTS */}
            <div className="flex justify-center gap-2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full ${
                    i === 6
                      ? "bg-[#C3FF00] w-3 h-3"
                      : "bg-gray-500/70 w-2.5 h-2.5"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex min-h-screen w-full">
        {/* LEFT IMAGE */}
        <div className="w-[30%] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#E8E8E8] via-[#E0E0E0] to-[#D8D8D8]" />
          <img
            src="/onboarding-character.jpg"
            alt="Ultra Hustle Character"
            className="relative z-10 w-full h-full object-cover object-top"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-[70%] bg-gradient-to-br from-[#E8E8E8] via-[#E0E0E0] to-[#D8D8D8] p-12 flex items-center justify-center relative overflow-hidden">
          {/* GLOWS */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[60px]"
            style={{
              background:
                "radial-gradient(circle, rgba(195,255,0,0.35), transparent 70%)",
              bottom: "-15%",
              left: "-15%",
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full blur-[50px]"
            style={{
              background:
                "radial-gradient(circle, rgba(195,255,0,0.25), transparent 70%)",
              top: "-10%",
              right: "-10%",
            }}
          />

          {/* CARD */}
          <div className="bg-white/30 backdrop-blur-xl border-4 border-white/50 rounded-[32px] shadow-xl p-16 w-[95%] h-[85%] flex flex-col items-center justify-center text-center z-10">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              You're all set!
            </h1>

            <p className="text-2xl text-gray-700 max-w-[600px] mb-8">
              Complete your profile to boost visibility and match accuracy
            </p>

            <div className="w-full h-px bg-black/20 mb-8 max-w-[600px]" />

            <p className="text-xl font-medium text-gray-800 mb-10">
              Let's create your profile
            </p>

            <div className="flex gap-6 mb-20">
              <button
                onClick={handleGetStarted}
                className="px-12 py-4 rounded-xl bg-[#CEFF1B] border-2 border-black text-black font-semibold text-xl hover:bg-[#b8e617]"
              >
                Get Started
              </button>

              <button
                onClick={handleSkip}
                className="px-12 py-4 rounded-xl border-2 border-gray-400 text-gray-700 font-semibold text-xl hover:bg-gray-100"
              >
                Skip for now
              </button>
            </div>

            {/* STEP DOTS */}
            <div className="flex gap-3">
              {[...Array(totalSteps)].map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full ${
                    i === currentStep ? "bg-[#C3FF00]" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
