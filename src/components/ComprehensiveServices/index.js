"use client";
import { useState, useEffect, useRef } from "react";
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

// services
import service1 from "@/assets/images/homepage/servicesfrist.png";
import service2 from "@/assets/images/homepage/servicessecoond.png";
import service3 from "@/assets/images/homepage/servicesthird.png";
import service4 from "@/assets/images/homepage/servicesfour.png";
import service5 from "@/assets/images/homepage/servicesfive.png";
import service6 from "@/assets/images/homepage/servicessix.png";
import service7 from "@/assets/images/homepage/servicesseven.png";
import service8 from "@/assets/images/homepage/serviceseight.png";
import service9 from "@/assets/images/homepage/servicesnine.png";
import service10 from "@/assets/images/homepage/10.png";

import service11 from "@/assets/images/homepage/11.png";
import service12 from "@/assets/images/homepage/12.png";
import service13 from "@/assets/images/homepage/13.png";
import service14 from "@/assets/images/homepage/14.png";
import service15 from "@/assets/images/homepage/15.png";
import service16 from "@/assets/images/homepage/16.png";
import service17 from "@/assets/images/homepage/17.png";
import service18 from "@/assets/images/homepage/18.png";
import service19 from "@/assets/images/homepage/19.png";
import service20 from "@/assets/images/homepage/20.png";

import { Card } from "../Card";

const ComprehensiveServices = () => {
  const services = [
    {
      title: "ICU Setup at Home",
      image: service1,
    },
    {
      title: "Specialised Nurse at home",
      image: service2,
    },
    {
      title: "Trained Attendant at home",
      image: service3,
    },
    {
      title: "Mother & Child Care",
      image: service4,
    },
    {
      title: "Senior Care Subscription",
      image: service5,
    },
    {
      title: "Doctor Home Consult",
      image: service6,
    },
    {
      title: "Physiotherapy at home",
      image: service7,
    },
    {
      title: "Nurse Procedures",
      image: service8,
    },
    {
      title: "Medical Procedures",
      image: service9,
    },
    {
      title: "Adult Vaccination",
      image: service10,
    },

    {
      title: "Trained Attendant at home",
      image: service11,
    },
    {
      title: "Mother & Child Care",
      image: service12,
    },
    {
      title: "Senior Care Subscription",
      image: service13,
    },
    {
      title: "Travel Nurses",
      image: service14,
    },
    {
      title: "Specialty Rehab Packages",
      image: service15,
    },
    {
      title: "Nurse Procedures",
      image: service16,
    },
    {
      title: "Medical Procedures",
      image: service17,
    },
    {
      title: "Adult Vaccination",
      image: service18,
    },
    {
      title: "Prescribed Medicine Delivery",
      image: service19,
    },
    {
      title: "Home Diagnostics",
      image: service20,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("next");
  const itemsPerSlide = 6;
  const itemsPerRow = 5; // Number of items per row
  const rowsPerSlide = 2; // Number of rows per slide
  const totalItemsPerSlide = itemsPerRow * rowsPerSlide; // Total items per slide
  const totalSlides = Math.ceil(services.length / totalItemsPerSlide); // Total slides
  const intervalRef = useRef(null);

  // Get visible services for the current slide
  const getServicesForSlide = () => {
    const startIndex = currentSlide * totalItemsPerSlide;
    const endIndex = startIndex + totalItemsPerSlide;
    return services.slice(startIndex, endIndex);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) =>
      prev < totalSlides - 1 ? prev + 1 : totalSlides - 1
    );
  };

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

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (direction === "next") {
        goToNextSlide();
        setDirection("previous");
      } else {
        goToPreviousSlide();
        setDirection("next");
      }
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [direction]);

  return (
    <div>
      <div className="flex flex-col items-center mt-5 container w-full ">
        <h1 className="text-[18px] mb-[20px] font-bold md:text-[32px]  text-[#031432] leading-normal font-poppins">
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

      <div className="overflow-hidden relative mt-11 mb-11 font-poppins px-3  md:block hidden">
        {/* Grid Container */}
        <div className="grid grid-rows-2 grid-cols-5 gap-5">
          {getServicesForSlide().map((service, index) => (
            <div key={index} className="services_cards my-1">
              <Card title={service?.title} image={service?.image} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-2 px-4 -translate-y-1/2 my-4">
          <button
            onClick={goToPreviousSlide}
            className={`text-white rounded-full ${
              currentSlide === 0 ? "px-4 bg-[#009a9f]" : "px-1 bg-gray-400"
            } py-1`}
          ></button>
          <button
            onClick={goToNextSlide}
            className={`text-white rounded-full py-1 ${
              currentSlide === totalSlides - 1
                ? "px-4 bg-[#009a9f]"
                : "px-1 bg-gray-400"
            }`}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServices;
