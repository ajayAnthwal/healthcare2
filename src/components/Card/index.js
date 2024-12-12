import Image from "next/image";
import whatsappSvg from "@/assets/images/homepage/whatsapp.svg";

export const Card = (props) => {
  return (
    <div
      className="bg-white flex items-center justify-between p-3 w-full flex-col rounded-[20px] h-[250px] md:h-[300px] relative "
      style={{
        boxShadow: "0px 4px 18.3px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="">
        <p className="text-[12px] md:text-[20px] font-medium text-[#000000] pt-3 text-center">
          {props?.title}
        </p>
      </div>
      <div className="max-w-[80px] md:max-w-[110px]">
        <Image
          src={props?.image}
          alt={props?.title}
          className=" rounded-full"
        />
      </div>
      <div className="flex justify-center">
        <button className="flex items-center gap-2 text-base font-semibold bg-white text-[#009A9F] border-[#009A9F] rounded-full px-4 py-4 m-auto border absolute bottom-3 h-[23px] text-[11px] md:text-sm md:h-[40px] md:px-6 md:py-3 md:gap-3">
          <Image
            src={whatsappSvg}
            alt="whatsapp"
            className="h-[8px] w-[8px] md:h-[15px] md:w-[15px]"
          />
          <span className="hidden md:inline">Enquire Now</span>
          <span className="inline md:hidden">Enquire</span>
        </button>
      </div>
    </div>
  );
};
