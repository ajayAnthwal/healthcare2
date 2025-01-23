import React from "react";
import ServiceInquiryForm from "./ServiceInquiryForm";
import TravelNurse from "@/assets/images/longterm/TravelNurses.png";
import nursing from "@/assets/images/longterm/nursing.png";
import nursing2 from "@/assets/images/longterm/nursing2.png";
import Apollo2 from "@/assets/images/longterm/Apollo2.png";
import Image from "next/image";
import Link from "next/link";

const Specially_Rehab_Packages = () => {
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
      <section>
        <div>
          <nav className="flex flex-col items-center gap-5 py-4">
            <h1 className="text-[32px] font-semibold text-[#031432] leading-normal text-center font-poppins">
              Specially Rehab Packages
            </h1>
            <ul className="flex justify-center space-x-8">
              <Link href="#legacy">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  NEURO
                </li>
              </Link>
              <Link href="#leadership">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  CARDIAC
                </li>
              </Link>
              <Link href="#vision">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  STROKE
                </li>
              </Link>
              <Link href="#pillars">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  ORTHO
                </li>
              </Link>
              <Link href="#awards">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  ONCOLOGY
                </li>
              </Link>

              <Link href="#awards">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  TRANSPLANT
                </li>
              </Link>

              <Link href="#awards">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  PALLIATIVE
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </section>
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Neuro Rehab</h2>
          <p className="text-center text-[#6C87AE]  mx-auto">
            The Neuro Rehab Program by Apollo Homecare is designed to assist
            patients recovering from conditions such as stroke, Parkinson&apos;s
            disease, and brain or spine surgery. These conditions can
            significantly impact a person&apos;s movement, speech, and overall
            quality of life. Our program focuses on helping patients regain
            strength, mobility, and independence through personalized and
            evidence-based physiotherapy.
          </p>
          <p className="text-center text-[#393939] mx-auto mt-3">
            Physician+  Physiotherapist + Nursework closely withNeuro Physician
            / Neuro Surgeon  in creating a customized care plan to meet the
            needs of the patient at home.
          </p>
        </div>
      </section>

      <section className="py-10 bg-[#eaf8f8]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-center text-[#000] font-poppins text-2xl sm:text-[32px] font-semibold leading-normal mb-6">
            Common Challenges Patients Face
          </h2>

          <div className="space-y-4 text-gray-700">
            <div className="mt-4 mb-6">
              <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                Stroke
              </h3>
              <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                Weakness on one side of the body. Difficulty or loss of speech.
                Vision problems. Loss of bladder and
                <br /> bowel control. Emotional changes and mood swings. Memory,
                judgment, and problem-solving difficulties
              </p>
            </div>
            <div className="mt-4 mb-6">
              <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                Parkinson&apos;s Disease
              </h3>
              <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                Stiff muscles and imbalance. Slower movement and mobility.
                Increased risk of falls.
              </p>
            </div>
            <div className="mt-4 mb-6">
              <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                Brain and Spinal Surgery Recovery
              </h3>
              <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                Risk of complications like weakness, reduced mobility, and
                chronic pain.
              </p>
            </div>
          </div>
        </div>
      </section>

      <br />

      <section className="bg-[#E9F8F9] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
            How Apollo&apos;s Neuro Rehab Program Helps
          </h2>
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 px-4">
              <div className="py-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  1. Faster Recovery
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Comprehensive physiotherapy to restore movement and
                    strength.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Exercises tailored to improve coordination, balance, and
                    mobility.
                  </li>
                </ul>
              </div>

              <div className="pb-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  2. Complication Prevention
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Focused care to avoid issues like stiffness, joint pain, and
                    bedsores.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Strengthening exercises to reduce the risk of falls or
                    further injury.
                  </li>
                </ul>
              </div>

              <div className="pb-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  3. Regain Independence
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Training for daily activities like walking, dressing, and
                    eating.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Speech therapy for patients with communication challenges.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  4. Emotional and Mental Support
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Activities to improve memory, problem-solving, and mood.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Support for emotional control and confidence building.
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <Image
                src={Apollo2}
                alt="Newborn baby care"
                className="mx-auto w-[400px]"
                width={400}
                height={374}
              />
            </div>
          </div>
          <div className="py-4">
            <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
              Benefits of Choosing Apollo Homecare
            </h2>
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
                  1. Expert Care
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    A dedicated team of skilled physiotherapists and healthcare
                    professionals.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Protocol-driven care based on international guidelines.
                  </li>
                </ul>
              </div>
              <div className="pb-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  2. Customized Plans
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Individualized programs focusing on the patient&apos;s
                    specific challenges and strengths.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Flexible scheduling to suit the patient&apos;s convenience.{" "}
                  </li>
                </ul>
              </div>

              <div className="pb-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  3. Recovery at Home
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Professional care delivered in the comfort of your home.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Reduced hospital visits and a focus on a familiar and
                    supportive environment.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  4. Holistic Support
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Comprehensive care addressing physical, emotional, and
                    social recovery.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Coordination with doctors for seamless follow-up and
                    progress monitoring.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />

      <section className="bg-white py-16 px-4 ">
        <div className="container mx-auto">
          <h2 className="text-[32px] font-bold text-center mb-12">
            Program Highlights
          </h2>
          <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2 text-center">
            <strong className="text-[#007D9E] font-lato text-[16px] font-bold leading-[24px]">
              Duration :
            </strong>
            Customized plans for 3 to 4 weeks based on the patient&apos;s
            condition.
          </p>
          <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2 text-center">
            <strong className="text-[#007D9E] font-lato text-[16px] font-bold leading-[24px]">
              Therapy Sessions :
            </strong>
            Delivered by experienced physiotherapists and healthcare
            professionals.
          </p>
          <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2 text-center">
            <strong className="text-[#007D9E] font-lato text-[16px] font-bold leading-[24px]">
              Personalized Approach:
            </strong>
            Care tailored to the patient&apos;s specific needs and recovery
            goals.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-4 ">
        <div className="container mx-auto">
          <h2 className="text-[32px] font-bold text-center mb-12">
            Who Can Benefit?
          </h2>
          <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2 text-center">
            Patients recovering from stroke or neurological conditions.
          </p>
          <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2 text-center">
            Individuals diagnosed with Parkinson&apos;s disease.
          </p>
          <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2 text-center">
            Patients recovering from brain or spinal surgery.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-4 ">
        <div className="container mx-auto">
          <h2 className="text-[32px] font-bold text-center mb-12">
            Take the First Step to Recovery
          </h2>
          <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2 text-center">
            With Apollo Homecare&apos;s Neuro Rehab Program, patients receive
            compassionate and expert care to help them regain independence and
            return to normal life.
          </p>
          <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2 text-center">
            Contact us today to learn more about our program or to schedule a
            consultation!
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-4 ">
        <div className="container mx-auto">
          <h2 className="text-[32px] font-bold text-center mb-12">
            Cardiac Rehab Program: Recovery and Prevention
          </h2>
          <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2 text-center">
            Apollo Home care&apos;s Heart Rehab Program is designed to assist
            patients with heart conditions such as congestive heart failure
            (CHF), coronary artery disease (CAD) and valvular heart disease. The
            program in Apollo focuses on helping patients recover, prevent
            complications and effectively manage their condition through
            comprehensive care and lifestyle changes.
          </p>
        </div>
      </section>

      <br />
      <section className="py-10 bg-[#eaf8f8]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-center text-[#000] font-poppins text-2xl sm:text-[32px] font-semibold leading-normal mb-6">
            Who Needs Heart Rehab?
          </h2>

          <div className="space-y-4 text-gray-700">
            <div className="mt-4 mb-6">
              <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                Patients with Congestive Heart Failure (CHF)
              </h3>
              <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                CHF increases the risk of periodic symptoms and complications.{" "}
                <br />
                Pre-emptive disease management is essential for better outcomes.
              </p>
            </div>
            <div className="mt-4 mb-6">
              <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                Patients with Coronary Artery Disease (CAD)
              </h3>
              <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                CAD can lead to heart attacks and requires long-term care.{" "}
                <br />
                Supervised rehabilitation helps improve heart health and prevent
                recurrence.
              </p>
            </div>
            <div className="mt-4 mb-6">
              <h3 className="text-black text-center font-poppins text-2xl font-semibold leading-normal">
                Patients with Valvular Heart Disease
              </h3>
              <p className="text-[#6C87AE] text-center  text-base font-normal leading-6">
                These patients are prone to complications without proper
                monitoring and treatment. <br />A structured rehab program aids
                in better recovery and long-term management
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />

      <section className="bg-[#E9F8F9] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
            How Heart Rehab Helps
          </h2>
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 px-4">
              <div className="py-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  1. Early Recovery
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Controlled exercises to improve cardiovascular fitness and
                    reduce symptoms.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Focused therapy to strengthen the heart and improve stamina.
                  </li>
                </ul>
              </div>

              <div className="pb-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  2. Complication Prevention
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Close monitoring of vital signs and symptoms to detect early
                    warning signs.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Education on managing risk factors like high blood pressure,
                    diabetes, and cholesterol.
                  </li>
                </ul>
              </div>

              <div className="pb-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  3. Lifestyle Changes
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Guidance on a heart-healthy diet to manage weight and reduce
                    strain on the heart.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Stress management techniques to improve mental well-being.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  4. Regain Independence
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Helping patients resume daily activities safely and
                    confidently.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Building physical and emotional strength to lead a normal
                    life.
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <Image
                src={Apollo2}
                alt="Heart Rehab Care"
                className="mx-auto w-[400px]"
                width={400}
                height={374}
              />
            </div>
          </div>

          <div className="py-4">
            <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
              Why Choose Apollo Homecare&apos;s Heart Rehab Program?
            </h2>
          </div>

          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 px-4 md:order-1">
              <Image
                src={nursing2}
                alt="Heart Rehab Program"
                className="mx-auto w-[600px]"
                width={600}
                height={400}
              />
            </div>
            <div className="w-full md:w-1/2 px-4 md:order-2">
              <div className="py-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  1. Expert Care
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Highly trained cardiologists, physiotherapists, and
                    healthcare professionals.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Personalized guidance for every patient&apos;s unique
                    condition.
                  </li>
                </ul>
              </div>

              <div className="pb-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  2. Evidence-Based Care
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Programs based on international cardiac rehabilitation
                    guidelines.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Focus on sustainable lifestyle changes for long-term heart
                    health.
                  </li>
                </ul>
              </div>

              <div className="pb-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  3. Home-Based Care
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Professional care delivered in the comfort of your home.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Eliminates the need for frequent hospital visits while
                    ensuring continuous monitoring.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  4. Comprehensive Support
                </h3>
                <ul>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Physical, emotional, and nutritional support to enhance
                    overall recovery.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Counseling for patients and families to manage expectations
                    and challenges.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section className="bg-[#E9F8F9] py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
            Program Highlights
          </h2>
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full px-4">
              <div className="py-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  Customized Duration
                </h3>
                <p className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                  Care plans tailored to individual needs and recovery goals.
                </p>
              </div>

              <div className="pb-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  Supervised Exercise
                </h3>
                <p className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                  Gradual and safe physical activity to boost recovery.
                </p>
              </div>

              <div className="pb-4">
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  Health Education
                </h3>
                <p className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                  Teaching patients and families about heart care, medications,
                  and lifestyle adjustments.
                </p>
              </div>

              <div>
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  Continuous Monitoring
                </h3>
                <p className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                  Regular checks to ensure progress and prevent setbacks.
                </p>
              </div>
            </div>
          </div>

          <div className="py-4">
            <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
              Benefits of Apollo Heart Rehab
            </h2>
          </div>

          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full px-4">
              <ul className="list-none pl-5">
                <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                  Faster and safer recovery.
                </li>
                <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                  Reduced risk of recurrent heart-related issues.
                </li>
                <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                  Improved quality of life and independence.
                </li>
                <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                  Better management of existing risk factors and symptoms.
                </li>
              </ul>
            </div>
          </div>

          <div className="py-4">
            <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
              Take control of your heart health
            </h2>
          </div>

          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full px-4">
              <p className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                With Apollo Home care&apos;s Heart Rehab Program, you will
                receive compassionate, expert care personalised to your specific
                needs. Our team is dedicated to helping you recover fully and
                live a healthier, more independent life.
              </p>
              <p className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px] mt-4">
                Contact us today to learn more or schedule your first
                consultation!
              </p>
            </div>
          </div>

          <div className="py-4">
            <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
              Congestive Heart Failure (CHF) Management Plan
            </h2>
          </div>

          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full px-4">
              <p className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                At Apollo Homecare, we understand the challenges of living with
                congestive heart failure (CHF). Our personalized care plans
                focus on helping patients manage their condition, prevent
                complications, and improve their worth of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E9F8F9] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
            Key Components of Our CHF Management Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  1. Cardiac Rehabilitation
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Customized exercise programs designed based on the
                    patient&apos;s tolerance level.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Gradual and safe physical activity to strengthen the heart
                    and improve stamina.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  2. Daily Monitoring
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Regular checks on body weight to detect fluid retention
                    early.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Monitoring vital signs to prevent exacerbations.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  3. Managing Comorbidities
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Assessment and control of associated conditions like
                    diabetes, hypertension, and kidney disease.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Ensuring an integrated approach to overall health
                    management.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  4. Lifestyle Modifications
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Assistance in adopting a heart-healthy lifestyle.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Education and support to build sustainable habits.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  5. Medication Management
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Administering medications strictly as prescribed by the
                    physician.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Regular reminders and assistance with adherence to the
                    treatment plan.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#2A2A2A] font-poppins text-[16px] font-semibold leading-[24px]">
                  6. Dietary Support
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Guidance on following a low-sodium diet to reduce fluid
                    buildup and heart strain.
                  </li>
                  <li className="opacity-80 text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                    Recommendations for a balanced, heart-healthy diet.
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

export default Specially_Rehab_Packages;
