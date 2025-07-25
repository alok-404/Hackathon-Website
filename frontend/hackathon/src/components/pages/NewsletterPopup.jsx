import React, { useState } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify";

const NewsletterPopup = ({ onClose }) => {
  const [email, setEmail] = useState("");

  const handleJoin = () => {
    if (!email.trim()) {
      alert("Please enter a valid email address.");
      return;
    }

    // You can also add email validation regex here if you want stricter checking.

    console.log("Newsletter email submitted:", email);
      toast.success("Welcome to Mystrispot!"); // ✅ SUCCESS TOAST

    // Optionally save to localStorage or send to backend here

    // Close the popup
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/40 flex items-center justify-center">
      <div className="relative bg-[#fff8f4] rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden w-[90%] max-w-2xl">
        {/* Left content */}
        <div className="flex-1 p-6 md:p-10 flex flex-col justify-center text-center md:text-left">
          <div className="mb-4">
            <img
              src="images/mystrispot logo.png"
              alt="Mystrispot Logo"
              className="h-12 mx-auto md:mx-0"
            />
          </div>
          <h2 className="text-xl font-semibold text-[#423838]">
            may i send you<br /> newsletters, discounts,<br /> and things like that?
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            + 10% off on your first order!
          </p>

          {/* Email input */}
          <div className="mt-4">
            <input
              type="email"
              placeholder="email address <3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffbf9b]"
            />
            <button
              onClick={handleJoin}
              className="w-full mt-3 py-2 bg-[#ffbf9b] hover:bg-[#ffaa77] text-white font-semibold rounded-full transition duration-200"
            >
              join the list
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 hidden md:block">
          <img
            src="https://i.pinimg.com/1200x/a7/14/2b/a7142be7133eb84fe900021896322319.jpg"
            alt="Cute Art"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <X />
        </button>
      </div>
    </div>
  );
};

export default NewsletterPopup;
