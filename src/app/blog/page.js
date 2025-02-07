"use client";
import React, { useState } from "react";
import apollo from "@/assets/images/header/apollo.png";
import Image from "next/image";

const Blog = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = [
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
  ];

  return (
    <div>
      <div>
        {/* Banner Section */}
        <div className="hidden md:block bg-[url('/bg.png')] bg-cover bg-center">
          <div className="relative mx-auto h-[454px] flex flex-col items-center bg-no-repeat pl-[20px] md:pl-[45px]">
            <div className="hidden md:flex w-full items-center justify-between gap-6 md:gap-10">
              {/* Left Side - Text */}
              <div className="flex-1 text-center md:text-left space-y-3 md:space-y-4">
                <h1 className="text-3xl md:text-[60px] font-medium leading-[40px] md:leading-[105px] tracking-[-1.2px] font-poppins text-white">
                  Choosing the Apollo <br /> Homecare’s wheelchair
                </h1>
              </div>

              {/* Right Side - Image */}
              <div className="flex-1 flex justify-center md:justify-end">
                <Image
                  src={apollo}
                  alt="Care at Home"
                  width={320}
                  height={280}
                  className="rounded-lg shadow-lg md:w-[494px] md:h-[454px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row bg-gray-100 py-4 gap-6 md:gap-[40px] px-4 md:px-0">
          {/* Sidebar - Hidden on Mobile */}
          <div className="hidden md:block w-auto sticky top-4 h-fit space-y-4">
            <div className="bg-[#E6F5F5] px-3 py-5 shadow-md rounded-lg border border-[#1AE2E9] w-full md:w-[264px]">
              <div className="border-b border-gray-300 pt-4">
                <h4 className="text-[#009A9F] text-lg font-medium mb-2 border-b pb-2">
                  Select Categories
                </h4>

                {categories.map((item, index) => (
                  <label
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`flex items-start gap-1 p-[10px] self-stretch rounded-[10px] cursor-pointer my-5 
              ${
                selectedIndex === index
                  ? "bg-[linear-gradient(118deg,_#1AE2E9_-5.9%,_#019196_42.54%,_#03676A_90.98%)] text-white"
                  : "bg-gray-200 text-black"
              }`}
                  >
                    <span className="text-[16px] font-semibold">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Related Stories */}
            <div className="border border-[#1AE2E9] rounded-lg p-4 w-full md:w-[264px]">
              <h4 className="text-[#009A9F] text-lg font-medium mb-4">
                Related stories
              </h4>

              <div className="space-y-4">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-[40px] h-[40px] bg-black rounded-md"></div>
                    <span className="text-black text-sm font-medium">
                      Lorem ipsum
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Image */}
            <div className="border border-[#1AE2E9] rounded-lg p-4 w-full md:w-[264px]">
              <h4 className="text-[#009A9F] text-lg font-medium mb-4">
                Related stories
              </h4>
              <div className="w-full h-[200px] bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">Product pic</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full p-4 md:p-6">
            <p className="text-black text-justify text-[16px] md:text-[24px]">
              In today’s fast-paced life, finding mental peace has become a
              challenge. The stress of daily routines often leaves us exhausted,
              making it essential to take a break and reconnect with nature.
              Traveling to the mountains is one of the best ways to rejuvenate
              the mind and body while experiencing the breathtaking beauty of
              nature.
            </p>

            <h2 className="text-[22px] md:text-[26px] font-semibold leading-[32px] md:leading-[39.06px] tracking-[-0.003px] text-black font-[Poppins] mt-6">
              Heading
            </h2>

            <p className="text-black text-justify text-[16px] md:text-[24px]">
              In today’s fast-paced life, finding mental peace has become a
              challenge. The stress of daily routines often leaves us exhausted,
              making it essential to take a break and reconnect with nature.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
