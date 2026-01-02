import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatorRoleSelection() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const currentStep = 1;
  const totalSteps = 8;

  const handleBack = () => navigate("/creator-onboarding");
  const handleContinue = () => {
    if (selectedRole) navigate("/creator-work-type-selection");
  };
  const handleReset = () => setSelectedRole(null);

  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden min-h-screen bg-[#E8E8E8] overflow-hidden">
        {/* 🔼 TOP IMAGE / HERO */}
        <div className="relative h-[35vh] w-full bg-[#CEFF1B] flex flex-col justify-center px-6">
          <h2 className="text-3xl font-bold text-black text-center">
            How will you be using Ultra Hustle?
          </h2>
          <p className="text-black/70 text-base text-center mt-4">
            This helps us tailor your dashboard
          </p>
        </div>

        {/* ⬇️ CARD */}
        <div className="mt-6 px-4 pb-10 relative z-10">
          <div className="bg-[#F1F1EE] rounded-[28px] p-6 shadow-xl max-w-[360px] mx-auto border border-black/10">
            {/* ROLE CARDS */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* CREATOR */}
              <div
                onClick={() => setSelectedRole("creator")}
                className={`p-4 rounded-xl border cursor-pointer ${
                  selectedRole === "creator"
                    ? "bg-[#CEFF1B] border-black"
                    : "bg-white border-gray-300"
                }`}
              >
                <p className="font-semibold text-sm mb-2">Creator</p>
                <p className="text-xs text-gray-600">
                  Offer services & sell products
                </p>
              </div>

              {/* CLIENT */}
              <div
                onClick={() => setSelectedRole("client")}
                className={`p-4 rounded-xl border cursor-pointer ${
                  selectedRole === "client"
                    ? "bg-[#CEFF1B] border-black"
                    : "bg-white border-gray-300"
                }`}
              >
                <p className="font-semibold text-sm mb-2">Client</p>
                <p className="text-xs text-gray-600">
                  Hire creators & buy courses
                </p>
              </div>
            </div>

            <p className="text-center text-xs text-gray-600 mb-6">
              You can switch or use both roles anytime
            </p>

            {/* FOOTER */}
            <div className="flex justify-between items-center">
              <button
                onClick={handleReset}
                className="px-4 py-2 text-sm border rounded-md"
              >
                Reset
              </button>

              <div className="flex gap-2">
                <button
                  onClick={handleBack}
                  className="px-4 py-2 text-sm border rounded-md"
                >
                  Back
                </button>
                <button
                  onClick={handleContinue}
                  disabled={!selectedRole}
                  className={`px-4 py-2 text-sm rounded-md border ${
                    selectedRole
                      ? "bg-[#CEFF1B] border-black"
                      : "bg-gray-200 border-gray-300 text-gray-400"
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>

            {/* STEP DOTS */}
            <div className="flex justify-center gap-2 mt-6">
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
        {/* LEFT */}
        <div className="w-[30%] relative overflow-hidden">
          <div className="absolute inset-0 bg-[#CEFF1B] flex flex-col justify-between p-10">
            <div>
              <h2 className="text-4xl font-bold text-black mt-12">
                How will you be using Ultra Hustle?
              </h2>
              <p className="text-black/70 text-xl mt-6">
                This helps us tailor your dashboard
              </p>
            </div>

            <div className="flex items-center gap-3 ml-12">
              {[...Array(totalSteps)].map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full ${
                    i === currentStep ? "bg-black w-4 h-4" : "bg-white w-3 h-3"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-[70%] bg-gradient-to-br from-[#E8E8E8] via-[#E0E0E0] to-[#D8D8D8] p-12 flex flex-col justify-center items-center">
          {/* 👉 YOUR ORIGINAL DESKTOP CONTENT STAYS EXACTLY SAME */}
        </div>
      </div>
    </>
  );
}
