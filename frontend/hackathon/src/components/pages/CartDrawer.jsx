import React from "react";
import { X } from "lucide-react"; // close icon
import Cart from "./Cart";
// import Cart from "./Cart"; // your existing cart component

const CartDrawer = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[90vw] sm:w-[400px] bg-white z-[9999] shadow-xl transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose}>
          <X size={24} />
        </button>
      </div>
      <Cart onClose={onClose} />
    </div>
  );
};

export default CartDrawer;
