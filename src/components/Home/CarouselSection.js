import { useState } from "react";
import Image from "next/image";
import mediaCoverage from "@/assets/images/homepage/mediaCoverage.png";
import chevronLeft from "@/assets/images/homepage/chevron-left.svg";
import chevronRight from "@/assets/images/homepage/chevron-right.svg";
import testimonal1 from "@/assets/images/homepage/1.png";
import testimonal2 from "@/assets/images/homepage/2.png";
import testimonal3 from "@/assets/images/homepage/3.png";
import testimonal4 from "@/assets/images/homepage/4.png";

const CarouselSection = () => {
  const testimonials = [
    {
      id: 1,
      image: testimonal1,
      title:
        "Mint BFSI Summit | Bima Sugam: Unlocking the potential of digital insurance",
      description1: `Apollo HomeCare recognizes the impact of digital innovation on healthcare and insurance.`,
      description2: `Explore insights from the Mint BFSI Summit on Bima Sugam, where industry leaders discuss how digital platforms are transforming rural healthcare access and reshaping insurance for a brighter future.`,
    },
    {
      id: 2,
      image: testimonal2,
      title:
        "Hospitals stretched, home is where future of Indian healthcare could be",
      description1: `As hospitals face growing challenges, Apollo HomeCare leads the way in reimagining healthcare with home-based solutions.`,
      description2: `Discover how the future of healthcare in India is shifting towards convenient, personalized care delivered right to your doorstep.`,
    },
    {
      id: 3,
      image: testimonal3,
      title:
        "Healthcare sector in 2024 was efficient with digital technology, 2025 to provide patient-centric care",
      description1: `At Apollo HomeCare, we embrace the evolution of digital healthcare.`,
      description2: `Learn how innovations in 2024 set the stage for 2025’s patient-first approach, delivering care that’s more accessible, efficient, and centered on individual needs.`,
    },
    {
      id: 4,
      image: testimonal4,
      title:
        "From hospitals to homes: Redefining patient recovery in a new era of care",
      description1: `Apollo HomeCare is at the forefront of redefining recovery by bringing expert care from hospitals to homes.`,
      description2: `Explore how personalized home-based care solutions are transforming the patient recovery journey in today’s evolving healthcare landscape.`,
    },
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
      <p className="md:text-[16px] lg:text-[16px] text-[16px] font-normal md:leading-[24px]  text-center text-[#6C87AE] mt-4 w-full sm:w-3/4 md:w-full mx-auto leading-[24px] p-2">
        Stay updated with the latest news and media coverage about Apollo
        Homecare. Our commitment to providing quality care has made us a trusted
        name in the healthcare industry, and our recent achievements are gaining
        attention.
      </p>

      <div
        className="mt-10 flex flex-col px-2 h-[510px] sm:h-auto sm:flex-row gap-2 w-full mx-auto rounded-lg"
        style={{
          boxShadow: "0px 15px 35.8px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Image
          src={testimonials[currentIndex].image}
          alt="media coverage"
          width={300}
          height={200}
          className="w-full md:w-[30%] sm:w-[50%] rounded-tl-lg rounded-bl-lg"
        />
        <div className="md:m-5 m-[2px] min-h-[200px] flex flex-col gap-[5px]">
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
