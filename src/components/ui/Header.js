"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import call from "@/assets/images/homepage/call.svg";
import mail from "@/assets/images/homepage/mail.svg";
import location from "@/assets/images/homepage/location.svg";
import location_on from "@/assets/images/header/location_on.svg";
import arrowDown from "@/assets/images/homepage/arrow_down.svg";
import keyboard_arrow_down from "@/assets/images/header/keyboard_arrow_down.svg";
import search from "@/assets/images/header/search.svg";
import shopping_cart from "@/assets/images/header/shopping_cart.svg";
import profile from "@/assets/images/header/profile.svg";
import logo from "@/assets/images/homepage/logo.svg";
import logohealth from "@/assets/images/homepage/logohealth.svg";
import shoppingCart from "@/assets/images/homepage/shoppingCart.svg";
import account from "@/assets/images/homepage/account.svg";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll === 0);
      setIsScrolled(currentScroll > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#e6f5f5] !important">
      <div className="bg-[#e6f5f5] w-full ">
        <div
          className={`fixed top-0 inset-x-0 z-50 w-full bg-[#e6f5f5] border-b-[1px] border-[#C9C9C9] ${
            isScrolled ? "shadow-md" : ""
          }`}
        >
          <div className="max-w-[1512px] mx-auto px-4 flex items-center justify-between h-20 gap-6 ">
            <Link href="/">
              <Image
                src={logo}
                alt="Apollo Homecare Logo"
                width={104}
                height={44.23}
                style={{ cursor: "pointer" }}
              />
            </Link>
            <div className="flex-1 flex items-center gap-6">
              <div className="flex items-center text-[#FF784B] font-medium">
                <Image src={location} alt="Location" width={19} height={19} />
                <p className="ms-2 text-[16px]">New Delhi, Delhi</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#FF784B"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 5.646a.5.5 0 0 1 .708 0L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z" />
                </svg>
              </div>

              <div
                className="flex items-center gap-0 h-[44px] w-[824px] pl-4 border border-[#1AE2E9] rounded-[10px] bg-white shadow-sm"
                style={{
                  boxShadow: "0px 1px 10px rgba(0, 247, 255, 0.25)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="m-0 p-0"
                >
                  <path
                    d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
                    fill="#B3B3B3"
                  />
                </svg>

                <input
                  type="text"
                  placeholder='Try searching something like "my subscriptions"'
                  className="flex-1 outline-none text-[16px] text-black placeholder:text-gray-400 m-0 pl-[10px] p-0"
                />

                <button className="flex items-center justify-center h-[45px] px-4 rounded-[10px] border border-[#1AE2E9] bg-gradient-to-r from-[#1AE2E9] via-[#019196] to-[#03676A] bg-clip-text text-transparent text-[16px] font-normal transition hover:opacity-90 m-0 p-0">
                  Search
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="flex items-center h-[44px] px-[20px] gap-[10px] rounded-full bg-[#009A9F] shadow-lg cursor-pointer"
                style={{
                  boxShadow: "0px 8px 23px rgba(65, 132, 247, 0.24)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <mask
                    id="mask0_1886_13709"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="30"
                    height="30"
                  >
                    <rect width="30" height="30" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1886_13709)">
                    <path
                      d="M8.74988 27.5C8.06238 27.5 7.47384 27.2552 6.98425 26.7656C6.49467 26.276 6.24988 25.6875 6.24988 25C6.24988 24.3125 6.49467 23.724 6.98425 23.2344C7.47384 22.7448 8.06238 22.5 8.74988 22.5C9.43738 22.5 10.0259 22.7448 10.5155 23.2344C11.0051 23.724 11.2499 24.3125 11.2499 25C11.2499 25.6875 11.0051 26.276 10.5155 26.7656C10.0259 27.2552 9.43738 27.5 8.74988 27.5ZM21.2499 27.5C20.5624 27.5 19.9738 27.2552 19.4843 26.7656C18.9947 26.276 18.7499 25.6875 18.7499 25C18.7499 24.3125 18.9947 23.724 19.4843 23.2344C19.9738 22.7448 20.5624 22.5 21.2499 22.5C21.9374 22.5 22.5259 22.7448 23.0155 23.2344C23.5051 23.724 23.7499 24.3125 23.7499 25C23.7499 25.6875 23.5051 26.276 23.0155 26.7656C22.5259 27.2552 21.9374 27.5 21.2499 27.5ZM7.68738 7.5L10.6874 13.75H19.4374L22.8749 7.5H7.68738ZM6.49988 5H24.9374C25.4165 5 25.7811 5.21354 26.0311 5.64062C26.2811 6.06771 26.2915 6.5 26.0624 6.9375L21.6249 14.9375C21.3957 15.3542 21.0884 15.6771 20.703 15.9062C20.3176 16.1354 19.8957 16.25 19.4374 16.25H10.1249L8.74988 18.75H23.7499V21.25H8.74988C7.81238 21.25 7.10404 20.8385 6.62488 20.0156C6.14571 19.1927 6.12488 18.375 6.56238 17.5625L8.24988 14.5L3.74988 5H1.24988V2.5H5.31238L6.49988 5Z"
                      fill="white"
                    />
                  </g>
                </svg>
                <span className="text-white font-poppins text-[16px]">
                  Cart
                </span>
              </div>

              {/* User Section */}
              {/* <Link href="/login">
                <div
                  className="flex items-center gap-[10px] px-4 py-2 rounded-full bg-[#009A9F] shadow-lg cursor-pointer"
                  style={{
                    boxShadow: "0px 8px 23px rgba(65, 132, 247, 0.24)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <mask
                      id="mask0_1886_13701"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1886_13701)">
                      <path
                        d="M5.85 17.1C6.7 16.45 7.65 15.9375 8.7 15.5625C9.75 15.1875 10.85 15 12 15C13.15 15 14.25 15.1875 15.3 15.5625C16.35 15.9375 17.3 16.45 18.15 17.1C18.7333 16.4167 19.1875 15.6417 19.5125 14.775C19.8375 13.9083 20 12.9833 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 12.9833 4.1625 13.9083 4.4875 14.775C4.8125 15.6417 5.26667 16.4167 5.85 17.1ZM12 13C11.0167 13 10.1875 12.6625 9.5125 11.9875C8.8375 11.3125 8.5 10.4833 8.5 9.5C8.5 8.51667 8.8375 7.6875 9.5125 7.0125C10.1875 6.3375 11.0167 6 12 6C12.9833 6 13.8125 6.3375 14.4875 7.0125C15.1625 7.6875 15.5 8.51667 15.5 9.5C15.5 10.4833 15.1625 11.3125 14.4875 11.9875C13.8125 12.6625 12.9833 13 12 13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C12.8833 20 13.7167 19.8708 14.5 19.6125C15.2833 19.3542 16 18.9833 16.65 18.5C16 18.0167 15.2833 17.6458 14.5 17.3875C13.7167 17.1292 12.8833 17 12 17C11.1167 17 10.2833 17.1292 9.5 17.3875C8.71667 17.6458 8 18.0167 7.35 18.5C8 18.9833 8.71667 19.3542 9.5 19.6125C10.2833 19.8708 11.1167 20 12 20ZM12 11C12.4333 11 12.7917 10.8583 13.075 10.575C13.3583 10.2917 13.5 9.93333 13.5 9.5C13.5 9.06667 13.3583 8.70833 13.075 8.425C12.7917 8.14167 12.4333 8 12 8C11.5667 8 11.2083 8.14167 10.925 8.425C10.6417 8.70833 10.5 9.06667 10.5 9.5C10.5 9.93333 10.6417 10.2917 10.925 10.575C11.2083 10.8583 11.5667 11 12 11Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                  <span className="text-white font-poppins text-[16px]">
                    Hi, Rahul
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                  >
                    <path
                      d="M6 7.69999L0 1.69999L1.4 0.299988L6 4.89999L10.6 0.299988L12 1.69999L6 7.69999Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </Link> */}

              <div className="relative">
                {/* Toggle Button */}
                <div
                  className="flex items-center gap-[10px] px-4 py-2 rounded-full bg-[#009A9F] shadow-lg cursor-pointer"
                  onClick={toggleDropdown}
                  style={{
                    boxShadow: "0px 8px 23px rgba(65, 132, 247, 0.24)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <mask
                      id="mask0_1886_13701"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1886_13701)">
                      <path
                        d="M5.85 17.1C6.7 16.45 7.65 15.9375 8.7 15.5625C9.75 15.1875 10.85 15 12 15C13.15 15 14.25 15.1875 15.3 15.5625C16.35 15.9375 17.3 16.45 18.15 17.1C18.7333 16.4167 19.1875 15.6417 19.5125 14.775C19.8375 13.9083 20 12.9833 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 12.9833 4.1625 13.9083 4.4875 14.775C4.8125 15.6417 5.26667 16.4167 5.85 17.1ZM12 13C11.0167 13 10.1875 12.6625 9.5125 11.9875C8.8375 11.3125 8.5 10.4833 8.5 9.5C8.5 8.51667 8.8375 7.6875 9.5125 7.0125C10.1875 6.3375 11.0167 6 12 6C12.9833 6 13.8125 6.3375 14.4875 7.0125C15.1625 7.6875 15.5 8.51667 15.5 9.5C15.5 10.4833 15.1625 11.3125 14.4875 11.9875C13.8125 12.6625 12.9833 13 12 13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C12.8833 20 13.7167 19.8708 14.5 19.6125C15.2833 19.3542 16 18.9833 16.65 18.5C16 18.0167 15.2833 17.6458 14.5 17.3875C13.7167 17.1292 12.8833 17 12 17C11.1167 17 10.2833 17.1292 9.5 17.3875C8.71667 17.6458 8 18.0167 7.35 18.5C8 18.9833 8.71667 19.3542 9.5 19.6125C10.2833 19.8708 11.1167 20 12 20ZM12 11C12.4333 11 12.7917 10.8583 13.075 10.575C13.3583 10.2917 13.5 9.93333 13.5 9.5C13.5 9.06667 13.3583 8.70833 13.075 8.425C12.7917 8.14167 12.4333 8 12 8C11.5667 8 11.2083 8.14167 10.925 8.425C10.6417 8.70833 10.5 9.06667 10.5 9.5C10.5 9.93333 10.6417 10.2917 10.925 10.575C11.2083 10.8583 11.5667 11 12 11Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                  <span className="text-white font-poppins text-[16px]">
                    Hi, Rahul
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                  >
                    <path
                      d={`M6 ${isDropdownOpen ? "0.300012" : "7.69999"}L${
                        isDropdownOpen ? "12 6.30001" : "0 1.69999"
                      }L${isDropdownOpen ? "10.6 7.70001" : "1.4 0.299988"}L6 ${
                        isDropdownOpen ? "3.10001" : "4.89999"
                      }L${isDropdownOpen ? "1.4 7.70001" : "10.6 0.299988"}L${
                        isDropdownOpen ? "0 6.30001" : "12 1.69999"
                      }L6 ${isDropdownOpen ? "0.300012" : "7.69999"}Z`}
                      fill="white"
                    />
                  </svg>
                </div>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg">
                    <ul className="text-[#000]  text-sm leading-[120%]">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link href="/profile">Family Profiles</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link href="#">My Health Files</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link href="#">My Order</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link href="#">Payment Method</Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link href="#">Help & Support</Link>
                      </li>
                      <li className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer">
                        <Link href="/login">Logout</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <header className="flex justify-center items-center gap-12 bg-[#E6F5F5] py-3 mt-[5rem] border-b border-gray-200">
          <div className="flex w-full max-w-[1512px] h-16 px-8 items-center">
            <nav className="flex justify-center items-center gap-10 pl-[135px]">
              <ul className="flex justify-center items-center gap-10">
                <li className="text-[#009A9F] text-base font-normal hover:text-orange-500">
                  <Link href="/">Home</Link>
                </li>
                <li className="text-[#009A9F] text-base font-normal hover:text-orange-500">
                  <Link href="/long-term-care">Long term care</Link>
                </li>
                <li className="text-[#009A9F] text-base font-normal hover:text-orange-500">
                  <Link href="/book">Home visit</Link>
                </li>
                <li className="text-[#009A9F] text-base font-normal hover:text-orange-500">
                  <Link href="#">Medical Equipment</Link>
                </li>
                <li className="text-[#009A9F] text-base font-normal hover:text-orange-500">
                  <Link href="#">Home Diagnostics</Link>
                </li>
                <li className="text-[#009A9F] text-base font-normal hover:text-orange-500">
                  <Link href="#">Adult Vaccination</Link>
                </li>
              </ul>
            </nav>

            <div className="pl-[50px]">
              <button className="flex items-center gap-2 px-4 py-2 border border-[#FF784B] rounded-[25px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  className="fill-[#FF784B]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.32042 0.557908C3.08199 0.0277909 2.83095 0.0171788 2.6041 0.00790379C2.41856 -5.52933e-05 2.20615 0.000433081 1.99408 0.000433081C1.78183 0.000433081 1.43694 0.0801935 1.14528 0.398726C0.853444 0.717259 0.0310059 1.4873 0.0310059 3.05341C0.0310059 4.61969 1.17181 6.13308 1.33082 6.34564C1.49 6.55789 3.533 9.87451 6.76853 11.1504C9.45753 12.2108 10.0047 11.9999 10.5884 11.9468C11.1721 11.8938 12.4717 11.177 12.737 10.4336C13.0023 9.69043 13.0023 9.05339 12.9227 8.92023C12.8431 8.78758 12.6309 8.70798 12.3125 8.5488C11.9942 8.38962 10.4292 7.61942 10.1374 7.5133C9.84555 7.40717 9.63331 7.35411 9.42106 7.67282C9.20882 7.99118 8.59911 8.70798 8.4134 8.92023C8.22769 9.13296 8.04198 9.15949 7.72362 9.0003C7.40525 8.84064 6.38002 8.50485 5.16378 7.42042C4.21748 6.57675 3.57859 5.53477 3.39288 5.21609C3.20717 4.89773 3.37297 4.72528 3.53266 4.56659C3.67559 4.42398 3.85102 4.19499 4.01021 4.00911C4.16905 3.82323 4.22211 3.69058 4.32823 3.47834C4.43435 3.26576 4.38129 3.0799 4.3017 2.92071C4.22211 2.76153 3.60347 1.18733 3.32042 0.557908Z"
                    fill="#FF784B"
                  />
                </svg>
                {/* Text */}
                <span className="text-[#FF784B] text-base font-medium leading-[120%]">
                  1800 108 8586
                </span>
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden block bg-[#e6f5f5] py-2">
        <header className="flex items-center justify-between px-[20px]">
          <Image
            alt="logo"
            loading="lazy"
            width={85}
            height={40}
            decoding="async"
            className="p-3"
            src={logo}
          />
          <div className="flex items-center text-[#009A9F] font-medium text-sm">
            <Image src={location_on} alt="location" height={15} width={15} />
            <p className="mx-1 text-[12px]">New Delhi, Delhi</p>
            <Image
              src={keyboard_arrow_down}
              alt="arrow down"
              height={15}
              width={15}
            />
          </div>
          <div className="flex gap-[10px]">
            <Image src={search} alt="search" height={24} width={24} />
            <div className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#009A9F]">
              <Image
                src={shoppingCart}
                alt="shopping cart"
                height={12}
                width={12}
              />
            </div>
            <div className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#009A9F]">
              <Image src={profile} alt="profile" height={19} width={19} />
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
