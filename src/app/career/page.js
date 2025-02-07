import React from "react";
import Link from "next/link";
import Image from "next/image";
import Advance from "@/assets/images/career/Advance.png";
import Nurse from "@/assets/images/career/Nurse.png";
import Basic from "@/assets/images/career/Basic-Care.png";
import HR from "@/assets/images/career/HR.png";
import Physician from "@/assets/images/career/Homecare-Physician.png";
import Telecaller from "@/assets/images/career/Homecare-Integrator-Telecaller.png";
import Application from "@/assets/images/career/Application.png";
import Interview from "@/assets/images/career/Interview.png";

const Career = () => {
  const job = [
    {
      title: "Home Care Nurse – Advance Care",
      essentials:
        "The ability to work unsupervised. Good communication skills. Check Vitals, Oral Medicine, SC, IV, IM Injection, IV Fluids, IV cannulation through gastric tubes.",
      experience: "1-5 yrs of Bedside Clinical experience",
      qualification: "Diploma in GNM",
      preferable:
        "Insert Ryles tube suctioning process. Colostomy cases. Ability to Make Decisions and Solve Problems and to respond positively to new challenges.",
      image: Advance,
    },
    {
      title: "Home Care Nurse – Critical Care",
      essentials:
        "The ability to work unsupervised. Good communication skills. Ability to Make Decisions and Solve Problems and to respond positively to new challenges.",
      experience: "1-5 yrs of Bedside Clinical experience",
      qualification: "Diploma in GNM/B.Sc Nursing",
      preferable:
        "Oxygen Therapy – Bi-PAP/CPAP, handles ventilator patients. Tracheostomy care. Insert Ryles tube suctioning process. Colostomy cases.",
      image: Nurse,
    },
    {
      title: "Home Care Nurse – Basic Care",
      essentials:
        "The ability to work unsupervised. Good communication skills. Temperature, Pulse, Respiration, BP, SpO2 Monitoring.",
      experience: "1-5 yrs of Bedside Clinical Activities",
      qualification: "DGNM/B.Sc Nursing/ ANM",
      preferable:
        "Ability to Make Decisions and Solve Problems and to respond positively to new challenges. The ability to present a professional image at all times.",
      image: Basic,
    },
    {
      title: "Sr. HR Executive",
      location: "Bangalore / Chennai / Madurai",
      essentials: "Should be good in Excel and report generation.",
      experience: "4 yrs",
      qualification: "Graduate with MBA - HR",
      preferable:
        "Good interpersonal skills, Team Management, Nurses Hiring, Bulk Hiring, Payroll.",
      image: HR,
    },
    {
      title: "Homecare Physician",
      location: "Hyderabad / Bangalore",
      experience:
        "2-4 yrs of experience in Emergency or ICU will be added advantage",
      qualification: "MBBS",
      image: Physician,
    },
    {
      title: "Homecare Integrator ( TeleCaller )",
      location: "Hyderabad",
      experience: "1-2 yrs of experience in inbound/outbound call center",
      qualification: "Graduate with any stream",
      preferable:
        "Good interpersonal and customer service skills. Basic clinical knowledge is an advantage.",
      image: Telecaller,
    },
  ];

  return (
    <div>
      <div className="text-gray-800 container mx-auto">
        <div>
          <nav className="flex flex-col items-center gap-5 py-4">
            <h1 className="text-[32px] font-semibold text-[#031432] leading-normal text-center font-poppins">
              Careers
            </h1>
            <ul className="flex justify-center space-x-8 flex-wrap gap-3 md:flex-nowrap">
              <Link href="#legacy">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  Current Opportunities
                </li>
              </Link>
              <Link href="#leadership">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  Career in Homecare
                </li>
              </Link>
              <Link href="#vision">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  Life at Apollo HomeCare
                </li>
              </Link>
              <Link href="#pillars">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  Hiring Process
                </li>
              </Link>
            </ul>
          </nav>
        </div>

        <section className="py-16 px-6">
          <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
            Current Opportunities
          </h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {job.map((item, index) => (
              <div
                key={index}
                className="text-left bg-white rounded-[20px] shadow-[0px_34px_44px_0px_rgba(213,_219,_228,_0.44)] p-6"
              >
                <div className="w-[250px] h-[250px] mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={250}
                    height={250}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-[#007D9E] font-poppins text-[20px] font-bold leading-[22px] mt-4">
                  {item.title}
                </h3>

                {item.location && (
                  <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2">
                    <strong className="text-[#007D9E] font-lato text-[16px] font-bold leading-[24px]">
                      Location:
                    </strong>{" "}
                    {item.location}
                  </p>
                )}
                <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2">
                  <strong className="text-[#007D9E] font-lato text-[16px] font-bold leading-[24px]">
                    Essentials:
                  </strong>{" "}
                  {item.essentials}
                </p>
                <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2">
                  <strong className="text-[#007D9E] font-lato text-[16px] font-bold leading-[24px]">
                    Experience:
                  </strong>{" "}
                  {item.experience}
                </p>
                <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2">
                  <strong className="text-[#007D9E] font-lato text-[16px] font-bold leading-[24px]">
                    Qualification:
                  </strong>{" "}
                  {item.qualification}
                </p>
                {item.preferable && (
                  <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2">
                    <strong className="text-[#007D9E] font-lato text-[16px] font-bold leading-[24px]">
                      Preferable:
                    </strong>{" "}
                    {item.preferable}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="py-2 px-6 bg-white mt-9">
          <div className="py-4">
            <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
              Career in HomeCare
            </h2>
            <p className="mt-2 text-[16px] font-normal text-[#6C87AE] text-center  leading-[24px]">
              Apollo is one of the largest integrated healthcare organizations
              and a growing team. With us, you will gain unparalleled experience
              while working with <br /> leaders in the field, as you embark upon
              your journey of a promising career path.
            </p>
          </div>
          <div className="py-4">
            <h3 className="text-[24px] font-semibold text-[#031432] text-center font-poppins leading-normal">
              Benefits of Choosing Apollo Homecare
            </h3>
            <p className="mt-2 text-[16px] font-normal text-[#6C87AE] text-center  leading-[24px]">
              At Apollo, we provide our employees a secure job with salary and
              fringe benefits. Employees are also entitled to a referral bonus
              when and if they <br /> refer their friends for a job opportunity.
            </p>
          </div>

          <div>
            <h3 className="text-[24px] font-semibold text-[#031432] text-center font-poppins leading-normal">
              Purpose
            </h3>
            <p className="mt-2 text-[16px] font-normal text-[#6C87AE] text-center  leading-[24px]">
              Beyond basic productivity, we are more inspired, engaged and
              prepared for taking healthcare to homes. At Apollo HomeCare Ltd.,
              we are committed <br /> to doing whatever we can to improve the
              work experience for all our team members while simultaneously
              striving for excellence throughout.
            </p>
          </div>

          <div className="py-4">
            <h3 className="text-[24px] font-semibold text-[#031432] text-center font-poppins leading-normal">
              Journey
            </h3>
            <p className="mt-2 text-[16px] font-normal text-[#6C87AE] text-center  leading-[24px]">
              Our purpose as an organization has always been clear, to deliver
              quality, specialized and personalized healthcare at home. That
              single-minded <br /> focus means that our business is free to
              transform and adapt to the needs of the world at large.
            </p>
            <p className="mt-2 text-[16px] font-normal text-[#6C87AE] text-center  leading-[24px]">
              We aim to build a solid, worldwide Apollo HomeCare community.
            </p>
            <p className="mt-2 text-[16px] font-normal text-[#6C87AE] text-center  leading-[24px]">
              Our current team is about 800 staff nurses in 5 major cities. We
              plan to make our services pan-India soon.
            </p>
          </div>
          <p className="mt-2 text-[16px] font-normal text-[#003638] text-center  leading-[24px]">
            To apply, please send us your resume at careers@apollohomecare.com
          </p>
        </section>

        <section className="py-2 px-6 bg-white mt-9">
          <div className="py-4">
            <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
              Life at Apollo HomeCare
            </h2>
            <p className="mt-2 text-[16px] font-normal text-[#6C87AE] text-center  leading-[24px]">
              Apollo provides an encouraging working environment where we all
              learn something new everyday. We believe in supporting each other
              through all <br /> our endeavors and bringing collective change in
              the lives of our patients.
            </p>
            <p className="mt-2 text-[16px] font-normal text-[#6C87AE] text-center  leading-[24px]">
              Team  We complement each other better, by working together.
              Work-Life Balance   Flexibility to help our team strike balance
              between work and life. <br /> The People   Our employees are
              smart, adaptable and team-oriented. Our Culture   Friendly,
              high-performance oriented and energetic. The Work  <br />{" "}
              Challenging and interesting. Approachable leadership  We’re in it
              together. Reward and Recognition  Your hard work does not go
              unnoticed; we <br />
              recognize your work and identify Home Angels every month.
              Professional Growth and Career Progression Transparency to career
              tracks, integrated <br /> training and the ability to transfer
              internally and do rotations. We allow you to grow and develop
              continuously while delivering care to our patients. <br /> We
              inspire our team members to achieve their best and support them
              every step of the way.
            </p>
          </div>
        </section>

        <section className="py-16 px-6">
          <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
            Hiring Process
          </h2>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            <div className="text-center bg-white rounded-[20px] shadow-[0px_34px_44px_0px_rgba(213,_219,_228,_0.44)] p-6">
              <div className="w-[150px] h-[150px] mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  src={Application}
                  alt="hiring"
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-[#000] font-poppins text-[20px] font-bold leading-[22px] mt-4">
                1st - Application
              </h3>
              <p className="text-[#5E666B] font-lato text-[14px] font-normal leading-[24px] mt-2">
                Send in your applications/resume to the email ID provided. If
                found suitable, our hiring manager or recruiter will get in
                touch with you directly.
              </p>
            </div>

            <div className="text-center bg-white rounded-[20px] shadow-[0px_34px_44px_0px_rgba(213,_219,_228,_0.44)] p-6">
              <div className="w-[150px] h-[150px] mx-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                <Image
                  src={Interview}
                  alt="hiring"
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-[#000] font-poppins text-[20px] font-bold leading-[22px] mt-4">
                2nd - Interview Process
              </h3>
              <p className="text-[#5E666B] font-lato text-[16px] font-normal leading-[24px] mt-2">
                The interview process may vary depending on the position. Your
                interview may be one of three kinds: A panel interview,
                Telephonic/Skype call or a one-on-one interview with the hiring
                manager.
              </p>
              <p className="text-[#5E666B] font-lato text-[14px] font-normal leading-[24px] mt-2">
                The Apollo HomeCare Healthcare Ltd. recruitment team is
                available throughout to discuss next steps and expected timings.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Career;
