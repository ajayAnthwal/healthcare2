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
            <button
              className="bg-gradient-to-r from-[#1AE2E9] via-[#019196] to-[#03676A] text-white px-7 py-3 rounded-full shadow-lg mt-6 
                        hover:shadow-xl transition duration-300"
            >
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <FooterCTA />
      </div>
    </div>
  );
};

export default ServiceCards;
