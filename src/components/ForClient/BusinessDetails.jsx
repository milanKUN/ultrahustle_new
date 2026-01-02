import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BusinessDetails() {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    businessName: "",
    employees: "",
    industry: "",
    website: "",
    taxId: "",
    country: "",
    state: "",
    city: "",
  });

  const [isPersonalAccount, setIsPersonalAccount] = useState(false);

  const currentStep = 5; // Step 5 (0-indexed was 4 previously)
  const totalSteps = 8;

  const industries = [
    "Technology",
    "Marketing",
    "Design",
    "E-commerce",
    "Education",
    "Healthcare",
    "Real Estate",
    "Entertainment",
    "Finance",
    "Other",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Numeric validation for employees
    if (name === "employees" && value && !/^\d*$/.test(value)) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBack = () => {
    navigate("/creator-needs");
  };

  const handleContinue = () => {
    // Navigate to next step
    if (isFormValid()) {
      navigate("/setup-workspace");
    }
  };

  const handleReset = () => {
    setFormData({
      businessName: "",
      employees: "",
      industry: "",
      website: "",
      taxId: "",
      country: "",
      state: "",
      city: "",
    });
    setIsPersonalAccount(false);
  };

  // Validation:
  // If personal: always valid.
  // If business: Name, Employees, Industry, Country, State, City required?
  // Images show "Optional" on Website and GST. Implies others are required.
  const isFormValid = () => {
    if (isPersonalAccount) return true;
    return (
      formData.businessName.trim() !== "" &&
      formData.employees.trim() !== "" &&
      formData.industry.trim() !== "" &&
      formData.country.trim() !== "" &&
      formData.state.trim() !== "" &&
      formData.city.trim() !== ""
    );
  };

  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden bg-[#EFEFEF] min-h-screen overflow-hidden">
        <div className="relative bg-[#CEFF1B] pt-6 pb-40 px-6">
          <button
            onClick={handleBack}
            className="w-10 h-10 rounded-full border border-black/20 bg-white/40 shadow flex items-center justify-center"
          >
            ←
          </button>

          <div className="mt-12 text-center px-4">
            <h1 className="text-[26px] font-bold text-black leading-snug">
              Organization & <br /> Business Details
            </h1>
          </div>
        </div>

        <div className="mt-6 px-4 pb-10">
          <div className="bg-[#F3F3EF] rounded-[32px] px-6 pt-6 pb-5 shadow-xl max-w-[420px] mx-auto">
            {/* ================= FORM ================= */}
            {!isPersonalAccount && (
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {/* Business Name */}
                <div>
                  <label className="text-[11px] font-medium text-black/80">
                    Business / Brand Name
                  </label>
                  <input
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Type here"
                    className="w-full mt-1 border border-black/30 rounded-md px-2.5 py-1.5 text-[12px] bg-white"
                  />
                </div>

                {/* Employees */}
                <div>
                  <label className="text-[11px] font-medium text-black/80">
                    Number of Employees
                  </label>
                  <input
                    name="employees"
                    value={formData.employees}
                    onChange={handleInputChange}
                    placeholder="Only numeric"
                    className="w-full mt-1 border border-black/30 rounded-md px-2.5 py-1.5 text-[12px] bg-white"
                  />
                </div>

                {/* Industry */}
                <div>
                  <label className="text-[11px] font-medium text-black/80">
                    Industry
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full mt-1 border border-black/30 rounded-md px-2.5 py-1.5 text-[12px] bg-white"
                  >
                    <option value="">Type here</option>
                    {industries.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Website */}
                <div>
                  <label className="text-[11px] font-medium text-black/80">
                    Website (optional)
                  </label>
                  <input
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="Type here"
                    className="w-full mt-1 border border-black/30 rounded-md px-2.5 py-1.5 text-[12px] bg-white"
                  />
                </div>

                {/* Tax ID */}
                <div>
                  <label className="text-[11px] font-medium text-black/80">
                    GST / VAT / Tax ID (optional)
                  </label>
                  <input
                    name="taxId"
                    value={formData.taxId}
                    onChange={handleInputChange}
                    placeholder="Type here"
                    className="w-full mt-1 border border-black/30 rounded-md px-2.5 py-1.5 text-[12px] bg-white"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="text-[11px] font-medium text-black/80">
                    Country
                  </label>
                  <input
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="Type here"
                    className="w-full mt-1 border border-black/30 rounded-md px-2.5 py-1.5 text-[12px] bg-white"
                  />
                </div>

                {/* State */}
                <div>
                  <label className="text-[11px] font-medium text-black/80">
                    State
                  </label>
                  <input
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="Type here"
                    className="w-full mt-1 border border-black/30 rounded-md px-2.5 py-1.5 text-[12px] bg-white"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="text-[11px] font-medium text-black/80">
                    City
                  </label>
                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Type here"
                    className="w-full mt-1 border border-black/30 rounded-md px-2.5 py-1.5 text-[12px] bg-white"
                  />
                </div>
              </div>
            )}

            {/* ================= PERSONAL ACCOUNT ================= */}
            <div className="flex items-center gap-3 mt-3">
              <button
                onClick={() => setIsPersonalAccount(!isPersonalAccount)}
                className={`w-10 h-7 rounded-full  transition-all duration-300 border-2 ${
                  isPersonalAccount
                    ? "bg-black border-black"
                    : "bg-white border-gray-400"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                    isPersonalAccount
                      ? "translate-x-8"
                      : "translate-x-0 bg-gray-400"
                  }`}
                >
                  {!isPersonalAccount && (
                    <div className="w-full h-full bg-gray-400 rounded-full" />
                  )}
                </div>
              </button>
              <span className="text-[13px] text-gray-700">
                This is a personal account
              </span>
            </div>

            {/* ================= FOOTER ================= */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handleReset}
                className="px-3 py-2.5 border border-black/30 rounded-lg text-[13px] text-black/60"
              >
                Reset
              </button>

              <div className="flex gap-3">
                <button
                  onClick={handleBack}
                  className="px-3 py-2.5 border border-black/30 rounded-lg text-[13px]"
                >
                  Back
                </button>

                <button
                  onClick={handleContinue}
                  disabled={!isFormValid()}
                  className={`px-3 py-2.5 rounded-lg text-[13px] border ${
                    isFormValid()
                      ? "bg-[#CEFF1B] border-black text-black"
                      : "bg-[#E5E5E5] border-black/20 text-black/40"
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
            {/* ================= STEP DOTS ================= */}
            <div className="flex justify-center gap-2 mt-6 mt-4">
              {[...Array(totalSteps)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === currentStep ? "bg-[#CEFF1B]" : "bg-black/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden md:flex min-h-screen w-full">
        {/* Left Side - Acid Green Panel */}
        <div className="hidden md:flex w-[30%] relative overflow-hidden">
          <div className="absolute inset-0 bg-[#CEFF1B] flex flex-col justify-between p-10">
            {/* Title */}
            <div className="mt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight">
                Organization & Business Details
              </h2>
              <h2 className="text-black text-3xl font-bold">(Optional)</h2>
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
        <div className="w-full md:w-[70%] bg-gradient-to-br from-[#E8E8E8] via-[#E0E0E0] to-[#D8D8D8] p-8 md:p-12 flex flex-col justify-start pt-32 items-center relative overflow-hidden">
          {/* Animated Gradient Glows (Reused) */}
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

          {/* Main Content Area */}
          <div className="relative z-10 w-full max-w-[1200px]">
            {/* Main Card */}
            <div
              className={`bg-white/10 backdrop-blur-md border-4 border-white/40 rounded-[30px] p-8 shadow-xl mb-8 flex items-center justify-center transition-all duration-300 ${
                isPersonalAccount ? "min-h-[200px]" : "min-h-[500px]"
              }`}
            >
              {isPersonalAccount ? (
                /* Personal Account View */
                <div className="text-center animate-fade-in-up">
                  <h3 className="text-2xl font-bold text-gray-700">
                    No business details required
                  </h3>
                </div>
              ) : (
                /* Business Details Form */
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 animate-fade-in-up">
                  {/* Business Name */}
                  <div>
                    <label className="block text-gray-800 font-bold mb-2">
                      Business / Brand Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="Type here"
                      className="w-full p-3 rounded-xl border-2 border-gray-400 bg-transparent text-gray-800 focus:border-black focus:outline-none transition-all"
                    />
                  </div>

                  {/* Number of Employees */}
                  <div>
                    <label className="block text-gray-800 font-bold mb-2">
                      Number of Employees
                    </label>
                    <input
                      type="text"
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      placeholder="Type here (only numeric)"
                      className="w-full p-3 rounded-xl border-2 border-gray-400 bg-transparent text-gray-800 focus:border-black focus:outline-none transition-all"
                    />
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block text-gray-800 font-bold mb-2">
                      Industry
                    </label>
                    <div className="relative">
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-xl border-2 border-gray-400 bg-transparent text-gray-800 focus:border-black focus:outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>
                          Type here
                        </option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-gray-800 font-bold mb-2">
                      Website (optional)
                    </label>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      placeholder="Type here"
                      className="w-full p-3 rounded-xl border-2 border-gray-400 bg-transparent text-gray-800 focus:border-black focus:outline-none transition-all"
                    />
                  </div>

                  {/* GST */}
                  <div>
                    <label className="block text-gray-800 font-bold mb-2">
                      GST / VAT / Tax ID (optional)
                    </label>
                    <input
                      type="text"
                      name="taxId"
                      value={formData.taxId}
                      onChange={handleInputChange}
                      placeholder="Type here"
                      className="w-full p-3 rounded-xl border-2 border-gray-400 bg-transparent text-gray-800 focus:border-black focus:outline-none transition-all"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-gray-800 font-bold mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="Type here"
                      className="w-full p-3 rounded-xl border-2 border-gray-400 bg-transparent text-gray-800 focus:border-black focus:outline-none transition-all"
                    />
                  </div>

                  {/* State */}
                  <div>
                    <label className="block text-gray-800 font-bold mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="Type here"
                      className="w-full p-3 rounded-xl border-2 border-gray-400 bg-transparent text-gray-800 focus:border-black focus:outline-none transition-all"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-gray-800 font-bold mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Type here"
                      className="w-full p-3 rounded-xl border-2 border-gray-400 bg-transparent text-gray-800 focus:border-black focus:outline-none transition-all"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Toggle and Navigation */}
            <div className="flex flex-col gap-6">
              {/* Toggle */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPersonalAccount(!isPersonalAccount)}
                  className={`w-16 h-8 rounded-full p-1 transition-all duration-300 border-2 ${
                    isPersonalAccount
                      ? "bg-black border-black"
                      : "bg-white border-gray-400"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      isPersonalAccount
                        ? "translate-x-8"
                        : "translate-x-0 bg-gray-400"
                    }`}
                  >
                    {!isPersonalAccount && (
                      <div className="w-full h-full bg-gray-400 rounded-full" />
                    )}
                  </div>
                </button>
                <span className="text-xl text-gray-600 font-medium">
                  This is a personal account
                </span>
              </div>

              {/* Nav Buttons */}
              <div className="flex justify-between items-center w-full">
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
                    disabled={!isFormValid()}
                    className={`px-10 py-3 rounded-lg font-medium text-lg transition-all ${
                      isFormValid()
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
      </div>
    </>
  );
}
