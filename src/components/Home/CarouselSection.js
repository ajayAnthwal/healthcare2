import { useState } from "react";
import Image from "next/image";
import mediaCoverage from "@/assets/images/homepage/mediaCoverage.png";
import chevronLeft from "@/assets/images/homepage/chevron-left.svg";
import chevronRight from "@/assets/images/homepage/chevron-right.svg";

const CarouselSection = () => {
  const testimonials = [
    {
      id: 1,
      image: mediaCoverage,
      title: "Recent Media Coverage",
      description1: `Apollo Homecare’s New Homecare Initiative Gains
      Recognition in Healthcare Magazine`,
      description2: `Apollo Homecare Featured in National News for Pioneering
      Virtual Health Services`,
    },
    {
      id: 2,
      image: mediaCoverage,
      title: "Another Media Highlight",
      description1: `Apollo Homecare’s Digital Expansion Featured in Tech Journal`,
      description2: `Awarded for Excellence in Patient Care by Healthcare Review`,
    },
    // Add more items as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col md:mt-20 mt-6 items-center px-4 container mx-auto">
      <h1 className="md:text-[32px] lg:text-[32px] font-bold md:leading-[48px] leading-[10px] text-center text-[#031432] text-[26px] ">
        In the news
      </h1>
      <p className="md:text-[16px] lg:text-[16px] text-[16px] font-normal md:leading-[24px] leading-4 text-center text-[#6C87AE] mt-4 w-full sm:w-3/4 md:w-1/2 mx-auto leading-[24px]">
        Stay updated with the latest news and media coverage about Apollo
        Homecare. Our commitment to providing quality care has made us a trusted
        name in the healthcare industry, and our recent achievements are gaining
        attention.
      </p>

      {/* Carousel */}
      <div
        className="mt-10 flex gap-2 w-full mx-auto rounded-lg"
        style={{
          boxShadow: "0px 15px 35.8px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Image
          src={testimonials[currentIndex].image}
          alt="media coverage"
          width={300}
          height={200}
          className="w-[30%] rounded-tl-lg rounded-bl-lg"
        />
        <div className="md:m-5 m-[2px]">
          <h1 className="text-[20px] md:text-3xl md:mt-0 mt-[5px] font-bold">
            {testimonials[currentIndex].title}
          </h1>
          <p className="md:mt-4 text-gray-600 md:text-[12px] text-[14px] md:text-md my-1">
            &quot;{testimonials[currentIndex].description1}&quot;
          </p>
          <p className="md:text-[14px] text-[12px] text-gray-600 text-md my-1">
            &quot;{testimonials[currentIndex].description2}&quot;
          </p>
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="flex justify-center items-center mt-10">
        <Image
          onClick={prev}
          src={chevronLeft}
          alt="prev"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 m-3 rounded-full ${
              currentIndex === index ? "bg-[#009A9F]" : "bg-[#C7C7C7]"
            }`}
          ></div>
        ))}
        <Image
          onClick={next}
         src={chevronRight}
          alt="next"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CarouselSection;
