import React, { useState } from "react";
import { motion } from "framer-motion";
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
    <div className="fixed bottom-10 right-10 z-50 flex flex-col items-end space-y-3">
     

      <button
        className="flex items-center gap-2 px-4 py-2 text-white bg-gradient-to-r from-[#1AE2E9] to-[#03676A] shadow-lg rounded-full cursor-pointer"
        style={{ boxShadow: "0px 8px 23px rgba(65, 132, 247, 0.24)" }}
        onClick={openPopup}
      >
        <span className="text-[16px] font-normal leading-[120%]" style={{ fontFamily: "Poppins, sans-serif" }}>
          Login
        </span>
      </button>

      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closePopup}
        >
          <motion.div
            className="w-full sm:w-[90%] md:w-[479px] p-8 text-white bg-gradient-to-r from-[#1AE2E9] to-[#03676A] rounded-[27px] border border-solid border-white/[0.8] backdrop-blur-[28px]"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <h1 className="text-[40px] font-normal leading-[48.76px] mb-4 text-left" style={{ fontFamily: '"Montserrat Subrayada", sans-serif' }}>
              LOGIN
            </h1>
            <div className="w-[110px] h-[1px] bg-white -mt-5"></div>
            <p className="text-[20px] font-light mb-6 text-left mt-2">Welcome to Apollo Healthcare</p>
            <form>
              <div className="my-7">
                <label htmlFor="mobile" className="text-[15px] font-normal mb-2 text-left">Mobile Number</label>
                <input
                  id="mobile"
                  type="text"
                  placeholder="Enter your Mobile Number"
                  className="w-full h-[47px] p-[12px_10px] bg-transparent border-[#FFFFFFCC] rounded-[10px] text-white opacity-60 placeholder:text-white placeholder:text-[15px] placeholder:font-light placeholder:leading-[22.5px] backdrop-blur-[30px] border-[1px] border-solid"
                />
              </div>
              <div className="my-7">
                <label htmlFor="otp" className="text-[15px] font-normal mb-2 text-left">OTP</label>
                <input
                  id="otp"
                  type="text"
                  placeholder="123456"
                  className="w-full h-[47px] p-[12px_10px] bg-transparent border-[#FFFFFFCC] rounded-[10px] text-white opacity-60 placeholder:text-white placeholder:text-[15px] placeholder:font-light placeholder:leading-[22.5px] backdrop-blur-[30px] border-[1px] border-solid"
                />
              </div>
              <button type="submit" className="mt-6 flex justify-center items-center w-full h-[50px] px-6 py-2 bg-[#B0E0E1] hover:bg-[#96C8C9] text-black text-lg font-semibold rounded-[10px] transition-all duration-300 ease-in-out">
                LOGIN
              </button>
            </form>
            <button onClick={closePopup} className="absolute top-4 right-4 text-white font-bold text-lg">✕</button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default FloatingContactWidget;
