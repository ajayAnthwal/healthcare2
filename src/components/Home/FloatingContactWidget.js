import React, { useState } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";

const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end space-y-3 widget-1">
      <button
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#1AE2E9] via-[#019196] to-[#03676A] shadow-lg cursor-pointer"
        style={{ boxShadow: "0px 8px 23px rgba(65, 132, 247, 0.24)" }}
      >
        <SiWhatsapp size={24} color="#FFF" />
      </button>
      <button
        className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-[#1AE2E9] via-[#019196] to-[#03676A] shadow-lg rounded-full cursor-pointer"
        style={{ boxShadow: "0px 8px 23px rgba(65, 132, 247, 0.24)" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className="text-[16px] font-normal leading-[120%]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Request a Call
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 bottom-20 flex flex-col items-end p-4 space-y-3">
          <button
            className="px-4 py-2 border rounded-full text-[#009A9F] border-[#009A9F] cursor-pointer"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            I need Consultation
          </button>
          <div className="flex items-center gap-3 px-4 py-2 border rounded-full text-[#009A9F] border-[#009A9F] cursor-pointer">
            <FiPhone className="text-[#009A9F]" size={20} />
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              1800 108 8586
            </span>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 border rounded-full text-[#009A9F] border-[#009A9F] cursor-pointer">
            <FiMail className="text-[#009A9F]" size={20} />
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
              }}
            >
              care@apollohomecare.com
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingContactWidget;
