"use client";
import React, { useState } from "react";
import { TabGroup, TabPanels, TabPanel } from "@headlessui/react";
import Tabs from "@/components/Tabs/Tabs";
import Capa_1 from "@/assets/images/longterm/Capa_1.png";
import svg2400 from "@/assets/images/longterm/svg2400.png";
import Frame from "@/assets/images/longterm/Frame.svg";
import svg2547 from "@/assets/images/longterm/svg2547.png";
import Layer_1 from "@/assets/images/longterm/Layer_1.png";
import Capa_2 from "@/assets/images/longterm/Capa_2.png";
import iconsltc from "@/assets/images/longterm/iconsltc.png";
import NurseAtHome from "@/components/Long-term-care/Nurse_At_Home/NurseAtHome";
import SpecializedNurseAtHome from "@/components/Long-term-care/SpecializedNurseAtHome";
import NursAtHomeProduct from "@/components/Long-term-care/Nurse_At_Home/NursAtHomeProduct";
import Applo_Nurse_At_home from "@/components/Long-term-care/Applo_Nurse_At_home";
import Trained_Attendant_at_Home from "@/components/Long-term-care/Trained_Attendant_at_Home";
import Mother_Baby_Care from "@/components/Long-term-care/Mother_Baby_Care";
import Senior_Care_Subscription from "@/components/Long-term-care/Senior_Care_Subscription";
import TravelNurses from "@/components/Long-term-care/TravelNurses";
import Specially_Rehab_Packages from "@/components/Long-term-care/Specially_Rehab_Packages";
import ltc from "@/assets/images/longterm/ltc.png";
import ltc2 from "@/assets/images/longterm/ltc2.png";
import ltc3 from "@/assets/images/longterm/ltc3.png";
import Image from "next/image";
import service1 from "@/assets/images/homepage/service1.png";
import service2 from "@/assets/images/homepage/service2.png";
import service3 from "@/assets/images/homepage/service3.png";
import service4 from "@/assets/images/homepage/service4.png";
import service5 from "@/assets/images/homepage/service5.png";
import service6 from "@/assets/images/homepage/service6.png";
import service7 from "@/assets/images/homepage/service7.png";
import FooterCTA from "@/components/Long-term-care/FooterCTA";

