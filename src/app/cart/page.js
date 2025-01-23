"use client";
import React from "react";
import { UserCircle2, PenLine, Trash2, X } from "lucide-react";
import Image from "next/image";
import Snehal from "@/assets/images/profile/Snehal.png";
import neha from "@/assets/images/profile/neha.png";
import rahul from "@/assets/images/profile/rahul.png";
import Swastik from "@/assets/images/profile/Swastik.png";
import product from "@/assets/images/checkout/product.png";
import Link from "next/link";

function Cart() {
  const users = [
    { name: "Rahul (self)", image: Snehal },
    { name: "Neha", image: neha },
    { name: "Swastik", image: rahul },
    { name: "Sneha", image: Swastik },
  ];

  return (
    <section>
      <div className="bg-white">
        <div className="flex flex-col lg:flex-row justify-between container mx-auto py-10 px-4 gap-8">
          <div className="flex flex-col space-y-6 lg:w-[988px]">
            <div className="bg-white p-6 rounded-[20px] shadow-sm">
              <h2 className="text-[#333] text-xl font-semibold mb-4">
                Item Detail
              </h2>

              <h3 className="text-sm text-gray-600 mb-4">Services</h3>
              {[1, 2].map((_, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 mb-6 border-b border-gray-100 pb-6 last:border-b-0"
                >
                  <div className="relative w-24 h-24">
                    <Image
                      src={product}
                      alt="Trained Nurse"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="text-[#333] font-semibold">
                          Trained Nurse at Home
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Description: Detail
                        </p>
                      </div>
                      <Trash2
                        className="text-gray-400 hover:text-red-600 cursor-pointer"
                        size={20}
                      />
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-semibold text-[#333]">
                        ₹20,00,000
                      </span>
                      <div className="flex items-center space-x-4">
                        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200">
                          -
                        </button>
                        <span>1</span>
                        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <h3 className="text-sm text-gray-600 mb-4">Subscriptions</h3>
              {[1].map((_, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 mb-6 border-b border-gray-100 pb-6 last:border-b-0"
                >
                  <div className="relative w-24 h-24">
                    <Image
                      src={product}
                      alt="Trained Nurse"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="text-[#333] font-semibold">
                          Trained Nurse at Home
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          Description: Detail
                        </p>
                      </div>
                      <Trash2
                        className="text-gray-400 hover:text-red-600 cursor-pointer"
                        size={20}
                      />
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-semibold text-[#333]">
                        ₹20,00,000
                      </span>
                      <div className="flex items-center space-x-4">
                        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200">
                          -
                        </button>
                        <span>1</span>
                        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-[320px] hidden lg:block">
            <div className="bg-white rounded-[20px] shadow-sm p-6">
              <h2 className="text-[#333] text-xl font-semibold mb-6">
                Order Summary
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹20,00,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount (-20%)</span>
                  <span className="text-red-500">₹20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-semibold">₹20,00,000</span>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total</span>
                    <span className="text-[#009A9F] font-semibold">
                      ₹20,00,000
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center bg-gray-100 rounded-lg">
                  <div className="flex-1 flex items-center px-3 py-2">
                    <span className="text-gray-400 mr-2">🏷️</span>
                    <input
                      type="text"
                      placeholder="Add promo code"
                      className="bg-transparent w-full outline-none text-sm text-gray-600 placeholder-gray-400"
                    />
                  </div>
                  <button className="bg-[#009A9F] text-white px-4 py-2 rounded-r-lg text-sm font-medium hover:bg-[#008488] transition-colors">
                    Apply
                  </button>
                </div>
              </div>
              <Link href="/payment">
                <button className="w-full bg-[#009A9F] text-white py-3 px-6 rounded-full mt-6 font-medium hover:bg-[#008488] transition-colors flex items-center justify-center">
                  Go to Checkout
                  <span className="ml-2">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
