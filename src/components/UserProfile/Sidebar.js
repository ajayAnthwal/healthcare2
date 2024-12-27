"use client";
import { useState, useEffect } from "react";

export default function Sidebar({ setActiveLink, activeLink }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const menuItems = [
    { name: "My Purchases", id: "my-purchases" },
    { name: "My Subscription", id: "my-subscription" },
    { name: "My Health Files", id: "my-health-files" },
    { name: "Payment Options", id: "payment-options" },
    { name: "Addresses", id: "addresses" },
    { name: "Edit Profile", id: "edit-profile" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-0 top-[50%] -translate-y-1/2 bg-[#009A9F] text-white px-4 py-2 rounded-r-md lg:hidden"
      >
        Quick Links
      </button>
      <div
        className="
        hidden lg:block 
        static mt-[173px] 
        p-5 w-96 
        inline-flex flex-col justify-center items-start gap-2 
        rounded-r-[10px] 
        border border-solid border-[#1AE2E9] overflow-hidden bg-white h-[50vh]"
      >
        <h2 className="text-black font-poppins text-[16px] font-medium leading-normal mb-5">
          Quick Links
        </h2>
        <ul className="space-y-4 w-full">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="flex items-start gap-1 p-[10px] w-[200px] rounded-[10px]"
            >
              <a
                href="#"
                className={`w-full ${
                  item.name === activeLink
                    ? "bg-gradient-to-r from-[#1AE2E9] via-[#019196] to-[#03676A] text-white p-[10px] rounded-[10px]"
                    : "text-black"
                } text-[16px] font-poppins font-[400] leading-normal`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(item.name);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar for Mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black bg-opacity-50"
          ></div>
          <div
            className="
            absolute left-0 top-0 w-3/4 max-w-[300px] h-full 
            bg-white shadow-lg p-5"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="text-black font-bold mb-4"
            >
              ✕ Close
            </button>
            <h2 className="text-black font-poppins text-[16px] font-medium leading-normal mb-5">
              Quick Links
            </h2>
            <ul className="space-y-4 w-full">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  className="flex items-start gap-1 p-[10px] w-[200px] rounded-[10px]"
                >
                  <a
                    href="#"
                    className={`w-full ${
                      item.name === activeLink
                        ? "bg-gradient-to-r from-[#1AE2E9] via-[#019196] to-[#03676A] text-white p-[10px] rounded-[10px]"
                        : "text-black"
                    } text-[16px] font-poppins font-[400] leading-normal`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveLink(item.name);
                      setIsOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
