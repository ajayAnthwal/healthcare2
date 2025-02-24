"use client";
import React, { useState } from "react";
import Vaccination from "@/assets/images/vaccination/Vaccination.png";
import AdultVaccination from "@/assets/images/vaccination/AdultVaccination.png";
import Image from "next/image";
import { TabGroup, TabPanels, TabPanel } from "@headlessui/react";
import Tabs from "@/components/Tabs/Tabs";
import add_home from "@/assets/images/longterm/add_home.svg";

const Vacinnation = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const tabsData = [{ name: "Adult Vaccination", image: add_home }];

  const pillars = [
    {
      title: "Convenience",
      description:
        "Scheduling at your preferred time eliminates the need for travel and waiting.",
    },
    {
      title: "Safety",
      description:
        "Reduces exposure to infections often present in healthcare facilities.",
    },
    {
      title: "Comfort",
      description:
        "Familiar surroundings can ease anxiety associated with receiving vaccinations.",
    },
    {
      title: "Personalized Care",
      description:
        "Trained specialists ensure the vaccination process is smooth and tailored to individual needs.",
    },
  ];

  return (
    <div>
      <div>
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tabs tabsData={tabsData} />
          <TabPanels>
            <TabPanel>{selectedIndex === 0 && <div>1 </div>}</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>

      {selectedIndex === -1 && (
        <div>
          <div className="hidden md:block bg-[url('/bg.png')] bg-cover bg-center banner">
            <div className="relative  mx-auto h-auto flex flex-col items-center md:bg-cover bg-no-repeat">
              <div className="absolute top-0 left-[93px] transform -translate-x-1/2 bg-white text-gray-700 text-sm px-4 py-1 shadow-md rounded-br-[37px]">
                Home &gt;&gt;&gt; Adult Vaccination
              </div>
              <div className="hidden md:flex flex-col md:flex-row items-center w-full pl-8">
                <div className="w-full md:w-1/2 text-center md:text-left home_visit-text">
                  <h1 className="text-5xl md:text-[60px] font-medium leading-[105px] tracking-[-1.2px] font-poppins text-white">
                    Stay Protected with Adult Vaccinations
                  </h1>

                  <p className="text-white text-xl font-normal leading-[39.06px] tracking-[-0.002px] py-[35px]">
                    Preventive care for a healthier tomorrow, tailored to your
                    needs.
                  </p>

                  <button className="px-[18.9px] py-[6.3px] bg-white text-[#003638] rounded-[10.08px] font-poppins text-[18.9px] font-medium leading-[39.06px] tracking-[-0.191px] flex justify-center items-center gap-[10.08px] shadow-md hover:bg-gray-200">
                    Enquire Now
                  </button>
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-end home_visit">
                  <Image
                    src={AdultVaccination}
                    alt="Care at Home"
                    width={822}
                    height={563}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <section className="bg-white py-16 px-4">
            <div className="container mx-auto">
              <div className="mt-8 mb-8">
                <h2 className="text-[32px] font-semibold text-center text-[#031432] font-poppins leading-normal">
                  ADULT VACCINATION
                </h2>
                <p className="text-justify text-[#525252] text-[16px] font-normal leading-[24px] mx-auto mt-4">
                  Apollo&apos;s Adult Vaccination at Home is a healthcare
                  service that allows adults to receive essential and
                  recommended vaccines in the comfort and safety of your home.
                  These vaccines help protect against influenza, pneumonia,
                  hepatitis, tetanus, and other diseases. Apollo&apos;s home
                  healthcare service is especially valuable for individuals who
                  face challenges in visiting healthcare facilities due to
                  mobility issues, busy schedules, or concerns about exposure to
                  infections.
                </p>
              </div>
            </div>
          </section>

          <section
            className="py-10"
            style={{
              background:
                "linear-gradient(189deg, #E6F5F5 -74.5%, #C1EFEF 160.14%)",
            }}
          >
            <div className="container mx-auto px-4">
              <h2 className="text-[#031432] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
                Why is Vaccination Important?
              </h2>
              <div className="flex flex-wrap items-center mb-12">
                <div className="w-full md:w-1/2 px-4">
                  <ol className="text-[#2A2A2A] text-base text-[16px] leading-[24px] space-y-4 list-decimal pl-5">
                    <li className="font-semibold">
                      Disease Prevention
                      <ul className="list-disc pl-6 text-[#2A2A2A] font-normal">
                        <li>
                          Vaccines help protect against severe illnesses, some
                          of which can be life-threatening.
                        </li>
                      </ul>
                    </li>
                    <li className="font-semibold">
                      Community Protection
                      <ul className="list-disc pl-6 text-[#2A2A2A] font-normal">
                        <li>
                          By staying vaccinated, adults contribute to herd
                          immunity, reducing the spread of infectious diseases.
                        </li>
                      </ul>
                    </li>
                    <li className="font-semibold">
                      Age-Specific Needs
                      <ul className="list-disc pl-6 text-[#2A2A2A] font-normal">
                        <li>
                          As immunity can wane over time, adult vaccinations
                          provide crucial protection, particularly for older
                          adults, individuals with chronic illnesses, or those
                          with weakened immune systems.
                        </li>
                      </ul>
                    </li>
                    <li className="font-semibold">
                      Convenience for At-Risk Groups
                      <ul className="list-disc pl-6 text-[#2A2A2A] font-normal">
                        <li>
                          Adults who are bedridden or have mobility issues can
                          stay protected without the need to visit a clinic or
                          hospital.
                        </li>
                      </ul>
                    </li>
                  </ol>
                </div>
                <div className="w-full md:w-1/2 px-4 flex justify-center">
                  <Image
                    src={Vaccination}
                    alt="Newborn baby care"
                    className="w-[400px]"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-5 px-6 bg-white container mx-auto">
            <h2 className="text-[28px] font-semibold text-[#031432] text-left font-poppins leading-normal">
              Benefits of Apollo Adult Vaccination at Home
            </h2>
            <ul className="mt-5 space-y-4 list-disc list-inside">
              {pillars.map((pillar, index) => (
                <li key={index} className="text-[#333]">
                  <span className="font-semibold text-[16px] font-poppins leading-normal text-[#333]">
                    {pillar.title}
                  </span>
                  <p className="text-[16px] font-normal text-[#333] leading-[24px] ml-5">
                    {pillar.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white container mx-auto px-4">
            <div className="container mx-auto">
              <div className="mt-8 mb-8">
                <h2 className="text-[24px] font-semibold text-left text-[#031432] font-poppins leading-normal">
                  How is Apollo&apos;s Adult Vaccination Service Different?
                </h2>
                <p className="text-justify text-[#525252] text-[16px] font-normal leading-[24px] mx-auto mt-4">
                  Apollo Homecare&apos;s adult vaccination service stands out
                  for its expert care, comprehensive vaccine options, and strict
                  safety protocols. With personalized vaccination plans,
                  post-vaccination support, and the convenience of home service,
                  Apollo ensures a seamless and reliable experience for your
                  health and well-being.
                </p>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 py-10">
            <h2 className="text-[#031432] font-poppins text-[32px] font-semibold leading-normal mb-6">
              Vaccinations at Home
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-[#525252] text-[16px] font-normal leading-[24px]">
                  Prevention is better than cure. Home care specialists provide
                  essential vaccines for adults right at your home, ensuring
                  safety, convenience, and professional care.
                </p>

                <p className="text-[#525252] text-[16px] font-normal leading-[24px] mt-4">
                  Apollo Home Vaccination services offer a comprehensive range
                  of vaccines, including:
                </p>

                <p className="text-[#525252] text-[16px] font-normal leading-[24px] mt-4">
                  <strong> Immunizations:</strong> Keep yourself protected with
                  timely vaccinations.
                </p>

                <p className="text-[#525252] text-[16px] font-normal leading-[24px] mt-4">
                  <strong> Adult Vaccines :</strong> From annual flu shots to
                  travel-specific immunizations, Apollo ensures your convenience
                  and safety.
                </p>

                <p className="text-[#525252] text-[16px] font-normal leading-[24px] mt-4">
                  <strong>Specialized Vaccinations :</strong> Personalized
                  solutions for seniors, gender-specific needs, and individuals
                  with unique health requirements, all delivered with
                  Apollo&apos; trusted care.
                </p>
              </div>
              <div>
                <h2 className="text-[#031432] text-[16px] font-semibold leading-normal mb-4">
                  Below are some of the adult vaccines and immunizations that
                  can be administered right at your home:
                </h2>

                <ul className="list-none text-[#525252] text-[16px] font-normal leading-[24px] space-y-2">
                  <li>H1N1</li>
                  <li>Tetanus injection / Diphtheria</li>
                  <li>Typhoid</li>
                  <li>Flu Vaccination</li>
                  <li>Chicken Pox</li>
                  <li>Hepatitis A and Hepatitis B Vaccination</li>
                  <li>HPV Vaccine to prevent Cervical Cancer</li>
                  <li>Meningococcus</li>
                  <li>Pneumococcus</li>
                  <li>Shingles Vaccination</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white px-4">
            <div className="container mx-auto">
              <div className="mt-8 mb-8">
                <h2 className="text-[24px] font-semibold text-left text-[#031432] font-poppins leading-normal">
                  Importance of Apollo&apos;s Vaccination at Home
                </h2>
                <p className="text-Justify text-[#525252] text-[16px] font-normal leading-[24px] mt-4">
                  Apollo&apos;s Vaccination is a crucial step to prevent all
                  diseases. Getting vaccines at home ensures timely vaccination
                  as well as reduces the risk of exposure to infections in
                  crowded healthcare facilities. This is especially important
                  for individuals with mobility issues, chronic illnesses or who
                  prefer the safety and convenience of home care.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white px-4">
            <div className="container mx-auto">
              <div className="mt-8 mb-8">
                <h2 className="text-[24px] font-semibold text-left text-[#031432] font-poppins leading-normal">
                  What Apollo Homecare Offers
                </h2>
                <ul className="list-disc text-justify text-[#525252] text-[16px] font-normal leading-[24px] mx-auto mt-4 pl-5">
                  <li>
                    A comprehensive range of vaccines for adults, seniors and
                    high-risk groups.
                  </li>
                  <li>
                    Expert administration by trained healthcare professionals
                    following strict safety protocols.
                  </li>
                  <li>
                    Customized vaccination plans based on your specific needs.
                  </li>
                  <li>
                    Post vaccination follow-up and support to ensure your
                    well-being.
                  </li>
                  <li>
                    With Apollo&apos;s trusted expertise, protecting your health
                    has never been easier or more reliable.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Vacinnation;
