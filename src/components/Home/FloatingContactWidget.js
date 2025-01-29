import React, { useState } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";
import whatspp from "@/assets/images/footer/whatspp.png";
import Image from "next/image";

const FloatingContactWidget = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const popupVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };

  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end space-y-3 widget-1">
      <Image
        src={whatspp}
        alt="WhatsApp Icon"
        width={40}
        height={40}
        priority
      />

      <button
        className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-[#1AE2E9] via-[#019196] to-[#03676A] shadow-lg rounded-full cursor-pointer"
        style={{ boxShadow: "0px 8px 23px rgba(65, 132, 247, 0.24)" }}
        onClick={openPopup}
      >
        <span
          className="text-[16px] font-normal leading-[120%]"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Request a Call
        </span>
      </button>

      {isPopupOpen && (
        <div
          id="popup-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closePopup}
        >
          <motion.div
            className="bg-white rounded-lg w-[100%] max-w-[570px] mx-auto"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="bg-white rounded-lg">
              <div className="flex justify-between items-center border-b mb-4 bg-[#009A9F] text-center py-4">
                <h2 className="text-lg font-bold text-white mx-auto">
                  Request a Call
                </h2>
                <button
                  onClick={closePopup}
                  className="text-white font-bold mr-3"
                >
                  ✕
                </button>
              </div>
              <form className="p-6">
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-red-400 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      className="w-full border rounded-md p-2 bg-red-50"
                    />
                    <span className="text-sm text-red-400">
                      Enter full name
                    </span>
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-[#009A9F] mb-1">
                      Phone Number
                    </label>
                    <div className="flex items-center border rounded-md bg-[#E6F7F8] p-2">
                      <input
                        type="text"
                        placeholder="123 456 7890"
                        className="w-full bg-transparent focus:outline-none"
                      />
                      <span className="text-green-500 ml-2">✔</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm font-medium text-[#009A9F] mb-1">
                      Google Captcha
                    </label>
                    <div className="flex items-center border rounded-md bg-[#E6F7F8] p-2">
                      <input
                        type="text"
                        placeholder="123 456 7890"
                        className="w-full bg-transparent focus:outline-none"
                      />
                      <span className="text-green-500 ml-2">✔</span>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="block mx-auto bg-[#003638] text-white py-2 px-6 rounded-[50px] shadow-md"
                >
                  Send
                </button>
              </form>
              <p className="text-center text-sm text-gray-500 mt-4">
                Note: any note or important thing here.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default FloatingContactWidget;
