import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RoleSelection() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const currentStep = 1;
  const totalSteps = 8;

  const handleBack = () => navigate("/onboarding");

  const stepPaths = [
    "/onboarding",
    "/client-role-selection",
    "/client-work-type-selection",
    "/client-goals-selection",
    "/client-needs",
    "/client-business-details",
    "/client-setup-workspace",
    "/client-profile-setup",
  ];

  const handleContinue = () => {
    if (!selectedRole) return;

    if (selectedRole === "client") {
      navigate("/client-work-type-selection");
    } else if (selectedRole === "creator") {
      navigate("/creator-work-type-selection");
    }
  };

  const handleReset = () => navigate("/onboarding");

  const RoleCard = ({ role, title, points }) => {
    const active = selectedRole === role;

    return (
      <button
        type="button"
        onClick={() => setSelectedRole(role)}
        className={[
          // ✅ MOBILE: always 2 cards in one row
          "w-full basis-1/2 min-w-0 flex-shrink-0",
          "text-left rounded-2xl p-4 transition-all",
          "border",
          active
            ? "bg-[#CEFF1B] border-black shadow-md"
            : "bg-white border-[#CEFF1B] shadow-sm",
        ].join(" ")}
      >
        <span
          className={[
            "inline-flex items-center px-3 py-1 rounded-md text-xs font-medium",
            "border",
            active ? "border-black bg-[#FEFEFE]/66" : "border-black/70 bg-white",
          ].join(" ")}
        >
          {title}
        </span>

        <ul className="mt-3 space-y-2 text-[12px] leading-4 text-black/70 break-words">
          {points.map((t, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-[2px]">•</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </button>
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col min-[950px]:flex-row">
      {/* Top Section on Mobile / Left Side on Desktop - Acid Green Panel */}
      <div className="w-full min-[950px]:w-[30%] relative overflow-hidden bg-[#CEFF1B] min-h-[45vh] min-[950px]:min-h-screen">
        <div className="absolute inset-0 flex flex-col justify-between p-6 min-[950px]:p-10">
          {/* Back Button - Mobile Only */}
          <button
            onClick={handleBack}
            className="min-[950px]:hidden w-10 h-10 rounded-full flex items-center justify-center mb-4 relative"
            style={{
              background: "linear-gradient(180deg, #FFFFFF, #9C9C9C)",
              padding: "2px",
            }}
          >
            <span className="w-full h-full rounded-full flex items-center justify-center bg-[#CEFF1B]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </span>
          </button>

          {/* Question */}
          <div className="flex-1 flex flex-col justify-center min-[950px]:justify-start min-[950px]:pt-32 items-start text-left px-4 min-[950px]:px-0">
            <h2 className="text-3xl min-[950px]:text-4xl font-bold text-black leading-tight">
              How will you be
            </h2>

            <h2 className="text-3xl min-[950px]:text-4xl font-bold text-black -mt-1 leading-tight">
              using Ultra Hustle?
            </h2>

            <p className="text-black/60 text-base min-[950px]:text-xl mt-4 min-[950px]:mt-6 max-w-md">
              This helps us tailor your dashboard
            </p>
          </div>

          {/* Step Indicators - Desktop Only */}
          <div className="hidden min-[950px]:flex items-center gap-3 ml-12">
            {[...Array(totalSteps)].map((_, index) => (
              index <= currentStep && (
                <div
                  key={index}
                  onClick={() => index < currentStep && navigate(stepPaths[index])}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentStep
                      ? "bg-black w-4 h-4"
                      : "bg-white cursor-pointer"
                    }`}
                />
              )
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section on Mobile / Right Side on Desktop - Content */}
      <div className="w-full min-[950px]:w-[70%] bg-[#E0E0E0] min-[950px]:bg-gradient-to-br min-[950px]:from-[#E8E8E8] min-[950px]:via-[#E0E0E0] min-[950px]:to-[#D8D8D8] rounded-t-[50px] min-[950px]:rounded-none -mt-12 min-[950px]:mt-0 p-6 pt-8 min-[950px]:p-12 flex flex-col justify-center items-center relative overflow-visible min-h-[60vh] min-[950px]:min-h-screen z-20">
        {/* Animated Gradient Glows - Desktop Only */}
        <div className="hidden min-[950px]:block absolute w-[500px] h-[500px] rounded-full pointer-events-none z-0" />
        <div className="hidden min-[950px]:block absolute w-[400px] h-[400px] rounded-full pointer-events-none z-0" />
        <div className="hidden min-[950px]:block absolute w-[350px] h-[350px] rounded-full pointer-events-none z-0" />

        {/* ✅ MOBILE */}
        <div className="min-[950px]:hidden w-full max-w-[420px] relative z-10">
          {/* ✅ FORCE SAME LINE (no wrap) */}
          <div className="flex flex-nowrap gap-3 w-full">
            <RoleCard
              role="creator"
              title="Creator"
              points={[
                "I want to offer services and sell digital products",
                "I want to run webinars and courses",
              ]}
            />
            <RoleCard
              role="client"
              title="Client"
              points={["I want to hire creators and purchase products/courses"]}
            />
          </div>

          <p className="text-center text-black/60 text-sm mt-4">
            You can switch or use both roles anytime
          </p>

          {/* buttons row (Reset | Back | Continue) */}
          <div className="mt-5 flex items-center justify-between gap-3">
            <button
              onClick={handleReset}
              className="h-10 px-5 rounded-lg border border-black/20 bg-white text-black/60 text-sm"
            >
              Reset
            </button>

            <button
              onClick={handleBack}
              className="h-10 px-6 rounded-lg border border-black/40 bg-white text-black text-sm"
            >
              Back
            </button>

            <button
              onClick={handleContinue}
              disabled={!selectedRole}
              className={[
                "h-10 px-6 rounded-lg text-sm font-medium border",
                selectedRole
                  ? "bg-[#CEFF1B] border-black text-black"
                  : "bg-[#DADADA] border-black/20 text-black/30",
              ].join(" ")}
            >
              Continue
            </button>
          </div>

          {/* Step Indicators - Mobile Only */}
          <div className="mt-6 flex justify-center items-center gap-2 min-[950px]:hidden">
            {[...Array(totalSteps)].map((_, index) => (
              index <= currentStep && (
                <span
                  key={index}
                  onClick={() => index < currentStep && navigate(stepPaths[index])}
                  className={[
                    "w-2 h-2 rounded-full",
                    index === currentStep ? "bg-black" : "bg-black/30 cursor-pointer",
                  ].join(" ")}
                />
              )
            ))}
          </div>
        </div>

        {/* ✅ DESKTOP (unchanged) */}
        <div className="hidden min-[950px]:flex flex-col min-[950px]:flex-row gap-6 justify-between items-stretch relative z-10 w-full px-4">
          <div
            onClick={() => setSelectedRole("creator")}
            className={`flex-1 max-w-[450px] min-h-[200px] p-8 rounded-2xl cursor-pointer transition-all duration-300 backdrop-blur-sm ${selectedRole === "creator"
                ? "bg-[#CEFF1B] border-2 border-black shadow-lg"
                : "bg-white/40 border-1 border-[#CEFF1B] hover:bg-white/20"
              }`}
          >
            <div className="mb-4">
              <span
                className={`inline-block px-5 py-2 rounded-lg border-2 font-semibold text-lg ${selectedRole === "creator"
                    ? "border-black bg-[#C3FF00]/10"
                    : "border-gray-400 bg-white"
                  }`}
              >
                Creator
              </span>
            </div>
            <ul className="text-gray-700 text-base space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                <span>I want to offer services and sell digital products</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                <span>I want to run webinars and courses</span>
              </li>
            </ul>
          </div>

          <div
            onClick={() => setSelectedRole("client")}
            className={`flex-1 max-w-[450px] min-h-[200px] p-8 rounded-2xl cursor-pointer transition-all duration-300 backdrop-blur-sm ${selectedRole === "client"
                ? "bg-[#CEFF1B] border-2 border-black shadow-lg"
                : "bg-white/40 border-1 border-[#CEFF1B] hover:bg-white/20"
              }`}
          >
            <div className="mb-4">
              <span
                className={`inline-block px-5 py-2 rounded-lg border-2 font-semibold text-lg ${selectedRole === "client"
                    ? "border-black bg-[#C3FF00]/10"
                    : "border-gray-400 bg-white"
                  }`}
              >
                Client
              </span>
            </div>
            <ul className="text-gray-700 text-base space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                <span>I want to hire creators and purchase products/courses</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden min-[950px]:block mt-6 relative z-10 w-full max-w-[750px]">
          <p className="text-left text-gray-600 text-lg mb-8 min-[950px]:-ml-24">
            You can switch or use both roles anytime.
          </p>

          <div className="flex justify-between items-center">
            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-lg border-2 border-black text-gray-600 font-medium text-lg hover:bg-gray-100 transition-all min-[950px]:-ml-24"
            >
              Reset
            </button>

            <div className="flex gap-4">
              <button
                onClick={handleBack}
                className="px-10 py-3 rounded-lg border border-black text-black font-medium text-lg hover:bg-gray-100 transition-all"
              >
                Discard
              </button>
              <button
                onClick={handleContinue}
                disabled={!selectedRole}
                className={`px-10 py-3 rounded-lg font-medium text-lg transition-all ${selectedRole
                    ? "bg-[#CEFF1B] border-2 border-black text-black hover:bg-[#b8e617]"
                    : "bg-gray-200 border-2 border-gray-300 text-gray-400 cursor-not-allowed"
                  }`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
