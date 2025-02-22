import React from "react";
import Image from "next/image";
import meal from "@/assets/images/book/meals.png";
import h from "@/assets/images/book/h.png";
import Shingles from "@/assets/images/book/Shingles.png";

const services = [
  {
    title: "Measles Vaccine",
    imageSrc: meal,
    description: "₹500",
  },
  {
    title: "H1 N1",
    imageSrc: h,
    description: "₹700",
  },
  {
    title: "Shingles Vaccine",
    imageSrc: Shingles,
    description: "₹1,500",
  },
];

export default function Vaccines() {
  return (
    <div className="container mx-auto mt-16 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border-r border-black pr-4 flex flex-col items-center text-center gap-4"
          >
            <div className="rounded-[20px] overflow-hidden">
              <Image
                src={service.imageSrc}
                alt={service.title}
                width={286}
                height={194}
                className="rounded-[20px]"
              />
            </div>
            <h3 className="text-[#000] text-center text-[20px] font-semibold leading-[24px] font-poppins">
              {service.title}
            </h3>

            <p className="text-[#000] text-center text-[18px] font-normal leading-[21.6px] font-poppins">
              {service.description}
            </p>
            {index === 0 ? (
              <div className="flex gap-2">
                <button className="flex flex-col items-center gap-2 px-[20px] py-[10px] rounded-full bg-[#009A9F] text-white text-center font-montserrat text-[14px] font-bold leading-[24px] tracking-[0.2px]">
                  Add to Cart
                </button>

                <div className="flex w-[40px] h-[40px] justify-center items-center rounded-full border border-[#E8E8E8] bg-[#FFF]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                  >
                    <path
                      d="M10.5011 5.95324L9.13675 4.55662L9.13618 4.55605C8.78829 4.20177 8.37329 3.92037 7.91542 3.72827C7.45755 3.53617 6.966 3.43723 6.46946 3.43723C5.97293 3.43723 5.48138 3.53617 5.02351 3.72827C4.56569 3.92035 4.15072 4.20172 3.80284 4.55595C3.08889 5.28087 2.68871 6.25752 2.68871 7.275C2.68871 8.29259 3.08898 9.26935 3.80308 9.9943L3.80337 9.99459L10.2784 16.5508L10.5007 16.776L10.7231 16.5508L17.1981 9.99459L17.1983 9.9943C17.9124 9.26935 18.3127 8.29259 18.3127 7.275C18.3127 6.25753 17.9125 5.28088 17.1986 4.55595C16.8509 4.20148 16.4359 3.91997 15.9781 3.72791C15.5203 3.53591 15.0288 3.43718 14.5324 3.4375C14.5322 3.4375 14.5319 3.4375 14.5317 3.4375L14.532 3.75M10.5011 5.95324L11.8581 4.56949L11.8588 4.5687L12.082 4.7875M10.5011 5.95324L11.8572 4.57036M10.5011 5.95324L11.8572 4.57036M10.5011 5.95324L11.8572 4.57036M14.532 3.75C14.0748 3.74935 13.6222 3.84089 13.2013 4.01915C12.7803 4.19741 12.3996 4.45874 12.082 4.7875M14.532 3.75C14.987 3.74962 15.4376 3.84008 15.8572 4.01609C16.2768 4.1921 16.6571 4.45011 16.9757 4.775L14.532 3.75ZM12.082 4.7875L11.8572 4.57036M12.082 4.7875L11.8572 4.57036M14.5319 2.8125L14.5317 2.8125C13.9518 2.81201 13.3777 2.9273 12.8429 3.15161C12.3082 3.37593 11.8236 3.70475 11.4176 4.11879L11.4164 4.11998L10.7227 4.81998L10.5007 5.04394L10.2788 4.81998L9.585 4.11998L9.58416 4.11913C9.17759 3.70575 8.6928 3.37744 8.15805 3.15333C7.62329 2.92923 7.04928 2.81381 6.46946 2.81381C5.88965 2.81381 5.31563 2.92923 4.78088 3.15333C4.24614 3.37744 3.76136 3.70574 3.35479 4.1191L14.5319 2.8125ZM14.5319 2.8125C15.1118 2.81266 15.6858 2.92827 16.2206 3.15259C16.7554 3.37691 17.2401 3.70544 17.6466 4.11904C18.4755 4.96287 18.9399 6.09841 18.9399 7.28125C18.9399 8.46391 18.4756 9.59929 17.647 10.4431C17.6468 10.4432 17.6467 10.4434 17.6465 10.4435L10.5007 17.6802M14.5319 2.8125L10.5007 17.6802M10.5007 17.6802L3.3549 10.4435C3.35479 10.4434 3.35468 10.4433 3.35458 10.4432C2.52585 9.59939 2.06152 8.46396 2.06152 7.28125C2.06152 6.09846 2.52592 4.96295 3.35476 4.11913L10.5007 17.6802Z"
                      fill="#BDBDBD"
                      stroke="#252B42"
                      strokeWidth="0.625"
                    />
                  </svg>
                </div>
              </div>
            ) : (
              <button className="text-[#009A9F] py-2 px-4 border border-[#1AE2E9] rounded-full flex items-center justify-center gap-2 align-self-stretch shadow-[0px_8px_23px_0px_rgba(65,132,247,0.24)] font-poppins font-semibold text-[16px]">
                Book Now
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
