import React from "react";
import Vaccination from "@/assets/images/vaccination/Vaccination.png";
import Image from "next/image";
import Link from "next/link";

const Partner = () => {
  const pillars = [
    {
      title: "Employee Wellness Programs",
      description:
        "Comprehensive health packages, including routine health check-ups, vaccination drives, and mental wellness initiatives. Personalized healthcare solutions for employees with chronic conditions, such as diabetes or hypertension, ensuring continuity of care.",
    },
    {
      title: "On-Site Health Services",
      description:
        "Health camps, diagnostic screenings, and on-demand consultations at your workplace. Dedicated nursing staff and paramedics for corporate medical rooms.",
    },
    {
      title: "Preventive Healthcare Initiatives",
      description:
        "Workshops and webinars on preventive care, nutrition, and stress management. Lifestyle assessments and tailored programs to minimize absenteeism and boost overall health.",
    },
    {
      title: "CSR Collaborations",
      description:
        "Join hands with Apollo HomeCare to implement Corporate Social Responsibility (CSR) projects that address healthcare gaps in underserved communities. Co-create campaigns focusing on preventive health awareness and outreach.",
    },
  ];

  const doctor = [
    {
      title: "Referral Network",
      description:
        "Refer patients to Apollo HomeCare for home-based recovery, elderly care, or post-surgical rehabilitation. Ensure continuity of care with periodic updates on patient progress.",
    },
    {
      title: "Professional Collaboration",
      description:
        "Partner with Apollo HomeCare to co-manage patients requiring multidisciplinary care at home. Utilize our trained nursing staff, physiotherapists, and diagnostic services to optimize patient outcomes.",
    },
    {
      title: "Expand Your Practice",
      description:
        "Offer your patients the convenience of receiving consultations and treatments at home, supported by Apollo's trusted team. Gain access to cutting-edge tools like telemedicine platforms, remote monitoring systems, and home diagnostic services.",
    },
  ];

  const Corporates = [
    {
      title:
        "Enhanced patient satisfaction with personalized homecare services.",
    },
    {
      title:
        "Increased practice reach through Apollo’s extensive patient network.",
    },
    {
      title:
        "Access to professional training and resources to stay updated with the latest trends in homecare.",
    },
  ];

  const Benefits = [
    {
      title:
        "Improved employee health and morale, resulting in higher productivity",
    },
    {
      title:
        "Cost-effective healthcare management tailored to the needs of your workforce.",
    },
    {
      title:
        "Brand value enhancement through CSR initiatives that make a tangible social impact.",
    },
  ];

  return (
    <div>
      <section className="bg-white py-8 px-4">
        <div className="container mx-auto">
          <div className="mt-8 mb-8">
            <h2 className="text-[32px] font-semibold text-center text-[#031432] font-poppins leading-normal">
              PARTNER WITH US
            </h2>
            <nav className="flex flex-col items-center gap-5 py-4">
              <ul className="flex justify-center space-x-8">
                <Link href="#legacy">
                  <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                    Corporates
                  </li>
                </Link>
                <Link href="#leadership">
                  <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                    Doctors
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className="py-5 px-6 bg-white container mx-auto">
        <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
          For Corporates
        </h2>
        <p className="text-[#3A3A3A] text-center  text-[16px] italic font-normal leading-[24px] py-4">
          Empowering Organizations with Tailored Healthcare Solutions
        </p>
        <p className="text-[#3A3A3A] text-center  text-[16px] italic font-normal leading-[24px]">
          Apollo HomeCare collaborates with corporates to design and deliver
          customized healthcare programs that promote employee wellness, enhance
          productivity, and support organizational goals.
        </p>
        <p className="text-[#3A3A3A] text-center  text-[16px] italic font-normal leading-[24px] pt-4">
          Corporate Partnership Opportunities:
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index}>
              <h3 className="text-[24px] font-semibold text-[#031432] text-center font-poppins leading-normal">
                {pillar.title}
              </h3>
              <p className="mt-2 text-[16px] font-normal text-[#6C87AE] text-center  leading-[24px]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className=" container mx-auto mt-3">
        <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
          Benefits for Doctors
        </h2>

        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Benefits.map((leader, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-[20px] shadow-[0px_34px_44px_0px_rgba(213,_219,_228,_0.44)] p-[10px]"
            >
              <p className="text-[14px] text-[#6C87AE] text-center font-normal leading-normal">
                {leader.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-5 px-6 bg-white container mx-auto mt-8">
        <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
          For Doctors
        </h2>
        <p className="text-[#3A3A3A] text-center  text-[16px] italic font-normal leading-[24px] py-4">
          Enhancing Healthcare Delivery Through Strategic Collaborations
        </p>
        <p className="text-[#3A3A3A] text-center  text-[16px] italic font-normal leading-[24px]">
          Apollo HomeCare invites doctors to partner with us to expand their
          practice and provide patients with seamless, hospital-quality care at
          home. With access to Apollo&apos;s advanced infrastructure and expertise,
          doctors can deliver enhanced care experiences while focusing on their
          core clinical responsibilities.
        </p>
        <p className="text-[#3A3A3A] text-center  text-[16px] italic font-normal leading-[24px] pt-4">
          Partnership Opportunities for Doctors:
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8">
          {doctor.map((pillar, index) => (
            <div key={index}>
              <h3 className="text-[24px] font-semibold text-[#031432] text-center font-poppins leading-normal">
                {pillar.title}
              </h3>
              <p className="mt-2 text-[16px] font-normal text-[#6C87AE] text-center  leading-[24px]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className=" container mx-auto mt-3">
        <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
          Benefits for Doctors
        </h2>

        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Corporates.map((leader, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-[20px] shadow-[0px_34px_44px_0px_rgba(213,_219,_228,_0.44)] p-[10px]"
            >
              <p className="text-[14px] text-[#6C87AE] text-center font-normal leading-normal">
                {leader.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="py-10 mt-8   "
        style={{
          background: "var(--green-light-active, #B0E0E1)",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-[#031432] text-center font-poppins text-[32px] font-semibold leading-normal mb-8">
            How to Get Started
          </h2>
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
              <h3 className="text-[#000000] text-center font-poppins text-[24px] font-semibold leading-normal mb-4">
                For Corporates
              </h3>

              <p className="text-[#565656] text-center text-[16px] font-normal leading-[24px] mb-2">
                Reach out to our Corporate Relations Team at <br />
                <a
                  href="mailto:corporates@apollohomecare.com"
                  className="text-[var(--Green-Darker,#003638)] font-poppins text-[16px] font-semibold leading-[24px]"
                >
                  corporates@apollohomecare.com
                </a>
                .
              </p>
              <p className="text-[#565656] text-center  text-[16px] font-normal leading-[24px] mb-2">
                Call{" "}
                <strong className="text-[var(--Green-Darker,#003638)] font-poppins text-[16px] font-semibold leading-[24px]">
                  1800-XXX-XXXX
                </strong>{" "}
                to schedule a consultation and explore tailored <br />{" "}
                healthcare solutions.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h3 className="text-[#000000] text-center font-poppins text-[24px] font-semibold leading-normal mb-4">
                For Doctors
              </h3>
              <p className="text-[#565656] text-center  text-[16px] font-normal leading-[24px] mb-2">
                Submit your inquiry at
                <a
                  href="mailto:doctors@apollohomecare.com"
                  className="text-[var(--Green-Darker,#003638)] font-poppins text-[16px] font-semibold leading-[24px]"
                >
                  doctors@apollohomecare.com
                </a>
                . <br />
              </p>
              <p className="text-[#565656] text-center  text-[16px] font-normal leading-[24px] mb-2">
                Connect with our Partnership Manager to discuss collaboration{" "}
                <br />
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
