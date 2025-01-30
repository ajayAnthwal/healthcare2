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
        <div className="flex items-center bg-white text-teal-600 px-4 py-2 rounded-[100px]">
          <FaPhone className="mr-2" />
          <input
            type="text"
            placeholder="enter phone number"
            className="outline-none bg-transparent text-[16px] w-full"
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
            <ul className="space-y-2 text-[16px]">
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
