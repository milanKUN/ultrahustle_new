import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SetupWorkspaceForCreator() {
  const navigate = useNavigate();
  const currentStep = 5;
  const totalSteps = 8;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/creator-profile-setup");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden min-h-screen bg-[#E8E8E8] overflow-hidden">
        {/* 🔼 TOP IMAGE */}
        <div className="relative h-[35vh] w-full overflow-hidden">
          <img
            src="/onboarding-character.jpg"
            alt="Workspace setup"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* ⬇️ CARD */}
        <div className="mt-6 px-4 pb-10 relative z-10">
          <div className="bg-[#F1F1EE] rounded-[28px] p-6 shadow-xl max-w-[360px] mx-auto border border-black/10 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Let us set up your workspace
            </h1>

            <p className="text-gray-600 text-sm mb-8">
              We're configuring your dashboard, recommendations, and preferences
            </p>

            {/* Loader */}
            <div className="flex justify-center mb-8 animate-spin-slow">
              <img
                src="/arrow-loader.png"
                alt="Loading"
                className="w-24 h-24"
              />
            </div>

            {/* STEP DOTS */}
            <div className="flex justify-center gap-2">
              {[...Array(totalSteps)].map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full ${
                    i === currentStep
                      ? "bg-black w-3 h-3"
                      : "bg-gray-400 w-2.5 h-2.5"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}
      <div className="hidden md:flex min-h-screen w-full">
        {/* LEFT IMAGE */}
        <div className="w-[30%] relative overflow-hidden items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#E8E8E8] via-[#E0E0E0] to-[#D8D8D8]" />
          <img
            src="/onboarding-character.jpg"
            alt="Ultra Hustle Character"
            className="relative z-10 w-full h-full object-cover object-top"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-[70%] bg-gradient-to-br from-[#E8E8E8] via-[#E0E0E0] to-[#D8D8D8] p-12 flex flex-col justify-center items-center relative overflow-hidden">
          {/* 👉 TUMHARA ORIGINAL DESKTOP CONTENT EXACT SAME */}
        </div>
      </div>
    </>
  );
}
