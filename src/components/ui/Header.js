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
    <div className="bg-[#e6f5f5]">
      {/* Top Header */}
      <div className="fixed top-0 inset-x-0 z-50 bg-[#e6f5f5] w-[1512px] mx-auto">
        {/* Top Header Section */}
        <header
          className={`h-16 hidden md:${
            isVisible ? "block" : "hidden"
          } relative transition-all duration-300`}
        >
          <nav className="flex items-end justify-end w-full h-full px-4 mx-auto">
            <div className="flex items-center gap-x-6 h-full">
              <div className="flex items-center text-[#FF784B] font-medium text-sm">
                <Image src={location} alt="location" height={19} width={19} />
                <p className="ms-2 text-[16px]">New Delhi, Delhi</p>
                <Image
                  src={arrowDown}
                  className="ms-2"
                  alt="arrow down"
                  height={19}
                  width={19}
                />
              </div>
              <p className="text-[#FF784B]">|</p>
              <div className="flex items-center text-[#FF784B] font-medium text-sm">
                <Image src={call} alt="call" height={19} width={19} />
                <p className="ms-2 text-[16px]">1800 108 8586</p>
              </div>
              <p className="text-[#FF784B]">|</p>
              <div className="flex items-center text-[#FF784B] font-medium text-sm">
                <Image src={mail} alt="mail" height={19} width={19} />
                <p className="ms-2 text-[16px]">care@apollohomecare.com</p>
              </div>
            </div>
          </nav>

          {/* Border above the navigation */}
          <div className="relative w-[70%] left-[9%] mx-auto h-[1px] bg-gradient-to-r from-[#cbd6d6] to-[#cbd6d6] overflow-hidden" />
        </header>

        {/* Main Navigation Section */}
        <div className="bg-[#e6f5f5]">
          <div className=" flex justify-between items-center  px-4 md:px-0">
            {/* Logo */}
            <Image
              alt="logo"
              loading="lazy"
              width={174}
              height={74}
              decoding="async"
              src={logohealth}
              className={`absolute top-[16px] p-3 hidden sm:block transition-all duration-300 ${
                isScrolled ? "top-[0px] relative" : ""
              }`}
            />

            {/* Links */}
            <div className="hidden md:flex items-center gap-[40px] mx-auto">
              <Link
                href="/"
                className="text-[16px] cursor-pointer text-[#009A9F] hover:text-[rgba(255, 120, 75, 0.01)] hover:bg-[#003638] py-2 px-3 rounded-md transition-all"
              >
                Home
              </Link>
              <Link
                href="/long-term-care"
                className="text-[16px] cursor-pointer text-[#009A9F] hover:text-[rgba(255, 120, 75, 0.01)] hover:bg-[#003638] py-2 px-3 rounded-md transition-all"
              >
                Long term care
              </Link>
              <Link
                href="/home-visit"
                className="text-[16px] cursor-pointer text-[#009A9F] hover:text-[rgba(255, 120, 75, 0.01)] hover:bg-[#003638] py-2 px-3 rounded-md transition-all"
              >
                Home visit
              </Link>
              <Link
                href="/medical-equipment"
                className="text-[16px] cursor-pointer text-[#009A9F] hover:text-[rgba(255, 120, 75, 0.01)] hover:bg-[#003638] py-2 px-3 rounded-md transition-all"
              >
                Medical Equipment
              </Link>
            </div>

            {/* Buttons */}
            <div className="hidden md:flex items-center gap-x-4 py-3">
              <button className="px-7 py-3 text-white font-semibold bg-[#009A9F] rounded-full shadow-[0px_8px_23px_0px_rgba(65,132,247,0.24)] transition-all hover:rounded-[100px] hover:bg-[#008B8F] hover:shadow-[0px_8px_23px_0px_rgba(65,132,247,0.24)]">
                I need consultation
              </button>
              <button className="relative inline-flex items-center justify-center overflow-hidden px-4 py-2 text-white bg-[#009A9F] rounded-full transition-all duration-300 ease-in-out hover:rounded-[100px] hover:bg-[#008B8F] hover:shadow-[0px_8px_23px_0px_rgba(65,132,247,0.24)]">
                <Image
                  alt="Shopping Cart"
                  loading="lazy"
                  width={20}
                  height={20}
                  src={shoppingCart}
                />
              </button>
              <button className="relative inline-flex items-center justify-center overflow-hidden px-4 py-2 text-white bg-[#009A9F] rounded-full shadow-[0px_8px_23px_0px_rgba(65,132,247,0.24)] transition-all duration-300 ease-in-out hover:rounded-[100px] hover:bg-[#008B8F] hover:shadow-[0px_8px_23px_0px_rgba(65,132,247,0.24)]">
                <Image
                  alt="account"
                  loading="lazy"
                  width={20}
                  height={20}
                  src={account}
                />
                <span className="ms-2">Rahul</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ms-2 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
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
