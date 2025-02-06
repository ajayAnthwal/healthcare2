import React from "react";
import ServiceInquiryForm from "./ServiceInquiryForm";
import inquiry from "@/assets/images/longterm/inquiry.png";

const Trained_Attendant_at_Home = () => {
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
      <p className="text-center mt-5">
        Your loved ones deserve the best, and we bring that care to your
        doorstep
      </p>
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
              Long-Term Support Care
            </h2>
            <p className="text-justify text-[#525252] text-[16px] font-normal leading-[24px] mx-auto mt-5">
              At Apollo Home Nursing, our Nurse at Home program provides
              comprehensive and tailored solutions for patients requiring
              long-term, in-home nursing assistance. The program is specifically
              designed to meet the needs of individuals with complex medical
              conditions and diverse daily needs. Our goal is to enhance quality
              of life and provide independence through carefully crafted,
              patient-focused care plans.
            </p>
            <p className="text-justify text-[#525252] text-[16px] font-normal leading-[24px] mx-auto mt-5">
              Our team of highly skilled and compassionate nurses specializes in
              providing a wide range of professional services, including:
            </p>

            <ul className="list-disc pl-5 text-[#525252] text-[16px] font-normal leading-[24px] mt-2">
              <li>
                Critical Care Nursing: Advanced support for patients with
                serious medical conditions.
              </li>
              <li>
                Tracheostomy Nursing: Expert care for patients requiring
                respiratory support.
              </li>
              <li>
                Palliative Care: Comfort-focused support for people with
                life-limiting illnesses.
              </li>
              <li>
                Mother and Baby Care Nursing: Support for new mothers and
                newborns.
              </li>
              <li>
                Travel Abroad Nursing: Specialized care for patients traveling
                internationally.
              </li>
              <li>
                Geriatric Nursing: Comprehensive care for elderly individuals to
                ensure their comfort and dignity.
              </li>
            </ul>
            <p className="text-justify text-[#525252] text-[16px] font-normal leading-[24px] mx-auto mt-5">
              Each nurse in our program is carefully selected and extensively
              trained to provide a unique combination of clinical excellence,
              empathy, and professionalism. Focusing on patient comfort and
              overall well-being, we ensure that our care is as effective as it
              is nurturing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trained_Attendant_at_Home;
