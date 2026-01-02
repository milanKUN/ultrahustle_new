import { useState } from "react";

export default function MyPortfolio() {
  const [projects, setProjects] = useState([
    {
      title: "E-commerce Dashboard Redesign",
      desc: "Web Design",
      cost: "$600-$800",
    },
    {
      title: "E-commerce Dashboard Redesign",
      desc: "Web Design",
      cost: "$600-$800",
    },
    {
      title: "E-commerce Dashboard Redesign",
      desc: "Web Design",
      cost: "$600-$800",
    },
  ]);

  const [uploadStep, setUploadStep] = useState(null);
  // null | grid | form | success

  const addProject = () => {
    setProjects([...projects, { title: "", desc: "", cost: "" }]);
  };

  const removeProject = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-6xl ml-auto  pb-20">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-4 mb-6">
        <h3 className="text-lg font-semibold text-black whitespace-nowrap">
          My Portfolio
        </h3>
        <div className="flex-1 h-0.5 bg-[#2B2B2B]" />
      </div>

      {/* ================= MAIN PORTFOLIO ================= */}
      <div className="bg-transparent border-2 border-white rounded-2xl p-6 shadow-md mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* IMAGE */}
          <div className="relative rounded-xl overflow-hidden h-[260px] bg-gray-200">
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 blur-[1.5px]" />

            <button
              onClick={() => setUploadStep("grid")}
              className="absolute inset-0 m-auto bg-[#CEFF1B] px-4 py-2 rounded-md text-sm font-medium shadow"
            >
              Upload Photo
            </button>
          </div>

          {/* FORM */}
          <div className="space-y-4">
            <Input label="Title" value="SalonSync - AI Salon App UI/UX" />
            <Textarea
              label="Description"
              value="AI-powered salon booking app with smart recommendations."
              limit={150}
            />
            <Input label="Project cost" value="$600-$800" />
          </div>
        </div>
      </div>

      {/* ================= GRID PROJECTS ================= */}
      <div className="border-2 border-white bg-transparent rounded-xl p-6 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="relative rounded-xl overflow-hidden h-[140px] bg-gray-200">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 blur-[1.5px]" />

                <button
                  onClick={() => setUploadStep("grid")}
                  className="absolute inset-0 m-auto bg-[#CEFF1B] px-3 py-1 rounded text-xs shadow"
                >
                  Change Photo
                </button>

                <button
                  onClick={() => removeProject(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full px-1"
                >
                  ✕
                </button>
              </div>

              <Input label="Title" value={item.title} />
              <Textarea label="Description" value={item.desc} />
              <Input label="Project cost" value={item.cost} small />
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={addProject}
            className="bg-[#CEFF1B] px-4 py-2 rounded-md text-sm font-medium border border-black"
          >
            Add more
          </button>
        </div>
      </div>

      {/* ================= ACTIONS ================= */}
      <div className="flex justify-end gap-4">
        <button className="px-5 py-2 border border-black rounded-lg text-sm bg-white">
          Discard
        </button>
        <button className="px-5 py-2 bg-[#CEFF1B] rounded-lg text-sm font-medium border border-black">
          Save Changes
        </button>
      </div>

      {/* ================= UPLOAD FLOW ================= */}
      {uploadStep === "grid" && (
        <UploadGrid onSelect={() => setUploadStep("form")} />
      )}

      {uploadStep === "form" && (
        <UploadForm
          onCancel={() => setUploadStep(null)}
          onUpload={() => setUploadStep("success")}
        />
      )}

      {uploadStep === "success" && (
        <UploadSuccess onClose={() => setUploadStep(null)} />
      )}
    </div>
  );
}

/* ================= UPLOAD GRID ================= */

function UploadGrid({ onSelect }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">
      <div className="bg-gradient-to-r from-lime-50 via-white to-lime-100 p-6 rounded-2xl w-[820px]">
        <h4 className="font-semibold mb-4">Select and upload your file</h4>
        <button
          onClick={() => removeProject(index)}
          className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full px-1"
        >
          ✕
        </button>

        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              onClick={onSelect}
              className="h-[120px] border-2 border-dashed rounded-xl flex items-center justify-center cursor-pointer bg-white/60"
            >
              <span className="text-3xl text-gray-400">＋</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-red-500 mt-3">
          3 required, up to 50 allowed
        </p>
      </div>
    </div>
  );
}

/* ================= UPLOAD FORM ================= */

function UploadForm({ onCancel, onUpload }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
  <div className="bg-white rounded-2xl p-6 w-[760px] flex gap-6">

    <div className="w-[280px] h-[200px] bg-gray-200 rounded-xl" />

    {/* 👇 yahin alignment fix */}
    <div className="flex-1 flex items-end justify-end">
      <div className="flex gap-3">
        <button onClick={onCancel} className="px-4 py-2 border rounded-md">
          Cancel
        </button>

        <button
          onClick={onUpload}
          className="px-4 py-2 bg-[#CEFF1B] rounded-md font-medium"
        >
          Upload
        </button>
      </div>
    </div>

  </div>
</div>

  );
}

/* ================= SUCCESS ================= */

function UploadSuccess({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="relative w-[760px] h-[220px] rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h3 className="text-xl text-[#CEFF1B] font-semibold mb-4">
            You have successfully uploaded!!!
          </h3>
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-[#CEFF1B] rounded-md font-medium"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= INPUTS ================= */

function Input({ label, value, small }) {
  return (
    <div>
      <label className="block text-lg font-medium mb-1">{label}</label>
      <input
        defaultValue={value}
        className={`${
          small ? "w-40" : "w-full"
        } border border-black rounded-md px-3 py-2 bg-transparent text-sm`}
      />
    </div>
  );
}

function Textarea({ label, value = "", limit }) {
  return (
    <div>
      <label className="block text-lg font-medium mb-1">{label}</label>
      <textarea
        defaultValue={value}
        rows={3}
        className="w-full border border-black rounded-md px-3 py-2 bg-transparent text-sm resize-none"
      />
      {limit && (
        <p className="text-xs text-red-500 mt-1">
          {value.length}/{limit} characters
        </p>
      )}
    </div>
  );
}
