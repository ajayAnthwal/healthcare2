"use client";
import React from "react";
import Image from "next/image";
import Consultation from "@/assets/images/consultation/consultation.png";

const BookConsultation = () => {
  return (
    <div className=" flex items-center justify-center container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center gap-10 w-full p-8">
        {/* Illustration Section */}
        <div className="w-full md:w-1/2">
          <Image
            src={Consultation}
            alt="Doctors Illustration"
            priority
            width={702}
            height={410}
            className="max-w-full h-auto"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="text-[#F57E77]  text-sm font-normal"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter full name"
                  className="flex h-[52px] p-2 pl-4 items-start gap-2 w-full rounded-lg bg-[rgba(252,243,242,0.7)] text-[#5E6366] placeholder-[#5E6366] placeholder:text-base  placeholder:font-normal"
                />
              </div>

              {/* Phone Number Input */}
              <div className="flex-1">
                <label
                  htmlFor="phone"
                  className="text-[#F57E77]  text-sm font-normal"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="123 456 7890"
                  className="flex h-[52px] p-2 pl-4 items-start gap-2 w-full rounded-lg bg-[rgba(252,243,242,0.7)] text-[#5E6366] placeholder-[#5E6366] placeholder:text-base  placeholder:font-normal"
                />
              </div>
            </div>

            {/* Row 2: Email Address and Preferred Consultation Type */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Email Address Input */}
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="text-[#F57E77]  text-sm font-normal"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="apollo@healthcare.com"
                  className="flex h-[52px] p-2 pl-4 items-start gap-2 w-full rounded-lg bg-[rgba(252,243,242,0.7)] text-[#5E6366] placeholder-[#5E6366] placeholder:text-base  placeholder:font-normal"
                />

                <p  className="text-[#F57E77]  text-sm font-normal">(Optional)</p>
              </div>

              {/* Preferred Consultation Type */}
              <div className="flex-1">
                <label
                  htmlFor="consultation-type"
                  className="text-[#F57E77]  text-sm font-normal"
                >
                  Preferred Consultation Type
                </label>
                <select
                  id="consultation-type"
                  className="flex h-[52px] p-2 pl-4 items-start gap-2 w-full rounded-lg bg-[rgba(252,243,242,0.7)] text-[#5E6366]  font-normal"
                >
                  <option>Home visit</option>
                  <option>Online</option>
                  <option>Clinic</option>
                </select>
              </div>
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="text-[#F57E77]  text-sm font-normal"
              >
                Message 
              </label>
              <textarea
                id="message"
                placeholder="Message"
                className="flex h-[120px] p-2 pl-4 items-start gap-2 w-full rounded-lg bg-[#E6F5F5] text-[#5E6366] placeholder-[#5E6366] placeholder:text-base  placeholder:font-normal"
              />
                 <p  className="text-[#F57E77]  text-sm font-normal">(Optional)</p>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="flex items-center justify-center w-[144px] h-[50px] p-2 bg-[#009A9F] hover:bg-[#007B7E] text-white font-montserrat text-sm font-bold rounded-full shadow-md transition duration-300"
              >
                Book Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookConsultation;
