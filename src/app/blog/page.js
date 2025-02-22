"use client";
import React, { useState } from "react";
import Image from "next/image";
import apollo from "@/assets/images/header/apollo.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BlogPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const categories = [
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
    "Lorem ipsum",
  ];

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

      <div className="flex md:flex-row gap-6 px-4 py-10 flex-col">
        <div className=" hidden md:flex flex-col gap-4">
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

            {/* Facebook Icon */}
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

            {/* Twitter Icon */}
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
              <div className="grid grid-cols-2 gap-6 mt-10 p-4">
                <div className="group bg-[#EAF7F7] p-6 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <span className="text-gray-500 text-sm">Previous post</span>
                  <div className="flex items-center gap-3 font-bold text-[#002D26] text-lg leading-snug">
                    <div className="transition-transform duration-300 group-hover:-translate-x-1">
                      <FaArrowLeft size={18} />
                    </div>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </span>
                  </div>
                </div>
                <div className="group bg-[#EAF7F7] p-6 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                  <span className="text-gray-500 text-sm">Next post</span>
                  <div className="flex items-center gap-3 font-bold text-[#002D26] text-lg leading-snug">
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
        <div className=" max-w-[300px] min-w-[300px] space-y-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Related Blogs
            </h4>
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
                <span className="text-gray-700">Lorem ipsum Lorem ipsum</span>
              </div>
            ))}
          </div>

          <div className="md:block w-auto sticky top-4 h-fit space-y-4">
            <div className="bg-[#E6F5F5] px-3 py-5 shadow-md rounded-lg border border-[#1AE2E9] ">
              <div className="flex h-11 px-2 justify-between items-center border-b border-gray-500 bg-white">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full text-black text-[16px] font-normal leading-[19.2px]  outline-none placeholder:text-black"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_4911_11063"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#B3B3B3" />
                  </mask>
                  <g mask="url(#mask0_4911_11063)">
                    <path
                      d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
                      fill="#B3B3B3"
                    />
                  </g>
                </svg>
              </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
