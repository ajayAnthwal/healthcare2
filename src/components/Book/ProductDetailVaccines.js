"use client";
import React, { useState } from "react";
import Image from "next/image";
import Book_banner from "@/assets/images/book/book-banner.png";
import product from "@/assets/images/book/product.png";
import chair from "@/assets/images/book/chair.png";
import vaccines from "@/assets/images/book/image1.png";
import Link from "next/link";
import { FiShare2 } from "react-icons/fi"; // Share icon

const ProductDetailVaccines = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const [showPopup, setShowPopup] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState({
    date: "12th Dec",
    slot: "Slot – 3",
  });

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSlotSelect = (slot, date) => {
    setSelectedSlot({ date, slot });
    setShowPopup(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Product Detail</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="relative w-fit">
            {/* Image */}
            <Image
              src={vaccines}
              alt="Brand C Wheelchair"
              width={600}
              height={400}
              className="rounded-lg"
            />

            {/* Share Icon */}
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md cursor-pointer hover:scale-105 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_4671_17783"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <path d="M0 0H24V24H0V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_4671_17783)">
                  <path
                    d="M0.703125 24V19.3137C0.703125 12.0648 6.57919 6.1882 13.8281 6.1875V1.5L22.8967 9L13.8281 16.5V11.8125H12.8906C6.15966 11.8125 0.703125 17.269 0.703125 24Z"
                    stroke="#009A9F"
                    strokeWidth="1.40625"
                    strokeMiterlimit="10"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex mt-4 space-x-2 overflow-x-auto">
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                src={Book_banner}
                alt={`Similar product ${index + 1}`}
                width={100}
                height={100}
                className="rounded-md border border-gray-200 flex-shrink-0"
              />
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <>
            <h2 className="text-[28px] font-semibold text-[#000] font-poppins leading-normal">
              Oxygen Cylinder
            </h2>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span className="text-right text-[14px] text-[#009A9F] font-poppins font-normal leading-[21px] underline">
                12 reviews
              </span>
            </div>

            <div className="text-[28px] font-bold text-[#FF784B] font-inter leading-[36.4px]">
              $15.50 (Fix)
            </div>

            <div className="flex items-center text-[#777] text-sm font-medium leading-[23.4px] mt-4">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  className="mr-2"
                >
                  <mask
                    id="mask0_2397_409"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="18"
                    height="18"
                  >
                    <rect width="18" height="18" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_2397_409)">
                    <path
                      d="M5.25 15C4.625 15 4.09375 14.7812 3.65625 14.3438C3.21875 13.9062 3 13.375 3 12.75H1.125L1.4625 11.25H3.58125C3.79375 11.0125 4.04375 10.8281 4.33125 10.6969C4.61875 10.5656 4.925 10.5 5.25 10.5C5.575 10.5 5.88125 10.5656 6.16875 10.6969C6.45625 10.8281 6.70625 11.0125 6.91875 11.25H10.05L11.625 4.5H3.4125L3.4875 4.18125C3.5625 3.83125 3.73438 3.54688 4.00313 3.32812C4.27188 3.10937 4.5875 3 4.95 3H13.5L12.8063 6H15L17.25 9L16.5 12.75H15C15 13.375 14.7812 13.9062 14.3438 14.3438C13.9062 14.7812 13.375 15 12.75 15C12.125 15 11.5938 14.7812 11.1562 14.3438C10.7188 13.9062 10.5 13.375 10.5 12.75H7.5C7.5 13.375 7.28125 13.9062 6.84375 14.3438C6.40625 14.7812 5.875 15 5.25 15ZM11.9438 9.75H15.5625L15.6375 9.35625L14.25 7.5H12.4688L11.9438 9.75ZM11.5875 4.63125L11.625 4.5L10.05 11.25L10.0875 11.1187L10.725 8.38125L11.5875 4.63125ZM0.375 9.99375L0.75 8.49375H4.875L4.5 9.99375H0.375ZM1.875 7.25625L2.25 5.75625H7.125L6.75 7.25625H1.875ZM5.25 13.5C5.4625 13.5 5.64062 13.4281 5.78438 13.2844C5.92812 13.1406 6 12.9625 6 12.75C6 12.5375 5.92812 12.3594 5.78438 12.2156C5.64062 12.0719 5.4625 12 5.25 12C5.0375 12 4.85938 12.0719 4.71562 12.2156C4.57188 12.3594 4.5 12.5375 4.5 12.75C4.5 12.9625 4.57188 13.1406 4.71562 13.2844C4.85938 13.4281 5.0375 13.5 5.25 13.5ZM12.75 13.5C12.9625 13.5 13.1406 13.4281 13.2844 13.2844C13.4281 13.1406 13.5 12.9625 13.5 12.75C13.5 12.5375 13.4281 12.3594 13.2844 12.2156C13.1406 12.0719 12.9625 12 12.75 12C12.5375 12 12.3594 12.0719 12.2156 12.2156C12.0719 12.3594 12 12.5375 12 12.75C12 12.9625 12.0719 13.1406 12.2156 13.2844C12.3594 13.4281 12.5375 13.5 12.75 13.5Z"
                      fill="#777777"
                    />
                  </g>
                </svg>
                Delivered in 1-2 days
              </span>
              <a
                href="#"
                className="text-[#009A9F] ml-2 underline hover:underline-offset-4"
              >
                Check Pincode
              </a>
            </div>

            <div className="flex items-center justify-between px-4 py-2 w-fit">
              <div className="relative">
                <div
                  className="flex items-center justify-between bg-white shadow-md rounded-full px-4 py-2 w-fit cursor-pointer"
                  onClick={togglePopup}
                >
                  <p className="text-green-800 font-semibold">
                    {selectedSlot.date}, {selectedSlot.slot}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-800 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {showPopup && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-[44rem]">
                      <div className="flex justify-between items-center px-6 py-4 border-b">
                        <h3 className="text-lg font-semibold">
                          Select Date and Time
                        </h3>
                        <button
                          className="text-gray-500 hover:text-gray-700"
                          onClick={togglePopup}
                        >
                          Close
                        </button>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 border-r p-4">
                          <p className="font-semibold mb-2">Month 2000</p>
                          <div className="grid grid-cols-7 gap-2 text-center">
                            {[
                              "Mon",
                              "Tue",
                              "Wed",
                              "Thu",
                              "Fri",
                              "Sat",
                              "Sun",
                            ].map((day, index) => (
                              <p key={index} className="text-gray-500">
                                {day}
                              </p>
                            ))}
                            {Array.from({ length: 31 }, (_, i) => (
                              <button
                                key={i}
                                className={`p-2 rounded-full ${
                                  i + 1 === 2
                                    ? "bg-teal-500 text-white"
                                    : "text-gray-700 hover:bg-gray-200"
                                }`}
                                onClick={() =>
                                  handleSlotSelect("Slot – 1", `2nd Dec`)
                                }
                              >
                                {i + 1}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="w-full md:w-1/2  p-4">
                          <p className="font-semibold mb-2">Slot</p>
                          {["Slot 1", "Slot 2", "Slot 3", "Slot 4"].map(
                            (slot, index) => (
                              <button
                                key={index}
                                className={`w-full px-4 py-2 rounded-lg mb-2 text-left ${
                                  slot === selectedSlot.slot
                                    ? "bg-teal-500 text-white"
                                    : "bg-gray-100 hover:bg-gray-200"
                                }`}
                                onClick={() =>
                                  handleSlotSelect(slot, "2nd Dec")
                                }
                              >
                                {slot} -{" "}
                                {
                                  ["9:00AM", "10:20AM", "11:40AM", "1:00PM"][
                                    index
                                  ]
                                }{" "}
                                -{" "}
                                {
                                  ["10:10AM", "11:30AM", "12:50PM", "2:10PM"][
                                    index
                                  ]
                                }
                              </button>
                            )
                          )}
                        </div>
                      </div>
                      <div className="flex justify-end p-4 border-t">
                        <button
                          className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                          onClick={togglePopup}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mt-4">
              <Link href="/checkout">
                <button className="flex flex-col items-center gap-2 px-5 py-2.5 rounded-full bg-[#009A9F] text-white text-center font-poppins text-sm font-semibold hover:bg-[#008a8e]">
                  Buy Now
                </button>
              </Link>
            </div>

            <div className="flex items-center text-[#777] text-sm font-medium leading-[23.4px] mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="mr-2"
              >
                <mask
                  id="mask0_2353_3639"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="18"
                  height="18"
                >
                  <rect width="18" height="18" fill="#777777" />
                </mask>
                <g mask="url(#mask0_2353_3639)">
                  <path
                    d="M0.75 13.5L1.125 12H5.25L4.875 13.5H0.75ZM2.25 10.5L2.625 9H7.5L7.125 10.5H2.25ZM13.9313 15L14.3063 12L14.85 7.5L15.0375 6.01875L13.9313 15ZM4.5 16.5C4.0875 16.5 3.73438 16.3531 3.44063 16.0594C3.14688 15.7656 3 15.4125 3 15H13.9313L15.0375 6.01875H12.975L12.7687 7.6125C12.7437 7.825 12.65 7.99062 12.4875 8.10938C12.325 8.22813 12.1375 8.275 11.925 8.25C11.7125 8.225 11.5469 8.13437 11.4281 7.97812C11.3094 7.82188 11.2625 7.6375 11.2875 7.425L11.4563 6.01875H8.475L8.26875 7.59375C8.24375 7.80625 8.15 7.975 7.9875 8.1C7.825 8.225 7.6375 8.275 7.425 8.25C7.2125 8.225 7.04375 8.13125 6.91875 7.96875C6.79375 7.80625 6.74375 7.61875 6.76875 7.40625L6.9375 6.01875H4.125C4.175 5.59375 4.3375 5.23438 4.6125 4.94063C4.8875 4.64688 5.225 4.5 5.625 4.5H7.125C7.225 3.5625 7.54688 2.82812 8.09063 2.29688C8.63438 1.76562 9.375 1.5 10.3125 1.5C11.1125 1.5 11.7781 1.79688 12.3094 2.39062C12.8406 2.98438 13.1 3.6875 13.0875 4.5H15C15.45 4.5125 15.825 4.6875 16.125 5.025C16.425 5.3625 16.5438 5.75625 16.4813 6.20625L15.3563 15.2062C15.3063 15.5812 15.1406 15.8906 14.8594 16.1344C14.5781 16.3781 14.25 16.5 13.875 16.5H4.5ZM8.625 4.5H11.6063C11.6188 4.0875 11.4781 3.73438 11.1844 3.44063C10.8906 3.14688 10.5375 3 10.125 3C9.6875 3 9.34062 3.13438 9.08438 3.40313C8.82812 3.67188 8.675 4.0375 8.625 4.5Z"
                    fill="#777777"
                  />
                </g>
              </svg>
              Buy Now for 98% Bank Discount
            </div>
          </>
        </div>
      </div>

      <div className="mt-10 border-t pt-6">
        <div className="flex gap-6 border-b pb-3 text-gray-600 text-sm">
          <button className="text-teal-600  font-semibold text-[14px] leading-[21px] border-b-2 border-teal-600 text-center">
            Description
          </button>
          <button className="hover:text-gray-900 text-teal-600  font-semibold text-[14px] leading-[21px] text-center">
            Vendor&apos;s Info
          </button>
          <button className="hover:text-gray-900 text-teal-600  font-semibold text-[14px] leading-[21px] text-center">
            More Offers
          </button>
          <button className="hover:text-gray-900 text-teal-600  font-semibold text-[14px] leading-[21px] text-center">
            Store Policies
          </button>
          <button className="hover:text-gray-900 text-teal-600  font-semibold text-[14px] leading-[21px] text-center">
            Inquiries
          </button>
        </div>

        <div className="mt-6 text-sm text-gray-700">
          <p className="text-black text-justify text-[14.662px] font-normal leading-[21.993px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          <p className="mt-2">
            <a
              href="#"
              className="text-black font-poppins text-[14.662px] font-normal leading-[21.993px] underline decoration-solid decoration-black decoration-auto underline-offset-auto"
            >
              LEARN MORE
            </a>
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-[32px] font-poppins font-semibold text-[var(--dark, #031432)] text-left leading-normal mb-2">
          Similar Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <Image
                src={product}
                alt="Similar Product"
                width={210}
                height={210}
                className="rounded-[6.5px] flex-shrink-0 bg-cover bg-center bg-lightgray"
              />

              <h3 className="text-[#03314A] font-poppins text-[18.2px] font-bold leading-[23.4px] tracking-[0.364px] mt-4">
                Hospital Beds
              </h3>

              <p className="text-[#3A4548] font-poppins text-[15.6px] font-normal leading-[22.1px]">
                Delivery Date: 22nd Dec, 2024
              </p>

              <p className="text-sm text-gray-600">Time: 9AM-10PM</p>
              <button className="mt-4 px-[13px] py-[13px] inline-flex justify-center items-center gap-[13px] border-[0.65px] border-[#009A9F] bg-white text-[#009A9F] font-poppins text-[16.9px] font-medium leading-[23.4px] rounded-[18.2px] hover:bg-teal-100 w-full">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailVaccines;
