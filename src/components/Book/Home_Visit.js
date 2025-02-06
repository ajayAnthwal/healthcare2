import React from "react";
import doctor from "@/assets/images/book/doctor.png";
import homevisit from "@/assets/images/book/homevisit.png";
import Image from "next/image";
import service1 from "@/assets/images/homepage/service1.png";
import service2 from "@/assets/images/homepage/service2.png";
import service3 from "@/assets/images/homepage/service3.png";
import service4 from "@/assets/images/homepage/service4.png";
import service5 from "@/assets/images/homepage/service5.png";
import service6 from "@/assets/images/homepage/service6.png";
import service7 from "@/assets/images/homepage/service7.png";
import service8 from "@/assets/images/homepage/service8.png";
import service9 from "@/assets/images/homepage/service9.png";

const Home_Visit = () => {
  const services = [
    { title: "ICU Setup at Home", image: service1 },
    { title: "Specialised Nurse at home", image: service2 },
    { title: "Trained Attendant at home", image: service3 },
    { title: "Mother & Child Care", image: service4 },
    { title: "Senior Care Subscription", image: service5 },
    { title: "Travel Nurses", image: service6 },
    { title: "Specialty Rehab Packages", image: service7 },
    { title: "Doctor Home Consult", image: service8 },
    { title: "Physiotherapy at home", image: service9 },
  ];

  return (
    <div>
      <div className="hidden md:block bg-[url('/bg.png')] bg-cover bg-center">
        <div className="relative mx-auto h-auto flex flex-col items-center md:bg-cover bg-no-repeat">
          <div className="absolute top-0 left-[93px] transform -translate-x-1/2 bg-white text-gray-700 text-sm px-4 py-1 shadow-md rounded-br-[37px]">
            Home &gt;&gt;&gt; Home Visit
          </div>
          <div className="hidden md:flex  flex-col md:flex-row items-center w-full pl-8">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl md:text-[60px] font-medium leading-[105px] tracking-[-1.2px] font-poppins text-white">
                Expert Healthcare, Right at Your Doorstep
              </h1>
              <p className="text-white text-xl font-normal leading-[39.06px] tracking-[-0.002px] py-[35px]">
                Convenient, personalized medical care delivered in the comfort
                of your home.
              </p>
              <button className="px-[18.9px] py-[6.3px] bg-white text-[#003638] rounded-[10.08px] font-poppins text-[18.9px] font-medium leading-[39.06px] tracking-[-0.191px] flex justify-center items-center gap-[10.08px] shadow-md hover:bg-gray-200">
                Enquire Now
              </button>
            </div>

            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <Image
                src={homevisit}
                alt="Care at Home"
                width={791}
                height={508}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-[#031432] mb-10">
          Our Comprehensive Services
        </h1>

        {/* First Row - 4 Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-center">
          {services.slice(0, 4).map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-[20px] p-3 md:p-4 flex flex-col items-center text-center w-auto h-auto md:w-[231px] md:h-[316px]"
            >
              <Image
                src={service.image}
                alt={service.title}
                className="mb-3 w-20 h-20 md:w-[150px] md:h-[150px]"
              />
              <h3 className="text-sm md:text-[20px] font-semibold text-[#031432] mb-3 md:mb-4">
                {service.title}
              </h3>
              <button className="w-full md:w-[211px] mt-auto flex items-center justify-center gap-2 text-xs md:text-[16px] text-[#009A9F] border border-[#009A9F] rounded-full px-2 md:p-4 py-1 hover:bg-[#009A9F] hover:text-white">
                Enquire Now
              </button>
            </div>
          ))}
        </div>

        {/* Second Row - 4 Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-center mt-6">
          {services.slice(4, 8).map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-[20px] p-3 md:p-4 flex flex-col items-center text-center w-auto h-auto md:w-[231px] md:h-[316px]"
            >
              <Image
                src={service.image}
                alt={service.title}
                className="mb-3 w-20 h-20 md:w-[150px] md:h-[150px]"
              />
              <h3 className="text-sm md:text-[20px] font-semibold text-[#031432] mb-3 md:mb-4">
                {service.title}
              </h3>
              <button className="w-full md:w-[211px] mt-auto flex items-center justify-center gap-2 text-xs md:text-[16px] text-[#009A9F] border border-[#009A9F] rounded-full px-2 md:p-4 py-1 hover:bg-[#009A9F] hover:text-white">
                Enquire Now
              </button>
            </div>
          ))}
        </div>

        {/* Third Row - 1 Card */}
        <div className="flex justify-center mt-6">
          {services.slice(8, 9).map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-[20px] p-3 md:p-4 flex flex-col items-center text-center w-auto h-auto md:w-[231px] md:h-[316px]"
            >
              <Image
                src={service.image}
                alt={service.title}
                className="mb-3 w-20 h-20 md:w-[150px] md:h-[150px]"
              />
              <h3 className="text-sm md:text-[20px] font-semibold text-[#031432] mb-3 md:mb-4">
                {service.title}
              </h3>
              <button className="w-full md:w-[211px] mt-auto flex items-center justify-center gap-2 text-xs md:text-[16px] text-[#009A9F] border border-[#009A9F] rounded-full px-2 md:p-4 py-1 hover:bg-[#009A9F] hover:text-white">
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-white py-10">
        <div className="container mx-auto">
          <h2 className="text-[#031432] text-center font-poppins text-[32px] font-semibold leading-normal mb-12">
            Home Visit
          </h2>
          <p className="text-justify text-[#525252] text-[16px] font-normal leading-[24px]">
            A home visit is a professional healthcare service where medical
            experts provide personalized care directly at the patient&apos;s
            home, reducing the need for clinic or hospital visits. Apollo&apos;s
            Home Visit service is provided by a team of dedicated and trained
            team providing medical care with a focus on the satisfaction and
            well-being of our patients. Our home visit doctors service
            guarantees that you receive prompt, professional healthcare
            solutions at your leisure, regardless of whether you require
            specialised care or ordinary medical attention.
          </p>
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
            Benefits of Apollo Home Visits
          </h2>
          <div className="flex flex-wrap items-center mb-12">
            <div className="w-full md:w-1/2 px-4">
              <ol className="list-decimal text-[#2A2A2A] text-base font-normal">
                <li className=" text-[#2A2A2A] text-[16px] font-normal leading-[24px]">
                  <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                    Convenience
                  </span>
                  <br />
                  Get treatment in the comfort of your own home and avoid the
                  waiting room.
                </li>
                <li className=" text-[#2A2A2A] text-[16px] font-normal leading-[24px]  py-3">
                  <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                    Personalized Attention
                  </span>
                  <br />
                  Tailored treatment programs that take into account your
                  particular medical needs.
                </li>
                <li className=" text-[#2A2A2A] text-[16px] font-normal leading-[24px]  py-3">
                  <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                    Family Involvement
                  </span>
                  <br />
                  Encouraging family members and carers to participate in the
                  care process to ensure the patient receives full assistance.
                </li>
                <li className=" text-[#2A2A2A] text-[16px] font-normal leading-[24px]  py-3">
                  <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                    Comfortable
                  </span>
                  <br />
                  Healing in a familiar and stress-free environment along with
                  family members’ involvement in the patient&apos;s care
                  guarantees better care for the patient.
                </li>
                <li className=" text-[#2A2A2A] text-[16px] font-normal leading-[24px]  py-3">
                  <span className="text-[#2A2A2A] text-[16px] font-semibold leading-[24px]">
                    Reduced Risk
                  </span>
                  <br />
                  Apollo&apos;s home visit services minimize the patient&apos;s
                  exposure to infections in public areas.
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
        <div className="text-center py-10">
          <p className="text-[#525252] text-justify text-[16px] font-normal leading-[24px]">
            Apollo Home Care provides a variety of medical services, such as
            acute care, palliative care, post-operative care, elderly care, and
            primary care, all of which are delivered by our licensed and skilled
            physicians. Whether you need regular check-ups, quick care for
            common illnesses, specialized post-operative care, assistance with
            senior health needs, or compassionate palliative care, our doctor
            home visits provide individualized care catered to your unique
            health requirements and preferences. A few of the Apollo Home Visit
            categories include- Doctors, Physiotherapist, Nurse, Respiratory
            Therapist, Speech Therapist and Dietitian at home
          </p>
        </div>

        <div className="text-center my-8">
          <h2 className="text-[#031432] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
            DOCTORS AT HOME
          </h2>

          <p className="text-[#525252] text-center text-[16px] font-normal leading-[24px]">
            Apollo Home Care&apos;s Doctor at Home Service brings expert medical
            care to your doorstep, ensuring convenience, comfort, and peace of
            mind. Our <br /> skilled doctors provide a range of services,
            including routine checkups, acute care, post-operative support,
            elderly care, and palliative care. Tailored <br /> to your unique
            needs, Apollo homecare make healthcare accessible and stress-free,
            right in the comfort of your home.
          </p>
        </div>
      </section>

      <section className="bg-[#E6F5F5] py-8">
        <div>
          <h2 className="text-[#000000] text-center font-poppins text-[32px] font-semibold leading-normal">
            Book your Apollo Doctor at home
          </h2>
          <p className="text-[#525252] text-center text-[16px] font-normal leading-[24px] my-3">
            Book an Apollo Doctor at home appointment with us now to experience
            the benefits of receiving high-quality medical care in the
            convenience of your home
          </p>

          <div className="flex flex-wrap items-start container mx-auto my-8">
            <div className="w-full md:w-1/2 px-4">
              <h4 className="text-[#000] text-center font-poppins text-[24px] font-semibold leading-normal">
                TELE VISIT
              </h4>

              <p className="text-[#525252]  text-[16px] font-normal leading-[24px]">
                A virtual medical consultation conducted remotely. It enables
                you to connect with Apollo doctors from the comfort of your
                homes without the need for in-person visits. Tele-visit will
                bridge the gap between patients and providers, making quality
                healthcare more accessible, efficient, and patient-friendly.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h4 className="text-[#000] text-center font-poppins text-[24px] font-semibold leading-normal">
                GENERAL PRACTITIONER
              </h4>
              <p className="text-[#525252]  text-[16px] font-normal leading-[24px]">
                A General Practitioner (GP) is a medical doctor who provides
                primary and ongoing healthcare for people of all ages. GPs are
                often the first point of contact for patients, offering:
              </p>
              <ol className="text-[#525252]  text-[16px] font-normal leading-[24px]">
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
          <p className="text-[#525252] text-center  text-[16px] font-normal leading-[24px] py-9">
            An Apollo’s General Practitioner (GP) is essential as the first
            point of contact for healthcare, offering diagnosis, treatment, and
            preventive care.They <br /> manage chronic conditions, coordinate
            specialist referrals, and ensure holistic, patient-centred care,
            fostering long-term health and well-being.
          </p>

          <div className="mb-10">
            <h2 className="text-[#031432] text-center font-poppins text-[24px] font-semibold leading-normal uppercase py-3">
              Specialist
            </h2>

            <p className="text-[#525252] text-center  text-[16px] font-normal leading-[24px]">
              A specialist is a medical doctor with advanced training and
              expertise in a specific area of medicine, such as cardiology,
              orthopedics, neurology, or <br /> oncology. Specialists focus on
              diagnosing, treating, and managing complex or specific health
              conditions that go beyond general medical care.
            </p>
          </div>

          <div className="py-10">
            <h3 className="text-[#000] text-center font-poppins text-[32px] font-semibold leading-normal mb-4">
              How Apollo&apos;s Specialist is Different
            </h3>
            <ul className="text-[#525252] text-center text-[18px] font-medium leading-[30px] list-none space-y-2">
              <li>World-Class Specialists for expert care</li>
              <li>Integrated Approach for Improved Outcomes</li>
              <li>Innovation - Access to Cutting-Edge Treatments</li>
              <li>Patient-Centric Care for comprehensive Support</li>
              <li>Global Standards</li>
            </ul>
          </div>

          {/* ECG at Home Section */}
          <div className="py-10">
            <h3 className="text-[#031432] text-center font-poppins text-[32px] font-semibold leading-normal mb-4">
              ECG at Home
            </h3>

            <p className="text-[#525252] text-center text-[16px] font-normal leading-6">
              Apollo&apos;s ECG at Home Service allows you to undergo an
              electrocardiogram (ECG) test in the comfort of your home with your
              loved ones. This service <br /> is designed for convenience,
              enabling early detection and monitoring of heart conditions
              without the need to visit a clinic or hospital.
            </p>

            <h4 className="text-[#031432] text-center font-poppins text-[24px] font-semibold leading-normal mt-4">
              How Does It Work?
            </h4>
            <p className="text-[#525252] text-center  text-[16px] font-normal leading-6 mt-2">
              Apollo&apos;s trained technician comes to your home with a
              portable ECG device. This test is done by placing electrodes on
              your chest to record the <br />
              electrical activity of the heart. The results are shared with your
              doctor for further analysis and diagnosis.
            </p>

            <h4 className="text-[#031432] text-center font-poppins text-[28px] font-semibold leading-normal mt-8">
              Benefits of ECG at Home
            </h4>
            <ul className="text-[#000] text-center text-[24px] font-semibold leading-normal space-y-2">
              <li>Convenient</li>
              <li>Comfortable</li>
              <li>Timely Detection</li>
              <li>Reduced Risk</li>
            </ul>

            <h4 className="text-[#031432] text-center font-poppins text-[24px] font-semibold leading-normal mt-9">
              How Apollo ECG at Home is Different
            </h4>

            <p className="text-[#525252] text-center text-[16px] font-normal leading-[24px] mt-4">
              Apollo offers ECG at home with advanced portable equipment handled
              by skilled technicians. The results are seamlessly integrated with
              Apollo&apos;s <br /> healthcare network, ensuring prompt analysis
              and expert consultation. Apollo&apos;s commitment to accuracy,
              efficiency, and patient-centric care sets it apart.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-[#031432] text-center font-poppins text-[32px] font-semibold leading-normal">
              PHYSIOTHERAPY AT HOME
            </h3>
            <p className="text-[#525252] text-center text-[16px] font-normal leading-[24px] mt-4">
              Our Apollo physiotherapists deliver expert care at home to enhance
              mobility and improve quality of life. Collaborating with your
              doctor and <br /> Homecare nurses, they address challenges from
              illness, injury, disability, or aging—all in the comfort and
              safety of your home.
            </p>

            <div className="py-10">
              <h4 className="text-[#031432] text-center font-poppins text-[24px] font-semibold leading-normal">
                Importance of a Physiotherapist
              </h4>
              <p className="text-[#525252] text-center text-[16px] font-normal leading-[24px] mt-4">
                Physiotherapists play a vital role in improving mobility,
                managing pain, and aiding recovery from injuries, surgeries, or
                chronic conditions. They help
                <br /> restore strength, prevent further complications, and
                enhance overall quality of life through tailored rehabilitation
                programs.
              </p>
            </div>
            <div className="py-1">
              <h4 className="text-[#031432] text-center font-poppins text-[24px] font-semibold leading-normal">
                How Apollo is Different
              </h4>
              <p className="text-[#525252] text-center text-[16px] font-normal leading-[24px] mt-4">
                Apollo homecare sets itself apart by combining expertise,
                compassion, holistic approach, and innovation to deliver
                exceptional physiotherapy <br /> services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="px-6 md:px-20 py-10 space-y-16 container mx-auto">
          <section>
            <h1 className="text-[#031432] text-center font-poppins text-[32px] font-semibold leading-normal">
              SPEECH THERAPIST AT HOME
            </h1>
            <p className="text-[#525252] text-center text-[16px] font-normal leading-[24px]">
              Apollo&apos;s experienced homecare speech therapists deliver
              personalized rehabilitation sessions to children and adults in the
              comfort of your home. This <br />
              holistic, home-based approach promotes faster recovery and better
              outcomes.
            </p>

            <div className="mt-8 text-center">
              <h2 className="text-[#031432] text-center font-poppins text-[32px] font-semibold leading-normal">
                Importance of Apollo&apos;s Speech Therapist
              </h2>

              <ul className="list-none list-inside space-y-2 text-[#2A2A2A] text-center text-[20px] font-semibold leading-[42px] py-5">
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

          {/* css end  */}

          {/* Nurse Procedures Section */}
          <section>
            <h2 className="text-center text-[32px] font-poppins font-semibold leading-normal text-[#031432]">
              NURSE PROCEDURES
            </h2>

            <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px]">
              Apollo&apos;s  home nursing care services are just a call away &
              ensure compassionate and comprehensive care for you and your loved
              ones whenever you need it. From complex procedures that require
              skilled nurses to all-round care, our Nursing Program ensures that
              all your nursing needs are well taken care of. To ensure safety
              and convenience, services like wound care and urinary
              catheterization are now available in the comfort of your home. Get
              Professional Monitoring, Personalized Care, and Emotional Support
              with Apollo&apos;s home nurse procedures.
            </p>

            <div className="mt-8 space-y-6 text-center">
              <h3 className="text-center text-[24px] font-poppins font-semibold leading-normal text-[#031432]">
                What are Nurse Procedures?
              </h3>
              <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px]">
                Apollo&apos;s Nurse procedures involve specialized medical care
                provided by trained nurses to manage a range of healthcare
                needs. These include: Wound dressing, ECG, colostomy bag change,
                Suture Removal, Ryles, ABG Collection, SC/Injection, Enema, IV
                cannula for antibiotics, IV injection, IV infusion, Foley
                catheter, Post-Surgical Care, Vital Sign Monitoring.
              </p>
              <h3 className="text-center text-[24px] font-poppins font-semibold leading-normal text-[#031432]">
                How Apollo is Different
              </h3>
              <ul className="list-none list-inside mt-2 space-y-2 text-gray-600">
                <li>Highly Trained and Qualified Nurses</li>
                <li>Comprehensive Care</li>
                <li>Advanced Techniques</li>
                <li>Personalized Attention and 24/7 Support</li>
                <li>Trusted Legacy</li>
              </ul>
            </div>
            <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px] mt-4">
              With Apollo&apos;s nurse procedures, you receive expert care that
              prioritizes your comfort, recovery, and peace of mind—all
              delivered directly to your home.
            </p>
          </section>

          {/* Medical Procedures Section */}
          <section>
            <h2 className="text-center text-[32px] font-poppins font-semibold leading-normal text-[#031432]">
              MEDICAL PROCEDURE
            </h2>
            <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px]  mt-4">
              Apollo homecare&apos;s Medical procedures involve specific
              techniques or interventions performed by healthcare professionals
              to diagnose, treat, or <br /> manage a medical condition. They may
              include Albumin infusion, PICC line dressing and removal, TPN
              infusion, wound debridement, chemoport <br />
              handling, plasma and blood transfusion. These procedures are
              carried out using sterile equipment and evidence-based protocols,
              ensuring patient safety and effective care.
            </p>
            <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px]  mt-4">
              A “medical procedure” encompasses a broader range of diagnostic or
              therapeutic interventions that can be performed by a doctor or
              nurse, <br />
              including more invasive procedures thus requiring specialized
              training and often performed by a doctor or qualified nurse
              available at Apollo.
            </p>
            <div className="mt-8 text-center">
              <h3 className="text-center text-[28px] font-poppins font-semibold leading-normal text-[#031432]">
                Importance of Apollo&apos;s Medical Procedures at Home
              </h3>
              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="text-center text-[24px] font-poppins font-semibold leading-normal text-[#000]">
                    Accurate Diagnosis
                  </h4>
                  <p className="text-center text-[#6C87AE] text-[16px] font-normal leading-[24px]  mt-4">
                    Apollo Homecare ensures precise medical evaluations at home,
                    enabling timely and appropriate care for better health
                    outcomes.
                  </p>
                </div>
                <div>
                  <h4 className="text-center text-[24px] font-poppins font-semibold leading-normal text-[#000]">
                    Effective Treatment
                  </h4>
                  <p className="text-center text-[#6C87AE] text-[16px] font-normal leading-[24px]  mt-4">
                    Expert healthcare professionals deliver personalized
                    treatments at your doorstep, ensuring quality care in a
                    comfortable environment.
                  </p>
                </div>
                <div>
                  <h4 className="text-center text-[24px] font-poppins font-semibold leading-normal text-[#000]">
                    Prevention of Complications
                  </h4>
                  <p className="text-center text-[#6C87AE] text-[16px] font-normal leading-[24px]  mt-4">
                    Proactive monitoring and timely interventions reduce risks,
                    helping you avoid potential health complications.
                  </p>
                </div>
                <div>
                  <h4 className="text-center text-[24px] font-poppins font-semibold leading-normal text-[#000]">
                    Enhanced Recovery
                  </h4>
                  <p className="text-center text-[#6C87AE] text-[16px] font-normal leading-[24px]  mt-4">
                    Recover faster in the comfort of your home with tailored
                    medical care designed to meet your unique needs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Respiratory Therapist Section */}
          <section>
            <h2 className="text-center text-[32px] font-poppins font-semibold leading-normal text-[#031432]">
              Respiratory Therapist
            </h2>
            <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px]  mt-4">
              A respiratory therapist is a healthcare professional specializing
              in the diagnosis, treatment, and management of respiratory
              conditions. They provide care for patients with breathing
              difficulties, such as asthma, COPD, or those recovering from
              surgery or injury. Their role includes administering oxygen
              therapy, managing ventilators, and offering rehabilitation for
              lung function.
            </p>
            <div className="mt-8 text-center">
              <h3 className="text-center text-[24px] font-poppins font-semibold leading-normal text-[#031432]">
                Importance of Apollo&apos;s Respiratory Therapist
              </h3>
              <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px]  mt-4">
                The importance of Apollo respiratory therapists lies in their
                ability to enhance lung function, improve quality of life, and
                assist in preventing complications associated with respiratory
                conditions. They provide critical care for patients with chronic
                or acute respiratory issues, helping to stabilize their health
                and promote faster recovery.
              </p>
              <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px]  mt-4">
                At Apollo, respiratory therapists work with a skilled healthcare
                team, offering personalized care, advanced respiratory
                therapies, and home-based services to ensure the best possible
                outcomes for patients with respiratory needs. Apollo&apos;s
                expertise and comprehensive approach make it a trusted provider
                for respiratory care.
              </p>
            </div>
          </section>

          {/* Dietitian Section */}
          <section>
            <h2 className="text-center text-[32px] font-poppins font-semibold leading-normal text-[#031432]">
              Dietitian
            </h2>
            <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px]  mt-4">
              Dietitians are healthcare professionals who specialize in
              nutrition and diet planning. They look at the nutritional needs of
              individuals, create personalized meal plans, and advise on
              managing health conditions, such as diabetes, obesity, or heart
              disease, through diet.
            </p>
            <div className="mt-8 text-center">
              <h3 className="text-center text-[24px] font-poppins font-semibold leading-normal text-[#031432]">
                How Apollo&apos;s Dietitian at Home Works
              </h3>
              <p className="text-center text-[#525252] text-[16px] font-normal leading-[24px] mt-4">
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
            <h3 className="text-center text-[28px] font-poppins font-semibold leading-normal text-[#031432]">
              Benefits of Dietitian at Home
            </h3>
            <div className="space-y-4">
              <div className="py-5">
                <h4 className="text-center text-[24px] font-poppins font-semibold leading-normal text-[#000]">
                  Personal guidance
                </h4>
                <p className="text-center text-[#6C87AE] text-[16px] font-normal leading-[24px]">
                  Customized meal plans based on individual health needs and
                  goals.
                </p>
              </div>
              <div>
                <h4 className="text-center text-[24px] font-poppins font-semibold leading-normal text-[#000]">
                  Convenience
                </h4>
                <p className="text-center text-[#6C87AE] text-[16px] font-normal leading-[24px]">
                  Receive professional advice without leaving your home.
                </p>
              </div>
              <div className="py-5">
                <h4 className="text-center text-[24px] font-poppins font-semibold leading-normal text-[#000]">
                  Health management
                </h4>
                <p className="text-center text-[#6C87AE] text-[16px] font-normal leading-[24px]">
                  Help manage chronic conditions, such as diabetes,
                  hypertension, and obesity, through proper diet.
                </p>
              </div>
              <div>
                <h4 className="text-center text-[24px] font-poppins font-semibold leading-normal text-[#000]">
                  Ongoing support
                </h4>
                <p className="text-center text-[#6C87AE] text-[16px] font-normal leading-[24px]">
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
