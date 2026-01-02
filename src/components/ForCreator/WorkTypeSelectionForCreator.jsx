import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function WorkTypeSelectionForCreator() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(null);
  const [teamSize, setTeamSize] = useState("");
  const [buildTeamPlan, setBuildTeamPlan] = useState(null);

  const currentStep = 2;
  const totalSteps = 8;

  const handleBack = () => navigate("/creator-role-selection");

  const handleContinue = () => {
    if (selectedType) navigate("/creator-goals-selection");
  };

  const handleReset = () => {
    setSelectedType(null);
    setTeamSize("");
    setBuildTeamPlan(null);
  };

  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden min-h-screen bg-[#E8E8E8] overflow-hidden">
        {/* 🔼 TOP IMAGE */}
        <div className="relative bg-[#CEFF1B] pt-6 pb-40 px-6">
          <button
            onClick={handleBack}
            className="w-10 h-10 rounded-full border border-black/30 bg-white/40 backdrop-blur shadow flex items-center justify-center"
          >
            ←
          </button>
          <h2 className="text-3xl font-bold text-black text-center px-6">
            How do you work?
          </h2>
        </div>
         

        {/* ⬇️ CARD */}
        <div className="mt-6 px-4 pb-10 relative z-10">
          <div className="bg-[#F1F1EE] rounded-[28px] p-6 shadow-xl max-w-[420px] mx-auto">
            {/* WORK TYPE CARDS */}
            <div className="flex gap-3 mb-6">
              {/* SOLO */}
              <div
                onClick={() => setSelectedType("solo")}
                className={`flex-1 p-4 rounded-xl border cursor-pointer ${
                  selectedType === "solo"
                    ? "bg-[#CEFF1B] border-black"
                    : "bg-transparent border-gray-300"
                }`}
              >
                <p className=" inline-block px-1 py-1 rounded-md border text-[7px] font-medium mb-2">Solo Creator/Solo profissional</p>
                <p className="text-[10px] text-gray-600">I work individually</p>
                <p className="text-[10px] text-gray-600">I manage my own task and deliveries</p>
              </div>

              {/* TEAM */}
              <div
                onClick={() => setSelectedType("team")}
                className={`flex-1 p-4 rounded-xl border cursor-pointer ${
                  selectedType === "team"
                    ? "bg-[#CEFF1B] border-black"
                    : "bg-transparent border-gray-300"
                }`}
              >
                <p className="inline-block px-3 py-1 rounded-md border text-[7px] font-medium mb-2">Team Organisation</p>
                <p className="text-[10px] text-gray-600">We have a team</p>
                <p className="text-[10px] text-gray-600">Multiple peopel handel projects</p>
              </div>
            </div>

            {/* TEAM OPTIONS */}
            {selectedType === "team" && (
              <div className="space-y-4 mb-6">
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full p-3 rounded-lg border border-gray-300 bg-white text-sm"
                >
                  <option value="" disabled>
                    Select team size
                  </option>
                  <option value="2-5">2-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11-25">11-25</option>
                  <option value="26-50">26-50</option>
                  <option value="50+">50+</option>
                </select>

                <div className="flex gap-2">
                  {["yes", "no", "maybe"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setBuildTeamPlan(opt)}
                      className={`flex-1 py-2 rounded-md text-xs border ${
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
                className="text-sm border px-4 py-2 rounded-md"
              >
                Reset
              </button>
              <div className="flex gap-2">
                <button
                  onClick={handleBack}
                  className="text-sm border px-4 py-2 rounded-md"
                >
                  Back
                </button>
                <button
                  onClick={handleContinue}
                  disabled={
                    !selectedType ||
                    (selectedType === "team" && (!teamSize || !buildTeamPlan))
                  }
                  className={`text-sm px-4 py-2 rounded-md border ${
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

  {/* ================= LEFT PANEL ================= */}
  <div className="w-[30%] bg-[#CEFF1B] px-12 py-10 flex flex-col justify-between">
    <h2 className="text-4xl font-bold text-black mt-16">
      How do you work?
    </h2>

    {/* Step Dots */}
    <div className="flex gap-3 ml-12 mb-10">
      {[...Array(totalSteps)].map((_, i) => (
        <div
          key={i}
          className={`rounded-full ${
            i === currentStep
              ? "bg-black w-4 h-4"
              : "bg-white w-3 h-3"
          }`}
        />
      ))}
    </div>
  </div>

  {/* ================= RIGHT PANEL ================= */}
  <div className="w-[70%] bg-gradient-to-br from-[#F2F2F2] via-[#ECECEC] to-[#E5E5E5] flex flex-col justify-center items-center relative">

    {/* Soft glow */}
    <div
      className="absolute w-[520px] h-[520px] rounded-full blur-[80px] opacity-40"
      style={{
        background:
          "radial-gradient(circle, rgba(195,255,0,0.4), transparent 70%)",
        bottom: "-20%",
        left: "-20%",
      }}
    />

    {/* ================= CARDS ================= */}
    <div className="flex gap-10 w-full max-w-[900px] z-10">

      {/* SOLO CARD */}
      <div
        onClick={() => setSelectedType("solo")}
        className={`flex-1 p-8 rounded-2xl cursor-pointer transition ${
          selectedType === "solo"
             ? "bg-[#CEFF1B] border-2 border-black"
                  : "bg-white/10 border-4 border-white"
        }`}
      >
        <span className="inline-block mb-4 px-4 py-1 rounded-md border border-gray-400 text-sm font-medium">
          Solo Creator / Solo Professional
        </span>

        <ul className="text-gray-700 space-y-2 text-sm">
          <li>• I work individually</li>
          <li>• I manage my own tasks and deliveries</li>
        </ul>
      </div>

      {/* TEAM CARD */}
      <div
        onClick={() => setSelectedType("team")}
        className={`flex-1 rounded-2xl px-8 py-6 cursor-pointer transition-all ${
          selectedType === "team"
             ? "bg-[#CEFF1B] border-2 border-black"
                  : "bg-white/10 border-4 border-white"
        }`}
      >
        <span className="inline-block mb-4 px-4 py-1 rounded-md border border-gray-400 text-sm font-medium">
          Team / Organization
        </span>

        <ul className="text-gray-700 space-y-2 text-sm">
          <li>• We have a team</li>
          <li>• Multiple people handle projects</li>
        </ul>
      </div>
    </div>

    {/* ================= FOOTER ================= */}
    <div className="mt-12 w-full max-w-[900px] flex justify-between items-center z-10">

      <button
        onClick={handleReset}
        className="px-6 py-2 rounded-md border border-gray-400 text-sm text-gray-700 hover:bg-gray-100"
      >
        Reset
      </button>

      <div className="flex gap-4">
        <button
          onClick={handleBack}
          className="px-6 py-2 rounded-md border border-gray-400 text-sm hover:bg-gray-100"
        >
          Back
        </button>

        <button
          onClick={handleContinue}
          disabled={!selectedType}
          className={`px-6 py-2 rounded-md text-sm font-medium ${
            selectedType
              ? "bg-[#CEFF1B] border border-black"
              : "bg-gray-200 border border-gray-300 text-gray-400 cursor-not-allowed"
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
