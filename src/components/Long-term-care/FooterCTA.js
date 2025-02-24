"use client";

import { useState } from "react";
import { FaPhone, FaChevronDown } from "react-icons/fa";

const FooterCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-teal-600 text-white flex flex-col md:flex-row justify-between items-center px-4 md:px-6 py-6 container mx-auto rounded-[15px] text-center md:text-left relative"
      style={{
        background:
          "linear-gradient(118.43deg, #1AE2E9 -5.9%, #019196 42.54%, #03676A 90.98%)",
      }}
    >
      <p className="text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[36px]">
        Let our Expert Help you
      </p>

      <div className="flex flex-col md:flex-row gap-[10px] mt-4 md:mt-0 relative items-center">
        <div className="flex items-center bg-[#EAF7F7] text-gray-500 px-4 py-2 rounded-[100px] w-full">
          {/* Phone Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 14 12"
            fill="none"
            className="text-[#009A9F]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.82066 0.557481C3.58223 0.0273637 3.33119 0.0167515 3.10435 0.00747654C2.9188 -0.000482539 2.70639 5.83511e-06 2.49432 5.83511e-06C2.28208 5.83511e-06 1.93718 0.0797662 1.64552 0.398299C1.35369 0.716832 0.53125 1.48687 0.53125 3.05298C0.53125 4.61926 1.67205 6.13266 1.83106 6.34522C1.99024 6.55746 4.03324 9.87408 7.26877 11.15C9.95777 12.2104 10.505 11.9995 11.0886 11.9464C11.6723 11.8934 12.9719 11.1765 13.2373 10.4332C13.5026 9.69001 13.5026 9.05296 13.423 8.9198C13.3434 8.78715 13.1311 8.70756 12.8128 8.54838C12.4944 8.38919 10.9295 7.61899 10.6376 7.51287C10.3458 7.40675 10.1336 7.35369 9.92131 7.67239C9.70907 7.99075 9.09936 8.70756 8.91365 8.9198C8.72793 9.13253 8.54222 9.15906 8.22386 8.99988C7.9055 8.84021 6.88026 8.50442 5.66403 7.41999C4.71773 6.57633 4.07883 5.53435 3.89312 5.21566C3.70741 4.8973 3.87321 4.72485 4.03291 4.56616C4.17583 4.42356 4.35127 4.19457 4.51045 4.00869C4.66929 3.8228 4.72235 3.69015 4.82847 3.47791C4.93459 3.26533 4.88153 3.07947 4.80194 2.92029C4.72235 2.76111 4.10371 1.18691 3.82066 0.557481Z"
              fill="currentColor"
            />
          </svg>

          {/* Divider Line */}
          <span className="h-6 w-[1px] bg-gray-400 mx-3"></span>

          {/* Input Field */}
          <input
            type="text"
            placeholder="enter phone number"
            className="outline-none bg-transparent text-[16px] w-full placeholder-gray-500"
          />
        </div>

        <button
          className="bg-white text-teal-600 flex items-center px-[24px] py-[8px] rounded-[100px] text-[16px] md:text-[18px] w-full md:w-auto relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          Categories <FaChevronDown className="ml-2" />
        </button>

        {isOpen && (
          <div className="absolute bottom-[50px] right-0 bg-white text-teal-600 rounded-[10px] shadow-lg p-4 w-[250px] z-50">
            <ul className="space-y-2 text-[16px] py-2">
              {[
                "Wheelchair",
                "Hospital Bed",
                "Cpap & Bipap",
                "Air mattress",
                "Transfer chair",
                "Cpap & Bipap accessories",
                "Walker",
                "Consumables",
                "Commode chair",
                "Oxygen concentrator",
                "Air mattress",
              ].map((item, index) => (
                <li key={index} className="hover:text-teal-800 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button className="bg-black text-white px-[24px] py-[8px] rounded-[100px] text-[16px] md:text-[18px] w-full md:w-auto">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default FooterCTA;
