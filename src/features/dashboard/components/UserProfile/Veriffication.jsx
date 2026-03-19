import { useState } from "react";
import { Upload } from "lucide-react";

export default function Verification() {
  const [tab, setTab] = useState("government");

  return (
    <div
      className="
        verification-page
        w-full
        -mt-12 sm:-mt-24          /* ✅ mobile fix */
        from-gray-100 via-white to-lime-50
        rounded-xl
        p-4 sm:p-6 md:p-8
        min-h-[450px]
        flex flex-col
        overflow-x-hidden        /* ✅ STOP right overflow */
      "
    >
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-6">
        <h3 className="text-xl font-semibold whitespace-nowrap">
          Verification (Use Automated KYC Service)
        </h3>
        <div className="flex-1 h-px bg-[#D9D9D9]" />
      </div>

      {/* IDENTITY VERIFICATION */}
      <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-gray-700 mb-4">
        Identity Verification
      </p>

      {/* TABS */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 w-full">
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
      <div className="flex-1 w-full overflow-x-hidden">
        {/* GOVERNMENT ID */}
        {tab === "government" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 w-full">
            <UploadBox title="Front Side" />
            <UploadBox title="Back Side" />
          </div>
        )}

        {/* SELFIE VERIFICATION */}
        {tab === "selfie" && (
          <div className="w-full">
            <p className="text-sm font-medium text-gray-700 mb-3">
              Selfie Verification
            </p>
            <UploadBox full />
          </div>
        )}

        {/* AUTO VERIFICATION RESULT */}
        {tab === "auto" && <div className="h-full" />}
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-8 sm:mt-10 w-full">
        <button className="px-10 py-2 rounded-lg text-sm border border-black bg-[#F4F6F2] hover:bg-gray-100 w-full sm:w-auto">
          Discard
        </button>
        <button className="px-10 py-2 bg-[#CEFF1B] rounded-lg text-sm font-bold border border-black w-full sm:w-auto">
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
      className={`
        px-6
        py-2
        text-sm
        rounded-md
        border
        transition
        whitespace-nowrap
        ${active
          ? "bg-[#CEFF1B] border-black text-black font-medium"
          : "bg-[#F4F6F2] border-gray-200 text-gray-500 hover:bg-gray-100"
        }
      `}
    >
      {label}
    </button>
  );
}

function UploadBox({ title, full }) {
  return (
    <div className="w-full overflow-hidden">
      {title && (
        <p className="text-[14px] sm:text-[16px] font-medium text-gray-700 mb-2">
          {title}
        </p>
      )}

      <div
        className={`
          w-full
          border border-gray-200
          rounded-xl
          text-center
          bg-[#F8F9FA]
          hover:bg-gray-100
          transition
          cursor-pointer
          ${full ? "p-10" : "p-8"}
        `}
      >
        <Upload className="mx-auto mb-4 text-gray-400" size={32} strokeWidth={1.5} />

        <p className="text-sm font-medium text-[#155DFC] break-words">
          <span className="underline">Click to upload</span>
          <span className="text-gray-600 font-normal">
            {" "}or Drag or drop file
          </span>
        </p>

        <p className="text-xs text-gray-400 mt-3">
          PDF, JPG, JPEG, PNG less than 10MB.
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Ensure your document are in good condition and readable
        </p>
      </div>
    </div>
  );
}
