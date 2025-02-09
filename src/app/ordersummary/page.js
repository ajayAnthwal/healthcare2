"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Trash2, PenLine, UserCircle2 } from "lucide-react";
import Snehal from "@/assets/images/profile/Snehal.png";
import neha from "@/assets/images/profile/neha.png";
import rahul from "@/assets/images/profile/rahul.png";
import Swastik from "@/assets/images/profile/Swastik.png";
import product from "@/assets/images/checkout/product.png";

const OrderSummary = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const users = [
    { name: "Rahul (self)", image: Snehal },
    { name: "Neha", image: neha },
    { name: "Swastik", image: rahul },
  ];

  const handlePayNow = () => {
    setShowSuccessModal(true);
    setShowPaymentModal(false);
  };

  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row justify-between container mx-auto py-10 px-4 gap-8">
        <div className="flex flex-col space-y-6 lg:w-[988px]">
          <div className="bg-white p-6 rounded-[20px] shadow-sm">
            <h2 className="text-[#333] text-xl font-semibold mb-4">
              Itemized Summary
            </h2>
            <h3 className="text-sm text-gray-600 mb-4">Services</h3>
            <div className="max-h-[400px] overflow-y-auto space-y-6 pr-2 custom-scrollbar">
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 pb-6 border-b border-gray-100 last:border-b-0"
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
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-semibold text-[#333]">
                        ₹20,00,000
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-auto">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white rounded-[12px] shadow p-6">
              <h2 className="text-[#333] text-lg font-semibold mb-4">
                Current order details
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Order ID</span>
                  <span className="font-medium text-black">12371948</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date of Order</span>
                  <span className="font-medium">DD-MM-YYYY</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Payment Status</span>
                  <span className="font-medium text-black">Paid</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Payment Method</span>
                  <span className="font-medium">CC/DC/COD</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span className="text-gray-500">Total Amount</span>
                  <span className="text-[#009A9F] font-semibold text-base">
                    ₹20,00,000
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[12px] shadow p-6">
              <h2 className="text-[#333] text-lg font-semibold mb-3">
                Address
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <p className="font-medium text-black">Billing Address</p>
                  <p className="text-gray-500 text-right">
                    [Customer Name] [Street Address] <br />
                    [City, State, ZIP] [Country]
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-medium text-black">
                    Apollo Order Location
                  </p>
                  <p className="text-gray-500 text-right">
                    [Customer Name] [Street Address] <br />
                    [City, State, ZIP] [Country]
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[12px] shadow p-6">
              <h2 className="text-[#333] text-lg font-semibold mb-3">
                Need Help?
              </h2>
              <p className="text-gray-600 text-sm">
                For any queries regarding your order, feel free to contact us:
              </p>
              <p className="text-gray-600 text-sm mt-2">
                📍 Customer Support: [Apollo Contact Number]
              </p>
              <p className="text-gray-600 text-sm">
                📧 Email: support@apollo.com
              </p>
              <p className="text-[#009A9F] font-medium text-sm mt-4">
                Back to Home | View More Products
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Thank you for choosing Apollo Healthcare. Wishing you a speedy
                recovery! 💙
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 max-w-3xl mx-auto">
        <h2 className="text-[28px] font-semibold text-black text-center mb-6 font-[Poppins]">
          Address
        </h2>
        <div className="flex flex-col items-start gap-5 p-6 rounded-[20px] border border-[#C0C0C0] bg-white shadow-md">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {[
              { label: "First Name", name: "first_name", required: true },
              { label: "Last Name", name: "last_name", required: true },
              { label: "Mobile Number", name: "phone", required: true },
              { label: "City", name: "city", required: true },
              { label: "Address 1", name: "address_1", required: true },
              { label: "Address 2", name: "address_2", required: false },
              { label: "Pin Code", name: "postal_code", required: true },
              { label: "State", name: "province", required: true },
            ].map((field, index) => (
              <div key={index} className="w-full">
                <label className="text-black  text-[15px] font-medium">
                  {field.label}
                </label>
                <input
                  type="text"
                  name={field.name}
                  required={field.required}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  className="w-full p-[12px] px-[10px] rounded-[10px] border border-[#757575] text-black placeholder:text-[#757575] placeholder:text-[15px] placeholder:font-light focus:ring-2 focus:ring-teal-500 outline-none transition"
                />
              </div>
            ))}
            <div className="w-full md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="w-full md:w-auto bg-[#009A9F] text-white px-7 py-3 rounded-[10px] font-semibold shadow-lg shadow-blue-300 hover:bg-[#008488] transition text-[18px] font-[Poppins]"
              >
                Submit Address
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
