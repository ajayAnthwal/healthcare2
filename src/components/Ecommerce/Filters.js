"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFilter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:w-[250px]">
      <div className="md:hidden flex justify-end mb-4">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#009A9F] text-white p-2 rounded-md flex items-center gap-2 shadow-md"
        >
          <FaFilter size={20} />
          <span className="text-sm font-medium">Filters</span>
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-3/4 h-full bg-white shadow-lg p-6 overflow-auto"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 bg-[#009A9F] text-white p-2 rounded-full"
            >
              <IoClose size={20} />
            </button>
            <h3 className="text-black text-xl font-semibold mb-4">Filters</h3>
            {/** Filter Options **/}
            <div className="border-t border-gray-300 pt-4">
              <h4 className="text-[#009A9F] text-lg font-medium mb-2 border-b pb-2">
                Categories
              </h4>
              {[
                "Wheelchair",
                "Cardiac Monitor",
                "Ventilator",
                "Oxygen Cylinder",
              ].map((item, index) => (
                <label key={index} className="flex items-center gap-2 mb-2">
                  <input type="checkbox" className="w-5 h-5 accent-[#009A9F]" />
                  <span className="text-black text-[14px] font-medium">
                    {item}
                  </span>
                </label>
              ))}
            </div>

            <div className="border-t border-gray-300 pt-4 mt-4">
              <h4 className="text-[#009A9F] text-lg font-medium mb-2 border-b pb-2">
                Price
              </h4>
              {["INR 10K–15K", "INR 15K–20K", "INR 20K+"].map(
                (price, index) => (
                  <label key={index} className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 accent-[#009A9F]"
                    />
                    <span className="text-black text-[14px] font-medium">
                      {price}
                    </span>
                  </label>
                )
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Desktop Filter */}
      <div className="hidden md:block bg-[#E6F5F5] p-4 shadow-md rounded-lg">
        <h3 className="text-black text-lg font-semibold mb-3">Filters</h3>
        <div className="border-t border-gray-300 pt-4">
          <h4 className="text-[#009A9F] text-lg font-medium mb-2 border-b pb-2">
            Categories
          </h4>
          {[
            "Wheelchair",
            "Cardiac Monitor",
            "Ventilator",
            "Oxygen Cylinder",
          ].map((item, index) => (
            <label key={index} className="flex items-center gap-2 mb-2">
              <input type="checkbox" className="w-5 h-5 accent-[#009A9F]" />
              <span className="text-black text-[14px] font-medium">{item}</span>
            </label>
          ))}
        </div>

        <div className="border-t border-gray-300 pt-4 mt-4">
          <h4 className="text-[#009A9F] text-lg font-medium mb-2 border-b pb-2">
            Price
          </h4>
          {["INR 10K–15K", "INR 15K–20K", "INR 20K+"].map((price, index) => (
            <label key={index} className="flex items-center gap-2 mb-2">
              <input type="checkbox" className="w-5 h-5 accent-[#009A9F]" />
              <span className="text-black text-[14px] font-medium">
                {price}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
