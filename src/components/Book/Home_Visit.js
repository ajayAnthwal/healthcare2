import React from "react";
import inquiry from "@/assets/images/longterm/inquiry.png";
import doctor from "@/assets/images/book/doctor.png";
import choose from "@/assets/images/longterm/choose.png";
import Image from "next/image";

const Home_Visit = () => {
  return (
    <div>
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Home Visit</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            A home visit is a professional healthcare service where medical
            experts provide personalized care directly at the patient&apos;s home,
            reducing the need for clinic or hospital visits.
          </p>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Apollo&apos;s Home Visit service is provided by a team of dedicated and
            trained team providing medical care with a focus on the satisfaction
            and well-being of our patients. Our home visit doctors service
            guarantees that you receive prompt, professional healthcare
            solutions at your leisure, regardless of whether you require
            specialised care or ordinary medical attention.
          </p>
        </div>
      </section>

      <section className="bg-[#E9F8F9] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
            Benefits of Apollo Home Visits
          </h2>
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 px-4">
              <ol className="list-decimal pl-5 text-[#2A2A2A]  text-base font-normal">
                <li className="mb-3">
                  <span>Convenience</span>
                  <br />
                  Get treatment in the comfort of your own home and avoid the
                  waiting room.
                </li>
                <li className="mb-3">
                  <span>Personalized Attention</span>
                  <br />
                  Tailored treatment programs that take into account your
                  particular medical needs.
                </li>
                <li className="mb-3">
                  <span>Family Involvement</span>
                  <br />
                  Encouraging family members and carers to participate in the
                  care process to ensure the patient receives full assistance.
                </li>
                <li className="mb-3">
                  <span>Comfortable</span>
                  <br />
                  Healing in a familiar and stress-free environment along with
                  family members’ involvement in the patient&apos;s care guarantees
                  better care for the patient.
                </li>
                <li>
                  <span>Reduced Risk</span>
                  <br />
                  Apollo&apos;s home visit services minimize the patient&apos;s exposure
                  to infections in public areas.
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

      <section className="py-10">
        <div className="text-center my-8">
          <p className="text-[#6C87AE] text-base font-normal leading-6 max-w-3xl mx-auto">
            Apollo Home Care provides a variety of medical services, such as
            acute care, palliative care, post-operative care, elderly care, and
            primary care, all of which are delivered by our licensed and skilled
            physicians. Whether you need regular check-ups, quick care for
            common illnesses, specialized post-operative care, assistance with
            senior health needs, or compassionate palliative care, our doctor
            home visits provide individualized care catered to your unique
            health requirements and preferences.
          </p>
          <p className="text-[#6C87AE] text-base font-normal leading-6 max-w-3xl mx-auto">
            A few of the Apollo Home Visit categories include- Doctors,
            Physiotherapist, Nurse, Respiratory Therapist, Speech Therapist and
            Dietitian at home
          </p>
        </div>

        <div className="text-center my-8">
          <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
            DOCTORS AT HOME
          </h2>
          <p className="text-[#6C87AE] text-base font-normal leading-6 max-w-3xl mx-auto">
            Apollo Home Care&apos;s Doctor at Home Service brings expert medical care
            to your doorstep, ensuring convenience, comfort, and peace of mind.
            Our skilled doctors provide a range of services, including routine
            checkups, acute care, post-operative support, elderly care, and
            palliative care. Tailored to your unique needs, Apollo homecare make
            healthcare accessible and stress-free, right in the comfort of your
            home.
          </p>
        </div>

        <div>
          <h2 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
            Book your Apollo Doctor at home
          </h2>
          <p className="text-[#6C87AE] text-base font-normal leading-6 max-w-3xl mx-auto">
            Book an Apollo Doctor at home appointment with us now to experience
            the benefits of receiving high-quality medical care in the
            convenience of your home
          </p>

          <div className="flex flex-wrap items-start container mx-auto">
            <div className="w-full md:w-1/2 px-4">
              <h4 className="text-[#000] font-poppins text-[20px] font-semibold mb-4">
                TELE VISIT
              </h4>
              <p className="text-[#6C87AE] text-base font-normal leading-6 list-disc pl-5">
                A virtual medical consultation conducted remotely. It enables
                you to connect with Apollo doctors from the comfort of your
                homes without the need for in-person visits. Tele-visit will
                bridge the gap between patients and providers, making quality
                healthcare more accessible, efficient, and patient-friendly.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h4 className="text-[#000] font-poppins text-[20px] font-semibold mb-4">
                GENERAL PRACTITIONER
              </h4>
              <p className="text-[#6C87AE] text-base font-normal leading-6 list-disc pl-5">
                {" "}
                A General Practitioner (GP) is a medical doctor who provides
                primary and ongoing healthcare for people of all ages. GPs are
                often the first point of contact for patients, offering:
              </p>
              <ol className="text-[#6C87AE] text-base font-normal leading-6 list-none pl-5">
                <li>
                  1. Diagnosis and Treatment for common illnesses and
                  conditions.
                </li>
                <li>
                  2. Preventive Care, including health screenings and
                  vaccinations.
                </li>
                <li>
                  3.Chronic Disease Management, such as diabetes or
                  hypertension.
                </li>
                <li>
                  4. Referrals to Specialists when advanced or specific care is
                  needed.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 text-center">
          {/* SPECIALIST Section */}
          <div className="mb-10">
            <h2 className="text-[#000] font-poppins text-xl sm:text-2xl font-semibold uppercase">
              Specialist
            </h2>
            <p className="text-[#6C87AE] text-base font-normal leading-6 mt-2">
              A specialist is a medical doctor with advanced training and
              expertise in a specific area of medicine, such as cardiology,
              orthopedics, neurology, or oncology. Specialists focus on
              diagnosing, treating, and managing complex or specific health
              conditions that go beyond general medical care.
            </p>
          </div>

          {/* How Apollo's Specialist is Different Section */}
          <div className="mb-10">
            <h3 className="text-[#000] font-poppins text-xl sm:text-2xl font-semibold mb-4">
              How Apollo&apos;s Specialist is Different
            </h3>
            <ul className="text-[#6C87AE] text-base font-normal leading-6 list-none space-y-2">
              <li>World-Class Specialists for expert care</li>
              <li>Integrated Approach for Improved Outcomes</li>
              <li>Innovation - Access to Cutting-Edge Treatments</li>
              <li>Patient-Centric Care for comprehensive Support</li>
              <li>Global Standards</li>
            </ul>
          </div>

          {/* ECG at Home Section */}
          <div className="mb-10">
            <h3 className="text-[#000] font-poppins text-xl sm:text-2xl font-semibold mb-4">
              ECG at Home
            </h3>
            <p className="text-[#6C87AE] text-base font-normal leading-6">
              Apollo&apos;s ECG at Home Service allows you to undergo an
              electrocardiogram (ECG) test in the comfort of your home with your
              loved ones. This service is designed for convenience, enabling
              early detection and monitoring of heart conditions without the
              need to visit a clinic or hospital.
            </p>

            <h4 className="text-[#000] font-poppins text-lg font-semibold mt-6">
              How Does It Work?
            </h4>
            <p className="text-[#6C87AE] text-base font-normal leading-6 mt-2">
              Apollo&apos;s trained technician comes to your home with a portable ECG
              device. This test is done by placing electrodes on your chest to
              record the electrical activity of the heart. The results are
              shared with your doctor for further analysis and diagnosis.
            </p>

            <h4 className="text-[#000] font-poppins text-lg font-semibold mt-6">
              Benefits of ECG at Home
            </h4>
            <ul className="text-[#6C87AE] text-base font-normal leading-6 list-none space-y-2 mt-2">
              <li>Convenient</li>
              <li>Comfortable</li>
              <li>Timely Detection</li>
              <li>Reduced Risk</li>
            </ul>

            <h4 className="text-[#000] font-poppins text-lg font-semibold mt-6">
              How Apollo ECG at Home is Different
            </h4>
            <p className="text-[#6C87AE] text-base font-normal leading-6 mt-2">
              Apollo offers ECG at home with advanced portable equipment handled
              by skilled technicians. The results are seamlessly integrated with
              Apollo&apos;s healthcare network, ensuring prompt analysis and expert
              consultation. Apollo&apos;s commitment to accuracy, efficiency, and
              patient-centric care sets it apart.
            </p>
          </div>

          {/* PHYSIOTHERAPY AT HOME Section */}
          <div className="mb-10">
            <h3 className="text-[#000] font-poppins text-xl sm:text-2xl font-semibold mb-4">
              PHYSIOTHERAPY AT HOME
            </h3>
            <p className="text-[#6C87AE] text-base font-normal leading-6">
              Our Apollo physiotherapists deliver expert care at home to enhance
              mobility and improve quality of life. Collaborating with your
              doctor and Homecare nurses, they address challenges from illness,
              injury, disability, or aging—all in the comfort and safety of your
              home.
            </p>

            <h4 className="text-[#000] font-poppins text-lg font-semibold mt-6">
              Importance of a Physiotherapist
            </h4>
            <p className="text-[#6C87AE] text-base font-normal leading-6 mt-2">
              Physiotherapists play a vital role in improving mobility, managing
              pain, and aiding recovery from injuries, surgeries, or chronic
              conditions. They help restore strength, prevent further
              complications, and enhance overall quality of life through
              tailored rehabilitation programs.
            </p>

            <h4 className="text-[#000] font-poppins text-lg font-semibold mt-6">
              How Apollo is Different
            </h4>
            <p className="text-[#6C87AE] text-base font-normal leading-6 mt-2">
              Apollo homecare sets itself apart by combining expertise,
              compassion, holistic approach, and innovation to deliver
              exceptional physiotherapy services.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="px-6 md:px-20 py-10 space-y-16 container mx-auto">
          <section>
            <h1 className="text-center text-2xl font-bold">
              SPEECH THERAPIST AT HOME
            </h1>
            <p className="text-center text-gray-600 mt-4">
              Apollo&apos;s experienced homecare speech therapists deliver
              personalized rehabilitation sessions to children and adults in the
              comfort of your home. This holistic, home-based approach promotes
              faster recovery and better outcomes.
            </p>
            <div className="mt-8 text-center">
              <h2 className="text-center text-xl font-semibold">
                Importance of Apollo&apos;s Speech Therapist
              </h2>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                <li>Improved Communication</li>
                <li>Addressing Speech Disorders</li>
                <li>Support for Cognitive Skills</li>
                <li>Swallowing and Feeding Therapy</li>
                <li>Aid in Development</li>
                <li>Post-Stroke Recovery</li>
                <li>Tailored Interventions</li>
                <li>Emotional and Social Benefits</li>
              </ul>
            </div>
          </section>

          {/* Nurse Procedures Section */}
          <section>
            <h2 className="text-center text-2xl font-bold">NURSE PROCEDURES</h2>
            <p className="text-center text-gray-600 mt-4">
              Apollo&apos;s  home nursing care services are just a call away & ensure
              compassionate and comprehensive care for you and your loved ones
              whenever you need it. From complex procedures that require skilled
              nurses to all-round care, our Nursing Program ensures that all
              your nursing needs are well taken care of. To ensure safety and
              convenience, services like wound care and urinary catheterization
              are now available in the comfort of your home. Get Professional
              Monitoring, Personalized Care, and Emotional Support with Apollo&apos;s
              home nurse procedures.
            </p>

            <div className="mt-8 space-y-6 text-center">
              <h3 className="text-lg font-semibold">
                What are Nurse Procedures?
              </h3>
              <p className="text-gray-600">
                Apollo&apos;s Nurse procedures involve specialized medical care
                provided by trained nurses to manage a range of healthcare
                needs. These include: Wound dressing, ECG, colostomy bag change,
                Suture Removal, Ryles, ABG Collection, SC/Injection, Enema, IV
                cannula for antibiotics, IV injection, IV infusion, Foley
                catheter, Post-Surgical Care, Vital Sign Monitoring.
              </p>
              <h3 className="text-lg font-semibold">How Apollo is Different</h3>
              <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600">
                <li>Highly Trained and Qualified Nurses</li>
                <li>Comprehensive Care</li>
                <li>Advanced Techniques</li>
                <li>Personalized Attention and 24/7 Support</li>
                <li>Trusted Legacy</li>
              </ul>
            </div>
            <p className="text-center text-gray-600 mt-4">
              With Apollo&apos;s nurse procedures, you receive expert care that
              prioritizes your comfort, recovery, and peace of mind—all
              delivered directly to your home.
            </p>
          </section>

          {/* Medical Procedures Section */}
          <section>
            <h2 className="text-center text-2xl font-bold">
              MEDICAL PROCEDURE
            </h2>
            <p className="text-center text-gray-600 mt-4">
              Apollo homecare&apos;s Medical procedures involve specific techniques
              or interventions performed by healthcare professionals to
              diagnose, treat, or manage a medical condition. They may include
              Albumin infusion, PICC line dressing and removal, TPN infusion,
              wound debridement, chemoport handling, plasma and blood
              transfusion. These procedures are carried out using sterile
              equipment and evidence-based protocols, ensuring patient safety
              and effective care.
            </p>
            <p className="text-center text-gray-600 mt-4">
              A “medical procedure” encompasses a broader range of diagnostic or
              therapeutic interventions that can be performed by a doctor or
              nurse, including more invasive procedures thus requiring
              specialized training and often performed by a doctor or qualified
              nurse available at Apollo.
            </p>
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold">
                Importance of Apollo&apos;s Medical Procedures at Home
              </h3>
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-base font-bold">Accurate Diagnosis</h4>
                  <p className="text-gray-600">
                    Apollo Homecare ensures precise medical evaluations at home,
                    enabling timely and appropriate care for better health
                    outcomes.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-bold">Effective Treatment</h4>
                  <p className="text-gray-600">
                    Expert healthcare professionals deliver personalized
                    treatments at your doorstep, ensuring quality care in a
                    comfortable environment.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-bold">
                    Prevention of Complications
                  </h4>
                  <p className="text-gray-600">
                    Proactive monitoring and timely interventions reduce risks,
                    helping you avoid potential health complications.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-bold">Enhanced Recovery</h4>
                  <p className="text-gray-600">
                    Recover faster in the comfort of your home with tailored
                    medical care designed to meet your unique needs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Respiratory Therapist Section */}
          <section>
            <h2 className="text-center text-2xl font-bold">
              Respiratory Therapist
            </h2>
            <p className="text-center text-gray-600 mt-4">
              A respiratory therapist is a healthcare professional specializing
              in the diagnosis, treatment, and management of respiratory
              conditions. They provide care for patients with breathing
              difficulties, such as asthma, COPD, or those recovering from
              surgery or injury. Their role includes administering oxygen
              therapy, managing ventilators, and offering rehabilitation for
              lung function.
            </p>
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold">
                Importance of Apollo&apos;s Respiratory Therapist
              </h3>
              <p className="text-center text-gray-600 mt-4">
                The importance of Apollo respiratory therapists lies in their
                ability to enhance lung function, improve quality of life, and
                assist in preventing complications associated with respiratory
                conditions. They provide critical care for patients with chronic
                or acute respiratory issues, helping to stabilize their health
                and promote faster recovery.
              </p>
              <p className="text-center text-gray-600 mt-4">
                At Apollo, respiratory therapists work with a skilled healthcare
                team, offering personalized care, advanced respiratory
                therapies, and home-based services to ensure the best possible
                outcomes for patients with respiratory needs. Apollo&apos;s expertise
                and comprehensive approach make it a trusted provider for
                respiratory care.
              </p>
            </div>
          </section>

          {/* Dietitian Section */}
          <section>
            <h2 className="text-center text-2xl font-bold">Dietitian</h2>
            <p className="text-center text-gray-600 mt-4">
              Dietitians are healthcare professionals who specialize in
              nutrition and diet planning. They look at the nutritional needs of
              individuals, create personalized meal plans, and advise on
              managing health conditions, such as diabetes, obesity, or heart
              disease, through diet.
            </p>
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold">
                How Apollo&apos;s Dietitian at Home Works
              </h3>
              <p className="text-gray-600">
                Dietitian at Home services bring personalized nutrition
                counselling to your home. Dietitians evaluate your health,
                lifestyle, and medical history, and create meal plans and
                dietary advice accordingly. They work with you to ensure lasting
                changes that improve overall health and wellness.
              </p>
            </div>
          </section>
        </div>
      </section>

      <div>
        <section>
          <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold">
              Benefits of Dietitian at Home
            </h3>
            <div className="mt-6 space-y-4">
              <div>
                <h4 className="text-base font-bold">Personal guidance</h4>
                <p className="text-gray-600">
                  Customized meal plans based on individual health needs and
                  goals.
                </p>
              </div>
              <div>
                <h4 className="text-base font-bold">Convenience</h4>
                <p className="text-gray-600">
                  Receive professional advice without leaving your home.
                </p>
              </div>
              <div>
                <h4 className="text-base font-bold">Health management</h4>
                <p className="text-gray-600">
                  Help manage chronic conditions, such as diabetes,
                  hypertension, and obesity, through proper diet.
                </p>
              </div>
              <div>
                <h4 className="text-base font-bold">Ongoing support</h4>
                <p className="text-gray-600">
                  Regular follow-ups to track progress and adjust plans as
                  needed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home_Visit;
