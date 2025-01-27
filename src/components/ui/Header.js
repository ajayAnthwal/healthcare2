"use client";
import React, { useState, useEffect, useRef } from "react";
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
import emailICon from "@/assets/images/header/email.svg";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const cityRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [city, setCity] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleProfileToggle = () => {
    setProfileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCityToggle = () => {
    setCity(!city);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        cityRef.current &&
        !cityRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setCity(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const searchResults = {
    product: [
      { title: "Virtual Meetings", subtitle: "In Home visits" },
      { title: "User Interviews", subtitle: "In Home visits" },
      { title: "Prototype Testing", subtitle: "In Home visits" },
    ],
    blog: [
      { title: "Virtual Meetings", subtitle: "In Home visits" },
      { title: "User Interviews", subtitle: "In Home visits" },
      { title: "Prototype Testing", subtitle: "In Home visits" },
    ],
  };

  return (
    <div className="bg-[#e6f5f5] !important">
      <div className="bg-[#e6f5f5] w-full mobile-hide">
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
                width={141}
                height={60}
                style={{ cursor: "pointer" }}
              />
            </Link>

            <div className="flex-1 flex items-center gap-6">
              <div className="relative" ref={cityRef}>
                {/* Location Selector */}
                <div
                  className="flex items-center text-[#FF784B] font-medium cursor-pointer"
                  onClick={handleCityToggle}
                >
                  <Image src={location} alt="Location" width={19} height={19} />
                  <p className="ms-2 text-[16px]">New Delhi, Delhi</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FF784B"
                    viewBox="0 0 16 16"
                    className={`transform transition-transform ${
                      city ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <path d="M4.646 5.646a.5.5 0 0 1 .708 0L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z" />
                  </svg>
                </div>

                {/* Dropdown Menu */}
                {city && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md w-max overflow-auto p-[10px_20px_10px_10px]">
                    <div className="p-4">
                      {/* First Section */}
                      <div className="mb-4">
                        <h3 className="text-black font-semibold text-[14px] leading-[16.8px]  mb-[10px] font-poppins">
                          Delhi
                        </h3>

                        <ul className="flex gap-[46px]  pb-[6px]">
                          <li className="hover:text-[#FF784B] cursor-pointer font-normal text-[14px] leading-[16.8px] w-max text-black">
                            Delhi
                          </li>
                          <li className="hover:text-[#FF784B] cursor-pointer font-normal text-[14px] leading-[16.8px] w-max text-black">
                            Noida
                          </li>
                          <li className="hover:text-[#FF784B] cursor-pointer font-normal text-[14px] leading-[16.8px] w-max text-black">
                            Greater Noida
                          </li>
                          <li className="hover:text-[#FF784B] cursor-pointer font-normal text-[14px] leading-[16.8px] w-max text-black">
                            Gurgaon
                          </li>
                        </ul>

                        <ul className="flex flex-wrap  gap-[46px] mt-2 ">
                          <li className="hover:text-[#FF784B] cursor-pointer font-normal text-[14px] leading-[16.8px] w-max text-black">
                            Faridabad
                          </li>
                          <li className="hover:text-[#FF784B] cursor-pointer font-normal text-[14px] leading-[16.8px] w-max text-black">
                            Ghaziabad
                          </li>
                        </ul>
                      </div>

                      {/* Divider Line */}
                      <div className="border-t border-[#C0C0C0] my-2"></div>

                      {/* Second Section */}
                      <div className="mb-4">
                        <h3 className="text-black font-semibold text-[14px] leading-[16.8px] mb-[10px] font-poppins">
                          Delhi
                        </h3>
                        <ul className="flex gap-[46px] pb-[6px]">
                          <li className="hover:text-[#FF784B] cursor-pointer font-normal text-[14px] leading-[16.8px] w-max">
                            Delhi
                          </li>
                          <li className="hover:text-[#FF784B] cursor-pointer font-normal text-[14px] leading-[16.8px] w-max">
                            Noida
                          </li>
                          <li className="hover:text-[#FF784B] cursor-pointer font-normal text-[14px] leading-[16.8px] w-max">
                            Greater Noida
                          </li>
                          <li className="hover:text-[#FF784B] cursor-pointer font-normal text-[14px] leading-[16.8px] w-max">
                            Gurgaon
                          </li>
                        </ul>

                        <ul className="flex flex-wrap  gap-[46px] mt-2">
                          <li className="hover:text-[#FF784B] cursor-pointer font-normal text-[14px] leading-[16.8px] w-max">
                            Faridabad
                          </li>
                          <li className="hover:text-[#FF784B] cursor-pointer font-normal text-[14px] leading-[16.8px] w-max">
                            Ghaziabad
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* drop  */}

              <div className="relative" ref={searchRef}>
                <div
                  className="flex items-center gap-0 h-[44px] w-[790px] pl-4 border border-[#1AE2E9] rounded-[10px] bg-white shadow-sm"
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
                    onFocus={() => setIsOpen(true)}
                  />

                  <button className="flex items-center justify-center h-[45px] px-4 rounded-[10px] border border-[#1AE2E9] bg-gradient-to-r from-[#1AE2E9] via-[#019196] to-[#03676A] bg-clip-text text-transparent text-[16px] font-normal transition hover:opacity-90 m-0 p-0">
                    Search
                  </button>
                </div>

                {isOpen && (
                  <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-[10px] shadow-lg border border-gray-100 py-4">
                    <div className="px-4">
                      <h3 className="text-[#00979C] text-base font-medium mb-3">
                        Most Search - Product
                      </h3>
                      <div className="space-y-4">
                        {searchResults.product.map((item, index) => (
                          <div
                            key={`product-${index}`}
                            className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                          >
                            <span className="text-gray-900 font-normal">
                              {item.title}
                            </span>
                            <span className="text-gray-500 text-sm">
                              {item.subtitle}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 px-4">
                      <h3 className="text-[#00979C] text-base font-medium mb-3">
                        Most Search - Blog
                      </h3>
                      <div className="space-y-4">
                        {searchResults.blog.map((item, index) => (
                          <div
                            key={`blog-${index}`}
                            className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                          >
                            <span className="text-gray-900 font-normal">
                              {item.title}
                            </span>
                            <span className="text-gray-500 text-sm">
                              {item.subtitle}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
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

              <div className="relative">
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
                  <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg w-max">
                    <ul className="text-[#000]  text-sm leading-[120%]">
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link
                          href="/profile"
                          className="flex items-center space-x-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M0.833252 16.6666V13.3333C0.833252 12.8611 0.996446 12.4653 1.32284 12.1458C1.64922 11.8264 2.04159 11.6666 2.49992 11.6666H5.22909C5.50686 11.6666 5.77075 11.7361 6.02075 11.875C6.27075 12.0139 6.47214 12.2014 6.62492 12.4375C7.0277 12.9791 7.52422 13.4028 8.1145 13.7083C8.70478 14.0139 9.33325 14.1666 9.99992 14.1666C10.6805 14.1666 11.3159 14.0139 11.9062 13.7083C12.4964 13.4028 12.986 12.9791 13.3749 12.4375C13.5555 12.2014 13.7673 12.0139 14.0103 11.875C14.2534 11.7361 14.5069 11.6666 14.7708 11.6666H17.4999C17.9721 11.6666 18.368 11.8264 18.6874 12.1458C19.0069 12.4653 19.1666 12.8611 19.1666 13.3333V16.6666H13.3333V14.7708C12.8471 15.118 12.3228 15.3819 11.7603 15.5625C11.1978 15.743 10.611 15.8333 9.99992 15.8333C9.4027 15.8333 8.81936 15.7396 8.24992 15.5521C7.68047 15.3646 7.1527 15.0972 6.66659 14.75V16.6666H0.833252ZM9.99992 13.3333C9.47214 13.3333 8.97214 13.2118 8.49992 12.9687C8.0277 12.7257 7.63186 12.3889 7.31242 11.9583C7.07631 11.6111 6.78117 11.3368 6.427 11.1354C6.07284 10.934 5.68742 10.8333 5.27075 10.8333C5.57631 10.3194 6.22214 9.91317 7.20825 9.61456C8.19436 9.31595 9.12492 9.16665 9.99992 9.16665C10.8749 9.16665 11.8055 9.31595 12.7916 9.61456C13.7777 9.91317 14.4235 10.3194 14.7291 10.8333C14.3263 10.8333 13.9444 10.934 13.5833 11.1354C13.2221 11.3368 12.9235 11.6111 12.6874 11.9583C12.3819 12.4028 11.993 12.743 11.5208 12.9791C11.0485 13.2153 10.5416 13.3333 9.99992 13.3333ZM3.33325 10.8333C2.63881 10.8333 2.04853 10.5903 1.56242 10.1041C1.07631 9.61803 0.833252 9.02776 0.833252 8.33331C0.833252 7.62498 1.07631 7.03123 1.56242 6.55206C2.04853 6.0729 2.63881 5.83331 3.33325 5.83331C4.04159 5.83331 4.63534 6.0729 5.1145 6.55206C5.59367 7.03123 5.83325 7.62498 5.83325 8.33331C5.83325 9.02776 5.59367 9.61803 5.1145 10.1041C4.63534 10.5903 4.04159 10.8333 3.33325 10.8333ZM16.6666 10.8333C15.9721 10.8333 15.3819 10.5903 14.8958 10.1041C14.4096 9.61803 14.1666 9.02776 14.1666 8.33331C14.1666 7.62498 14.4096 7.03123 14.8958 6.55206C15.3819 6.0729 15.9721 5.83331 16.6666 5.83331C17.3749 5.83331 17.9687 6.0729 18.4478 6.55206C18.927 7.03123 19.1666 7.62498 19.1666 8.33331C19.1666 9.02776 18.927 9.61803 18.4478 10.1041C17.9687 10.5903 17.3749 10.8333 16.6666 10.8333ZM9.99992 8.33331C9.30547 8.33331 8.7152 8.09026 8.22909 7.60415C7.74297 7.11804 7.49992 6.52776 7.49992 5.83331C7.49992 5.12498 7.74297 4.53123 8.22909 4.05206C8.7152 3.5729 9.30547 3.33331 9.99992 3.33331C10.7083 3.33331 11.302 3.5729 11.7812 4.05206C12.2603 4.53123 12.4999 5.12498 12.4999 5.83331C12.4999 6.52776 12.2603 7.11804 11.7812 7.60415C11.302 8.09026 10.7083 8.33331 9.99992 8.33331Z"
                              fill="#1C1B1F"
                            />
                          </svg>
                          <span>Family Profiles</span>
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link href="#" className="flex items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <mask
                              id="mask0_2190_731"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="20"
                              height="20"
                            >
                              <rect width="20" height="20" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_2190_731)">
                              <path
                                d="M5 18.3334C4.30556 18.3334 3.71528 18.0903 3.22917 17.6042C2.74306 17.1181 2.5 16.5278 2.5 15.8334V13.3334H5V1.66669H17.5V15.8334C17.5 16.5278 17.2569 17.1181 16.7708 17.6042C16.2847 18.0903 15.6944 18.3334 15 18.3334H5ZM15 16.6667C15.2361 16.6667 15.434 16.5868 15.5938 16.4271C15.7535 16.2674 15.8333 16.0695 15.8333 15.8334V3.33335H6.66667V13.3334H14.1667V15.8334C14.1667 16.0695 14.2465 16.2674 14.4062 16.4271C14.566 16.5868 14.7639 16.6667 15 16.6667ZM7.5 7.50002V5.83335H15V7.50002H7.5ZM7.5 10V8.33335H15V10H7.5Z"
                                fill="#1C1B1F"
                              />
                            </g>
                          </svg>
                          <span>My Health Files</span>
                        </Link>
                      </li>

                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link href="#" className="flex items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <mask
                              id="mask0_2190_820"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="20"
                              height="20"
                            >
                              <rect width="20" height="20" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_2190_820)">
                              <path
                                d="M10 17.5C8.08333 17.5 6.41319 16.8646 4.98958 15.5938C3.56597 14.3229 2.75 12.7361 2.54167 10.8333H4.25C4.44444 12.2778 5.08681 13.4722 6.17708 14.4167C7.26736 15.3611 8.54167 15.8333 10 15.8333C11.625 15.8333 13.0035 15.2674 14.1354 14.1354C15.2674 13.0035 15.8333 11.625 15.8333 10C15.8333 8.375 15.2674 6.99653 14.1354 5.86458C13.0035 4.73264 11.625 4.16667 10 4.16667C9.04167 4.16667 8.14583 4.38889 7.3125 4.83333C6.47917 5.27778 5.77778 5.88889 5.20833 6.66667H7.5V8.33333H2.5V3.33333H4.16667V5.29167C4.875 4.40278 5.73958 3.71528 6.76042 3.22917C7.78125 2.74306 8.86111 2.5 10 2.5C11.0417 2.5 12.0174 2.69792 12.9271 3.09375C13.8368 3.48958 14.6285 4.02431 15.3021 4.69792C15.9757 5.37153 16.5104 6.16319 16.9062 7.07292C17.3021 7.98264 17.5 8.95833 17.5 10C17.5 11.0417 17.3021 12.0174 16.9062 12.9271C16.5104 13.8368 15.9757 14.6285 15.3021 15.3021C14.6285 15.9757 13.8368 16.5104 12.9271 16.9062C12.0174 17.3021 11.0417 17.5 10 17.5ZM12.3333 13.5L9.16667 10.3333V5.83333H10.8333V9.66667L13.5 12.3333L12.3333 13.5Z"
                                fill="#1C1B1F"
                              />
                            </g>
                          </svg>
                          <span>My Order</span>
                        </Link>
                      </li>

                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link href="#" className="flex items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <mask
                              id="mask0_2190_1593"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="20"
                              height="20"
                            >
                              <rect width="20" height="20" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_2190_1593)">
                              <path
                                d="M4.16675 14.1666V8.33331H5.83341V14.1666H4.16675ZM9.16675 14.1666V8.33331H10.8334V14.1666H9.16675ZM1.66675 17.5V15.8333H18.3334V17.5H1.66675ZM14.1667 14.1666V8.33331H15.8334V14.1666H14.1667ZM1.66675 6.66665V4.99998L10.0001 0.833313L18.3334 4.99998V6.66665H1.66675Z"
                                fill="#1C1B1F"
                              />
                            </g>
                          </svg>
                          <span>Payment Method</span>
                        </Link>
                      </li>

                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        <Link href="#" className="flex items-center space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <mask
                              id="mask0_2190_1523"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="20"
                              height="20"
                            >
                              <rect width="20" height="20" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_2190_1523)">
                              <path
                                d="M9.95841 15C10.2501 15 10.4966 14.8993 10.698 14.6979C10.8994 14.4965 11.0001 14.25 11.0001 13.9584C11.0001 13.6667 10.8994 13.4202 10.698 13.2188C10.4966 13.0174 10.2501 12.9167 9.95841 12.9167C9.66675 12.9167 9.42022 13.0174 9.21883 13.2188C9.01744 13.4202 8.91675 13.6667 8.91675 13.9584C8.91675 14.25 9.01744 14.4965 9.21883 14.6979C9.42022 14.8993 9.66675 15 9.95841 15ZM9.20841 11.7917H10.7501C10.7501 11.3334 10.8022 10.9722 10.9063 10.7084C11.0105 10.4445 11.3056 10.0834 11.7917 9.62502C12.1529 9.26391 12.4376 8.92016 12.6459 8.59377C12.8542 8.26738 12.9584 7.87502 12.9584 7.41669C12.9584 6.63891 12.6737 6.04169 12.1042 5.62502C11.5348 5.20835 10.8612 5.00002 10.0834 5.00002C9.29175 5.00002 8.64939 5.20835 8.15633 5.62502C7.66328 6.04169 7.31953 6.54169 7.12508 7.12502L8.50008 7.66669C8.56953 7.41669 8.72578 7.14585 8.96883 6.85419C9.21189 6.56252 9.58342 6.41669 10.0834 6.41669C10.5279 6.41669 10.8612 6.53821 11.0834 6.78127C11.3056 7.02433 11.4167 7.29169 11.4167 7.58335C11.4167 7.86113 11.3334 8.12155 11.1667 8.3646C11.0001 8.60766 10.7917 8.83335 10.5417 9.04169C9.93064 9.58335 9.55564 9.99308 9.41675 10.2709C9.27786 10.5486 9.20841 11.0556 9.20841 11.7917ZM10.0001 18.3334C8.8473 18.3334 7.76397 18.1146 6.75008 17.6771C5.73619 17.2396 4.85425 16.6459 4.10425 15.8959C3.35425 15.1459 2.7605 14.2639 2.323 13.25C1.8855 12.2361 1.66675 11.1528 1.66675 10C1.66675 8.84724 1.8855 7.76391 2.323 6.75002C2.7605 5.73613 3.35425 4.85419 4.10425 4.10419C4.85425 3.35419 5.73619 2.76044 6.75008 2.32294C7.76397 1.88544 8.8473 1.66669 10.0001 1.66669C11.1529 1.66669 12.2362 1.88544 13.2501 2.32294C14.264 2.76044 15.1459 3.35419 15.8959 4.10419C16.6459 4.85419 17.2397 5.73613 17.6772 6.75002C18.1147 7.76391 18.3334 8.84724 18.3334 10C18.3334 11.1528 18.1147 12.2361 17.6772 13.25C17.2397 14.2639 16.6459 15.1459 15.8959 15.8959C15.1459 16.6459 14.264 17.2396 13.2501 17.6771C12.2362 18.1146 11.1529 18.3334 10.0001 18.3334Z"
                                fill="#1C1B1F"
                              />
                            </g>
                          </svg>
                          <span>Help & Support</span>
                        </Link>
                      </li>

                      <li className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer">
                        <Link
                          href="/login"
                          className="flex items-center space-x-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <mask
                              id="mask0_2190_1598"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="20"
                              height="20"
                            >
                              <rect width="20" height="20" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_2190_1598)">
                              <path
                                d="M4.16667 17.5C3.70833 17.5 3.31597 17.3368 2.98958 17.0104C2.66319 16.684 2.5 16.2917 2.5 15.8333V4.16667C2.5 3.70833 2.66319 3.31597 2.98958 2.98958C3.31597 2.66319 3.70833 2.5 4.16667 2.5H10V4.16667H4.16667V15.8333H10V17.5H4.16667ZM13.3333 14.1667L12.1875 12.9583L14.3125 10.8333H7.5V9.16667H14.3125L12.1875 7.04167L13.3333 5.83333L17.5 10L13.3333 14.1667Z"
                                fill="#FF4242"
                              />
                            </g>
                          </svg>
                          <span>Logout</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <header className="flex justify-center items-center gap-12 bg-[#E6F5F5] py-3 mt-[5rem]">
          <div className="flex w-full max-w-[1512px] h-16 px-8 items-center mobile-hide">
            <nav className="flex justify-center items-center gap-10 pl-[135px]">
              <ul className="flex justify-center items-center gap-10">
                {[
                  { href: "/", label: "Home" },
                  { href: "/long-term-care", label: "Long term care" },
                  { href: "/book", label: "Home visit" },
                  { href: "/ecommerce", label: "Medical Equipment" },
                  { href: "/diagnostics", label: "Home Diagnostics" },
                  { href: "/vacinnation", label: "Adult Vaccination" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`inline-flex justify-center items-center gap-2.5 px-[10px] py-1 text-base font-normal leading-[120%]  ${
                        pathname === link.href
                          ? "bg-[#FF784B] text-white border border-[#FF784B] rounded"
                          : "text-[#009A9F] hover:text-[#FF784B]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="w-[37px] h-[32px] flex justify-center items-center rounded-full ml-12">
              <Link href="mailto:care@apollohomecare.com">
                <Image src={emailICon} alt="email" height={32} width={37} />
              </Link>
            </div>
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
                  />
                </svg>
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
          <div
            className="flex items-center text-[#009A9F] font-medium text-sm cursor-pointer"
            onClick={handleCityToggle}
          >
            <Image src={location_on} alt="location" height={15} width={15} />
            <p className="mx-1 text-[12px]">New Delhi, Delhi</p>
            <Image
              src={keyboard_arrow_down}
              alt="arrow down"
              height={15}
              width={15}
              className={`transform transition-transform ${
                city ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>

          <div className="flex gap-[10px]">
            <Image
              src={search}
              alt="search"
              height={24}
              width={24}
              onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
              <div className="absolute top-[57px] left-0 w-full mt-2 bg-white rounded-[10px] shadow-lg border border-gray-100 py-4 z-50">
                <div className="px-4">
                  <div className="w-full  mx-auto">
                    <div className="flex items-center space-x-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="cursor-pointer"
                      >
                        <path
                          d="M15 18L9 12L15 6"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h2 className="text-lg font-semibold">Search</h2>
                    </div>
                    <div className="flex items-center border border-gray-500 w-full p-2 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-gray-500 mr-2"
                      >
                        <path
                          d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
                          fill="#B3B3B3"
                        />
                      </svg>
                      <input
                        type="text"
                        placeholder='try searching something "my subscriptions"'
                        className="flex-grow text-gray-800 focus:outline-none bg-transparent placeholder-gray-400"
                      />

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-black cursor-pointer ml-2"
                      >
                        <path
                          d="M8.4 17L7 15.6L10.6 12L7 8.42502L8.4 7.02502L12 10.625L15.575 7.02502L16.975 8.42502L13.375 12L16.975 15.6L15.575 17L12 13.4L8.4 17Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-[#00979C] text-base font-medium mb-3 mt-2">
                    Most Search - Product
                  </h3>
                  <div className="space-y-4">
                    {searchResults.product.map((item, index) => (
                      <div
                        key={`product-${index}`}
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded"
                      >
                        <span className="text-gray-900 font-semibold text-sm">
                          {item.title}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {item.subtitle}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 px-4">
                  <h3 className="text-[#00979C] text-base font-medium mb-3">
                    Most Search - Blog
                  </h3>
                  <div className="space-y-4">
                    {searchResults.blog.map((item, index) => (
                      <div
                        key={`blog-${index}`}
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded"
                      >
                        <span className="text-gray-900 font-semibold text-sm">
                          {item.title}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {item.subtitle}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#009A9F]">
              <Image
                src={shoppingCart}
                alt="shopping cart"
                height={12}
                width={12}
              />
            </div>
            <div className="relative">
              <div
                className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-[#009A9F] cursor-pointer"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="19"
                  width="19"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.485 0 4.5-2.015 4.5-4.5S14.485 3 12 3 7.5 5.015 7.5 7.5 9.515 12 12 12zm0 2c-3.314 0-6 2.686-6 6v2h12v-2c0-3.314-2.686-6-6-6z" />
                </svg>
              </div>

              {/* Dropdown Menu */}
              {menuOpen && (
                <div className="fixed inset-0 bg-white z-30 h-screen p-4 overflow-y-auto w-[375px] left-[60px]">
                  {/* Close Button */}
                  <div className="flex justify-between items-center bg-[#009A9F] p-[10px_20px_10px_10px]">
                    <h3 className="text-white font-poppins text-sm font-normal leading-[1.2] rounded-b-[20px] self-stretch ">
                      Profile
                    </h3>

                    <button
                      className="text-[#fff] font-bold text-lg"
                      onClick={toggleMenu}
                    >
                      ×
                    </button>
                  </div>
                  <ul className="mt-6 flex flex-col gap-4">
                    <li className="flex items-center gap-3 cursor-pointer text-[14px] text-black hover:text-[#FF784B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        width="20"
                        viewBox="0 0 24 24"
                        fill="black"
                      >
                        <path d="M16 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm1 1h-2v1h-2v1h6v-1h-2v-1zm-7 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 2c-1.78 0-4.7.92-4.7 2.7V18h9.4v-1.3c0-1.78-2.92-2.7-4.7-2.7z" />
                      </svg>
                      Family Profiles
                    </li>
                    <li className="flex items-center gap-3 cursor-pointer text-[14px] text-black hover:text-[#FF784B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        width="20"
                        viewBox="0 0 24 24"
                        fill="black"
                      >
                        <path d="M13 11h-2v2h2v-2zm0-4h-2v2h2V7zm-1-5C5.92 2 2 6.48 2 11c0 4.52 3.92 9 10 9s10-4.48 10-9c0-4.52-3.92-9-10-9zm0 16c-4.34 0-8-3.28-8-7s3.66-7 8-7 8 3.28 8 7-3.66 7-8 7z" />
                      </svg>
                      My Health Files
                    </li>
                    <li className="flex items-center gap-3 cursor-pointer text-[14px] text-black hover:text-[#FF784B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        width="20"
                        viewBox="0 0 24 24"
                        fill="black"
                      >
                        <path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V8h14v10zm-3-3H8v-2h8v2z" />
                      </svg>
                      Payment Method
                    </li>
                    <li className="flex items-center gap-3 cursor-pointer text-[14px] text-black hover:text-[#FF784B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        width="20"
                        viewBox="0 0 24 24"
                        fill="black"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm-.001 6C9.794 10 9 10.791 9 12h2v1h-1v1h1v1h-1v1h2v-1c0-.577.373-.875.738-1.111.292-.19.512-.398.762-.683C13.624 11.597 14 10.932 14 10c0-1.105-.895-2-2.001-2zM13 13h-1v-1h1v1z" />
                      </svg>
                      Help & Support
                    </li>
                    <li className="flex items-center gap-3 cursor-pointer text-[14px] text-[#FF784B]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        width="20"
                        viewBox="0 0 24 24"
                        fill="#FF784B"
                      >
                        <path d="M10 9v6H5v4h14v-4h-5v-6h5V5H5v4h5zm1-6h-7v16h7v-3h7V6h-7V3z" />
                      </svg>
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Mobile Dropdown */}
        {city && (
          <div className="bg-white shadow-lg p-4 rounded-lg absolute top-[50px] left-0 right-0 mx-auto z-10 w-[184px]">
            <h3 className="text-black font-semibold text-[14px] mb-2">
              Select City
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-[#FF784B] cursor-pointer text-[14px] text-black">
                Delhi
              </li>
              <li className="hover:text-[#FF784B] cursor-pointer text-[14px] text-black">
                Noida
              </li>
              <li className="hover:text-[#FF784B] cursor-pointer text-[14px] text-black">
                Gurgaon
              </li>
              <li className="hover:text-[#FF784B] cursor-pointer text-[14px] text-black">
                Faridabad
              </li>
              <li className="hover:text-[#FF784B] cursor-pointer text-[14px] text-black">
                Ghaziabad
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
