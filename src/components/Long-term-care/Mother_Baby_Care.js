import React from "react";
import ServiceInquiryForm from "./ServiceInquiryForm";
import inquiry from "@/assets/images/longterm/inquiry.png";
import mother from "@/assets/images/longterm/mother.png";
import motherson from "@/assets/images/longterm/mother_son.png";
import choose from "@/assets/images/longterm/choose.png";
import Image from "next/image";

const Mother_Baby_Care = () => {
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
        <p className="mt-5 text-center">
          Bringing peace of mind to moms and comfort to babies, one home at a
          time
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
            What is mother and baby care?
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
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
      </section>

      <section className="bg-[#E9F8F9] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
            How to Care for a Newborn Baby and Mother
          </h2>
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 px-4">
              <h3 className="text-[#000] font-poppins text-[24px] font-semibold mb-4">
                What Does a Newborn Baby Need?
              </h3>
              <ul className="text-[#6C87AE] text-base font-normal leading-6 list-disc pl-5">
                <li>
                  Feeding requirements: feeding bottles, clean clothes, and
                  fresh diapers.
                </li>
                <li>
                  Regular health checkups and timely vaccinations scheduled by
                  the doctors.
                </li>
                <li>
                  Ensuring proper hygiene and keeping the baby warm and cozy.
                </li>
                <li>Monitoring the baby&rsquo;s sleeping habits.</li>
                <li>Providing a safe and caring environment.</li>
                <li>Using baby-safe cleaning products and toys.</li>
                <li>Calm, soothing, and comfortable surroundings.</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <Image
                src={mother}
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
                src={motherson}
                alt="Newborn baby care"
                className="mx-auto w-full max-w-sm"
                width={400}
                height={300}
              />
            </div>
            <div className="w-full md:w-1/2 px-4 md:order-2">
              <h3 className="text-[#000] font-poppins text-[24px] font-semibold mb-4">
                What Does a Mother Need?
              </h3>
              <ul className="text-[#6C87AE] text-base font-normal leading-6 list-disc pl-5">
                <li>
                  After giving birth to a child, the mother also needs to pay
                  special attention to her diet.
                </li>
                <li>
                  A balanced diet with proteins, vitamins, and carbohydrates is
                  necessary.
                </li>
                <li>
                  Take care of her health by consuming foods like fruits,
                  vegetables, and whole grains.
                </li>
                <li>Get plenty of rest and maintain hydration.</li>
                <li>
                  Regular light exercises for physical and mental well-being.
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mb-8">
            <h3 className="text-[#000] font-poppins text-[24px] font-semibold mb-4">
              When Do You Need Apollo&rsquo;s Service?
            </h3>

            <p className="text-[#6C87AE] text-base font-normal leading-6 max-w-3xl mx-auto">
              Our Apollo Home Nurse at Home service provides professional
              support to ensure the health, safety, and comfort of both mother
              and child. We are equipped with skilled nurses to handle the
              recovery period and help with newborn baby care practices. Apollo
              focuses on personalized care and attention to ease the stress for
              mothers, boosting them to heal faster and bond better with their
              little ones.
            </p>
          </div>

          <div className="flex flex-wrap items-start">
            <div className="w-full md:w-1/2 px-4">
              <h4 className="text-[#000] font-poppins text-[20px] font-semibold mb-4">
                When do you need Apollo&rsquo;s service?
              </h4>
              <ul className="text-[#6C87AE] text-base font-normal leading-6 list-disc pl-5">
                <li>After delivery, during the post-recovery period.</li>
                <li>
                  For assistance with physical recovery and breastfeeding.
                </li>
                <li>
                  Help in managing the baby&rsquo;s feeding, sleep, and hygiene
                  routines.
                </li>
                <li>After delivery, during the postnatal recovery period.</li>
                <li>
                  If you&rsquo;re a first-time parent seeking expert guidance.
                </li>
                <li>
                  When the mother or baby needs special medical attention or
                  personalized care.
                </li>
                <li>
                  For support in managing the baby&rsquo;s feeding, sleep, and
                  hygiene routines.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h4 className="text-[#000] font-poppins text-[20px] font-semibold mb-4">
                Our Apollo Features
              </h4>
              <ul className="text-[#6C87AE] text-base font-normal leading-6 list-disc pl-5">
                <li>
                  Trained and experienced nurses: Compassionate and skilled
                  nurses who provide round-the-clock care at home.
                </li>
                <li>
                  Gynaecologist consultations: Regular visits or consultations
                  with specialists to monitor the health of mother and baby.
                </li>
                <li>
                  Personalized care: Tailored plans for mothers and babies.
                </li>
                <li>
                  Customized care plans: Customized care routines based on
                  individual health conditions and family preferences.
                </li>
                <li>
                  On-demand assistance: Flexible and readily available support.
                </li>
                <li>
                  Comprehensive care: Covers both medical and emotional aspects.
                </li>
                <li>
                  Newborn-specific expertise: Help with effective feeding,
                  diapering, bathing, and soothing your baby.
                </li>
                <li>
                  Nurses who provide love and affection like grandmas and
                  grandmothers who teach you how to massage, bathe, how to hold
                  the baby so that he does not cry, when to cut nails and how to
                  do it so that the newborn does not face any discomfort.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div>
        <section className="py-10 bg-[#eaf8f8]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-center text-[#000] font-poppins text-2xl sm:text-[32px] font-semibold leading-normal mb-6">
              How Apollo support you at home
            </h2>

            <div className="space-y-4 text-gray-700">
              <div className="mt-4 mb-6">
                <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                  Apollo Home Nursing Services
                </h3>
                <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                  Our nurses assist mothers in all aspects of newborn care,
                  postpartum recovery and feeding routines
                </p>
              </div>
              <div className="mt-4 mb-6">
                <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                  Medical Monitoring
                </h3>
                <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                  Monitoring vital signs of mother and baby health and ensuring
                  that mother and baby are in the best possible health.
                </p>
              </div>
              <div className="mt-4 mb-6">
                <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                  Parent Education
                </h3>
                <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                  Teaching both parent safe ways to handle a newborn after the
                  birth of a newborn, breastfeeding techniques and postpartum
                  care tips.
                </p>
              </div>
              <div className="mt-4 mb-6">
                <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                  Emotional Comfort
                </h3>
                <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                  Providing compassionate, safe and patient-centred care to make
                  the transition to work and life after becoming a parent smooth
                  and easy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fff] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
              Why choose us?
            </h2>
            <div className="flex flex-wrap items-center mb-12">
              <div className="w-full md:w-1/2 px-4">
                <ul className="text-[#6C87AE] text-base font-normal leading-6 list-disc pl-5">
                  <li>
                    Certified and experienced staff who provide a loving and
                    family-friendly service to mother and newborn.
                  </li>
                  <li>
                    Holistic care for both mother and baby including diet,
                    safety, hygiene, relaxation techniques, baby massages,
                    feeding, and mother exercise.
                  </li>
                  <li>
                    On-call gynaecologist consultation for expert advice when
                    needed.
                  </li>
                  <li>
                    Customized support to meet your family&apos;s unique needs.
                  </li>

                  <li>24/7 consultation and advice available.</li>
                  <li>Nurse facility at home when needed.</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <Image
                  src={choose}
                  alt="Newborn baby care"
                  className="mx-auto w-[277px]"
                  width={277}
                  height={308}
                />
              </div>
            </div>
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

export default Mother_Baby_Care;
