import { useState, useRef } from "react";

export default function ProfileForm() {
  const TITLE_LIMIT = 40;
  const BIO_LIMIT = 160;

  const [title, setTitle] = useState("Product Designer & Full Stack Developer");
  const [bio, setBio] = useState(
    "Award-winning designer with 8+ years creating elegant, user-centered digital experiences. Specialized in design systems, mobile apps, and SaaS platforms."
  );

  const [openImageModal, setOpenImageModal] = useState(false);
  const [openFriends, setOpenFriends] = useState(false);
  const fileRef = useRef(null);

  return (
    <>
      {/* ================= PROFILE FORM ================= */}
      <div className="">
        {/* HEADER */}
        <div className="flex items-center gap-4 mb-8">
          <h3 className="text-[24px] font-semibold text-black whitespace-nowrap">
            My Profile
          </h3>
          <div className="flex-1 h-0.5  bg-[#2B2B2B] stroke-yellow-50 " />
        </div>

        {/* PROFILE BAR */}
        <div
          className="
    relative
    flex items-center justify-between
    px-8
    rounded-[27px]

    border-2 border-white
    shadow-[0_8px_32px_rgba(0,0,0,0.15)]
  "
          style={{
            width: "1085px",
            height: "137px",
            background: "rgba(43, 43, 43, 0)",
            backdropFilter: "blur(999.306396484375px)",
            WebkitBackdropFilter: "blur(999.306396484375px)",
          }}
        >
          {/* LEFT */}
          <div className="flex items-center gap-5">
            <div
              onClick={() => setOpenImageModal(true)}
              className="
        relative w-16 h-16 rounded-full
        bg-transparent
        flex items-center justify-center
        text-gray-600 font-semibold
        cursor-pointer
        border border-white/80
        shadow
        hover:ring-2 hover:ring-lime-400
        transition
      "
            >
              {/* CAMERA ICON */}
              <span
                className="
        absolute bottom-0 right-0
        bg-white
        rounded-full
        p-1
        shadow
        border border-gray-200
      "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path d="M2 7a2 2 0 0 1 2-2h2.2a1 1 0 0 0 .98-.8l.14-.7A2 2 0 0 1 9.26 2h5.48a2 2 0 0 1 1.94 1.5l.14.7a1 1 0 0 0 .98.8H20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
                </svg>
              </span>
            </div>

            <span className="text-[24px] font-semibold text-gray-900">
              Abigail
            </span>
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={() => setOpenFriends(true)}
            className="
    flex items-center justify-center gap-2
    rounded-md
    from-neutral-400 text[16px]
    transition
  "
            style={{
              width: "154.8px",
              height: "44.4px",
              background: "#CEFF1B",
              border: "0.6px solid #2B2B2B",
              backdropFilter: "blur(350.477478027343px)",
              WebkitBackdropFilter: "blur(350.477478027343px)",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2B2B2B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <line x1="19" y1="8" x2="19" y2="14" />
              <line x1="22" y1="11" x2="16" y2="11" />
            </svg>
            Friend List
          </button>
        </div>

        {/* FORM */}
      </div>

      {/* ================= IMAGE MODAL ================= */}
      {openImageModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-2xl w-[420px] p-8 relative">
            <button
              onClick={() => setOpenImageModal(false)}
              className="absolute top-4 right-4 text-red-500 font-bold"
            >
              ✕
            </button>

            <h3 className="text-center font-semibold text-black-800 mb-6">
              Resize and adjust <br /> your photo
            </h3>

            <div className="bg-gray-800 rounded-xl h-56 w-56 flex items-center justify-center ml-16 mb-5">
              <button
                onClick={() => fileRef.current.click()}
                className="bg-white px-5 py-2 rounded text-sm"
              >
                Select Image
              </button>
              <input type="file" ref={fileRef} hidden />
            </div>

            <p className="text-xs text-center text-red-500 mb-4">
              Maximum upload size: 10 MB
            </p>

            <input
              type="range"
              min="1"
              max="100"
              className="w-full mb-5 accent-lime-400"
            />

            <button className="w-full bg-lime-400  py-3 rounded-md font-medium">
              Upload Photo
            </button>
          </div>
        </div>
      )}

      {/* ================= FRIEND LIST MODAL ================= */}
      {openFriends && <FriendListModal onClose={() => setOpenFriends(false)} />}
    </>
  );
}

/* ================= FRIEND LIST MODAL ================= */

function FriendListModal({ onClose }) {
  const [tab, setTab] = useState("list");

  const users = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: "User Name",
  }));

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-gradient-to-br from-lime-100 via-white to-white w-[620px] rounded-2xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-lg"
        >
          ✕
        </button>

        {/* TABS */}
        <div className="flex justify-center gap-8 mb-6 font-semibold">
          <button
            onClick={() => setTab("list")}
            className={`px-5 py-1.5 rounded-full ${
              tab === "list" ? "bg-lime-400" : ""
            }`}
          >
            Your List
          </button>

          <button
            onClick={() => setTab("suggestions")}
            className={`px-5 py-1.5 rounded-full ${
              tab === "suggestions" ? "bg-lime-400" : ""
            }`}
          >
            Suggestions
          </button>
        </div>

        <div className="h-px bg-gray-300 mb-5" />

        {/* SEARCH */}
        <div className="relative mb-5">
          <input
            placeholder="Search here"
            className="w-full rounded-full bg-white border px-5 py-2.5 text-sm"
          />
          <span className="absolute right-5 top-2.5 text-gray-500 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
        </div>

        {/* LIST */}
        <div className="max-h-[360px] overflow-y-auto pr-2 space-y-5">
          {users.map((u) => (
            <div key={u.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gray-200" />
                <span className="text-sm">{u.name}</span>
              </div>

              {tab === "list" ? (
                <div className="flex gap-3">
                  <button className="bg-lime-400 text-xs px-4 py-1.5 rounded-md">
                    Following
                  </button>
                  <button className="border text-xs px-4 py-1.5 rounded-md">
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button className="bg-lime-400 text-xs px-5 py-1.5 rounded-md">
                    Add
                  </button>
                  <button className="text-gray-500">✕</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
