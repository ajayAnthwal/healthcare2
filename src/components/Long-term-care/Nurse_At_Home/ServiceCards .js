import React from "react";
import Image from "next/image";
import FooterCTA from "../FooterCTA";
import heart from "@/assets/images/longterm/017-heart.png";
import syringe from "@/assets/images/longterm/005-syringe.png";
import neurology from "@/assets/images/longterm/neurology.png";

const cardData = [
  {
    id: 1,
    title: "Wound Dressing",
    description:
      "Professional care for faster healing and infection prevention.",
    buttonText: "Enquire Now",
    icon: heart,
  },
  {
    id: 2,
    title: "Enema @ Home",
    description:
      "Safe and hygienic enema services in the comfort of your home.",
    buttonText: "Enquire Now",
    icon: syringe,
  },
  {
    id: 3,
    title: "IV Infusion",
    description:
      "Skilled nurses to administer IV fluids and medications at home.",
    buttonText: "Enquire Now",
    icon: neurology,
  },
];

const ServiceCards = () => {
  return (
    <div className="mt-14">
      <h1 className="text-center text-[32px] font-semibold leading-[48px] text-[#031432] mb-4">
        Nursing Service
      </h1>

      <p className="w-full sm:w-3/4 md:w-1/2 mt-4 text-center text-[#6C87AE] text-[16px] font-normal mx-auto leading-[24px]">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 container mx-auto">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-[24px] shadow-lg p-8 flex flex-col items-center justify-between"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#eaf7f0]">
              <Image src={card.icon} alt={card.title} width={39} height={16} />
            </div>
            <h3 className="text-[24px] font-medium leading-[30px] text-left mt-6">
              {card.title}
            </h3>
            <p className="text-[14px] font-normal leading-[21px] text-gray-600 text-left mt-2">
              {card.description}
            </p>
            <button className="bg-gradient-to-r from-[#1AE2E9] via-[#019196] to-[#03676A] text-white px-7 py-3 rounded-full shadow-lg mt-6 hover:shadow-xl transition duration-300 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                className="mr-2"
              >
                <path
                  d="M6.9 21.1C8.4 22 10.2 22.5 12 22.5C17.5 22.5 22 18 22 12.5C22 7 17.5 2.5 12 2.5C6.5 2.5 2 7 2 12.5C2 14.3 2.5 16 3.3 17.5L2.44044 20.806C2.24572 21.5549 2.93892 22.2317 3.68299 22.0191L6.9 21.1Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 15.3485C16.5 15.5105 16.4639 15.677 16.3873 15.839C16.3107 16.001 16.2116 16.154 16.0809 16.298C15.86 16.541 15.6167 16.7165 15.3418 16.829C15.0714 16.9415 14.7784 17 14.4629 17C14.0033 17 13.512 16.892 12.9937 16.6715C12.4755 16.451 11.9572 16.154 11.4434 15.7805C10.9251 15.4025 10.4339 14.984 9.9652 14.5205C9.501 14.0525 9.08187 13.562 8.70781 13.049C8.33826 12.536 8.04081 12.023 7.82449 11.5145C7.60816 11.0015 7.5 10.511 7.5 10.043C7.5 9.737 7.55408 9.4445 7.66224 9.1745C7.77041 8.9 7.94166 8.648 8.18052 8.423C8.46895 8.1395 8.78443 8 9.11793 8C9.24412 8 9.37031 8.027 9.48297 8.081C9.60015 8.135 9.70381 8.216 9.78493 8.333L10.8305 9.8045C10.9116 9.917 10.9702 10.0205 11.0108 10.1195C11.0513 10.214 11.0739 10.3085 11.0739 10.394C11.0739 10.502 11.0423 10.61 10.9792 10.7135C10.9206 10.817 10.835 10.925 10.7268 11.033L10.3843 11.3885C10.3348 11.438 10.3122 11.4965 10.3122 11.5685C10.3122 11.6045 10.3167 11.636 10.3257 11.672C10.3393 11.708 10.3528 11.735 10.3618 11.762C10.4429 11.9105 10.5826 12.104 10.7809 12.338C10.9837 12.572 11.2 12.8105 11.4344 13.049C11.6778 13.2875 11.9121 13.508 12.151 13.7105C12.3853 13.9085 12.5791 14.0435 12.7323 14.1245C12.7549 14.1335 12.7819 14.147 12.8135 14.1605C12.8495 14.174 12.8856 14.1785 12.9261 14.1785C13.0028 14.1785 13.0613 14.1515 13.1109 14.102L13.4534 13.7645C13.5661 13.652 13.6743 13.5665 13.7779 13.5125C13.8816 13.4495 13.9852 13.418 14.0979 13.418C14.1835 13.418 14.2737 13.436 14.3728 13.4765C14.472 13.517 14.5756 13.5755 14.6883 13.652L16.18 14.7095C16.2972 14.7905 16.3783 14.885 16.4279 14.9975C16.473 15.11 16.5 15.2225 16.5 15.3485Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
              </svg>
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
