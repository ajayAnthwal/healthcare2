import React from "react";
import Image from "next/image";
import DrPrathap from "@/assets/images/about/DrPrathap.png";
import Sangita from "@/assets/images/about/Sangita.png";
import Shobana from "@/assets/images/about/Shobana.png";
import Suneeta from "@/assets/images/about/Suneeta.png";

export default function Leadership() {
  const leaders = [
    {
      name: "Dr. Prathap C. Reddy",
      title:
        "Dr. Sangita Reddy is a trailblazer in global healthcare, an Indian entrepreneur, and a humanitarian. As Joint Managing Director at Apollo Hospitals Enterprise Limited, she leads Asia’s largest healthcare group. Recently, she served as President of FICCI. Dr. Reddy is dedicated to healthcare transformation through technology, recognized with an Honorary Doctorate from Macquarie University. She also fosters international relations as the Honorary Consul of Brazil in Hyderabad, appointed by the Indian Government, and has been a member of the World Economic Forum.",
      image: DrPrathap,
    },
    {
      name: "Shobana Kamineni",
      title:
        "Harshad Reddy, Director of Apollo Home Healthcare Ltd., is a versatile professional blending healthcare and power generation expertise. With an engineering and management background, he excels in diverse fields. Through visionary leadership, strategic acumen, and operational prowess, he’s made a lasting impact in healthcare. As Director, he’s transformed home healthcare for 70,000 families annually, expanding across 13 cities with fourfold revenue growth. His supportive work environment boosts employee retention and productivity, shaping the future of Indian home healthcare.",
      image: Shobana,
    },
    {
      name: "Suneeta Reddy",
      title:
        "Vishal Lathwal is a seasoned professional with 16 years of experience spanning healthcare, automotive, and consulting industries. Currently, he serves as the CEO at Apollo Homecare, part of Apollo Hospitals Group, Asia’s largest healthcare provider. Vishal’s leadership, strategic acumen, and operational excellence have been evident throughout his career, including his successful tenure at Max Healthcare and contributions to renowned organizations like Mercedes-Benz AG and Mercer Human Resource Consulting. With a strong educational background and proven track record, Vishal is adept at driving growth and innovation in healthcare delivery.",
      image: Suneeta,
    },
    {
      name: "Sangita Reddy",
      title:
        "Mudassir is a Chartered Accountant by profession having over a decade of experience in managing finance & accounts function of various companies. He has earlier worked with MMTC Ltd, a public sector company; Wockhardt Hospitals, Mumbai based Hospital, Satyam Computers, Dr. Reddy’s Foundation, a CSR arm of Dr. Reddy’s Laboratories. An individual of high integrity and penchant for financial transparency and accountability; he is responsible for the finance function at Apollo HomeCare. His extensive experience in creating an Audit Compliant Financial system is an advantage to reckon with..",
      image: Sangita,
    },
  ];

  return (
    <section className="py-16 px-6">
      <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
        Leadership
      </h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="text-center bg-white rounded-[20px] shadow-[0px_34px_44px_0px_rgba(213,_219,_228,_0.44)] max-h-full"
          >
            <Image
              src={leader.image}
              alt={leader.name}
              width={128}
              height={128}
              className="mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 font-medium text-[#000] text-center text-[20px] font-poppins leading-normal">
              {leader.name}
            </h3>

            <p className="text-[14px] text-[#6C87AE] text-left md:text-center px-2 py-4 font-normal leading-normal">
              {leader.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
