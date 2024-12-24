import React, { useState } from "react";
import Image from "next/image";
import Ellipse from "@/assets/images/profile/Ellipse.svg";

const BankData = [
  {
    id: 1,
    name: "Paytm Payment Banks",
    account: "XXXX12345",
    isPrimary: true,
    status: "Verified",
    ifsc: "PYTM01234567890",
    branch: "New Delhi Branch",
  },
  {
    id: 2,
    name: "Paytm Payment Banks",
    account: "XXXX12345",
    isPrimary: false,
    status: "Verified",
    ifsc: "PYTM01234567890",
    branch: "New Delhi Branch",
  },
  {
    id: 3,
    name: "Paytm Payment Banks",
    account: "XXXX12345",
    isPrimary: false,
    status: "Verified",
    ifsc: "PYTM01234567890",
    branch: "New Delhi Branch",
  },

  {
    id: 4,
    name: "Paytm Payment Banks",
    account: "XXXX12345",
    isPrimary: false,
    status: "Verified",
    ifsc: "PYTM01234567890",
    branch: "New Delhi Branch",
  },
];

export default function ManagePaymentOptions() {
  const [selectedBank, setSelectedBank] = useState(BankData[0]);

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full bg-white ">
        {/* Bank List Section */}
        <div className=" rounded-lg p-6 ">
          <ul className="space-y-4 border rounded-lg">
            {BankData.map((bank) => (
              <li
                key={bank.id}
                className={`relative flex items-center justify-between p-[7px] px-2.5 self-stretch border-b-2 ${
                  bank.id === selectedBank.id
                    ? "bg-[#009A9F] text-white rounded-tl-[10px] rounded-tr-[10px] border-[#009A9F]"
                    : "border-[C0C0C0]"
                } cursor-pointer`}
                onClick={() => setSelectedBank(bank)}
              >
                <div className="flex items-center">
                  <Image
                    src={Ellipse}
                    alt="Bank Logo"
                    width={48}
                    height={48}
                    className="mr-4"
                  />
                  <div>
                    <h2
                      className={`font-poppins text-[14px] font-semibold leading-normal ${
                        bank.id === selectedBank.id
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {bank.name}
                    </h2>
                    <p
                      className={`text-[14px] font-light leading-normal ${
                        bank.id === selectedBank.id
                          ? "text-white"
                          : "text-black"
                      }`}
                    >
                      {bank.account}
                    </p>
                  </div>
                  {bank.isPrimary && (
                    <span className="ml-4 flex items-center text-xs text-teal-200 font-medium -mt-[13px]">
                      {/* Star SVG */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="mr-1"
                      >
                        <mask
                          id="mask0_1615_1543"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_1615_1543)">
                          <path
                            d="M5.825 21L7.45 13.975L2 9.25L9.2 8.625L12 2L14.8 8.625L22 9.25L16.55 13.975L18.175 21L12 17.275L5.825 21Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                      Primary
                    </span>
                  )}
                </div>
                <button className="p-2 rounded-full hover:bg-teal-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-white"
                  >
                    <circle cx="12" cy="5" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="12" cy="19" r="1.5" />
                  </svg>
                </button>
              </li>
            ))}
            <li className="flex items-center gap-2 py-[10px] px-[10px]  bg-white cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_1615_1622"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1615_1622)">
                  <path
                    d="M11 17H13V13H17V11H13V7H11V11H7V13H11V17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"
                    fill="#009A9F"
                  />
                </g>
              </svg>
              <span className="text-[#009A9F] font-poppins text-[12px] font-normal">
                Add another bank
              </span>
            </li>
          </ul>
        </div>

        {/* Bank Details Section */}
        <div className="bg-white rounded-[10px] shadow  border border-gray-200">
          <div className="flex items-center border-b border-gray-300 pb-4 gap-6">
            <div className="flex items-center gap-1 p-6">
              <Image
                src={Ellipse}
                alt="Bank Logo"
                width={50}
                height={50}
                className="mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Paytm Payment Banks
                </h2>
                <p className="text-sm text-gray-500">XXXX12345</p>
              </div>
            </div>

            <div className="flex items-start gap-2 -mt-[13px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_1615_1511"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1615_1511)">
                  <path
                    d="M5.825 21L7.45 13.975L2 9.25L9.2 8.625L12 2L14.8 8.625L22 9.25L16.55 13.975L18.175 21L12 17.275L5.825 21Z"
                    fill="#009A9F"
                  />
                </g>
              </svg>

              <span className="text-teal-500 font-medium text-sm">Primary</span>
            </div>
          </div>

          <ul className="mt-4 space-y-3 text-sm p-6">
            <li className="flex">
              <div className="flex flex-col items-start gap-5 w-[120px]">
                <span className="text-black font-poppins text-sm font-light leading-normal">
                  Status
                </span>
                <span className="text-black font-poppins text-sm font-light leading-normal">
                  Account
                </span>
                <span className="text-black font-poppins text-sm font-light leading-normal">
                  IFSC Code
                </span>
                <span className="text-black font-poppins text-sm font-light leading-normal">
                  Branch Name
                </span>
              </div>
              <div className="flex flex-col items-start gap-5">
                <span className="text-black font-poppins text-sm font-medium leading-normal">
                  Verified
                </span>
                <span className="text-black font-poppins text-sm font-medium leading-normal">
                  XXXX12345
                </span>
                <span className="text-black font-poppins text-sm font-medium leading-normal">
                  PYTM01234567890
                </span>
                <span className="text-black font-poppins text-sm font-medium leading-normal">
                  New Delhi Branch
                </span>
              </div>
            </li>
          </ul>

          <div className="mt-6 p-0 bg-[#009A9F] text-white flex items-center justify-between border-t border-gray-300 h-[44px] relative bottom-[-22px] rounded-b-[10px]">
            <span className="text-white font-poppins text-sm font-medium leading-normal p-6">
              Have questions about Payment Options?
            </span>

            <button className="flex items-center gap-2 text-white px-4 py-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
              >
                <path
                  d="M11.95 18C12.3 18 12.5958 17.8792 12.8375 17.6375C13.0792 17.3958 13.2 17.1 13.2 16.75C13.2 16.4 13.0792 16.1042 12.8375 15.8625C12.5958 15.6208 12.3 15.5 11.95 15.5C11.6 15.5 11.3042 15.6208 11.0625 15.8625C10.8208 16.1042 10.7 16.4 10.7 16.75C10.7 17.1 10.8208 17.3958 11.0625 17.6375C11.3042 17.8792 11.6 18 11.95 18ZM11.05 14.15H12.9C12.9 13.6 12.9625 13.1667 13.0875 12.85C13.2125 12.5333 13.5667 12.1 14.15 11.55C14.5833 11.1167 14.925 10.7042 15.175 10.3125C15.425 9.92083 15.55 9.45 15.55 8.9C15.55 7.96667 15.2083 7.25 14.525 6.75C13.8417 6.25 13.0333 6 12.1 6C11.15 6 10.3792 6.25 9.7875 6.75C9.19583 7.25 8.78333 7.85 8.55 8.55L10.2 9.2C10.2833 8.9 10.4708 8.575 10.7625 8.225C11.0542 7.875 11.5 7.7 12.1 7.7C12.6333 7.7 13.0333 7.84583 13.3 8.1375C13.5667 8.42917 13.7 8.75 13.7 9.1C13.7 9.43333 13.6 9.74583 13.4 10.0375C13.2 10.3292 12.95 10.6 12.65 10.85C11.9167 11.5 11.4667 11.9917 11.3 12.325C11.1333 12.6583 11.05 13.2667 11.05 14.15ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"
                  fill="#FFF"
                />
              </svg>
              Get Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
