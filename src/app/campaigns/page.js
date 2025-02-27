"use client";
import React, { useState } from "react";
import Image from "next/image";
import apollo from "@/assets/images/header/apollo.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Campaigns = () => {
  return (
    <div className="bg-white">
      <div className="hidden md:block bg-[url('/bg.png')] bg-cover bg-center banner">
        <div className="relative  mx-auto h-auto flex flex-col items-center bg-no-repeat pl-8">
          <div className="hidden md:flex w-full flex-col md:flex-row items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-[60px] font-medium leading-[105px] tracking-[-1.2px] font-poppins text-white">
                Choosing the Apollo <br /> Homecare’s wheelchair
              </h1>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <Image
                src={apollo}
                alt="Care at Home"
                width={604}
                height={555}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row gap-6 px-4 py-10 flex-col max-w-7xl mx-auto mt-5">
        <div className="  space-y-6">
          <div className="flex justify-between text-center">
            <div>
              <p className="text-lg text-gray-800 leading-relaxed">
                Date of posting: DD-MM-YYYY
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-800 leading-relaxed">
                Reading time: HH-MM-SS
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-800 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur{" "}
          </p>

          <h2 className="text-2xl font-semibold text-gray-800">Heading</h2>

          <p className="text-lg text-gray-800 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
            sit amet, consectetur
          </p>

          <Image
            src="/blog.png"
            alt="Example Image"
            className="w-full rounded-lg"
            width={500}
            height={329}
          />

          <div className="flex gap-4 text-blue-600 items-center justify-center mt-2">
            <p className="text-[24px] text-black font-normal leading-[39.06px] tracking-[-0.002px] text-center">
              Share the article
            </p>
            <div className="flex items-center gap-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
              >
                <rect x="0.5" width="44" height="44" rx="10" fill="#6488D6" />
                <path
                  d="M27.6049 11.98H30.5V7.21004C29.0983 7.06807 27.6898 6.99797 26.2806 7.00004C22.0919 7.00004 19.2276 9.49004 19.2276 14.05V17.98H14.5V23.32H19.2276V37H24.8946V23.32H29.6068L30.3152 17.98H24.8946V14.575C24.8946 13 25.3258 11.98 27.6049 11.98Z"
                  fill="white"
                />
              </svg>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
              >
                <rect x="0.5" width="44" height="44" rx="10" fill="#28C6F3" />
                <path
                  d="M38.3666 12.108C37.169 12.6275 35.9024 12.971 34.6064 13.1277C35.9737 12.3108 36.9984 11.0257 37.4903 9.51082C36.2054 10.2757 34.7988 10.8146 33.3317 11.1042C32.3511 10.0407 31.0452 9.33284 29.619 9.09154C28.1927 8.85024 26.7266 9.08916 25.4508 9.77084C24.1749 10.4525 23.1614 11.5384 22.5691 12.8582C21.9769 14.1779 21.8395 15.6569 22.1784 17.0632C19.5803 16.9318 17.039 16.2553 14.7195 15.0777C12.3999 13.9001 10.354 12.2477 8.71473 10.2278C8.13976 11.2319 7.83763 12.369 7.8384 13.526C7.83636 14.6005 8.10005 15.6589 8.606 16.6068C9.11194 17.5548 9.84443 18.3629 10.7383 18.9593C9.69938 18.931 8.68268 18.6522 7.77467 18.1467V18.2264C7.78245 19.7319 8.31002 21.1885 9.26812 22.3498C10.2262 23.5112 11.5561 24.3059 13.0327 24.5997C12.4643 24.7727 11.8741 24.8639 11.28 24.8705C10.8687 24.8657 10.4585 24.8285 10.0531 24.759C10.4736 26.0541 11.2874 27.1859 12.3811 27.9969C13.4749 28.808 14.7942 29.2579 16.1556 29.2841C13.8567 31.0929 11.0185 32.0801 8.09333 32.0883C7.56074 32.0901 7.02857 32.0582 6.5 31.9927C9.48659 33.9211 12.967 34.9447 16.5221 34.9404C18.9753 34.9659 21.409 34.5023 23.6811 33.5766C25.9531 32.651 28.018 31.2819 29.755 29.5494C31.492 27.8168 32.8664 25.7555 33.7979 23.4858C34.7293 21.2161 35.1992 18.7836 35.18 16.3303C35.18 16.0594 35.18 15.7726 35.18 15.4858C36.4303 14.5534 37.5086 13.4104 38.3666 12.108Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg border-t border-gray-300 flex flex-col md:flex-col justify-between gap-4 items-start">
            <div className="w-[150px] h-[150px] rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <circle cx="40" cy="40" r="40" fill="#D9D9D9" />
              </svg>
            </div>
            <div>
              <p className="text-[20px] text-gray-600">Written by:</p>
              <h4 className="text-[24px] font-semibold text-black">
                Apollo Homecare
              </h4>
              <p className="text-[24px] text-black leading-relaxed mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore madipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna{" "}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 p-4">
                <div className="group bg-[#EAF7F7] p-6 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <span className="text-gray-500 text-sm">Previous post</span>
                  <div className="flex items-center gap-3 font-bold text-[#002D26] text-lg leading-snug cursor-pointer">
                    <div className="transition-transform duration-300 group-hover:-translate-x-1">
                      <FaArrowLeft size={18} />
                    </div>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>
                  </div>
                </div>
                <div className=" cursor-pointer group bg-[#EAF7F7] p-6 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <span className="text-gray-500 text-sm block text-right sm:text-left">
                    Next post
                  </span>
                  <div className="flex flex-col sm:flex-row text-right sm:text-left items-center sm:items-center gap-3 font-bold text-[#002D26] text-lg leading-snug">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>
                    <div className="transition-transform duration-300 group-hover:translate-x-1">
                      <FaArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-auto md:max-w-[300px] md:min-w-[300px] space-y-6 relative bg-white">
          <div className="sticky top-[8.5rem] bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg">
              <div className="flex justify-between items-center  border-b mb-4 bg-[#009A9F] text-center py-4">
                <h2 className="text-lg font-bold text-white mx-auto">
                  Request a Call
                </h2>
              </div>
              <form className="p-6 shadow-md">
                <div className="flex gap-4 mb-4 flex-col flex-wrap">
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
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="block mx-auto bg-[#003638] text-white py-2 px-6 rounded-[50px] shadow-md hover:bg-[#009A9F] hover:text-white"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
