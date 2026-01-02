import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Palette,
  Code,
  Megaphone,
  PenTool,
  Image,
  Video,
  Database,
  Music,
} from "lucide-react";

export default function ClientNeeds() {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [budget, setBudget] = useState("");
  const [frequency, setFrequency] = useState(null); // 'once', 'monthly', 'weekly'
  const [hiringForTeam, setHiringForTeam] = useState(null); // 'yes', 'no'
  const [businessName, setBusinessName] = useState("");
  const [role, setRole] = useState("");

  const currentStep = 4;
  const totalSteps = 8;

  const categories = [
    { id: "design", label: "Design", icon: Palette },
    { id: "development", label: "Development", icon: Code },
    { id: "marketing", label: "Marketing", icon: Megaphone },
    { id: "writing", label: "Writing", icon: PenTool },
    { id: "illustration", label: "Illustration", icon: Image },
    { id: "video", label: "Video Editing", icon: Video },
    { id: "data-ai", label: "Data & Ai", icon: Database },
    { id: "music", label: "Music & Audio", icon: Music },
  ];

  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const handleBack = () => {
    navigate("/goals-selection");
  };

  const handleContinue = () => {
    if (isContinueEnabled) {
      navigate("/business-details");
    }
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setBudget("");
    setFrequency(null);
    setHiringForTeam(null);
    setBusinessName("");
    setRole("");
  };

  const isContinueEnabled =
    selectedCategories.length > 0 &&
    budget &&
    frequency &&
    hiringForTeam &&
    (hiringForTeam === "no" ||
      (hiringForTeam === "yes" && businessName && role));

  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden bg-[#EFEFEF] overflow-hidden">
        {/* GREEN TOP */}
        <div className="relative bg-[#CEFF1B] pt-6 pb-36 px-6">
          <button
            onClick={handleBack}
            className="w-10 h-10 rounded-full border border-white/80 bg-white/20 backdrop-blur-sm shadow-md flex items-center justify-center"
          >
            ←
          </button>

          <div className="mt-14 text-center px-4">
            <h1 className="text-[35px] font-bold text-black leading-snug">
              Tell us more <br /> about your needs
            </h1>
            <p className="mt-3 text-black/70 text-[25px]">
              What type of creators do you hire?
            </p>
          </div>
        </div>

        {/* OVERLAP WRAPPER (IMPORTANT) */}
        <div className="mt-6 px-4 pb-10">
          <div className="bg-[#F1F1EE] rounded-[28px] p-6 shadow-xl max-w-[420px] mx-auto">
            {/* ================= CATEGORIES ================= */}
            <div className="grid grid-cols-3 gap-3 justify-items-center mb-6">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const active = selectedCategories.includes(cat.id);

                return (
                  <div
                    key={cat.id}
                    onClick={() => toggleCategory(cat.id)}
                    className={`flex items-center gap-1 px-2 py-2 rounded-[10px] bg-white border cursor-pointer ${
                      active ? "border-black" : "border-gray-300"
                    }`}
                  >
                    <div className="w-5 h-5 bg-[#CEFF1B] rounded-sm flex items-center justify-center">
                      <Icon size={12} />
                    </div>
                    <span className="text-[13px] font-medium whitespace-nowrap">
                      {cat.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* ================= BUDGET ================= */}
            <div className="mb-5">
              <label className="block text-xs font-semibold mb-1">
                Average project budget
              </label>
              <input
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="$2K - $4K"
                className="w-full border rounded-md px-3 py-2 text-sm bg-white"
              />
            </div>

            {/* ================= BUSINESS / TEAM ================= */}
            <div className="mb-5">
              <label className="block text-xs font-semibold mb-1">
                Are you hiring for your business/team?
              </label>
              <div className="flex gap-3">
                {["yes", "no"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setHiringForTeam(opt)}
                    className={`flex-1 py-2 rounded-md border text-sm ${
                      hiringForTeam === opt
                        ? "bg-[#CEFF1B] border-black"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    {opt === "yes" ? "Yes" : "No"}
                  </button>
                ))}
              </div>
            </div>

            {/* ================= FREQUENCY ================= */}
            <div className="mb-6">
              <label className="block text-xs font-semibold mb-1">
                Expected project frequency
              </label>
              <div className="flex gap-3">
                {["once", "monthly", "weekly"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFrequency(opt)}
                    className={`flex-1 py-2 rounded-md border text-sm ${
                      frequency === opt
                        ? "bg-[#CEFF1B] border-black"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    {opt.charAt(0).toUpperCase() + opt.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* ================= BUSINESS DETAILS (ONLY IF YES) ================= */}
            {hiringForTeam === "yes" && (
              <div className="mb-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Business name
                  </label>
                  <input
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Your business name"
                    className="w-full border rounded-md px-3 py-2 text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1">
                    Your role
                  </label>
                  <input
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Your role"
                    className="w-full border rounded-md px-3 py-2 text-sm bg-white"
                  />
                </div>
              </div>
            )}

            {/* ================= FOOTER BUTTONS ================= */}
            <div className="flex justify-between items-center">
              <button
                onClick={handleReset}
                className="px-3 py-2 border rounded-md text-sm"
              >
                Reset
              </button>

              <div className="flex gap-3">
                <button
                  onClick={handleBack}
                  className="px-3 py-2 border rounded-md text-sm"
                >
                  Back
                </button>
                <button
                  onClick={handleContinue}
                  disabled={!isContinueEnabled}
                  className="px-3 py-2 rounded-md text-sm bg-[#CEFF1B] border border-black disabled:opacity-50"
                >
                  Continue
                </button>
              </div>
            </div>
            {/* ================= STEP DOTS ================= */}
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

      {/* ================= DESKTOP VIEW (NO CHANGE) ================= */}
      <div className="hidden md:flex min-h-screen w-full">
        <div className="hidden md:flex w-[30%] relative overflow-hidden">
          <div className="absolute inset-0 bg-[#CEFF1B] flex flex-col justify-between p-10">
            {/* Question */}
            <div className="mt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Tell us more about your needs
              </h2>
              <p className="text-black/70 text-xl">
                What type of creators do you hire?
              </p>
            </div>

            {/* Step Indicators */}
            <div className="flex items-center gap-3 ml-12">
              {[...Array(totalSteps)].map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStep ? "bg-black w-4 h-4" : "bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-[70%] bg-gradient-to-br from-[#E8E8E8] via-[#E0E0E0] to-[#D8D8D8] p-8 md:p-12 flex flex-col justify-center items-center relative overflow-hidden">
          {/* Animated Gradient Glows */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(circle, rgba(195, 255, 0, 0.4) 0%, rgba(195, 255, 0, 0.15) 40%, transparent 70%)",
              bottom: "-15%",
              left: "-15%",
              filter: "blur(60px)",
              animation: "glow-bottomleft-center-right 8s ease-in-out infinite",
            }}
          ></div>

          <div
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(circle, rgba(195, 255, 0, 0.35) 0%, rgba(195, 255, 0, 0.1) 40%, transparent 70%)",
              top: "-10%",
              right: "-10%",
              filter: "blur(50px)",
              animation: "glow-center-topright 8s ease-in-out infinite",
            }}
          ></div>

          <div
            className="absolute w-[350px] h-[350px] rounded-full pointer-events-none z-0"
            style={{
              background:
                "radial-gradient(circle, rgba(195, 255, 0, 0.3) 0%, rgba(195, 255, 0, 0.1) 40%, transparent 70%)",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              filter: "blur(50px)",
              animation: "glow-rotate 6s steps(3) infinite",
            }}
          ></div>

          {/* Main Content Area */}
          <div className="relative z-10 w-full max-w-[900px]">
            {/* Creator Categories - Transparent Container */}
            <div className="bg-white/10 backdrop-blur-md border-4 border-white/40 rounded-[30px] p-8 shadow-xl mb-8 min-h-[350px] flex flex-col justify-center gap-4">
              {[
                categories.slice(0, 4),
                categories.slice(4, 7),
                categories.slice(7),
              ].map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex flex-wrap md:flex-nowrap gap-4 w-full"
                >
                  {row.map((category) => {
                    const Icon = category.icon;
                    const isSelected = selectedCategories.includes(category.id);
                    return (
                      <div
                        key={category.id}
                        onClick={() => toggleCategory(category.id)}
                        className={`
                        flex items-center gap-3.5 px-6 py-3.5 rounded-2xl cursor-pointer border-2 transition-all duration-300 backdrop-blur-sm justify-center whitespace-nowrap
                        ${rowIndex === 0 ? "flex-1" : "w-full md:w-[24%]"}
                        ${
                          isSelected
                            ? "bg-[#CEFF1B] border-black/50 shadow-md scale-105"
                            : "bg-transparent border-gray-400 hover:bg-white/10"
                        }
                      `}
                      >
                        <div
                          className={`p-1.5 rounded-xl flex items-center justify-center shrink-0 ${
                            isSelected ? "bg-white" : "bg-[#CEFF1B]"
                          }`}
                        >
                          <Icon
                            size={22}
                            className="text-black"
                            strokeWidth={2}
                          />
                        </div>
                        <span
                          className={`font-bold text-lg ${
                            isSelected ? "text-black" : "text-gray-800"
                          }`}
                        >
                          {category.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              {/* Budget */}
              <div>
                <label className="block text-gray-800 font-bold mb-3 text-lg">
                  Average project budget
                </label>
                <input
                  type="text"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  placeholder="$4K"
                  className="w-full p-3 rounded-xl border-2 border-gray-400 bg-gray-100 text-gray-800 placeholder-gray-500 focus:border-black focus:outline-none transition-all font-medium"
                />
              </div>

              {/* Frequency */}
              <div>
                <label className="block text-gray-800 font-bold mb-3 text-lg">
                  Expected project frequency
                </label>
                <div className="flex gap-3">
                  {["Once", "Monthly", "Weekly"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setFrequency(opt.toLowerCase())}
                      className={`flex-1 py-3 px-2 rounded-xl border-2 font-medium transition-all ${
                        frequency === opt.toLowerCase()
                          ? "bg-[#CEFF1B] border-black text-black"
                          : "bg-white/40 border-gray-400 text-gray-600 hover:bg-white/60"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Business/Team Question */}
            <div className="mb-6">
              <label className="block text-gray-800 font-bold mb-3 text-lg">
                Are you hiring for your business/team?
              </label>
              <div className="flex gap-4 w-full md:w-1/2">
                {["Yes", "No"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setHiringForTeam(opt.toLowerCase())}
                    className={`flex-1 py-3 px-4 rounded-xl border-2 font-medium transition-all ${
                      hiringForTeam === opt.toLowerCase()
                        ? "bg-[#CEFF1B] border-black text-black"
                        : "bg-white/40 border-gray-400 text-gray-600 hover:bg-white/60"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Conditional Fields for Business Info */}
            {hiringForTeam === "yes" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 animate-fade-in-up">
                <div>
                  <label className="block text-gray-800 font-bold mb-3 text-lg">
                    Business name
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Type here"
                    className="w-full p-3 rounded-xl border-2 border-gray-400 bg-gray-100 text-gray-800 placeholder-gray-500 focus:border-black focus:outline-none transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-gray-800 font-bold mb-3 text-lg">
                    Role
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="Type here"
                    className="w-full p-3 rounded-xl border-2 border-gray-400 bg-gray-100 text-gray-800 placeholder-gray-500 focus:border-black focus:outline-none transition-all font-medium"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-8 relative z-10 w-full max-w-[900px]">
            <div className="flex justify-between items-center">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-lg border-2 border-gray-300 text-gray-600 font-medium text-lg hover:bg-gray-100 transition-all"
              >
                Reset
              </button>

              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  className="px-10 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-medium text-lg hover:bg-gray-100 transition-all"
                >
                  Back
                </button>
                <button
                  onClick={handleContinue}
                  disabled={!isContinueEnabled}
                  className={`px-10 py-3 rounded-lg font-medium text-lg transition-all ${
                    isContinueEnabled
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
    </>
  );
}
