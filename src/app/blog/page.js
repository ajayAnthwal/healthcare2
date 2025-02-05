"use client";
import React, { useState } from "react";
import ltc from "@/assets/images/longterm/ltc.png";
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
      <div className="hidden md:block bg-[url('/bg.png')] bg-cover bg-center">
        <div className="relative w-[1512px] mx-auto h-[564px] flex flex-col items-center md:bg-cover bg-no-repeat">
          <div className="hidden md:flex max-w-[1512px] flex-col md:flex-row items-center w-full pl-8">
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
              <h1 className="w-max text-5xl md:text-6xl font-medium leading-[1.2] md:leading-[1.1] tracking-[-1.2px] font-poppins text-white">
                Choosing the Apollo <br />
                Homecare’s wheelchair
              </h1>
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <Image
                src={ltc}
                alt="Care at Home"
                width={604}
                height={555}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-100 py-4">
        <div className="w-auto sticky top-4 h-fit space-y-4">
          <div className="md:block bg-[#E6F5F5] px-3 py-5 shadow-md rounded-lg border border-r border-[#1AE2E9] w-[264px]">
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
          <div className="border border-[#1AE2E9] rounded-lg p-4 w-[264px]">
            <h4 className="text-[#009A9F] text-[16px] font-medium mb-4">
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

          <div className="border border-[#1AE2E9] rounded-lg p-4 w-[264px]">
            <h4 className="text-[#009A9F] text-[16pxx] font-medium mb-4">
              Related stories
            </h4>

            <div className="w-[200px] h-[200px] bg-black rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">Product pic</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-auto p-6">
          <p className="text-black text-justify text-[24px]">
            In today’s fast-paced life, finding mental peace has become a
            challenge. The stress of daily routines often leaves us exhausted,
            making it essential to take a break and reconnect with nature.
            Traveling to the mountains is one of the best ways to rejuvenate the
            mind and body while experiencing the breathtaking beauty of nature.
          </p>

          <h2 className="text-[26px] font-semibold leading-[39.06px] tracking-[-0.003px] text-black font-[Poppins] mt-6">
            Heading
          </h2>

          <p className="text-black text-justify text-[24px]">
            In today’s fast-paced life, finding mental peace has become a
            challenge. The stress of daily routines often leaves us exhausted,
            making it essential to take a break and reconnect with nature.
            Traveling to the mountains is one of the best ways to rejuvenate the
            mind and body while experiencing the breathtaking beauty of nature.
          </p>

          <h2 className="text-[26px] font-semibold leading-[39.06px] tracking-[-0.003px] text-black font-[Poppins] mt-6">
            Heading
          </h2>

          <p className="text-black text-justify text-[24px]">
            In today’s fast-paced life, finding mental peace has become a
            challenge. The stress of daily routines often leaves us exhausted,
            making it essential to take a break and reconnect with nature.
            Traveling to the mountains is one of the best ways to rejuvenate the
            mind and body while experiencing the breathtaking beauty of nature.
            In today’s fast-paced life, finding mental peace has become a
            challenge. The stress of daily routines often leaves us exhausted,
            making it essential to take a break and reconnect with nature.
            Traveling to the mountains is one of the best ways to rejuvenate the
            mind and body while experiencing the breathtaking beauty of nature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
