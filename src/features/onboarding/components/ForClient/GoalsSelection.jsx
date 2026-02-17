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

  const stepPaths = [
    "/onboarding",
    "/client-role-selection",
    "/client-work-type-selection",
    "/client-goals-selection",
    "/client-needs",
    "/client-business-details",
    "/client-setup-workspace",
    "/client-profile-setup"
  ];


  const goals = [
    { id: "hire-talent", label: "Hire talent", icon: Briefcase },
    { id: "buy-products", label: "Buy digital products", icon: ShoppingBag },
    { id: "join-webinars", label: "Join webinars", icon: MonitorPlay },
    { id: "team-longterm", label: "Build a team for long term work", icon: Users },
    { id: "explore-ai", label: "Explore creators with Ai", icon: Sparkles },
    { id: "take-course", label: "Take Course", icon: GraduationCap },
    { id: "manage-products", label: "Manage multiple products smoothly", icon: Layers },

  ];

  const toggleGoal = (id) => {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const handleBack = () => navigate("/client-work-type-selection");

  const canContinue = selectedGoals.length > 0;

  const handleContinue = () => {
    if (canContinue) navigate("/client-needs");
  };

  const handleReset = () => navigate("/onboarding");


  const MobileChip = ({ goal }) => {
    const Icon = goal.icon;
    const active = selectedGoals.includes(goal.id);

    return (
      <button
        type="button"
        onClick={() => toggleGoal(goal.id)}
        className={[
          "flex items-center gap-2 px-3 py-2 rounded-xl border transition-all",
          active ? "bg-[#CEFF1B] border-black shadow-sm" : "bg-white border-[#CEFF1B]",
        ].join(" ")}
      >
        <span
          className={[
            "w-6 h-6 rounded-lg flex items-center justify-center shrink-0",
            "bg-[#CEFF1B]",
          ].join(" ")}
        >
          <Icon size={14} className="text-black" strokeWidth={2} />
        </span>

        <span className="text-xs font-medium text-black/80 whitespace-nowrap">
          {goal.label}
        </span>
      </button>
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col min-[950px]:flex-row">
      {/* Top Section */}
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
              What do you
            </h2>

            <h2 className="text-3xl min-[950px]:text-4xl font-bold text-black -mt-1 leading-tight">
              want to achieve
            </h2>

            <p className="text-black/60 text-base min-[950px]:text-xl mt-4 min-[950px]:mt-6 max-w-md">
              Select multiple
            </p>
          </div>

          {/* Step Indicators - Desktop Only */}
          <div className="hidden min-[950px]:flex items-center gap-3 ml-12">
            {[...Array(totalSteps)].map((_, index) => (
              index <= currentStep && (
                <div
                  key={index}
                  onClick={() => index < currentStep && navigate(stepPaths[index])}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentStep ? "bg-black w-4 h-4" : "bg-white cursor-pointer"
                    }`}
                />
              )
            ))}
          </div>



        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full min-[950px]:w-[70%] bg-[#E0E0E0] min-[950px]:bg-gradient-to-br min-[950px]:from-[#E8E8E8] min-[950px]:via-[#E0E0E0] min-[950px]:to-[#D8D8D8] rounded-t-[50px] min-[950px]:rounded-none -mt-12 min-[950px]:mt-0 px-3 py-6 min-[950px]:p-12 flex flex-col justify-center items-center relative overflow-visible min-h-[60vh] min-[950px]:min-h-screen z-20">
        {/* Animated Glows - Desktop Only */}
        <div
          className="hidden min-[950px]:block absolute w-[500px] h-[500px] rounded-full pointer-events-none z-0"

        />
        <div
          className="hidden min-[950px]:block absolute w-[400px] h-[400px] rounded-full pointer-events-none z-0"

        />
        <div
          className="hidden min-[950px]:block absolute w-[350px] h-[350px] rounded-full pointer-events-none z-0"

        />

        {/* ✅ MOBILE (screenshot-like) */}
        <div className="min-[950px]:hidden w-full max-w-[420px] relative z-10">
          <div className="px-0 py-0 bg-transparent border-none rounded-none shadow-none">
            <div className="flex flex-wrap gap-2">
              {goals.map((goal) => (
                <MobileChip key={goal.id} goal={goal} />
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex items-center justify-between gap-3">
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
                disabled={!canContinue}
                className={[
                  "h-10 px-6 rounded-lg text-sm font-medium border transition-all",
                  canContinue
                    ? "bg-[#CEFF1B] border-black text-black"
                    : "bg-[#DADADA] border-black/20 text-black/30",
                ].join(" ")}
              >
                Continue
              </button>
            </div>

            {/* Step dots */}
            <div className="mt-6 flex justify-center items-center gap-2">
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
        </div>

        {/* ✅ DESKTOP (unchanged) */}
        <div className="hidden min-[950px]:block relative z-10 w-full max-w-[900px]">
          <div className="-mt-6 bg-white/40 backdrop-blur-md border-1 border-[#CEFF1B] rounded-[30px] p-8 min-[950px]:p-12 shadow-xl min-h-[500px]">
            <div className="flex flex-wrap gap-4 justify-center min-[950px]:justify-start mt-6">
              {goals.map((goal) => {
                const Icon = goal.icon;
                const isSelected = selectedGoals.includes(goal.id);

                return (
                  <div
                    key={goal.id}
                    onClick={() => toggleGoal(goal.id)}
                    className={`
                      flex items-center gap-4 px-6 py-4 rounded-xl cursor-pointer border-2 backdrop-blur-sm
                      ${isSelected
                        ? "bg-[#CEFF1B] border-black shadow-lg scale-105"
                        : "bg-white/20 border-[#2B2B2B] "
                      }
                    `}
                  >
                    <div className="bg-[#CEFF1B] p-2 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-black" strokeWidth={2} />
                    </div>

                    <span
                      className={`font-[500] text-lg ${isSelected ? "text-black" : "text-gray-800"
                        }`}
                    >
                      {goal.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop Footer */}
        <div className="hidden min-[950px]:block mt-16 relative z-10 w-full max-w-[900px]">
          <div className="flex justify-between items-center">
            <button
              onClick={handleReset}
              className="px-8 py-3 rounded-lg border border-black text-gray-600 font-medium text-lg hover:bg-gray-100 transition-all"
            >
              Reset
            </button>

            <div className="flex gap-4">
              <button
                onClick={handleBack}
                className="px-10 py-3 rounded-lg border border-black text-[#2B2B2B] font-medium text-lg hover:bg-gray-100 transition-all"
              >
                Discard
              </button>
              <button
                onClick={handleContinue}
                disabled={!canContinue}
                className={`px-10 py-3 rounded-lg font-medium text-lg transition-all ${canContinue
                  ? "bg-[#CEFF1B] border-2 border-black text-black hover:bg-[#b8e617]"
                  : "bg-[#CEFF1B]/50 border border-[#2B2B2B] text-gray-500 cursor-not-allowed"
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
