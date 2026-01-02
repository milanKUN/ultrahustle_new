import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RoleSelection() {
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState(null);

  const currentStep = 1;
  const totalSteps = 8;

  const handleBack = () => navigate("/client-onboarding");

 const handleContinue = () => {
  if (!selectedRole) return;

  if (selectedRole === "client") {
    navigate("/work-type-selection");
  }

  if (selectedRole === "creator") {
    navigate("/creator-work-type-selection");
  }
};

  

  const handleReset = () => setSelectedRole(null);

  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden min-h-screen bg-[#EFEFEF] overflow-hidden">
        {/* TOP GREEN PANEL */}
        <div className="relative bg-[#CEFF1B] pt-6 pb-40 px-6">
          <button
            onClick={handleBack}
            className="w-10 h-10 rounded-full border border-black/30 bg-white/40 backdrop-blur shadow flex items-center justify-center"
          >
            ←
          </button>

          <div className="mt-14 text-center px-4">
            <h1 className="text-[26px] font-bold text-black leading-snug">
              How will you be using <br /> Ultra Hustle?
            </h1>
            <p className="mt-3 text-black/70 text-[16px]">
              This helps us tailor your dashboard
            </p>
          </div>
        </div>

        {/* CONTENT CARD */}
        <div className="mt-6 px-4 pb-10">
          <div className="bg-[#F1F1EE] rounded-[28px] p-6 shadow-xl max-w-[420px] mx-auto">
            {/* ROLE CARDS */}
            <div className="flex gap-2 mb-4">
              {/* Creator Card */}
              <div
                onClick={() => setSelectedRole("creator")}
                className={`flex-1 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedRole === "creator"
                    ? "bg-[#CEFF1B] border-2 border-black shadow-lg"
                    : "bg-transparent border-2 border-white"
                }`}
              >
                <div className="mb-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-md border text-xs font-medium ${
                      selectedRole === "creator"
                        ? "border-black bg-white/30"
                        : "border-gray-400 bg-white"
                    }`}
                  >
                    Creator
                  </span>
                </div>
                <ul className="text-gray-700 text-xs space-y-1">
                  <li className="flex items-start gap-1">
                    <span className="text-gray-500">•</span>
                    <span>
                      I want to offer services and sell digital products
                    </span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-gray-500">•</span>
                    <span>I want to run webinars and courses</span>
                  </li>
                </ul>
              </div>

              {/* Client Card */}
              <div
                onClick={() => setSelectedRole("client")}
                className={`flex-1 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedRole === "client"
                    ? "bg-[#CEFF1B] border-2 border-black shadow-lg"
                    : "bg-transparent border-2 border-white"
                }`}
              >
                <div className="mb-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-md border text-xs font-medium ${
                      selectedRole === "client"
                        ? "border-black bg-white/30"
                        : "border-gray-400 bg-white"
                    }`}
                  >
                    Client
                  </span>
                </div>
                <ul className="text-gray-700 text-xs space-y-2">
                  <li className="flex items-start gap-1">
                    <span className="text-gray-500">•</span>
                    <span>
                      I want to hire creators and purchase products/courses
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* INFO */}
            <p className="text-center text-[13px] text-gray-600 mb-6">
              You can switch or use both roles anytime
            </p>

            {/* STEP DOTS */}

            {/* FOOTER */}
            <div className="flex justify-between items-center">
              <button
                onClick={handleReset}
                className="px-4 py-2 border rounded-md text-sm"
              >
                Reset
              </button>

              <div className="flex gap-3">
                <button
                  onClick={handleBack}
                  className="px-4 py-2 border rounded-md text-sm"
                >
                  Back
                </button>
                <button
                  onClick={handleContinue}
                  disabled={!selectedRole}
                  className={`px-4 py-2 rounded-md text-sm border ${
                    selectedRole
                      ? "bg-[#CEFF1B] border-black"
                      : "bg-gray-200 border-gray-300 text-gray-400"
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
            <div className="flex justify-center gap-2 mb-6 mt-4">
              {[...Array(totalSteps)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === currentStep ? "bg-black" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex min-h-screen w-full">
        {/* LEFT PANEL */}
        <div className="w-[30%] bg-[#CEFF1B] p-20 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold text-black mb-4">
              How will you be using Ultra Hustle?
            </h2>
            <p className="text-black/70 text-xl">
              This helps us tailor your dashboard
            </p>
          </div>

          <div className="flex gap-3">
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

        {/* RIGHT PANEL */}
        <div className="w-[70%] bg-gradient-to-br from-[#E8E8E8] via-[#E0E0E0] to-[#D8D8D8] p-12 flex flex-col justify-center items-center">
          {/* ROLE CARDS */}
          <div className="flex gap-6 w-full max-w-[900px]">
            <div
              onClick={() => setSelectedRole("creator")}
              className={`flex-1 p-8 rounded-2xl cursor-pointer transition ${
                selectedRole === "creator"
                  ? "bg-[#CEFF1B] border-2 border-black"
                  : "bg-white/10 border-4 border-white"
              }`}
            >
              <h3 className="font-bold mb-3">Creator</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Sell services & products</li>
                <li>• Run courses & webinars</li>
              </ul>
            </div>

            <div
              onClick={() => setSelectedRole("client")}
              className={`flex-1 p-8 rounded-2xl cursor-pointer transition ${
                selectedRole === "client"
                  ? "bg-[#CEFF1B] border-2 border-black"
                  : "bg-white/10 border-4 border-white"
              }`}
            >
              <h3 className="font-bold mb-3">Client</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Hire creators</li>
                <li>• Buy products & courses</li>
              </ul>
            </div>
          </div>

          {/* FOOTER */}
          <div className="mt-10 w-full max-w-[900px] flex justify-between">
            <button
              onClick={handleReset}
              className="px-6 py-3 border rounded-lg"
            >
              Reset
            </button>

            <div className="flex gap-4">
              <button
                onClick={handleBack}
                className="px-6 py-3 border rounded-lg"
              >
                Back
              </button>
              <button
                onClick={handleContinue}
                disabled={!selectedRole}
                className={`px-6 py-3 rounded-lg border ${
                  selectedRole
                    ? "bg-[#CEFF1B] border-black"
                    : "bg-gray-200 border-gray-300 text-gray-400"
                }`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