const LongTermCare = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const tabsData = [
    { name: "ICU at Home", image: Capa_1 },
    { name: "Specialized Nurse at Home", image: svg2547 },
    { name: "Trained Attendant at Home", image: Frame },
    { name: "Mother & Baby Care", image: Layer_1 },
    { name: "Senior Care Subscription", image: svg2400 },
    { name: "Travel Nurses", image: Capa_2 },
    { name: "Specialty Rehab Packages", image: iconsltc },
  ];

  const services = [
    { title: "ICU Setup at Home", image: service1 },
    { title: "Specialised Nurse at home", image: service2 },
    { title: "Trained Attendant at home", image: service3 },
    { title: "Mother & Child Care", image: service4 },
    { title: "Senior Care Subscription", image: service5 },
    { title: "Travel Nurses", image: service6 },
    { title: "Specialty Rehab Packages", image: service7 },
  ];
  return (
    <>
      <div>
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tabs tabsData={tabsData} />
          <TabPanels>
            <TabPanel>{selectedIndex === 0 && <NurseAtHome />}</TabPanel>
            <TabPanel>
              {selectedIndex === 1 && (
                <div>
                  <SpecializedNurseAtHome />
                </div>
              )}
            </TabPanel>
            <TabPanel>
              {selectedIndex === 2 && (
                <div>
                  <NursAtHomeProduct />
                </div>
              )}
            </TabPanel>
            <TabPanel>
              {selectedIndex === 3 && (
                <div>
                  <Applo_Nurse_At_home />
                </div>
              )}
            </TabPanel>
            <TabPanel>
              {selectedIndex === 4 && (
                <div>
                  <Trained_Attendant_at_Home />
                </div>
              )}
            </TabPanel>
            <TabPanel>
              {selectedIndex === 5 && (
                <div>
                  <Mother_Baby_Care />
                </div>
              )}
            </TabPanel>

            <TabPanel>
              {selectedIndex === 6 && (
                <div>
                  <Senior_Care_Subscription />
                </div>
              )}
            </TabPanel>
            <TabPanel>
              {selectedIndex === 7 && (
                <div>
                  <TravelNurses />
                </div>
              )}
            </TabPanel>
            {/* <TabPanel>
              {selectedIndex === 8 && (
                <div>
                  <Specially_Rehab_Packages />
                </div>
              )}
            </TabPanel> */}
          </TabPanels>
        </TabGroup>
      </div>
      {selectedIndex === -1 && (
        <>
          <div className="hidden md:block bg-[url('/bg.png')] bg-cover bg-center banner">
            <div className="relative  mx-auto h-auto flex flex-col items-center bg-no-repeat pl-8">
              <div className="absolute top-0 left-[93px] transform -translate-x-1/2 bg-white text-gray-700 text-sm px-4 py-1 shadow-md rounded-br-[37px]">
                Home &gt;&gt;&gt; Long Term Care
              </div>
              <div className="hidden md:flex w-full flex-col md:flex-row items-center">
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-5xl md:text-[60px] font-medium leading-[105px] tracking-[-1.2px] font-poppins text-white">
                    Care You Can Trust At Home
                  </h1>
                  <p className="text-white text-xl font-normal leading-[39.06px] tracking-[-0.002px] py-[35px]">
                    Expert care for your loved ones, combining medical <br />
                    excellence with the comfort of home.
                  </p>

                  <button className="px-[18.9px] py-[6.3px] bg-white text-[#003638] rounded-[10.08px] font-poppins text-[18.9px] font-medium leading-[39.06px] tracking-[-0.191px] flex justify-center items-center gap-[10.08px] shadow-md hover:bg-gray-200">
                    Enquire Now
                  </button>
                </div>
                <div className="flex-1 flex justify-center md:justify-end">
                  <Image
                    src={ltc}
                    alt="Care at Home"
                    width={604}
                    height={555}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative block md:hidden">
            <div className="absolute top-0 left-[107px] transform -translate-x-1/2 bg-white text-gray-700 text-sm px-4 py-1 shadow-md rounded-br-[37px] -mt-3 -ml-2">
              Home &gt;&gt;&gt; Long Term Care
            </div>
          </div>

          <div>
            <div className="container mx-auto px-4 py-8">
              <h1 className="text-center text-2xl mt-12 md:text-4xl font-bold text-[#031432] mb-10">
                Our Services
              </h1>
              <div className="flex justify-center mt-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {services.slice(0, 4).map((service, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-md rounded-[20px] p-3 md:p-4 flex flex-col items-center text-center w-auto h-auto md:w-[231px] md:h-[316px]"
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
              <div className="flex justify-center mt-8">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {services.slice(4, 7).map((service, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-md rounded-[20px] p-3 md:p-4 flex flex-col items-center text-center w-auto h-auto md:w-[231px] md:h-[316px]"
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
            </div>
          </div>

          <section className="bg-[#E9F8F9] py-10">
            <div className="container mx-auto">
              <h2 className="text-[#031432] text-center font-poppins text-[32px] font-semibold leading-normal mb-10 uppercase">
                Why is APOLLO&apos;S LONG-TERM CARE Necessary
              </h2>

              <div className="flex flex-wrap items-center mb-10">
                <div className="w-full md:w-1/2 px-4">
                  <div className="pb-3">
                    <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                      Post-hospitalization care
                    </h3>
                    <ul>
                      <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                        Our Apollo nurses assist patients recovering from
                        surgery, injury or illness who require skilled care at
                        home or in a remote location.
                      </li>
                    </ul>
                  </div>

                  <div className="pb-3">
                    <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                      Chronic illness management
                    </h3>
                    <ul>
                      <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                        Our Apollo nurses provide ongoing support for patients
                        with conditions such as diabetes, heart disease or
                        neurological disorders.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                      Elderly care during travel
                    </h3>
                    <ul>
                      <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                        Our Apollo nurses assist elderly patients who require
                        assistance during travel or relocation.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <Image
                    src={ltc3}
                    alt="Newborn baby care"
                    className="mx-auto w-[400px]"
                    width={400}
                    height={400}
                  />
                </div>
              </div>

              <div>
                <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-10 uppercase">
                  Benefits of APOLLO&apos;S LONG-TERM CARE
                </h2>
              </div>
              <div className="flex flex-wrap items-center mb-12">
                <div className="w-full md:w-1/2 px-4 md:order-1">
                  <Image
                    src={ltc2}
                    alt="Newborn baby care"
                    className="mx-auto w-[400px]"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="w-full md:w-1/2 px-4 md:order-2">
                  <div className="py-4">
                    <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                      Improved quality of life
                    </h3>
                    <ul>
                      <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                        Personal care of Apollo enhances comfort and dignity.
                      </li>
                    </ul>
                  </div>
                  <div className="pb-4">
                    <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                      Professional assistance
                    </h3>
                    <ul>
                      <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                        Skilled caregivers handle medical and non-medical needs
                        effectively.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                      Peace of mind
                    </h3>
                    <ul>
                      <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                        Families are assured that their loved ones are in
                        capable hands.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div>
            <div className="mt-8 mb-8 container mx-auto px-5 md:px-0">
              <h2 className="text-[32px] font-semibold text-[#031432] font-poppins leading-normal">
                How Apollo is Different
              </h2>
              <ul className="mt-10 text-[#525252] text-[16px] font-normal leading-[24px] list-disc pl-5">
                <li>
                  <strong className="text-[#2A2A2A] font-semibold">
                    Trusted Reputation:
                  </strong>
                  A globally renowned healthcare brand backed by Apollo&apos;s
                  decades of healthcare excellence.
                </li>
                <li>
                  <strong className="text-[#2A2A2A] font-semibold">
                    Experienced Professionals:
                  </strong>
                  Apollo&apos;s trained nurses and caregivers provide expert and
                  compassionate long-term care.
                </li>
                <li>
                  <strong className="text-[#2A2A2A] font-semibold">
                    Personalized Services:
                  </strong>
                  Apollo&apos;s customized care plans meet individual needs.
                </li>
                <li>
                  <strong className="text-[#2A2A2A] font-semibold">
                    Trusted and Dependable:
                  </strong>
                  <span className="text-[#2A2A2A] font-normal opacity-80">
                    Apollo&apos;s decades of healthcare experience ensure safety
                    and quality.
                  </span>
                </li>
                <li>
                  <strong className="text-[#2A2A2A] font-semibold">
                    Convenience:
                  </strong>
                  Apollo care is provided at home without the need to visit a
                  hospital.
                </li>
                <li>
                  <strong className="text-[#2A2A2A] font-semibold">
                    Affordability:
                  </strong>
                  Cost-effective solution compared to prolonged hospital stays.
                </li>
                <li>
                  <strong className="text-[#2A2A2A] font-semibold">
                    Local access:
                  </strong>
                  Available near your area for quick response and setup.
                </li>
              </ul>

              <p className="mt-5 text-[#525252] text-[16px] font-normal leading-[24px]">
                Apollo homecare is known for its blend of expertise, care, and
                trust, offering a unique and reliable Long Term-care experience.
              </p>
            </div>
          </div>
        </>
      )}
      <div className="my-5">
        <FooterCTA />
      </div>
    </>
  );
};

export default LongTermCare;
