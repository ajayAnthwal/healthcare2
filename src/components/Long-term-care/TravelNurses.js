import React from "react";
import ServiceInquiryForm from "./ServiceInquiryForm";
import TravelNurse from "@/assets/images/longterm/TravelNurses.png";
import nursing from "@/assets/images/longterm/nursing.png";
import nursing2 from "@/assets/images/longterm/nursing2.png";
import InitialAssessmentIcon from "@/assets/images/longterm/InitialAssessmentIcon.png";
import CarePlanDesignIcon from "@/assets/images/longterm/CarePlanDesignIcon.png";
import ServiceDeliveryIcon from "@/assets/images/longterm/ServiceDeliveryIcon.png";
import MonitoringFeedbackIcon from "@/assets/images/longterm/MonitoringFeedbackIcon.png";
import Image from "next/image";

const TravelNurses = () => {
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

  const work = [
    {
      name: "24/7 Availability",
      title:
        "Nurses are available at any time to accompany patients wherever they need to go.",
      image: InitialAssessmentIcon,
    },
    {
      name: "Holistic Care",
      title:
        "Combining medical expertise with emotional support, ensuring patients feel cared for throughout the journey.",
      image: CarePlanDesignIcon,
    },
    {
      name: "Global Reach",
      title: "Suitable for both domestic and international travel.",
      image: ServiceDeliveryIcon,
    },
    {
      name: "Trusted Brand",
      title:
        "Apollo’s name guarantees safety, professionalism, and high-quality care.",
      image: MonitoringFeedbackIcon,
    },
  ];

  return (
    <div>
      <div>
        <p className="mt-5 text-center">
          Apollo&apos;s travel nursing services provide essential support for
          patients who need medical care on the go, ensuring a safe,
          comfortable, and stress-free travel experience.
        </p>
        <ServiceInquiryForm
          imageSrc={TravelNurse}
          formTitle="A Lifeline for Modern Life"
          fields={formFields}
        />
      </div>
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Travel Abroad Nursing
          </h2>
          <p className="text-center text-gray-600  mx-auto">
            Apollo Homecare offers travel abroad nursing services. Apollo
            Homecare also provides other nursing services at home, including
            geriatric nursing and mother and baby care nursing. Apollo Hospitals
            is a global healthcare organization that has over 10,000 nurses
            working in more than 56 specialties. Apollo Hospitals offers a
            variety of opportunities for nurses, including a challenging and
            rewarding work environment.
          </p>
          <p className="text-center text-gray-600 mx-auto mt-3">
            Our Apollo skilled nursing care travels with you wherever you go,
            ensuring continuity of care and peace of mind during your
            international travels. Our Apollo travel nurse is a registered nurse
            or healthcare professional who provides temporary care to patients
            in different locations. Travel nurses are typically assigned
            short-term roles in various settings such as homes, hospitals, or
            rehabilitation centres, depending on the needs of the patient.
          </p>
        </div>
      </section>

      <section className="bg-[#E9F8F9] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
            When is travel nursing useful?
          </h2>
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 px-4">
              <div className="py-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  1. Post-hospitalization care
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Our Apollo nurses assist patients recovering from surgery,
                    injury or illness who require skilled care at home or in a
                    remote location.
                  </li>
                </ul>
              </div>

              <div className="pb-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  2. Chronic illness management
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Our Apollo nurses provide ongoing support for patients with
                    conditions such as diabetes, heart disease or neurological
                    disorders.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  3. Elderly care during travel
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
                src={nursing}
                alt="Newborn baby care"
                className="mx-auto w-[400px]"
                width={400}
                height={374}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 px-4 md:order-1">
              <Image
                src={nursing2}
                alt="Newborn baby care"
                className="mx-auto w-[600px]"
                width={600}
                height={400}
              />
            </div>
            <div className="w-full md:w-1/2 px-4 md:order-2">
              <div className="py-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  4. Maternal and newborn care
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Our Apollo nurses care for new mothers and infants who
                    require assistance while traveling or at temporary
                    residences.
                  </li>
                </ul>
              </div>
              <div className="pb-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  5. Palliative and hospice care
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Our Apollo nurses provide end-of-life care for critically
                    ill patients who wish to remain at home or travel to
                    specific destinations.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  6. Vacation or Holiday Needs
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Our Apollo Nurses assist families who wish to travel with
                    elderly or ill loved ones, but require professional
                    healthcare support during the trip.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <section className="py-10 bg-[#eaf8f8]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-center text-[#000] font-poppins text-2xl sm:text-[32px] font-semibold leading-normal mb-6">
            Importance of Travel Nurses
          </h2>

          <div className="space-y-4 text-gray-700">
            <div className="mt-4 mb-6">
              <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                Continuity of Care
              </h3>
              <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                Apollo Travel Nurses ensure that patients receive continuous and
                efficient care even outside of traditional healthcare
                facilities.
              </p>
            </div>
            <div className="mt-4 mb-6">
              <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                Flexibility
              </h3>
              <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                Our Apollo Nurses adapt to different environments, providing
                seamless care regardless of location.
              </p>
            </div>
            <div className="mt-4 mb-6">
              <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                Expertise in Transitions
              </h3>
              <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                Our Apollo Travel Nurses are skilled at handling transitions,
                such as recovery or rehabilitation after surgery, ensuring a
                smooth and safe progress for the patient.
              </p>
            </div>
            <div className="mt-4 mb-6">
              <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                Peace of Mind
              </h3>
              <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                Families can focus on other aspects of travel or recovery,
                knowing their loved one is in capable hands.
              </p>
            </div>
            <div className="mt-4 mb-6">
              <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                Fewer Hospital Visits
              </h3>
              <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                Apollo Travel Nurses allow patients to travel safely without
                staying in familiar environments or undergoing frequent
                hospitalizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <br />
      <section className="py-10 bg-[#eaf8f8]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-center text-[#000] font-poppins text-2xl sm:text-[32px] font-semibold leading-normal mb-6">
            Why Choose Our Apollo Travel Nurses?
          </h2>

          <div className="space-y-4 text-gray-700">
            <div className="mt-4 mb-6">
              <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                Highly Trained Professionals
              </h3>
              <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                Our Apollo travel nurses are: <br />
                Certified and experienced in various medical specialties. <br />
                Equipped to handle emergency situations and complex medical
                needs.
              </p>
            </div>
            <div className="mt-4 mb-6">
              <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                Personalized Care Plans
              </h3>
              <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                We customize our services to match each patient&apos;s unique needs,
                ensuring individual attention and support.
              </p>
            </div>
            <div className="mt-4 mb-6">
              <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                Comprehensive Services
              </h3>
              <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                Our Apollo travel nurses provide: <br />
                Medication administration and health monitoring. <br />
                Assistance with mobility, hygiene, and nutrition. <br />
                Coordination with doctors and medical facilities when needed.
              </p>
            </div>
            <div className="mt-4 mb-6">
              <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                Compassionate and reliable
              </h3>
              <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                Our Apollo nurses prioritize the comfort and dignity of
                patients. <br />
                They build trust and rapport, creating a positive and supportive
                environment.
              </p>
            </div>
            <div className="mt-4 mb-6">
              <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                Flexible availability
              </h3>
              <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                Whether it&apos;s for a few hours or a longer period, our Apollo
                travel nurses can accommodate your schedule. Available for local
                or international travel.
              </p>
            </div>
            <div className="mt-4 mb-6">
              <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                Peace of mind for families
              </h3>
              <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                With our Apollo nurses, families can focus on travel, work, or
                other commitments without compromising the quality of care for
                their loved ones.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 container mx-auto">
        <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
          How Does It Work?
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {work.map((leader, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-[20px] shadow-[0px_34px_44px_0px_rgba(213,_219,_228,_0.44)] h-[258px]"
            >
              <Image
                src={leader.image}
                alt={leader.name}
                width={128}
                height={128}
                className="mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 font-medium text-[#000] text-center text-[20px] font-poppins leading-normal">
                {leader.name}
              </h3>

              <p className="text-[14px] text-[#6C87AE] text-center font-normal leading-normal">
                {leader.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TravelNurses;
