"use client";
import Image from "next/image";
import service1 from "@/assets/images/homepage/service1.png";
import service2 from "@/assets/images/homepage/service2.png";
import service3 from "@/assets/images/homepage/service3.png";
import service4 from "@/assets/images/homepage/service4.png";
import service5 from "@/assets/images/homepage/service5.png";
import service6 from "@/assets/images/homepage/service6.png";
import service7 from "@/assets/images/homepage/service7.png";
import service8 from "@/assets/images/homepage/service8.png";
import service9 from "@/assets/images/homepage/service9.png";
import service10 from "@/assets/images/homepage/service10.png";
import service11 from "@/assets/images/homepage/service11.png";
import service12 from "@/assets/images/homepage/service12.png";
import service13 from "@/assets/images/homepage/service13.png";
import service14 from "@/assets/images/homepage/service14.png";

const services = [
  { title: "ICU Setup at Home", image: service1 },
  { title: "Specialised Nurse at home", image: service2 },
  { title: "Trained Attendant at home", image: service3 },
  { title: "Mother & Child Care", image: service4 },
  { title: "Senior Care Subscription", image: service5 },
  { title: "Travel Nurses", image: service6 },
  { title: "Specialty Rehab Packages", image: service7 },
  { title: "Doctor Home Consult", image: service8 },
  { title: "Physiotherapy at home", image: service9 },
  { title: "Nurse Procedures", image: service10 },
  { title: "Medical Procedures", image: service11 },
  { title: "Adult Vaccination", image: service12 },
  { title: "Prescribed Medicine Delivery", image: service13 },
  { title: "Home Diagnostics", image: service14 },
];

const ComprehensiveServices = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-2xl md:text-4xl font-bold text-[#031432] mb-10">
        Our Comprehensive Services
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 lg:flex lg:flex-wrap lg:justify-center services-container">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-[20px] p-3 md:p-4 flex flex-col items-center text-center w-auto h-auto md:w-[231px] md:h-[316px] service-card"
          >
            <Image
              src={service.image}
              alt={service.title}
              className="mb-3 w-20 h-20 md:w-[150px] md:h-[150px]"
            />
            <h3 className="text-sm md:text-[20px] font-semibold text-[#031432] mb-3 md:mb-4">
              {service.title}
            </h3>
            <button className="w-full md:w-[211px] mt-auto flex items-center justify-center gap-2 text-xs md:text-[16px] text-[#009A9F] border border-[#009A9F] rounded-full px-2 md:p-4 py-1 hover:bg-[#009A9F] hover:text-white">
              Enquire Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComprehensiveServices;
