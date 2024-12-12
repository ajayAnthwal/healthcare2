"use client";
import { useState } from "react";
import nurseAtHome from "@/assets/images/homepage/nurseAtHome.png";
import longTermCare from "@/assets/images/homepage/longTermCare.png";
import rehab from "@/assets/images/homepage/rehab.png";
import motherBabyCare from "@/assets/images/homepage/motherBabyCare.png";
import elderCare from "@/assets/images/homepage/elderCare.png";
import icuSetup from "@/assets/images/homepage/icuSetup.png";
import doctorsNurses from "@/assets/images/homepage/doctorsNurses.png";
import medicalProcedures from "@/assets/images/homepage/medicalProcedures.png";
import vaccinationAtHome from "@/assets/images/homepage/vaccinationAtHome.png";
import diagnosticServices from "@/assets/images/homepage/diagnosticServices.png";
import { Card } from "../Card";

const ComprehensiveServices = () => {
  const services = [
    {
      title: "Nurse at Home",
      image: nurseAtHome,
    },
    {
      title: "Long Term Assisted Care",
      image: longTermCare,
    },
    {
      title: "Rehab Packages",
      image: rehab,
    },
    {
      title: "Mother & Baby Care",
      image: motherBabyCare,
    },
    {
      title: "Elder Care",
      image: elderCare,
    },
    {
      title: "ICU Setup at Home",
      image: icuSetup,
    },
    {
      title: "Doctors/ Nurses/ Physiotherapists Visits at Home",
      image: doctorsNurses,
    },
    {
      title: "Medical Procedures at Home",
      image: medicalProcedures,
    },
    {
      title: "Vaccinations at Home",
      image: vaccinationAtHome,
    },
    {
      title: "Diagnostic Services",
      image: diagnosticServices,
    },
    {
      title: "Buy or Rent Medical Equipment",
      image: vaccinationAtHome,
    },
    {
      title: "Ambulatory Blood Pressure Monitoring",
      image: diagnosticServices,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 6;

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev < Math.ceil(services.length / itemsPerSlide) - 1 ? prev + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev > 0 ? prev - 1 : Math.ceil(services.length / itemsPerSlide) - 1
    );
  };

  const getVisibleItems = () => {
    const start = currentSlide * itemsPerSlide;
    const end = start + itemsPerSlide;
    return services.slice(start, end);
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-5 container w-full ">
        <h1 className="text-[18px] font-bold md:text-[32px]  text-[#031432] leading-normal font-poppins">
          Our Comprehensive Services
        </h1>
        <p className="md:block hidden text-[#6C87AE] w-full lg:w-[60%] text-center text-base leading-6">
          Explore a range of healthcare services tailored to meet your needs. At
          Apollo Homecare, we provide <br /> flexible, high-quality support
          designed for every stage of life and wellness.
        </p>
      </div>

      {/* Mobile Slider View */}
      <div className="md:hidden overflow-hidden relative">
        <div className="grid grid-cols-3 gap-[10px]">
          {getVisibleItems().map((service, index) => (
            <div key={index} className="services_cards my-1">
              <Card title={service?.title} image={service?.image} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-2 px-4 -translate-y-1/2 my-4">
          <button
            onClick={handlePrev}
            className={` text-white rounded-full ${
              currentSlide == 0 ? " px-4 bg-[#009a9f]" : "px-1 bg-gray-400"
            } py-1`}
          ></button>
          <button
            onClick={handleNext}
            className={`text-white rounded-full py-1 ${
              currentSlide == 1 ? " px-4 bg-[#009a9f]" : "px-1 bg-gray-400"
            }`}
          ></button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid grid-cols-6 gap-5 mt-11 mb-11 font-poppins">
        {services.map((service, index) => (
          <div key={index}>
            <Card title={service.title} image={service.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComprehensiveServices;
