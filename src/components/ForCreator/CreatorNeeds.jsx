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

export default function CreatorNeeds() {
  const navigate = useNavigate();

  const currentStep = 4;
  const totalSteps = 8;

  /* ================= STATES ================= */
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [primarySkill, setPrimarySkill] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [rateRange, setRateRange] = useState("");
  const [hasPortfolio, setHasPortfolio] = useState(null); // "yes" | "no"
  const [portfolioLinks, setPortfolioLinks] = useState("");

  /* ================= DATA ================= */
  const categories = [
    { id: "design", label: "Design", icon: Palette },
    { id: "development", label: "Development", icon: Code },
    { id: "marketing", label: "Marketing", icon: Megaphone },
    { id: "writing", label: "Writing", icon: PenTool },
    { id: "illustration", label: "Illustration", icon: Image },
    { id: "video", label: "Video Editing", icon: Video },
    { id: "data-ai", label: "Data & AI", icon: Database },
    { id: "music", label: "Music & Audio", icon: Music },
  ];

  /* ================= LOGIC ================= */
  const toggleCategory = (id) => {
    setSelectedCategories((prev) =>
      prev.includes(id)
        ? prev.filter((c) => c !== id)
        : [...prev, id]
    );
  };

  const isContinueEnabled =
    selectedCategories.length > 0 &&
    primarySkill.trim() !== "" &&
    experienceLevel !== "" &&
    hasPortfolio !== null &&
    (hasPortfolio === "no" || portfolioLinks.trim() !== "");

  const handleReset = () => {
    setSelectedCategories([]);
    setPrimarySkill("");
    setExperienceLevel("");
    setRateRange("");
    setHasPortfolio(null);
    setPortfolioLinks("");
  };

  const handleBack = () => navigate("/creator-goals-selection");

  const handleContinue = () => {
    if (!isContinueEnabled) return;
    navigate("/creator-setup-workspace");
  };

  /* ================= JSX ================= */
  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden min-h-screen bg-[#EFEFEF] overflow-hidden">
        {/* GREEN TOP */}
        <div className="relative bg-[#CEFF1B] pt-6 pb-40 px-6">
          <button
            type="button"
            onClick={handleBack}
            className="w-10 h-10 rounded-full border border-black/30 bg-white/40 backdrop-blur shadow flex items-center justify-center"
          >
            ←
          </button>

          <div className="mt-14 text-center px-4">
            <h1 className="text-[26px] font-bold text-black leading-snug">
              Tell us more <br /> about your skills
            </h1>
            <p className="mt-3 text-black/70 text-[16px]">
              What services do you want to offer?
            </p>
          </div>
        </div>

        {/* WHITE CARD */}
        <div className="mt-6 px-4 pb-10">
          <div className="bg-[#F1F1EE] rounded-[28px] p-6 shadow-xl max-w-[420px] mx-auto">
            {/* CATEGORIES */}
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const active = selectedCategories.includes(cat.id);

                return (
                  <div
                    key={cat.id}
                    onClick={() => toggleCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition ${
                      active
                        ? "bg-[#CEFF1B] border-black"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    <Icon size={14} />
                    <span className="text-sm font-medium">{cat.label}</span>
                  </div>
                );
              })}
            </div>

            {/* FORM */}
            <div className="space-y-4">
              <input
                value={primarySkill}
                onChange={(e) => setPrimarySkill(e.target.value)}
                placeholder="Primary skill / niche"
                className="w-full p-3 rounded-lg border"
              />

              <select
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
                className="w-full p-3 rounded-lg border"
              >
                <option value="">Experience level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="pro">Pro</option>
                <option value="expert">Expert</option>
              </select>

              <input
                value={rateRange}
                onChange={(e) => setRateRange(e.target.value)}
                placeholder="Hourly / project range (optional)"
                className="w-full p-3 rounded-lg border"
              />

              <div className="flex gap-3">
                {["yes", "no"].map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setHasPortfolio(opt)}
                    className={`flex-1 py-2 rounded-lg border ${
                      hasPortfolio === opt
                        ? "bg-[#CEFF1B] border-black"
                        : "bg-white border-gray-300"
                    }`}
                  >
                    {opt === "yes" ? "Has Portfolio" : "No Portfolio"}
                  </button>
                ))}
              </div>

              {hasPortfolio === "yes" && (
                <input
                  value={portfolioLinks}
                  onChange={(e) => setPortfolioLinks(e.target.value)}
                  placeholder="Portfolio links"
                  className="w-full p-3 rounded-lg border"
                />
              )}
            </div>

           

            {/* FOOTER */}
            <div className="flex justify-between items-center my-4 ">
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-2 border rounded-md text-sm"
              >
                Reset
              </button>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-3 py-2 border rounded-md text-sm"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleContinue}
                  disabled={!isContinueEnabled}
                  className={`px-3 py-2 rounded-md text-sm border ${
                    isContinueEnabled
                      ? "bg-[#CEFF1B] border-black"
                      : "bg-gray-200 border-gray-300 text-gray-400"
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
             {/* STEPS */}
            <div className="flex justify-center gap-2 my-6">
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
        <div className="w-[30%] bg-[#CEFF1B] p-20 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Tell us more about your skills
            </h2>
            <p className="text-black/70 text-xl">
              What services do you want to offer?
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

        <div className="w-[70%] bg-gradient-to-br from-[#E8E8E8] via-[#E0E0E0] to-[#D8D8D8] p-12 flex justify-center items-center">
  <div className="w-full max-w-[900px] bg-white/10 border-4 border-white/40 rounded-[30px] p-10">
    
    {/* CATEGORIES */}
    <div className="flex flex-wrap gap-4 mb-10">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const active = selectedCategories.includes(cat.id);

        return (
          <div
            key={cat.id}
            onClick={() => toggleCategory(cat.id)}
            className={`flex items-center gap-4 px-6 py-4 rounded-xl border cursor-pointer transition ${
              active
                ? "bg-[#CEFF1B] border-black scale-105"
                : "bg-white/20 border-black/10"
            }`}
          >
            <Icon size={22} />
            <span className="font-semibold text-lg">{cat.label}</span>
          </div>
        );
      })}
    </div>

    {/* ===== FORM (MISSING PART – NOW ADDED) ===== */}
    <div className="grid grid-cols-2 gap-6 mb-10">
      <input
        value={primarySkill}
        onChange={(e) => setPrimarySkill(e.target.value)}
        placeholder="Primary skill / niche"
        className="col-span-2 p-4 rounded-xl border"
      />

      <select
        value={experienceLevel}
        onChange={(e) => setExperienceLevel(e.target.value)}
        className="p-4 rounded-xl border"
      >
        <option value="">Experience level</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="pro">Pro</option>
        <option value="expert">Expert</option>
      </select>

      <input
        value={rateRange}
        onChange={(e) => setRateRange(e.target.value)}
        placeholder="Hourly / project range (optional)"
        className="p-4 rounded-xl border"
      />

      <div className="col-span-2 flex gap-4 ">
        {["yes", "no"].map((opt) => (
          <button
            type="button"
            key={opt}
            onClick={() => setHasPortfolio(opt)}
            className={`flex-1 py-3 rounded-xl border ${
              hasPortfolio === opt
                ? "bg-[#CEFF1B] border-black"
                : "bg-white border-gray-300"
            }`}
          >
            {opt === "yes" ? "Has Portfolio" : "No Portfolio"}
          </button>
        ))}
      </div>

      {hasPortfolio === "yes" && (
        <input
          value={portfolioLinks}
          onChange={(e) => setPortfolioLinks(e.target.value)}
          placeholder="Portfolio links"
          className="col-span-2 p-4 rounded-xl border"
        />
      )}
    </div>

    {/* FOOTER */}
    <div className="flex justify-between ">
      <button
        type="button"
        onClick={handleReset}
        className="px-3 py-3 border rounded-lg"
      >
        Reset
      </button>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={handleBack}
          className="px-3 py-3 border rounded-lg"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleContinue}
          disabled={!isContinueEnabled}
          className={`px-3 py-3 rounded-lg border ${
            isContinueEnabled
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
