import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  ShoppingBag,
  MonitorPlay,
  GraduationCap,
  Users,
  Sparkles,
  Layers,
} from "lucide-react";

export default function GoalsSelection() {
  const navigate = useNavigate();

  const [selectedGoals, setSelectedGoals] = useState([]);

  const currentStep = 3;
  const totalSteps = 8;

  const goals = [
    { id: "hire-talent", label: "Hire talent", icon: Briefcase },
    { id: "buy-products", label: "Buy digital products", icon: ShoppingBag },
    { id: "join-webinars", label: "Join webinars", icon: MonitorPlay },
    {
      id: "team-longterm",
      label: "Build a team for long term work",
      icon: Users,
    },
    { id: "explore-ai", label: "Explore creators with AI", icon: Sparkles },
    { id: "take-course", label: "Take Course", icon: GraduationCap },
    {
      id: "manage-products",
      label: "Manage multiple products smoothly",
      icon: Layers,
    },
    {
      id: "Hire-tallent",
      label: "Hire tallent",
      icon: Layers,
    },
    {
      id: "Join-webinars",
      label: "Join webinars",
      icon: Layers,
    },
    {
      id: "Buy-digital-products",
      label: "Buy digital products",
      icon: Layers,
    },
  ];

  const toggleGoal = (id) => {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const handleBack = () => navigate("/work-type-selection");
  const handleReset = () => setSelectedGoals([]);
  const handleContinue = () => {
    if (selectedGoals.length) navigate("/client-needs");
  };

  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden min-h-screen bg-[#EFEFEF] overflow-hidden">
        {/* GREEN TOP */}
        <div className="relative bg-[#CEFF1B] pt-6 pb-40 px-6">
          <button
            onClick={handleBack}
            className="w-10 h-10 rounded-full border border-black/30 bg-white/40 backdrop-blur shadow flex items-center justify-center"
          >
            ←
          </button>

          <div className="mt-14 text-center px-4">
            <h1 className="text-[35px] font-bold text-black leading-snug">
              What do you <br /> want to achieve?
            </h1>
            <p className="mt-3 text-black/70 text-[25px]">Select multiple</p>
          </div>
        </div>

        {/* WHITE CARD */}
        <div className="mt-6 px-4 pb-10">
          <div className="bg-[#F1F1EE] rounded-[28px] p-6 shadow-xl max-w-[420px] mx-auto">
            {/* GOALS */}
            <div className="flex flex-wrap gap-3 mb-6">
              {goals.map((goal) => {
                const Icon = goal.icon;
                const active = selectedGoals.includes(goal.id);

                return (
                  <div
                    key={goal.id}
                    onClick={() => toggleGoal(goal.id)}
                    className={`flex items-center gap-2 px-4 py-2 
  w-[calc(50%-10px)]
  rounded-[10px] border cursor-pointer transition ${
    active ? "border-black bg-[#EAF7C2]" : "border-gray-300 bg-white"
  }`}
                  >
                    <div className="w-5 h-5 bg-[#CEFF1B] rounded-sm flex items-center justify-center shrink-0">
                      <Icon size={12} className="text-black" />
                    </div>
                    <span className="text-[13px] font-medium text-black">
                      {goal.label}
                    </span>
                  </div>
                );
              })}
            </div>

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
                  disabled={!selectedGoals.length}
                  className={`px-4 py-2 rounded-md text-sm border ${
                    selectedGoals.length
                      ? "bg-[#CEFF1B] border-black"
                      : "bg-gray-200 border-gray-300 text-gray-400"
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
            {/* STEP DOTS */}
            <div className="flex justify-center gap-2 mb-6 mt-6">
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
          <div>
            <h2 className="text-4xl font-bold text-black mb-4">
              What do you want to achieve?
            </h2>
            <p className="text-black/70 text-xl">Select multiple</p>
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

        {/* RIGHT */}
        <div className="w-[70%] bg-gradient-to-br from-[#E8E8E8] via-[#E0E0E0] to-[#D8D8D8] p-12 flex justify-center items-center">
          <div className="w-full max-w-[900px] bg-white/10 backdrop-blur-md border-4 border-white/40 rounded-[30px] p-12 shadow-xl">
            <div className="flex flex-wrap gap-4">
              {goals.map((goal) => {
                const Icon = goal.icon;
                const active = selectedGoals.includes(goal.id);

                return (
                  <div
                    key={goal.id}
                    onClick={() => toggleGoal(goal.id)}
                    className={`flex items-center gap-4 px-6 py-4 rounded-xl border cursor-pointer transition ${
                      active
                        ? "bg-[#CEFF1B]/30 border-black scale-105"
                        : "bg-white/20 border-black/10"
                    }`}
                  >
                    <div className="bg-[#CEFF1B] p-2 rounded-lg">
                      <Icon size={20} />
                    </div>
                    <span className="font-semibold text-lg">{goal.label}</span>
                  </div>
                );
              })}
            </div>

            {/* FOOTER */}
            <div className="mt-10 flex justify-between">
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
                  disabled={!selectedGoals.length}
                  className={`px-6 py-3 rounded-lg border ${
                    selectedGoals.length
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
      </div>
    </>
  );
}
