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
      title: "A visionary leader and pioneer in modern Indian healthcare.",
      image: DrPrathap,
    },
    {
      name: "Shobana Kamineni",
      title:
        "Championing new growth opportunities in healthcare, including Apollo HomeCare.",
      image: Shobana,
    },
    {
      name: "Suneeta Reddy",
      title:
        "Strategizing financial sustainability and expansion across the globe.",
      image: Suneeta,
    },
    {
      name: "Sangita Reddy",
      title: "Focusing on digital health and innovation in patient care.",
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
            className="text-center bg-white rounded-[20px] shadow-[0px_34px_44px_0px_rgba(213,_219,_228,_0.44)] h-[258px]"
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

            <p className="text-[14px] text-[#6C87AE] text-center font-normal leading-normal">
              {leader.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
