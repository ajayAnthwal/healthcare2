import React from "react";
import Image from "next/image";
import Snehal from "@/assets/images/profile/Snehal.png";
import neha from "@/assets/images/profile/neha.png";
import rahul from "@/assets/images/profile/rahul.png";
import Swastik from "@/assets/images/profile/Swastik.png";

const familyMembers = [
  { name: "Rahul (self)", imgSrc: rahul },
  { name: "Neha", imgSrc: neha },
  { name: "Swastik", imgSrc: Swastik },
  { name: "Snehal", imgSrc: Snehal },
];

const FamilyMembers = () => {
  return (
    <div className="p-4 mx-auto">
      <h2 className="text-[20px] font-semibold leading-[24px] text-[#000] text-center md:text-left flex mb-4">
        Family Members
      </h2>

      {/* Container for responsive layout */}
      <div className="md:grid md:grid-cols-2 md:gap-6 mb-6 mt-10 flex md:flex-wrap overflow-x-auto md:overflow-visible gap-4 items-center">
        {/* Family Members */}
        {familyMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 text-center min-w-[64px] md:min-w-0"
          >
            <div
              className="w-[42px] h-[42px] md:w-[85px] md:h-[85px] rounded-full bg-gradient-to-r from-[#BDFEFF] to-[#5FA4A7] p-[2px]"
              style={{
                borderImageSource:
                  "linear-gradient(118.43deg, #1AE2E9 -5.9%, #019196 42.54%, #03676A 90.98%)",
                borderImageSlice: 1,
              }}
            >
              <Image
                src={member.imgSrc}
                alt={member.name}
                width={42}
                height={42}
                className="rounded-full md:w-[81px] md:h-[81px]"
              />
            </div>
            <span className="text-[12px] md:text-[14px] font-medium leading-[16.8px] text-gray-700 text-center">
              {member.name}
            </span>
          </div>
        ))}

        {/* Add More Button */}
        <button className="flex flex-col items-center justify-center min-w-[100px] md:min-w-0">
          <div className="w-[42px] h-[42px] md:w-[81px] md:h-[81px] rounded-full bg-[#004548] flex items-center justify-center">
            <span className="text-white text-[24px] md:text-[40px] font-bold -mt-1 md:-mt-2">
              +
            </span>
          </div>
          <span className="text-center text-[12px] md:text-[14px] font-medium leading-[16.8px] bg-gradient-to-r from-[#1AE2E9] to-[#019196] bg-clip-text text-transparent mt-2">
            Add more
          </span>
        </button>
      </div>
    </div>
  );
};

export default FamilyMembers;
