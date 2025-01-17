import React from "react";
import ServiceInquiryForm from "./ServiceInquiryForm";
import inquiry from "@/assets/images/longterm/inquiry.png";

const Applo_Nurse_At_home = () => {
  const formFields = [
    { type: "text", placeholder: "Name" },
    { type: "tel", placeholder: "Phone" },
    {
      type: "select",
      placeholder: "Select City",
      options: ["Select City", "City 1", "City 2", "City 3"],
    },
    {
      type: "select",
      placeholder: "Choose a Service",
      options: ["Choose a Service", "Service 1", "Service 2", "Service 3"],
    },
  ];

  return (
    <div>
      <div>
        <ServiceInquiryForm
          imageSrc={inquiry}
          formTitle="A Lifeline for Modern Life"
          fields={formFields}
        />
      </div>
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Apollo Nurse at Home
            <br />A Lifeline for Modern Life
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            In today&apos;s fast-paced world, the concept of &quot;Nurse at
            home&quot; holds unique significance. Apollo serves as a bridge
            between professional medical care and the comfort of one&apos;s
            home, ensuring that patients receive compassionate, personalized,
            and reliable care tailored to their needs.
          </p>
        </div>
      </section>

      <div>
        <section className="py-10 bg-[#fff]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-center text-[#000] font-poppins text-2xl sm:text-[32px] font-semibold leading-normal mb-6">
              Why is it important?
            </h2>

            <div className="space-y-4 text-gray-700">
              <div className="mt-4 mb-6">
                <p className="text-[#6C87AE] text-center text-base font-normal leading-6">
                  The demand for home nursing services is on the rise nowadays
                  due to the patient-centricity, the ageing population, and the
                  growing preference for the convenience of treatment in
                  familiar surroundings. Apollo Home care nurses play a vital
                  role in reducing hospital visits, enabling quicker recovery,
                  and promoting mental and emotional well-being. Apollo provide
                  the kind of care that goes beyond medical treatment &mdash;
                  support that nourishes the soul and uplifts the mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#E6F5F5] py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[#04264D] text-[24px] font-semibold font-poppins mb-4">
                What Do Apollo Provide?
              </h3>
              <p className="text-[#6C87AE] text-base font-normal leading-6 mb-4">
                Our highly skilled nurses deliver a wide range of services,
                including:
              </p>
              <ul className="list-disc pl-6 text-[#04264D] space-y-2">
                <li>Post-surgical care</li>
                <li>Chronic disease management</li>
                <li>Elderly care</li>
                <li>Paediatric care</li>
                <li>Palliative support</li>
                <li>Medication administration and monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#04264D] text-[24px] font-semibold font-poppins mb-4">
                When Do You Need Them?
              </h3>
              <p className="text-[#6C87AE] text-base font-normal leading-6 mb-4">
                Apollo Home nursing services are necessary when:
              </p>
              <ul className="list-disc pl-6 text-[#04264D] space-y-2">
                <li>Patients are recovering from surgery or illness.</li>
                <li>Chronic conditions require ongoing care.</li>
                <li>
                  Elderly family members need assistance with daily activities.
                </li>
                <li>
                  Families want professional yet heartfelt care for their loved
                  ones who are seriously ill.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#fff]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal py-8">
              Our Specialist Nurses: A Class Apart
            </h2>
            <p className="text-[#6C87AE] text-base font-normal leading-6 mb-4 text-center">
              What sets our Apollo nurses apart isn&apos;t just their medical
              expertise, but also their warm, compassionate approach. They
              don&apos;t just care; they build a relationship that makes
              patients and their families feel understood and supported. Apollo
              Nurses&apos; demeanour is professional yet familiar, making
              everyone feel comfortable and valued.
            </p>
            <p className="text-[#6C87AE] text-base font-normal leading-6 mb-4 text-center">
              Our Apollo nurses exhibit qualities such as compassion, patience
              and dedication, making them trusted companions on your journey of
              recovery and wellness. They are trained to respect cultural
              sensitivities, provide emotional support and heartfelt care.
            </p>

            <p className="text-[#6C87AE] text-base font-normal leading-6 mb-4 text-center">
              Nurse at Home: Because healing happens best where the heart feels
              at home
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Applo_Nurse_At_home;
