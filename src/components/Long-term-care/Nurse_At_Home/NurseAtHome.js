import React from "react";
import ServiceInquiryForm from "../ServiceInquiryForm";
import nurseAtHome from "@/assets/images/longterm/nurse-at-home.png";
import ServiceCards from "./ServiceCards ";
import F_A_Q from "../F_A_Q";
const NurseAtHome = () => {
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
    <>
      <div className="container mx-auto pt-7 pb-5">
        <p className="text-left text-[#031432] font-poppins text-[20px] font-semibold leading-normal">
          Apollo ICU at Home
        </p>
      </div>
      <ServiceInquiryForm
        imageSrc={nurseAtHome}
        formTitle="Enquire Now"
        fields={formFields}
      />

      <section className="bg-white mt-7 px-4">
        <div className="container mx-auto">
          <div className="mb-10">
            <h2 className="text-[32px] font-semibold text-left text-[#031432] font-poppins leading-normal">
              What is ICU at Home?
            </h2>
            <p className="text-justify text-[#525252] text-[16px] font-normal leading-[24px] mx-auto mt-5">
              Home setup is a facility where our family member who is ill or in
              a critical situation can get hospital-like treatment at home.
              These setups are designed keeping the patients in mind, where
              advanced and critical facilities and equipment are served at home.
              Here high-quality equipment is provided by high quality
              professionals to your family member in home environment with loved
              ones at home. These setups include state-of-the-art medical
              equipment like ventilators, monitors, infusion pumps and much
              more.
            </p>
            <p className="text-justify text-[#525252] text-[16px] font-normal leading-[24px] mx-auto mt-5">
              Apollo homecare is known for its blend of expertise, care, and
              trust, offering a unique and reliable Long Term-care experience.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-[32px]  font-semibold text-left text-[#031432] font-poppins leading-normal">
              When does ICU at home work best?
            </h2>
            <ul className=" text-[#525252] text-[16px] font-normal leading-[24px] list-disc pl-5">
              <li>
                <strong className="text-[#2A2A2A] font-semibold ">
                  Recovery after hospitalization:&nbsp;
                </strong>
                When the patient needs long-term care after being discharged.
              </li>
              <li>
                <strong className="text-[#2A2A2A] font-semibold">
                  Chronic conditions:&nbsp;
                </strong>
                For managing long-term illnesses that require constant
                monitoring.
              </li>
              <li>
                <strong className="text-[#2A2A2A] font-semibold">
                  Palliative care:&nbsp;
                </strong>
                Providing comfort and care to critically ill patients.
              </li>
              <li>
                <strong className="text-[#2A2A2A] font-semibold">
                  Infection control:&nbsp;
                </strong>
                <span className="text-[#2A2A2A] font-normal opacity-80">
                  Reducing the risk of hospital-acquired infections by staying
                  in the controlled environment of home.
                </span>
              </li>
              <li>
                <strong className="text-[#2A2A2A] font-semibold">
                  Patient preference:&nbsp;
                </strong>
                For people who want to avoid long-term hospital stays and prefer
                a personalized care experience.
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-[32px]  font-semibold text-left text-[#031432] font-poppins leading-normal">
              Why Choose Apollo&apos;s ICU at Home?
            </h2>
            <ul className="text-[#525252] text-[16px] font-normal leading-[24px] list-disc pl-5">
              <li>
                <strong className="text-[#2A2A2A] font-semibold">
                  Comfort of Home:&nbsp;
                </strong>
                Patients feel more relaxed and recover better in the company and
                closeness of family.
              </li>
              <li>
                <strong className="text-[#2A2A2A] font-semibold">
                  Cost-Effective:&nbsp;
                </strong>
                Avoids hefty hospital bills while maintaining a quality setting.
              </li>
              <li>
                <strong className="text-[#2A2A2A] font-semibold">
                  Family Involvement:&nbsp;
                </strong>
                Allows family members to have an active role in care activities.
              </li>
              <li>
                <strong className="text-[#2A2A2A] font-semibold">
                  Personal Attention:&nbsp;
                </strong>
                Personalized care from our trained nurses according to the needs
                of the patient.
              </li>
              <li>
                <strong className="text-[#2A2A2A] font-semibold">
                  Flexibility:&nbsp;
                </strong>
                Care plans can be adjusted to meet the changing needs of the
                patient.
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-[32px]  font-semibold text-left text-[#031432] font-poppins leading-normal">
              What do we offer?
            </h2>
            <ul className="text-[#525252] text-[16px] font-normal leading-[24px] list-disc pl-5">
              <li>
                <strong className="text-[#2A2A2A] font-semibold">
                  Advanced Equipment:&nbsp;
                </strong>
                Equipment that includes ventilators, oxygen concentrators,
                defibrillators, patient monitors, and more.
              </li>
              <li>
                <strong className="text-[#2A2A2A] font-semibold">
                  Skilled Medical Staff:&nbsp;
                </strong>
                We provide certified nurses and doctors who are trained in
                critical care management.
              </li>
              <li>
                <strong className="text-[#2A2A2A] font-semibold">
                  24/7 Monitoring:&nbsp;
                </strong>
                Round-the-clock monitoring to ensure patient safety and timely
                intervention.
              </li>
              <li>
                <strong className="text-[#2A2A2A] font-semibold">
                  Customized Care Plans:&nbsp;
                </strong>
                Therapies are created based on your needs and preferences.
              </li>
              <li>
                <strong className="text-[#2A2A2A] font-semibold">
                  Emergency Support:&nbsp;
                </strong>
                Our quick response in case of any complications.
              </li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-[32px] font-semibold text-left text-[#031432] font-poppins leading-normal">
              Experience peace of mind with Apollo Homecare&apos;s ICU at Home
              Service
            </h2>
            <p className="text-justify text-[#525252] text-[16px] font-normal leading-[24px] mx-auto mt-5">
              Our mission is to provide compassionate, high-quality critical
              care while prioritizing your comfort, pleasure, and well-being.
              With ICU at Home, you or your loved one can recover safely, with
              dignity, and without compromising medical expertise.
            </p>
          </div>
        </div>
      </section>
      <F_A_Q />
    </>
  );
};

export default NurseAtHome;
