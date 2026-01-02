import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WorkTypeSelection() {
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState(null);
  const [teamSize, setTeamSize] = useState("");
  const [buildTeamPlan, setBuildTeamPlan] = useState(null);

  const currentStep = 2;
  const totalSteps = 8;

  const handleBack = () => navigate("/role-selection");

  const handleContinue = () => {
    if (
      selectedType &&
      (selectedType !== "team" || (teamSize && buildTeamPlan))
    ) {
      navigate("/goals-selection");
    }
  };

  const handleReset = () => {
    setSelectedType(null);
    setTeamSize("");
    setBuildTeamPlan(null);
  };

  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden min-h-screen bg-[#E0E0E0] overflow-hidden">
        {/* TOP GREEN PANEL */}
        <div className="relative bg-[#CEFF1B] pt-6 pb-32 px-6">
          <button
            onClick={handleBack}
            className="w-10 h-10 rounded-full border border-black/30 bg-white/40 backdrop-blur shadow flex items-center justify-center"
          >
            ←
          </button>

          <div className="mt-14 text-center px-4">
            <h1 className="text-[26px] font-bold text-black">
              How do you work?
            </h1>
          </div>
        </div>

        {/* CONTENT CARD */}
        <div className="mt-6 px-4 pb-10">
          <div className="bg-white/60 backdrop-blur-xl rounded-[28px] p-6 shadow-xl max-w-[420px] mx-auto relative">
            {/* WORK TYPE CARDS */}
            <div className="flex gap-2 mb-4 max-w-3xl">
              {/* SOLO */}
              <div
                onClick={() => setSelectedType("solo")}
                className={`flex-1 p-4 rounded-xl border cursor-pointer transition ${
                  selectedType === "solo"
                    ? "bg-[#CEFF1B] border-black"
                    : "bg-white border-gray-300"
                }`}
              >
                <span className="text-[7px] px-1 py-1 border rounded">
                  Solo Creator / Solo Professional
                </span>
                <ul className="text-[9px] text-gray-700 mt-2 space-y-1">
                  <li>• I client individually</li>
                  <li>• I manage my own work</li>
                </ul>
              </div>

              {/* TEAM */}
              <div
                onClick={() => setSelectedType("team")}
                className={`flex-1 p-4 rounded-xl border cursor-pointer transition ${
                  selectedType === "team"
                    ? "bg-[#CEFF1B] border-black"
                    : "bg-white border-gray-300"
                }`}
              >
                <span className="text-[8px] px-2 py-1 border rounded">
                  Team / Organization
                </span>
                <ul className="text-[9px] text-gray-700 mt-2 space-y-1">
                  <li>• We work as a team</li>
                  <li>• Multiple people involved</li>
                </ul>
              </div>
            </div>

            {/* TEAM OPTIONS */}
            {selectedType === "team" && (
              <div className="mb-6 animate-fade-in-up">
                <label className="block text-sm font-semibold mb-2 text-center">
                  Team Size
                </label>
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full p-3 rounded-lg border mb-4"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="2-5">2-5 people</option>
                  <option value="6-10">6-10 people</option>
                  <option value="11-25">11-25 people</option>
                  <option value="26-50">26-50 people</option>
                  <option value="50+">50+ people</option>
                </select>

                <label className="block text-sm font-semibold mb-2 text-center">
                  Build teams on Ultra Hustle?
                </label>
                <div className="flex gap-2 justify-center">
                  {["yes", "no", "maybe later"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setBuildTeamPlan(opt)}
                      className={`px-4 py-2 rounded-lg border text-xs ${
                        buildTeamPlan === opt
                          ? "bg-[#CEFF1B] border-black"
                          : "bg-white border-gray-300"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

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
                  disabled={
                    !selectedType ||
                    (selectedType === "team" && (!teamSize || !buildTeamPlan))
                  }
                  className={`px-4 py-2 rounded-md text-sm border ${
                    selectedType &&
                    (selectedType !== "team" || (teamSize && buildTeamPlan))
                      ? "bg-[#CEFF1B] border-black"
                      : "bg-gray-200 border-gray-300 text-gray-400"
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>

            {/* STEPS */}
            <div className="flex justify-center gap-2 mt-6">
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
        {/* LEFT */}
        <div className="w-[30%] bg-[#CEFF1B] p-20 flex flex-col justify-between">
          <h2 className="text-4xl font-bold text-black">How do you work?</h2>

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

        {/* RIGHT */}
        <div className="w-[70%] bg-gradient-to-br from-[#E8E8E8] to-[#D8D8D8] p-12 flex flex-col justify-center items-center">
          <div className="flex gap-6 max-w-[900px] w-full">
            {/* SOLO */}
            <div
              onClick={() => setSelectedType("solo")}
              className={`flex-1 p-8 rounded-2xl cursor-pointer ${
                selectedType === "solo"
                  ? "bg-[#CEFF1B] border-2 border-black"
                  : "bg-white/10 border-4 border-white"
              }`}
            >
              <h3 className="font-bold mb-3">Solo</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• client individually</li>
                <li>• Self-managed</li>
              </ul>
            </div>

            {/* TEAM */}
            <div
              onClick={() => setSelectedType("team")}
              className={`flex-1 p-8 rounded-2xl cursor-pointer ${
                selectedType === "team"
                  ? "bg-[#CEFF1B] border-2 border-black"
                  : "bg-white/10 border-4 border-white"
              }`}
            >
              <h3 className="font-bold mb-3">Team</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Multiple people</li>
                <li>• Shared responsibilities</li>
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
                disabled={
                  !selectedType ||
                  (selectedType === "team" && (!teamSize || !buildTeamPlan))
                }
                className={`px-6 py-3 rounded-lg border ${
                  selectedType &&
                  (selectedType !== "team" || (teamSize && buildTeamPlan))
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
