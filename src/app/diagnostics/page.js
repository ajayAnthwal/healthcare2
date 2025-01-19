import React from "react";
import doctor from "@/assets/images/diagnostics/doctor.png";
import Image from "next/image";

const Diagnostics = () => {
  return (
    <div>
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <div className="mt-8 mb-8">
            <h2 className="text-[32px] font-semibold text-center text-[#031432] font-poppins leading-normal">
              Home Diagnostics
            </h2>
            <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px] max-w-3xl mx-auto mt-4">
              Apollo&apos;s Diagnostics at Home service brings high-quality,
              reliable health checkups and tests to the comfort of your home.
              From routine blood tests to advanced diagnostics, Apollo ensures
              timely and accurate results, making health monitoring easier and
              stress-free.
            </p>
          </div>

          <div className="mt-8 mb-8">
            <h2 className="text-[24px] font-semibold text-center text-[#031432] font-poppins leading-normal">
              Benefits of Apollo&apos;s Diagnostics at Home
            </h2>

            <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px]  max-w-3xl mx-auto mt-4">
              Apollo&apos;s Diagnostics at Home offers supreme convenience by
              allowing scheduled tests at your preferred time and location,
              excluding the need to travel or wait. Apollo ensures safety by
              minimising the risk of infection in healthcare facilities while
              providing comfort in a familiar environment. With quick sample
              collection and prompt report delivery, it saves time and
              simplifies health monitoring.
            </p>
          </div>

          <div className="mt-8 mb-8">
            <h2 className="text-[24px] font-semibold text-center text-[#031432] font-poppins leading-normal">
              What Makes Apollo Different
            </h2>
            <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px] max-w-3xl mx-auto mt-4">
              Apollo stands out with its trusted capability, offering a wide
              range of diagnostic services delivered by skilled professionals
              while following strict safety protocols. Backed by advanced
              technology and state-of-the-art laboratories, Apollo ensures
              accurate and reliable results. With seamless booking, sample
              collection at home and digital report access, along with follow-up
              support, Apollo offers a comprehensive and patient-centric
              diagnostic experience.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-10"
        style={{
          background:
            "linear-gradient(189deg, #E6F5F5 -74.5%, #C1EFEF 160.14%)",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-[#031432] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
            Why Apollo Homecare
          </h2>
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 px-4">
              <ol className="list-decimal pl-5 text-[#2A2A2A] text-base  text-[16px] leading-[24px]">
                <li className="mb-3">
                  <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                    Advanced Diagnostic Centre
                  </span>
                  <br />
                  Apollo offers state-of-the-art diagnostic equipment, ensuring
                  accurate, efficient, and reliable testing for all patients.
                </li>
                <li className="mb-3">
                  <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                    Hygiene and Security
                  </span>
                  <br />
                  At Apollo, we prioritize hygiene, sanitation, and a safe
                  environment. We maintain uncompromising safety standards to
                  protect our patients at every step.
                </li>
                <li>
                  <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                    Easy Accessibility
                  </span>
                  <br />
                  Our doorstep sample collection service ensures convenience and
                  a hassle-free experience. With precise and trustworthy test
                  results, Apollo supports accurate diagnoses and effective
                  treatment plans.
                </li>
              </ol>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <Image
                src={doctor}
                alt="Newborn baby care"
                className="mx-auto w-[400px]"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 container mx-auto">
        <div className="text-center my-8">
          <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px]">
            Apollo Home Care provides a variety of medical services, such as
            acute care, palliative care, post-operative care, elderly care, and
            primary care, all of which are delivered by our licensed and skilled
            physicians. Whether you need regular check-ups, quick care for
            common illnesses, specialized post-operative care, assistance with
            senior health needs, or compassionate palliative care, our doctor
            home visits provide individualized care catered to your unique
            health requirements and preferences.
            <br />
            <br />A few of the Apollo Home Visit categories include- Doctors,
            Physiotherapist, Nurse, Respiratory Therapist, Speech Therapist and
            Dietitian at home
          </p>
        </div>

        <div className="text-center py-10">
          <h2 className="text-[#031432] text-center font-poppins text-[24px] font-semibold leading-normal mb-8">
            Diagnostic Services Provided by Apollo
          </h2>

          <ul className="list-none text-center text-[#525252] text-[16px] font-normal leading-[24px]">
            <li>Diabetic Packages</li>
            <li>Basic Master Health Checkup</li>
            <li>Lipid Profile Screening</li>
            <li>Thyroid Screening</li>
            <li>Preventive Health Checkup - Male</li>
            <li>Preventive Health Checkup - Female</li>
            <li>Sr. Citizen Health Checkup - Male</li>
            <li>Sr. Citizen Health Checkup - Female</li>
            <li>Healthy Heart</li>
            <li>Premium Whole Body Health Checkup - Male</li>
            <li>Premium Whole Body Health Checkup - Female</li>
            <li>Liver Function Tests</li>
            <li>Kidney Function Test</li>
            <li>Thyroid Function Test</li>
            <li>Cardiac Markers</li>
            <li>Arterial Blood Gases</li>
            <li>Serum Electrolytes</li>
            <li>Sleep Study</li>
            <li>Ambulatory Blood Pressure Monitoring</li>
            <li>Holter Monitoring Patch</li>
            <li>X-Ray at Home</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Diagnostics;
