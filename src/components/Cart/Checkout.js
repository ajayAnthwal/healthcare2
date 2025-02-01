"use client";
import React, { useState } from "react";
import { UserCircle2, PenLine, Trash2, X } from "lucide-react";
import Image from "next/image";
import Snehal from "@/assets/images/profile/Snehal.png";
import neha from "@/assets/images/profile/neha.png";
import rahul from "@/assets/images/profile/rahul.png";
import Swastik from "@/assets/images/profile/Swastik.png";
import product from "@/assets/images/checkout/product.png";
import card from "@/assets/images/checkout/card.png";

function Checkout() {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const users = [
    { name: "Rahul (self)", image: Snehal },
    { name: "Neha", image: neha },
    { name: "Swastik", image: rahul },
    { name: "Sneha", image: Swastik },
  ];

  const handlePayNow = () => {
    setShowSuccessModal(true);
    setShowPaymentModal(false);
  };

  return (
    <section>
      <div className=" bg-white">
        <div className="flex flex-col lg:flex-row justify-between container mx-auto py-10 px-4 gap-8">
          <div className="flex flex-col space-y-6 lg:w-[988px]">
            <div className="bg-white p-6 rounded-[20px] shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-[#333] text-xl font-semibold">
                  User Information
                </h2>
                <button className="text-[#009A9F] text-sm font-medium">
                  Add Profile
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Select to whom you want to send your order or to whom you are
                buying subscriptions.
              </p>
              <div className="flex items-center space-x-8 mt-6">
                {users.map((user, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`relative w-[72px] h-[72px] rounded-full overflow-hidden ${
                        user.name === "Neha" ? "bg-[#009A9F]" : ""
                      }`}
                    >
                      {user.name === "No Info" ? (
                        <UserCircle2 className="w-10 h-10 text-white" />
                      ) : (
                        <Image
                          src={user.image}
                          alt={user.name}
                          layout="fill"
                          objectFit="cover"
                          className="w-full h-full"
                        />
                      )}
                    </div>
                    <span className="text-sm text-gray-700 mt-2">
                      {user.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-[20px] shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-[#333] text-xl font-semibold">Address</h2>
                <button className="text-[#009A9F] text-sm font-medium">
                  Add Address
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Select where you want to send your purchased item (note:
                exceptions can be there.)
              </p>
              <div className="mt-6">
                <div className="border border-gray-200 p-4 rounded-lg flex items-start justify-between">
                  <div>
                    <h3 className="text-[#333] font-semibold">Elon Musk</h3>
                    <p className="text-sm text-gray-600 mt-2 max-w-[600px]">
                      123, main city, State, Country or state pin code. Note:
                      Address can get too long so manage that and add some
                      tooltip above that.
                    </p>
                  </div>
                  <div className="flex space-x-4">
                    <button className="text-gray-500 hover:text-teal-600">
                      <PenLine size={20} />
                    </button>
                    <button className="text-gray-500 hover:text-red-600">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

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
            </div>
          </div>

          <div className="lg:w-[320px] hidden lg:block">
            <div className="sticky top-24">
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

                <button
                  onClick={() => setShowPaymentModal(true)}
                  className="w-full bg-[#009A9F] text-white py-3 px-6 rounded-full mt-6 font-medium hover:bg-[#008488] transition-colors flex items-center justify-center"
                >
                  Go to Payment
                  <span className="ml-2">→</span>
                </button>
              </div>
              <div className="mt-6 bg-white rounded-[20px] shadow-sm p-6">
                <h2 className="text-[#333] text-xl font-semibold mb-4">
                  Deliver Info
                </h2>
                <p className="text-gray-600">
                  Your Item will get to you by{" "}
                  <span className="font-semibold">7th Jan, 25</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[20px] p-6 w-[400px] relative">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
            <h2 className="text-xl font-semibold mb-6">Payment</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between border rounded-lg p-3">
                <span>Credit Card</span>
                <Image src={card} alt="Mastercard" width={32} height={20} />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border rounded-lg p-3 pr-10"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  🔒
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Expiration Date"
                  className="border rounded-lg p-3"
                />
                <input
                  type="text"
                  placeholder="Security Code"
                  className="border rounded-lg p-3"
                />
              </div>
              <input
                type="text"
                placeholder="Card Holder Name"
                className="w-full border rounded-lg p-3"
              />
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="save" className="rounded" />
                <label htmlFor="save" className="text-sm text-gray-600">
                  Save this info for future
                </label>
              </div>
              <button
                onClick={handlePayNow}
                className="w-full bg-[#009A9F] text-white py-3 rounded-lg font-medium hover:bg-[#008488] transition-colors"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[20px] w-[400px] overflow-hidden">
            <div className="bg-[#008B8F] text-white p-6 relative">
              <div className="absolute top-0 left-0 right-0  bg-[#008B8F]">
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-white rounded-t-[100%]"></div>
              </div>
              <h2 className="text-[36px] font-semibold text-center mb-2 relative z-10">
                Success Page
              </h2>
              <div className="text-center relative z-10">
                <p>Date of Order: 7th Jan, 2025</p>
                <p>Order ID: 14891471</p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold mb-4">Item Detail</h3>
              <div className="text-sm text-gray-600">Services</div>

              {[1, 2].map((_, index) => (
                <div key={index} className="flex items-start space-x-4 mt-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={product}
                      alt="Trained Nurse"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Trained Nurse at Home</h4>
                    <p className="text-sm text-gray-500">Description: Detail</p>
                  </div>
                </div>
              ))}

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-[#009A9F] text-white py-3 rounded-lg font-medium hover:bg-[#008488] transition-colors mt-6"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Checkout;
