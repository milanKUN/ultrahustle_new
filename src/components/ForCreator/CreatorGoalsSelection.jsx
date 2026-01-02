import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  ShoppingBag,
  MonitorPlay,
  GraduationCap,
  Users,
  Sparkles,
  TrendingUp,
  FileText,
} from "lucide-react";

export default function CreatorGoalsSelection() {
  const navigate = useNavigate();
  const [selectedGoals, setSelectedGoals] = useState([]);

  const currentStep = 3;
  const totalSteps = 8;

  const goals = [
    { id: "earn-services", label: "Earn through services", icon: Briefcase },
    { id: "sell-digital", label: "Sell digital products", icon: ShoppingBag },
    { id: "host-webinars", label: "Host webinars", icon: MonitorPlay },
    { id: "launch-course", label: "Launch a course", icon: GraduationCap },
    { id: "build-team", label: "Build a team", icon: Users },
    { id: "promote-listings", label: "Promote my listings", icon: FileText },
    { id: "build-client-base", label: "Build a client base", icon: TrendingUp },
    {
      id: "ai-match",
      label: "Get discovered faster (AI Match)",
      icon: Sparkles,
    },
  ];

  const toggleGoal = (id) => {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const handleBack = () => navigate("/creator-work-type-selection");
  const handleContinue = () => {
    if (selectedGoals.length) navigate("/creator-needs");
  };
  const handleReset = () => setSelectedGoals([]);

  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden min-h-screen bg-[#E8E8E8] overflow-hidden">
        {/* 🔼 TOP HERO */}
        <div className="relative h-[35vh] bg-[#CEFF1B] flex flex-col justify-center px-6 text-center">
          <h2 className="text-3xl font-bold text-black">
            What do you want to achieve?
          </h2>
          <p className="text-black/70 mt-3">Select multiple</p>
        </div>

        {/* ⬇️ CARD */}
        <div className="mt-6 px-4 pb-10 relative z-10">
          <div className="bg-[#F1F1EE] rounded-[28px] p-6 shadow-xl max-w-[360px] mx-auto border border-black/10">
            {/* GOALS */}
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {goals.map((goal) => {
                const Icon = goal.icon;
                const active = selectedGoals.includes(goal.id);
                return (
                  <div
                    key={goal.id}
                    onClick={() => toggleGoal(goal.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer ${
                      active
                        ? "bg-[#CEFF1B] border-black"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <Icon size={14} />
                    <span className="text-xs font-medium">{goal.label}</span>
                  </div>
                );
              })}
            </div>

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
                  disabled={!selectedGoals.length}
                  className={`px-4 py-2 text-sm rounded-md border ${
                    selectedGoals.length
                      ? "bg-[#CEFF1B] border-black"
                      : "bg-gray-200 border-gray-300 text-gray-400"
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>

            {/* DOTS */}
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
    <div>
      <h2 className="text-4xl font-bold text-black mt-16">
        What do you want to achieve?
      </h2>
      <p className="text-black/60 text-xl mt-4">
        Select multiple
      </p>
    </div>

    {/* Step Indicators */}
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
  <div className="w-[70%] bg-gradient-to-br from-[#F2F2F2] via-[#ECECEC] to-[#E5E5E5] flex flex-col justify-center items-center relative overflow-hidden">

    {/* Glow */}
    <div
      className="absolute w-[520px] h-[520px] rounded-full blur-[80px] opacity-40"
      style={{
        background:
          "radial-gradient(circle, rgba(195,255,0,0.4), transparent 70%)",
        bottom: "-20%",
        left: "-20%",
      }}
    />

    {/* ================= GOALS CONTAINER ================= */}
    <div className="bg-white/10 backdrop-blur-md border-4 border-white/40 rounded-[30px] p-12 shadow-xl w-full max-w-[900px] z-10">

      <div className="flex flex-wrap gap-4">
        {goals.map((goal) => {
          const Icon = goal.icon;
          const isSelected = selectedGoals.includes(goal.id);

          return (
            <div
              key={goal.id}
              onClick={() => toggleGoal(goal.id)}
              className={`flex items-center gap-4 px-6 py-4 rounded-xl cursor-pointer border-2 transition-all
                ${
                  isSelected
                    ? "bg-[#CEFF1B]/20 border-black shadow-lg scale-105"
                    : "bg-white/20 border-black/10 hover:bg-white/30 hover:border-black/30"
                }
              `}
            >
              <div className="bg-[#CEFF1B] p-2 rounded-lg">
                <Icon size={20} className="text-black" />
              </div>

              <span className="font-semibold text-lg text-gray-800">
                {goal.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>

    {/* ================= FOOTER ================= */}
    <div className="mt-16 w-full max-w-[900px] flex justify-between items-center z-10">
      <button
        onClick={handleReset}
        className="px-8 py-3 rounded-lg border-2 border-gray-300 text-gray-600 font-medium text-lg hover:bg-gray-100"
      >
        Reset
      </button>

      <div className="flex gap-4">
        <button
          onClick={handleBack}
          className="px-10 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-medium text-lg hover:bg-gray-100"
        >
          Back
        </button>

        <button
          onClick={handleContinue}
          disabled={selectedGoals.length === 0}
          className={`px-10 py-3 rounded-lg font-medium text-lg transition-all ${
            selectedGoals.length > 0
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

    </>
  );
}
