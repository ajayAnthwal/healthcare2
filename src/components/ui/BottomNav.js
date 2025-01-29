"use client";
import Image from "next/image";
import React, { useState } from "react";
import home from "../../assets/images/footer/home.svg";
import self_imp from "../../assets/images/footer/self_improvement.svg";
import bookmark_add from "../../assets/images/footer/bookmark_add.svg";
import local_mall from "../../assets/images/footer/local_mall.svg";
import callosity from "@/assets/images/header/callwhite.png";
import menu from "@/assets/images/header/menu.png";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const BottomNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = (e) => {
    if (e.target.id === "popup-overlay") {
      setIsPopupOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const popupVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <div className="md:hidden block sticky bottom-0 left-0 w-full pt-2">
      <div className="mt-2 py-3 flex justify-center items-center bg-[#009A9F]">
        <button
          className="rounded-[40.608px] bg-[#003638] px-[15px] py-[6.497px] text-[10.182px] font-semibold leading-[120%] text-white shadow-[0px_3.249px_9.34px_0px_rgba(65,132,247,0.24)]"
          onClick={handleButtonClick}
        >
          Request a Call
        </button>

        {isPopupOpen && (
          <div
            id="popup-overlay"
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end mb-[70px]"
            onClick={handleClosePopup}
          >
            <motion.div
              className="bg-white rounded-lg  w-[100%]"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="bg-white rounded-lg w-[100%]">
                <div className="flex justify-between items-center border-b  mb-4 bg-[#009A9F] text-center mx-auto py-4">
                  <h2 className="text-lg font-bold text-[#fff] text-center mx-auto">
                    Request a Call
                  </h2>
                  <button
                    onClick={() => setIsPopupOpen(false)}
                    className="text-[#fff] font-bold mr-3"
                  >
                    ✕
                  </button>
                </div>
                <form className="p-6 ">
                  <div className="flex gap-4 mb-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-red-400 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter full name"
                        className="w-full border rounded-md p-2 bg-red-50"
                        defaultValue="Aman"
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
                          defaultValue="123 456 7890"
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
                          defaultValue="123 456 7890"
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
      <div className="flex flex-col items-center gap-2 bg-[#003638] ">
        <div className="flex justify-between w-full">
          <div className="bg-white rounded-lg px-[10px] py-[8px] flex flex-col justify-center items-center">
            <div>
              <Image src={home} width={15} height={15} alt="home" />
            </div>
            <div>
              <p className="text-[10px] text-[#003638]">Home</p>
            </div>
          </div>

          <div className="rounded-lg px-[10px] py-[8px] flex flex-col justify-center items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <mask
                  id="mask0_1905_1753"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="21"
                  height="21"
                >
                  <rect
                    x="0.290039"
                    y="0.497192"
                    width="20"
                    height="20"
                    fill="#D9D9D9"
                  />
                </mask>
                <g mask="url(#mask0_1905_1753)">
                  <path
                    d="M16.915 17.9972C15.1789 17.9972 13.4637 17.6187 11.7692 16.8618C10.0748 16.1048 8.53309 15.0319 7.14421 13.643C5.75532 12.2541 4.6824 10.7125 3.92546 9.01803C3.16851 7.32358 2.79004 5.6083 2.79004 3.87219C2.79004 3.62219 2.87337 3.41386 3.04004 3.24719C3.20671 3.08053 3.41504 2.99719 3.66504 2.99719H7.04004C7.23448 2.99719 7.40809 3.06316 7.56087 3.19511C7.71365 3.32705 7.80393 3.4833 7.83171 3.66386L8.37337 6.58053C8.40115 6.80275 8.39421 6.99025 8.35254 7.14303C8.31087 7.2958 8.23448 7.42775 8.12337 7.53886L6.10254 9.58053C6.38032 10.0944 6.71018 10.5909 7.09212 11.0701C7.47407 11.5493 7.89421 12.0111 8.35254 12.4555C8.78309 12.8861 9.23448 13.2854 9.70671 13.6534C10.1789 14.0215 10.6789 14.3583 11.2067 14.6639L13.165 12.7055C13.29 12.5805 13.4532 12.4868 13.6546 12.4243C13.856 12.3618 14.0539 12.3444 14.2484 12.3722L17.1234 12.9555C17.3178 13.0111 17.4775 13.1118 17.6025 13.2576C17.7275 13.4034 17.79 13.5666 17.79 13.7472V17.1222C17.79 17.3722 17.7067 17.5805 17.54 17.7472C17.3734 17.9139 17.165 17.9972 16.915 17.9972Z"
                    fill="#FF784B"
                  />
                </g>
              </svg>
            </div>
            <div>
              <Link href="tel:+918001088586">
                <p className="text-[10px] text-[#fff]">Call Now</p>
              </Link>
            </div>
          </div>
          <div className="rounded-lg px-[10px] py-[8px] flex flex-col justify-center items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M14.0431 12.1639C13.8765 12.0805 12.7931 11.5805 12.6265 11.4972C12.4598 11.4139 12.2931 11.4139 12.1265 11.5805C11.9598 11.7472 11.6265 12.2472 11.4598 12.4139C11.3765 12.5805 11.2098 12.5805 11.0431 12.4972C10.4598 12.2472 9.87646 11.9139 9.37646 11.4972C8.9598 11.0805 8.54313 10.5805 8.2098 10.0805C8.12646 9.91387 8.2098 9.7472 8.29313 9.66387C8.37646 9.58054 8.4598 9.41387 8.62646 9.33054C8.7098 9.2472 8.79313 9.08054 8.79313 8.9972C8.87646 8.91387 8.87646 8.7472 8.79313 8.66387C8.7098 8.58054 8.29313 7.58054 8.12646 7.16387C8.04313 6.58054 7.87646 6.58054 7.7098 6.58054H7.29313C7.12646 6.58054 6.87646 6.7472 6.79313 6.83054C6.29313 7.33054 6.04313 7.91387 6.04313 8.58054C6.12646 9.33054 6.37646 10.0805 6.87646 10.7472C7.79313 12.0805 8.9598 13.1639 10.3765 13.8305C10.7931 13.9972 11.1265 14.1639 11.5431 14.2472C11.9598 14.4139 12.3765 14.4139 12.8765 14.3305C13.4598 14.2472 13.9598 13.8305 14.2931 13.3305C14.4598 12.9972 14.4598 12.6639 14.3765 12.3305L14.0431 12.1639ZM16.1265 4.58054C12.8765 1.33054 7.62646 1.33054 4.37646 4.58054C1.7098 7.2472 1.2098 11.3305 3.04313 14.5805L1.87646 18.8305L6.29313 17.6639C7.54313 18.3305 8.87646 18.6639 10.2098 18.6639C14.7931 18.6639 18.4598 14.9972 18.4598 10.4139C18.5431 8.2472 17.6265 6.16387 16.1265 4.58054ZM13.8765 16.2472C12.7931 16.9139 11.5431 17.3305 10.2098 17.3305C8.9598 17.3305 7.79313 16.9972 6.7098 16.4139L6.4598 16.2472L3.87646 16.9139L4.54313 14.4139L4.37646 14.1639C2.37646 10.8305 3.37646 6.66387 6.62646 4.58054C9.87646 2.4972 14.0431 3.58054 16.0431 6.7472C18.0431 9.9972 17.1265 14.2472 13.8765 16.2472Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <Link href="https://wa.me/918001088586">
                <p className="text-[10px] text-[#fff]">WhatsApp</p>
              </Link>
            </div>
          </div>

          <div
            className="rounded-lg px-[10px] py-[8px] flex flex-col justify-center items-center cursor-pointer"
            onClick={toggleMenu}
          >
            <div>
              <Image src={menu} width={20} height={20} alt="Menu" />
            </div>
            <div>
              <p className="text-[10px] text-[#fff]">Menu</p>
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20">
          <div
            className="absolute bottom-0 left-0 w-full bg-[#003638] text-white p-5 rounded-t-xl transition-transform duration-300"
            style={{
              transform: menuOpen ? "translateY(0)" : "translateY(100%)",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Our Services</h2>
              <button
                onClick={closeMenu}
                className="text-white text-xl font-bold"
              >
                ×
              </button>
            </div>
            <ul className="space-y-4">
              <li className="border-b border-gray-600 pb-2">Long Term Care</li>
              <li className="border-b border-gray-600 pb-2">Home Visit</li>
              <li className="border-b border-gray-600 pb-2">
                Medical Equipments
              </li>
              <li className="border-b border-gray-600 pb-2">
                Home Diagnostics
              </li>
              <li className="border-b border-gray-600 pb-2">
                Adult Vaccinations
              </li>
            </ul>
            <ul className="space-y-4 mt-8">
              <li className="border-b border-gray-600 pb-2">About Us</li>
              <li className="border-b border-gray-600 pb-2">Join Us</li>
              <li className="border-b border-gray-600 pb-2">Partner With Us</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomNav;
