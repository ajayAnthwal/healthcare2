import React from "react";
import Link from "next/link";
import Image from "next/image";
import pressImg from "@/assets/images/career/press-and-news.png";

const News = () => {
  const Press = [
    {
      title: "Any title of Press release here",
      essentials:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ",
      image: pressImg,
    },
    {
      title: "Any title of Press release here",
      essentials:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ",
      image: pressImg,
    },
    {
      title: "Any title of Press release here",
      essentials:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ",
      image: pressImg,
    },
    {
      title: "Any title of Press release here",
      essentials:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ",
      image: pressImg,
    },
    {
      title: "Any title of Press release here",
      essentials:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ",
      image: pressImg,
    },
    {
      title: "Any title of Press release here",
      essentials:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ",
      image: pressImg,
    },
  ];

  const Gallery = [
    {
      title: "Any title of gallery here",
      essentials: "11-1-2005",
      image: pressImg,
    },
    {
      title: "Any title of gallery here",
      essentials: "11-1-2005",
      image: pressImg,
    },
    {
      title: "Any title of gallery here",
      essentials: "11-1-2005",
      image: pressImg,
    },
    {
      title: "Any title of gallery here",
      essentials: "11-1-2005",
      image: pressImg,
    },
    {
      title: "Any title of gallery here",
      essentials: "11-1-2005",
      image: pressImg,
    },
    {
      title: "Any title of gallery here",
      essentials: "11-1-2005",
      image: pressImg,
    },
  ];

  const Journals = [
    {
      title: "Any title of Journal here",
      essentials: "11-1-2005",
      image: pressImg,
    },
    {
      title: "Any title of Journal here",
      essentials: "11-1-2005",
      image: pressImg,
    },
    {
      title: "Any title of Journal here",
      essentials: "11-1-2005",
      image: pressImg,
    },
    {
      title: "Any title of Journal here",
      essentials: "11-1-2005",
      image: pressImg,
    },
    {
      title: "Any title of Journal here",
      essentials: "11-1-2005",
      image: pressImg,
    },
    {
      title: "Any title of Journal here",
      essentials: "11-1-2005",
      image: pressImg,
    },
  ];

  return (
    <div>
      <div className="text-gray-800 container mx-auto">
        <div>
          <nav className="flex flex-col items-center gap-5 py-4">
            <h1 className="text-[32px] font-semibold text-[#031432] leading-normal text-center font-poppins">
              NEWS & MEDIA
            </h1>
            <ul className="flex justify-center space-x-8">
              <Link href="#legacy">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  Press Releases
                </li>
              </Link>
              <Link href="#leadership">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  Gallery
                </li>
              </Link>
              <Link href="#vision">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  Journals
                </li>
              </Link>
              <Link href="#pillars">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  Blogs
                </li>
              </Link>
              <Link href="#pillars">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  Campaigns
                </li>
              </Link>
            </ul>
          </nav>
        </div>

        <section className="py-16 px-6">
          <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
            Press Releases
          </h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Press.map((item, index) => (
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
                <h3 className="text-[#007D9E] font-poppins text-[20px] font-bold leading-[22px] mt-4">
                  {item.title}
                </h3>
                <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2">
                  <strong className="text-[#007D9E] font-lato text-[16px] font-bold leading-[24px]">
                    Essentials:
                  </strong>
                  {item.essentials}
                </p>
              </div>
            ))}
          </div>
        </section>

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
                <h3 className="text-[#007D9E] font-poppins text-[20px] font-bold leading-[22px] mt-4">
                  {item.title}
                </h3>
                <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2">
                  <strong className="text-[#007D9E] font-lato text-[16px] font-bold leading-[24px]">
                    Essentials:
                  </strong>
                  {item.essentials}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-16 px-6">
          <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
            Journals
          </h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Journals.map((item, index) => (
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
                <h3 className="text-[#007D9E] font-poppins text-[20px] font-bold leading-[22px] mt-4">
                  {item.title}
                </h3>
                <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2">
                  <strong className="text-[#007D9E] font-lato text-[16px] font-bold leading-[24px]">
                    Essentials:
                  </strong>
                  {item.essentials}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;
