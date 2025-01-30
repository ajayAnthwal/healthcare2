"use client";
import React from "react";

const Filters = () => {
  return (
    <div className="bg-[#E6F5F5] p-4 shadow-md rounded-lg w-full md:w-[250px]">
      <div className="flex items-center gap-2 mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_1047_1790"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_1047_1790)">
            <path
              d="M10 18V16H14V18H10ZM6 13V11H18V13H6ZM3 8V6H21V8H3Z"
              fill="#1C1B1F"
            />
          </g>
        </svg>

        <h3 className="text-center text-black font-poppins text-[20px] font-semibold leading-[120%]">
          Filters
        </h3>
      </div>

      <div className="mb-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-[20px] h-[20px] p-[3px] flex justify-center items-center border border-[#009A9F] bg-[#009A9F] rounded-md"
          />

          <span className="text-black  text-[14px] font-medium leading-[120%]">
            As per my preferences
          </span>
        </label>
      </div>
      <div className="mb-8 ">
        <h4 className="text-[#009A9F] font-poppins text-[16px] font-medium leading-[120%] mb-2 border-b border-[#D3D3D3]">
          Categories
        </h4>

        <div className="flex flex-col gap-2 mt-5">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] p-[3px] flex justify-center items-center border border-[#009A9F] bg-[#009A9F] rounded-md"
            />
            <span className="text-black  text-[14px] font-medium leading-[120%]">
              {" "}
              Wheelchair
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] p-[3px] flex justify-center items-center border border-[#009A9F] bg-[#009A9F] rounded-md"
            />
            <span className="text-black  text-[14px] font-medium leading-[120%]">
              Cardiac Monitor
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] p-[3px] flex justify-center items-center border border-[#009A9F] bg-[#009A9F] rounded-md"
            />
            <span className="text-black  text-[14px] font-medium leading-[120%]">
              Ventilator
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] p-[3px] flex justify-center items-center border border-[#009A9F] bg-[#009A9F] rounded-md"
            />
            <span className="text-black  text-[14px] font-medium leading-[120%]">
              Oxygen Cylinder
            </span>
          </label>
        </div>
      </div>
      <div>
        <h4 className="text-[#009A9F] font-poppins text-[16px] font-medium leading-[120%] mb-2 border-b border-[#D3D3D3]">
          Price
        </h4>
        <div className="flex flex-col gap-2 mt-5">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] p-[3px] flex justify-center items-center border border-[#009A9F] bg-[#009A9F] rounded-md"
            />
            <span className="text-black  text-[14px] font-medium leading-[120%]">
              INR 10K–15K
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] p-[3px] flex justify-center items-center border border-[#009A9F] bg-[#009A9F] rounded-md"
            />
            <span className="text-black  text-[14px] font-medium leading-[120%]">
              INR 15K–20K
            </span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] p-[3px] flex justify-center items-center border border-[#009A9F] bg-[#009A9F] rounded-md"
            />
            <span className="text-black  text-[14px] font-medium leading-[120%]">
              INR 20K+
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
