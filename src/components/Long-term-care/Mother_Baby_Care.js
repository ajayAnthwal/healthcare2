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

      <section className="bg-white mt-7 px-4">
        <div className="container mx-auto">
          <div className="mb-10">
            <h2 className="text-[32px] font-semibold text-left text-[#031432] font-poppins leading-normal">
              What is mother and baby care?
            </h2>
            <p className="text-justify text-[#525252] text-[16px] font-normal leading-[24px] mx-auto mt-5">
              Our Apollo mother and baby care services involve providing
              professional support to ensure the health, safety and well-being
              of both mother and baby during the parental, postnatal and infant
              stages. This includes medical help, emotional support, guidance on
              nutrition and assistance with baby care practices. Apollo have
              skilled and experienced nurses who are trained to provide love and
              care to babies and mothers, teach them how to handle the newborn
              and the mother and also train the mother on how to care for the
              baby.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#E9F8F9] py-5">
        <div className="container mx-auto">
          <h2 className="text-[#031432] text-center font-poppins text-[32px] font-semibold leading-normal mb-3">
            How to Care for a Newborn Baby and Mother
          </h2>
          <div className="flex flex-wrap items-center mb-10">
            <div className="w-full md:w-1/2 px-4">
              <h3 className="text-[#031432] font-poppins text-[20px] font-semibold mb-4">
                What Does a Newborn Baby Need?
              </h3>
              <p className="text-[#2A2A2A] text-[16px] font-semibold leading-6 list-disc">
                Basic Requirements:
              </p>
              <ul className="text-[#2A2A2A] text-[16px] font-normal leading-6 list-disc pl-5">
                <li>
                  Use sterilized feeding bottles, clean clothes, and fresh
                  diapers.
                </li>
                <li>
                  Regular breastfeeding or formula feeding as advised by the
                  doctor.
                </li>
                <li>
                  Gentle baby baths and ensuring the umbilical cord stays dry.
                </li>
                <li>Maintain hydration and avoid overheating during summer.</li>
                <li>Dress them in light, breathable clothes in hot weather.</li>
                <li>
                  Keep babies warm in winter but avoid overheating with too many
                  layers.
                </li>
                <li>
                  Use a humidifier to prevent dry air discomfort in winter.
                </li>
                <li>Follow a consistent sleep schedule for better sleep.</li>
                <li>
                  Create a calm, quiet, and comfortable sleep environment.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 px-4 py-4">
              <Image
                src={mother}
                alt="Newborn baby care"
                className="mx-auto w-[277px]"
                width={400}
                height={308}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center mb-10">
            <div className="w-full md:w-1/2 px-4 md:order-1">
              <Image
                src={motherson}
                alt="Newborn baby care"
                className="mx-auto w-full max-w-sm"
                width={400}
                height={400}
              />
            </div>
            <div className="w-full md:w-1/2 px-4 md:order-2">
              <h3 className="text-[#031432] font-poppins text-[20px] font-semibold mb-4">
                What does a mother need?
              </h3>

              <ul className="text-[#2A2A2A] text-[16px] font-normal leading-6 list-disc pl-5">
                <li>
                  After giving birth to a child, the mother also needs to pay
                  special attention to her diet. The mother should include those
                  items in her diet that are nutritious:
                </li>
                <li>
                  A balanced diet rich in protein, calcium and iron, which helps
                  in breastfeeding and recovery.
                </li>
                <li>
                  Hydration is very important to overcome weakness after
                  delivery - for this, consume plenty of fluids like water, milk
                  and soup. Include seasonal fruits, vegetables, whole grains
                  and healthy fats in your diet.
                </li>
                <li>
                  Emotional support: Encourage yourself to rest and relax from
                  the fatigue and stress after delivery.
                </li>
                <li>Provide counselling or mental health support if needed.</li>
                <li>
                  Postpartum recovery care: Regular gynaecologist checkups.
                  Physical exercises should be done to strengthen the body, for
                  which you will be guided by your physician.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white mt-7 px-4">
        <div className="container mx-auto">
          <div className="mb-10">
            <h2 className="text-[32px] font-semibold text-left text-[#031432] font-poppins leading-normal">
              When do you need Apollo&apos;s this service?
            </h2>
            <p className="text-justify text-[#525252] text-[16px] font-normal leading-[24px] mx-auto mt-5">
              Our Apollo mother and baby care services involve providing
              professional support to ensure the health, safety and well-being
              of both mother and baby during the parental, postnatal and infant
              stages. This includes medical help, emotional support, guidance on
              nutrition and assistance with baby care practices. Apollo have
              skilled and experienced nurses who are trained to provide love and
              care to babies and mothers, teach them how to handle the newborn
              and the mother and also train the mother on how to care for the
              baby.
            </p>
          </div>
        </div>
      </section>

      <div className="mb-10">
        <section className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-[#031432] font-poppins text-[32px] font-semibold leading-normal mb-2">
                When do you need Apollo&apos;s this service?
              </h2>
              <ul className="list-disc pl-5 text-[#525252] text-[16px] font-normal leading-[24px] mt-2">
                <li>After delivery, during the postnatal recovery period.</li>
                <li>
                  If you&apos;re a first-time parent seeking expert guidance.
                </li>
                <li>
                  When the mother or baby needs special medical attention or
                  personalized care.
                </li>
                <li>
                  For support in managing the baby&apos;s feeding, sleep, and
                  hygiene routines.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-[#031432] font-poppins text-[32px] font-semibold leading-normal mb-2">
                Our Apollo Features
              </h2>
              <ul className="list-disc pl-5 text-[#525252] text-[16px] font-normal leading-[24px] mt-2">
                <li>
                  Trained and experienced nurses: Compassionate and skilled
                  nurses who provide round-the-clock care at home.
                </li>
                <li>
                  Gynaecologist consultations: Regular visits or consultations
                  with specialists to monitor the health of the mother and baby.
                </li>
                <li>
                  Customized care plans: Personalized care routines based on
                  individual health conditions and family preferences.
                </li>
                <li>
                  Newborn-specific expertise: Assistance with feeding,
                  diapering, bathing, and soothing the baby.
                </li>
                <li>
                  Nurses who provide love and affection like grandmothers,
                  guiding you on baby massage, bathing, holding techniques to
                  prevent crying, nail cutting, and ensuring the newborn&apos;s
                  comfort.
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
              How Apollo support you at home
            </h2>
            <ul className="list-disc text-justify text-[#525252] text-[16px] font-normal leading-[24px] mx-auto mt-4 pl-5">
              <li>
                <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                  Apollo Home Nursing Services:
                </span>
                Our nurses assist mothers in all aspects of newborn care,
                postpartum recovery, and feeding routines.
              </li>
              <li>
                <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                  Medical Monitoring:
                </span>
                Monitoring vital signs of mother and baby to ensure their best
                possible health.
              </li>
              <li>
                <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                  Parent Education:
                </span>
                Teaching both parents safe ways to handle a newborn,
                breastfeeding techniques, and postpartum care tips.
              </li>
              <li>
                <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                  Emotional Comfort:
                </span>
                Providing compassionate, safe, and patient-centered care to make
                the transition to parenthood smooth and easy.
              </li>
              <li>
                <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                  Flexibility:
                </span>
                Care plans can be adjusted to meet the changing needs of the
                patient.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <section className="bg-[#fff] py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-[#031432] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
              Why choose us?
            </h2>
            <div className="flex flex-wrap items-center mb-12">
              <div className="w-full md:w-1/2 px-4">
                <ul className="list-disc pl-5 text-[#525252] text-[16px] font-normal leading-[24px] mt-2">
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
                  className="mx-auto w-[400px]"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mother_Baby_Care;
