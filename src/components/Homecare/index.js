import { Button, Heading } from "@medusajs/ui";
import whatsappSvg from "@/assets/images/homepage/whatsapp.svg";
import calendar from "@/assets/images/homepage/calendar.svg";

import Image from "next/image";

const Homecare = () => {
  return (
    <div className="bg-gradient-to-linear-gradient(118.43deg, #1AE2E9 -5.9%, #019196 42.54%, #03676A 90.98%); container mx-auto rounded-[40px] md:px-[71.119px] py-[5.342px]">
      <div className="mx-2 bg-gradient-to-linear-gradient(118.43deg, #1AE2E9 -5.9%, #019196 42.54%, #03676A 90.98%) overflow-x-hidden">
        {/* ---------------Homecare Section---------------- */}
        <div className="py-2 md:py-8 px-4 md:my-20 my-4 card rounded-[20px] text-white text-center bg-gradient-to-r from-[#1AE2E9] via-[#019196] to-[#03676A] shadow-lg ">
          <h1 className="w-full text-[20px] mx-auto md:text-[32px] font-semibold mb-1">
            Why is Homecare Important These Days?
          </h1>

          <p className="w-full mx-auto lg:text-[16px] text-[14px] md:text-[16px]  font-normal md:leading-[24px] text-center opacity-80 sm:w-[676px]">
            In today’s fast-paced world, the importance of receiving medical
            care at home has never been greater. Homecare offers a comfortable,
            safe, and personalized approach to healthcare, providing support for
            recovery, chronic conditions, and general wellness without the need
            for frequent hospital visits.
          </p>

          <div className="flex flex-wrap justify-center items-center mt-4 gap-4">
            <button className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white text-[#009A9F] shadow-lg flex items-center gap-2 hover:bg-[#009A9F] hover:text-white transition text-sm sm:text-base">
              <Image src={whatsappSvg} alt="whatsapp" />
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homecare;
