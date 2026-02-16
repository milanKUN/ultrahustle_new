import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../OnboardingSelect.css";
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

export default function CreatorNeeds() {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [primarySkill, setPrimarySkill] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [rateRange, setRateRange] = useState("");
  const [hasPortfolio, setHasPortfolio] = useState(null); // 'yes', 'no'
  const [portfolioLinks, setPortfolioLinks] = useState("");

  // Custom Dropdown State
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const experienceRef = useRef(null);

  const experienceOptions = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "pro", label: "Pro" },
    { value: "expert", label: "Expert" },
  ];

  const selectedExperienceLabel =
    experienceOptions.find((opt) => opt.value === experienceLevel)?.label || "Select";

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (experienceRef.current && !experienceRef.current.contains(event.target)) {
        setIsExperienceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  const handleBack = () => navigate("/creator-goals-selection");

  const isContinueEnabled =
    selectedCategories.length > 0 &&
    primarySkill &&
    experienceLevel &&
    hasPortfolio &&
    (hasPortfolio === "no" || (hasPortfolio === "yes" && portfolioLinks));

  const handleContinue = () => {
    if (isContinueEnabled) navigate("/creator-setup-workspace");
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setPrimarySkill("");
    setExperienceLevel("");
    setRateRange("");
    setHasPortfolio(null);
    setPortfolioLinks("");
  };

  // ✅ Mobile chip (white + lime border style)
  const MobileChip = ({ category }) => {
    const Icon = category.icon;
    const active = selectedCategories.includes(category.id);

    return (
      <button
        type="button"
        onClick={() => toggleCategory(category.id)}
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
          {category.label}
        </span>
      </button>
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Top Section */}
      <div className="w-full md:w-[30%] relative overflow-hidden bg-[#CEFF1B] min-h-[45vh] md:min-h-screen">
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
          {/* Back Button - Mobile Only */}
          <button
            onClick={handleBack}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center mb-4 relative"
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
       <div className="flex-1 flex flex-col justify-center md:justify-start md:pt-32 items-start text-left px-4 md:px-0">
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
              Tell us more about
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold text-black -mt-1 leading-tight">
              your skills 
            </h2>

            <p className="text-black/60 text-base md:text-xl mt-4 md:mt-6 max-w-md">
              What service do you offer
            </p>
          </div>

          {/* Step Indicators - Desktop Only */}
          <div className="hidden md:flex items-center gap-3 ml-12">
            {[...Array(totalSteps)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentStep ? "bg-black w-4 h-4" : "bg-white"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full md:w-[70%] bg-[#E0E0E0] rounded-t-[50px] md:rounded-none -mt-12 md:mt-0 px-4 py-8 md:p-12 flex flex-col justify-center items-center relative overflow-hidden min-h-[60vh] md:min-h-screen z-20">
        <div className="relative z-10 w-full max-w-[900px]">
          {/* ✅ MOBILE (screenshot-style) */}
          <div className="md:hidden w-full max-w-[420px] mx-auto">
            <div className="bg-transparent rounded-[26px] px-2 py-4 border ">
              {/* category chips */}
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <MobileChip key={c.id} category={c} />
                ))}
              </div>

              {/* fields */}
              <div className="mt-5 grid grid-cols-2 gap-3 items-end relative z-20">
                <div>
                  <label className="block text-[11px] font-semibold text-black/70 mb-2">
                    Primary skill / niche
                  </label>
                  <input
                    type="text"
                    value={primarySkill}
                    onChange={(e) => setPrimarySkill(e.target.value)}
                    placeholder="Skill/niche"
                    className="w-full h-10 rounded-xl border border-black/20 bg-white px-3 text-sm text-black/70 focus:outline-none focus:!border-transparent focus:ring-0 focus:shadow-[0_0_15px_#CEFF1B]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-black/70 mb-2">
                    Experience level
                  </label>
                  <div className={`onboarding-custom-select ${isExperienceOpen ? "active" : ""}`} ref={experienceRef}>
                    <div
                      className={`onboarding-selected-option ${isExperienceOpen ? "open" : ""}`}
                      onClick={() => setIsExperienceOpen(!isExperienceOpen)}
                    >
                      <span>{selectedExperienceLabel}</span>
                      <span className="onboarding-arrow">▼</span>
                    </div>

                    {isExperienceOpen && (
                      <ul className="onboarding-options-list">
                        <li
                          className="text-gray-400 cursor-not-allowed"
                          style={{ pointerEvents: "none" }}
                        >
                          Select
                        </li>
                        {experienceOptions.map((opt) => (
                          <li
                            key={opt.value}
                            className={experienceLevel === opt.value ? "active" : ""}
                            onClick={() => {
                              setExperienceLevel(opt.value);
                              setIsExperienceOpen(false);
                            }}
                          >
                            {opt.label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="col-span-2">
                  <label className="block text-[11px] font-semibold text-black/70 mb-2">
                    Hourly / project range (optional)
                  </label>
                  <input
                    type="text"
                    value={rateRange}
                    onChange={(e) => setRateRange(e.target.value)}
                    placeholder="Hourly/project range"
                    className="w-full h-10 rounded-xl border border-black/20 bg-white px-3 text-sm text-black/70 focus:outline-none focus:!border-transparent focus:ring-0 focus:shadow-[0_0_15px_#CEFF1B]"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-[11px] font-semibold text-black/70 mb-2">
                    Do you already have a portfolio?
                  </label>
                  <div className="flex gap-2">
                    {["Yes", "No"].map((opt) => {
                      const val = opt.toLowerCase();
                      const active = hasPortfolio === val;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setHasPortfolio(val)}
                          className={[
                            "flex-1 h-10 rounded-xl border text-xs font-medium transition-all",
                            active
                              ? "bg-[#CEFF1B] border-black text-black"
                              : "bg-white border-black/20 text-black/60",
                          ].join(" ")}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* portfolio links */}
              {hasPortfolio === "yes" && (
                <div className="mt-5">
                  <label className="block text-[11px] font-semibold text-black/70 mb-2">
                    Upload links (IG, Behance, Portfolio, Drive)
                  </label>
                  <input
                    type="text"
                    value={portfolioLinks}
                    onChange={(e) => setPortfolioLinks(e.target.value)}
                    placeholder="Paste here"
                    className="w-full h-10 rounded-xl border border-black/20 bg-white px-3 text-sm text-black/70 focus:outline-none focus:!border-transparent focus:ring-0 focus:shadow-[0_0_15px_#CEFF1B]"
                  />
                </div>
              )}

              {/* buttons */}
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
                  disabled={!isContinueEnabled}
                  className={[
                    "h-10 px-6 rounded-lg text-sm font-medium border transition-all",
                    isContinueEnabled
                      ? "bg-[#CEFF1B] border-black text-black"
                      : "bg-[#DADADA] border-black/20 text-black/30",
                  ].join(" ")}
                >
                  Continue
                </button>
              </div>

              {/* step dots */}
              <div className="mt-6 flex justify-center items-center gap-2">
                {[...Array(totalSteps)].map((_, index) => (
                  <span
                    key={index}
                    className={[
                      "w-2 h-2 rounded-full",
                      index === currentStep ? "bg-black" : "bg-black/30",
                    ].join(" ")}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ✅ DESKTOP (unchanged as your existing) */}
          <div className="hidden md:block">
            {/* Creator Categories - Desktop Container */}
            <div className="bg-[#FEFEFE]/40 md:bg-white/40 backdrop-blur-md border-[#CEFF1B] md:border md:border-[#CEFF1B] rounded-[24px] md:rounded-[30px] p-4 md:p-8 shadow-xl mb-6 md:mb-8 flex flex-col justify-center gap-4">
              <div className="hidden md:flex flex-col gap-4">
                {[categories.slice(0, 4), categories.slice(4, 7), categories.slice(7)].map(
                  (row, rowIndex) => (
                    <div key={rowIndex} className="flex flex-wrap md:flex-nowrap gap-4 w-full">
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
                              ${isSelected
                                ? "bg-[#CEFF1B] border-[0.6px] border-[#2B2B2B] shadow-md scale-105"
                                : "bg-transparent border-[#2B2B2B] hover:bg-white/10"
                              }
                            `}
                          >
                            <div
                              className={`p-1.5 rounded-xl flex items-center justify-center shrink-0 bg-[#CEFF1B]`}
                            >
                              <Icon size={22} className="text-black" strokeWidth={2} />
                            </div>
                            <span
                              className={`font-[500] text-lg ${isSelected ? "text-black" : "text-gray-800"
                                }`}
                            >
                              {category.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )
                )}
              </div>

              {/* Mobile categories here were earlier - now handled in mobile card */}
            </div>

            {/* Desktop fields (original) */}
            <div className="grid grid-cols-2 gap-3 md:gap-8 mb-6 items-end relative z-20">
              <div>
                <label className="block text-gray-800 font-semibold font-roboto mb-2 md:mb-3 text-[9px] md:text-lg whitespace-nowrap">
                  Primary skill / niche
                </label>
                <input
                  type="text"
                  value={primarySkill}
                  onChange={(e) => setPrimarySkill(e.target.value)}
                  placeholder="Skill/niche"
                  className="w-full p-2 md:p-3 rounded-md md:rounded-xl border border-black bg-transparent md:bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:!border-transparent focus:ring-0 focus:shadow-[0_0_20px_#CEFF1B] font-medium text-xs md:text-base"
                />
              </div>

              <div>
                <label className="block text-gray-800  font-semibold font-roboto mb-2 md:mb-3 text-[9px] md:text-lg whitespace-nowrap">
                  Experience level
                </label>
                <div className={`onboarding-custom-select ${isExperienceOpen ? "active" : ""}`} ref={experienceRef}>
                  <div
                    className={`onboarding-selected-option ${isExperienceOpen ? "open" : ""}`}
                    onClick={() => setIsExperienceOpen(!isExperienceOpen)}
                  >
                    <span>{selectedExperienceLabel === "Select" ? "Experience level" : selectedExperienceLabel}</span>
                    <span className="onboarding-arrow">▼</span>
                  </div>

                  {isExperienceOpen && (
                    <ul className="onboarding-options-list">

                      {experienceOptions.map((opt) => (
                        <li
                          key={opt.value}
                          className={experienceLevel === opt.value ? "active" : ""}
                          onClick={() => {
                            setExperienceLevel(opt.value);
                            setIsExperienceOpen(false);
                          }}
                        >
                          {opt.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-800 font-semibold font-roboto mb-2 md:mb-3 text-[9px] md:text-lg whitespace-nowrap">
                  Your hourly / project range
                </label>
                <input
                  type="text"
                  value={rateRange}
                  onChange={(e) => setRateRange(e.target.value)}
                  placeholder="Hourly/project range"
                  className="w-full p-2 md:p-3 bg-transparent rounded-md md:rounded-xl border border-black bg-[#F0F0F0]/50 md:bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:!border-transparent focus:ring-0 focus:shadow-[0_0_20px_#CEFF1B] transition-all font-medium text-xs md:text-base"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-semibold font-roboto mb-2 md:mb-3 text-[9px] md:text-lg whitespace-nowrap">
                  Do you already have a portfolio?
                </label>
                <div className="flex gap-2">
                  {["Yes", "No"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setHasPortfolio(opt.toLowerCase())}
                      className={`flex-1 p-2 md:py-3 rounded-md md:rounded-xl font-medium transition-all text-xs md:text-base ${hasPortfolio === opt.toLowerCase()
                        ? "bg-[#CEFF1B] text-black"
                        : "bg-transparent text-gray-600"
                        }`}
                      style={{
                        border: "0.6px solid #000",
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

              </div>
            </div>

            {hasPortfolio === "yes" && (
              <div className="grid grid-cols-1 gap-3 md:gap-8 mb-6 animate-fade-in-up">
                <div>
                  <label className="block text-gray-800 font-semibold font-roboto mb-2 md:mb-3 text-[9px] md:text-lg whitespace-nowrap">
                    Upload links (IG, Behance, Portfolio, Drive)
                  </label>
                  <input
                    type="text"
                    value={portfolioLinks}
                    onChange={(e) => setPortfolioLinks(e.target.value)}
                    placeholder="Paste here"
                    className="w-[49%] bg-transparent p-2 md:p-3 rounded-md md:rounded-xl border border-black bg-[#F0F0F0]/50 md:bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:!border-transparent focus:ring-0 focus:shadow-[0_0_20px_#CEFF1B] transition-all font-medium text-xs md:text-base"
                  />
                </div>
              </div>
            )}

            {/* Desktop footer (original) */}
            <div className="mt-4 md:mt-8 relative z-10 w-full">
              <div className="flex justify-between items-center gap-2 md:gap-4">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 md:px-8 md:py-3 rounded-md md:rounded-lg border border-black text-black font-medium text-xs md:text-lg hover:bg-gray-100 transition-all"
                >
                  Reset
                </button>

                <div className="flex gap-2 md:gap-4">
                  <button
                    onClick={handleBack}
                    className="px-4 py-2 md:px-10 md:py-3 rounded-md md:rounded-lg border border-black text-black font-medium text-xs md:text-lg hover:bg-gray-100 transition-all"
                  >
                    Discard
                  </button>
                  <button
                    onClick={handleContinue}
                    disabled={!isContinueEnabled}
                    className={`px-4 py-2 md:px-10 md:py-3 rounded-md md:rounded-lg font-medium text-xs md:text-lg transition-all whitespace-nowrap ${isContinueEnabled
                      ? "bg-[#CEFF1B] border border-black text-black hover:bg-[#b8e617]"
                      : "bg-lime-200 border border-black text-black cursor-not-allowed"
                      }`}
                  >
                    Continue
                  </button>
                </div>
              </div>

              {/* (mobile dots now inside mobile card) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
