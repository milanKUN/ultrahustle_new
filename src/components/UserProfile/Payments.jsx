import React from "react";

function Payments() {
  return (
    <div className=" from-gray-100 to-lime-50 rounded-xl p-6">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-4 mb-6">
        <h3 className="text-lg font-semibold text-gray-700 whitespace-nowrap">
          Payments & Payouts
        </h3>
        <div className="flex-1 h-0.5 bg-[#2B2B2B]" />
      </div>

      <p className="text-xs text-gray-500 mb-6">
        (For buying services/products/courses)
      </p>

      {/* ================= PAYMENT METHODS ================= */}
      <div className="mb-8">
        <p className="text-sm font-semibold mb-3">Payment Methods</p>

        <div className="space-y-3 text-sm">
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            Add credit/debit card
          </label>
          <div className="flex-1 h-0.5 bg-[#2B2B2B]"></div>

         <div className="flex items-center gap-3">
  <div className="border rounded-md px-3 py-2 flex items-center bg-white">
    <img src="/visa.svg" alt="Visa" className="h-5" />
  </div>

  <div className="border rounded-md px-3 py-2 flex items-center bg-white">
    <img src="/mastercard.svg" alt="Mastercard" className="h-5" />
  </div>

  <div className="border rounded-md px-3 py-2 flex items-center bg-white">
    <img src="/paypal.svg" alt="PayPal" className="h-5" />
  </div>
</div>


          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            Scan and Pay with UPI
          </label>
          <div className="flex-1 h-0.5 bg-[#2B2B2B]"></div>

          <p className="text-xs text-black cursor-pointer">
            Click here to Scan
          </p>

          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            Remove / Set default
          </label>
          <div className="flex-1 h-0.5 bg-[#2B2B2B]"></div>
          <p className="text-xs text-gray-600">abc Bank ****1234</p>

         <div className="flex justify-between items-center mt-4">
  <button className="w-[180px] border-1 border-black bg-[#CEFF1B] px-3 py-1 rounded text-xs font-medium">
    + Add Another Account
  </button>

  <button className="w-[160px] px-4 py-2 border-1 border-black rounded-md text-xs">
    Discard
  </button>
</div>

        </div>
      </div>
      <p>
        <input type="radio" name="payment" />
        Add another account
      </p>
      <div className="h-px my-4 bg-gray-300 mb-8" />

      {/* ================= CARD DETAILS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="text-xs">Card Number</label>
          <input
            className="w-full bg-transparent border-1 border-black rounded-md px-3 py-2 text-sm"
            placeholder="**** **** **** 2345"
          />
        </div>

        <div>
          <label className="text-xs">CVV</label>
          <input
            className="w-full bg-transparent border-1 border-black rounded-md px-3 py-2 text-sm"
            placeholder="CVV"
          />
        </div>

        <div>
          <label className="text-xs">Name On Card</label>
          <input
            className="w-full bg-transparent  border-1 border-black rounded-md px-3 py-2 text-sm"
            placeholder="Name on card"
          />
        </div>

        <div>
          <label className="text-xs">Expiry Date</label>
          <input
            className="w-full bg-transparent border-1 border-black rounded-md px-3 py-2 text-sm"
            placeholder="MM/YY"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 mb-10">
        <button className="px-4 py-2 border-1 border-black rounded-md text-sm">
          Discard
        </button>
        <button className="px-4 py-2 border-1 border-black bg-[#CEFF1B] rounded-md text-sm font-medium">
          Confirm
        </button>
      </div>

      {/* ================= PAYOUT ACCOUNTS ================= */}
      <div className="mb-6">
        <p className="text-sm font-semibold mb-3">Payout Accounts</p>
             <p>
        <input type="radio" name="payment" />
        Add account
      </p>
      <div className="h-px my-4 bg-gray-300 mb-8" />

       <div className="flex items-center gap-3">
  <div className="border rounded-md px-3 py-2 flex items-center bg-white">
    <img src="/visa.svg" alt="Visa" className="h-5" />
  </div>

  <div className="border rounded-md px-3 py-2 flex items-center bg-white">
    <img src="/mastercard.svg" alt="Mastercard" className="h-5" />
  </div>

  <div className="border rounded-md px-3 py-2 flex items-center bg-white">
    <img src="/paypal.svg" alt="PayPal" className="h-5" />
  </div>
</div>

      </div>

      {/* ================= BILLING ADDRESS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="text-xs">First Name</label>
          <input className="w-full bg-transparent border-1 border-black rounded-md px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="text-xs">Last Name</label>
          <input className="w-full bg-transparent border-1 border-black rounded-md px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="text-xs">Email For Invoice</label>
          <input
            className="w-full bg-transparent border-1 border-black rounded-md px-3 py-2 text-sm"
            placeholder="example@gmail.com"
          />
        </div>
      </div>

      {/* ================= ADDRESS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="text-xs">Street</label>
          <input className="w-full bg-transparent border-1 border-black rounded-md px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="text-xs">City</label>
          <input className="w-full bg-transparent border-1 border-black rounded-md px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="text-xs">State</label>
          <input className="w-full bg-transparent border-1 border-black rounded-md px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="text-xs">Country</label>
          <input className="w-full bg-transparent border-1 border-black rounded-md px-3 py-2 text-sm" />
        </div>

        <div>
          <label className="text-xs">Pincode</label>
          <input
            className="w-full bg-transparent border-1 border-black rounded-md px-3 py-2 text-sm"
            placeholder="Type here"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button className="px-4 py-2 border-1 border-black rounded-md text-sm">
          Discard
        </button>
        <button className="px-4 py-2 border-1 border-black bg-[#CEFF1B] rounded-md text-sm font-medium">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Payments;
