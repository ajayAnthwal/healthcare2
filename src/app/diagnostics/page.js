"use client";
import React, { useState } from "react";
import doctor from "@/assets/images/diagnostics/doctor.png";
import HomeDiagnostics from "@/assets/images/diagnostics/HomeDiagnostics.png";
import Image from "next/image";
import { TabGroup, TabPanels, TabPanel } from "@headlessui/react";
import Tabs from "@/components/Tabs/Tabs";
import add_home from "@/assets/images/longterm/add_home.svg";
import Nurse from "@/assets/images/longterm/Nurse.svg";
import self_improvement from "@/assets/images/longterm/self_improvement.svg";

const Diagnostics = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const tabsData = [
    { name: "Diagnostic Tests", image: Nurse },
    { name: "Advanced Diagnostics", image: self_improvement },
    { name: "Comprehensive Health Checkups", image: add_home },
  ];

  return (
    <div>
      <div>
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tabs tabsData={tabsData} />
          <TabPanels>
            <TabPanel>{selectedIndex === 0 && <div>1 </div>}</TabPanel>
            <TabPanel>
              {selectedIndex === 2 && <div>Content for Tab 2</div>}
            </TabPanel>
            <TabPanel>
              {selectedIndex === 3 && <div>Content for Tab 3</div>}
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>

      {selectedIndex === -1 && (
        <div>
          <div className="hidden md:block bg-[url('/bg.png')] bg-cover bg-center">
            <div className="relative  mx-auto h-auto flex flex-col items-center md:bg-cover bg-no-repeat">
              <div className="absolute top-0 left-[93px] transform -translate-x-1/2 bg-white text-gray-700 text-sm px-4 py-1 shadow-md rounded-br-[37px]">
                Home &gt;&gt;&gt; Home Diagnostics
              </div>
              <div className="hidden md:flex flex-col md:flex-row items-center w-full pl-8">
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h1 className="text-5xl md:text-[60px] font-medium leading-[105px] tracking-[-1.2px] font-poppins text-white">
                    Accurate Diagnostics, Right at Home
                  </h1>

                  <p className="text-white text-xl font-normal leading-[39.06px] tracking-[-0.002px] py-[35px]">
                    Simplifying your health check-ups with trusted diagnostics{" "}
                    <br /> delivered to your doorstep.
                  </p>

                  <button className="px-[18.9px] py-[6.3px] bg-white text-[#003638] rounded-[10.08px] font-poppins text-[18.9px] font-medium leading-[39.06px] tracking-[-0.191px] flex justify-center items-center gap-[10.08px] shadow-md hover:bg-gray-200">
                    Enquire Now
                  </button>
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                  <Image
                    src={HomeDiagnostics}
                    alt="Care at Home"
                    width={822}
                    height={563}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <section className="bg-white py-16 px-4">
            <div className="container mx-auto">
              <div className="mt-8 mb-8">
                <h2 className="text-[32px] font-semibold text-left text-[#031432] font-poppins leading-normal">
                  Home Diagnostics
                </h2>
                <p className="text-justify text-[#525252] text-[16px] font-normal leading-[24px] mx-auto mt-4">
                  Apollo&apos;s Diagnostics at Home service brings high-quality,
                  reliable health checkups and tests to the comfort of your
                  home. From routine blood tests to advanced diagnostics, Apollo
                  ensures timely and accurate results, making health monitoring
                  easier and stress-free.
                </p>
              </div>

              <div className="mt-8 mb-8">
                <h2 className="text-[32px]  font-semibold text-left text-[#031432] font-poppins leading-normal">
                  Benefits of Apollo&apos;s Diagnostics at Home
                </h2>

                <p className="text-justify text-[#525252] text-[16px] font-normal leading-[24px] mt-4">
                  Apollo&apos;s Diagnostics at Home offers supreme convenience
                  by allowing scheduled tests at your preferred time and
                  location, excluding the need to travel or wait. Apollo ensures
                  safety by minimising the risk of infection in healthcare
                  facilities while providing comfort in a familiar environment.
                  With quick sample collection and prompt report delivery, it
                  saves time and simplifies health monitoring.
                </p>
              </div>

              <div className="mt-8 mb-8">
                <h2 className="text-[32px]  font-semibold text-left text-[#031432] font-poppins leading-normal">
                  What Makes Apollo Different
                </h2>
                <p className="text-justify text-[#525252] text-[16px] font-normal leading-[24px] mt-4">
                  Apollo stands out with its trusted capability, offering a wide
                  range of diagnostic services delivered by skilled
                  professionals while following strict safety protocols. Backed
                  by advanced technology and state-of-the-art laboratories,
                  Apollo ensures accurate and reliable results. With seamless
                  booking, sample collection at home and digital report access,
                  along with follow-up support, Apollo offers a comprehensive
                  and patient-centric diagnostic experience.
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
                Why Apollo Homecare
              </h2>
              <div className="flex flex-wrap items-center mb-12">
                <div className="w-full md:w-1/2 px-4">
                  <ol className="list-decimal text-[#2A2A2A] text-base  text-[16px] leading-[24px]">
                    <li className="mb-3">
                      <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                        Advanced Diagnostic Centre
                      </span>
                      <br />
                      Apollo offers state-of-the-art diagnostic equipment,
                      ensuring accurate, efficient, and reliable testing for all
                      patients.
                    </li>
                    <li className="mb-3">
                      <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                        Hygiene and Security
                      </span>
                      <br />
                      At Apollo, we prioritize hygiene, sanitation, and a safe
                      environment. We maintain uncompromising safety standards
                      to protect our patients at every step.
                    </li>
                    <li>
                      <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                        Easy Accessibility
                      </span>
                      <br />
                      Our doorstep sample collection service ensures convenience
                      and a hassle-free experience. With precise and trustworthy
                      test results, Apollo supports accurate diagnoses and
                      effective treatment plans.
                    </li>
                  </ol>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <Image
                    src={doctor}
                    alt="Newborn baby care"
                    className="mx-auto w-[400px]"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-10 container mx-auto">
            <div className="text-center my-8">
              <p className="text-justify text-[#525252] text-[16px] font-normal leading-[24px]">
                Apollo Home Care provides a variety of medical services, such as
                acute care, palliative care, post-operative care, elderly care,
                and primary care, all of which are delivered by our licensed and
                skilled physicians. Whether you need regular check-ups, quick
                care for common illnesses, specialized post-operative care,
                assistance with senior health needs, or compassionate palliative
                care, our doctor home visits provide individualized care catered
                to your unique health requirements and preferences. A few of the
                Apollo Home Visit categories include- Doctors, Physiotherapist,
                Nurse, Respiratory Therapist, Speech Therapist and Dietitian at
                home
              </p>
            </div>

            <div className="px-4 py-10">
              <h2 className="text-[#031432] text-left font-poppins text-[24px] font-semibold leading-normal mb-[20px]">
                Diagnostic Services Provided by Apollo
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto">
                <ul className="text-[#525252] text-[16px] font-normal leading-[24px] space-y-2">
                  <li>Diabetic Packages</li>
                  <li>Basic Master Health Checkup</li>
                  <li>Lipid Profile Screening</li>
                  <li>Thyroid Screening</li>
                  <li>Preventive Health Checkup - Male</li>
                  <li>Preventive Health Checkup - Female</li>
                  <li>Sr. Citizen Health Checkup - Male</li>
                  <li>Sr. Citizen Health Checkup - Female</li>
                  <li>Healthy Heart</li>
                  <li>Premium Whole Body Health Checkup - Male</li>
                </ul>

                <ul className="text-[#525252] text-[16px] font-normal leading-[24px] space-y-2">
                  <li>Premium Whole Body Health Checkup - Female</li>
                  <li>Liver Function Tests</li>
                  <li>Kidney Function Test</li>
                  <li>Thyroid Function Test</li>
                  <li>Cardiac Markers</li>
                  <li>Arterial Blood Gases</li>
                  <li>Serum Electrolytes</li>
                  <li>Sleep Study</li>
                  <li>Ambulatory Blood Pressure Monitoring</li>
                  <li>Holter Monitoring Patch</li>
                  <li>X-Ray at Home</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Diagnostics;
