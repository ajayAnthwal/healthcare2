import React from "react";
import ServiceInquiryForm from "./ServiceInquiryForm";
import inquiry from "@/assets/images/longterm/inquiry.png";
import Apollo from "@/assets/images/longterm/Apollo.png";
import Apollo2 from "@/assets/images/longterm/Apollo2.png";
import InitialAssessmentIcon from "@/assets/images/longterm/InitialAssessmentIcon.png";
import CarePlanDesignIcon from "@/assets/images/longterm/CarePlanDesignIcon.png";
import ServiceDeliveryIcon from "@/assets/images/longterm/ServiceDeliveryIcon.png";
import MonitoringFeedbackIcon from "@/assets/images/longterm/MonitoringFeedbackIcon.png";
import Image from "next/image";

const Senior_Care_Subscription = () => {
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
      name: "Initial Assessment",
      title:
        "A detailed evaluation of the elderly person's health and lifestyle.",
      image: InitialAssessmentIcon,
    },
    {
      name: "Care Plan Design",
      title: "A customized subscription plan tailored to individual needs.",
      image: CarePlanDesignIcon,
    },
    {
      name: "Service Delivery",
      title:
        "Regular visits by caregivers, nurses, or therapists as per the plan.",
      image: ServiceDeliveryIcon,
    },
    {
      name: "Monitoring and Feedback",
      title: "Periodic reviews to adjust the care plan as needed.",
      image: MonitoringFeedbackIcon,
    },
  ];

  return (
    <div>
      <div>
        <p className="mt-5 text-center">
          Caring for those who once cared for us is one of life&apos;s greatest
          honours
        </p>
        <ServiceInquiryForm
          imageSrc={inquiry}
          formTitle="A Lifeline for Modern Life"
          fields={formFields}
        />
      </div>
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What is Eldercare
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Apollo Elder Care Subscription is a customized healthcare and
            support plan specially designed for elderly individuals to ensure
            their well-being, comfort care at home while living in the
            independence of home. It provides access to continuous professional
            care, personalized attention and essential services on a
            subscription basis, making it convenient for families to take
            continuous care of their elderly loved ones. In today&apos;s fast-paced
            life, it has become a bit difficult to take care of your loved ones
            24/7. With age, they have to face many problems with their mental
            confusion and weak memory, our nurse at home helps in removing their
            loneliness and all these problems with love and affection.
          </p>
        </div>
      </section>

      <section className="bg-[#E9F8F9] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
            Key Features of Apollo Elder Care Subscription
          </h2>
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 px-4">
              <h3 className="text-[#000] font-poppins text-[24px] font-semibold my-4">
                Professional Medical Support
              </h3>
              <ul className="text-[#6C87AE] text-base font-normal leading-6 list-disc pl-5">
                <li>
                  Regular health monitoring (vitals, medication management).
                </li>
                <li>
                  Assistance with chronic condition management (diabetes,
                  hypertension, arthritis, etc.).
                </li>
                <li>
                  Access to on-call doctors, nurses, and physiotherapists.
                </li>
              </ul>

              <h3 className="text-[#000] font-poppins text-[24px] font-semibold my-4">
                Personalized Care Plans
              </h3>
              <ul className="text-[#6C87AE] text-base font-normal leading-6 list-disc pl-5">
                <li>
                  Tailored routines based on the elderly person&apos;s health
                  condition and lifestyle.
                </li>
                <li>
                  Customized exercise programs to maintain mobility and fitness.
                </li>
                <li>
                  Support for mental health, including companionship and
                  cognitive exercises.
                </li>
              </ul>

              <h3 className="text-[#000] font-poppins text-[24px] font-semibold my-4">
                Assistance with Daily Activities
              </h3>
              <ul className="text-[#6C87AE] text-base font-normal leading-6 list-disc pl-5">
                <li>
                  Help with personal hygiene, grooming, dressing, and feeding.
                </li>
                <li>
                  Mobility support, including assistance with walking and
                  getting out of bed.
                </li>
                <li>Meal preparation and ensuring a balanced diet.</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <Image
                src={Apollo}
                alt="Newborn baby care"
                className="mx-auto w-[277px]"
                width={277}
                height={308}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 px-4 md:order-1">
              <Image
                src={Apollo2}
                alt="Newborn baby care"
                className="mx-auto w-full max-w-sm"
                width={400}
                height={300}
              />
            </div>
            <div className="w-full md:w-1/2 px-4 md:order-2">
              <h3 className="text-[#000] font-poppins text-[24px] font-semibold my-4">
                Emergency Support
              </h3>
              <ul className="text-[#6C87AE] text-base font-normal leading-6 list-disc pl-5">
                <li>
                  24/7 availability of trained caregivers or nurses to handle
                  emergencies.
                </li>
                <li>
                  Coordination with hospitals and ambulance services if
                  required.
                </li>
              </ul>

              <h3 className="text-[#000] font-poppins text-[24px] font-semibold my-4">
                Companionship and Emotional Support
              </h3>
              <ul className="text-[#6C87AE] text-base font-normal leading-6 list-disc pl-5">
                <li>
                  Trained caregivers provide conversation, social interaction,
                  and recreational activities.
                </li>
                <li>
                  Activities to reduce loneliness and keep the mind engaged.
                </li>
              </ul>

              <h3 className="text-[#000] font-poppins text-[24px] font-semibold my-4">
                Home Care Services
              </h3>
              <ul className="text-[#6C87AE] text-base font-normal leading-6 list-disc pl-5">
                <li>
                  Assistance with maintaining a clean and safe home environment.
                </li>
                <li>
                  Support for errands like grocery shopping or pharmacy visits.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap items-start container mx-auto my-12">
        <div className="w-full md:w-1/2 px-4">
          <h4 className="text-[#000] font-poppins text-[20px] font-semibold mb-4">
            When do you need Apollo&rsquo;s this service?
          </h4>
          <p className="text-justify text-[#6C87AE]  mx-auto">
            Our Apollo mother and baby care services involve providing
            professional support to ensure the health, safety and well-being of
            both mother and baby during the parental, postnatal and infant
            stages. This includes medical help, emotional support, guidance on
            nutrition and assistance with baby care practices. Apollo have
            skilled and experienced nurses who are trained to provide love and
            care to babies and mothers, teach them how to handle the newborn and
            the mother and also train the mother on how to care for the baby.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h4 className="text-[#000] font-poppins text-[20px] font-semibold mb-4">
            Who Can Benefit from Apollo Elder Care Subscription?
          </h4>
          <ul className="text-[#6C87AE] text-base font-normal leading-6 list-disc pl-5">
            <li>
              Elderly individuals living alone who need assistance with daily
              tasks.
            </li>
            <li>
              Seniors recovering from surgery or illness who require
              post-hospital care.
            </li>
            <li>
              Families who are unable to provide constant care due to work or
              distance.
            </li>
            <li>
              Seniors with chronic conditions requiring regular health
              monitoring.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-start container mx-auto my-12">
        <div className="w-full md:w-1/2 px-4">
          <h4 className="text-[#000] font-poppins text-[20px] font-semibold mb-4">
            Who Can Benefit from Apollo Elder Care Subscription?
          </h4>
          <ul className="text-[#6C87AE] text-base font-normal leading-6 list-disc pl-5">
            <li>
              Elderly individuals living alone who need assistance with daily
              tasks.
            </li>
            <li>
              Seniors recovering from surgery or illness who require
              post-hospital care.
            </li>
            <li>
              Families who are unable to provide constant care due to work or
              distance.
            </li>
            <li>
              Seniors with chronic conditions requiring regular health
              monitoring.
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h4 className="text-[#000] font-poppins text-[20px] font-semibold mb-4">
            Why Choose Apollo Elder Care Subscription?
          </h4>
          <ul className="text-[#6C87AE] text-base font-normal leading-6 list-disc pl-5">
            <li>
              Convenience: Scheduled Apollo care plans reduce the need for
              frequent hospital visits.
            </li>
            <li>
              Continuity: Consistent care ensures better management of health
              and daily activities.
            </li>
            <li>
              Affordability: Apollo&apos;s subscription plans are cost-effective
              compared to ad-hoc services.
            </li>
            <li>
              Peace of Mind: Families can rest assured knowing their loved ones
              are in safe hands.
            </li>
          </ul>
        </div>
      </div>

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

      <section className="py-16 px-6 container mx-auto">
        <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
          How Does It Work?
        </h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-start p-6">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Basic Care Plan
            </h3>
            <p className="text-sm text-[#6C87AE] text-center mb-4">
              Daily living support and companionship.
            </p>
            <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
              <li>
                Assistance with personal <strong>hygiene</strong> and{" "}
                <strong>grooming</strong>.
              </li>
              <li>Meal preparation and feeding support.</li>
              <li>
                Light <strong>housekeeping</strong> to maintain a safe home
                environment.
              </li>
              <li>
                Engaging activities to reduce loneliness and promote mental
                well-being.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Advanced Medical Plan
            </h3>
            <p className="text-sm text-[#6C87AE] text-center mb-4">
              Medical care, physiotherapy, and chronic disease management.
            </p>
            <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
              <li>
                Regular <strong>health monitoring</strong> (vitals, medication
                management).
              </li>
              <li>
                Tailored <strong>physiotherapy</strong> sessions to improve
                mobility.
              </li>
              <li>
                Management of chronic conditions like <strong>diabetes</strong>,{" "}
                <strong>hypertension</strong>, and <strong>arthritis</strong>.
              </li>
              <li>
                Scheduled visits from healthcare professionals for ongoing
                assessments.
              </li>
            </ul>
          </div>

          <div className="bg-[#FFFFFF] rounded-lg shadow-lg p-6 w-full md:w-1/3">
            <div className="bg-[#003638] text-white rounded-[50px] -mt-6 mb-4 p-2 text-center">
              Recommended
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Premium Care Plan
            </h3>
            <p className="text-sm text-[#6C87AE] text-center mb-4">
              Comprehensive care with 24/7 assistance and enhanced support.
            </p>
            <ul className="text-sm text-gray-700 list-disc pl-5 space-y-2">
              <li>
                Round-the-clock care from <strong>skilled caregivers</strong>.
              </li>
              <li>
                Emergency support with <strong>rapid response</strong>{" "}
                coordination.
              </li>
              <li>
                Mental health support, including <strong>counseling</strong> and{" "}
                <strong>cognitive exercises</strong>.
              </li>
              <li>
                Assistance with advanced medical needs, such as{" "}
                <strong>post-surgical</strong> care or{" "}
                <strong>palliative care</strong>.
              </li>
              <li>
                Personalized <strong>exercise</strong> and wellness programs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How to Get Started?
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            You can enrol in our Apollo Elder Care Subscription by contacting us
            via phone, email, or our website. Our care manager will guide you
            through the process and recommend the best plan for your loved one&apos;s
            needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Senior_Care_Subscription;
