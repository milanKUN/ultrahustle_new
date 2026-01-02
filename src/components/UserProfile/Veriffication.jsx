import { useState } from "react";
import { Upload } from "lucide-react";

export default function Verification() {
  const [tab, setTab] = useState("government");

  return (
    <div className="w-full  from-gray-100 via-white to-lime-50 rounded-xl p-8 min-h-[450px] flex flex-col">
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-8">
        <h3 className="text-2xl font-bold text-gray-700 whitespace-nowrap">
          Verification (Use Automated KYC Service)
        </h3>
        <div className="flex-1 h-0.5 bg-[#2B2B2B]" />
      </div>

      {/* IDENTITY VERIFICATION */}
      <p className="text-lg font-semibold text-gray-700 mb-4">
        Identity Verification
      </p>

      {/* TABS */}
      <div className="flex gap-3 mb-8 bg-transparent ">
        <TabButton
          label="Government ID"
          active={tab === "government"}
          onClick={() => setTab("government")}
        />
        <TabButton
          label="Selfie verification"
          active={tab === "selfie"}
          onClick={() => setTab("selfie")}
        />
        <TabButton
          label="Auto-verification result"
          active={tab === "auto"}
          onClick={() => setTab("auto")}
        />
      </div>

      {/* ================= TAB CONTENT ================= */}
      <div className="flex-1">
        {/* GOVERNMENT ID */}
        {tab === "government" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <UploadBox title="Front Side " />
            <UploadBox title="Back Side" />
          </div>
        )}

        {/* SELFIE VERIFICATION */}
        {tab === "selfie" && (
          <div>
            <p className="text-sm font-medium text-gray-700 mb-3">
              Selfie Verification
            </p>
            <UploadBox full />
          </div>
        )}

        {/* AUTO VERIFICATION RESULT */}
        {tab === "auto" && (
          <div className="h-full" />
        )}
      </div>

      {/* ACTION BUTTONS (SAME FOR ALL) */}
      <div className="flex justify-end gap-4 mt-10">
        <button className="px-6 py-2 border border-black border-gray-400 rounded-md text-sm hover:bg-gray-100">
          Discard
        </button>
        <button className="px-6 py-2 bg-[#CEFF1B] border border-black rounded-md text-sm font-medium ">
          Confirm
        </button>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-xs rounded-md border transition
        ${
          active
            ? "bg-[#CEFF1B] border-black text-black"
            : "bg-transparent border-gray-300 text-gray-600 hover:bg-gray-50"
        }`}
    >
      {label}
    </button>
  );
}

function UploadBox({ title, full }) {
  return (
    <div className={full ? "" : ""}>
      {title && (
        <p className="text-sm font-medium text-gray-700 mb-2">{title}</p>
      )}

      <div
        className={`border border-gray-300 rounded-lg text-center bg-transparent hover:bg-gray-200 transition cursor-pointer
          ${full ? "p-10" : "p-6"}`}
      >
        <Upload className="mx-auto mb-3 text-gray-500" size={22} />

        <p className="text-sm font-medium text-blue-600 cursor-pointer">
          Click to upload
          <span className="text-gray-600 font-normal"> or Drag or drop file</span>
        </p>

        <p className="text-xs text-gray-500 mt-2">
          PDF, JPG, JPEG, PNG less than 10MB.
        </p>
        <p className="text-xs text-gray-500">
          Ensure your document are in good condition and readable
        </p>
      </div>
    </div>
  );
}
