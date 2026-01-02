import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SetupWorkspace() {
  const navigate = useNavigate();
  const currentStep = 6;
  const totalSteps = 8;

  useEffect(() => {
    const timer = setTimeout(() => {
      // navigate("/dashboard"); // future
      console.log("Workspace ready");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden min-h-screen bg-[#EFEFEF] flex flex-col">
        {/* TOP IMAGE */}
        <div className="relative h-[45vh] w-full">
          <img
            src="/onboarding-character.jpg"
            alt="Character"
            className="w-full h-full object-cover object-top"
          />

          {/* overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* CARD */}
        <div className="mt-10 px-4 pb-10">
          <div className="bg-white rounded-[28px] shadow-xl p-6 text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-3">
              Let us set up your workspace
            </h1>

            <p className="text-gray-600 text-sm mb-8">
              We're configuring your dashboard, recommendations, and preferences
            </p>

            {/* Loader */}
            <div className="flex justify-center mb-10">
              <img
                src="/arrow-loader.png"
                alt="Loading"
                className="w-24 h-24 object-contain"
              />
            </div>

            {/* Steps */}
            <div className="flex justify-center gap-2">
              {[...Array(totalSteps)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === currentStep ? "bg-[#C3FF00]" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP VIEW (UNCHANGED) ================= */}
      <div className="hidden md:flex min-h-screen w-full">
        {/* Left Image */}
        <div className="w-[30%] relative overflow-hidden items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#E8E8E8] via-[#E0E0E0] to-[#D8D8D8]" />
          <img
            src="/onboarding-character.jpg"
            alt="Ultra Hustle Character"
            className="relative z-10 w-full h-full object-cover object-top"
          />
        </div>

        {/* Right Content */}
        <div className="w-[70%] bg-gradient-to-br from-[#E8E8E8] via-[#E0E0E0] to-[#D8D8D8] p-12 flex justify-center items-center relative overflow-hidden">
          {/* Glow effects */}
          <div
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(195,255,0,.4) 0%, rgba(195,255,0,.15) 40%, transparent 70%)",
              bottom: "-15%",
              left: "-15%",
              filter: "blur(60px)",
            }}
          />

          <div
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(195,255,0,.35) 0%, rgba(195,255,0,.1) 40%, transparent 70%)",
              top: "-10%",
              right: "-10%",
              filter: "blur(50px)",
            }}
          />

          {/* Card */}
          <div className="bg-white/30 backdrop-blur-xl rounded-[30px] shadow-xl p-16 w-[95%] h-[90%] border-4 border-white/50 flex flex-col justify-center items-center text-center z-10">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Let us set up your workspace
            </h1>

            <p className="text-2xl text-gray-700 max-w-[600px] leading-relaxed mb-16">
              We're configuring your dashboard, recommendations, and category
              preferences
            </p>

            <div className="mb-20">
              <img
                src="/arrow-loader.png"
                alt="Loading"
                className="w-32 h-32 object-contain"
              />
            </div>

            <div className="flex gap-3">
              {[...Array(totalSteps)].map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full ${
                    i === currentStep ? "bg-[#C3FF00]" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
