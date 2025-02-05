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
      <section className="bg-white mt-7 px-4">
        <div className="container mx-auto">
          <div className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#031432] font-poppins leading-normal">
              Apollo Nurse at Home -{" "}
              <span className="font-normal">A Lifeline for Modern Life</span>
            </h2>
            <p className="text-justify text-[#525252] text-[16px] font-normal leading-[24px] mx-auto mt-5">
              In today&apos;s fast-paced world, the concept of &quot;Nurse at
              home&quot; holds unique significance. Apollo serves as a bridge
              between professional medical care and the comfort of one&apos;s
              home, ensuring that patients receive compassionate, personalized,
              and reliable care tailored to their needs.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#031432] font-poppins leading-normal">
              Why is it important?
            </h2>
            <p className="text-justify text-[#525252] text-[16px] font-normal leading-[24px] mx-auto mt-5">
              The demand for home nursing services is on the rise nowadays due
              to the patient-centricity, the ageing population and the growing
              preference for the convenience of treatment in familiar
              surroundings. Apollo Home care nurses play a vital role in
              reducing hospital visits, enabling quicker recovery and promoting
              mental and emotional well-being. Apollo provide the kind of care
              that goes beyond medical treatment – ​​support that nourishes the
              soul and uplifts the mind.
            </p>
          </div>
          <div className="mb-10">
            <section className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-[#031432] font-poppins text-[32px] font-semibold leading-normal mb-2">
                    What Do Apollo Provide?
                  </h2>
                  <p className="text-[#525252] text-[16px] font-normal leading-[24px]">
                    Our highly skilled nurses deliver a wide range of services,
                    including:
                  </p>
                  <ul className="list-disc pl-5 text-[#525252] text-[16px] font-normal leading-[24px] mt-2">
                    <li>Post-surgical care</li>
                    <li>Chronic disease management</li>
                    <li>Elderly care</li>
                    <li>Paediatric care</li>
                    <li>Palliative support</li>
                    <li>Medication administration and monitoring</li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-[#031432] font-poppins text-[32px] font-semibold leading-normal mb-2">
                    When Do You Need Them?
                  </h2>
                  <p className="text-[#525252] text-[16px] font-normal leading-[24px]">
                    Apollo Home nursing services are necessary when:
                  </p>
                  <ul className="list-disc pl-5 text-[#525252] text-[16px] font-normal leading-[24px] mt-2">
                    <li>Patients are recovering from surgery or illness.</li>
                    <li>Chronic conditions require ongoing care.</li>
                    <li>
                      Elderly family members need assistance with daily
                      activities.
                    </li>
                    <li>
                      Families want professional yet heartfelt care for their
                      loved ones who are seriously ill.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div className="mb-10">
            <div className="container mx-auto">
              <div className="mt-8 mb-8">
                <h2 className="text-[24px] font-semibold text-left text-[#031432] font-poppins leading-normal">
                  Our Specialist Nurses: A Class Apart
                </h2>
                <ul className="list-disc text-justify text-[#525252] text-[16px] font-normal leading-[24px] mx-auto mt-4 pl-5">
                  <li>
                    What sets our Apollo nurses apart isn&apos;t just their
                    medical expertise, but also their warm, compassionate
                    approach. They don&apos;t just care; they build a
                    relationship that makes patients and their families feel
                    understood and supported. Apollo Nurses&apos; demeanour is
                    professional yet familiar, making everyone feel comfortable
                    and valued.
                  </li>

                  <li>
                    Our Apollo nurses exhibit qualities such as compassion,
                    patience and dedication, making them trusted companions on
                    your journey of recovery and wellness. They are trained to
                    respect cultural sensitivities, provide emotional support
                    and heartfelt care.
                  </li>
                  <li>
                    Nurse at Home: Because healing happens best where the heart
                    feels at home
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Applo_Nurse_At_home;
