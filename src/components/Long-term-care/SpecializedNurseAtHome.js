import React from "react";
import ServiceInquiryForm from "./ServiceInquiryForm";
import inquiry from "@/assets/images/longterm/inquiry.png";

const SpecializedNurseAtHome = () => {
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
          formTitle="Expert Critical Care in the Comfort of Your Home"
          fields={formFields}
        />
      </div>
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What is ICU at home?
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            ICU at home provides hospital-level care in the comfort of your own
            home. Our skilled healthcare professionals bring advanced medical
            equipment and expertise to deliver comprehensive critical care
            services, ensuring patients receive the highest quality treatment
            while maintaining their privacy and comfort.
          </p>
        </div>
      </section>

      <div>
        <section className="py-10 bg-[#eaf8f8]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-center text-[#000] font-poppins text-2xl sm:text-[32px] font-semibold leading-normal mb-6">
              When does ICU at home work best?
            </h2>

            <div className="space-y-4 text-gray-700">
              <div className="mt-4 mb-6">
                <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                  Recovery after hospitalization
                </h3>
                <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                  When the patient requires long-term care after being
                  discharged.
                </p>
              </div>
              <div className="mt-4 mb-6">
                <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                  Chronic conditions
                </h3>
                <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                  For managing chronic illnesses with continuous monitoring.
                </p>
              </div>
              <div className="mt-4 mb-6">
                <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                  Palliative care
                </h3>
                <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                  Providing specialized care for terminally ill patients.
                </p>
              </div>
              <div className="mt-4 mb-6">
                <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                  Infection control
                </h3>
                <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                  Reducing the risk of hospital acquired infections.
                </p>
              </div>
              <div className="mt-4 mb-6">
                <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                  Patient preference
                </h3>
                <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                  For people who prefer to receive professional care in the
                  comfort and privacy of their homes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#B0E0E1] my-11">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-6">
              Why Choose Apollo&rsquo;s ICU at Home?
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-[#000] text-center font-poppins text-[24px] font-semibold leading-normal">
                  Comfort of Home
                </h3>
                <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                  Patients feel more relaxed and recover faster in the comfort
                  of their family.
                </p>
              </div>
              <div>
                <h3 className="text-[#000] text-center font-poppins text-[24px] font-semibold leading-normal">
                  Cost-Effective
                </h3>
                <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                  Includes hospital facilities while remaining cost-efficient.
                </p>
              </div>
              <div>
                <h3 className="text-[#000] text-center font-poppins text-[24px] font-semibold leading-normal">
                  Family Involvement
                </h3>
                <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                  Allows family members to actively participate in the care
                  process.
                </p>
              </div>
              <div>
                <h3 className="text-[#000] text-center font-poppins text-[24px] font-semibold leading-normal">
                  Personal Attention
                </h3>
                <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                  Dedicated care teams ensuring attention to specific needs of
                  the patient.
                </p>
              </div>
              <div>
                <h3 className="text-[#000] text-center font-poppins text-[24px] font-semibold leading-normal">
                  Flexibility
                </h3>
                <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                  Custom plans to adapt to the changing needs of the patient.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#E6F5F5]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal py-8">
              What do we offer?
            </h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-[#000] text-center font-poppins text-2xl font-semibold leading-normal">
                  Advanced equipment
                </h3>
                <p className="text-[#6C87AE] text-center text-base font-normal leading-6">
                  Equipment that includes ventilators, oxygen monitors, suction
                  units, patient monitors, and more.
                </p>
              </div>
              <div>
                <h3 className="text-[#000] text-center font-poppins text-2xl font-semibold leading-normal">
                  Skilled medical staff
                </h3>
                <p className="text-[#6C87AE] text-center text-base font-normal leading-6">
                  We provide certified nurses and paramedics for effective
                  management.
                </p>
              </div>
              <div>
                <h3 className="text-[#000] text-center font-poppins text-2xl font-semibold leading-normal">
                  24/7 monitoring
                </h3>
                <p className="text-[#6C87AE] text-center text-base font-normal leading-6">
                  Round-the-clock monitoring to ensure timely medical
                  interventions.
                </p>
              </div>
              <div>
                <h3 className="text-[#000] text-center font-poppins text-2xl font-semibold leading-normal">
                  Customized care plans
                </h3>
                <p className="text-[#6C87AE] text-center text-base font-normal leading-6">
                  Therapy and treatment plans tailored to the patient’s
                  condition and requirements.
                </p>
              </div>
              <div>
                <h3 className="text-[#000] text-center font-poppins text-2xl font-semibold leading-normal">
                  Emergency support
                </h3>
                <p className="text-[#6C87AE] text-center text-base font-normal leading-6">
                  Quick response teams for critical situations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-[#031432] text-center font-poppins text-[32px] font-semibold leading-normal">
              Experience peace of mind with Apollo Homecare&rsquo;s <br /> ICU
              at Home Service.
            </h3>

            <p className="text-[#6C87AE] text-center text-base font-normal leading-6 mt-4 w-[814px] mx-auto">
              Our mission is to provide professional ICU-level care services in
              the comfort of your home. Please contact us for personalized care
              plans, so your needs are met with quality and safety.
            </p>
          </div>
        </section>

        <section className="py-10 bg-[#eaf8f8]">
          <div className="container mx-auto px-4">
            <h2 className="text-[#031432] text-center font-poppins text-[32px] font-semibold leading-normal mb-6">
              FAQ
            </h2>

            <div className="space-y-4">
              <details className="bg-[#009A9F] p-4 rounded-lg flex justify-between items-center">
                <summary className="text-white text-center font-poppins text-base font-medium leading-6 cursor-pointer">
                  What is ICU at Home?
                </summary>
                <p className="text-[#003638] font-poppins text-sm font-semibold leading-6 mt-2">
                  ICU at home is a program that allows patients to receive
                  intensive care services in the comfort of their own home.
                </p>
              </details>
              <details className="bg-[#009A9F] p-4 rounded-lg flex justify-between items-center">
                <summary className="text-white text-center font-poppins text-base font-medium leading-6 cursor-pointer">
                  Why should someone consider ICU at Home?
                </summary>
                <p className="text-[#003638] font-poppins text-sm font-semibold leading-6 mt-2">
                  It provides benefits like improved recovery rates, reduced
                  infection risks, and more affordable services than hospital
                  stays.
                </p>
              </details>
              <details className="bg-[#009A9F] p-4 rounded-lg flex justify-between items-center">
                <summary className="text-white text-center font-poppins text-base font-medium leading-6 cursor-pointer">
                  Are the services available 24/7?
                </summary>
                <p className="text-[#003638] font-poppins text-sm font-semibold leading-6 mt-2">
                  Yes, our services include 24/7 medical support and emergency
                  response.
                </p>
              </details>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpecializedNurseAtHome;
