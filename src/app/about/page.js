import React from "react";
import Leadership from "@/components/About/Leadership";
import Pillars from "@/components/About/Pillars";
import Awards from "@/components/About/Awards";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <div className="text-gray-800 container mx-auto">
        <div>
          <nav className="flex flex-col items-center gap-5 py-4">
            <h1 className="text-[32px] font-semibold text-[#031432] leading-normal text-center font-poppins">
              ABOUT
            </h1>
            <ul className="flex justify-center space-x-8">
              <Link href="#legacy">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  Legacy
                </li>
              </Link>
              <Link href="#leadership">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  Leadership
                </li>
              </Link>
              <Link href="#vision">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  Vision
                </li>
              </Link>
              <Link href="#pillars">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  Our Pillars
                </li>
              </Link>
              <Link href="#awards">
                <li className="text-[#009A9F]  text-[16px] font-normal leading-[120%] cursor-pointer hover:underline">
                  Awards
                </li>
              </Link>
            </ul>
          </nav>
        </div>
        <section className="py-16 px-6 text-center">
          <h1 className="text-[32px] font-semibold text-[#031432] leading-normal font-poppins">
            Legacy
          </h1>
          <p className="mt-4 text-[16px]  font-normal italic text-[#3A3A3A] leading-[24px]">
            Pioneering Healthcare Excellence Since 1983
          </p>
          <p className="mt-4 text-[16px]  font-normal text-[#3A3A3A] leading-[24px] max-w-4xl mx-auto">
            Apollo Hospitals, founded by visionary Dr. Prathap C. Reddy in 1983,
            revolutionized private healthcare in India by introducing advanced
            medical services and technologies that were once only available
            internationally. With a commitment to making quality healthcare
            accessible, Apollo has grown from a single hospital in Chennai to a
            global healthcare leader, serving over 200 million patients across
            140+ countries.
          </p>
          <p className="mt-4 text-[16px] font-normal text-[#3A3A3A] leading-[24px] max-w-4xl mx-auto">
            Apollo HomeCare continues this legacy, extending professional
            medical care to the comfort of your home. Whether it&rsquo;s
            post-surgery recovery, elderly care, or chronic disease management,
            Apollo HomeCare ensures personalized, patient-centric solutions
            driven by a team of trained healthcare professionals.
          </p>
        </section>
        <Leadership />
        <section className="py-16 px-6 text-center">
          <h2 className="text-[32px] font-semibold text-[#031432] text-center font-poppins leading-normal">
            Vision
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[#3A3A3A] text-center font-poppins text-[16px] font-normal italic leading-[24px]">
            Reimagining Healthcare to Heal, Empower, and Transform Lives
          </p>
          <br />
          <p className="text-[#3A3A3A] text-center text-[16px] font-normal leading-[24px]">
            At Apollo HomeCare, our vision is to bring the expertise of
            hospital-quality care to every home. We aim to be the global leader
            in personalized homecare solutions, ensuring that everyone has
            access to exceptional medical care, regardless of where they live.
          </p>

          <p className="text-[#3A3A3A] text-center text-[16px] font-normal leading-[24px] mt-3">
            We are guided by a simple yet powerful principle: &quot;Healthcare
            should come to you.&quot; From advanced diagnostics to professional
            nursing care, we strive to make homecare a seamless and trusted
            experience for every family.
          </p>
        </section>
        <Pillars />
        <Awards />
      </div>
    </div>
  );
};

export default About;
