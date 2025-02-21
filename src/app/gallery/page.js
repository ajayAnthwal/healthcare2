import React from "react";
import Link from "next/link";
import Image from "next/image";
import pressImg from "@/assets/images/career/press-and-news.png";

const Gallery = () => {
  const Gallery = [
    {
      image: pressImg,
    },
    {
      image: pressImg,
    },
    {
      image: pressImg,
    }
  ];

  return (
    <div>
      <div className="text-gray-800 container mx-auto mt-9">

        <section className="py-16 px-6">
          <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
            Gallery
          </h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Gallery.map((item, index) => (
              <div
                key={index}
                className="text-left bg-white rounded-[20px] shadow-[0px_34px_44px_0px_rgba(213,_219,_228,_0.44)] p-6"
              >
                <div className="relative w-full h-[250px] rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
